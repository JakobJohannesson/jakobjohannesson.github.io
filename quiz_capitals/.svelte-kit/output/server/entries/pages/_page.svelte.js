import { a0 as ssr_context, a1 as head, a2 as ensure_array_like, a3 as attr_class, e as escape_html, a4 as attr, $ as derived } from "../../chunks/renderer.js";
import "clsx";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const fbApp = initializeApp({
      projectId: "aktiecase-quiz",
      appId: "1:52134070639:web:e901510fd6600d489e009a",
      databaseURL: "https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app",
      apiKey: "AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4",
      authDomain: "aktiecase-quiz.firebaseapp.com",
      messagingSenderId: "52134070639"
    });
    getDatabase(fbApp);
    function loadQuizzes() {
      if (typeof localStorage === "undefined") return [];
      try {
        return JSON.parse(localStorage.getItem("user_quizzes") ?? "[]");
      } catch {
        return [];
      }
    }
    let savedQuizzes = loadQuizzes();
    let selectedQuizId = "capitals";
    let joinCodeInput = "";
    const allQuizCards = derived(() => [
      {
        id: "capitals",
        title: "European Capitals",
        emoji: "🌍",
        questionCount: 15
      },
      ...savedQuizzes.map((q) => ({
        id: q.id,
        title: q.title,
        emoji: q.emoji,
        questionCount: q.questions.length
      }))
    ]);
    typeof crypto !== "undefined" ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    onDestroy(() => {
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Quiz</title>`);
      });
    });
    $$renderer2.push(`<div class="app svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="home svelte-1uha8ag"><div class="home-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Quiz</h1> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div> <p class="section-label svelte-1uha8ag">Select a quiz</p> <div class="quiz-grid svelte-1uha8ag"><!--[-->`);
      const each_array = ensure_array_like(allQuizCards());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let q = each_array[$$index];
        $$renderer2.push(`<button${attr_class("quiz-card svelte-1uha8ag", void 0, { "selected": selectedQuizId === q.id })}><span class="qc-emoji svelte-1uha8ag">${escape_html(q.emoji)}</span> <span class="qc-title svelte-1uha8ag">${escape_html(q.title)}</span> <span class="qc-count svelte-1uha8ag">${escape_html(q.questionCount)} questions</span> `);
        if (q.id !== "capitals") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="qc-actions svelte-1uha8ag"><button title="Edit" class="svelte-1uha8ag">✏️</button> <button title="Delete" class="svelte-1uha8ag">🗑️</button></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></button>`);
      }
      $$renderer2.push(`<!--]--> <button class="quiz-card new-card svelte-1uha8ag"><span class="qc-emoji svelte-1uha8ag">＋</span> <span class="qc-title svelte-1uha8ag">Create Quiz</span></button></div> <div class="play-row svelte-1uha8ag"><button class="btn-primary svelte-1uha8ag">Solo Play</button> <button class="btn-secondary svelte-1uha8ag">Create Room</button></div> <div class="join-row svelte-1uha8ag"><input class="text-input code-input svelte-1uha8ag"${attr("value", joinCodeInput)} placeholder="Room code"${attr("maxlength", 4)}/> <button class="btn-join svelte-1uha8ag"${attr("disabled", !joinCodeInput.trim(), true)}>Join Room</button></div> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
