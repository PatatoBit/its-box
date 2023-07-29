

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.640d79f5.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.fbe2fbe3.js","_app/immutable/chunks/index.89553c05.js"];
export const stylesheets = ["_app/immutable/assets/2.0a8d004c.css"];
export const fonts = [];
