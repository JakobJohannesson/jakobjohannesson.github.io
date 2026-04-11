

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DEeXnOgN.js","_app/immutable/chunks/DleJNcjr.js","_app/immutable/chunks/BQQomwQr.js","_app/immutable/chunks/CMamom5m.js"];
export const stylesheets = [];
export const fonts = [];
