export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "breakout/build/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D5mfbJW-.js",app:"_app/immutable/entry/app.-1vIziPv.js",imports:["_app/immutable/entry/start.D5mfbJW-.js","_app/immutable/chunks/CCUBO7un.js","_app/immutable/chunks/DbqLIYcO.js","_app/immutable/chunks/Dqb4Ro7k.js","_app/immutable/entry/app.-1vIziPv.js","_app/immutable/chunks/DbqLIYcO.js","_app/immutable/chunks/BLUX8Sbc.js","_app/immutable/chunks/CyH3RqwQ.js","_app/immutable/chunks/C3YpS5Vu.js","_app/immutable/chunks/Dqb4Ro7k.js","_app/immutable/chunks/BDSGXRpY.js","_app/immutable/chunks/CD4CXpIv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/breakout/build/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
