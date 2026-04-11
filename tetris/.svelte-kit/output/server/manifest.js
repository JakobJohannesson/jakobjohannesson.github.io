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
		client: {start:"_app/immutable/entry/start.ClCh-kPA.js",app:"_app/immutable/entry/app.DaIx0CR2.js",imports:["_app/immutable/entry/start.ClCh-kPA.js","_app/immutable/chunks/BvW-YpQh.js","_app/immutable/chunks/seqa1bd1.js","_app/immutable/chunks/BFQEjs7j.js","_app/immutable/chunks/rY99BFko.js","_app/immutable/entry/app.DaIx0CR2.js","_app/immutable/chunks/seqa1bd1.js","_app/immutable/chunks/Dk0sVmrq.js","_app/immutable/chunks/BMolmxnJ.js","_app/immutable/chunks/rY99BFko.js","_app/immutable/chunks/BukeAgHU.js","_app/immutable/chunks/CNFYT1Ib.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
