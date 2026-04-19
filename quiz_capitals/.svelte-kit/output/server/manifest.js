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
		client: {start:"_app/immutable/entry/start.QX3Pu_nf.js",app:"_app/immutable/entry/app.DFjEmsYI.js",imports:["_app/immutable/entry/start.QX3Pu_nf.js","_app/immutable/chunks/BXB3PzZI.js","_app/immutable/chunks/DpYGvlyP.js","_app/immutable/chunks/DF0VU7MB.js","_app/immutable/entry/app.DFjEmsYI.js","_app/immutable/chunks/DpYGvlyP.js","_app/immutable/chunks/BiCfskr2.js","_app/immutable/chunks/BWRt2y-Q.js","_app/immutable/chunks/DF0VU7MB.js","_app/immutable/chunks/CSLQBlsr.js","_app/immutable/chunks/bWENZVhz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
