<script lang="ts">
  import { onDestroy } from 'svelte';
  import { initializeApp } from 'firebase/app';
  import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';

  const fbApp = initializeApp({
    projectId: 'aktiecase-quiz',
    appId: '1:52134070639:web:e901510fd6600d489e009a',
    databaseURL: 'https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app',
    apiKey: 'AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4',
    authDomain: 'aktiecase-quiz.firebaseapp.com',
    messagingSenderId: '52134070639',
  });
  const db = getDatabase(fbApp);

  // ── Types ─────────────────────────────────────────────────────────────────
  type Question = { prompt: string; imageUrl?: string; flag?: string; correct: string; options: string[] };
  type SavedQuiz = { id: string; title: string; emoji: string; questions: Question[] };
  type BuilderQ = { prompt: string; imageUrl: string; options: string[]; correctIndex: number };
  type Screen =
    | 'home' | 'builder'
    | 'solo_q' | 'solo_reveal' | 'solo_final'
    | 'mp_create' | 'mp_join' | 'mp_lobby'
    | 'mp_question' | 'mp_reveal' | 'mp_final' | 'mp_error';

  // ── Capitals preset ────────────────────────────────────────────────────────
  const ALL_PAIRS = [
    { country: 'Albania', capital: 'Tirana', flag: '🇦🇱' },
    { country: 'Austria', capital: 'Vienna', flag: '🇦🇹' },
    { country: 'Belarus', capital: 'Minsk', flag: '🇧🇾' },
    { country: 'Belgium', capital: 'Brussels', flag: '🇧🇪' },
    { country: 'Bulgaria', capital: 'Sofia', flag: '🇧🇬' },
    { country: 'Croatia', capital: 'Zagreb', flag: '🇭🇷' },
    { country: 'Czech Republic', capital: 'Prague', flag: '🇨🇿' },
    { country: 'Denmark', capital: 'Copenhagen', flag: '🇩🇰' },
    { country: 'Estonia', capital: 'Tallinn', flag: '🇪🇪' },
    { country: 'Finland', capital: 'Helsinki', flag: '🇫🇮' },
    { country: 'France', capital: 'Paris', flag: '🇫🇷' },
    { country: 'Germany', capital: 'Berlin', flag: '🇩🇪' },
    { country: 'Greece', capital: 'Athens', flag: '🇬🇷' },
    { country: 'Hungary', capital: 'Budapest', flag: '🇭🇺' },
    { country: 'Iceland', capital: 'Reykjavik', flag: '🇮🇸' },
    { country: 'Ireland', capital: 'Dublin', flag: '🇮🇪' },
    { country: 'Italy', capital: 'Rome', flag: '🇮🇹' },
    { country: 'Latvia', capital: 'Riga', flag: '🇱🇻' },
    { country: 'Lithuania', capital: 'Vilnius', flag: '🇱🇹' },
    { country: 'Luxembourg', capital: 'Luxembourg City', flag: '🇱🇺' },
    { country: 'Netherlands', capital: 'Amsterdam', flag: '🇳🇱' },
    { country: 'Norway', capital: 'Oslo', flag: '🇳🇴' },
    { country: 'Poland', capital: 'Warsaw', flag: '🇵🇱' },
    { country: 'Portugal', capital: 'Lisbon', flag: '🇵🇹' },
    { country: 'Romania', capital: 'Bucharest', flag: '🇷🇴' },
    { country: 'Serbia', capital: 'Belgrade', flag: '🇷🇸' },
    { country: 'Slovakia', capital: 'Bratislava', flag: '🇸🇰' },
    { country: 'Slovenia', capital: 'Ljubljana', flag: '🇸🇮' },
    { country: 'Spain', capital: 'Madrid', flag: '🇪🇸' },
    { country: 'Sweden', capital: 'Stockholm', flag: '🇸🇪' },
    { country: 'Switzerland', capital: 'Bern', flag: '🇨🇭' },
    { country: 'Ukraine', capital: 'Kyiv', flag: '🇺🇦' },
    { country: 'United Kingdom', capital: 'London', flag: '🇬🇧' },
  ];

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function buildCapitalsQuestions(count = 15): Question[] {
    return shuffle(ALL_PAIRS).slice(0, count).map((p, i) => {
      const askCap = i % 2 === 0;
      const correct = askCap ? p.capital : p.country;
      const pool = askCap ? ALL_PAIRS.filter(x => x.capital !== p.capital).map(x => x.capital)
                          : ALL_PAIRS.filter(x => x.country !== p.country).map(x => x.country);
      return { prompt: askCap ? `What is the capital of ${p.country}?` : `${p.capital} is the capital of which country?`,
               flag: p.flag, correct, options: shuffle([correct, ...shuffle(pool).slice(0, 3)]) };
    });
  }

  // ── localStorage ───────────────────────────────────────────────────────────
  function loadQuizzes(): SavedQuiz[] {
    if (typeof localStorage === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('user_quizzes') ?? '[]'); } catch { return []; }
  }
  function persistQuizzes(qs: SavedQuiz[]) {
    if (typeof localStorage !== 'undefined') localStorage.setItem('user_quizzes', JSON.stringify(qs));
  }

  // ── Constants ─────────────────────────────────────────────────────────────
  const TIME_PER_Q = 15;
  const BTN = [{ shape: '▲', color: '#e74c3c' }, { shape: '◆', color: '#2980b9' }, { shape: '●', color: '#f39c12' }, { shape: '■', color: '#27ae60' }];
  const EMOJIS = ['🧠','🎯','🏆','🌍','📚','🎓','💡','🔥','⚡','🎮','🦁','🚀','🎵','🍕','⚽','🏛️','🎨','🦊'];

  // ── Home state ─────────────────────────────────────────────────────────────
  let screen: Screen = $state('home');
  let errorMsg = $state('');
  let savedQuizzes: SavedQuiz[] = $state(loadQuizzes());
  let selectedQuizId = $state('capitals');
  let joinCodeInput = $state('');

  const allQuizCards = $derived([
    { id: 'capitals', title: 'European Capitals', emoji: '🌍', questionCount: 15 },
    ...savedQuizzes.map(q => ({ id: q.id, title: q.title, emoji: q.emoji, questionCount: q.questions.length })),
  ]);

  function questionsForId(id: string): Question[] {
    if (id === 'capitals') return buildCapitalsQuestions();
    const q = savedQuizzes.find(q => q.id === id);
    return q ? shuffle(q.questions) : buildCapitalsQuestions();
  }

  // ── Quiz builder state ─────────────────────────────────────────────────────
  let bEditId = $state('');
  let bTitle = $state('');
  let bEmoji = $state('🧠');
  let bQuestions: BuilderQ[] = $state([]);
  let bErrors = $state('');

  function newBQ(): BuilderQ { return { prompt: '', imageUrl: '', options: ['', '', '', ''], correctIndex: 0 }; }

  function openBuilder(editId?: string) {
    if (editId) {
      const q = savedQuizzes.find(q => q.id === editId)!;
      bEditId = editId; bTitle = q.title; bEmoji = q.emoji;
      bQuestions = q.questions.map(qq => ({
        prompt: qq.prompt, imageUrl: qq.imageUrl ?? '',
        options: [...qq.options] as string[], correctIndex: qq.options.indexOf(qq.correct),
      }));
    } else {
      bEditId = ''; bTitle = ''; bEmoji = '🧠';
      bQuestions = [newBQ(), newBQ(), newBQ()];
    }
    bErrors = '';
    screen = 'builder';
  }

  function saveBuilder() {
    bErrors = '';
    if (!bTitle.trim()) { bErrors = 'Give your quiz a title.'; return; }
    const valid = bQuestions.filter(q => q.prompt.trim() && q.options.every(o => o.trim()));
    if (valid.length < 2) { bErrors = 'Add at least 2 complete questions (all 4 answers filled in).'; return; }

    const questions: Question[] = valid.map(q => ({
      prompt: q.prompt.trim(),
      ...(q.imageUrl.trim() ? { imageUrl: q.imageUrl.trim() } : {}),
      correct: q.options[q.correctIndex].trim(),
      options: q.options.map(o => o.trim()),
    }));
    const quiz: SavedQuiz = { id: bEditId || crypto.randomUUID(), title: bTitle.trim(), emoji: bEmoji, questions };
    savedQuizzes = bEditId ? savedQuizzes.map(q => q.id === bEditId ? quiz : q) : [...savedQuizzes, quiz];
    persistQuizzes(savedQuizzes);
    selectedQuizId = quiz.id;
    screen = 'home';
  }

  function deleteQuiz(id: string) {
    if (!confirm('Delete this quiz?')) return;
    savedQuizzes = savedQuizzes.filter(q => q.id !== id);
    persistQuizzes(savedQuizzes);
    if (selectedQuizId === id) selectedQuizId = 'capitals';
  }

  // ── Solo ──────────────────────────────────────────────────────────────────
  let soloQs: Question[] = $state([]);
  let soloIdx = $state(0);
  let soloScore = $state(0);
  let soloHi = $state(0);
  let soloStreak = $state(0);
  let soloChosen = $state(-1);
  let optionsVisible = $state(false);
  let optionsTimer: ReturnType<typeof setTimeout> | null = null;

  function showOptionsAfterDelay() {
    optionsVisible = false;
    if (optionsTimer) clearTimeout(optionsTimer);
    optionsTimer = setTimeout(() => { optionsVisible = true; }, 1500);
  }
  let soloTimeLeft = $state(TIME_PER_Q);
  let soloResults: { correct: boolean; points: number }[] = $state([]);
  let soloTimer: ReturnType<typeof setInterval> | null = null;
  let soloQStart = 0;
  let soloPrevScore = 0;
  let soloAnimScore = $state(0);
  let soloScoreTimer: ReturnType<typeof setInterval> | null = null;

  function animateSoloScore(from: number, to: number) {
    if (soloScoreTimer) clearInterval(soloScoreTimer);
    soloAnimScore = from;
    const t0 = Date.now();
    soloScoreTimer = setInterval(() => {
      const t = Math.min(1, (Date.now() - t0) / 1400);
      soloAnimScore = Math.round(from + (to - from) * (1 - Math.pow(1 - t, 2)));
      if (t >= 1) { clearInterval(soloScoreTimer!); soloScoreTimer = null; }
    }, 16);
  }

  function startSolo() {
    soloQs = questionsForId(selectedQuizId);
    soloIdx = 0; soloScore = 0; soloStreak = 0; soloResults = []; soloChosen = -1;
    screen = 'solo_q'; soloStartTimer();
  }

  function soloStartTimer() {
    soloChosen = -1; soloTimeLeft = TIME_PER_Q; soloQStart = Date.now(); showOptionsAfterDelay();
    if (soloTimer) clearInterval(soloTimer);
    soloTimer = setInterval(() => { soloTimeLeft--; if (soloTimeLeft <= 0) { clearInterval(soloTimer!); soloTimer = null; soloAnswer(-1); } }, 1000);
  }

  function soloAnswer(idx: number) {
    if (screen !== 'solo_q') return;
    if (soloTimer) { clearInterval(soloTimer); soloTimer = null; }
    soloChosen = idx;
    const q = soloQs[soloIdx];
    const ok = idx >= 0 && q.options[idx] === q.correct;
    const rem = Math.max(0, TIME_PER_Q - (Date.now() - soloQStart) / 1000);
    let pts = 0;
    soloPrevScore = soloScore;
    if (ok) {
      pts = 100 + Math.round((rem / TIME_PER_Q) * 900) + (soloStreak >= 3 ? 100 : soloStreak >= 2 ? 50 : 0);
      soloScore += pts; soloStreak++;
    } else { soloStreak = 0; }
    soloResults = [...soloResults, { correct: ok, points: pts }];
    animateSoloScore(soloPrevScore, soloScore);
    screen = 'solo_reveal';
    setTimeout(() => {
      if (soloIdx + 1 >= soloQs.length) { if (soloScore > soloHi) soloHi = soloScore; screen = 'solo_final'; }
      else { soloIdx++; screen = 'solo_q'; soloStartTimer(); }
    }, 3500);
  }

  const soloPct = $derived(soloTimeLeft / TIME_PER_Q);
  const soloCurQ = $derived(soloQs[soloIdx]);
  const soloCorrect = $derived(soloResults.filter(r => r.correct).length);

  // ── Multiplayer ────────────────────────────────────────────────────────────
  const playerId = typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2);
  let mpName = $state('');
  let mpCode = $state('');
  let mpIsHost = $state(false);
  type PlayerData = { name: string; score: number; streak: number };
  let mpPlayers: Record<string, PlayerData> = $state({});
  let mpQs: Question[] = $state([]);
  let mpIdx = $state(0);
  let mpStart = $state(0);
  let mpChosen = $state(-1);
  let mpTimeLeft = $state(TIME_PER_Q);
  let mpTimer: ReturnType<typeof setInterval> | null = null;
  let mpAnswers: Record<string, { choice: number; points: number; correct: boolean }> = $state({});
  let advancing = false;
  let prevPhase = '';
  let unsubRoom: (() => void) | null = null;
  let prevMpScores: Record<string, number> = {};
  type AnimPlayer = { score: number; name: string };
  let animScores: Record<string, AnimPlayer> = $state({});
  let animTimer: ReturnType<typeof setInterval> | null = null;

  function startScoreAnim() {
    if (animTimer) clearInterval(animTimer);
    animScores = Object.fromEntries(
      Object.entries(mpPlayers).map(([id, p]) => [id, { score: prevMpScores[id] ?? 0, name: p.name }])
    );
    setTimeout(() => {
      const t0 = Date.now();
      const DURATION = 2000;
      animTimer = setInterval(() => {
        const t = Math.min(1, (Date.now() - t0) / DURATION);
        const ease = 1 - Math.pow(1 - t, 2);
        animScores = Object.fromEntries(
          Object.entries(mpPlayers).map(([id, p]) => {
            const old = prevMpScores[id] ?? 0;
            return [id, { score: Math.round(old + (p.score - old) * ease), name: p.name }];
          })
        );
        if (t >= 1) { clearInterval(animTimer!); animTimer = null; }
      }, 16);
    }, 700);
  }

  const animSorted = $derived(
    Object.entries(animScores).sort(([, a], [, b]) => b.score - a.score)
  );

  function genCode() {
    const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    return Array.from({ length: 4 }, () => c[Math.floor(Math.random() * c.length)]).join('');
  }

  async function mpCreate() {
    if (!mpName.trim()) return;
    const code = genCode();
    const qs = questionsForId(selectedQuizId);
    mpCode = code; mpIsHost = true;
    await set(ref(db, `rooms/${code}`), {
      phase: 'lobby', hostId: playerId, qIndex: 0, startTime: 0, questions: qs,
      players: { [playerId]: { name: mpName.trim(), score: 0, streak: 0 } },
    });
    subscribeRoom(code); screen = 'mp_lobby';
  }

  async function mpJoin() {
    if (!mpName.trim() || !joinCodeInput.trim()) return;
    const code = joinCodeInput.toUpperCase().replace(/[^A-Z]/g, '');
    const snap = await get(ref(db, `rooms/${code}`));
    if (!snap.exists()) { errorMsg = 'Room not found.'; return; }
    if (snap.val().phase !== 'lobby') { errorMsg = 'Game already started.'; return; }
    mpCode = code; mpIsHost = false;
    await set(ref(db, `rooms/${code}/players/${playerId}`), { name: mpName.trim(), score: 0, streak: 0 });
    subscribeRoom(code); screen = 'mp_lobby';
  }

  function subscribeRoom(code: string) {
    prevPhase = '';
    const roomRef = ref(db, `rooms/${code}`);
    unsubRoom = onValue(roomRef, (snap) => {
      if (!snap.exists()) { screen = 'mp_error'; errorMsg = 'Room was closed.'; return; }
      const d = snap.val();
      mpPlayers = d.players ?? {};
      if (!mpQs.length) mpQs = d.questions ?? [];
      const phase: string = d.phase ?? 'lobby';
      const qi: number = d.qIndex ?? 0;

      if (phase === 'question' && mpIsHost && !advancing) {
        const ans = d.answers?.[qi] ?? {};
        if (Object.keys(ans).length >= Object.keys(mpPlayers).length) {
          advancing = true; update(ref(db, `rooms/${code}`), { phase: 'reveal' });
        }
      }

      if (phase === 'question' && (prevPhase !== 'question' || qi !== mpIdx)) {
        prevMpScores = Object.fromEntries(Object.entries(mpPlayers).map(([id, p]) => [id, p.score]));
        mpIdx = qi; mpStart = d.startTime ?? Date.now();
        mpChosen = -1; mpAnswers = {}; mpStartTimer(mpStart); showOptionsAfterDelay(); screen = 'mp_question';
      } else if (phase === 'reveal' && prevPhase !== 'reveal') {
        mpAnswers = d.answers?.[qi] ?? {}; mpIdx = qi; mpStopTimer();
        startScoreAnim();
        screen = 'mp_reveal';
        if (mpIsHost) {
          const captured = qi;
          setTimeout(async () => {
            await update(ref(db, `rooms/${code}`), captured + 1 >= mpQs.length
              ? { phase: 'final' }
              : { phase: 'question', qIndex: captured + 1, startTime: Date.now() });
            advancing = false;
          }, 6000);
        }
      } else if (phase === 'final' && prevPhase !== 'final') {
        mpStopTimer(); screen = 'mp_final';
      } else if (phase === 'lobby' && prevPhase !== 'lobby' && prevPhase !== '') {
        mpQs = d.questions ?? []; mpIdx = 0; mpChosen = -1; advancing = false; screen = 'mp_lobby';
      }
      prevPhase = phase;
    });
  }

  function mpStartTimer(st: number) {
    mpStopTimer();
    const tick = () => {
      mpTimeLeft = Math.max(0, TIME_PER_Q - (Date.now() - st) / 1000);
      if (mpTimeLeft <= 0) {
        mpStopTimer(); if (mpChosen < 0) mpAnswer(-1);
        if (mpIsHost && !advancing) { advancing = true; update(ref(db, `rooms/${mpCode}`), { phase: 'reveal' }); }
      }
    };
    tick(); mpTimer = setInterval(tick, 150);
  }
  function mpStopTimer() { if (mpTimer) { clearInterval(mpTimer); mpTimer = null; } }

  async function mpStartGame() {
    advancing = false; prevPhase = 'lobby';
    await update(ref(db, `rooms/${mpCode}`), { phase: 'question', qIndex: 0, startTime: Date.now() });
  }

  async function mpAnswer(idx: number) {
    if (mpChosen >= 0 || screen !== 'mp_question') return;
    mpChosen = idx;
    const q = mpQs[mpIdx];
    const elapsed = Date.now() - mpStart;
    const ok = idx >= 0 && q.options[idx] === q.correct;
    const me = mpPlayers[playerId] ?? { score: 0, streak: 0 };
    let pts = 0, streak = me.streak ?? 0;
    if (ok) { pts = 100 + Math.round(Math.max(0, TIME_PER_Q - elapsed / 1000) / TIME_PER_Q * 900) + (streak >= 3 ? 100 : streak >= 2 ? 50 : 0); streak++; } else { streak = 0; }
    await update(ref(db, `rooms/${mpCode}`), {
      [`answers/${mpIdx}/${playerId}`]: { choice: idx, timeMs: elapsed, points: pts, correct: ok },
      [`players/${playerId}/score`]: (me.score ?? 0) + pts,
      [`players/${playerId}/streak`]: streak,
    });
    if (mpIsHost && !advancing) {
      const snap = await get(ref(db, `rooms/${mpCode}/answers/${mpIdx}`));
      if (Object.keys(snap.val() ?? {}).length >= Object.keys(mpPlayers).length) {
        advancing = true; await update(ref(db, `rooms/${mpCode}`), { phase: 'reveal' });
      }
    }
  }

  async function mpPlayAgain() {
    const qs = questionsForId(selectedQuizId);
    await update(ref(db, `rooms/${mpCode}`), {
      phase: 'lobby', qIndex: 0, startTime: 0, questions: qs, answers: null,
      players: Object.fromEntries(Object.entries(mpPlayers).map(([id, p]) => [id, { ...p, score: 0, streak: 0 }])),
    });
  }

  const mpPct = $derived(mpTimeLeft / TIME_PER_Q);
  const mpCurQ = $derived(mpQs[mpIdx]);
  const mpSorted = $derived(Object.entries(mpPlayers).sort(([, a], [, b]) => b.score - a.score));
  const myMpAnswer = $derived(mpAnswers[playerId]);

  function medal(i: number) { return ['🥇', '🥈', '🥉'][i] ?? `${i + 1}.`; }

  // ── Confetti ───────────────────────────────────────────────────────────────
  let confettiCanvas: HTMLCanvasElement | undefined = $state();
  let confettiAnimId = 0;

  function launchConfetti() {
    if (!confettiCanvas) return;
    cancelAnimationFrame(confettiAnimId);
    const canvas = confettiCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d')!;
    const COLORS = ['#e74c3c','#3498db','#f1c40f','#2ecc71','#9b59b6','#e67e22','#ff6b6b','#1abc9c','#fff'];
    type Piece = { x:number; y:number; vx:number; vy:number; rot:number; rv:number; color:string; w:number; h:number };
    const pieces: Piece[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 300,
      vx: (Math.random() - 0.5) * 4,
      vy: 1.5 + Math.random() * 3.5,
      rot: Math.random() * Math.PI * 2,
      rv: (Math.random() - 0.5) * 0.18,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: 7 + Math.random() * 9,
      h: 3 + Math.random() * 5,
    }));
    const t0 = Date.now();
    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - t0;
      const alpha = Math.max(0, 1 - (elapsed - 3000) / 2500);
      if (alpha <= 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
      for (const p of pieces) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.rot += p.rv;
        if (p.y > canvas.height + 20) { p.y = -10; p.x = Math.random() * canvas.width; p.vy = 1.5 + Math.random() * 2; }
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      confettiAnimId = requestAnimationFrame(frame);
    }
    confettiAnimId = requestAnimationFrame(frame);
  }

  $effect(() => {
    if (screen === 'solo_final' || screen === 'mp_final') {
      setTimeout(launchConfetti, 100);
    } else {
      cancelAnimationFrame(confettiAnimId);
    }
  });

  onDestroy(() => { if (soloTimer) clearInterval(soloTimer); if (soloScoreTimer) clearInterval(soloScoreTimer); mpStopTimer(); if (animTimer) clearInterval(animTimer); if (optionsTimer) clearTimeout(optionsTimer); cancelAnimationFrame(confettiAnimId); unsubRoom?.(); });
</script>

<svelte:head><title>Quiz</title></svelte:head>

<canvas bind:this={confettiCanvas} class="confetti-canvas"></canvas>

<div class="app">

  <!-- ── HOME ─────────────────────────────────────── -->
  {#if screen === 'home'}
    <div class="home">
      <div class="home-header">
        <h1>Quiz</h1>
        <a href="../../arcade.html" class="back-link">← Arcade</a>
      </div>

      <p class="section-label">Select a quiz</p>
      <div class="quiz-grid">
        {#each allQuizCards as q}
          <button
            class="quiz-card"
            class:selected={selectedQuizId === q.id}
            onclick={() => selectedQuizId = q.id}
          >
            <span class="qc-emoji">{q.emoji}</span>
            <span class="qc-title">{q.title}</span>
            <span class="qc-count">{q.questionCount} questions</span>
            {#if q.id !== 'capitals'}
              <div class="qc-actions">
                <span role="button" tabindex="0" onclick={(e) => { e.stopPropagation(); openBuilder(q.id); }} onkeydown={(e)=>e.key==='Enter'&&openBuilder(q.id)} title="Edit">✏️</span>
                <span role="button" tabindex="0" onclick={(e) => { e.stopPropagation(); deleteQuiz(q.id); }} onkeydown={(e)=>e.key==='Enter'&&deleteQuiz(q.id)} title="Delete">🗑️</span>
              </div>
            {/if}
          </button>
        {/each}
        <button class="quiz-card new-card" onclick={() => openBuilder()}>
          <span class="qc-emoji">＋</span>
          <span class="qc-title">Create Quiz</span>
        </button>
      </div>

      <div class="play-row">
        <button class="btn-primary" onclick={startSolo}>Solo Play</button>
        <button class="btn-secondary" onclick={() => { errorMsg = ''; screen = 'mp_create'; }}>Create Room</button>
      </div>

      <div class="join-row">
        <input class="text-input code-input" bind:value={joinCodeInput} placeholder="Room code" maxlength={4} />
        <button class="btn-join" onclick={() => { errorMsg = ''; screen = 'mp_join'; }} disabled={!joinCodeInput.trim()}>Join Room</button>
      </div>
      {#if errorMsg}<p class="err">{errorMsg}</p>{/if}
    </div>

  <!-- ── QUIZ BUILDER ──────────────────────────────── -->
  {:else if screen === 'builder'}
    <div class="builder">
      <div class="builder-header">
        <button class="btn-ghost" onclick={() => screen = 'home'}>← Back</button>
        <h2>{bEditId ? 'Edit Quiz' : 'New Quiz'}</h2>
        <button class="btn-save" onclick={saveBuilder}>Save</button>
      </div>

      <div class="builder-meta">
        <div class="emoji-picker">
          {#each EMOJIS as e}
            <button class="ep-btn" class:ep-selected={bEmoji === e} onclick={() => bEmoji = e}>{e}</button>
          {/each}
        </div>
        <input class="text-input" bind:value={bTitle} placeholder="Quiz title…" />
      </div>

      {#if bErrors}<p class="err">{bErrors}</p>{/if}

      <div class="q-list">
        {#each bQuestions as bq, qi}
          <div class="bq-card">
            <div class="bq-top">
              <span class="bq-num">Q{qi + 1}</span>
              <button class="bq-del" onclick={() => bQuestions = bQuestions.filter((_, i) => i !== qi)} disabled={bQuestions.length <= 1}>✕</button>
            </div>

            <textarea class="text-input bq-prompt" bind:value={bq.prompt} placeholder="Question…" rows={2}></textarea>

            <div class="img-field">
              <input class="text-input img-url" bind:value={bq.imageUrl} placeholder="Image URL (optional)" />
              {#if bq.imageUrl.trim()}
                <img src={bq.imageUrl} alt="" class="img-preview" onerror={(e) => { (e.target as HTMLImageElement).style.display='none'; }} onload={(e) => { (e.target as HTMLImageElement).style.display='block'; }} />
              {/if}
            </div>

            <p class="bq-hint">Click an answer to mark it as correct ✓</p>
            <div class="bq-options">
              {#each bq.options as _, oi}
                <div class="bq-opt-row" class:bq-correct={bq.correctIndex === oi}>
                  <button class="bq-mark" onclick={() => bq.correctIndex = oi} title="Mark as correct">
                    {bq.correctIndex === oi ? '✓' : BTN[oi].shape}
                  </button>
                  <input
                    class="text-input bq-opt-input"
                    bind:value={bq.options[oi]}
                    placeholder={`Answer ${oi + 1}`}
                    onclick={() => bq.correctIndex = oi}
                  />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <button class="btn-add-q" onclick={() => bQuestions = [...bQuestions, newBQ()]}>+ Add Question</button>
    </div>

  <!-- ── MP CREATE ─────────────────────────────────── -->
  {:else if screen === 'mp_create'}
    <div class="center-col">
      <h2>Create Room</h2>
      <p class="sub">Playing: {allQuizCards.find(q => q.id === selectedQuizId)?.emoji} {allQuizCards.find(q => q.id === selectedQuizId)?.title}</p>
      <input class="text-input" bind:value={mpName} placeholder="Your name" maxlength={20} />
      {#if errorMsg}<p class="err">{errorMsg}</p>{/if}
      <button class="btn-primary" onclick={mpCreate} disabled={!mpName.trim()}>Create</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Back</button>
    </div>

  <!-- ── MP JOIN ───────────────────────────────────── -->
  {:else if screen === 'mp_join'}
    <div class="center-col">
      <h2>Join Room</h2>
      <input class="text-input code-input" bind:value={joinCodeInput} placeholder="Room code" maxlength={4} />
      <input class="text-input" bind:value={mpName} placeholder="Your name" maxlength={20} />
      {#if errorMsg}<p class="err">{errorMsg}</p>{/if}
      <button class="btn-primary" onclick={mpJoin} disabled={!mpName.trim() || !joinCodeInput.trim()}>Join</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Back</button>
    </div>

  <!-- ── MP LOBBY ──────────────────────────────────── -->
  {:else if screen === 'mp_lobby'}
    <div class="center-col">
      <p class="sub">Room code</p>
      <div class="room-code">{mpCode}</div>
      <p class="sub">Share this code with friends</p>
      <div class="player-list">
        {#each Object.entries(mpPlayers) as [id, p]}
          <div class="player-row">
            <span class="dot" class:dot-me={id === playerId}></span>
            {p.name}{id === playerId ? ' (you)' : ''}
          </div>
        {/each}
      </div>
      {#if mpIsHost}
        <button class="btn-primary" onclick={mpStartGame}>Start ({Object.keys(mpPlayers).length} player{Object.keys(mpPlayers).length !== 1 ? 's' : ''})</button>
      {:else}
        <p class="sub">Waiting for host to start…</p>
      {/if}
      <button class="btn-ghost" onclick={() => { unsubRoom?.(); screen = 'home'; }}>← Leave</button>
    </div>

  <!-- ── QUESTION (solo + mp) ──────────────────────── -->
  {:else if (screen === 'solo_q' || screen === 'solo_reveal') && soloCurQ}
    {@const pct = soloPct}
    {@const q = soloCurQ}
    <div class="quiz-screen">
      <div class="hud">
        <span class="q-num">{soloIdx + 1} / {soloQs.length}</span>
        <span class="score-pill">⭐ {soloScore.toLocaleString()}</span>
        {#if soloStreak >= 2}<span class="streak">🔥 {soloStreak}</span>{/if}
      </div>
      <div class="timer-bar"><div class="timer-fill" style="width:{pct*100}%;background:{pct>.4?'#2ecc71':pct>.2?'#f39c12':'#e74c3c'}"></div></div>
      <div class="timer-num" style="color:{pct>.4?'#2ecc71':pct>.2?'#f39c12':'#e74c3c'}">{soloTimeLeft}</div>
      <div class="q-card">
        {#if q.imageUrl}<img src={q.imageUrl} alt="" class="q-img" onerror={(e)=>(e.target as HTMLImageElement).style.display='none'} />{/if}
        {#if q.flag}<div class="flag">{q.flag}</div>{/if}
        <p class="prompt">{q.prompt}</p>
      </div>
      <div class="options">
        {#each q.options as opt, i}
          {@const correct = opt === q.correct}
          {@const chosen = i === soloChosen}
          <button class="opt"
            class:revealed={screen==='solo_reveal'}
            class:opt-correct={screen==='solo_reveal' && correct}
            class:opt-wrong={screen==='solo_reveal' && chosen && !correct}
            class:opt-dim={screen==='solo_reveal' && !chosen && !correct}
            class:opts-hidden={!optionsVisible && screen==='solo_q'}
            style="--c:{BTN[i].color};--delay:{i*80}ms"
            onclick={() => soloAnswer(i)}
            disabled={screen === 'solo_reveal' || !optionsVisible}
          >
            <span class="shape">{screen==='solo_reveal'?(correct?'✓':chosen?'✗':BTN[i].shape):BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>
      {#if screen === 'solo_reveal'}
        {@const res = soloResults[soloIdx]}
        <div class="banner" class:banner-ok={res?.correct} class:banner-err={!res?.correct}>
          {res?.correct ? `🎉 Correct!` : soloChosen===-1 ? `⏱ Time's up! → ${q.correct}` : `❌ Wrong! → ${q.correct}`}
        </div>
        <div class="score-reveal-card">
          <div class="src-row">
            <span class="src-label">Din poäng</span>
            {#if res?.points > 0}<span class="src-gain">+{res.points}{soloStreak > 1 ? ' 🔥' : ''}</span>{/if}
          </div>
          <div class="src-score">{soloAnimScore.toLocaleString()}</div>
          <div class="src-bar-track">
            <div class="src-bar" style="width:{Math.min(100, (soloAnimScore / (soloQs.length * 1000)) * 100)}%"></div>
          </div>
          <div class="src-meta">{soloIdx + 1} / {soloQs.length} frågor</div>
        </div>
      {/if}
    </div>

  <!-- ── SOLO FINAL ────────────────────────────────── -->
  {:else if screen === 'solo_final'}
    <div class="center-col">
      <div class="big-emoji" style="animation:bounce .5s ease">{soloScore >= soloQs.length*900?'🥇':soloScore>=soloQs.length*600?'🥈':soloScore>=soloQs.length*300?'🥉':'🎯'}</div>
      <h2>Done!</h2>
      <div class="final-score">{soloScore.toLocaleString()}</div>
      <p class="sub">{soloCorrect}/{soloQs.length} correct</p>
      <button class="btn-primary" onclick={startSolo}>Play Again</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Home</button>
    </div>

  <!-- ── MP QUESTION ───────────────────────────────── -->
  {:else if (screen === 'mp_question' || screen === 'mp_reveal') && mpCurQ}
    {@const pct = mpPct}
    {@const q = mpCurQ}
    <div class="quiz-screen">
      <div class="hud">
        <span class="q-num">{mpIdx + 1} / {mpQs.length}</span>
        <span class="score-pill">⭐ {(mpPlayers[playerId]?.score ?? 0).toLocaleString()}</span>
        <span class="q-num">👥 {Object.keys(mpAnswers).length}/{Object.keys(mpPlayers).length}</span>
      </div>
      <div class="timer-bar"><div class="timer-fill" style="width:{pct*100}%;background:{pct>.4?'#2ecc71':pct>.2?'#f39c12':'#e74c3c'}"></div></div>
      <div class="timer-num" style="color:{pct>.4?'#2ecc71':pct>.2?'#f39c12':'#e74c3c'}">{Math.ceil(mpTimeLeft)}</div>
      <div class="q-card">
        {#if q.imageUrl}<img src={q.imageUrl} alt="" class="q-img" onerror={(e)=>(e.target as HTMLImageElement).style.display='none'} />{/if}
        {#if q.flag}<div class="flag">{q.flag}</div>{/if}
        <p class="prompt">{q.prompt}</p>
      </div>
      <div class="options">
        {#each q.options as opt, i}
          {@const correct = opt === q.correct}
          {@const chosen = i === mpChosen}
          <button class="opt"
            class:revealed={screen==='mp_reveal'}
            class:opt-correct={screen==='mp_reveal' && correct}
            class:opt-wrong={screen==='mp_reveal' && chosen && !correct}
            class:opt-dim={screen==='mp_reveal' && !chosen && !correct}
            class:opts-hidden={!optionsVisible && screen==='mp_question'}
            style="--c:{BTN[i].color};--delay:{i*80}ms"
            onclick={() => mpAnswer(i)}
            disabled={screen==='mp_reveal' || mpChosen >= 0 || !optionsVisible}
          >
            <span class="shape">{screen==='mp_reveal'?(correct?'✓':chosen?'✗':BTN[i].shape):BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>
      {#if screen === 'mp_question' && mpChosen >= 0}
        <p class="sub" style="text-align:center">Locked in — waiting for others…</p>
      {/if}
      {#if screen === 'mp_reveal'}
        <div class="banner" class:banner-ok={myMpAnswer?.correct} class:banner-err={!myMpAnswer?.correct}>
          {myMpAnswer?.correct ? `🎉 +${myMpAnswer.points} pts` : mpChosen===-1 ? `⏱ Time's up! → ${q.correct}` : `❌ Wrong! → ${q.correct}`}
        </div>
        <!-- Animated top-3 leaderboard -->
        {#if animSorted.length > 0}
          {@const topScore = animSorted[0]?.[1]?.score || 1}
          <div class="anim-lb">
            {#each animSorted.slice(0, 3) as [id, d], i}
              {@const gained = (mpPlayers[id]?.score ?? 0) - (prevMpScores[id] ?? 0)}
              <div class="alb-row" class:alb-me={id === playerId}>
                <span class="alb-rank">{medal(i)}</span>
                <div class="alb-middle">
                  <div class="alb-name-row">
                    <span class="alb-name">{d.name}</span>
                    {#if gained > 0}<span class="alb-gain">+{gained}</span>{/if}
                  </div>
                  <div class="alb-bar-track">
                    <div class="alb-bar" style="width:{Math.max(4, (d.score / topScore) * 100)}%"></div>
                  </div>
                </div>
                <span class="alb-score">{d.score.toLocaleString()}</span>
              </div>
            {/each}
          </div>
        {/if}
        <!-- Remaining players -->
        {#if mpSorted.length > 3}
          <div class="leaderboard" style="margin-top:0">
            {#each mpSorted.slice(3) as [id, p], i}
              <div class="lb-row" class:lb-me={id === playerId}>
                <span class="lb-rank">{i + 4}.</span>
                <span class="lb-name">{p.name}</span>
                <span class="lb-score">{p.score.toLocaleString()}</span>
              </div>
            {/each}
          </div>
        {/if}
      {/if}
    </div>

  <!-- ── MP FINAL ──────────────────────────────────── -->
  {:else if screen === 'mp_final'}
    <div class="center-col">
      <div class="big-emoji">🏆</div>
      <h2>Final Results</h2>
      <div class="leaderboard" style="width:100%;max-width:480px">
        {#each mpSorted as [id, p], i}
          <div class="lb-row" class:lb-me={id === playerId} class:lb-gold={i===0}>
            <span class="lb-rank">{medal(i)}</span>
            <span class="lb-name">{p.name}{id===playerId?' (you)':''}</span>
            <span class="lb-score">{p.score.toLocaleString()}</span>
          </div>
        {/each}
      </div>
      {#if mpIsHost}
        <button class="btn-primary" onclick={mpPlayAgain}>Play Again</button>
      {:else}
        <p class="sub">Waiting for host…</p>
      {/if}
      <button class="btn-ghost" onclick={() => { unsubRoom?.(); screen = 'home'; }}>← Home</button>
    </div>

  {:else if screen === 'mp_error'}
    <div class="center-col">
      <p class="err">{errorMsg}</p>
      <button class="btn-primary" onclick={() => screen = 'home'}>← Home</button>
    </div>
  {/if}
</div>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) { background: #1a1a2e; font-family: 'Segoe UI', system-ui, sans-serif; min-height: 100vh; color: #fff; }

  .confetti-canvas { position: fixed; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999; }
  .app { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px; }

  /* ── Shared ── */
  .center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 440px; text-align: center; }
  h1 { font-size: clamp(1.8rem,5vw,2.6rem); font-weight: 900; }
  h2 { font-size: 1.5rem; font-weight: 800; }
  .sub { color: #888; font-size: .9rem; }
  .err { color: #ff6b6b; font-size: .9rem; }
  .back-link { color: #555; text-decoration: none; font-size: .85rem; }
  .back-link:hover { color: #aaa; }
  .section-label { color: #666; font-size: .8rem; text-transform: uppercase; letter-spacing: 2px; align-self: flex-start; }
  .big-emoji { font-size: 60px; }
  @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  .final-score { font-size: clamp(2.5rem,8vw,4rem); font-weight: 900; color: #f1c40f; }

  /* ── Inputs ── */
  .text-input {
    width: 100%; background: #16213e; border: 1px solid rgba(255,255,255,.12);
    border-radius: 10px; padding: 12px 14px; color: #fff; font-size: .95rem; outline: none;
    transition: border-color .15s; font-family: inherit;
  }
  .text-input:focus { border-color: #9b59b6; }
  .text-input::placeholder { color: #444; }
  .code-input { font-size: 1.3rem; font-weight: 700; letter-spacing: 6px; text-transform: uppercase; text-align: center; }

  /* ── Buttons ── */
  .btn-primary {
    background: #9b59b6; color: #fff; border: none; border-radius: 50px;
    padding: 13px 44px; font-size: 1rem; font-weight: 700; cursor: pointer;
    box-shadow: 0 4px 16px rgba(155,89,182,.4); transition: transform .1s, background .15s; width: 100%;
  }
  .btn-primary:hover:not([disabled]) { background: #8e44ad; transform: scale(1.02); }
  .btn-primary[disabled] { opacity: .5; cursor: default; }
  .btn-secondary {
    flex: 1; background: #16213e; color: #fff; border: 1px solid rgba(255,255,255,.15);
    border-radius: 10px; padding: 12px 16px; font-size: .95rem; font-weight: 600; cursor: pointer; transition: background .15s;
  }
  .btn-secondary:hover { background: #1e2d50; }
  .btn-ghost { background: none; border: none; color: #555; font-size: .9rem; cursor: pointer; padding: 4px; }
  .btn-ghost:hover { color: #aaa; }
  .btn-join {
    background: #2980b9; color: #fff; border: none; border-radius: 10px;
    padding: 12px 20px; font-size: .95rem; font-weight: 600; cursor: pointer; white-space: nowrap; transition: background .15s;
  }
  .btn-join:hover:not([disabled]) { background: #3498db; }
  .btn-join[disabled] { opacity: .4; cursor: default; }
  .btn-save {
    background: #27ae60; color: #fff; border: none; border-radius: 20px;
    padding: 8px 22px; font-size: .9rem; font-weight: 700; cursor: pointer; transition: background .15s;
  }
  .btn-save:hover { background: #2ecc71; }
  .btn-add-q {
    background: rgba(155,89,182,.15); color: #9b59b6; border: 1px dashed rgba(155,89,182,.4);
    border-radius: 10px; padding: 12px; font-size: .95rem; font-weight: 600; cursor: pointer;
    width: 100%; max-width: 680px; transition: background .15s;
  }
  .btn-add-q:hover { background: rgba(155,89,182,.25); }

  /* ── Home ── */
  .home { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 16px; }
  .home-header { display: flex; align-items: center; justify-content: space-between; }
  .quiz-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
  .quiz-card {
    background: #16213e; border: 2px solid transparent; border-radius: 14px;
    padding: 16px 12px; cursor: pointer; display: flex; flex-direction: column;
    align-items: center; gap: 6px; text-align: center; transition: border-color .15s, background .15s; position: relative;
    color: #fff;
  }
  .quiz-card:hover { background: #1e2d50; }
  .quiz-card.selected { border-color: #9b59b6; background: rgba(155,89,182,.12); }
  .new-card { border-style: dashed; border-color: rgba(255,255,255,.15); }
  .new-card:hover { border-color: #9b59b6; }
  .qc-emoji { font-size: 2rem; }
  .qc-title { font-weight: 700; font-size: .9rem; }
  .qc-count { font-size: .75rem; color: #666; }
  .qc-actions { position: absolute; top: 6px; right: 6px; display: flex; gap: 2px; }
  .qc-actions button { background: none; border: none; cursor: pointer; font-size: .85rem; padding: 2px; opacity: .5; transition: opacity .15s; }
  .qc-actions button:hover { opacity: 1; }
  .play-row { display: flex; gap: 10px; }
  .join-row { display: flex; gap: 10px; }
  .join-row .text-input { max-width: 160px; }

  /* ── Builder ── */
  .builder { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 16px; padding-bottom: 40px; }
  .builder-header { display: flex; align-items: center; justify-content: space-between; }
  .builder-meta { display: flex; flex-direction: column; gap: 10px; }
  .emoji-picker { display: flex; flex-wrap: wrap; gap: 6px; }
  .ep-btn { background: none; border: 2px solid transparent; border-radius: 8px; padding: 4px; font-size: 1.3rem; cursor: pointer; transition: border-color .1s; }
  .ep-btn.ep-selected { border-color: #9b59b6; background: rgba(155,89,182,.15); }
  .q-list { display: flex; flex-direction: column; gap: 16px; }
  .bq-card { background: #16213e; border-radius: 14px; padding: 16px; border: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; gap: 10px; }
  .bq-top { display: flex; justify-content: space-between; align-items: center; }
  .bq-num { font-weight: 700; color: #9b59b6; }
  .bq-del { background: none; border: none; color: #666; cursor: pointer; font-size: 1rem; padding: 2px 6px; border-radius: 6px; }
  .bq-del:hover:not([disabled]) { color: #ff6b6b; background: rgba(255,107,107,.1); }
  .bq-del[disabled] { opacity: .3; cursor: default; }
  .bq-prompt { resize: vertical; min-height: 60px; }
  .img-field { display: flex; flex-direction: column; gap: 8px; }
  .img-url { font-size: .85rem; }
  .img-preview { width: 100%; max-height: 180px; object-fit: cover; border-radius: 8px; display: none; border: 1px solid rgba(255,255,255,.1); }
  .bq-hint { font-size: .75rem; color: #555; }
  .bq-options { display: flex; flex-direction: column; gap: 8px; }
  .bq-opt-row { display: flex; align-items: center; gap: 8px; }
  .bq-opt-row.bq-correct .bq-mark { background: #27ae60; color: #fff; }
  .bq-opt-row.bq-correct .bq-opt-input { border-color: #27ae60; }
  .bq-mark {
    width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px;
    background: #0d1b2a; border: 1px solid rgba(255,255,255,.15); color: #fff;
    cursor: pointer; font-size: .9rem; display: flex; align-items: center; justify-content: center; transition: background .15s;
  }
  .bq-opt-input { flex: 1; padding: 8px 12px; }

  /* ── Lobby ── */
  .room-code { font-size: 3.5rem; font-weight: 900; letter-spacing: 10px; color: #f1c40f; background: #16213e; padding: 14px 28px; border-radius: 14px; }
  .player-list { width: 100%; background: #16213e; border-radius: 12px; border: 1px solid rgba(255,255,255,.07); }
  .player-row { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,.05); font-size: .9rem; }
  .player-row:last-child { border-bottom: none; }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #444; flex-shrink: 0; }
  .dot.dot-me { background: #9b59b6; }

  /* ── Quiz ── */
  .quiz-screen { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 12px; position: relative; }
  .hud { display: flex; align-items: center; gap: 10px; font-size: .85rem; }
  .q-num { color: #666; }
  .score-pill { font-weight: 700; color: #f1c40f; margin-left: auto; }
  .streak { font-weight: 700; color: #e74c3c; }
  .timer-bar { height: 7px; background: rgba(255,255,255,.08); border-radius: 4px; overflow: hidden; }
  .timer-fill { height: 100%; border-radius: 4px; transition: width .15s linear, background .5s; }
  .timer-num { text-align: center; font-size: 1.8rem; font-weight: 900; line-height: 1; }
  .q-card { background: #16213e; border-radius: 14px; padding: 20px; text-align: center; border: 1px solid rgba(255,255,255,.07); }
  .q-img { width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }
  .flag { font-size: 3rem; margin-bottom: 8px; }
  .prompt { font-size: clamp(.95rem,3vw,1.15rem); font-weight: 600; line-height: 1.4; }
  .options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .opt {
    background: var(--c); border: none; border-radius: 12px; padding: 14px 10px;
    color: #fff; font-weight: 700; font-size: clamp(.78rem,2.2vw,.92rem);
    cursor: pointer; display: flex; align-items: center; gap: 8px; min-height: 60px;
    text-align: left; box-shadow: 0 3px 10px rgba(0,0,0,.3); transition: transform .1s, filter .1s;
  }
  .opt:hover:not([disabled]):not(.opts-hidden) { transform: scale(1.02); filter: brightness(1.1); }
  .opt[disabled]:not(.opts-hidden) { cursor: default; }
  .opts-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; transition: opacity .25s ease var(--delay), transform .25s ease var(--delay); }
  .opt:not(.opts-hidden) { animation: optIn .25s ease var(--delay, 0ms) both; }
  @keyframes optIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .opt-correct { background: #27ae60 !important; animation: pop .3s ease; }
  .opt-wrong   { background: #c0392b !important; opacity: .8; }
  .opt-dim     { background: #3a3a3a !important; opacity: .4; }
  @keyframes pop { 0%{transform:scale(1)} 50%{transform:scale(1.04)} 100%{transform:scale(1)} }
  .shape { font-size: 1rem; flex-shrink: 0; }
  .opt-text { flex: 1; line-height: 1.3; }
  .banner { border-radius: 10px; padding: 13px 16px; font-size: .95rem; font-weight: 700; text-align: center; animation: slideUp .3s ease; }
  .banner-ok  { background: rgba(39,174,96,.18); border: 1px solid #27ae60; color: #2ecc71; }
  .banner-err { background: rgba(231,76,60,.15); border: 1px solid #e74c3c; color: #ff6b6b; }
  @keyframes slideUp { from{transform:translateY(8px);opacity:0} to{transform:translateY(0);opacity:1} }
  .popup { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 2rem; font-weight: 900; color: #f1c40f; pointer-events: none; animation: floatUp 1.2s ease forwards; z-index: 100; }
  @keyframes floatUp { 0%{opacity:1;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-50%,-130%)} }

  /* ── Solo score reveal card ── */
  .score-reveal-card {
    background: #16213e; border-radius: 14px; padding: 18px 20px;
    border: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; gap: 8px;
    animation: slideUp .35s ease;
  }
  .src-row { display: flex; align-items: center; justify-content: space-between; }
  .src-label { font-size: .8rem; text-transform: uppercase; letter-spacing: 1.5px; color: #666; }
  .src-gain { font-size: .85rem; font-weight: 700; color: #2ecc71; background: rgba(46,204,113,.15); border-radius: 20px; padding: 2px 10px; }
  .src-score { font-size: 2.8rem; font-weight: 900; color: #f1c40f; line-height: 1; }
  .src-bar-track { height: 8px; background: rgba(255,255,255,.07); border-radius: 4px; overflow: hidden; }
  .src-bar { height: 100%; background: linear-gradient(90deg, #9b59b6, #f1c40f); border-radius: 4px; transition: width .05s linear; }
  .src-meta { font-size: .78rem; color: #555; }

  /* ── Animated leaderboard ── */
  .anim-lb { display: flex; flex-direction: column; gap: 10px; }
  .alb-row {
    display: flex; align-items: center; gap: 12px;
    background: #16213e; border-radius: 12px; padding: 12px 14px;
    border: 1px solid rgba(255,255,255,.07); transition: border-color .3s;
  }
  .alb-row.alb-me { border-color: rgba(155,89,182,.5); background: rgba(155,89,182,.1); }
  .alb-rank { font-size: 1.4rem; flex-shrink: 0; width: 32px; }
  .alb-middle { flex: 1; display: flex; flex-direction: column; gap: 5px; min-width: 0; }
  .alb-name-row { display: flex; align-items: center; gap: 8px; }
  .alb-name { font-weight: 700; font-size: .95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .alb-gain { font-size: .8rem; font-weight: 700; color: #2ecc71; background: rgba(46,204,113,.15); border-radius: 20px; padding: 1px 8px; flex-shrink: 0; }
  .alb-bar-track { height: 8px; background: rgba(255,255,255,.08); border-radius: 4px; overflow: hidden; }
  .alb-bar { height: 100%; background: linear-gradient(90deg, #9b59b6, #3498db); border-radius: 4px; transition: width .05s linear; }
  .alb-score { font-size: 1.1rem; font-weight: 900; color: #f1c40f; flex-shrink: 0; min-width: 60px; text-align: right; }

  /* ── Leaderboard ── */
  .leaderboard { background: #16213e; border-radius: 12px; border: 1px solid rgba(255,255,255,.07); overflow: hidden; }
  .lb-row { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,.05); font-size: .88rem; }
  .lb-row:last-child { border-bottom: none; }
  .lb-row.lb-me { background: rgba(155,89,182,.12); }
  .lb-row.lb-gold { background: rgba(241,196,15,.07); }
  .lb-rank { font-size: 1rem; width: 26px; flex-shrink: 0; }
  .lb-name { flex: 1; font-weight: 600; }
  .lb-score { font-weight: 700; color: #f1c40f; }
</style>
