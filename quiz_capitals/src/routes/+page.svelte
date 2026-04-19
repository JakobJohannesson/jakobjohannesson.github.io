<script lang="ts">
  import { onDestroy } from 'svelte';
  import { initializeApp } from 'firebase/app';
  import { getDatabase, ref, set, get, onValue, update, off } from 'firebase/database';

  // ── Firebase ──────────────────────────────────────────────────────────────
  const fbApp = initializeApp({
    projectId: 'aktiecase-quiz',
    appId: '1:52134070639:web:e901510fd6600d489e009a',
    databaseURL: 'https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app',
    apiKey: 'AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4',
    authDomain: 'aktiecase-quiz.firebaseapp.com',
    messagingSenderId: '52134070639',
  });
  const db = getDatabase(fbApp);

  // ── Data ─────────────────────────────────────────────────────────────────
  const ALL_PAIRS = [
    { country: 'Albania', capital: 'Tirana', flag: '🇦🇱' },
    { country: 'Andorra', capital: 'Andorra la Vella', flag: '🇦🇩' },
    { country: 'Austria', capital: 'Vienna', flag: '🇦🇹' },
    { country: 'Belarus', capital: 'Minsk', flag: '🇧🇾' },
    { country: 'Belgium', capital: 'Brussels', flag: '🇧🇪' },
    { country: 'Bosnia and Herzegovina', capital: 'Sarajevo', flag: '🇧🇦' },
    { country: 'Bulgaria', capital: 'Sofia', flag: '🇧🇬' },
    { country: 'Croatia', capital: 'Zagreb', flag: '🇭🇷' },
    { country: 'Cyprus', capital: 'Nicosia', flag: '🇨🇾' },
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
    { country: 'Kosovo', capital: 'Pristina', flag: '🇽🇰' },
    { country: 'Latvia', capital: 'Riga', flag: '🇱🇻' },
    { country: 'Liechtenstein', capital: 'Vaduz', flag: '🇱🇮' },
    { country: 'Lithuania', capital: 'Vilnius', flag: '🇱🇹' },
    { country: 'Luxembourg', capital: 'Luxembourg City', flag: '🇱🇺' },
    { country: 'Malta', capital: 'Valletta', flag: '🇲🇹' },
    { country: 'Moldova', capital: 'Chișinău', flag: '🇲🇩' },
    { country: 'Monaco', capital: 'Monaco', flag: '🇲🇨' },
    { country: 'Montenegro', capital: 'Podgorica', flag: '🇲🇪' },
    { country: 'Netherlands', capital: 'Amsterdam', flag: '🇳🇱' },
    { country: 'North Macedonia', capital: 'Skopje', flag: '🇲🇰' },
    { country: 'Norway', capital: 'Oslo', flag: '🇳🇴' },
    { country: 'Poland', capital: 'Warsaw', flag: '🇵🇱' },
    { country: 'Portugal', capital: 'Lisbon', flag: '🇵🇹' },
    { country: 'Romania', capital: 'Bucharest', flag: '🇷🇴' },
    { country: 'San Marino', capital: 'San Marino', flag: '🇸🇲' },
    { country: 'Serbia', capital: 'Belgrade', flag: '🇷🇸' },
    { country: 'Slovakia', capital: 'Bratislava', flag: '🇸🇰' },
    { country: 'Slovenia', capital: 'Ljubljana', flag: '🇸🇮' },
    { country: 'Spain', capital: 'Madrid', flag: '🇪🇸' },
    { country: 'Sweden', capital: 'Stockholm', flag: '🇸🇪' },
    { country: 'Switzerland', capital: 'Bern', flag: '🇨🇭' },
    { country: 'Turkey', capital: 'Ankara', flag: '🇹🇷' },
    { country: 'Ukraine', capital: 'Kyiv', flag: '🇺🇦' },
    { country: 'United Kingdom', capital: 'London', flag: '🇬🇧' },
    { country: 'Vatican City', capital: 'Vatican City', flag: '🇻🇦' },
  ];

  type Question = { prompt: string; flag: string; correct: string; options: string[] };

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQuestions(count = 15): Question[] {
    return shuffle(ALL_PAIRS).slice(0, count).map((pair, i) => {
      const askCapital = i % 2 === 0;
      const correct = askCapital ? pair.capital : pair.country;
      const pool = askCapital
        ? ALL_PAIRS.filter((p) => p.capital !== pair.capital).map((p) => p.capital)
        : ALL_PAIRS.filter((p) => p.country !== pair.country).map((p) => p.country);
      return {
        prompt: askCapital ? `What is the capital of ${pair.country}?` : `${pair.capital} is the capital of which country?`,
        flag: pair.flag,
        correct,
        options: shuffle([correct, ...shuffle(pool).slice(0, 3)]),
      };
    });
  }

  // ── Constants ─────────────────────────────────────────────────────────────
  const TIME_PER_Q = 15;
  const BTN = [
    { shape: '▲', color: '#e74c3c' },
    { shape: '◆', color: '#2980b9' },
    { shape: '●', color: '#f39c12' },
    { shape: '■', color: '#27ae60' },
  ];

  // ── Screen state ──────────────────────────────────────────────────────────
  type Screen =
    | 'home'
    | 'solo_q' | 'solo_reveal' | 'solo_final'
    | 'mp_create' | 'mp_join'
    | 'mp_lobby' | 'mp_question' | 'mp_reveal' | 'mp_final'
    | 'mp_error';

  let screen: Screen = $state('home');
  let errorMsg = $state('');

  // ── Solo state ────────────────────────────────────────────────────────────
  let soloQuestions: Question[] = $state([]);
  let soloQIndex = $state(0);
  let soloScore = $state(0);
  let soloHiScore = $state(0);
  let soloStreak = $state(0);
  let soloChosen = $state(-1);
  let soloTimeLeft = $state(TIME_PER_Q);
  let soloResults: { correct: boolean; points: number }[] = $state([]);
  let soloTimerInterval: ReturnType<typeof setInterval> | null = null;
  let soloQuestionStart = 0;
  let soloScorePopup = $state('');
  let soloPopupVisible = $state(false);

  function soloStart() {
    soloQuestions = buildQuestions(15);
    soloQIndex = 0;
    soloScore = 0;
    soloStreak = 0;
    soloResults = [];
    soloChosen = -1;
    screen = 'solo_q';
    soloStartTimer();
  }

  function soloStartTimer() {
    soloChosen = -1;
    soloTimeLeft = TIME_PER_Q;
    soloQuestionStart = Date.now();
    if (soloTimerInterval) clearInterval(soloTimerInterval);
    soloTimerInterval = setInterval(() => {
      soloTimeLeft--;
      if (soloTimeLeft <= 0) { clearInterval(soloTimerInterval!); soloTimerInterval = null; soloAnswer(-1); }
    }, 1000);
  }

  function soloAnswer(idx: number) {
    if (screen !== 'solo_q') return;
    if (soloTimerInterval) { clearInterval(soloTimerInterval); soloTimerInterval = null; }
    soloChosen = idx;
    const q = soloQuestions[soloQIndex];
    const isCorrect = idx >= 0 && q.options[idx] === q.correct;
    const remaining = Math.max(0, TIME_PER_Q - (Date.now() - soloQuestionStart) / 1000);
    let points = 0;
    if (isCorrect) {
      points = 100 + Math.round((remaining / TIME_PER_Q) * 900) + (soloStreak >= 3 ? 100 : soloStreak >= 2 ? 50 : 0);
      soloScore += points;
      soloStreak++;
      soloScorePopup = `+${points}${soloStreak > 2 ? ' 🔥' : ''}`;
      soloPopupVisible = true;
      setTimeout(() => (soloPopupVisible = false), 1200);
    } else {
      soloStreak = 0;
    }
    soloResults = [...soloResults, { correct: isCorrect, points }];
    screen = 'solo_reveal';
    setTimeout(() => {
      if (soloQIndex + 1 >= soloQuestions.length) {
        if (soloScore > soloHiScore) soloHiScore = soloScore;
        screen = 'solo_final';
      } else {
        soloQIndex++;
        screen = 'solo_q';
        soloStartTimer();
      }
    }, 2200);
  }

  const soloTimerPct = $derived(soloTimeLeft / TIME_PER_Q);
  const soloCurrentQ = $derived(soloQuestions[soloQIndex]);
  const soloCorrectCount = $derived(soloResults.filter((r) => r.correct).length);

  // ── Multiplayer state ─────────────────────────────────────────────────────
  const playerId = typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2);

  let nameInput = $state('');
  let codeInput = $state('');
  let roomCode = $state('');
  let isHost = $state(false);

  type PlayerData = { name: string; score: number; streak: number };
  let mpPlayers: Record<string, PlayerData> = $state({});
  let mpQuestions: Question[] = $state([]);
  let mpQIndex = $state(0);
  let mpStartTime = $state(0);
  let mpChosen = $state(-1);
  let mpTimeLeft = $state(TIME_PER_Q);
  let mpTimerInterval: ReturnType<typeof setInterval> | null = null;
  let mpAnswers: Record<string, { choice: number; points: number; correct: boolean }> = $state({});
  let advancing = false;
  let prevRoomPhase = '';
  let unsubRoom: (() => void) | null = null;

  function genCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  async function mpCreate() {
    if (!nameInput.trim()) return;
    const code = genCode();
    const qs = buildQuestions(15);
    roomCode = code;
    isHost = true;
    await set(ref(db, `rooms/${code}`), {
      phase: 'lobby',
      hostId: playerId,
      qIndex: 0,
      startTime: 0,
      questions: qs,
      players: { [playerId]: { name: nameInput.trim(), score: 0, streak: 0 } },
    });
    subscribeRoom(code);
    screen = 'mp_lobby';
  }

  async function mpJoin() {
    if (!nameInput.trim() || !codeInput.trim()) return;
    const code = codeInput.toUpperCase().replace(/[^A-Z]/g, '');
    const snap = await get(ref(db, `rooms/${code}`));
    if (!snap.exists()) { errorMsg = 'Room not found. Check the code and try again.'; return; }
    const data = snap.val();
    if (data.phase !== 'lobby') { errorMsg = 'This game has already started.'; return; }
    roomCode = code;
    isHost = false;
    await set(ref(db, `rooms/${code}/players/${playerId}`), { name: nameInput.trim(), score: 0, streak: 0 });
    subscribeRoom(code);
    screen = 'mp_lobby';
  }

  function subscribeRoom(code: string) {
    const roomRef = ref(db, `rooms/${code}`);
    const unsub = onValue(roomRef, (snap) => {
      if (!snap.exists()) { screen = 'mp_error'; errorMsg = 'Room was closed.'; return; }
      const data = snap.val();
      mpPlayers = data.players ?? {};
      if (!mpQuestions.length) mpQuestions = data.questions ?? [];
      const newPhase: string = data.phase ?? 'lobby';
      const newQIndex: number = data.qIndex ?? 0;

      // All-answered check (host only)
      if (newPhase === 'question' && isHost && !advancing) {
        const answers = data.answers?.[newQIndex] ?? {};
        if (Object.keys(answers).length >= Object.keys(mpPlayers).length) {
          advancing = true;
          update(ref(db, `rooms/${code}`), { phase: 'reveal' });
        }
      }

      // Phase transitions
      if (newPhase === 'question' && (prevRoomPhase !== 'question' || newQIndex !== mpQIndex)) {
        mpQIndex = newQIndex;
        mpStartTime = data.startTime ?? Date.now();
        mpChosen = -1;
        mpAnswers = {};
        mpStartTimer(mpStartTime);
        screen = 'mp_question';
      } else if (newPhase === 'reveal' && prevRoomPhase !== 'reveal') {
        mpAnswers = data.answers?.[newQIndex] ?? {};
        mpQIndex = newQIndex;
        mpStopTimer();
        screen = 'mp_reveal';
        if (isHost) {
          const capturedQIndex = newQIndex;
          setTimeout(async () => {
            if (capturedQIndex + 1 >= mpQuestions.length) {
              await update(ref(db, `rooms/${code}`), { phase: 'final' });
            } else {
              await update(ref(db, `rooms/${code}`), { phase: 'question', qIndex: capturedQIndex + 1, startTime: Date.now() });
            }
            advancing = false;
          }, 3500);
        }
      } else if (newPhase === 'final' && prevRoomPhase !== 'final') {
        mpStopTimer();
        screen = 'mp_final';
      } else if (newPhase === 'lobby' && prevRoomPhase !== 'lobby' && prevRoomPhase !== '') {
        // Host reset the game
        mpQuestions = data.questions ?? [];
        mpQIndex = 0;
        mpChosen = -1;
        advancing = false;
        screen = 'mp_lobby';
      }

      prevRoomPhase = newPhase;
    });
    unsubRoom = unsub;
  }

  function mpStartTimer(startTime: number) {
    mpStopTimer();
    const tick = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      mpTimeLeft = Math.max(0, TIME_PER_Q - elapsed);
      if (mpTimeLeft <= 0) {
        mpStopTimer();
        if (mpChosen < 0) mpAnswer(-1);
        if (isHost && !advancing) {
          advancing = true;
          update(ref(db, `rooms/${roomCode}`), { phase: 'reveal' });
        }
      }
    };
    tick();
    mpTimerInterval = setInterval(tick, 150);
  }

  function mpStopTimer() {
    if (mpTimerInterval) { clearInterval(mpTimerInterval); mpTimerInterval = null; }
  }

  async function mpStartGame() {
    advancing = false;
    prevRoomPhase = 'lobby';
    await update(ref(db, `rooms/${roomCode}`), { phase: 'question', qIndex: 0, startTime: Date.now() });
  }

  async function mpAnswer(idx: number) {
    if (mpChosen >= 0 || screen !== 'mp_question') return;
    mpChosen = idx;
    const q = mpQuestions[mpQIndex];
    const elapsed = Date.now() - mpStartTime;
    const isCorrect = idx >= 0 && q.options[idx] === q.correct;
    const me = mpPlayers[playerId] ?? { score: 0, streak: 0 };
    let points = 0;
    let newStreak = me.streak ?? 0;
    if (isCorrect) {
      const remaining = Math.max(0, TIME_PER_Q - elapsed / 1000);
      points = 100 + Math.round((remaining / TIME_PER_Q) * 900) + (newStreak >= 3 ? 100 : newStreak >= 2 ? 50 : 0);
      newStreak++;
    } else {
      newStreak = 0;
    }
    await update(ref(db, `rooms/${roomCode}`), {
      [`answers/${mpQIndex}/${playerId}`]: { choice: idx, timeMs: elapsed, points, correct: isCorrect },
      [`players/${playerId}/score`]: (me.score ?? 0) + points,
      [`players/${playerId}/streak`]: newStreak,
    });
    if (isHost && !advancing) {
      const snap = await get(ref(db, `rooms/${roomCode}/answers/${mpQIndex}`));
      const ans = snap.val() ?? {};
      if (Object.keys(ans).length >= Object.keys(mpPlayers).length) {
        advancing = true;
        await update(ref(db, `rooms/${roomCode}`), { phase: 'reveal' });
      }
    }
  }

  async function mpPlayAgain() {
    const qs = buildQuestions(15);
    await update(ref(db, `rooms/${roomCode}`), {
      phase: 'lobby',
      qIndex: 0,
      startTime: 0,
      questions: qs,
      answers: null,
      players: Object.fromEntries(
        Object.entries(mpPlayers).map(([id, p]) => [id, { ...p, score: 0, streak: 0 }])
      ),
    });
  }

  const mpTimerPct = $derived(mpTimeLeft / TIME_PER_Q);
  const mpCurrentQ = $derived(mpQuestions[mpQIndex]);
  const mpSortedPlayers = $derived(
    Object.entries(mpPlayers).sort(([, a], [, b]) => b.score - a.score)
  );
  const myAnswer = $derived(mpAnswers[playerId]);

  function medal(i: number) { return ['🥇', '🥈', '🥉'][i] ?? `${i + 1}.`; }

  onDestroy(() => {
    if (soloTimerInterval) clearInterval(soloTimerInterval);
    mpStopTimer();
    unsubRoom?.();
  });
</script>

<svelte:head><title>European Capitals Quiz</title></svelte:head>

<div class="app">

  <!-- ── HOME ─────────────────────────────────────────────── -->
  {#if screen === 'home'}
    <div class="center-col">
      <div class="logo">🌍</div>
      <h1>European Capitals</h1>
      <p class="sub">Test your knowledge of European capitals</p>
      <button class="btn-primary" onclick={() => soloStart()}>Solo Play</button>
      <div class="divider">or multiplayer</div>
      <div class="row-btns">
        <button class="btn-secondary" onclick={() => { errorMsg = ''; screen = 'mp_create'; }}>Create Room</button>
        <button class="btn-secondary" onclick={() => { errorMsg = ''; screen = 'mp_join'; }}>Join Room</button>
      </div>
      <a href="../../arcade.html" class="back-link">← Arcade</a>
    </div>

  <!-- ── MP CREATE ─────────────────────────────────────────── -->
  {:else if screen === 'mp_create'}
    <div class="center-col">
      <h2>Create Room</h2>
      <input class="text-input" bind:value={nameInput} placeholder="Your name" maxlength={20} />
      {#if errorMsg}<p class="err">{errorMsg}</p>{/if}
      <button class="btn-primary" onclick={mpCreate} disabled={!nameInput.trim()}>Create</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Back</button>
    </div>

  <!-- ── MP JOIN ────────────────────────────────────────────── -->
  {:else if screen === 'mp_join'}
    <div class="center-col">
      <h2>Join Room</h2>
      <input class="text-input code-input" bind:value={codeInput} placeholder="Room code" maxlength={4} />
      <input class="text-input" bind:value={nameInput} placeholder="Your name" maxlength={20} />
      {#if errorMsg}<p class="err">{errorMsg}</p>{/if}
      <button class="btn-primary" onclick={mpJoin} disabled={!nameInput.trim() || !codeInput.trim()}>Join</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Back</button>
    </div>

  <!-- ── MP LOBBY ───────────────────────────────────────────── -->
  {:else if screen === 'mp_lobby'}
    <div class="center-col">
      <p class="sub">Room code</p>
      <div class="room-code">{roomCode}</div>
      <p class="sub">Share this code with friends</p>
      <div class="player-list">
        {#each Object.entries(mpPlayers) as [id, p]}
          <div class="player-row">
            <span class="player-dot" class:me={id === playerId}></span>
            {p.name}{id === playerId ? ' (you)' : ''}{id === (Object.values(mpPlayers)[0] ? Object.keys(mpPlayers)[0] : '') && isHost ? ' 👑' : ''}
          </div>
        {/each}
      </div>
      {#if isHost}
        <button class="btn-primary" onclick={mpStartGame} disabled={Object.keys(mpPlayers).length < 1}>
          Start Game ({Object.keys(mpPlayers).length} player{Object.keys(mpPlayers).length !== 1 ? 's' : ''})
        </button>
      {:else}
        <p class="waiting">Waiting for host to start…</p>
      {/if}
      <button class="btn-ghost" onclick={() => { unsubRoom?.(); screen = 'home'; }}>← Leave</button>
    </div>

  <!-- ── SOLO QUESTION ─────────────────────────────────────── -->
  {:else if (screen === 'solo_q' || screen === 'solo_reveal') && soloCurrentQ}
    <div class="quiz-screen">
      <div class="hud">
        <span class="q-num">{soloQIndex + 1} / {soloQuestions.length}</span>
        <span class="score-hud">⭐ {soloScore.toLocaleString()}</span>
        {#if soloStreak >= 2}<span class="streak">🔥 {soloStreak}</span>{/if}
      </div>
      <div class="timer-bar"><div class="timer-fill" style="width:{soloTimerPct*100}%;background:{soloTimerPct>.4?'#2ecc71':soloTimerPct>.2?'#f39c12':'#e74c3c'}"></div></div>
      <div class="timer-num" style="color:{soloTimerPct>.4?'#2ecc71':soloTimerPct>.2?'#f39c12':'#e74c3c'}">{soloTimeLeft}</div>
      <div class="q-card">
        <div class="flag">{soloCurrentQ.flag}</div>
        <p class="prompt">{soloCurrentQ.prompt}</p>
      </div>
      <div class="options">
        {#each soloCurrentQ.options as opt, i}
          {@const isCorrect = opt === soloCurrentQ.correct}
          {@const wasChosen = i === soloChosen}
          <button
            class="opt" class:revealed={screen==='solo_reveal'}
            class:correct={screen==='solo_reveal' && isCorrect}
            class:wrong={screen==='solo_reveal' && wasChosen && !isCorrect}
            class:unchosen={screen==='solo_reveal' && !wasChosen && !isCorrect}
            style="--c:{BTN[i].color}"
            onclick={() => soloAnswer(i)}
            disabled={screen === 'solo_reveal'}
          >
            <span class="shape">{screen === 'solo_reveal' ? (isCorrect ? '✓' : wasChosen ? '✗' : BTN[i].shape) : BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>
      {#if screen === 'solo_reveal'}
        <div class="banner" class:correct-b={soloResults[soloQIndex]?.correct} class:wrong-b={!soloResults[soloQIndex]?.correct}>
          {soloResults[soloQIndex]?.correct ? `🎉 Correct! +${soloResults[soloQIndex].points}` : soloChosen === -1 ? `⏱ Time's up! → ${soloCurrentQ.correct}` : `❌ Wrong! → ${soloCurrentQ.correct}`}
        </div>
      {/if}
      {#if soloPopupVisible}<div class="score-popup">{soloScorePopup}</div>{/if}
    </div>

  <!-- ── SOLO FINAL ─────────────────────────────────────────── -->
  {:else if screen === 'solo_final'}
    <div class="center-col">
      <div class="big-emoji">{soloScore >= soloQuestions.length*900 ? '🥇' : soloScore >= soloQuestions.length*600 ? '🥈' : soloScore >= soloQuestions.length*300 ? '🥉' : '🎯'}</div>
      <h2>Quiz Complete!</h2>
      <div class="final-score">{soloScore.toLocaleString()}</div>
      <p class="sub">points &nbsp;·&nbsp; {soloCorrectCount}/{soloQuestions.length} correct</p>
      <button class="btn-primary" onclick={soloStart}>Play Again</button>
      <button class="btn-ghost" onclick={() => screen = 'home'}>← Home</button>
    </div>

  <!-- ── MP QUESTION ────────────────────────────────────────── -->
  {:else if (screen === 'mp_question' || screen === 'mp_reveal') && mpCurrentQ}
    <div class="quiz-screen">
      <div class="hud">
        <span class="q-num">{mpQIndex + 1} / {mpQuestions.length}</span>
        <span class="score-hud">⭐ {(mpPlayers[playerId]?.score ?? 0).toLocaleString()}</span>
        <span class="player-count">👥 {Object.keys(mpAnswers).length}/{Object.keys(mpPlayers).length}</span>
      </div>
      <div class="timer-bar"><div class="timer-fill" style="width:{mpTimerPct*100}%;background:{mpTimerPct>.4?'#2ecc71':mpTimerPct>.2?'#f39c12':'#e74c3c'}"></div></div>
      <div class="timer-num" style="color:{mpTimerPct>.4?'#2ecc71':mpTimerPct>.2?'#f39c12':'#e74c3c'}">{Math.ceil(mpTimeLeft)}</div>
      <div class="q-card">
        <div class="flag">{mpCurrentQ.flag}</div>
        <p class="prompt">{mpCurrentQ.prompt}</p>
      </div>
      <div class="options">
        {#each mpCurrentQ.options as opt, i}
          {@const isCorrect = opt === mpCurrentQ.correct}
          {@const wasChosen = i === mpChosen}
          <button
            class="opt" class:revealed={screen==='mp_reveal'}
            class:correct={screen==='mp_reveal' && isCorrect}
            class:wrong={screen==='mp_reveal' && wasChosen && !isCorrect}
            class:unchosen={screen==='mp_reveal' && !wasChosen && !isCorrect}
            style="--c:{BTN[i].color}"
            onclick={() => mpAnswer(i)}
            disabled={screen === 'mp_reveal' || mpChosen >= 0}
          >
            <span class="shape">{screen === 'mp_reveal' ? (isCorrect ? '✓' : wasChosen ? '✗' : BTN[i].shape) : BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>
      {#if screen === 'mp_question' && mpChosen >= 0}
        <p class="answered-msg">Answer locked in — waiting for others…</p>
      {/if}
      {#if screen === 'mp_reveal'}
        <div class="banner" class:correct-b={myAnswer?.correct} class:wrong-b={!myAnswer?.correct}>
          {myAnswer?.correct ? `🎉 +${myAnswer.points} pts` : mpChosen === -1 ? `⏱ Time's up! → ${mpCurrentQ.correct}` : `❌ Wrong! → ${mpCurrentQ.correct}`}
        </div>
        <div class="leaderboard mini">
          {#each mpSortedPlayers.slice(0, 5) as [id, p], i}
            <div class="lb-row" class:lb-me={id === playerId}>
              <span class="lb-rank">{medal(i)}</span>
              <span class="lb-name">{p.name}</span>
              <span class="lb-score">{p.score.toLocaleString()}</span>
            </div>
          {/each}
        </div>
      {/if}
    </div>

  <!-- ── MP FINAL ───────────────────────────────────────────── -->
  {:else if screen === 'mp_final'}
    <div class="center-col">
      <div class="big-emoji">🏆</div>
      <h2>Final Results</h2>
      <div class="leaderboard full">
        {#each mpSortedPlayers as [id, p], i}
          <div class="lb-row" class:lb-me={id === playerId} class:lb-winner={i === 0}>
            <span class="lb-rank">{medal(i)}</span>
            <span class="lb-name">{p.name}{id === playerId ? ' (you)' : ''}</span>
            <span class="lb-score">{p.score.toLocaleString()}</span>
          </div>
        {/each}
      </div>
      {#if isHost}
        <button class="btn-primary" onclick={mpPlayAgain}>Play Again</button>
      {:else}
        <p class="waiting">Waiting for host to start a new game…</p>
      {/if}
      <button class="btn-ghost" onclick={() => { unsubRoom?.(); screen = 'home'; }}>← Home</button>
    </div>

  <!-- ── MP ERROR ───────────────────────────────────────────── -->
  {:else if screen === 'mp_error'}
    <div class="center-col">
      <p class="err">{errorMsg}</p>
      <button class="btn-primary" onclick={() => screen = 'home'}>← Home</button>
    </div>
  {/if}
</div>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #1a1a2e;
    font-family: 'Segoe UI', system-ui, sans-serif;
    min-height: 100vh;
    color: #fff;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  /* ── Layout ── */
  .center-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 420px;
    text-align: center;
  }
  .quiz-screen {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }

  /* ── Text ── */
  .logo { font-size: 72px; }
  .big-emoji { font-size: 64px; animation: bounce .5s ease; }
  @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  h1 { font-size: clamp(1.8rem,6vw,2.8rem); font-weight: 900; }
  h2 { font-size: 1.6rem; font-weight: 800; }
  .sub { color: #aaa; font-size: .95rem; }
  .err { color: #ff6b6b; font-size: .9rem; }
  .waiting { color: #888; font-size: .95rem; }
  .answered-msg { text-align: center; color: #888; font-size: .9rem; }

  /* ── Buttons ── */
  .btn-primary {
    background: #9b59b6;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 14px 48px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(155,89,182,.45);
    transition: transform .1s, background .15s;
    width: 100%;
  }
  .btn-primary:hover:not([disabled]) { background: #8e44ad; transform: scale(1.03); }
  .btn-primary:active:not([disabled]) { transform: scale(.97); }
  .btn-primary[disabled] { opacity: .5; cursor: default; }

  .btn-secondary {
    flex: 1;
    background: #16213e;
    color: #fff;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background .15s;
  }
  .btn-secondary:hover { background: #1e2d50; }

  .btn-ghost {
    background: none;
    border: none;
    color: #666;
    font-size: .9rem;
    cursor: pointer;
    padding: 4px;
  }
  .btn-ghost:hover { color: #aaa; }

  .row-btns { display: flex; gap: 10px; width: 100%; }
  .divider { color: #555; font-size: .85rem; }
  .back-link { color: #555; text-decoration: none; font-size: .9rem; }
  .back-link:hover { color: #aaa; }

  /* ── Inputs ── */
  .text-input {
    width: 100%;
    background: #16213e;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 12px;
    padding: 14px 18px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color .15s;
  }
  .text-input:focus { border-color: #9b59b6; }
  .text-input::placeholder { color: #555; }
  .code-input { font-size: 1.4rem; font-weight: 700; letter-spacing: 6px; text-transform: uppercase; text-align: center; }

  /* ── Room code ── */
  .room-code {
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 12px;
    color: #f1c40f;
    background: #16213e;
    padding: 16px 32px;
    border-radius: 16px;
    border: 2px solid rgba(241,196,15,.3);
  }

  /* ── Player list ── */
  .player-list {
    width: 100%;
    background: #16213e;
    border-radius: 12px;
    padding: 8px 0;
    border: 1px solid rgba(255,255,255,.07);
  }
  .player-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    font-size: .95rem;
    border-bottom: 1px solid rgba(255,255,255,.05);
  }
  .player-row:last-child { border-bottom: none; }
  .player-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #555;
    flex-shrink: 0;
  }
  .player-dot.me { background: #9b59b6; }

  /* ── HUD ── */
  .hud { display: flex; align-items: center; gap: 12px; font-size: .9rem; }
  .q-num { color: #aaa; }
  .score-hud { font-weight: 700; color: #f1c40f; margin-left: auto; }
  .player-count { color: #aaa; }
  .streak { font-weight: 700; color: #e74c3c; }

  /* ── Timer ── */
  .timer-bar { height: 8px; background: rgba(255,255,255,.1); border-radius: 4px; overflow: hidden; }
  .timer-fill { height: 100%; border-radius: 4px; transition: width .15s linear, background .5s; }
  .timer-num { text-align: center; font-size: 2rem; font-weight: 900; line-height: 1; }

  /* ── Question card ── */
  .q-card { background: #16213e; border-radius: 16px; padding: 24px 20px; text-align: center; border: 1px solid rgba(255,255,255,.07); }
  .flag { font-size: 3.5rem; margin-bottom: 10px; }
  .prompt { font-size: clamp(1rem, 3vw, 1.2rem); font-weight: 600; line-height: 1.4; }

  /* ── Options ── */
  .options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .opt {
    background: var(--c);
    border: none;
    border-radius: 12px;
    padding: 16px 12px;
    color: #fff;
    font-weight: 700;
    font-size: clamp(.8rem, 2.5vw, .95rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 64px;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0,0,0,.3);
    transition: transform .1s, filter .1s;
  }
  .opt:hover:not([disabled]) { transform: scale(1.02); filter: brightness(1.1); }
  .opt:active:not([disabled]) { transform: scale(.97); }
  .opt[disabled] { cursor: default; }
  .opt.correct { background: #27ae60 !important; animation: pop .3s ease; }
  .opt.wrong   { background: #c0392b !important; opacity: .8; }
  .opt.unchosen { background: #444 !important; opacity: .45; }
  @keyframes pop { 0%{transform:scale(1)} 50%{transform:scale(1.05)} 100%{transform:scale(1)} }
  .shape { font-size: 1.1rem; flex-shrink: 0; }
  .opt-text { flex: 1; line-height: 1.3; }

  /* ── Banner ── */
  .banner {
    border-radius: 12px; padding: 14px 18px;
    font-size: 1rem; font-weight: 700; text-align: center;
    animation: slideUp .3s ease;
  }
  .correct-b { background: rgba(39,174,96,.2); border: 1px solid #27ae60; color: #2ecc71; }
  .wrong-b   { background: rgba(231,76,60,.15); border: 1px solid #e74c3c; color: #ff6b6b; }
  @keyframes slideUp { from{transform:translateY(8px);opacity:0} to{transform:translateY(0);opacity:1} }

  /* ── Leaderboard ── */
  .leaderboard {
    width: 100%;
    background: #16213e;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,.07);
    overflow: hidden;
  }
  .leaderboard.mini { margin-top: 4px; }
  .lb-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-bottom: 1px solid rgba(255,255,255,.05);
    font-size: .9rem;
    transition: background .2s;
  }
  .lb-row:last-child { border-bottom: none; }
  .lb-row.lb-me { background: rgba(155,89,182,.15); }
  .lb-row.lb-winner { background: rgba(241,196,15,.08); }
  .lb-rank { font-size: 1.1rem; width: 28px; flex-shrink: 0; }
  .lb-name { flex: 1; font-weight: 600; }
  .lb-score { font-weight: 700; color: #f1c40f; }

  /* ── Final score (solo) ── */
  .final-score { font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 900; color: #f1c40f; line-height: 1; }

  /* ── Score popup ── */
  .score-popup {
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.2rem; font-weight: 900; color: #f1c40f;
    text-shadow: 0 0 20px rgba(241,196,15,.8);
    pointer-events: none;
    animation: floatUp 1.2s ease forwards;
    z-index: 100;
  }
  @keyframes floatUp {
    0%   { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -130%); }
  }
</style>
