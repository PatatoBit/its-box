

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a2d9547b.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.fbe2fbe3.js","_app/immutable/chunks/singletons.fd61f8c2.js","_app/immutable/chunks/index.89553c05.js"];
export const stylesheets = [];
export const fonts = [];
