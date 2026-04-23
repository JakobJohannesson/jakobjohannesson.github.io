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
		client: {start:"_app/immutable/entry/start.BnX7BJe-.js",app:"_app/immutable/entry/app.Lv89zMpv.js",imports:["_app/immutable/entry/start.BnX7BJe-.js","_app/immutable/chunks/DyHhn6WM.js","_app/immutable/chunks/DkSh6PvN.js","_app/immutable/chunks/CEW3G-pW.js","_app/immutable/entry/app.Lv89zMpv.js","_app/immutable/chunks/DkSh6PvN.js","_app/immutable/chunks/Cnw39R5H.js","_app/immutable/chunks/C20znJ1z.js","_app/immutable/chunks/CEW3G-pW.js","_app/immutable/chunks/DYRLH6H6.js","_app/immutable/chunks/BMEwHMeI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/tower_defense/build/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
