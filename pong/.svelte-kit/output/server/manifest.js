export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "pong/build/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.mmDliT9o.js",app:"_app/immutable/entry/app.D9oPY7wi.js",imports:["_app/immutable/entry/start.mmDliT9o.js","_app/immutable/chunks/DCTSYz6o.js","_app/immutable/chunks/BeRMmQAx.js","_app/immutable/chunks/CB4rwZ4_.js","_app/immutable/entry/app.D9oPY7wi.js","_app/immutable/chunks/BeRMmQAx.js","_app/immutable/chunks/CGP304X_.js","_app/immutable/chunks/JaY5rIdE.js","_app/immutable/chunks/WnfDVGOB.js","_app/immutable/chunks/CB4rwZ4_.js","_app/immutable/chunks/BZ6-Cvqo.js","_app/immutable/chunks/D0I9OFrR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/pong/build/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
