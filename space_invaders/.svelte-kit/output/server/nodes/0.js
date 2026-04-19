

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CuP1QizV.js","_app/immutable/chunks/C3YpS5Vu.js","_app/immutable/chunks/DbqLIYcO.js","_app/immutable/chunks/BDSGXRpY.js"];
export const stylesheets = [];
export const fonts = [];
