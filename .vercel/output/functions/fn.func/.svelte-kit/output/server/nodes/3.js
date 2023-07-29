

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.09f23b60.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.6cff9c76.js"];
export const stylesheets = ["_app/immutable/assets/3.7b2e5d8c.css"];
export const fonts = [];
