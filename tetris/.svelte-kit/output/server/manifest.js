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
		client: {start:"_app/immutable/entry/start.CpCKqNZ8.js",app:"_app/immutable/entry/app.CGEICY3H.js",imports:["_app/immutable/entry/start.CpCKqNZ8.js","_app/immutable/chunks/CgN-9sdB.js","_app/immutable/chunks/BjeO_481.js","_app/immutable/chunks/5sRrZVXr.js","_app/immutable/entry/app.CGEICY3H.js","_app/immutable/chunks/BjeO_481.js","_app/immutable/chunks/DdXyoSWS.js","_app/immutable/chunks/DruRyFLC.js","_app/immutable/chunks/5sRrZVXr.js","_app/immutable/chunks/BGrw3vBP.js","_app/immutable/chunks/_WvrTogS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/tetris/build/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
