<script>
  import { onMount, onDestroy } from 'svelte';

  // ── Game State ──
  let canvas;
  let ctx;
  let animFrameId;
  let gameState = $state('menu'); // menu, playing, shop, gameover
  let lives = $state(10);
  let coins = $state(0);
  let wave = $state(1);
  let kills = $state(0);
  let waveTimer = 0;
  let spawnTimer = 0;
  let lastTime = 0;
  let enemies = [];
  let bullets = [];
  let particles = [];
  let floatingTexts = [];
  let mouseX = 0;
  let mouseY = 0;
  let mouseDown = false;
  let shootCooldown = 0;
  let playerY = 0;
  let snowflakes = [];

  // ── Weapons ──
  const WEAPONS = [
    { name: 'Pistol', damage: 1, fireRate: 0.4, bulletSpeed: 800, spread: 0, bulletsPerShot: 1, cost: 0, color: '#FFD700' },
    { name: 'SMG', damage: 1, fireRate: 0.12, bulletSpeed: 900, spread: 0.08, bulletsPerShot: 1, cost: 50, color: '#FF8C00' },
    { name: 'Assault Rifle', damage: 2, fireRate: 0.1, bulletSpeed: 1000, spread: 0.05, bulletsPerShot: 1, cost: 150, color: '#FF4500' },
    { name: 'Sniper', damage: 10, fireRate: 1.2, bulletSpeed: 2000, spread: 0, bulletsPerShot: 1, cost: 300, color: '#00BFFF' },
    { name: 'Machine Gun', damage: 2, fireRate: 0.06, bulletSpeed: 1100, spread: 0.1, bulletsPerShot: 1, cost: 500, color: '#FF1493' },
    { name: 'Gatling Gun', damage: 3, fireRate: 0.03, bulletSpeed: 1200, spread: 0.15, bulletsPerShot: 2, cost: 1000, color: '#FF0000' },
  ];

  let currentWeaponIndex = $state(0);
  let ownedWeapons = $state([true, false, false, false, false, false]);

  $effect(() => {
    // keep derived state in sync
  });

  // ── Enemy Types ──
  function createSeal(waveNum) {
    const hp = Math.floor(1 + waveNum * 0.5);
    return {
      type: 'seal',
      x: -40,
      y: 100 + Math.random() * 320,
      width: 50,
      height: 30,
      speed: 30 + Math.random() * 20 + waveNum * 2,
      hp,
      maxHp: hp,
      coinValue: 2 + Math.floor(waveNum * 0.5),
      color: '#F0F0F0',
      wobbleOffset: Math.random() * Math.PI * 2,
    };
  }

  function createPolarBear(waveNum) {
    const hp = Math.floor(15 + waveNum * 3);
    return {
      type: 'bear',
      x: -70,
      y: 100 + Math.random() * 300,
      width: 80,
      height: 55,
      speed: 15 + Math.random() * 8,
      hp,
      maxHp: hp,
      coinValue: 15 + Math.floor(waveNum),
      color: '#FFFEF0',
      wobbleOffset: Math.random() * Math.PI * 2,
    };
  }

  function createWolf(waveNum) {
    const hp = Math.floor(2 + waveNum * 0.3);
    return {
      type: 'wolf',
      x: -45,
      y: 100 + Math.random() * 320,
      width: 55,
      height: 32,
      speed: 80 + Math.random() * 40 + waveNum * 3,
      hp,
      maxHp: hp,
      coinValue: 5 + Math.floor(waveNum * 0.3),
      color: '#A0A0A0',
      wobbleOffset: Math.random() * Math.PI * 2,
    };
  }

  // ── Snowflakes ──
  function initSnowflakes(w, h) {
    snowflakes = [];
    for (let i = 0; i < 80; i++) {
      snowflakes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 3,
        speed: 15 + Math.random() * 30,
        drift: (Math.random() - 0.5) * 20,
      });
    }
  }

  // ── Drawing Functions ──
  function drawBackground(w, h) {
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.6);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(0.5, '#B0E0E6');
    skyGrad.addColorStop(1, '#E0F0FF');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h * 0.6);

    // Distant mountains
    ctx.fillStyle = '#D8E8F0';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.35);
    for (let x = 0; x <= w; x += 60) {
      ctx.lineTo(x, h * 0.35 - Math.sin(x * 0.008) * 40 - Math.cos(x * 0.015) * 25);
    }
    ctx.lineTo(w, h * 0.6);
    ctx.lineTo(0, h * 0.6);
    ctx.closePath();
    ctx.fill();

    // Ice/snow ground
    const iceGrad = ctx.createLinearGradient(0, h * 0.55, 0, h);
    iceGrad.addColorStop(0, '#EAF4FC');
    iceGrad.addColorStop(0.3, '#FFFFFF');
    iceGrad.addColorStop(1, '#D4E8F7');
    ctx.fillStyle = iceGrad;
    ctx.fillRect(0, h * 0.55, w, h * 0.45);

    // Ice cracks
    ctx.strokeStyle = 'rgba(180, 210, 230, 0.4)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      const sx = (i * 130 + 50) % w;
      const sy = h * 0.6 + (i * 47) % (h * 0.35);
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + 40 + i * 10, sy + 15 - i * 3);
      ctx.lineTo(sx + 80 + i * 5, sy - 5 + i * 2);
      ctx.stroke();
    }

    // Water line
    ctx.fillStyle = 'rgba(100, 160, 210, 0.15)';
    ctx.fillRect(0, h * 0.55, w, 4);
  }

  function drawSnowflakes(w, h, dt) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (const s of snowflakes) {
      s.y += s.speed * dt;
      s.x += s.drift * dt;
      if (s.y > h) { s.y = -5; s.x = Math.random() * w; }
      if (s.x < 0) s.x = w;
      if (s.x > w) s.x = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPlayer(w, h, time) {
    const px = w - 90;
    const py = playerY;
    const gunAngle = Math.atan2(mouseY - py, mouseX - px);

    // Body (parka)
    ctx.fillStyle = '#C41E3A'; // Red parka
    ctx.beginPath();
    ctx.ellipse(px, py + 10, 18, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Parka fur trim
    ctx.fillStyle = '#8B6914';
    ctx.beginPath();
    ctx.ellipse(px, py - 12, 16, 6, 0, Math.PI, Math.PI * 2);
    ctx.fill();

    // Hood
    ctx.fillStyle = '#A01830';
    ctx.beginPath();
    ctx.arc(px, py - 18, 16, 0, Math.PI * 2);
    ctx.fill();

    // Fur trim around face
    ctx.fillStyle = '#D4A440';
    ctx.beginPath();
    ctx.arc(px, py - 18, 16, -0.4, Math.PI + 0.4, true);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#D4A440';
    ctx.stroke();

    // Face
    ctx.fillStyle = '#DEB887';
    ctx.beginPath();
    ctx.arc(px, py - 17, 10, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(px - 4, py - 19, 2, 0, Math.PI * 2);
    ctx.arc(px + 4, py - 19, 2, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(px, py - 15, 4, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Legs
    ctx.fillStyle = '#654321';
    ctx.fillRect(px - 10, py + 30, 8, 15);
    ctx.fillRect(px + 2, py + 30, 8, 15);

    // Boots
    ctx.fillStyle = '#3B2410';
    ctx.fillRect(px - 12, py + 42, 12, 6);
    ctx.fillRect(px + 0, py + 42, 12, 6);

    // Arms + Gun
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(gunAngle);

    // Arm
    ctx.fillStyle = '#C41E3A';
    ctx.fillRect(0, -4, 25, 8);

    // Glove
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.arc(25, 0, 5, 0, Math.PI * 2);
    ctx.fill();

    // Gun
    const weapon = WEAPONS[currentWeaponIndex];
    ctx.fillStyle = '#333';
    const gunLen = 15 + currentWeaponIndex * 5;
    ctx.fillRect(25, -3, gunLen, 6);
    ctx.fillStyle = '#555';
    ctx.fillRect(25 + gunLen - 5, -4, 5, 8);

    // Muzzle flash when shooting
    if (shootCooldown > weapon.fireRate * 0.7) {
      ctx.fillStyle = 'rgba(255, 200, 50, 0.8)';
      ctx.beginPath();
      ctx.arc(25 + gunLen + 5, 0, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  function drawSeal(enemy, time) {
    const { x, y, width, height, hp, maxHp, wobbleOffset } = enemy;
    const wobble = Math.sin(time * 3 + wobbleOffset) * 3;

    ctx.save();
    ctx.translate(x, y + wobble);

    // Body
    ctx.fillStyle = '#F5F5F5';
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Belly
    ctx.fillStyle = '#FAFAFA';
    ctx.beginPath();
    ctx.ellipse(0, 4, width / 2.5, height / 3, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#F0F0F0';
    ctx.beginPath();
    ctx.arc(width / 2.5, -5, 12, 0, Math.PI * 2);
    ctx.fill();

    // Eyes (cute big eyes)
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(width / 2.5 + 4, -8, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(width / 2.5 + 5, -9.5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.ellipse(width / 2.5 + 10, -4, 3, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Whiskers
    ctx.strokeStyle = '#CCC';
    ctx.lineWidth = 0.5;
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(width / 2.5 + 8, -3 + i * 3);
      ctx.lineTo(width / 2.5 + 20, -5 + i * 5);
      ctx.stroke();
    }

    // Flippers
    ctx.fillStyle = '#E8E8E8';
    const flipAngle = Math.sin(time * 5 + wobbleOffset) * 0.3;
    ctx.save();
    ctx.translate(-width / 4, height / 3);
    ctx.rotate(flipAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, 8, 4, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Tail
    ctx.fillStyle = '#E8E8E8';
    ctx.save();
    ctx.translate(-width / 2, 0);
    ctx.rotate(-flipAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 5, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // HP bar
    if (hp < maxHp) {
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(-width / 2, -height / 2 - 10, width, 4);
      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(-width / 2, -height / 2 - 10, width * (hp / maxHp), 4);
    }

    ctx.restore();
  }

  function drawBear(enemy, time) {
    const { x, y, width, height, hp, maxHp, wobbleOffset } = enemy;
    const wobble = Math.sin(time * 2 + wobbleOffset) * 2;

    ctx.save();
    ctx.translate(x, y + wobble);

    // Body
    ctx.fillStyle = '#FFFFF0';
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#FFFFF0';
    ctx.beginPath();
    ctx.arc(width / 2.5, -height / 3, 18, 0, Math.PI * 2);
    ctx.fill();

    // Ears
    ctx.beginPath();
    ctx.arc(width / 2.5 - 12, -height / 3 - 15, 7, 0, Math.PI * 2);
    ctx.arc(width / 2.5 + 12, -height / 3 - 15, 7, 0, Math.PI * 2);
    ctx.fill();

    // Inner ears
    ctx.fillStyle = '#FFD4D4';
    ctx.beginPath();
    ctx.arc(width / 2.5 - 12, -height / 3 - 15, 4, 0, Math.PI * 2);
    ctx.arc(width / 2.5 + 12, -height / 3 - 15, 4, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(width / 2.5 - 6, -height / 3 - 2, 3, 0, Math.PI * 2);
    ctx.arc(width / 2.5 + 6, -height / 3 - 2, 3, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.ellipse(width / 2.5, -height / 3 + 6, 5, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.fillStyle = '#FFFFF0';
    const legAnim = Math.sin(time * 3 + wobbleOffset) * 4;
    ctx.beginPath();
    ctx.ellipse(-width / 4, height / 2 + 5 + legAnim, 8, 10, 0, 0, Math.PI * 2);
    ctx.ellipse(width / 6, height / 2 + 5 - legAnim, 8, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // HP bar
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(-width / 2, -height / 2 - 18, width, 5);
    ctx.fillStyle = '#F44336';
    ctx.fillRect(-width / 2, -height / 2 - 18, width * (hp / maxHp), 5);

    ctx.restore();
  }

  function drawWolf(enemy, time) {
    const { x, y, width, height, hp, maxHp, wobbleOffset } = enemy;
    const runCycle = Math.sin(time * 8 + wobbleOffset) * 4;

    ctx.save();
    ctx.translate(x, y + runCycle * 0.5);

    // Body
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Lighter belly
    ctx.fillStyle = '#A0A0A0';
    ctx.beginPath();
    ctx.ellipse(0, 5, width / 2.5, height / 3, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#707070';
    ctx.beginPath();
    ctx.arc(width / 2.5, -5, 13, 0, Math.PI * 2);
    ctx.fill();

    // Snout
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.ellipse(width / 2.5 + 12, -2, 8, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ears (pointy)
    ctx.fillStyle = '#606060';
    ctx.beginPath();
    ctx.moveTo(width / 2.5 - 8, -15);
    ctx.lineTo(width / 2.5 - 3, -5);
    ctx.lineTo(width / 2.5 - 13, -5);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(width / 2.5 + 8, -15);
    ctx.lineTo(width / 2.5 + 13, -5);
    ctx.lineTo(width / 2.5 + 3, -5);
    ctx.closePath();
    ctx.fill();

    // Eyes (fierce)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(width / 2.5 - 3, -7, 2.5, 0, Math.PI * 2);
    ctx.arc(width / 2.5 + 5, -7, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(width / 2.5 - 3, -7, 1.2, 0, Math.PI * 2);
    ctx.arc(width / 2.5 + 5, -7, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(width / 2.5 + 18, -2, 3, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.fillStyle = '#606060';
    ctx.fillRect(-width / 4 - 3, height / 2 - 2, 5, 12 + runCycle);
    ctx.fillRect(width / 6 - 3, height / 2 - 2, 5, 12 - runCycle);

    // Tail
    ctx.strokeStyle = '#707070';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-width / 2, -2);
    ctx.quadraticCurveTo(-width / 2 - 10, -15, -width / 2 - 5, -20);
    ctx.stroke();

    // HP bar
    if (hp < maxHp) {
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(-width / 2, -height / 2 - 12, width, 4);
      ctx.fillStyle = '#FF9800';
      ctx.fillRect(-width / 2, -height / 2 - 12, width * (hp / maxHp), 4);
    }

    ctx.restore();
  }

  function drawBullet(b) {
    ctx.fillStyle = WEAPONS[b.weaponIndex].color;
    ctx.shadowColor = WEAPONS[b.weaponIndex].color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Trail
    ctx.strokeStyle = WEAPONS[b.weaponIndex].color;
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(b.x + b.dx * 0.02, b.y + b.dy * 0.02);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 200 * dt; // gravity
      const alpha = p.life / p.maxLife;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawFloatingTexts(dt) {
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.life -= dt;
      if (ft.life <= 0) { floatingTexts.splice(i, 1); continue; }
      ft.y -= 40 * dt;
      const alpha = ft.life / ft.maxLife;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = ft.color;
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
    }
    ctx.globalAlpha = 1;
  }

  // ── Game Logic ──
  function spawnEnemy() {
    const r = Math.random();
    if (wave >= 8 && r < 0.15) {
      enemies.push(createPolarBear(wave));
    } else if (wave >= 5 && r < 0.3) {
      enemies.push(createWolf(wave));
    } else {
      enemies.push(createSeal(wave));
    }
  }

  function shoot() {
    if (shootCooldown > 0) return;
    const weapon = WEAPONS[currentWeaponIndex];
    const px = canvas.width - 90;
    const py = playerY;
    const baseAngle = Math.atan2(mouseY - py, mouseX - px);

    for (let i = 0; i < weapon.bulletsPerShot; i++) {
      const angle = baseAngle + (Math.random() - 0.5) * weapon.spread;
      bullets.push({
        x: px + Math.cos(baseAngle) * 40,
        y: py + Math.sin(baseAngle) * 40,
        dx: Math.cos(angle) * weapon.bulletSpeed,
        dy: Math.sin(angle) * weapon.bulletSpeed,
        damage: weapon.damage,
        weaponIndex: currentWeaponIndex,
      });
    }
    shootCooldown = weapon.fireRate;
  }

  function spawnHitParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 200,
        vy: (Math.random() - 0.5) * 200 - 50,
        size: 1 + Math.random() * 3,
        color,
        life: 0.3 + Math.random() * 0.4,
        maxLife: 0.7,
      });
    }
  }

  function spawnDeathParticles(x, y) {
    for (let i = 0; i < 15; i++) {
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 300,
        vy: (Math.random() - 0.5) * 300 - 80,
        size: 2 + Math.random() * 4,
        color: `hsl(${Math.random() * 60 + 180}, 30%, ${70 + Math.random() * 30}%)`,
        life: 0.5 + Math.random() * 0.5,
        maxLife: 1,
      });
    }
    // Coin sparkle
    for (let i = 0; i < 5; i++) {
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 150,
        vy: -100 - Math.random() * 100,
        size: 2 + Math.random() * 2,
        color: '#FFD700',
        life: 0.6 + Math.random() * 0.4,
        maxLife: 1,
      });
    }
  }

  function update(dt, time) {
    const w = canvas.width;
    const h = canvas.height;

    // Wave timer
    waveTimer += dt;
    if (waveTimer > 20 + wave * 5) {
      wave++;
      waveTimer = 0;
    }

    // Spawn enemies
    const spawnInterval = Math.max(0.3, 2.5 - wave * 0.15);
    spawnTimer += dt;
    if (spawnTimer >= spawnInterval) {
      spawnTimer = 0;
      const count = 1 + Math.floor(wave / 4);
      for (let i = 0; i < count; i++) {
        spawnEnemy();
      }
    }

    // Shooting
    if (mouseDown) shoot();
    shootCooldown = Math.max(0, shootCooldown - dt);

    // Player Y tracking
    const targetY = Math.max(80, Math.min(h - 60, mouseY));
    playerY += (targetY - playerY) * 5 * dt;

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.dx * dt;
      b.y += b.dy * dt;
      if (b.x < -20 || b.x > w + 20 || b.y < -20 || b.y > h + 20) {
        bullets.splice(i, 1);
        continue;
      }

      // Check collision with enemies
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (Math.abs(b.x - e.x) < e.width / 2 + 5 && Math.abs(b.y - e.y) < e.height / 2 + 5) {
          e.hp -= b.damage;
          spawnHitParticles(b.x, b.y, '#FFF', 3);
          bullets.splice(i, 1);

          if (e.hp <= 0) {
            coins += e.coinValue;
            kills++;
            spawnDeathParticles(e.x, e.y);
            floatingTexts.push({
              x: e.x, y: e.y - 20,
              text: `+${e.coinValue} coins`,
              color: '#FFD700',
              life: 1, maxLife: 1,
            });
            enemies.splice(j, 1);
          }
          break;
        }
      }
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      e.x += e.speed * dt;

      if (e.x > w + 20) {
        enemies.splice(i, 1);
        lives--;
        floatingTexts.push({
          x: w - 50, y: e.y,
          text: '-1 Life!',
          color: '#FF4444',
          life: 1.5, maxLife: 1.5,
        });
        if (lives <= 0) {
          gameState = 'gameover';
        }
      }
    }
  }

  function render(time) {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    drawBackground(w, h);

    // Draw enemies
    for (const e of enemies) {
      if (e.type === 'seal') drawSeal(e, time);
      else if (e.type === 'bear') drawBear(e, time);
      else if (e.type === 'wolf') drawWolf(e, time);
    }

    // Draw bullets
    for (const b of bullets) drawBullet(b);

    // Draw particles
    drawParticles(0.016);

    // Draw player
    drawPlayer(w, h, time);

    // Draw snowflakes
    drawSnowflakes(w, h, 0.016);

    // Draw floating texts
    drawFloatingTexts(0.016);

    // Draw crosshair
    ctx.strokeStyle = 'rgba(255, 50, 50, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX - 18, mouseY);
    ctx.lineTo(mouseX - 6, mouseY);
    ctx.moveTo(mouseX + 6, mouseY);
    ctx.lineTo(mouseX + 18, mouseY);
    ctx.moveTo(mouseX, mouseY - 18);
    ctx.lineTo(mouseX, mouseY - 6);
    ctx.moveTo(mouseX, mouseY + 6);
    ctx.lineTo(mouseX, mouseY + 18);
    ctx.stroke();
  }

  function gameLoop(timestamp) {
    if (gameState !== 'playing') {
      animFrameId = requestAnimationFrame(gameLoop);
      return;
    }

    const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
    lastTime = timestamp;
    const time = timestamp / 1000;

    update(dt, time);
    render(time);

    animFrameId = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    lives = 10;
    coins = 0;
    wave = 1;
    kills = 0;
    waveTimer = 0;
    spawnTimer = 0;
    enemies = [];
    bullets = [];
    particles = [];
    floatingTexts = [];
    currentWeaponIndex = 0;
    ownedWeapons = [true, false, false, false, false, false];
    playerY = canvas.height / 2;
    lastTime = performance.now();
    gameState = 'playing';
  }

  function buyWeapon(index) {
    if (ownedWeapons[index]) {
      currentWeaponIndex = index;
      return;
    }
    if (coins >= WEAPONS[index].cost) {
      coins -= WEAPONS[index].cost;
      ownedWeapons[index] = true;
      ownedWeapons = [...ownedWeapons]; // trigger reactivity
      currentWeaponIndex = index;
    }
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  function handleMouseDown(e) {
    if (e.button === 0) mouseDown = true;
  }

  function handleMouseUp(e) {
    if (e.button === 0) mouseDown = false;
  }

  function handleKeyDown(e) {
    if (e.key === 'b' || e.key === 'B') {
      if (gameState === 'playing') gameState = 'shop';
      else if (gameState === 'shop') gameState = 'playing';
    }
    // Number keys to switch weapons
    const num = parseInt(e.key);
    if (num >= 1 && num <= 6 && ownedWeapons[num - 1]) {
      currentWeaponIndex = num - 1;
    }
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 500;
    playerY = canvas.height / 2;
    initSnowflakes(canvas.width, canvas.height);

    // Initial background render for menu
    drawBackground(canvas.width, canvas.height);
    drawSnowflakes(canvas.width, canvas.height, 0);

    animFrameId = requestAnimationFrame(gameLoop);

    window.addEventListener('keydown', handleKeyDown);
  });

  onDestroy(() => {
    cancelAnimationFrame(animFrameId);
    window.removeEventListener('keydown', handleKeyDown);
  });
</script>

<div class="game-wrapper">
  <canvas
    bind:this={canvas}
    onmousemove={handleMouseMove}
    onmousedown={handleMouseDown}
    onmouseup={handleMouseUp}
    oncontextmenu={(e) => e.preventDefault()}
    style="cursor: none;"
  ></canvas>

  <!-- HUD -->
  {#if gameState === 'playing' || gameState === 'shop'}
    <div class="hud">
      <div class="hud-item lives">
        {#each Array(lives) as _, i}
          <span class="heart">&#10084;</span>
        {/each}
        {#each Array(Math.max(0, 10 - lives)) as _, i}
          <span class="heart lost">&#10084;</span>
        {/each}
      </div>
      <div class="hud-item coins-display">
        <span class="coin-icon">&#9733;</span> {coins}
      </div>
      <div class="hud-item wave-display">Wave {wave}</div>
      <div class="hud-item weapon-display">{WEAPONS[currentWeaponIndex].name}</div>
      <div class="hud-item kills-display">Kills: {kills}</div>
      <div class="hud-item shop-hint">[B] Shop</div>
    </div>
  {/if}

  <!-- Menu Screen -->
  {#if gameState === 'menu'}
    <div class="overlay">
      <div class="menu-box">
        <h1 class="game-title">SEAL HUNTER</h1>
        <p class="subtitle">Arctic Survival Shooter</p>
        <div class="menu-art">&#127754; &#129439; &#10052;</div>
        <button class="btn-start" onclick={startGame}>START GAME</button>
        <div class="controls-info">
          <p><strong>Controls:</strong></p>
          <p>Mouse to aim & shoot</p>
          <p>[B] Open weapon shop</p>
          <p>[1-6] Switch weapons</p>
        </div>
      </div>
    </div>
  {/if}

  <!-- Shop -->
  {#if gameState === 'shop'}
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions a11y_no_static_element_interactions -->
    <div role="button" tabindex="-1" class="overlay shop-overlay" onclick={() => gameState = 'playing'}>
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
      <div role="dialog" class="shop-box" onclick={(e) => e.stopPropagation()}>
        <h2>WEAPON SHOP</h2>
        <p class="shop-coins"><span class="coin-icon">&#9733;</span> {coins} coins</p>
        <div class="weapon-grid">
          {#each WEAPONS as weapon, i}
            <button
              class="weapon-card {ownedWeapons[i] ? 'owned' : ''} {currentWeaponIndex === i ? 'equipped' : ''}"
              onclick={() => buyWeapon(i)}
            >
              <div class="weapon-name">{weapon.name}</div>
              <div class="weapon-stats">
                <span>DMG: {weapon.damage}</span>
                <span>RPM: {Math.round(60 / weapon.fireRate)}</span>
              </div>
              {#if ownedWeapons[i]}
                {#if currentWeaponIndex === i}
                  <div class="weapon-status equipped-badge">EQUIPPED</div>
                {:else}
                  <div class="weapon-status owned-badge">EQUIP</div>
                {/if}
              {:else}
                <div class="weapon-cost" class:cant-afford={coins < weapon.cost}>
                  <span class="coin-icon">&#9733;</span> {weapon.cost}
                </div>
              {/if}
            </button>
          {/each}
        </div>
        <button class="btn-close" onclick={() => gameState = 'playing'}>CLOSE [B]</button>
      </div>
    </div>
  {/if}

  <!-- Game Over -->
  {#if gameState === 'gameover'}
    <div class="overlay">
      <div class="menu-box gameover-box">
        <h1 class="gameover-title">GAME OVER</h1>
        <div class="stats">
          <p>Waves Survived: <strong>{wave}</strong></p>
          <p>Seals Eliminated: <strong>{kills}</strong></p>
          <p>Coins Earned: <strong>{coins}</strong></p>
        </div>
        <button class="btn-start" onclick={startGame}>PLAY AGAIN</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .game-wrapper {
    position: relative;
    display: inline-block;
    border: 3px solid #2c5f7c;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 100, 150, 0.3);
  }

  canvas {
    display: block;
    background: #87CEEB;
  }

  /* HUD */
  .hud {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background: rgba(0, 20, 40, 0.6);
    backdrop-filter: blur(4px);
    color: white;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    pointer-events: none;
    z-index: 2;
  }

  .hud-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .heart {
    color: #FF4444;
    font-size: 16px;
  }

  .heart.lost {
    color: #444;
    opacity: 0.4;
  }

  .coin-icon {
    color: #FFD700;
    font-size: 18px;
  }

  .wave-display {
    color: #87CEEB;
  }

  .weapon-display {
    color: #FFA500;
  }

  .shop-hint {
    color: #AAA;
    font-size: 12px;
    pointer-events: auto;
    cursor: pointer;
  }

  /* Overlays */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 15, 30, 0.75);
    backdrop-filter: blur(4px);
    z-index: 10;
  }

  .menu-box, .shop-box {
    background: linear-gradient(135deg, #0a2540, #1a3a5c);
    border: 2px solid #4a8ab5;
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    color: white;
    font-family: 'Courier New', monospace;
    box-shadow: 0 0 40px rgba(74, 138, 181, 0.3);
  }

  .game-title {
    font-size: 48px;
    color: #87CEEB;
    text-shadow: 0 0 20px rgba(135, 206, 235, 0.5);
    margin: 0 0 8px 0;
    letter-spacing: 6px;
  }

  .subtitle {
    color: #7aa;
    margin: 0 0 20px 0;
    font-size: 14px;
    letter-spacing: 2px;
  }

  .menu-art {
    font-size: 36px;
    margin: 16px 0;
  }

  .btn-start {
    background: linear-gradient(135deg, #1a6b3c, #2a9d5c);
    color: white;
    border: 2px solid #3cb371;
    padding: 14px 48px;
    font-size: 20px;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    letter-spacing: 3px;
    transition: all 0.2s;
    margin: 16px 0;
  }

  .btn-start:hover {
    background: linear-gradient(135deg, #2a9d5c, #3cb371);
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(60, 179, 113, 0.4);
  }

  .controls-info {
    margin-top: 20px;
    color: #8ab;
    font-size: 13px;
    line-height: 1.8;
  }

  .controls-info p {
    margin: 2px 0;
  }

  /* Shop */
  .shop-box {
    padding: 24px 32px;
    min-width: 550px;
  }

  .shop-box h2 {
    color: #FFD700;
    font-size: 28px;
    margin: 0 0 8px 0;
    letter-spacing: 4px;
  }

  .shop-coins {
    font-size: 20px;
    color: #FFD700;
    margin: 0 0 16px 0;
  }

  .weapon-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }

  .weapon-card {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid #335;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s;
    color: white;
    font-family: 'Courier New', monospace;
    text-align: left;
  }

  .weapon-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #558;
  }

  .weapon-card.equipped {
    border-color: #4CAF50;
    background: rgba(76, 175, 80, 0.15);
  }

  .weapon-card.owned {
    border-color: #4a8ab5;
  }

  .weapon-name {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .weapon-stats {
    font-size: 11px;
    color: #8ab;
    display: flex;
    gap: 12px;
    margin-bottom: 6px;
  }

  .weapon-status {
    font-size: 12px;
    font-weight: bold;
  }

  .equipped-badge {
    color: #4CAF50;
  }

  .owned-badge {
    color: #4a8ab5;
  }

  .weapon-cost {
    font-size: 14px;
    color: #FFD700;
    font-weight: bold;
  }

  .weapon-cost.cant-afford {
    color: #FF4444;
  }

  .btn-close {
    background: rgba(255, 255, 255, 0.1);
    color: #AAA;
    border: 1px solid #555;
    padding: 8px 24px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-close:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  /* Game Over */
  .gameover-title {
    color: #FF4444;
    font-size: 42px;
    text-shadow: 0 0 20px rgba(255, 68, 68, 0.5);
    margin: 0 0 20px 0;
  }

  .stats {
    margin: 16px 0;
    font-size: 16px;
    line-height: 2;
  }

  .stats strong {
    color: #87CEEB;
  }
</style>
