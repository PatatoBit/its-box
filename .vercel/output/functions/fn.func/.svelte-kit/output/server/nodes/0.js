

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4cf51bf1.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.6cff9c76.js"];
export const stylesheets = ["_app/immutable/assets/0.5ed6cf61.css"];
export const fonts = [];
