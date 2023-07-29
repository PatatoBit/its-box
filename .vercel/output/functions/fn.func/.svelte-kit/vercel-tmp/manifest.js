export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cox.png","favicon.png","upvote.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.9cd726ed.js","app":"_app/immutable/entry/app.6fbda57b.js","imports":["_app/immutable/entry/start.9cd726ed.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/singletons.fd61f8c2.js","_app/immutable/chunks/index.89553c05.js","_app/immutable/entry/app.6fbda57b.js","_app/immutable/chunks/scheduler.1a5d8f86.js","_app/immutable/chunks/index.fbe2fbe3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
