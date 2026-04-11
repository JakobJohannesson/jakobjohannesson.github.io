export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "tetris/build/_app",
	assets: new Set(["favicon.png","tetris.mp3"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.FmKRmS03.js",app:"_app/immutable/entry/app.BqSpjCDJ.js",imports:["_app/immutable/entry/start.FmKRmS03.js","_app/immutable/chunks/D-Rzgs-S.js","_app/immutable/chunks/BQQomwQr.js","_app/immutable/chunks/B6cpMA6b.js","_app/immutable/chunks/C9TTIspm.js","_app/immutable/entry/app.BqSpjCDJ.js","_app/immutable/chunks/BQQomwQr.js","_app/immutable/chunks/CEiMWdcP.js","_app/immutable/chunks/DleJNcjr.js","_app/immutable/chunks/C9TTIspm.js","_app/immutable/chunks/BcnP1Wo2.js","_app/immutable/chunks/CMamom5m.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
