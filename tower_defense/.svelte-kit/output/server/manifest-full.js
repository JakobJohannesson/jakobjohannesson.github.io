export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "tower_defense/build/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.hswikkXm.js",app:"_app/immutable/entry/app.CTSgCLMG.js",imports:["_app/immutable/entry/start.hswikkXm.js","_app/immutable/chunks/DvNPtifq.js","_app/immutable/chunks/DkSh6PvN.js","_app/immutable/chunks/CEW3G-pW.js","_app/immutable/entry/app.CTSgCLMG.js","_app/immutable/chunks/DkSh6PvN.js","_app/immutable/chunks/Cnw39R5H.js","_app/immutable/chunks/C20znJ1z.js","_app/immutable/chunks/CEW3G-pW.js","_app/immutable/chunks/DYRLH6H6.js","_app/immutable/chunks/BMEwHMeI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
