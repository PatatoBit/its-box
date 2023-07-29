

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f0120d9c.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.6cff9c76.js","_app/immutable/chunks/index.89553c05.js"];
export const stylesheets = ["_app/immutable/assets/2.4e3be46a.css"];
export const fonts = [];
