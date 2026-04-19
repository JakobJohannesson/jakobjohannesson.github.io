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
		client: {start:"_app/immutable/entry/start.OXUMLfSb.js",app:"_app/immutable/entry/app.DqzjuvlZ.js",imports:["_app/immutable/entry/start.OXUMLfSb.js","_app/immutable/chunks/DtU9klUf.js","_app/immutable/chunks/dhVegIVv.js","_app/immutable/chunks/OnUqSzL9.js","_app/immutable/entry/app.DqzjuvlZ.js","_app/immutable/chunks/dhVegIVv.js","_app/immutable/chunks/B0uAdWl-.js","_app/immutable/chunks/CJ8mss93.js","_app/immutable/chunks/OnUqSzL9.js","_app/immutable/chunks/DddTFAd9.js","_app/immutable/chunks/BlDT7wmN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
