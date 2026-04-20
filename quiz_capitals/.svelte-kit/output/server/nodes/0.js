

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DaCm6xlm.js","_app/immutable/chunks/hbZDdk5z.js","_app/immutable/chunks/g4PfawHS.js","_app/immutable/chunks/Ceh8QWHo.js"];
export const stylesheets = [];
export const fonts = [];
