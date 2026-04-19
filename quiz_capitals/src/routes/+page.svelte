<script lang="ts">
  const TIME_PER_QUESTION = 15; // seconds

  // All European capitals data
  const ALL_PAIRS: { country: string; capital: string; flag: string }[] = [
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

  type Question = {
    prompt: string;
    flag: string;
    correct: string;
    options: string[];
  };

  type Phase = 'start' | 'question' | 'reveal' | 'results';

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQuestions(count = 15): Question[] {
    const selected = shuffle(ALL_PAIRS).slice(0, count);
    return selected.map((pair, i) => {
      // Alternate question direction
      const askCapital = i % 2 === 0;
      const correct = askCapital ? pair.capital : pair.country;
      const pool = askCapital
        ? ALL_PAIRS.filter((p) => p.capital !== pair.capital).map((p) => p.capital)
        : ALL_PAIRS.filter((p) => p.country !== pair.country).map((p) => p.country);
      const distractors = shuffle(pool).slice(0, 3);
      const options = shuffle([correct, ...distractors]);
      return {
        prompt: askCapital
          ? `What is the capital of ${pair.country}?`
          : `${pair.capital} is the capital of which country?`,
        flag: pair.flag,
        correct,
        options,
      };
    });
  }

  // Kahoot-style button config
  const BTN = [
    { shape: '▲', color: '#e74c3c', label: 'A' },
    { shape: '◆', color: '#2980b9', label: 'B' },
    { shape: '●', color: '#f39c12', label: 'C' },
    { shape: '■', color: '#27ae60', label: 'D' },
  ];

  // State
  let phase: Phase = $state('start');
  let questions: Question[] = $state([]);
  let qIndex = $state(0);
  let score = $state(0);
  let streak = $state(0);
  let chosen = $state(-1);        // index chosen by player
  let timeLeft = $state(TIME_PER_QUESTION);
  let timerInterval: ReturnType<typeof setInterval> | null = null;
  let questionResults: { correct: boolean; points: number; time: number }[] = $state([]);
  let questionStartTime = 0;

  let scorePopup = $state('');
  let scorePopupVisible = $state(false);

  function startGame() {
    questions = buildQuestions(15);
    qIndex = 0;
    score = 0;
    streak = 0;
    questionResults = [];
    phase = 'question';
    startTimer();
  }

  function startTimer() {
    chosen = -1;
    timeLeft = TIME_PER_QUESTION;
    questionStartTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval!);
        timerInterval = null;
        handleAnswer(-1); // time up = wrong
      }
    }, 1000);
  }

  function handleAnswer(idx: number) {
    if (phase !== 'question') return;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }

    chosen = idx;
    const q = questions[qIndex];
    const isCorrect = idx >= 0 && q.options[idx] === q.correct;
    const elapsed = (Date.now() - questionStartTime) / 1000;
    const remaining = Math.max(0, TIME_PER_QUESTION - elapsed);

    let points = 0;
    if (isCorrect) {
      // Base 100 + speed bonus (up to 900) + streak bonus
      const speedBonus = Math.round((remaining / TIME_PER_QUESTION) * 900);
      const streakBonus = streak >= 3 ? 100 : streak >= 2 ? 50 : 0;
      points = 100 + speedBonus + streakBonus;
      score += points;
      streak++;
    } else {
      streak = 0;
    }

    questionResults = [...questionResults, { correct: isCorrect, points, time: elapsed }];

    if (points > 0) {
      scorePopup = `+${points}${streak > 2 ? ' 🔥' : ''}`;
      scorePopupVisible = true;
      setTimeout(() => (scorePopupVisible = false), 1200);
    }

    phase = 'reveal';
    setTimeout(nextQuestion, 2200);
  }

  function nextQuestion() {
    if (qIndex + 1 >= questions.length) {
      phase = 'results';
    } else {
      qIndex++;
      phase = 'question';
      startTimer();
    }
  }

  function restartGame() {
    phase = 'start';
  }

  function medal(s: number, total: number): string {
    const pct = s / total;
    if (pct >= 0.9) return '🥇';
    if (pct >= 0.7) return '🥈';
    if (pct >= 0.5) return '🥉';
    return '🎯';
  }

  const maxScore = $derived(questions.length * 1000);
  const correctCount = $derived(questionResults.filter((r) => r.correct).length);
  const timerPct = $derived(timeLeft / TIME_PER_QUESTION);

  const currentQ = $derived(questions[qIndex]);
</script>

<svelte:head>
  <title>European Capitals Quiz</title>
</svelte:head>

<div class="app">
  <!-- START SCREEN -->
  {#if phase === 'start'}
    <div class="start-screen">
      <div class="logo">🌍</div>
      <h1>European Capitals</h1>
      <p class="subtitle">15 questions · 15 seconds each · Score by speed</p>
      <button class="start-btn" onclick={startGame}>Start Quiz</button>
      <a href="../../arcade.html" class="back-link">← Back to Arcade</a>
    </div>

  <!-- QUESTION SCREEN -->
  {:else if phase === 'question' && currentQ}
    <div class="question-screen">
      <div class="top-bar">
        <div class="q-counter">{qIndex + 1} / {questions.length}</div>
        <div class="score-display">⭐ {score.toLocaleString()}</div>
        {#if streak >= 2}
          <div class="streak">🔥 {streak}</div>
        {/if}
      </div>

      <div class="timer-bar">
        <div class="timer-fill" style="width:{timerPct * 100}%; background:{timerPct > 0.4 ? '#2ecc71' : timerPct > 0.2 ? '#f39c12' : '#e74c3c'}"></div>
      </div>
      <div class="timer-num" style="color:{timerPct > 0.4 ? '#2ecc71' : timerPct > 0.2 ? '#f39c12' : '#e74c3c'}">{timeLeft}</div>

      <div class="question-card">
        <div class="flag">{currentQ.flag}</div>
        <p class="prompt">{currentQ.prompt}</p>
      </div>

      <div class="options-grid">
        {#each currentQ.options as opt, i}
          <button
            class="option-btn"
            style="--color:{BTN[i].color}"
            onclick={() => handleAnswer(i)}
          >
            <span class="shape">{BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>

      {#if scorePopupVisible}
        <div class="score-popup">{scorePopup}</div>
      {/if}
    </div>

  <!-- REVEAL SCREEN -->
  {:else if phase === 'reveal' && currentQ}
    <div class="question-screen">
      <div class="top-bar">
        <div class="q-counter">{qIndex + 1} / {questions.length}</div>
        <div class="score-display">⭐ {score.toLocaleString()}</div>
      </div>
      <div class="timer-bar"><div class="timer-fill" style="width:0%"></div></div>

      <div class="question-card">
        <div class="flag">{currentQ.flag}</div>
        <p class="prompt">{currentQ.prompt}</p>
      </div>

      <div class="options-grid">
        {#each currentQ.options as opt, i}
          {@const isCorrect = opt === currentQ.correct}
          {@const wasChosen = i === chosen}
          <button
            class="option-btn revealed"
            class:correct={isCorrect}
            class:wrong={wasChosen && !isCorrect}
            class:unchosen={!wasChosen && !isCorrect}
            style="--color:{BTN[i].color}"
            disabled
          >
            <span class="shape">{isCorrect ? '✓' : wasChosen ? '✗' : BTN[i].shape}</span>
            <span class="opt-text">{opt}</span>
          </button>
        {/each}
      </div>

      <div class="reveal-banner" class:correct-banner={questionResults[qIndex]?.correct} class:wrong-banner={!questionResults[qIndex]?.correct}>
        {#if questionResults[qIndex]?.correct}
          🎉 Correct! +{questionResults[qIndex].points} points
        {:else if chosen === -1}
          ⏱ Time's up! The answer was {currentQ.correct}
        {:else}
          ❌ Wrong! The answer was {currentQ.correct}
        {/if}
      </div>
    </div>

  <!-- RESULTS SCREEN -->
  {:else if phase === 'results'}
    <div class="results-screen">
      <div class="medal">{medal(score, maxScore)}</div>
      <h2>Quiz Complete!</h2>
      <div class="final-score">{score.toLocaleString()}</div>
      <p class="score-label">points</p>

      <div class="stats-row">
        <div class="stat">
          <div class="stat-val">{correctCount}</div>
          <div class="stat-key">correct</div>
        </div>
        <div class="stat">
          <div class="stat-val">{questions.length - correctCount}</div>
          <div class="stat-key">wrong</div>
        </div>
        <div class="stat">
          <div class="stat-val">{Math.round((correctCount / questions.length) * 100)}%</div>
          <div class="stat-key">accuracy</div>
        </div>
      </div>

      <div class="answer-log">
        {#each questions as q, i}
          {@const res = questionResults[i]}
          <div class="log-row" class:log-correct={res?.correct} class:log-wrong={!res?.correct}>
            <span class="log-flag">{q.flag}</span>
            <span class="log-prompt">{q.prompt}</span>
            <span class="log-answer">{q.correct}</span>
            <span class="log-pts">{res?.correct ? `+${res.points}` : '—'}</span>
          </div>
        {/each}
      </div>

      <div class="result-btns">
        <button class="start-btn" onclick={startGame}>Play Again</button>
        <a href="../../arcade.html" class="back-link">← Arcade</a>
      </div>
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

  /* START */
  .start-screen {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 480px;
    width: 100%;
  }
  .logo { font-size: 80px; }
  h1 { font-size: clamp(2rem, 6vw, 3rem); font-weight: 900; letter-spacing: -1px; }
  .subtitle { color: #aaa; font-size: 1rem; }

  .start-btn {
    background: #9b59b6;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 16px 52px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.1s, background 0.15s;
    box-shadow: 0 4px 20px rgba(155,89,182,0.5);
  }
  .start-btn:hover { background: #8e44ad; transform: scale(1.04); }
  .start-btn:active { transform: scale(0.97); }

  .back-link { color: #666; text-decoration: none; font-size: 0.9rem; }
  .back-link:hover { color: #aaa; }

  /* QUESTION */
  .question-screen {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
  }

  .top-bar {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 0.95rem;
  }
  .q-counter { color: #aaa; }
  .score-display { font-weight: 700; color: #f1c40f; margin-left: auto; font-size: 1rem; }
  .streak { font-weight: 700; color: #e74c3c; font-size: 1rem; }

  .timer-bar {
    height: 8px;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  .timer-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 1s linear, background 0.5s;
  }
  .timer-num {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    transition: color 0.5s;
  }

  .question-card {
    background: #16213e;
    border-radius: 16px;
    padding: 24px 20px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.07);
  }
  .flag { font-size: 3.5rem; margin-bottom: 10px; }
  .prompt { font-size: clamp(1rem, 3vw, 1.25rem); font-weight: 600; line-height: 1.4; }

  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .option-btn {
    background: var(--color);
    border: none;
    border-radius: 12px;
    padding: 18px 12px;
    color: #fff;
    font-weight: 700;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.1s, filter 0.15s;
    text-align: left;
    min-height: 68px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
  }
  .option-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.08);
    opacity: 0;
    transition: opacity 0.15s;
  }
  .option-btn:hover:not([disabled])::after { opacity: 1; }
  .option-btn:hover:not([disabled]) { transform: scale(1.02); }
  .option-btn:active:not([disabled]) { transform: scale(0.97); }

  .shape { font-size: 1.2rem; flex-shrink: 0; }
  .opt-text { flex: 1; line-height: 1.3; }

  /* Reveal states */
  .option-btn.correct { background: #27ae60 !important; animation: pop 0.3s ease; }
  .option-btn.wrong   { background: #c0392b !important; opacity: 0.85; }
  .option-btn.unchosen { background: #555 !important; opacity: 0.5; }
  .option-btn[disabled] { cursor: default; }

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }

  .reveal-banner {
    border-radius: 12px;
    padding: 16px 20px;
    font-size: 1.05rem;
    font-weight: 700;
    text-align: center;
    animation: slideUp 0.3s ease;
  }
  .correct-banner { background: rgba(39,174,96,0.25); border: 1px solid #27ae60; color: #2ecc71; }
  .wrong-banner   { background: rgba(231,76,60,0.2);  border: 1px solid #e74c3c; color: #ff6b6b; }

  @keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  .score-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: 900;
    color: #f1c40f;
    text-shadow: 0 0 20px rgba(241,196,15,0.8);
    pointer-events: none;
    animation: floatUp 1.2s ease forwards;
    z-index: 100;
  }
  @keyframes floatUp {
    0%   { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -120%); }
  }

  /* RESULTS */
  .results-screen {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .medal { font-size: 5rem; animation: bounce 0.6s ease; }
  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-16px); }
  }
  h2 { font-size: 1.8rem; font-weight: 900; }
  .final-score { font-size: clamp(3rem, 10vw, 5rem); font-weight: 900; color: #f1c40f; line-height: 1; }
  .score-label { color: #aaa; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; }

  .stats-row { display: flex; gap: 28px; margin: 8px 0; }
  .stat { text-align: center; }
  .stat-val { font-size: 2rem; font-weight: 900; }
  .stat-key { font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }

  .answer-log {
    width: 100%;
    max-height: 280px;
    overflow-y: auto;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.07);
    background: #16213e;
  }
  .log-row {
    display: grid;
    grid-template-columns: 2rem 1fr auto auto;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    font-size: 0.85rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .log-row:last-child { border-bottom: none; }
  .log-correct { background: rgba(39,174,96,0.08); }
  .log-wrong   { background: rgba(231,76,60,0.08); }
  .log-flag { font-size: 1.2rem; }
  .log-prompt { color: #ccc; }
  .log-answer { font-weight: 600; }
  .log-pts { font-weight: 700; color: #f1c40f; white-space: nowrap; }
  .log-wrong .log-pts { color: #e74c3c; }

  .result-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
</style>
