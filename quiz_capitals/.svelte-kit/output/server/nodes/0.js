

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BcyE_Myx.js","_app/immutable/chunks/BWRt2y-Q.js","_app/immutable/chunks/DpYGvlyP.js","_app/immutable/chunks/bWENZVhz.js"];
export const stylesheets = [];
export const fonts = [];
