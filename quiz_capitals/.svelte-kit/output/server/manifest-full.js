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
		client: {start:"_app/immutable/entry/start.BlNa6n9j.js",app:"_app/immutable/entry/app.Wb-uIr1U.js",imports:["_app/immutable/entry/start.BlNa6n9j.js","_app/immutable/chunks/CoX1bmrH.js","_app/immutable/chunks/g4PfawHS.js","_app/immutable/chunks/CXLXOrcK.js","_app/immutable/entry/app.Wb-uIr1U.js","_app/immutable/chunks/g4PfawHS.js","_app/immutable/chunks/BS-nX1oO.js","_app/immutable/chunks/hbZDdk5z.js","_app/immutable/chunks/CXLXOrcK.js","_app/immutable/chunks/BdbKUOii.js","_app/immutable/chunks/Ceh8QWHo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
