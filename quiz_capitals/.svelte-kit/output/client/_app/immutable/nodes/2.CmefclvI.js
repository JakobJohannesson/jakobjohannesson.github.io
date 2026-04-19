import{a as $,f as G}from"../chunks/CPshsWj0.js";import{a as sl}from"../chunks/ZH1VYS0M.js";import{h as ge,c as un,C as so,i as zn,a as il,b as io,J as h,r as rl,P as ol,s as rr,d as dn,e as cn,a6 as ro,ae as al,_ as or,k as xt,j as js,aC as ll,l as cl,at as hl,aD as ul,ad as gi,aE as dl,L as ar,aF as fl,aG as _l,ax as pl,aH as Xe,ap as gl,f as oo,p as ao,aI as As,aJ as ml,ab as vl,m as yl,g as Cl,a8 as Ys,aK as El,a1 as bl,M as wl,aL as Il,aM as Sl,aN as Tl,aO as Nl,aP as Rl,aQ as Al,aR as kl,az as xl,o as Dl,K as Pl,t as Ol,aA as Q,am as en,w as Ml,ag as Ll,x as b,y,aB as Ce,aS as Fl,z as w,$ as Bl,v as ne,an as C,q as Wl,aT as ks,aU as xs}from"../chunks/n6AzXfRF.js";import{d as Ul,a as pe,s as M}from"../chunks/BZgR-VQr.js";import{i as Ve}from"../chunks/BepJMPXw.js";function tn(n,e){return e}function Hl(n,e,t){for(var s=[],i=e.length,r,o=e.length,a=0;a<i;a++){let u=e[a];ao(u,()=>{if(r){if(r.pending.delete(u),r.done.add(u),r.pending.size===0){var f=n.outrogroups;Ks(n,gi(r.done)),f.delete(r),f.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=s.length===0&&t!==null;if(c){var l=t,d=l.parentNode;vl(d),d.append(l),n.items.clear()}Ks(n,e,!c)}else r={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Ks(n,e,t=!0){var s;if(n.pending.size>0){s=new Set;for(const o of n.pending.values())for(const a of o)s.add(n.items.get(a).e)}for(var i=0;i<e.length;i++){var r=e[i];if(s!=null&&s.has(r)){r.f|=Xe;const o=document.createDocumentFragment();yl(r,o)}else Cl(e[i],t)}}var lr;function nn(n,e,t,s,i,r=null){var o=n,a=new Map;{var c=n;o=ge?un(so(c)):c.appendChild(zn())}ge&&il();var l=null,d=hl(()=>{var x=t();return ul(x)?x:x==null?[]:gi(x)}),u,f=new Map,p=!0;function _(x){(K.effect.f&gl)===0&&(K.pending.delete(x),K.fallback=l,$l(K,u,o,e,s),l!==null&&(u.length===0?(l.f&Xe)===0?oo(l):(l.f^=Xe,hn(l,null,o)):ao(l,()=>{l=null})))}function S(x){K.pending.delete(x)}var H=io(()=>{u=h(d);var x=u.length;let Z=!1;if(ge){var Fe=rl(o)===ol;Fe!==(x===0)&&(o=rr(),un(o),dn(!1),Z=!0)}for(var Se=new Set,Te=xt,gt=cl(),Ne=0;Ne<x;Ne+=1){ge&&cn.nodeType===ro&&cn.data===al&&(o=cn,Z=!0,dn(!1));var be=u[Ne],Be=s(be,Ne),ae=p?null:a.get(Be);ae?(ae.v&&or(ae.v,be),ae.i&&or(ae.i,Ne),gt&&Te.unskip_effect(ae.e)):(ae=Vl(a,p?o:lr??(lr=zn()),be,Be,Ne,i,e,t),p||(ae.e.f|=Xe),a.set(Be,ae)),Se.add(Be)}if(x===0&&r&&!l&&(p?l=js(()=>r(o)):(l=js(()=>r(lr??(lr=zn()))),l.f|=Xe)),x>Se.size&&ll(),ge&&x>0&&un(rr()),!p)if(f.set(Te,Se),gt){for(const[Is,ue]of a)Se.has(Is)||Te.skip_effect(ue.e);Te.oncommit(_),Te.ondiscard(S)}else _(Te);Z&&dn(!0),h(d)}),K={effect:H,items:a,pending:f,outrogroups:null,fallback:l};p=!1,ge&&(o=cn)}function sn(n){for(;n!==null&&(n.f&ml)===0;)n=n.next;return n}function $l(n,e,t,s,i){var Ne;var r=e.length,o=n.items,a=sn(n.effect.first),c,l=null,d=[],u=[],f,p,_,S;for(S=0;S<r;S+=1){if(f=e[S],p=i(f,S),_=o.get(p).e,n.outrogroups!==null)for(const be of n.outrogroups)be.pending.delete(_),be.done.delete(_);if((_.f&As)!==0&&oo(_),(_.f&Xe)!==0)if(_.f^=Xe,_===a)hn(_,null,t);else{var H=l?l.next:a;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),ot(n,l,_),ot(n,_,H),hn(_,H,t),l=_,d=[],u=[],a=sn(l.next);continue}if(_!==a){if(c!==void 0&&c.has(_)){if(d.length<u.length){var K=u[0],x;l=K.prev;var Z=d[0],Fe=d[d.length-1];for(x=0;x<d.length;x+=1)hn(d[x],K,t);for(x=0;x<u.length;x+=1)c.delete(u[x]);ot(n,Z.prev,Fe.next),ot(n,l,Z),ot(n,Fe,K),a=K,l=Fe,S-=1,d=[],u=[]}else c.delete(_),hn(_,a,t),ot(n,_.prev,_.next),ot(n,_,l===null?n.effect.first:l.next),ot(n,l,_),l=_;continue}for(d=[],u=[];a!==null&&a!==_;)(c??(c=new Set)).add(a),u.push(a),a=sn(a.next);if(a===null)continue}(_.f&Xe)===0&&d.push(_),l=_,a=sn(_.next)}if(n.outrogroups!==null){for(const be of n.outrogroups)be.pending.size===0&&(Ks(n,gi(be.done)),(Ne=n.outrogroups)==null||Ne.delete(be));n.outrogroups.size===0&&(n.outrogroups=null)}if(a!==null||c!==void 0){var Se=[];if(c!==void 0)for(_ of c)(_.f&As)===0&&Se.push(_);for(;a!==null;)(a.f&As)===0&&a!==n.fallback&&Se.push(a),a=sn(a.next);var Te=Se.length;if(Te>0){var gt=r===0?t:null;Hl(n,Se,gt)}}}function Vl(n,e,t,s,i,r,o,a){var c=(o&fl)!==0?(o&_l)===0?pl(t,!1,!1):ar(t):null,l=(o&dl)!==0?ar(i):null;return{v:c,i:l,e:js(()=>(r(e,c??t,l??i,a),()=>{n.delete(s)}))}}function hn(n,e,t){if(n.nodes)for(var s=n.nodes.start,i=n.nodes.end,r=e&&(e.f&Xe)===0?e.nodes.start:t;s!==null;){var o=Ys(s);if(r.before(s),s===i)return;s=o}}function ot(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function ql(n,e){let t=null,s=ge;var i;if(ge){t=cn;for(var r=so(document.head);r!==null&&(r.nodeType!==ro||r.data!==n);)r=Ys(r);if(r===null)dn(!1);else{var o=Ys(r);r.remove(),un(o)}}ge||(i=document.head.appendChild(zn()));try{io(()=>e(i),El|bl)}finally{s&&(dn(!0),un(t))}}const cr=[...` 	
\r\f \v\uFEFF`];function zl(n,e,t){var s=n==null?"":""+n;if(t){for(var i of Object.keys(t))if(t[i])s=s?s+" "+i:i;else if(s.length)for(var r=i.length,o=0;(o=s.indexOf(i,o))>=0;){var a=o+r;(o===0||cr.includes(s[o-1]))&&(a===s.length||cr.includes(s[a]))?s=(o===0?"":s.substring(0,o))+s.substring(a+1):o=a}}return s===""?null:s}function Gl(n,e){return n==null?null:String(n)}function Ct(n,e,t,s,i,r){var o=n.__className;if(ge||o!==t||o===void 0){var a=zl(t,s,r);(!ge||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=t}else if(r&&i!==r)for(var c in r){var l=!!r[c];(i==null||l!==!!i[c])&&n.classList.toggle(c,l)}return r}function At(n,e,t,s){var i=n.__style;if(ge||i!==e){var r=Gl(e);(!ge||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n.__style=e}return s}const jl=Symbol("is custom element"),Yl=Symbol("is html"),Kl=Al?"link":"LINK";function Ds(n){if(ge){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;fn(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;fn(n,"checked",null),n.checked=i}}};n.__on_r=t,wl(t),Il()}}function fn(n,e,t,s){var i=Ql(n);ge&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===Kl)||i[e]!==(i[e]=t)&&(e==="loading"&&(n[Nl]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Xl(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Ql(n){return n.__attributes??(n.__attributes={[jl]:n.nodeName.includes("-"),[Yl]:n.namespaceURI===Sl})}var hr=new Map;function Xl(n){var e=n.getAttribute("is")||n.nodeName,t=hr.get(e);if(t)return t;hr.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=Rl(i);for(var o in s)s[o].set&&t.push(o);i=Tl(i)}return t}function Ps(n,e,t=e){var s=new WeakSet;kl(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=Os(n)?Ms(r):r,t(r),xt!==null&&s.add(xt),await xl(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,c=n.value.length;if(n.value=r??"",a!==null){var l=n.value.length;o===a&&a===c&&l>c?(n.selectionStart=l,n.selectionEnd=l):(n.selectionStart=o,n.selectionEnd=Math.min(a,l))}}}),(ge&&n.defaultValue!==n.value||Dl(e)==null&&n.value)&&(t(Os(n)?Ms(n.value):n.value),xt!==null&&s.add(xt)),Pl(()=>{var i=e();if(n===document.activeElement){var r=xt;if(s.has(r))return}Os(n)&&i===Ms(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Os(n){var e=n.type;return e==="number"||e==="range"}function Ms(n){return n===""?null:+n}const Jl=()=>{};var ur={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw $t(e)},$t=function(n){return new Error("Firebase Database ("+lo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(t[d],t[u],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(co(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new ec;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const _=l<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ec extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ho=function(n){const e=co(n);return mi.encodeByteArray(e,!0)},jn=function(n){return ho(n).replace(/\./g,"")},Qs=function(n){try{return mi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){return uo(void 0,n)}function uo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!nc(t)||(n[t]=uo(n[t],e[t]));return n}function nc(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=()=>sc().__FIREBASE_DEFAULTS__,rc=()=>{if(typeof process>"u"||typeof ur>"u")return;const n=ur.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qs(n[1]);return e&&JSON.parse(e)},fo=()=>{try{return Jl()||ic()||rc()||oc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ac=n=>{var e,t;return(t=(e=fo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},lc=n=>{const e=ac(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},_o=()=>{var n;return(n=fo())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[jn(JSON.stringify(t)),jn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function po(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hc())}function uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dc(){return lo.NODE_ADMIN===!0}function fc(){try{return typeof indexedDB=="object"}catch{return!1}}function _c(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="FirebaseError";class xn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=pc,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,s)}}function gc(n,e){return n.replace(mc,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const mc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){return JSON.parse(n)}function ie(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=yn(Qs(r[0])||""),t=yn(Qs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},vc=function(n){const e=mo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yc=function(n){const e=mo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Lt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function dr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Kn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(fr(r)&&fr(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function fr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function us(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ds=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wc(n){return(await fetch(n,{credentials:"include"})).ok}class Cn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tc(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sc(n){return n===Et?void 0:n}function Tc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ic(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Rc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Ac=q.INFO,kc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},xc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=kc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yo{constructor(e){this.name=e,this._logLevel=Ac,this._logHandler=xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Dc=(n,e)=>e.some(t=>n instanceof t);let _r,pr;function Pc(){return _r||(_r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oc(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Co=new WeakMap,Xs=new WeakMap,Eo=new WeakMap,Ls=new WeakMap,vi=new WeakMap;function Mc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ct(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Co.set(t,n)}).catch(()=>{}),vi.set(e,n),e}function Lc(n){if(Xs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Xs.set(n,e)}let Js={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fc(n){Js=n(Js)}function Bc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Fs(this),e,...t);return Eo.set(s,e.sort?e.sort():[e]),ct(s)}:Oc().includes(n)?function(...e){return n.apply(Fs(this),e),ct(Co.get(this))}:function(...e){return ct(n.apply(Fs(this),e))}}function Wc(n){return typeof n=="function"?Bc(n):(n instanceof IDBTransaction&&Lc(n),Dc(n,Pc())?new Proxy(n,Js):n)}function ct(n){if(n instanceof IDBRequest)return Mc(n);if(Ls.has(n))return Ls.get(n);const e=Wc(n);return e!==n&&(Ls.set(n,e),vi.set(e,n)),e}const Fs=n=>vi.get(n);function Uc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ct(o.result),c.oldVersion,c.newVersion,ct(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Hc=["get","getKey","getAll","getAllKeys","count"],$c=["put","add","delete","clear"],Bs=new Map;function gr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bs.get(e))return Bs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=$c.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hc.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Bs.set(e,r),r}Fc(n=>({...n,get:(e,t,s)=>gr(e,t)||n.get(e,t,s),has:(e,t)=>!!gr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function qc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",mr="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new yo("@firebase/app"),zc="@firebase/app-compat",Gc="@firebase/analytics-compat",jc="@firebase/analytics",Yc="@firebase/app-check-compat",Kc="@firebase/app-check",Qc="@firebase/auth",Xc="@firebase/auth-compat",Jc="@firebase/database",Zc="@firebase/data-connect",eh="@firebase/database-compat",th="@firebase/functions",nh="@firebase/functions-compat",sh="@firebase/installations",ih="@firebase/installations-compat",rh="@firebase/messaging",oh="@firebase/messaging-compat",ah="@firebase/performance",lh="@firebase/performance-compat",ch="@firebase/remote-config",hh="@firebase/remote-config-compat",uh="@firebase/storage",dh="@firebase/storage-compat",fh="@firebase/firestore",_h="@firebase/ai",ph="@firebase/firestore-compat",gh="firebase",mh="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",vh={[Zs]:"fire-core",[zc]:"fire-core-compat",[jc]:"fire-analytics",[Gc]:"fire-analytics-compat",[Kc]:"fire-app-check",[Yc]:"fire-app-check-compat",[Qc]:"fire-auth",[Xc]:"fire-auth-compat",[Jc]:"fire-rtdb",[Zc]:"fire-data-connect",[eh]:"fire-rtdb-compat",[th]:"fire-fn",[nh]:"fire-fn-compat",[sh]:"fire-iid",[ih]:"fire-iid-compat",[rh]:"fire-fcm",[oh]:"fire-fcm-compat",[ah]:"fire-perf",[lh]:"fire-perf-compat",[ch]:"fire-rc",[hh]:"fire-rc-compat",[uh]:"fire-gcs",[dh]:"fire-gcs-compat",[fh]:"fire-fst",[ph]:"fire-fst-compat",[_h]:"fire-vertex","fire-js":"fire-js",[gh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map,yh=new Map,ti=new Map;function vr(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xn(n){const e=n.name;if(ti.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,n);for(const t of Qn.values())vr(t,n);for(const t of yh.values())vr(t,n);return!0}function Ch(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Eh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new go("app","Firebase",bh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=mh;function bo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ei,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ht.create("bad-app-name",{appName:String(i)});if(t||(t=_o()),!t)throw ht.create("no-options");const r=Qn.get(i);if(r){if(Kn(t,r.options)&&Kn(s,r.config))return r;throw ht.create("duplicate-app",{appName:i})}const o=new Nc(i);for(const c of ti.values())o.addComponent(c);const a=new wh(t,s,o);return Qn.set(i,a),a}function Sh(n=ei){const e=Qn.get(n);if(!e&&n===ei&&_o())return bo();if(!e)throw ht.create("no-app",{appName:n});return e}function Pt(n,e,t){let s=vh[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(o.join(" "));return}Xn(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="firebase-heartbeat-database",Nh=1,En="firebase-heartbeat-store";let Ws=null;function wo(){return Ws||(Ws=Uc(Th,Nh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(En)}catch(t){console.warn(t)}}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),Ws}async function Rh(n){try{const t=(await wo()).transaction(En),s=await t.objectStore(En).get(Io(n));return await t.done,s}catch(e){if(e instanceof xn)et.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function yr(n,e){try{const s=(await wo()).transaction(En,"readwrite");await s.objectStore(En).put(e,Io(n)),await s.done}catch(t){if(t instanceof xn)et.warn(t.message);else{const s=ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(s.message)}}}function Io(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=1024,kh=30;class xh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ph(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>kh){const o=Oh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cr(),{heartbeatsToSend:s,unsentEntries:i}=Dh(this._heartbeatsCache.heartbeats),r=jn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return et.warn(t),""}}}function Cr(){return new Date().toISOString().substring(0,10)}function Dh(n,e=Ah){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Er(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Er(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fc()?_c().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Er(n){return jn(JSON.stringify({version:2,heartbeats:n})).length}function Oh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){Xn(new Cn("platform-logger",e=>new Vc(e),"PRIVATE")),Xn(new Cn("heartbeat",e=>new xh(e),"PRIVATE")),Pt(Zs,mr,n),Pt(Zs,mr,"esm2020"),Pt("fire-js","")}Mh("");var Lh="firebase",Fh="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Lh,Fh,"app");var br={};const wr="@firebase/database",Ir="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="";function Bh(n){So=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wh(e)}}catch{}return new Uh},wt=To("localStorage"),Hh=To("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new yo("@firebase/database"),$h=(function(){let n=1;return function(){return n++}})(),No=function(n){const e=bc(n),t=new Ec;t.update(e);const s=t.digest();return mi.encodeByteArray(s)},Dn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Dn.apply(null,s):typeof s=="object"?e+=ie(s):e+=s,e+=" "}return e};let _n=null,Sr=!0;const Vh=function(n,e){g(!0,"Can't turn on custom loggers persistently."),Ot.logLevel=q.VERBOSE,_n=Ot.log.bind(Ot)},ce=function(...n){if(Sr===!0&&(Sr=!1,_n===null&&Hh.get("logging_enabled")===!0&&Vh()),_n){const e=Dn.apply(null,n);_n(e)}},Pn=function(n){return function(...e){ce(n,...e)}},ni=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dn(...n);Ot.error(e)},tt=function(...n){const e=`FIREBASE FATAL ERROR: ${Dn(...n)}`;throw Ot.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+Dn(...n);Ot.warn(e)},qh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ft="[MIN_NAME]",It="[MAX_NAME]",Nt=function(n,e){if(n===e)return 0;if(n===Ft||e===It)return-1;if(e===Ft||n===It)return 1;{const t=Tr(n),s=Tr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Gh=function(n,e){return n===e?0:n<e?-1:1},rn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ie(e))},Ci=function(n){if(typeof n!="object"||n===null)return ie(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ie(e[s]),t+=":",t+=Ci(n[e[s]]);return t+="}",t},Ro=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function he(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ao=function(n){g(!yi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let f=parseInt(d.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},jh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Yh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Kh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Qh=new RegExp("^-?(0*)\\d{1,10}$"),Xh=-2147483648,Jh=2147483647,Tr=function(n){if(Qh.test(n)){const e=Number(n);if(e>=Xh&&e<=Jh)return e}return null},qt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},Zh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Eh(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class Gn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="5",ko="v",xo="s",Do="r",Po="f",Oo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mo="ls",Lo="p",si="ac",Fo="websocket",Bo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Uo(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===Fo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nu(n)&&(t.ns=n.namespace);const i=[];return he(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.counters_={}}incrementCounter(e,t=1){qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={},Hs={};function bi(n){const e=n.toString();return Us[e]||(Us[e]=new su),Us[e]}function iu(n,e){const t=n.toString();return Hs[t]||(Hs[t]=e()),Hs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="start",ou="close",au="pLPCommand",lu="pRTLPCB",Ho="id",$o="pw",Vo="ser",cu="cb",hu="seg",uu="ts",du="d",fu="dframe",qo=1870,zo=30,_u=qo-zo,pu=25e3,gu=3e4;class Dt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pn(e),this.stats_=bi(t),this.urlFn=c=>(this.appCheckToken&&(c[si]=this.appCheckToken),Uo(t,Bo,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ru(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gu)),zh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wi((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nr)this.id=a,this.password=c;else if(o===ou)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Nr]="t",s[Vo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ko]=Ei,this.transportSessionId&&(s[xo]=this.transportSessionId),this.lastSessionId&&(s[Mo]=this.lastSessionId),this.applicationId&&(s[Lo]=this.applicationId),this.appCheckToken&&(s[si]=this.appCheckToken),typeof location<"u"&&location.hostname&&Oo.test(location.hostname)&&(s[Do]=Po);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dt.forceAllow_=!0}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){return Dt.forceAllow_?!0:!Dt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jh()&&!Yh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ho(t),i=Ro(s,_u);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[fu]="t",s[Ho]=e,s[$o]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$h(),window[au+this.uniqueCallbackIdentifier]=e,window[lu+this.uniqueCallbackIdentifier]=t,this.myIFrame=wi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ho]=this.myID,e[$o]=this.myPW,e[Vo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zo+s.length<=qo;){const o=this.pendingSegs.shift();s=s+"&"+hu+i+"="+o.seg+"&"+uu+i+"="+o.ts+"&"+du+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(pu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=16384,vu=45e3;let Jn=null;typeof MozWebSocket<"u"?Jn=MozWebSocket:typeof WebSocket<"u"&&(Jn=WebSocket);class Oe{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pn(this.connId),this.stats_=bi(t),this.connURL=Oe.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ko]=Ei,typeof location<"u"&&location.hostname&&Oo.test(location.hostname)&&(o[Do]=Po),t&&(o[xo]=t),s&&(o[Mo]=s),i&&(o[si]=i),r&&(o[Lo]=r),Uo(e,Fo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wt.set("previous_websocket_failure",!0);try{let s;dc(),this.mySock=new Jn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jn!==null&&!Oe.forceDisallow_}static previouslyFailed(){return wt.isInMemoryStorage||wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=yn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ro(t,mu);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Oe.responsesRequiredToBeHealthy=2;Oe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{static get ALL_TRANSPORTS(){return[Dt,Oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Oe&&Oe.isAvailable();let s=t&&!Oe.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Oe];else{const i=this.transports_=[];for(const r of bn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);bn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=6e4,Cu=5e3,Eu=10*1024,bu=100*1024,$s="t",Rr="d",wu="s",Ar="r",Iu="e",kr="o",xr="a",Dr="n",Pr="p",Su="h";class Tu{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pn("c:"+this.id+":"),this.transportManager_=new bn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Eu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($s in e){const t=e[$s];t===xr?this.upgradeIfSecondaryHealthy_():t===Ar?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===kr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=rn("t",e),s=rn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=rn("t",e),s=rn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=rn($s,e);if(Rr in e){const s=e[Rr];if(t===Su){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Dr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===wu?this.onConnectionShutdown_(s):t===Ar?this.onReset_(s):t===Iu?ni("Server Error: "+s):t===kr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ni("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ei!==s&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),pn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends jo{static getInstance(){return new Zn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!po()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=32,Mr=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new U("")}function A(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ft(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function Ii(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function wn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof U)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new U(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function me(n,e){const t=A(n),s=A(e);if(t===null)return e;if(t===s)return me(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ru(n,e){const t=wn(n,0),s=wn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Nt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Si(n,e){if(ft(n)!==ft(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function xe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ft(n)>ft(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Au{constructor(e,t){this.errorPrefix_=t,this.parts_=wn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ds(this.parts_[s]);Ko(this)}}function ku(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ds(e),Ko(n)}function xu(n){const e=n.parts_.pop();n.byteLength_-=ds(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ko(n){if(n.byteLength_>Mr)throw new Error(n.errorPrefix_+"has a key path longer than "+Mr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Or)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Or+") or object contains a cycle "+bt(n))}function bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends jo{static getInstance(){return new Ti}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=1e3,Du=300*1e3,Lr=30*1e3,Pu=1.3,Ou=3e4,Mu="server_kill",Fr=3;class Ze extends Go{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ze.nextPersistentConnectionId_++,this.log_=Pn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=on,this.maxReconnectDelay_=Du,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ti.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ie(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new kn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ze.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qe(e,"w")){const s=Lt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=vc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ni("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ou&&(this.reconnectDelay_=on),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ze.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Tu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ve(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ve(u),c())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dr(this.interruptReasons_)&&(this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ci(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new U(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fr&&(this.reconnectDelay_=Lr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+So.replace(/\./g,"-")]=1,po()?e["framework.cordova"]=1:uc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zn.getInstance().currentlyOnline();return dr(this.interruptReasons_)&&e}}Ze.nextPersistentConnectionId_=0;Ze.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new k(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new k(Ft,e),i=new k(Ft,t);return this.compare(s,i)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class Qo extends fs{static get __EMPTY_NODE(){return Vn}static set __EMPTY_NODE(e){Vn=e}compare(e,t){return Nt(e.name,t.name)}isDefinedOn(e){throw $t("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return k.MIN}maxPost(){return new k(It,Vn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Vn)}toString(){return".key"}}const Mt=new Qo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??oe.RED,this.left=i??Ee.EMPTY_NODE,this.right=r??Ee.EMPTY_NODE}copy(e,t,s,i,r){return new oe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class Lu{copy(e,t,s,i,r){return this}insert(e,t,s){return new oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,t=Ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qn(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new Lu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e){return Nt(n.name,e.name)}function Ni(n,e){return Nt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;function Bu(n){ii=n}const Xo=function(n){return typeof n=="number"?"number:"+Ao(n):"string:"+n},Jo=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qe(e,".sv"),"Priority must be a string or number.")}else g(n===ii||n.isEmpty(),"priority of unexpected type.");g(n===ii||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;class re{static set __childrenNodeConstructor(e){Br=e}static get __childrenNodeConstructor(){return Br}constructor(e,t=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:A(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=A(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||ft(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ao(this.value_):e+=this.value_,this.lazyHash_=No(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(t),r=re.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo,ea;function Wu(n){Zo=n}function Uu(n){ea=n}class Hu extends fs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Nt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return k.MIN}maxPost(){return new k(It,new re("[PRIORITY-POST]",ea))}makePost(e,t){const s=Zo(e);return new k(t,new re("[PRIORITY-POST]",s))}toString(){return".priority"}}const J=new Hu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=Math.log(2);class Vu{constructor(e){const t=r=>parseInt(Math.log(r)/$u,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const es=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,f;if(d===0)return null;if(d===1)return u=n[c],f=t?t(u):u,new oe(f,u.node,oe.BLACK,null,null);{const p=parseInt(d/2,10)+c,_=i(c,p),S=i(p+1,l);return u=n[p],f=t?t(u):u,new oe(f,u.node,oe.BLACK,_,S)}},r=function(c){let l=null,d=null,u=n.length;const f=function(_,S){const H=u-_,K=u;u-=_;const x=i(H+1,K),Z=n[H],Fe=t?t(Z):Z;p(new oe(Fe,Z.node,S,null,x))},p=function(_){l?(l.left=_,l=_):(d=_,l=_)};for(let _=0;_<c.count;++_){const S=c.nextBitIsOne(),H=Math.pow(2,c.count-(_+1));S?f(H,oe.BLACK):(f(H,oe.BLACK),f(H,oe.RED))}return d},o=new Vu(n.length),a=r(o);return new Ee(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;const kt={};class Je{static get Default(){return g(kt&&J,"ChildrenNode.ts has not been loaded"),Vs=Vs||new Je({".priority":kt},{".priority":J}),Vs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Lt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ee?t:null}hasIndex(e){return qe(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Mt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(k.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=es(s,e.getCompare()):a=kt;const c=e.toString(),l={...this.indexSet_};l[c]=e;const d={...this.indexes_};return d[c]=a,new Je(d,l)}addToIndexes(e,t){const s=Yn(this.indexes_,(i,r)=>{const o=Lt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===kt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(k.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),es(a,o.getCompare())}else return kt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new k(e.name,a))),c.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,t){const s=Yn(this.indexes_,i=>{if(i===kt)return i;{const r=t.get(e.name);return r?i.remove(new k(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;class I{static get EMPTY_NODE(){return an||(an=new I(new Ee(Ni),null,Je.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||an}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?an:t}}getChild(e){const t=A(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new k(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?an:this.priorityNode_;return new I(i,o,r)}}updateChild(e,t){const s=A(e);if(s===null)return t;{g(A(e)!==".priority"||ft(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(J,(o,a)=>{t[o]=a.val(e),s++,r&&I.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xo(this.getPriority().val())+":"),this.forEachChild(J,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":No(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new k(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new k(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new k(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===On?-1:0}withIndex(e){if(e===Mt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(J),i=t.getIterator(J);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mt?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qu extends I{constructor(){super(new Ee(Ni),I.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const On=new qu;Object.defineProperties(k,{MIN:{value:new k(Ft,I.EMPTY_NODE)},MAX:{value:new k(It,On)}});Qo.__EMPTY_NODE=I.EMPTY_NODE;re.__childrenNodeConstructor=I;Bu(On);Uu(On);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=!0;function se(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new re(t,se(e))}if(!(n instanceof Array)&&zu){const t=[];let s=!1;if(he(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=se(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new k(o,c)))}}),t.length===0)return I.EMPTY_NODE;const r=es(t,Fu,o=>o.name,Ni);if(s){const o=es(t,J.getCompare());return new I(r,se(e),new Je({".priority":o},{".priority":J}))}else return new I(r,se(e),Je.Default)}else{let t=I.EMPTY_NODE;return he(n,(s,i)=>{if(qe(n,s)&&s.substring(0,1)!=="."){const r=se(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(se(e))}}Wu(se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends fs{constructor(e){super(),this.indexPath_=e,g(!D(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Nt(e.name,t.name):r}makePost(e,t){const s=se(e),i=I.EMPTY_NODE.updateChild(this.indexPath_,s);return new k(t,i)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,On);return new k(It,e)}toString(){return wn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends fs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Nt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,t){const s=se(e);return new k(t,s)}toString(){return".value"}}const Yu=new ju;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n){return{type:"value",snapshotNode:n}}function Bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function In(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Sn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ku(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(t,s)):o.trackChildChange(Sn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(J,(i,r)=>{t.hasChild(i)||s.trackChildChange(In(i,r))}),t.isLeafNode()||t.forEachChild(J,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Sn(i,r,o))}else s.trackChildChange(Bt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.indexedFilter_=new Ri(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tn.getStartPost_(e),this.endPost_=Tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new k(t,s))||(s=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=I.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(J,(o,a)=>{r.matches(new k(o,a))||(i=i.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new k(t,s))||(s=I.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,p)=>u(p,f)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const c=new k(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,l,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Sn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(In(t,u));const S=a.updateImmediateChild(t,I.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Bt(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(In(l.name,l.node)),r.trackChildChange(Bt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,I.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ft}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:It}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new Ai;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xu(n){return n.loadsAllData()?new Ri(n.getIndex()):n.hasLimit()?new Qu(n):new Tn(n)}function Wr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===J?t="$priority":n.index_===Yu?t="$value":n.index_===Mt?t="$key":(g(n.index_ instanceof Gu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ie(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ie(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ie(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ie(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ie(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ur(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==J&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Go{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Pn("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ts.getListenId_(e,s),a={};this.listens_[o]=a;const c=Wr(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),Lt(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,t){const s=ts.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Wr(e._queryParams),s=e._path.toString(),i=new kn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cc(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=yn(a.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return{value:null,children:new Map}}function na(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=A(e);n.children.has(s)||n.children.set(s,ns());const i=n.children.get(s);e=z(e),na(i,e,t)}}function ri(n,e,t){n.value!==null?t(e,n.value):Zu(n,(s,i)=>{const r=new U(e.toString()+"/"+s);ri(i,r,t)})}function Zu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&he(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=10*1e3,td=30*1e3,nd=300*1e3;class sd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ed(e);const s=Hr+(td-Hr)*Math.random();pn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;he(e,(i,r)=>{r>0&&qe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),pn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nd))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function ki(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Di(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Me.ACK_USER_WRITE,this.source=ki()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new ss(B(),t,this.revert)}}else return g(A(this.path)===e,"operationForChild called for unrelated child."),new ss(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.source=e,this.path=t,this.type=Me.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Nn(this.source,B()):new Nn(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Me.OVERWRITE}operationForChild(e){return D(this.path)?new St(this.source,B(),this.snap.getImmediateChild(e)):new St(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Me.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new St(this.source,B(),t.value):new Wt(this.source,B(),t)}else return g(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wt(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=A(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ku(o.childName,o.snapshotNode))}),ln(n,i,"child_removed",e,s,t),ln(n,i,"child_added",e,s,t),ln(n,i,"child_moved",r,s,t),ln(n,i,"child_changed",e,s,t),ln(n,i,"value",e,s,t),i}function ln(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>ad(n,a,c)),o.forEach(a=>{const c=od(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function od(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ad(n,e,t){if(e.childName==null||t.childName==null)throw $t("Should only compare child_ events.");const s=new k(e.childName,e.snapshotNode),i=new k(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n,e){return{eventCache:n,serverCache:e}}function gn(n,e,t,s){return _s(new _t(e,t,s),n.serverCache)}function sa(n,e,t,s){return _s(n.eventCache,new _t(e,t,s))}function is(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Tt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;const ld=()=>(qs||(qs=new Ee(Gh)),qs);class V{static fromObject(e){let t=new V(null);return he(e,(s,i)=>{t=t.set(new U(s),i)}),t}constructor(e,t=ld()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(D(e))return null;{const s=A(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:X(new U(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=A(e),s=this.children.get(t);return s!==null?s.subtree(z(e)):new V(null)}}set(e,t){if(D(e))return new V(t,this.children);{const s=A(e),r=(this.children.get(s)||new V(null)).set(z(e),t),o=this.children.insert(s,r);return new V(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const t=A(e),s=this.children.get(t);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new V(null):new V(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=A(e),s=this.children.get(t);return s?s.get(z(e)):null}}setTree(e,t){if(D(e))return t;{const s=A(e),r=(this.children.get(s)||new V(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new V(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(D(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(z(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,s){if(D(e))return this;{this.value&&s(t,this.value);const i=A(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),X(t,i),s):new V(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.writeTree_=e}static empty(){return new Le(new V(null))}}function mn(n,e,t){if(D(e))return new Le(new V(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=me(i,e);return r=r.updateChild(o,t),new Le(n.writeTree_.set(i,r))}else{const i=new V(t),r=n.writeTree_.setTree(e,i);return new Le(r)}}}function oi(n,e,t){let s=n;return he(t,(i,r)=>{s=mn(s,X(e,i),r)}),s}function $r(n,e){if(D(e))return Le.empty();{const t=n.writeTree_.setTree(e,new V(null));return new Le(t)}}function ai(n,e){return Rt(n,e)!=null}function Rt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(me(t.path,e)):null}function Vr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(J,(s,i)=>{e.push(new k(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new k(s,i.value))}),e}function ut(n,e){if(D(e))return n;{const t=Rt(n,e);return t!=null?new Le(new V(t)):new Le(n.writeTree_.subtree(e))}}function li(n){return n.writeTree_.isEmpty()}function Ut(n,e){return ia(B(),n.writeTree_,e)}function ia(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ia(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n,e){return la(e,n)}function cd(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=mn(n.visibleWrites,e,t)),n.lastWriteId=s}function hd(n,e,t,s){g(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=oi(n.visibleWrites,e,t),n.lastWriteId=s}function ud(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function dd(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&fd(a,s.path)?i=!1:xe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return _d(n),!0;if(s.snap)n.visibleWrites=$r(n.visibleWrites,s.path);else{const a=s.children;he(a,c=>{n.visibleWrites=$r(n.visibleWrites,X(s.path,c))})}return!0}else return!1}function fd(n,e){if(n.snap)return xe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&xe(X(n.path,t),e))return!0;return!1}function _d(n){n.visibleWrites=ra(n.allWrites,pd,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function pd(n){return n.visible}function ra(n,e,t){let s=Le.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)xe(t,o)?(a=me(t,o),s=mn(s,a,r.snap)):xe(o,t)&&(a=me(o,t),s=mn(s,B(),r.snap.getChild(a)));else if(r.children){if(xe(t,o))a=me(t,o),s=oi(s,a,r.children);else if(xe(o,t))if(a=me(o,t),D(a))s=oi(s,B(),r.children);else{const c=Lt(r.children,A(a));if(c){const l=c.getChild(z(a));s=mn(s,B(),l)}}}else throw $t("WriteRecord should have .snap or .children")}}return s}function oa(n,e,t,s,i){if(!s&&!i){const r=Rt(n.visibleWrites,e);if(r!=null)return r;{const o=ut(n.visibleWrites,e);if(li(o))return t;if(t==null&&!ai(o,B()))return null;{const a=t||I.EMPTY_NODE;return Ut(o,a)}}}else{const r=ut(n.visibleWrites,e);if(!i&&li(r))return t;if(!i&&t==null&&!ai(r,B()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(xe(l.path,e)||xe(e,l.path))},a=ra(n.allWrites,o,e),c=t||I.EMPTY_NODE;return Ut(a,c)}}}function gd(n,e,t){let s=I.EMPTY_NODE;const i=Rt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ut(n.visibleWrites,e);return t.forEachChild(J,(o,a)=>{const c=Ut(ut(r,new U(o)),a);s=s.updateImmediateChild(o,c)}),Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ut(n.visibleWrites,e);return Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function md(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(ai(n.visibleWrites,r))return null;{const o=ut(n.visibleWrites,r);return li(o)?i.getChild(t):Ut(o,i.getChild(t))}}function vd(n,e,t,s){const i=X(e,t),r=Rt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ut(n.visibleWrites,i);return Ut(o,s.getNode().getImmediateChild(t))}else return null}function yd(n,e){return Rt(n.visibleWrites,e)}function Cd(n,e,t,s,i,r,o){let a;const c=ut(n.visibleWrites,e),l=Rt(c,B());if(l!=null)a=l;else if(t!=null)a=Ut(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=f.getNext();return d}else return[]}function Ed(){return{visibleWrites:Le.empty(),allWrites:[],lastWriteId:-1}}function rs(n,e,t,s){return oa(n.writeTree,n.treePath,e,t,s)}function Pi(n,e){return gd(n.writeTree,n.treePath,e)}function qr(n,e,t,s){return md(n.writeTree,n.treePath,e,t,s)}function os(n,e){return yd(n.writeTree,X(n.treePath,e))}function bd(n,e,t,s,i,r){return Cd(n.writeTree,n.treePath,e,t,s,i,r)}function Oi(n,e,t){return vd(n.writeTree,n.treePath,e,t)}function aa(n,e){return la(X(n.treePath,e),n.writeTree)}function la(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,In(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Bt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.oldSnap));else throw $t("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ca=new Id;class Mi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tt(this.viewCache_),r=bd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){return{filter:n}}function Td(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Nd(n,e,t,s,i){const r=new wd;let o,a;if(t.type===Me.OVERWRITE){const l=t;l.source.fromUser?o=ci(n,e,l.path,l.snap,s,i,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!D(l.path),o=as(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===Me.MERGE){const l=t;l.source.fromUser?o=Ad(n,e,l.path,l.children,s,i,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=hi(n,e,l.path,l.children,s,i,a,r))}else if(t.type===Me.ACK_USER_WRITE){const l=t;l.revert?o=Dd(n,e,l.path,s,i,r):o=kd(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===Me.LISTEN_COMPLETE)o=xd(n,e,t.path,s,r);else throw $t("Unknown operation type: "+t.type);const c=r.getChanges();return Rd(e,o,c),{viewCache:o,changes:c}}function Rd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=is(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(ta(is(e)))}}function ha(n,e,t,s,i,r){const o=e.eventCache;if(os(s,t)!=null)return e;{let a,c;if(D(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Tt(e),d=l instanceof I?l:I.EMPTY_NODE,u=Pi(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=rs(s,Tt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=A(t);if(l===".priority"){g(ft(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=qr(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=z(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=qr(s,t,o.getNode(),c);f!=null?u=o.getNode().getImmediateChild(l).updateChild(d,f):u=o.getNode().getImmediateChild(l)}else u=Oi(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return gn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function as(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(D(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=A(t);if(!c.isCompleteForPath(t)&&ft(t)>1)return e;const _=z(t),H=c.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?l=d.updatePriority(c.getNode(),H):l=d.updateChild(c.getNode(),p,H,_,ca,null)}const u=sa(e,l,c.isFullyInitialized()||D(t),d.filtersNodes()),f=new Mi(i,u,r);return ha(n,u,t,i,f,a)}function ci(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new Mi(i,e,r);if(D(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=gn(e,l,!0,n.filter.filtersNodes());else{const u=A(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=gn(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=z(t),p=a.getNode().getImmediateChild(u);let _;if(D(f))_=s;else{const S=d.getCompleteChild(u);S!=null?Ii(f)===".priority"&&S.getChild(Yo(f)).isEmpty()?_=S:_=S.updateChild(f,s):_=I.EMPTY_NODE}if(p.equals(_))c=e;else{const S=n.filter.updateChild(a.getNode(),u,_,f,d,o);c=gn(e,S,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function zr(n,e){return n.eventCache.isCompleteForChild(e)}function Ad(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=X(t,c);zr(e,A(d))&&(a=ci(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=X(t,c);zr(e,A(d))||(a=ci(n,a,d,l,i,r,o))}),a}function Gr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function hi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;D(t)?l=s:l=new V(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),_=Gr(n,p,f);c=as(n,c,new U(u),_,i,r,o,a)}}),l.children.inorderTraversal((u,f)=>{const p=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!p){const _=e.serverCache.getNode().getImmediateChild(u),S=Gr(n,_,f);c=as(n,c,new U(u),S,i,r,o,a)}}),c}function kd(n,e,t,s,i,r,o){if(os(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(D(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return as(n,e,t,c.getNode().getChild(t),i,r,a,o);if(D(t)){let l=new V(null);return c.getNode().forEachChild(Mt,(d,u)=>{l=l.set(new U(d),u)}),hi(n,e,t,l,i,r,a,o)}else return e}else{let l=new V(null);return s.foreach((d,u)=>{const f=X(t,d);c.isCompleteForPath(f)&&(l=l.set(d,c.getNode().getChild(f)))}),hi(n,e,t,l,i,r,a,o)}}function xd(n,e,t,s,i){const r=e.serverCache,o=sa(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return ha(n,o,t,s,ca,i)}function Dd(n,e,t,s,i,r){let o;if(os(s,t)!=null)return e;{const a=new Mi(s,e,i),c=e.eventCache.getNode();let l;if(D(t)||A(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=rs(s,Tt(e));else{const u=e.serverCache.getNode();g(u instanceof I,"serverChildren would be complete if leaf node"),d=Pi(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=A(t);let u=Oi(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,z(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,I.EMPTY_NODE,z(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rs(s,Tt(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||os(s,B())!=null,gn(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ri(s.getIndex()),r=Xu(s);this.processor_=Sd(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(I.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),d=new _t(c,o.isFullyInitialized(),i.filtersNodes()),u=new _t(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_s(u,d),this.eventGenerator_=new id(this.query_)}get query(){return this.query_}}function Od(n){return n.viewCache_.serverCache.getNode()}function Md(n){return is(n.viewCache_)}function Ld(n,e){const t=Tt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(A(e)).isEmpty())?t.getChild(e):null}function jr(n){return n.eventRegistrations_.length===0}function Fd(n,e){n.eventRegistrations_.push(e)}function Yr(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Kr(n,e,t,s){e.type===Me.MERGE&&e.source.queryId!==null&&(g(Tt(n.viewCache_),"We should always have a full cache before handling merges"),g(is(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Nd(n.processor_,i,e,t,s);return Td(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ua(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Bd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(J,(r,o)=>{s.push(Bt(r,o))}),t.isFullyInitialized()&&s.push(ta(t.getNode())),ua(n,s,t.getNode(),e)}function ua(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return rd(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;class da{constructor(){this.views=new Map}}function Wd(n){g(!ls,"__referenceConstructor has already been defined"),ls=n}function Ud(){return g(ls,"Reference.ts has not been loaded"),ls}function Hd(n){return n.views.size===0}function Li(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),Kr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Kr(o,e,t,s));return r}}function fa(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=rs(t,i?s:null),c=!1;a?c=!0:s instanceof I?(a=Pi(t,s),c=!1):(a=I.EMPTY_NODE,c=!1);const l=_s(new _t(a,c,!1),new _t(s,i,!1));return new Pd(e,l)}return o}function $d(n,e,t,s,i,r){const o=fa(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Fd(o,t),Bd(o,t)}function Vd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=pt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Yr(l,t,s)),jr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Yr(c,t,s)),jr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!pt(n)&&r.push(new(Ud())(e._repo,e._path)),{removed:r,events:o}}function _a(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function dt(n,e){let t=null;for(const s of n.views.values())t=t||Ld(s,e);return t}function pa(n,e){if(e._queryParams.loadsAllData())return gs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ga(n,e){return pa(n,e)!=null}function pt(n){return gs(n)!=null}function gs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;function qd(n){g(!cs,"__referenceConstructor has already been defined"),cs=n}function zd(){return g(cs,"Reference.ts has not been loaded"),cs}let Gd=1;class Qr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=Ed(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ma(n,e,t,s,i){return cd(n.pendingWriteTree_,e,t,s,i),i?zt(n,new St(ki(),e,t)):[]}function jd(n,e,t,s){hd(n.pendingWriteTree_,e,t,s);const i=V.fromObject(t);return zt(n,new Wt(ki(),e,i))}function lt(n,e,t=!1){const s=ud(n.pendingWriteTree_,e);if(dd(n.pendingWriteTree_,e)){let r=new V(null);return s.snap!=null?r=r.set(B(),!0):he(s.children,o=>{r=r.set(new U(o),!0)}),zt(n,new ss(s.path,r,t))}else return[]}function Mn(n,e,t){return zt(n,new St(xi(),e,t))}function Yd(n,e,t){const s=V.fromObject(t);return zt(n,new Wt(xi(),e,s))}function Kd(n,e){return zt(n,new Nn(xi(),e))}function Qd(n,e,t){const s=Bi(n,t);if(s){const i=Wi(s),r=i.path,o=i.queryId,a=me(r,e),c=new Nn(Di(o),a);return Ui(n,r,c)}else return[]}function hs(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ga(o,e))){const c=Vd(o,e,t,s);Hd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,p)=>pt(p));if(d&&!u){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Zd(f);for(let _=0;_<p.length;++_){const S=p[_],H=S.query,K=Ea(n,S);n.listenProvider_.startListening(vn(H),Rn(n,H),K.hashFn,K.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(vn(e),null):l.forEach(f=>{const p=n.queryToTagMap.get(ms(f));n.listenProvider_.stopListening(vn(f),p)}))}ef(n,l)}return a}function va(n,e,t,s){const i=Bi(n,s);if(i!=null){const r=Wi(i),o=r.path,a=r.queryId,c=me(o,e),l=new St(Di(a),c,t);return Ui(n,o,l)}else return[]}function Xd(n,e,t,s){const i=Bi(n,s);if(i){const r=Wi(i),o=r.path,a=r.queryId,c=me(o,e),l=V.fromObject(t),d=new Wt(Di(a),c,l);return Ui(n,o,d)}else return[]}function ui(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const _=me(f,i);r=r||dt(p,_),o=o||pt(p)});let a=n.syncPointTree_.get(i);a?(o=o||pt(a),r=r||dt(a,B())):(a=new da,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,_)=>{const S=dt(_,B());S&&(r=r.updateImmediateChild(p,S))}));const l=ga(a,e);if(!l&&!e._queryParams.loadsAllData()){const f=ms(e);g(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=tf();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const d=ps(n.pendingWriteTree_,i);let u=$d(a,e,t,d,r,c);if(!l&&!o&&!s){const f=pa(a,e);u=u.concat(nf(n,e,f))}return u}function Fi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=me(o,e),l=dt(a,c);if(l)return l});return oa(i,e,r,t,!0)}function Jd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=me(l,t);s=s||dt(d,u)});let i=n.syncPointTree_.get(t);i?s=s||dt(i,B()):(i=new da,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new _t(s,!0,!1):null,a=ps(n.pendingWriteTree_,e._path),c=fa(i,e,a,r?o.getNode():I.EMPTY_NODE,r);return Md(c)}function zt(n,e){return ya(e,n.syncPointTree_,null,ps(n.pendingWriteTree_,B()))}function ya(n,e,t,s){if(D(n.path))return Ca(n,e,t,s);{const i=e.get(B());t==null&&i!=null&&(t=dt(i,B()));let r=[];const o=A(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=aa(s,o);r=r.concat(ya(a,c,l,d))}return i&&(r=r.concat(Li(i,n,s,t))),r}}function Ca(n,e,t,s){const i=e.get(B());t==null&&i!=null&&(t=dt(i,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=aa(s,o),d=n.operationForChild(o);d&&(r=r.concat(Ca(d,a,c,l)))}),i&&(r=r.concat(Li(i,n,s,t))),r}function Ea(n,e){const t=e.query,s=Rn(n,t);return{hashFn:()=>(Od(e)||I.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Qd(n,t._path,s):Kd(n,t._path);{const r=Kh(i,t);return hs(n,t,null,r)}}}}function Rn(n,e){const t=ms(e);return n.queryToTagMap.get(t)}function ms(n){return n._path.toString()+"$"+n._queryIdentifier}function Bi(n,e){return n.tagToQueryMap.get(e)}function Wi(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function Ui(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=ps(n.pendingWriteTree_,e);return Li(s,t,i,null)}function Zd(n){return n.fold((e,t,s)=>{if(t&&pt(t))return[gs(t)];{let i=[];return t&&(i=_a(t)),he(s,(r,o)=>{i=i.concat(o)}),i}})}function vn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zd())(n._repo,n._path):n}function ef(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ms(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function tf(){return Gd++}function nf(n,e,t){const s=e._path,i=Rn(n,e),r=Ea(n,t),o=n.listenProvider_.startListening(vn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)g(!pt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!D(l)&&d&&pt(d))return[gs(d).query];{let f=[];return d&&(f=f.concat(_a(d).map(p=>p.query))),he(u,(p,_)=>{f=f.concat(_)}),f}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(vn(d),Rn(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hi(t)}node(){return this.node_}}class $i{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new $i(this.syncTree_,t)}node(){return Fi(this.syncTree_,this.path_)}}const sf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xr=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return rf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return of(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},rf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},of=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ba=function(n,e,t,s){return Vi(e,new $i(t,n),s)},wa=function(n,e,t){return Vi(n,new Hi(e),t)};function Vi(n,e,t){const s=n.getPriority().val(),i=Xr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Xr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new re(a,se(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new re(i))),o.forEachChild(J,(a,c)=>{const l=Vi(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function zi(n,e){let t=e instanceof U?e:new U(e),s=n,i=A(t);for(;i!==null;){const r=Lt(s.node.children,i)||{children:{},childCount:0};s=new qi(i,s,r),t=z(t),i=A(t)}return s}function Gt(n){return n.node.value}function Ia(n,e){n.node.value=e,di(n)}function Sa(n){return n.node.childCount>0}function af(n){return Gt(n)===void 0&&!Sa(n)}function vs(n,e){he(n.node.children,(t,s)=>{e(new qi(t,n,s))})}function Ta(n,e,t,s){t&&e(n),vs(n,i=>{Ta(i,e,!0)})}function lf(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ln(n){return new U(n.parent===null?n.name:Ln(n.parent)+"/"+n.name)}function di(n){n.parent!==null&&cf(n.parent,n.name,n)}function cf(n,e,t){const s=af(t),i=qe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,di(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,di(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=/[\[\].#$\/\u0000-\u001F\u007F]/,uf=/[\[\].#$\u0000-\u001F\u007F]/,zs=10*1024*1024,Gi=function(n){return typeof n=="string"&&n.length!==0&&!hf.test(n)},Na=function(n){return typeof n=="string"&&n.length!==0&&!uf.test(n)},df=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Na(n)},ff=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!yi(n)||n&&typeof n=="object"&&qe(n,".sv")},_f=function(n,e,t,s){ys(us(n,"value"),e,t)},ys=function(n,e,t){const s=t instanceof U?new Au(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+bt(s));if(typeof e=="function")throw new Error(n+"contains a function "+bt(s)+" with contents = "+e.toString());if(yi(e))throw new Error(n+"contains "+e.toString()+" "+bt(s));if(typeof e=="string"&&e.length>zs/3&&ds(e)>zs)throw new Error(n+"contains a string greater than "+zs+" utf8 bytes "+bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(he(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gi(o)))throw new Error(n+" contains an invalid key ("+o+") "+bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ku(s,o),ys(n,a,s),xu(s)}),i&&r)throw new Error(n+' contains ".value" child '+bt(s)+" in addition to actual children.")}},pf=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=wn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Gi(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ru);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&xe(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},gf=function(n,e,t,s){const i=us(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];he(e,(o,a)=>{const c=new U(o);if(ys(i,a,X(t,c)),Ii(c)===".priority"&&!ff(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),pf(i,r)},Ra=function(n,e,t,s){if(!Na(t))throw new Error(us(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mf=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ra(n,e,t)},vf=function(n,e){if(A(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},yf=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!df(t))throw new Error(us(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Si(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Aa(n,e,t){Cs(n,t),ka(n,s=>Si(s,e))}function De(n,e,t){Cs(n,t),ka(n,s=>xe(s,e)||xe(e,s))}function ka(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Ef(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ef(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();_n&&ce("event: "+t.toString()),qt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="repo_interrupt",wf=25;class If{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ns(),this.transactionQueueTree_=new qi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sf(n,e,t){if(n.stats_=bi(n.repoInfo_),n.forceRestClient_||Zh())n.server_=new ts(n.repoInfo_,(s,i,r,o)=>{Jr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Zr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ze(n.repoInfo_,e,(s,i,r,o)=>{Jr(n,s,i,r,o)},s=>{Zr(n,s)},s=>{Nf(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=iu(n.repoInfo_,()=>new sd(n.stats_,n.server_)),n.infoData_=new Ju,n.infoSyncTree_=new Qr({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Mn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ji(n,"connected",!1),n.serverSyncTree_=new Qr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);De(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Tf(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Es(n){return sf({timestamp:Tf(n)})}function Jr(n,e,t,s,i){n.dataUpdateCount++;const r=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Yn(t,l=>se(l));o=Xd(n.serverSyncTree_,r,c,i)}else{const c=se(t);o=va(n.serverSyncTree_,r,c,i)}else if(s){const c=Yn(t,l=>se(l));o=Yd(n.serverSyncTree_,r,c)}else{const c=se(t);o=Mn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ht(n,r)),De(n.eventQueue_,a,o)}function Zr(n,e){ji(n,"connected",e),e===!1&&xf(n)}function Nf(n,e){he(e,(t,s)=>{ji(n,t,s)})}function ji(n,e,t){const s=new U("/.info/"+e),i=se(t);n.infoData_.updateSnapshot(s,i);const r=Mn(n.infoSyncTree_,s,i);De(n.eventQueue_,s,r)}function Yi(n){return n.nextWriteId_++}function Rf(n,e,t){const s=Jd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=se(i).withIndex(e._queryParams.getIndex());ui(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Mn(n.serverSyncTree_,e._path,r);else{const a=Rn(n.serverSyncTree_,e);o=va(n.serverSyncTree_,e._path,r,a)}return De(n.eventQueue_,e._path,o),hs(n.serverSyncTree_,e,t,null,!0),r},i=>(Fn(n,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function Af(n,e,t,s,i){Fn(n,"set",{path:e.toString(),value:t,priority:s});const r=Es(n),o=se(t,s),a=Fi(n.serverSyncTree_,e),c=wa(o,a,r),l=Yi(n),d=ma(n.serverSyncTree_,e,c,l,!0);Cs(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||ve("set at "+e+" failed: "+f);const S=lt(n.serverSyncTree_,l,!_);De(n.eventQueue_,e,S),fi(n,i,f,p)});const u=Qi(n,e);Ht(n,u),De(n.eventQueue_,u,[])}function kf(n,e,t,s){Fn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Es(n),o={};if(he(t,(a,c)=>{i=!1,o[a]=ba(X(e,a),se(c),n.serverSyncTree_,r)}),i)ce("update() called with empty data.  Don't do anything."),fi(n,s,"ok",void 0);else{const a=Yi(n),c=jd(n.serverSyncTree_,e,o,a);Cs(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ve("update at "+e+" failed: "+l);const f=lt(n.serverSyncTree_,a,!u),p=f.length>0?Ht(n,e):e;De(n.eventQueue_,p,f),fi(n,s,l,d)}),he(t,l=>{const d=Qi(n,X(e,l));Ht(n,d)}),De(n.eventQueue_,e,[])}}function xf(n){Fn(n,"onDisconnectEvents");const e=Es(n),t=ns();ri(n.onDisconnect_,B(),(i,r)=>{const o=ba(i,r,n.serverSyncTree_,e);na(t,i,o)});let s=[];ri(t,B(),(i,r)=>{s=s.concat(Mn(n.serverSyncTree_,i,r));const o=Qi(n,i);Ht(n,o)}),n.onDisconnect_=ns(),De(n.eventQueue_,B(),s)}function Df(n,e,t){let s;A(e._path)===".info"?s=ui(n.infoSyncTree_,e,t):s=ui(n.serverSyncTree_,e,t),Aa(n.eventQueue_,e._path,s)}function Pf(n,e,t){let s;A(e._path)===".info"?s=hs(n.infoSyncTree_,e,t):s=hs(n.serverSyncTree_,e,t),Aa(n.eventQueue_,e._path,s)}function Of(n){n.persistentConnection_&&n.persistentConnection_.interrupt(bf)}function Fn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ce(t,...e)}function fi(n,e,t,s){e&&qt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xa(n,e,t){return Fi(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function Ki(n,e=n.transactionQueueTree_){if(e||bs(n,e),Gt(e)){const t=Pa(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Mf(n,Ln(e),t)}else Sa(e)&&vs(e,t=>{Ki(n,t)})}function Mf(n,e,t){const s=t.map(l=>l.currentWriteId),i=xa(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];g(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=me(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Fn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(lt(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();bs(n,zi(n.transactionQueueTree_,e)),Ki(n,n.transactionQueueTree_),De(n.eventQueue_,e,d);for(let f=0;f<u.length;f++)qt(u[f])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ve("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Ht(n,e)}},o)}function Ht(n,e){const t=Da(n,e),s=Ln(t),i=Pa(n,t);return Lf(n,i,s),s}function Lf(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=me(t,c.path);let d=!1,u;if(g(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(lt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=wf)d=!0,u="maxretry",i=i.concat(lt(n.serverSyncTree_,c.currentWriteId,!0));else{const f=xa(n,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ys("transaction failed: Data returned ",p,c.path);let _=se(p);typeof p=="object"&&p!=null&&qe(p,".priority")||(_=_.updatePriority(f.getPriority()));const H=c.currentWriteId,K=Es(n),x=wa(_,f,K);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=x,c.currentWriteId=Yi(n),o.splice(o.indexOf(H),1),i=i.concat(ma(n.serverSyncTree_,c.path,x,c.currentWriteId,c.applyLocally)),i=i.concat(lt(n.serverSyncTree_,H,!0))}else d=!0,u="nodata",i=i.concat(lt(n.serverSyncTree_,c.currentWriteId,!0))}De(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}bs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)qt(s[a]);Ki(n,n.transactionQueueTree_)}function Da(n,e){let t,s=n.transactionQueueTree_;for(t=A(e);t!==null&&Gt(s)===void 0;)s=zi(s,t),e=z(e),t=A(e);return s}function Pa(n,e){const t=[];return Oa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Oa(n,e,t){const s=Gt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);vs(e,i=>{Oa(n,i,t)})}function bs(n,e){const t=Gt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ia(e,t.length>0?t:void 0)}vs(e,s=>{bs(n,s)})}function Qi(n,e){const t=Ln(Da(n,e)),s=zi(n.transactionQueueTree_,e);return lf(s,i=>{Gs(n,i)}),Gs(n,s),Ta(s,i=>{Gs(n,i)}),t}function Gs(n,e){const t=Gt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(lt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ia(e,void 0):t.length=r+1,De(n.eventQueue_,Ln(e),i);for(let o=0;o<s.length;o++)qt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Bf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const eo=function(n,e){const t=Wf(n),s=t.namespace;t.domain==="firebase.com"&&tt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&tt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Wo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new U(t.pathString)}},Wf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=Ff(n.substring(d,u)));const f=Bf(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class Hf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return D(this._path)?null:Ii(this._path)}get ref(){return new nt(this._repo,this._path)}get _queryIdentifier(){const e=Ur(this._queryParams),t=Ci(e);return t==="{}"?"default":t}get _queryObject(){return Ur(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof Xi))return!1;const t=this._repo===e._repo,s=Si(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nu(this._path)}}class nt extends Xi{constructor(e,t){super(e,t,new Ai,!1)}get parent(){const e=Yo(this._path);return e===null?null:new nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class An{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new U(e),s=_i(this.ref,e);return new An(this._node.getChild(t),s,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new An(i,_i(this.ref,s),J)))}hasChild(e){const t=new U(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ie(n,e){return n=Vt(n),n._checkNotDeleted("ref"),e!==void 0?_i(n._root,e):n._root}function _i(n,e){return n=Vt(n),A(n._path)===null?mf("child","path",e):Ra("child","path",e),new nt(n._repo,X(n._path,e))}function to(n,e){n=Vt(n),vf("set",n._path),_f("set",e,n._path);const t=new kn;return Af(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function at(n,e){gf("update",e,n._path);const t=new kn;return kf(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function no(n){n=Vt(n);const e=new Ma(()=>{}),t=new ws(e);return Rf(n._repo,n,t).then(s=>new An(s,new nt(n._repo,n._path),n._queryParams.getIndex()))}class ws{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Uf("value",this,new An(e.snapshotNode,new nt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hf(this,e,t):null}matches(e){return e instanceof ws?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $f(n,e,t,s,i){const r=new Ma(t,void 0),o=new ws(r);return Df(n._repo,n,o),()=>Pf(n._repo,n,o)}function Vf(n,e,t,s){return $f(n,"value",e)}Wd(nt);qd(nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="FIREBASE_DATABASE_EMULATOR_HOST",pi={};let zf=!1;function Gf(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=vo(r);n.repoInfo_=new Wo(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function jf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||tt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=eo(r,i),a=o.repoInfo,c;typeof process<"u"&&br&&(c=br[qf]),c?(r=`http://${c}?ns=${a.namespace}`,o=eo(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new tu(n.name,n.options,e);yf("Invalid Firebase Database URL",o),D(o.path)||tt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Kf(a,n,l,new eu(n,t));return new Qf(d,n)}function Yf(n,e){const t=pi[e];(!t||t[n.key]!==n)&&tt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Of(n),delete t[n.key]}function Kf(n,e,t,s){let i=pi[e.name];i||(i={},pi[e.name]=i);let r=i[n.toURLString()];return r&&tt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new If(n,zf,t,s),i[n.toURLString()]=r,r}class Qf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Yf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tt("Cannot call "+e+" on a deleted database.")}}function Xf(n=Sh(),e){const t=Ch(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=lc("database");s&&Jf(t,...s)}return t}function Jf(n,e,t,s={}){n=Vt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Kn(s,r.repoInfo_.emulatorOptions))return;tt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&tt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Gn(Gn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:cc(s.mockUserToken,n.app.options.projectId);o=new Gn(a)}vo(e)&&wc(e),Gf(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){Bh(Ih),Xn(new Cn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Pt(wr,Ir,n),Pt(wr,Ir,"esm2020")}Ze.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ze.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Zf();var e_=G('<div class="center-col svelte-1uha8ag"><div class="logo svelte-1uha8ag">🌍</div> <h1 class="svelte-1uha8ag">European Capitals</h1> <p class="sub svelte-1uha8ag">Test your knowledge of European capitals</p> <button class="btn-primary svelte-1uha8ag">Solo Play</button> <div class="divider svelte-1uha8ag">or multiplayer</div> <div class="row-btns svelte-1uha8ag"><button class="btn-secondary svelte-1uha8ag">Create Room</button> <button class="btn-secondary svelte-1uha8ag">Join Room</button></div> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div>'),t_=G('<p class="err svelte-1uha8ag"> </p>'),n_=G('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Create Room</h2> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Create</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),s_=G('<p class="err svelte-1uha8ag"> </p>'),i_=G('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Join Room</h2> <input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Join</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),r_=G('<div class="player-row svelte-1uha8ag"><span></span> </div>'),o_=G('<button class="btn-primary svelte-1uha8ag"> </button>'),a_=G('<p class="waiting svelte-1uha8ag">Waiting for host to start…</p>'),l_=G('<div class="center-col svelte-1uha8ag"><p class="sub svelte-1uha8ag">Room code</p> <div class="room-code svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag">Share this code with friends</p> <div class="player-list svelte-1uha8ag"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Leave</button></div>'),c_=G('<span class="streak svelte-1uha8ag"> </span>'),h_=G('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),u_=G("<div> </div>"),d_=G('<div class="score-popup svelte-1uha8ag"> </div>'),f_=G('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-hud svelte-1uha8ag"> </span> <!></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><div class="flag svelte-1uha8ag"> </div> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),__=G('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag"> </div> <h2 class="svelte-1uha8ag">Quiz Complete!</h2> <div class="final-score svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">Play Again</button> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),p_=G('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),g_=G('<p class="answered-msg svelte-1uha8ag">Answer locked in — waiting for others…</p>'),m_=G('<div><span class="lb-rank svelte-1uha8ag"> </span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),v_=G('<div> </div> <div class="leaderboard mini svelte-1uha8ag"></div>',1),y_=G('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-hud svelte-1uha8ag"> </span> <span class="player-count svelte-1uha8ag"> </span></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><div class="flag svelte-1uha8ag"> </div> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),C_=G('<div><span class="lb-rank svelte-1uha8ag"> </span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),E_=G('<button class="btn-primary svelte-1uha8ag">Play Again</button>'),b_=G('<p class="waiting svelte-1uha8ag">Waiting for host to start a new game…</p>'),w_=G('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag">🏆</div> <h2 class="svelte-1uha8ag">Final Results</h2> <div class="leaderboard full svelte-1uha8ag"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),I_=G('<div class="center-col svelte-1uha8ag"><p class="err svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">← Home</button></div>'),S_=G('<div class="app svelte-1uha8ag"><!></div>');function x_(n,e){Ol(e,!0);const t=bo({projectId:"aktiecase-quiz",appId:"1:52134070639:web:e901510fd6600d489e009a",databaseURL:"https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app",apiKey:"AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4",authDomain:"aktiecase-quiz.firebaseapp.com",messagingSenderId:"52134070639"}),s=Xf(t),i=[{country:"Albania",capital:"Tirana",flag:"🇦🇱"},{country:"Andorra",capital:"Andorra la Vella",flag:"🇦🇩"},{country:"Austria",capital:"Vienna",flag:"🇦🇹"},{country:"Belarus",capital:"Minsk",flag:"🇧🇾"},{country:"Belgium",capital:"Brussels",flag:"🇧🇪"},{country:"Bosnia and Herzegovina",capital:"Sarajevo",flag:"🇧🇦"},{country:"Bulgaria",capital:"Sofia",flag:"🇧🇬"},{country:"Croatia",capital:"Zagreb",flag:"🇭🇷"},{country:"Cyprus",capital:"Nicosia",flag:"🇨🇾"},{country:"Czech Republic",capital:"Prague",flag:"🇨🇿"},{country:"Denmark",capital:"Copenhagen",flag:"🇩🇰"},{country:"Estonia",capital:"Tallinn",flag:"🇪🇪"},{country:"Finland",capital:"Helsinki",flag:"🇫🇮"},{country:"France",capital:"Paris",flag:"🇫🇷"},{country:"Germany",capital:"Berlin",flag:"🇩🇪"},{country:"Greece",capital:"Athens",flag:"🇬🇷"},{country:"Hungary",capital:"Budapest",flag:"🇭🇺"},{country:"Iceland",capital:"Reykjavik",flag:"🇮🇸"},{country:"Ireland",capital:"Dublin",flag:"🇮🇪"},{country:"Italy",capital:"Rome",flag:"🇮🇹"},{country:"Kosovo",capital:"Pristina",flag:"🇽🇰"},{country:"Latvia",capital:"Riga",flag:"🇱🇻"},{country:"Liechtenstein",capital:"Vaduz",flag:"🇱🇮"},{country:"Lithuania",capital:"Vilnius",flag:"🇱🇹"},{country:"Luxembourg",capital:"Luxembourg City",flag:"🇱🇺"},{country:"Malta",capital:"Valletta",flag:"🇲🇹"},{country:"Moldova",capital:"Chișinău",flag:"🇲🇩"},{country:"Monaco",capital:"Monaco",flag:"🇲🇨"},{country:"Montenegro",capital:"Podgorica",flag:"🇲🇪"},{country:"Netherlands",capital:"Amsterdam",flag:"🇳🇱"},{country:"North Macedonia",capital:"Skopje",flag:"🇲🇰"},{country:"Norway",capital:"Oslo",flag:"🇳🇴"},{country:"Poland",capital:"Warsaw",flag:"🇵🇱"},{country:"Portugal",capital:"Lisbon",flag:"🇵🇹"},{country:"Romania",capital:"Bucharest",flag:"🇷🇴"},{country:"San Marino",capital:"San Marino",flag:"🇸🇲"},{country:"Serbia",capital:"Belgrade",flag:"🇷🇸"},{country:"Slovakia",capital:"Bratislava",flag:"🇸🇰"},{country:"Slovenia",capital:"Ljubljana",flag:"🇸🇮"},{country:"Spain",capital:"Madrid",flag:"🇪🇸"},{country:"Sweden",capital:"Stockholm",flag:"🇸🇪"},{country:"Switzerland",capital:"Bern",flag:"🇨🇭"},{country:"Turkey",capital:"Ankara",flag:"🇹🇷"},{country:"Ukraine",capital:"Kyiv",flag:"🇺🇦"},{country:"United Kingdom",capital:"London",flag:"🇬🇧"},{country:"Vatican City",capital:"Vatican City",flag:"🇻🇦"}];function r(v){const m=[...v];for(let E=m.length-1;E>0;E--){const N=Math.floor(Math.random()*(E+1));[m[E],m[N]]=[m[N],m[E]]}return m}function o(v=15){return r(i).slice(0,v).map((m,E)=>{const N=E%2===0,T=N?m.capital:m.country,P=N?i.filter(R=>R.capital!==m.capital).map(R=>R.capital):i.filter(R=>R.country!==m.country).map(R=>R.country);return{prompt:N?`What is the capital of ${m.country}?`:`${m.capital} is the capital of which country?`,flag:m.flag,correct:T,options:r([T,...r(P).slice(0,3)])}})}const a=15,c=[{shape:"▲",color:"#e74c3c"},{shape:"◆",color:"#2980b9"},{shape:"●",color:"#f39c12"},{shape:"■",color:"#27ae60"}];let l=Q("home"),d=Q(""),u=Q(en([])),f=Q(0),p=Q(0),_=Q(0),S=Q(0),H=Q(-1),K=Q(a),x=Q(en([])),Z=null,Fe=0,Se=Q(""),Te=Q(!1);function gt(){C(u,o(15),!0),C(f,0),C(p,0),C(S,0),C(x,[],!0),C(H,-1),C(l,"solo_q"),Ne()}function Ne(){C(H,-1),C(K,a),Fe=Date.now(),Z&&clearInterval(Z),Z=setInterval(()=>{xs(K,-1),h(K)<=0&&(clearInterval(Z),Z=null,be(-1))},1e3)}function be(v){if(h(l)!=="solo_q")return;Z&&(clearInterval(Z),Z=null),C(H,v,!0);const m=h(u)[h(f)],E=v>=0&&m.options[v]===m.correct,N=Math.max(0,a-(Date.now()-Fe)/1e3);let T=0;E?(T=100+Math.round(N/a*900)+(h(S)>=3?100:h(S)>=2?50:0),C(p,h(p)+T),xs(S),C(Se,`+${T}${h(S)>2?" 🔥":""}`),C(Te,!0),setTimeout(()=>C(Te,!1),1200)):C(S,0),C(x,[...h(x),{correct:E,points:T}],!0),C(l,"solo_reveal"),setTimeout(()=>{h(f)+1>=h(u).length?(h(p)>h(_)&&C(_,h(p),!0),C(l,"solo_final")):(xs(f),C(l,"solo_q"),Ne())},2200)}const Be=Ce(()=>h(K)/a),ae=Ce(()=>h(u)[h(f)]),Is=Ce(()=>h(x).filter(v=>v.correct).length),ue=typeof crypto<"u"?crypto.randomUUID():Math.random().toString(36).slice(2);let We=Q(""),jt=Q(""),ze=Q(""),Ge=Q(!1),ye=Q(en({})),mt=Q(en([])),je=Q(0),Ss=Q(0),Ye=Q(-1),Bn=Q(a),Wn=null,Un=Q(en({})),Ke=!1,vt="",Ue=null;function La(){const v="ABCDEFGHJKLMNPQRSTUVWXYZ";return Array.from({length:4},()=>v[Math.floor(Math.random()*v.length)]).join("")}async function Fa(){if(!h(We).trim())return;const v=La(),m=o(15);C(ze,v,!0),C(Ge,!0),await to(Ie(s,`rooms/${v}`),{phase:"lobby",hostId:ue,qIndex:0,startTime:0,questions:m,players:{[ue]:{name:h(We).trim(),score:0,streak:0}}}),Ji(v),C(l,"mp_lobby")}async function Ba(){if(!h(We).trim()||!h(jt).trim())return;const v=h(jt).toUpperCase().replace(/[^A-Z]/g,""),m=await no(Ie(s,`rooms/${v}`));if(!m.exists()){C(d,"Room not found. Check the code and try again.");return}if(m.val().phase!=="lobby"){C(d,"This game has already started.");return}C(ze,v,!0),C(Ge,!1),await to(Ie(s,`rooms/${v}/players/${ue}`),{name:h(We).trim(),score:0,streak:0}),Ji(v),C(l,"mp_lobby")}function Ji(v){const m=Ie(s,`rooms/${v}`);Ue=Vf(m,N=>{var L,O;if(!N.exists()){C(l,"mp_error"),C(d,"Room was closed.");return}const T=N.val();C(ye,T.players??{},!0),h(mt).length||C(mt,T.questions??[],!0);const P=T.phase??"lobby",R=T.qIndex??0;if(P==="question"&&h(Ge)&&!Ke){const F=((L=T.answers)==null?void 0:L[R])??{};Object.keys(F).length>=Object.keys(h(ye)).length&&(Ke=!0,at(Ie(s,`rooms/${v}`),{phase:"reveal"}))}if(P==="question"&&(vt!=="question"||R!==h(je)))C(je,R,!0),C(Ss,T.startTime??Date.now(),!0),C(Ye,-1),C(Un,{},!0),Wa(h(Ss)),C(l,"mp_question");else if(P==="reveal"&&vt!=="reveal"){if(C(Un,((O=T.answers)==null?void 0:O[R])??{},!0),C(je,R,!0),Yt(),C(l,"mp_reveal"),h(Ge)){const F=R;setTimeout(async()=>{F+1>=h(mt).length?await at(Ie(s,`rooms/${v}`),{phase:"final"}):await at(Ie(s,`rooms/${v}`),{phase:"question",qIndex:F+1,startTime:Date.now()}),Ke=!1},3500)}}else P==="final"&&vt!=="final"?(Yt(),C(l,"mp_final")):P==="lobby"&&vt!=="lobby"&&vt!==""&&(C(mt,T.questions??[],!0),C(je,0),C(Ye,-1),Ke=!1,C(l,"mp_lobby"));vt=P})}function Wa(v){Yt();const m=()=>{const E=(Date.now()-v)/1e3;C(Bn,Math.max(0,a-E),!0),h(Bn)<=0&&(Yt(),h(Ye)<0&&Zi(-1),h(Ge)&&!Ke&&(Ke=!0,at(Ie(s,`rooms/${h(ze)}`),{phase:"reveal"})))};m(),Wn=setInterval(m,150)}function Yt(){Wn&&(clearInterval(Wn),Wn=null)}async function Ua(){Ke=!1,vt="lobby",await at(Ie(s,`rooms/${h(ze)}`),{phase:"question",qIndex:0,startTime:Date.now()})}async function Zi(v){if(h(Ye)>=0||h(l)!=="mp_question")return;C(Ye,v,!0);const m=h(mt)[h(je)],E=Date.now()-h(Ss),N=v>=0&&m.options[v]===m.correct,T=h(ye)[ue]??{score:0,streak:0};let P=0,R=T.streak??0;if(N){const L=Math.max(0,a-E/1e3);P=100+Math.round(L/a*900)+(R>=3?100:R>=2?50:0),R++}else R=0;if(await at(Ie(s,`rooms/${h(ze)}`),{[`answers/${h(je)}/${ue}`]:{choice:v,timeMs:E,points:P,correct:N},[`players/${ue}/score`]:(T.score??0)+P,[`players/${ue}/streak`]:R}),h(Ge)&&!Ke){const O=(await no(Ie(s,`rooms/${h(ze)}/answers/${h(je)}`))).val()??{};Object.keys(O).length>=Object.keys(h(ye)).length&&(Ke=!0,await at(Ie(s,`rooms/${h(ze)}`),{phase:"reveal"}))}}async function Ha(){const v=o(15);await at(Ie(s,`rooms/${h(ze)}`),{phase:"lobby",qIndex:0,startTime:0,questions:v,answers:null,players:Object.fromEntries(Object.entries(h(ye)).map(([m,E])=>[m,{...E,score:0,streak:0}]))})}const Kt=Ce(()=>h(Bn)/a),yt=Ce(()=>h(mt)[h(je)]),er=Ce(()=>Object.entries(h(ye)).sort(([,v],[,m])=>m.score-v.score)),Hn=Ce(()=>h(Un)[ue]);function tr(v){return["🥇","🥈","🥉"][v]??`${v+1}.`}sl(()=>{Z&&clearInterval(Z),Yt(),Ue==null||Ue()});var Ts=S_();ql("1uha8ag",v=>{Ll(()=>{Fl.title="European Capitals Quiz"})});var $a=b(Ts);{var Va=v=>{var m=e_(),E=w(b(m),6),N=w(E,4),T=b(N),P=w(T,2);y(N),Bl(2),y(m),pe("click",E,()=>gt()),pe("click",T,()=>{C(d,""),C(l,"mp_create")}),pe("click",P,()=>{C(d,""),C(l,"mp_join")}),$(v,m)},qa=v=>{var m=n_(),E=w(b(m),2);Ds(E),fn(E,"maxlength",20);var N=w(E,2);{var T=L=>{var O=t_(),F=b(O,!0);y(O),ne(()=>M(F,h(d))),$(L,O)};Ve(N,L=>{h(d)&&L(T)})}var P=w(N,2),R=w(P,2);y(m),ne(L=>P.disabled=L,[()=>!h(We).trim()]),Ps(E,()=>h(We),L=>C(We,L)),pe("click",P,Fa),pe("click",R,()=>C(l,"home")),$(v,m)},za=v=>{var m=i_(),E=w(b(m),2);Ds(E),fn(E,"maxlength",4);var N=w(E,2);Ds(N),fn(N,"maxlength",20);var T=w(N,2);{var P=O=>{var F=s_(),te=b(F,!0);y(F),ne(()=>M(te,h(d))),$(O,F)};Ve(T,O=>{h(d)&&O(P)})}var R=w(T,2),L=w(R,2);y(m),ne(O=>R.disabled=O,[()=>!h(We).trim()||!h(jt).trim()]),Ps(E,()=>h(jt),O=>C(jt,O)),Ps(N,()=>h(We),O=>C(We,O)),pe("click",R,Ba),pe("click",L,()=>C(l,"home")),$(v,m)},Ga=v=>{var m=l_(),E=w(b(m),2),N=b(E,!0);y(E);var T=w(E,4);nn(T,21,()=>Object.entries(h(ye)),tn,(F,te)=>{var le=Ce(()=>ks(h(te),2));let Re=()=>h(le)[0],de=()=>h(le)[1];var fe=r_(),He=b(fe);let $e;var Qe=w(He);y(fe),ne(Pe=>{$e=Ct(He,1,"player-dot svelte-1uha8ag",null,$e,{me:Re()===ue}),M(Qe,` ${de().name??""}${Re()===ue?" (you)":""}${Pe??""}`)},[()=>Re()===(Object.values(h(ye))[0]?Object.keys(h(ye))[0]:"")&&h(Ge)?" 👑":""]),$(F,fe)}),y(T);var P=w(T,2);{var R=F=>{var te=o_(),le=b(te);y(te),ne((Re,de,fe)=>{te.disabled=Re,M(le,`Start Game (${de??""} player${fe??""})`)},[()=>Object.keys(h(ye)).length<1,()=>Object.keys(h(ye)).length,()=>Object.keys(h(ye)).length!==1?"s":""]),pe("click",te,Ua),$(F,te)},L=F=>{var te=a_();$(F,te)};Ve(P,F=>{h(Ge)?F(R):F(L,-1)})}var O=w(P,2);y(m),ne(()=>M(N,h(ze))),pe("click",O,()=>{Ue==null||Ue(),C(l,"home")}),$(v,m)},ja=v=>{var m=f_(),E=b(m),N=b(E),T=b(N);y(N);var P=w(N,2),R=b(P);y(P);var L=w(P,2);{var O=W=>{var j=c_(),Y=b(j);y(j),ne(()=>M(Y,`🔥 ${h(S)??""}`)),$(W,j)};Ve(L,W=>{h(S)>=2&&W(O)})}y(E);var F=w(E,2),te=b(F);y(F);var le=w(F,2),Re=b(le,!0);y(le);var de=w(le,2),fe=b(de),He=b(fe,!0);y(fe);var $e=w(fe,2),Qe=b($e,!0);y($e),y(de);var Pe=w(de,2);nn(Pe,21,()=>h(ae).options,tn,(W,j,Y)=>{const _e=Ce(()=>h(j)===h(ae).correct),Ae=Ce(()=>Y===h(H));var ee=h_();let we;var ke=b(ee),it=b(ke,!0);y(ke);var rt=w(ke,2),Zt=b(rt,!0);y(rt),y(ee),ne(()=>{we=Ct(ee,1,"opt svelte-1uha8ag",null,we,{revealed:h(l)==="solo_reveal",correct:h(l)==="solo_reveal"&&h(_e),wrong:h(l)==="solo_reveal"&&h(Ae)&&!h(_e),unchosen:h(l)==="solo_reveal"&&!h(Ae)&&!h(_e)}),At(ee,`--c:${c[Y].color??""}`),ee.disabled=h(l)==="solo_reveal",M(it,h(l)==="solo_reveal"?h(_e)?"✓":h(Ae)?"✗":c[Y].shape:c[Y].shape),M(Zt,h(j))}),pe("click",ee,()=>be(Y)),$(W,ee)}),y(Pe);var st=w(Pe,2);{var Qt=W=>{var j=u_();let Y;var _e=b(j,!0);y(j),ne(()=>{var Ae,ee,we;Y=Ct(j,1,"banner svelte-1uha8ag",null,Y,{"correct-b":(Ae=h(x)[h(f)])==null?void 0:Ae.correct,"wrong-b":!((ee=h(x)[h(f)])!=null&&ee.correct)}),M(_e,(we=h(x)[h(f)])!=null&&we.correct?`🎉 Correct! +${h(x)[h(f)].points}`:h(H)===-1?`⏱ Time's up! → ${h(ae).correct}`:`❌ Wrong! → ${h(ae).correct}`)}),$(W,j)};Ve(st,W=>{h(l)==="solo_reveal"&&W(Qt)})}var Xt=w(st,2);{var Jt=W=>{var j=d_(),Y=b(j,!0);y(j),ne(()=>M(Y,h(Se))),$(W,j)};Ve(Xt,W=>{h(Te)&&W(Jt)})}y(m),ne(W=>{M(T,`${h(f)+1} / ${h(u).length??""}`),M(R,`⭐ ${W??""}`),At(te,`width:${h(Be)*100}%;background:${h(Be)>.4?"#2ecc71":h(Be)>.2?"#f39c12":"#e74c3c"}`),At(le,`color:${h(Be)>.4?"#2ecc71":h(Be)>.2?"#f39c12":"#e74c3c"}`),M(Re,h(K)),M(He,h(ae).flag),M(Qe,h(ae).prompt)},[()=>h(p).toLocaleString()]),$(v,m)},Ya=v=>{var m=__(),E=b(m),N=b(E,!0);y(E);var T=w(E,4),P=b(T,!0);y(T);var R=w(T,2),L=b(R);y(R);var O=w(R,2),F=w(O,2);y(m),ne(te=>{M(N,h(p)>=h(u).length*900?"🥇":h(p)>=h(u).length*600?"🥈":h(p)>=h(u).length*300?"🥉":"🎯"),M(P,te),M(L,`points  ·  ${h(Is)??""}/${h(u).length??""} correct`)},[()=>h(p).toLocaleString()]),pe("click",O,gt),pe("click",F,()=>C(l,"home")),$(v,m)},Ka=v=>{var m=y_(),E=b(m),N=b(E),T=b(N);y(N);var P=w(N,2),R=b(P);y(P);var L=w(P,2),O=b(L);y(L),y(E);var F=w(E,2),te=b(F);y(F);var le=w(F,2),Re=b(le,!0);y(le);var de=w(le,2),fe=b(de),He=b(fe,!0);y(fe);var $e=w(fe,2),Qe=b($e,!0);y($e),y(de);var Pe=w(de,2);nn(Pe,21,()=>h(yt).options,tn,(W,j,Y)=>{const _e=Ce(()=>h(j)===h(yt).correct),Ae=Ce(()=>Y===h(Ye));var ee=p_();let we;var ke=b(ee),it=b(ke,!0);y(ke);var rt=w(ke,2),Zt=b(rt,!0);y(rt),y(ee),ne(()=>{we=Ct(ee,1,"opt svelte-1uha8ag",null,we,{revealed:h(l)==="mp_reveal",correct:h(l)==="mp_reveal"&&h(_e),wrong:h(l)==="mp_reveal"&&h(Ae)&&!h(_e),unchosen:h(l)==="mp_reveal"&&!h(Ae)&&!h(_e)}),At(ee,`--c:${c[Y].color??""}`),ee.disabled=h(l)==="mp_reveal"||h(Ye)>=0,M(it,h(l)==="mp_reveal"?h(_e)?"✓":h(Ae)?"✗":c[Y].shape:c[Y].shape),M(Zt,h(j))}),pe("click",ee,()=>Zi(Y)),$(W,ee)}),y(Pe);var st=w(Pe,2);{var Qt=W=>{var j=g_();$(W,j)};Ve(st,W=>{h(l)==="mp_question"&&h(Ye)>=0&&W(Qt)})}var Xt=w(st,2);{var Jt=W=>{var j=v_(),Y=Wl(j);let _e;var Ae=b(Y,!0);y(Y);var ee=w(Y,2);nn(ee,21,()=>h(er).slice(0,5),tn,(we,ke,it)=>{var rt=Ce(()=>ks(h(ke),2));let Zt=()=>h(rt)[0],nr=()=>h(rt)[1];var $n=m_();let sr;var Ns=b($n),Ja=b(Ns,!0);y(Ns);var Rs=w(Ns,2),Za=b(Rs,!0);y(Rs);var ir=w(Rs,2),el=b(ir,!0);y(ir),y($n),ne((tl,nl)=>{sr=Ct($n,1,"lb-row svelte-1uha8ag",null,sr,{"lb-me":Zt()===ue}),M(Ja,tl),M(Za,nr().name),M(el,nl)},[()=>tr(it),()=>nr().score.toLocaleString()]),$(we,$n)}),y(ee),ne(()=>{var we,ke,it;_e=Ct(Y,1,"banner svelte-1uha8ag",null,_e,{"correct-b":(we=h(Hn))==null?void 0:we.correct,"wrong-b":!((ke=h(Hn))!=null&&ke.correct)}),M(Ae,(it=h(Hn))!=null&&it.correct?`🎉 +${h(Hn).points} pts`:h(Ye)===-1?`⏱ Time's up! → ${h(yt).correct}`:`❌ Wrong! → ${h(yt).correct}`)}),$(W,j)};Ve(Xt,W=>{h(l)==="mp_reveal"&&W(Jt)})}y(m),ne((W,j,Y,_e)=>{M(T,`${h(je)+1} / ${h(mt).length??""}`),M(R,`⭐ ${W??""}`),M(O,`👥 ${j??""}/${Y??""}`),At(te,`width:${h(Kt)*100}%;background:${h(Kt)>.4?"#2ecc71":h(Kt)>.2?"#f39c12":"#e74c3c"}`),At(le,`color:${h(Kt)>.4?"#2ecc71":h(Kt)>.2?"#f39c12":"#e74c3c"}`),M(Re,_e),M(He,h(yt).flag),M(Qe,h(yt).prompt)},[()=>{var W;return(((W=h(ye)[ue])==null?void 0:W.score)??0).toLocaleString()},()=>Object.keys(h(Un)).length,()=>Object.keys(h(ye)).length,()=>Math.ceil(h(Bn))]),$(v,m)},Qa=v=>{var m=w_(),E=w(b(m),4);nn(E,21,()=>h(er),tn,(L,O,F)=>{var te=Ce(()=>ks(h(O),2));let le=()=>h(te)[0],Re=()=>h(te)[1];var de=C_();let fe;var He=b(de),$e=b(He,!0);y(He);var Qe=w(He,2),Pe=b(Qe);y(Qe);var st=w(Qe,2),Qt=b(st,!0);y(st),y(de),ne((Xt,Jt)=>{fe=Ct(de,1,"lb-row svelte-1uha8ag",null,fe,{"lb-me":le()===ue,"lb-winner":F===0}),M($e,Xt),M(Pe,`${Re().name??""}${le()===ue?" (you)":""}`),M(Qt,Jt)},[()=>tr(F),()=>Re().score.toLocaleString()]),$(L,de)}),y(E);var N=w(E,2);{var T=L=>{var O=E_();pe("click",O,Ha),$(L,O)},P=L=>{var O=b_();$(L,O)};Ve(N,L=>{h(Ge)?L(T):L(P,-1)})}var R=w(N,2);y(m),pe("click",R,()=>{Ue==null||Ue(),C(l,"home")}),$(v,m)},Xa=v=>{var m=I_(),E=b(m),N=b(E,!0);y(E);var T=w(E,2);y(m),ne(()=>M(N,h(d))),pe("click",T,()=>C(l,"home")),$(v,m)};Ve($a,v=>{h(l)==="home"?v(Va):h(l)==="mp_create"?v(qa,1):h(l)==="mp_join"?v(za,2):h(l)==="mp_lobby"?v(Ga,3):(h(l)==="solo_q"||h(l)==="solo_reveal")&&h(ae)?v(ja,4):h(l)==="solo_final"?v(Ya,5):(h(l)==="mp_question"||h(l)==="mp_reveal")&&h(yt)?v(Ka,6):h(l)==="mp_final"?v(Qa,7):h(l)==="mp_error"&&v(Xa,8)})}y(Ts),$(n,Ts),Ml()}Ul(["click"]);export{x_ as component};
