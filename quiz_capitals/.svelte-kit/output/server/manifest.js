export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "quiz_capitals/build/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.gQNysUiA.js",app:"_app/immutable/entry/app.DwtNPPs_.js",imports:["_app/immutable/entry/start.gQNysUiA.js","_app/immutable/chunks/BxIJOMfS.js","_app/immutable/chunks/n6AzXfRF.js","_app/immutable/chunks/ZH1VYS0M.js","_app/immutable/entry/app.DwtNPPs_.js","_app/immutable/chunks/n6AzXfRF.js","_app/immutable/chunks/BZgR-VQr.js","_app/immutable/chunks/CPshsWj0.js","_app/immutable/chunks/ZH1VYS0M.js","_app/immutable/chunks/BepJMPXw.js","_app/immutable/chunks/BI9kL_bt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/quiz_capitals/build/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
