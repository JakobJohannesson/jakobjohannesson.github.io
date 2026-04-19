import { a0 as ssr_context, a1 as head, a2 as attr } from "../../chunks/renderer.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const W = 800;
    const H = 600;
    let animId;
    onDestroy(() => cancelAnimationFrame(animId));
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Space Invaders</title>`);
      });
    });
    $$renderer2.push(`<div class="wrapper svelte-1uha8ag"><a class="back svelte-1uha8ag" href="../../arcade.html">← Arcade</a> <canvas${attr("width", W)}${attr("height", H)} class="svelte-1uha8ag"></canvas> <p class="hint svelte-1uha8ag">← → / A D to move  ·  Space to shoot  ·  Space to pause</p></div>`);
  });
}
export {
  _page as default
};
