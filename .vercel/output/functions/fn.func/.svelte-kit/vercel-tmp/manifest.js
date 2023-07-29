export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["box.svg","cox.png","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8242b1b3.js","app":"_app/immutable/entry/app.2ac37ce8.js","imports":["_app/immutable/entry/start.8242b1b3.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/singletons.5da3f944.js","_app/immutable/chunks/index.89553c05.js","_app/immutable/entry/app.2ac37ce8.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.6cff9c76.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
