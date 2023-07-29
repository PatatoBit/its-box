

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b344ff81.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.fbe2fbe3.js"];
export const stylesheets = ["_app/immutable/assets/0.04afc373.css"];
export const fonts = [];
