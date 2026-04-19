

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Dv88v9U9.js","_app/immutable/chunks/CPshsWj0.js","_app/immutable/chunks/n6AzXfRF.js","_app/immutable/chunks/BI9kL_bt.js"];
export const stylesheets = [];
export const fonts = [];
