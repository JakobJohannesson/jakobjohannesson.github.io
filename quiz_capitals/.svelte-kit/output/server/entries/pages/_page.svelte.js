import { a0 as ssr_context, a1 as head } from "../../chunks/renderer.js";
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
    typeof crypto !== "undefined" ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    onDestroy(() => {
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>European Capitals Quiz</title>`);
      });
    });
    $$renderer2.push(`<div class="app svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="center-col svelte-1uha8ag"><div class="logo svelte-1uha8ag">🌍</div> <h1 class="svelte-1uha8ag">European Capitals</h1> <p class="sub svelte-1uha8ag">Test your knowledge of European capitals</p> <button class="btn-primary svelte-1uha8ag">Solo Play</button> <div class="divider svelte-1uha8ag">or multiplayer</div> <div class="row-btns svelte-1uha8ag"><button class="btn-secondary svelte-1uha8ag">Create Room</button> <button class="btn-secondary svelte-1uha8ag">Join Room</button></div> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
