import{a as M,f as L}from"../chunks/BWRt2y-Q.js";import{a as jl}from"../chunks/DF0VU7MB.js";import{h as Ne,c as Bn,C as $o,i as bs,a as Ql,b as Ho,J as c,r as Yl,P as Kl,s as Hr,d as Wn,e as Ln,a8 as Vo,ag as Xl,_ as Vr,k as ln,j as Si,aE as Jl,l as Zl,aF as zo,av as ec,aG as tc,af as Qi,aH as nc,L as zr,aI as sc,aJ as ic,az as rc,aK as lt,ar as oc,f as qo,p as Go,aL as ci,M as jo,aM as ac,aN as lc,ad as cc,m as hc,g as uc,aa as Ti,aO as dc,a1 as fc,aP as _c,aQ as pc,aR as gc,aS as mc,aT as vc,aU as yc,aV as Cc,aB as Ec,o as bc,K as wc,t as Ic,aC as Y,ao as At,w as Sc,ai as Tc,x as E,y as m,aD as oe,aW as Nc,z as b,v as q,ap as y,aX as Rc,q as kc,aY as vs,aZ as hi}from"../chunks/DpYGvlyP.js";import{d as Ac,a as ee,s as P,e as ys,r as ui}from"../chunks/BiCfskr2.js";import{i as de}from"../chunks/CSLQBlsr.js";function ot(n,e){return e}function xc(n,e,t){for(var s=[],i=e.length,r,o=e.length,a=0;a<i;a++){let f=e[a];Go(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var u=n.outrogroups;Ni(n,Qi(r.done)),u.delete(r),u.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=s.length===0&&t!==null;if(l){var h=t,d=h.parentNode;cc(d),d.append(h),n.items.clear()}Ni(n,e,!l)}else r={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Ni(n,e,t=!0){var s;if(n.pending.size>0){s=new Set;for(const o of n.pending.values())for(const a of o)s.add(n.items.get(a).e)}for(var i=0;i<e.length;i++){var r=e[i];if(s!=null&&s.has(r)){r.f|=lt;const o=document.createDocumentFragment();hc(r,o)}else uc(e[i],t)}}var qr;function at(n,e,t,s,i,r=null){var o=n,a=new Map,l=(e&zo)!==0;if(l){var h=n;o=Ne?Bn($o(h)):h.appendChild(bs())}Ne&&Ql();var d=null,f=ec(()=>{var K=t();return tc(K)?K:K==null?[]:Qi(K)}),u,g=new Map,w=!0;function A(K){(be.effect.f&oc)===0&&(be.pending.delete(K),be.fallback=d,Dc(be,u,o,e,s),d!==null&&(u.length===0?(d.f&lt)===0?qo(d):(d.f^=lt,Fn(d,null,o)):Go(d,()=>{d=null})))}function I(K){be.pending.delete(K)}var j=Ho(()=>{u=c(f);var K=u.length;let ue=!1;if(Ne){var nt=Yl(o)===Kl;nt!==(K===0)&&(o=Hr(),Bn(o),Wn(!1),ue=!0)}for(var me=new Set,fe=ln,Ge=Zl(),je=0;je<K;je+=1){Ne&&Ln.nodeType===Vo&&Ln.data===Xl&&(o=Ln,ue=!0,Wn(!1));var bt=u[je],ht=s(bt,je),le=w?null:a.get(ht);le?(le.v&&Vr(le.v,bt),le.i&&Vr(le.i,je),Ge&&fe.unskip_effect(le.e)):(le=Pc(a,w?o:qr??(qr=bs()),bt,ht,je,i,e,t),w||(le.e.f|=lt),a.set(ht,le)),me.add(ht)}if(K===0&&r&&!d&&(w?d=Si(()=>r(o)):(d=Si(()=>r(qr??(qr=bs()))),d.f|=lt)),K>me.size&&Jl(),Ne&&K>0&&Bn(Hr()),!w)if(g.set(fe,me),Ge){for(const[Re,ke]of a)me.has(Re)||fe.skip_effect(ke.e);fe.oncommit(A),fe.ondiscard(I)}else A(fe);ue&&Wn(!0),c(f)}),be={effect:j,items:a,pending:g,outrogroups:null,fallback:d};w=!1,Ne&&(o=Ln)}function xn(n){for(;n!==null&&(n.f&ac)===0;)n=n.next;return n}function Dc(n,e,t,s,i){var bt,ht,le,Re,ke,In,Qe,wt,It;var r=(s&lc)!==0,o=e.length,a=n.items,l=xn(n.effect.first),h,d=null,f,u=[],g=[],w,A,I,j;if(r)for(j=0;j<o;j+=1)w=e[j],A=i(w,j),I=a.get(A).e,(I.f&lt)===0&&((ht=(bt=I.nodes)==null?void 0:bt.a)==null||ht.measure(),(f??(f=new Set)).add(I));for(j=0;j<o;j+=1){if(w=e[j],A=i(w,j),I=a.get(A).e,n.outrogroups!==null)for(const ve of n.outrogroups)ve.pending.delete(I),ve.done.delete(I);if((I.f&ci)!==0&&(qo(I),r&&((Re=(le=I.nodes)==null?void 0:le.a)==null||Re.unfix(),(f??(f=new Set)).delete(I))),(I.f&lt)!==0)if(I.f^=lt,I===l)Fn(I,null,t);else{var be=d?d.next:l;I===n.effect.last&&(n.effect.last=I.prev),I.prev&&(I.prev.next=I.next),I.next&&(I.next.prev=I.prev),xt(n,d,I),xt(n,I,be),Fn(I,be,t),d=I,u=[],g=[],l=xn(d.next);continue}if(I!==l){if(h!==void 0&&h.has(I)){if(u.length<g.length){var K=g[0],ue;d=K.prev;var nt=u[0],me=u[u.length-1];for(ue=0;ue<u.length;ue+=1)Fn(u[ue],K,t);for(ue=0;ue<g.length;ue+=1)h.delete(g[ue]);xt(n,nt.prev,me.next),xt(n,d,nt),xt(n,me,K),l=K,d=me,j-=1,u=[],g=[]}else h.delete(I),Fn(I,l,t),xt(n,I.prev,I.next),xt(n,I,d===null?n.effect.first:d.next),xt(n,d,I),d=I;continue}for(u=[],g=[];l!==null&&l!==I;)(h??(h=new Set)).add(l),g.push(l),l=xn(l.next);if(l===null)continue}(I.f&lt)===0&&u.push(I),d=I,l=xn(I.next)}if(n.outrogroups!==null){for(const ve of n.outrogroups)ve.pending.size===0&&(Ni(n,Qi(ve.done)),(ke=n.outrogroups)==null||ke.delete(ve));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||h!==void 0){var fe=[];if(h!==void 0)for(I of h)(I.f&ci)===0&&fe.push(I);for(;l!==null;)(l.f&ci)===0&&l!==n.fallback&&fe.push(l),l=xn(l.next);var Ge=fe.length;if(Ge>0){var je=(s&zo)!==0&&o===0?t:null;if(r){for(j=0;j<Ge;j+=1)(Qe=(In=fe[j].nodes)==null?void 0:In.a)==null||Qe.measure();for(j=0;j<Ge;j+=1)(It=(wt=fe[j].nodes)==null?void 0:wt.a)==null||It.fix()}xc(n,fe,je)}}r&&jo(()=>{var ve,We;if(f!==void 0)for(I of f)(We=(ve=I.nodes)==null?void 0:ve.a)==null||We.apply()})}function Pc(n,e,t,s,i,r,o,a){var l=(o&sc)!==0?(o&ic)===0?rc(t,!1,!1):zr(t):null,h=(o&nc)!==0?zr(i):null;return{v:l,i:h,e:Si(()=>(r(e,l??t,h??i,a),()=>{n.delete(s)}))}}function Fn(n,e,t){if(n.nodes)for(var s=n.nodes.start,i=n.nodes.end,r=e&&(e.f&lt)===0?e.nodes.start:t;s!==null;){var o=Ti(s);if(r.before(s),s===i)return;s=o}}function xt(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Oc(n,e){let t=null,s=Ne;var i;if(Ne){t=Ln;for(var r=$o(document.head);r!==null&&(r.nodeType!==Vo||r.data!==n);)r=Ti(r);if(r===null)Wn(!1);else{var o=Ti(r);r.remove(),Bn(o)}}Ne||(i=document.head.appendChild(bs()));try{Ho(()=>e(i),dc|fc)}finally{s&&(Wn(!0),Bn(t))}}const Gr=[...` 	
\r\f \v\uFEFF`];function Mc(n,e,t){var s=n==null?"":""+n;if(t){for(var i of Object.keys(t))if(t[i])s=s?s+" "+i:i;else if(s.length)for(var r=i.length,o=0;(o=s.indexOf(i,o))>=0;){var a=o+r;(o===0||Gr.includes(s[o-1]))&&(a===s.length||Gr.includes(s[a]))?s=(o===0?"":s.substring(0,o))+s.substring(a+1):o=a}}return s===""?null:s}function Lc(n,e){return n==null?null:String(n)}function Xe(n,e,t,s,i,r){var o=n.__className;if(Ne||o!==t||o===void 0){var a=Mc(t,s,r);(!Ne||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=t}else if(r&&i!==r)for(var l in r){var h=!!r[l];(i==null||h!==!!i[l])&&n.classList.toggle(l,h)}return r}function qt(n,e,t,s){var i=n.__style;if(Ne||i!==e){var r=Lc(e);(!Ne||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n.__style=e}return s}const Fc=Symbol("is custom element"),Bc=Symbol("is html"),Wc=yc?"link":"LINK";function Gt(n){if(Ne){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;Je(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;Je(n,"checked",null),n.checked=i}}};n.__on_r=t,jo(t),_c()}}function Je(n,e,t,s){var i=Uc(n);Ne&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===Wc)||i[e]!==(i[e]=t)&&(e==="loading"&&(n[mc]=t),t==null?n.removeAttribute(e):typeof t!="string"&&$c(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Uc(n){return n.__attributes??(n.__attributes={[Fc]:n.nodeName.includes("-"),[Bc]:n.namespaceURI===pc})}var jr=new Map;function $c(n){var e=n.getAttribute("is")||n.nodeName,t=jr.get(e);if(t)return t;jr.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=vc(i);for(var o in s)s[o].set&&t.push(o);i=gc(i)}return t}function Dt(n,e,t=e){var s=new WeakSet;Cc(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=di(n)?fi(r):r,t(r),ln!==null&&s.add(ln),await Ec(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=r??"",a!==null){var h=n.value.length;o===a&&a===l&&h>l?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=o,n.selectionEnd=Math.min(a,h))}}}),(Ne&&n.defaultValue!==n.value||bc(e)==null&&n.value)&&(t(di(n)?fi(n.value):n.value),ln!==null&&s.add(ln)),wc(()=>{var i=e();if(n===document.activeElement){var r=ln;if(s.has(r))return}di(n)&&i===fi(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function di(n){var e=n.type;return e==="number"||e==="range"}function fi(n){return n===""?null:+n}const Hc=()=>{};var Qr={};/**
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
 */const Qo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw yn(e)},yn=function(n){return new Error("Firebase Database ("+Qo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Yo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let u=(a&15)<<2|h>>6,g=h&63;l||(g=64,o||(u=64)),s.push(t[d],t[f],t[u],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||f==null)throw new zc;const u=r<<2|a>>4;if(s.push(u),h!==64){const g=a<<4&240|h>>2;if(s.push(g),f!==64){const w=h<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ko=function(n){const e=Yo(n);return Yi.encodeByteArray(e,!0)},Is=function(n){return Ko(n).replace(/\./g,"")},Ri=function(n){try{return Yi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qc(n){return Xo(void 0,n)}function Xo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Gc(t)||(n[t]=Xo(n[t],e[t]));return n}function Gc(n){return n!=="__proto__"}/**
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
 */function jc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qc=()=>jc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof Qr>"u")return;const n=Qr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ri(n[1]);return e&&JSON.parse(e)},Jo=()=>{try{return Hc()||Qc()||Yc()||Kc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xc=n=>{var e,t;return(t=(e=Jo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Jc=n=>{const e=Xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zo=()=>{var n;return(n=Jo())==null?void 0:n.config};/**
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
 */class ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Is(JSON.stringify(t)),Is(JSON.stringify(o)),""].join(".")}/**
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
 */function eh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ea(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eh())}function th(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nh(){return Qo.NODE_ADMIN===!0}function sh(){try{return typeof indexedDB=="object"}catch{return!1}}function ih(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const rh="FirebaseError";class ss extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=rh,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?oh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ss(i,a,s)}}function oh(n,e){return n.replace(ah,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ah=/\{\$([^}]+)}/g;/**
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
 */function qn(n){return JSON.parse(n)}function ge(n){return JSON.stringify(n)}/**
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
 */const na=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=qn(Ri(r[0])||""),t=qn(Ri(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},lh=function(n){const e=na(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ch=function(n){const e=na(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ct(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ss(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ts(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Kr(r)&&Kr(o)){if(!Ts(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Kr(n){return n!==null&&typeof n=="object"}/**
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
 */function hh(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const u=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],h,d;for(let f=0;f<80;f++){f<40?f<20?(h=a^r&(o^a),d=1518500249):(h=r^o^a,d=1859775393):f<60?(h=r&o|a&(r|o),d=2400959708):(h=r^o^a,d=3395469782);const u=(i<<5|i>>>27)+h+l+d+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const dh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Cn(n){return n&&n._delegate?n._delegate:n}/**
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
 */function sa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fh(n){return(await fetch(n,{credentials:"include"})).ok}class Gn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class _h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ns;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gh(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ph(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(n){return n===Qt?void 0:n}function gh(n){return n.instantiationMode==="EAGER"}/**
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
 */class mh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const vh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},yh=ne.INFO,Ch={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Eh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ch[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=yh,this._logHandler=Eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const bh=(n,e)=>e.some(t=>n instanceof t);let Xr,Jr;function wh(){return Xr||(Xr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return Jr||(Jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ra=new WeakMap,ki=new WeakMap,oa=new WeakMap,_i=new WeakMap,Ki=new WeakMap;function Sh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ot(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ra.set(t,n)}).catch(()=>{}),Ki.set(e,n),e}function Th(n){if(ki.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ki.set(n,e)}let Ai={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nh(n){Ai=n(Ai)}function Rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(pi(this),e,...t);return oa.set(s,e.sort?e.sort():[e]),Ot(s)}:Ih().includes(n)?function(...e){return n.apply(pi(this),e),Ot(ra.get(this))}:function(...e){return Ot(n.apply(pi(this),e))}}function kh(n){return typeof n=="function"?Rh(n):(n instanceof IDBTransaction&&Th(n),bh(n,wh())?new Proxy(n,Ai):n)}function Ot(n){if(n instanceof IDBRequest)return Sh(n);if(_i.has(n))return _i.get(n);const e=kh(n);return e!==n&&(_i.set(n,e),Ki.set(e,n)),e}const pi=n=>Ki.get(n);function Ah(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ot(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ot(o.result),l.oldVersion,l.newVersion,Ot(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const xh=["get","getKey","getAll","getAllKeys","count"],Dh=["put","add","delete","clear"],gi=new Map;function Zr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gi.get(e))return gi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Dh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xh.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),i&&l.done]))[0]};return gi.set(e,r),r}Nh(n=>({...n,get:(e,t,s)=>Zr(e,t)||n.get(e,t,s),has:(e,t)=>!!Zr(e,t)||n.has(e,t)}));/**
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
 */class Ph{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Oh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xi="@firebase/app",eo="0.14.11";/**
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
 */const yt=new ia("@firebase/app"),Mh="@firebase/app-compat",Lh="@firebase/analytics-compat",Fh="@firebase/analytics",Bh="@firebase/app-check-compat",Wh="@firebase/app-check",Uh="@firebase/auth",$h="@firebase/auth-compat",Hh="@firebase/database",Vh="@firebase/data-connect",zh="@firebase/database-compat",qh="@firebase/functions",Gh="@firebase/functions-compat",jh="@firebase/installations",Qh="@firebase/installations-compat",Yh="@firebase/messaging",Kh="@firebase/messaging-compat",Xh="@firebase/performance",Jh="@firebase/performance-compat",Zh="@firebase/remote-config",eu="@firebase/remote-config-compat",tu="@firebase/storage",nu="@firebase/storage-compat",su="@firebase/firestore",iu="@firebase/ai",ru="@firebase/firestore-compat",ou="firebase",au="12.12.0";/**
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
 */const Di="[DEFAULT]",lu={[xi]:"fire-core",[Mh]:"fire-core-compat",[Fh]:"fire-analytics",[Lh]:"fire-analytics-compat",[Wh]:"fire-app-check",[Bh]:"fire-app-check-compat",[Uh]:"fire-auth",[$h]:"fire-auth-compat",[Hh]:"fire-rtdb",[Vh]:"fire-data-connect",[zh]:"fire-rtdb-compat",[qh]:"fire-fn",[Gh]:"fire-fn-compat",[jh]:"fire-iid",[Qh]:"fire-iid-compat",[Yh]:"fire-fcm",[Kh]:"fire-fcm-compat",[Xh]:"fire-perf",[Jh]:"fire-perf-compat",[Zh]:"fire-rc",[eu]:"fire-rc-compat",[tu]:"fire-gcs",[nu]:"fire-gcs-compat",[su]:"fire-fst",[ru]:"fire-fst-compat",[iu]:"fire-vertex","fire-js":"fire-js",[ou]:"fire-js-all"};/**
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
 */const Ns=new Map,cu=new Map,Pi=new Map;function to(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rs(n){const e=n.name;if(Pi.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,n);for(const t of Ns.values())to(t,n);for(const t of cu.values())to(t,n);return!0}function hu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function uu(n){return n==null?!1:n.settings!==void 0}/**
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
 */const du={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new ta("app","Firebase",du);/**
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
 */class fu{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const _u=au;function aa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Di,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(t||(t=Zo()),!t)throw Mt.create("no-options");const r=Ns.get(i);if(r){if(Ts(t,r.options)&&Ts(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new mh(i);for(const l of Pi.values())o.addComponent(l);const a=new fu(t,s,o);return Ns.set(i,a),a}function pu(n=Di){const e=Ns.get(n);if(!e&&n===Di&&Zo())return aa();if(!e)throw Mt.create("no-app",{appName:n});return e}function hn(n,e,t){let s=lu[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}Rs(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gu="firebase-heartbeat-database",mu=1,jn="firebase-heartbeat-store";let mi=null;function la(){return mi||(mi=Ah(gu,mu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),mi}async function vu(n){try{const t=(await la()).transaction(jn),s=await t.objectStore(jn).get(ca(n));return await t.done,s}catch(e){if(e instanceof ss)yt.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function no(n,e){try{const s=(await la()).transaction(jn,"readwrite");await s.objectStore(jn).put(e,ca(n)),await s.done}catch(t){if(t instanceof ss)yt.warn(t.message);else{const s=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(s.message)}}}function ca(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yu=1024,Cu=30;class Eu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=so();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Cu){const o=Iu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=so(),{heartbeatsToSend:s,unsentEntries:i}=bu(this._heartbeatsCache.heartbeats),r=Is(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return yt.warn(t),""}}}function so(){return new Date().toISOString().substring(0,10)}function bu(n,e=yu){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),io(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),io(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sh()?ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function io(n){return Is(JSON.stringify({version:2,heartbeats:n})).length}function Iu(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Su(n){Rs(new Gn("platform-logger",e=>new Ph(e),"PRIVATE")),Rs(new Gn("heartbeat",e=>new Eu(e),"PRIVATE")),hn(xi,eo,n),hn(xi,eo,"esm2020"),hn("fire-js","")}Su("");var Tu="firebase",Nu="12.12.0";/**
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
 */hn(Tu,Nu,"app");var ro={};const oo="@firebase/database",ao="1.1.2";/**
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
 */let ha="";function Ru(n){ha=n}/**
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
 */class ku{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:qn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Au{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ua=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ku(e)}}catch{}return new Au},Kt=ua("localStorage"),xu=ua("sessionStorage");/**
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
 */const un=new ia("@firebase/database"),Du=(function(){let n=1;return function(){return n++}})(),da=function(n){const e=dh(n),t=new uh;t.update(e);const s=t.digest();return Yi.encodeByteArray(s)},is=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=is.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let Un=null,lo=!0;const Pu=function(n,e){C(!0,"Can't turn on custom loggers persistently."),un.logLevel=ne.VERBOSE,Un=un.log.bind(un)},Se=function(...n){if(lo===!0&&(lo=!1,Un===null&&xu.get("logging_enabled")===!0&&Pu()),Un){const e=is.apply(null,n);Un(e)}},rs=function(n){return function(...e){Se(n,...e)}},Oi=function(...n){const e="FIREBASE INTERNAL ERROR: "+is(...n);un.error(e)},Ct=function(...n){const e=`FIREBASE FATAL ERROR: ${is(...n)}`;throw un.error(e),new Error(e)},Le=function(...n){const e="FIREBASE WARNING: "+is(...n);un.warn(e)},Ou=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Mu=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_n="[MIN_NAME]",Xt="[MAX_NAME]",en=function(n,e){if(n===e)return 0;if(n===_n||e===Xt)return-1;if(e===_n||n===Xt)return 1;{const t=co(n),s=co(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Lu=function(n,e){return n===e?0:n<e?-1:1},Dn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ge(e))},Ji=function(n){if(typeof n!="object"||n===null)return ge(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ge(e[s]),t+=":",t+=Ji(n[e[s]]);return t+="}",t},fa=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const _a=function(n){C(!Xi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const d=h.join("");let f="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},Fu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Uu=new RegExp("^-?(0*)\\d{1,10}$"),$u=-2147483648,Hu=2147483647,co=function(n){if(Uu.test(n)){const e=Number(n);if(e>=$u&&e<=Hu)return e}return null},En=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Le("Exception was thrown by user callback.",t),e},Math.floor(0))}},Vu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$n=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class zu{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,uu(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class ws{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ws.OWNER="owner";/**
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
 */const Zi="5",pa="v",ga="s",ma="r",va="f",ya=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ca="ls",Ea="p",Mi="ac",ba="websocket",wa="long_polling";/**
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
 */class Ia{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sa(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let s;if(e===ba)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gu(n)&&(t.ns=n.namespace);const i=[];return Te(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class ju{constructor(){this.counters_={}}incrementCounter(e,t=1){ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qc(this.counters_)}}/**
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
 */const vi={},yi={};function er(n){const e=n.toString();return vi[e]||(vi[e]=new ju),vi[e]}function Qu(n,e){const t=n.toString();return yi[t]||(yi[t]=e()),yi[t]}/**
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
 */class Yu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&En(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ho="start",Ku="close",Xu="pLPCommand",Ju="pRTLPCB",Ta="id",Na="pw",Ra="ser",Zu="cb",ed="seg",td="ts",nd="d",sd="dframe",ka=1870,Aa=30,id=ka-Aa,rd=25e3,od=3e4;class cn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rs(e),this.stats_=er(t),this.urlFn=l=>(this.appCheckToken&&(l[Mi]=this.appCheckToken),Sa(t,wa,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(od)),Mu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tr((...r)=>{const[o,a,l,h,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ho)this.id=a,this.password=l;else if(o===Ku)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ho]="t",s[Ra]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Zu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[pa]=Zi,this.transportSessionId&&(s[ga]=this.transportSessionId),this.lastSessionId&&(s[Ca]=this.lastSessionId),this.applicationId&&(s[Ea]=this.applicationId),this.appCheckToken&&(s[Mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&ya.test(location.hostname)&&(s[ma]=va);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cn.forceAllow_=!0}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){return cn.forceAllow_?!0:!cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fu()&&!Bu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ko(t),i=fa(s,id);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[sd]="t",s[Ta]=e,s[Na]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class tr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Du(),window[Xu+this.uniqueCallbackIdentifier]=e,window[Ju+this.uniqueCallbackIdentifier]=t,this.myIFrame=tr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ta]=this.myID,e[Na]=this.myPW,e[Ra]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Aa+s.length<=ka;){const o=this.pendingSegs.shift();s=s+"&"+ed+i+"="+o.seg+"&"+td+i+"="+o.ts+"&"+nd+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(rd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ad=16384,ld=45e3;let ks=null;typeof MozWebSocket<"u"?ks=MozWebSocket:typeof WebSocket<"u"&&(ks=WebSocket);class Ze{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rs(this.connId),this.stats_=er(t),this.connURL=Ze.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[pa]=Zi,typeof location<"u"&&location.hostname&&ya.test(location.hostname)&&(o[ma]=va),t&&(o[ga]=t),s&&(o[Ca]=s),i&&(o[Mi]=i),r&&(o[Ea]=r),Sa(e,ba,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;nh(),this.mySock=new ks(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ks!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=qn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fa(t,ad);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ld))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
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
 */class Qn{static get ALL_TRANSPORTS(){return[cn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ze&&Ze.isAvailable();let s=t&&!Ze.previouslyFailed();if(e.webSocketOnly&&(t||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of Qn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Qn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qn.globalTransportInitialized_=!1;/**
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
 */const cd=6e4,hd=5e3,ud=10*1024,dd=100*1024,Ci="t",uo="d",fd="s",fo="r",_d="e",_o="o",po="a",go="n",mo="p",pd="h";class gd{constructor(e,t,s,i,r,o,a,l,h,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rs("c:"+this.id+":"),this.transportManager_=new Qn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$n(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ud?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ci in e){const t=e[Ci];t===po?this.upgradeIfSecondaryHealthy_():t===fo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_o&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Dn("t",e),s=Dn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:po,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:go,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Dn("t",e),s=Dn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Dn(Ci,e);if(uo in e){const s=e[uo];if(t===pd){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===go){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===fd?this.onConnectionShutdown_(s):t===fo?this.onReset_(s):t===_d?Oi("Server Error: "+s):t===_o?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zi!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),$n(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$n(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xa{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Da{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class As extends Da{static getInstance(){return new As}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ea()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vo=32,yo=768;class Z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Q(){return new Z("")}function U(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bt(n){return n.pieces_.length-n.pieceNum_}function se(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Z(n.pieces_,e)}function nr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function md(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Yn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Z(e,0)}function ce(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Z(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=U(n),s=U(e);if(t===null)return e;if(t===s)return Me(se(n),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vd(n,e){const t=Yn(n,0),s=Yn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=en(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function sr(n,e){if(Bt(n)!==Bt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ze(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Bt(n)>Bt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class yd{constructor(e,t){this.errorPrefix_=t,this.parts_=Yn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vs(this.parts_[s]);Oa(this)}}function Cd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vs(e),Oa(n)}function Ed(n){const e=n.parts_.pop();n.byteLength_-=Vs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Oa(n){if(n.byteLength_>yo)throw new Error(n.errorPrefix_+"has a key path longer than "+yo+" bytes ("+n.byteLength_+").");if(n.parts_.length>vo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vo+") or object contains a cycle "+Yt(n))}function Yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ir extends Da{static getInstance(){return new ir}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Pn=1e3,bd=300*1e3,Co=30*1e3,wd=1.3,Id=3e4,Sd="server_kill",Eo=3;class vt extends xa{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vt.nextPersistentConnectionId_++,this.log_=rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pn,this.maxReconnectDelay_=bd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ir.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&As.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ge(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ns,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,h=a.s;vt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ct(e,"w")){const s=fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ch(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Co)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Oi("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Id&&(this.reconnectDelay_=Pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},h=function(f){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:h};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,a=new gd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{Le(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sd)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Le(f),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yr(this.interruptReasons_)&&(this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ji(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eo&&(this.reconnectDelay_=Co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ha.replace(/\./g,"-")]=1,ea()?e["framework.cordova"]=1:th()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=As.getInstance().currentlyOnline();return Yr(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
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
 */class ${constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $(e,t)}}/**
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
 */class zs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new $(_n,e),i=new $(_n,t);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
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
 */let Cs;class Ma extends zs{static get __EMPTY_NODE(){return Cs}static set __EMPTY_NODE(e){Cs=e}compare(e,t){return en(e.name,t.name)}isDefinedOn(e){throw yn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $.MIN}maxPost(){return new $(Xt,Cs)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Cs)}toString(){return".key"}}const dn=new Ma;/**
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
 */class Es{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ee.RED,this.left=i??Be.EMPTY_NODE,this.right=r??Be.EMPTY_NODE}copy(e,t,s,i,r){return new Ee(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Td{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,t=Be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Es(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Es(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Es(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Es(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new Td;/**
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
 */function Nd(n,e){return en(n.name,e.name)}function rr(n,e){return en(n,e)}/**
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
 */let Li;function Rd(n){Li=n}const La=function(n){return typeof n=="number"?"number:"+_a(n):"string:"+n},Fa=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ct(e,".sv"),"Priority must be a string or number.")}else C(n===Li||n.isEmpty(),"priority of unexpected type.");C(n===Li||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bo;class Ce{static set __childrenNodeConstructor(e){bo=e}static get __childrenNodeConstructor(){return bo}constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fa(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:U(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=U(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+La(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=_a(this.value_):e+=this.value_,this.lazyHash_=da(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(t),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+t),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ba,Wa;function kd(n){Ba=n}function Ad(n){Wa=n}class xd extends zs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?en(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Xt,new Ce("[PRIORITY-POST]",Wa))}makePost(e,t){const s=Ba(e);return new $(t,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new xd;/**
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
 */const Dd=Math.log(2);class Pd{constructor(e){const t=r=>parseInt(Math.log(r)/Dd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xs=function(n,e,t,s){n.sort(e);const i=function(l,h){const d=h-l;let f,u;if(d===0)return null;if(d===1)return f=n[l],u=t?t(f):f,new Ee(u,f.node,Ee.BLACK,null,null);{const g=parseInt(d/2,10)+l,w=i(l,g),A=i(g+1,h);return f=n[g],u=t?t(f):f,new Ee(u,f.node,Ee.BLACK,w,A)}},r=function(l){let h=null,d=null,f=n.length;const u=function(w,A){const I=f-w,j=f;f-=w;const be=i(I+1,j),K=n[I],ue=t?t(K):K;g(new Ee(ue,K.node,A,null,be))},g=function(w){h?(h.left=w,h=w):(d=w,h=w)};for(let w=0;w<l.count;++w){const A=l.nextBitIsOne(),I=Math.pow(2,l.count-(w+1));A?u(I,Ee.BLACK):(u(I,Ee.BLACK),u(I,Ee.RED))}return d},o=new Pd(n.length),a=r(o);return new Be(s||e,a)};/**
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
 */let Ei;const an={};class mt{static get Default(){return C(an&&he,"ChildrenNode.ts has not been loaded"),Ei=Ei||new mt({".priority":an},{".priority":he}),Ei}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Be?t:null}hasIndex(e){return ct(this.indexSet_,e.toString())}addIndex(e,t){C(e!==dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=xs(s,e.getCompare()):a=an;const l=e.toString(),h={...this.indexSet_};h[l]=e;const d={...this.indexes_};return d[l]=a,new mt(d,h)}addToIndexes(e,t){const s=Ss(this.indexes_,(i,r)=>{const o=fn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator($.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&a.push(h),h=l.getNext();return a.push(e),xs(a,o.getCompare())}else return an;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ss(this.indexes_,i=>{if(i===an)return i;{const r=t.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
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
 */let On;class k{static get EMPTY_NODE(){return On||(On=new k(new Be(rr),null,mt.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fa(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||On}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?On:t}}getChild(e){const t=U(e);return t===null?this:this.getImmediateChild(t).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new $(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?On:this.priorityNode_;return new k(i,o,r)}}updateChild(e,t){const s=U(e);if(s===null)return t;{C(U(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(se(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,a)=>{t[o]=a.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+La(this.getPriority().val())+":"),this.forEachChild(he,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":da(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===os?-1:0}withIndex(e){if(e===dn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(he),i=t.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dn?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Od extends k{constructor(){super(new Be(rr),k.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const os=new Od;Object.defineProperties($,{MIN:{value:new $(_n,k.EMPTY_NODE)},MAX:{value:new $(Xt,os)}});Ma.__EMPTY_NODE=k.EMPTY_NODE;Ce.__childrenNodeConstructor=k;Rd(os);Ad(os);/**
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
 */const Md=!0;function pe(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,pe(e))}if(!(n instanceof Array)&&Md){const t=[];let s=!1;if(Te(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=pe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new $(o,l)))}}),t.length===0)return k.EMPTY_NODE;const r=xs(t,Nd,o=>o.name,rr);if(s){const o=xs(t,he.getCompare());return new k(r,pe(e),new mt({".priority":o},{".priority":he}))}else return new k(r,pe(e),mt.Default)}else{let t=k.EMPTY_NODE;return Te(n,(s,i)=>{if(ct(n,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(pe(e))}}kd(pe);/**
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
 */class Ld extends zs{constructor(e){super(),this.indexPath_=e,C(!V(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?en(e.name,t.name):r}makePost(e,t){const s=pe(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(t,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,os);return new $(Xt,e)}toString(){return Yn(this.indexPath_,0).join("/")}}/**
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
 */class Fd extends zs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?en(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,t){const s=pe(e);return new $(t,s)}toString(){return".value"}}const Bd=new Fd;/**
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
 */function Ua(n){return{type:"value",snapshotNode:n}}function pn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Kn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Wd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class or{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Kn(t,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pn(t,s)):o.trackChildChange(Xn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{t.hasChild(i)||s.trackChildChange(Kn(i,r))}),t.isLeafNode()||t.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Xn(i,r,o))}else s.trackChildChange(pn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Jn{constructor(e){this.indexedFilter_=new or(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jn.getStartPost_(e),this.endPost_=Jn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new $(t,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=k.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(he,(o,a)=>{r.matches(new $(o,a))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ud{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new $(t,s))||(s=k.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(u,g)=>f(g,u)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new $(t,s),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,h,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const g=u==null?1:o(u,l);if(d&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Xn(t,s,f)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Kn(t,f));const A=a.updateImmediateChild(t,k.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(pn(u.name,u.node)),A.updateImmediateChild(u.name,u.node)):A}}else return s.isEmpty()?e:d&&o(h,l)>=0?(r!=null&&(r.trackChildChange(Kn(h.name,h.node)),r.trackChildChange(pn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(h.name,k.EMPTY_NODE)):e}}/**
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
 */class ar{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_n}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new ar;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $d(n){return n.loadsAllData()?new or(n.getIndex()):n.hasLimit()?new Ud(n):new Jn(n)}function wo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===Bd?t="$value":n.index_===dn?t="$key":(C(n.index_ instanceof Ld,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ge(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ge(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ge(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ge(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ge(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Io(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
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
 */class Ds extends xa{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=rs("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ds.getListenId_(e,s),a={};this.listens_[o]=a;const l=wo(e._queryParams);this.restRequest_(r+".json",l,(h,d)=>{let f=d;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(r,f,!1,s),fn(this.listens_,o)===a){let u;h?h===401?u="permission_denied":u="rest_error:"+h:u="ok",i(u,null)}})}unlisten(e,t){const s=Ds.getListenId_(e,t);delete this.listens_[s]}get(e){const t=wo(e._queryParams),s=e._path.toString(),i=new ns;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hh(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qn(a.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Hd{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ps(){return{value:null,children:new Map}}function $a(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=U(e);n.children.has(s)||n.children.set(s,Ps());const i=n.children.get(s);e=se(e),$a(i,e,t)}}function Fi(n,e,t){n.value!==null?t(e,n.value):Vd(n,(s,i)=>{const r=new Z(e.toString()+"/"+s);Fi(i,r,t)})}function Vd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class zd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Te(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const So=10*1e3,qd=30*1e3,Gd=300*1e3;class jd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zd(e);const s=So+(qd-So)*Math.random();$n(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Te(e,(i,r)=>{r>0&&ct(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),$n(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gd))}}/**
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
 */var et;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(et||(et={}));function lr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Os{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=et.ACK_USER_WRITE,this.source=lr()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Z(e));return new Os(Q(),t,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new Os(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=et.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Zn(this.source,Q()):new Zn(this.source,se(this.path))}}/**
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
 */class Jt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=et.OVERWRITE}operationForChild(e){return V(this.path)?new Jt(this.source,Q(),this.snap.getImmediateChild(e)):new Jt(this.source,se(this.path),this.snap)}}/**
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
 */class gn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=et.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new Z(e));return t.isEmpty()?null:t.value?new Jt(this.source,Q(),t.value):new gn(this.source,Q(),t)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gn(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=U(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Qd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Wd(o.childName,o.snapshotNode))}),Mn(n,i,"child_removed",e,s,t),Mn(n,i,"child_added",e,s,t),Mn(n,i,"child_moved",r,s,t),Mn(n,i,"child_changed",e,s,t),Mn(n,i,"value",e,s,t),i}function Mn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Xd(n,a,l)),o.forEach(a=>{const l=Kd(n,a,r);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(l,n.query_))})})}function Kd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Xd(n,e,t){if(e.childName==null||t.childName==null)throw yn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function qs(n,e){return{eventCache:n,serverCache:e}}function Hn(n,e,t,s){return qs(new Wt(e,t,s),n.serverCache)}function Ha(n,e,t,s){return qs(n.eventCache,new Wt(e,t,s))}function Ms(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Zt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let bi;const Jd=()=>(bi||(bi=new Be(Lu)),bi);class te{static fromObject(e){let t=new te(null);return Te(e,(s,i)=>{t=t.set(new Z(s),i)}),t}constructor(e,t=Jd()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Q(),value:this.value};if(V(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(se(e),t);return r!=null?{path:ce(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=U(e),s=this.children.get(t);return s!==null?s.subtree(se(e)):new te(null)}}set(e,t){if(V(e))return new te(t,this.children);{const s=U(e),r=(this.children.get(s)||new te(null)).set(se(e),t),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const t=U(e),s=this.children.get(t);if(s){const i=s.remove(se(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const t=U(e),s=this.children.get(t);return s?s.get(se(e)):null}}setTree(e,t){if(V(e))return t;{const s=U(e),r=(this.children.get(s)||new te(null)).setTree(se(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ce(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Q(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(V(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(se(e),ce(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Q(),t)}foreachOnPath_(e,t,s){if(V(e))return this;{this.value&&s(t,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(se(e),ce(t,i),s):new te(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ce(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new te(null))}}function Vn(n,e,t){if(V(e))return new tt(new te(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,t),new tt(n.writeTree_.set(i,r))}else{const i=new te(t),r=n.writeTree_.setTree(e,i);return new tt(r)}}}function Bi(n,e,t){let s=n;return Te(t,(i,r)=>{s=Vn(s,ce(e,i),r)}),s}function To(n,e){if(V(e))return tt.empty();{const t=n.writeTree_.setTree(e,new te(null));return new tt(t)}}function Wi(n,e){return tn(n,e)!=null}function tn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function No(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(s,i)=>{e.push(new $(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Lt(n,e){if(V(e))return n;{const t=tn(n,e);return t!=null?new tt(new te(t)):new tt(n.writeTree_.subtree(e))}}function Ui(n){return n.writeTree_.isEmpty()}function mn(n,e){return Va(Q(),n.writeTree_,e)}function Va(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Va(ce(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ce(n,".priority"),s)),t}}/**
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
 */function Gs(n,e){return ja(e,n)}function Zd(n,e,t,s,i){C(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Vn(n.visibleWrites,e,t)),n.lastWriteId=s}function ef(n,e,t,s){C(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Bi(n.visibleWrites,e,t),n.lastWriteId=s}function tf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function nf(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&sf(a,s.path)?i=!1:ze(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return rf(n),!0;if(s.snap)n.visibleWrites=To(n.visibleWrites,s.path);else{const a=s.children;Te(a,l=>{n.visibleWrites=To(n.visibleWrites,ce(s.path,l))})}return!0}else return!1}function sf(n,e){if(n.snap)return ze(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ze(ce(n.path,t),e))return!0;return!1}function rf(n){n.visibleWrites=za(n.allWrites,of,Q()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function of(n){return n.visible}function za(n,e,t){let s=tt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ze(t,o)?(a=Me(t,o),s=Vn(s,a,r.snap)):ze(o,t)&&(a=Me(o,t),s=Vn(s,Q(),r.snap.getChild(a)));else if(r.children){if(ze(t,o))a=Me(t,o),s=Bi(s,a,r.children);else if(ze(o,t))if(a=Me(o,t),V(a))s=Bi(s,Q(),r.children);else{const l=fn(r.children,U(a));if(l){const h=l.getChild(se(a));s=Vn(s,Q(),h)}}}else throw yn("WriteRecord should have .snap or .children")}}return s}function qa(n,e,t,s,i){if(!s&&!i){const r=tn(n.visibleWrites,e);if(r!=null)return r;{const o=Lt(n.visibleWrites,e);if(Ui(o))return t;if(t==null&&!Wi(o,Q()))return null;{const a=t||k.EMPTY_NODE;return mn(o,a)}}}else{const r=Lt(n.visibleWrites,e);if(!i&&Ui(r))return t;if(!i&&t==null&&!Wi(r,Q()))return null;{const o=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(ze(h.path,e)||ze(e,h.path))},a=za(n.allWrites,o,e),l=t||k.EMPTY_NODE;return mn(a,l)}}}function af(n,e,t){let s=k.EMPTY_NODE;const i=tn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Lt(n.visibleWrites,e);return t.forEachChild(he,(o,a)=>{const l=mn(Lt(r,new Z(o)),a);s=s.updateImmediateChild(o,l)}),No(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Lt(n.visibleWrites,e);return No(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lf(n,e,t,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ce(e,t);if(Wi(n.visibleWrites,r))return null;{const o=Lt(n.visibleWrites,r);return Ui(o)?i.getChild(t):mn(o,i.getChild(t))}}function cf(n,e,t,s){const i=ce(e,t),r=tn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Lt(n.visibleWrites,i);return mn(o,s.getNode().getImmediateChild(t))}else return null}function hf(n,e){return tn(n.visibleWrites,e)}function uf(n,e,t,s,i,r,o){let a;const l=Lt(n.visibleWrites,e),h=tn(l,Q());if(h!=null)a=h;else if(t!=null)a=mn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=u.getNext();for(;g&&d.length<i;)f(g,s)!==0&&d.push(g),g=u.getNext();return d}else return[]}function df(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Ls(n,e,t,s){return qa(n.writeTree,n.treePath,e,t,s)}function ur(n,e){return af(n.writeTree,n.treePath,e)}function Ro(n,e,t,s){return lf(n.writeTree,n.treePath,e,t,s)}function Fs(n,e){return hf(n.writeTree,ce(n.treePath,e))}function ff(n,e,t,s,i,r){return uf(n.writeTree,n.treePath,e,t,s,i,r)}function dr(n,e,t){return cf(n.writeTree,n.treePath,e,t)}function Ga(n,e){return ja(ce(n.treePath,e),n.writeTree)}function ja(n,e){return{treePath:n,writeTree:e}}/**
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
 */class _f{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Kn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,pn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.oldSnap));else throw yn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Qa=new pf;class fr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zt(this.viewCache_),r=ff(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function gf(n){return{filter:n}}function mf(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vf(n,e,t,s,i){const r=new _f;let o,a;if(t.type===et.OVERWRITE){const h=t;h.source.fromUser?o=$i(n,e,h.path,h.snap,s,i,r):(C(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!V(h.path),o=Bs(n,e,h.path,h.snap,s,i,a,r))}else if(t.type===et.MERGE){const h=t;h.source.fromUser?o=Cf(n,e,h.path,h.children,s,i,r):(C(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Hi(n,e,h.path,h.children,s,i,a,r))}else if(t.type===et.ACK_USER_WRITE){const h=t;h.revert?o=wf(n,e,h.path,s,i,r):o=Ef(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===et.LISTEN_COMPLETE)o=bf(n,e,t.path,s,r);else throw yn("Unknown operation type: "+t.type);const l=r.getChanges();return yf(e,o,l),{viewCache:o,changes:l}}function yf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ms(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ua(Ms(e)))}}function Ya(n,e,t,s,i,r){const o=e.eventCache;if(Fs(s,t)!=null)return e;{let a,l;if(V(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Zt(e),d=h instanceof k?h:k.EMPTY_NODE,f=ur(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const h=Ls(s,Zt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=U(t);if(h===".priority"){C(Bt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Ro(s,t,d,l);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=se(t);let f;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const u=Ro(s,t,o.getNode(),l);u!=null?f=o.getNode().getImmediateChild(h).updateChild(d,u):f=o.getNode().getImmediateChild(h)}else f=dr(s,h,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),h,f,d,i,r):a=o.getNode()}}return Hn(e,a,o.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function Bs(n,e,t,s,i,r,o,a){const l=e.serverCache;let h;const d=o?n.filter:n.filter.getIndexedFilter();if(V(t))h=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,s);h=d.updateFullNode(l.getNode(),g,null)}else{const g=U(t);if(!l.isCompleteForPath(t)&&Bt(t)>1)return e;const w=se(t),I=l.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?h=d.updatePriority(l.getNode(),I):h=d.updateChild(l.getNode(),g,I,w,Qa,null)}const f=Ha(e,h,l.isFullyInitialized()||V(t),d.filtersNodes()),u=new fr(i,f,r);return Ya(n,f,t,i,u,a)}function $i(n,e,t,s,i,r,o){const a=e.eventCache;let l,h;const d=new fr(i,e,r);if(V(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Hn(e,h,!0,n.filter.filtersNodes());else{const f=U(t);if(f===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),l=Hn(e,h,a.isFullyInitialized(),a.isFiltered());else{const u=se(t),g=a.getNode().getImmediateChild(f);let w;if(V(u))w=s;else{const A=d.getCompleteChild(f);A!=null?nr(u)===".priority"&&A.getChild(Pa(u)).isEmpty()?w=A:w=A.updateChild(u,s):w=k.EMPTY_NODE}if(g.equals(w))l=e;else{const A=n.filter.updateChild(a.getNode(),f,w,u,d,o);l=Hn(e,A,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ko(n,e){return n.eventCache.isCompleteForChild(e)}function Cf(n,e,t,s,i,r,o){let a=e;return s.foreach((l,h)=>{const d=ce(t,l);ko(e,U(d))&&(a=$i(n,a,d,h,i,r,o))}),s.foreach((l,h)=>{const d=ce(t,l);ko(e,U(d))||(a=$i(n,a,d,h,i,r,o))}),a}function Ao(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;V(t)?h=s:h=new te(null).setTree(t,s);const d=e.serverCache.getNode();return h.children.inorderTraversal((f,u)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),w=Ao(n,g,u);l=Bs(n,l,new Z(f),w,i,r,o,a)}}),h.children.inorderTraversal((f,u)=>{const g=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!d.hasChild(f)&&!g){const w=e.serverCache.getNode().getImmediateChild(f),A=Ao(n,w,u);l=Bs(n,l,new Z(f),A,i,r,o,a)}}),l}function Ef(n,e,t,s,i,r,o){if(Fs(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(V(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Bs(n,e,t,l.getNode().getChild(t),i,r,a,o);if(V(t)){let h=new te(null);return l.getNode().forEachChild(dn,(d,f)=>{h=h.set(new Z(d),f)}),Hi(n,e,t,h,i,r,a,o)}else return e}else{let h=new te(null);return s.foreach((d,f)=>{const u=ce(t,d);l.isCompleteForPath(u)&&(h=h.set(d,l.getNode().getChild(u)))}),Hi(n,e,t,h,i,r,a,o)}}function bf(n,e,t,s,i){const r=e.serverCache,o=Ha(e,r.getNode(),r.isFullyInitialized()||V(t),r.isFiltered());return Ya(n,o,t,s,Qa,i)}function wf(n,e,t,s,i,r){let o;if(Fs(s,t)!=null)return e;{const a=new fr(s,e,i),l=e.eventCache.getNode();let h;if(V(t)||U(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ls(s,Zt(e));else{const f=e.serverCache.getNode();C(f instanceof k,"serverChildren would be complete if leaf node"),d=ur(s,f)}d=d,h=n.filter.updateFullNode(l,d,r)}else{const d=U(t);let f=dr(s,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?h=n.filter.updateChild(l,d,f,se(t),a,r):e.eventCache.getNode().hasChild(d)?h=n.filter.updateChild(l,d,k.EMPTY_NODE,se(t),a,r):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ls(s,Zt(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Fs(s,Q())!=null,Hn(e,h,o,n.filter.filtersNodes())}}/**
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
 */class If{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new or(s.getIndex()),r=$d(s);this.processor_=gf(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),d=new Wt(l,o.isFullyInitialized(),i.filtersNodes()),f=new Wt(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=qs(f,d),this.eventGenerator_=new Qd(this.query_)}get query(){return this.query_}}function Sf(n){return n.viewCache_.serverCache.getNode()}function Tf(n){return Ms(n.viewCache_)}function Nf(n,e){const t=Zt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild(U(e)).isEmpty())?t.getChild(e):null}function xo(n){return n.eventRegistrations_.length===0}function Rf(n,e){n.eventRegistrations_.push(e)}function Do(n,e,t){const s=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Po(n,e,t,s){e.type===et.MERGE&&e.source.queryId!==null&&(C(Zt(n.viewCache_),"We should always have a full cache before handling merges"),C(Ms(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=vf(n.processor_,i,e,t,s);return mf(n.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ka(n,r.changes,r.viewCache.eventCache.getNode(),null)}function kf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(r,o)=>{s.push(pn(r,o))}),t.isFullyInitialized()&&s.push(Ua(t.getNode())),Ka(n,s,t.getNode(),e)}function Ka(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Yd(n.eventGenerator_,e,t,i)}/**
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
 */let Ws;class Xa{constructor(){this.views=new Map}}function Af(n){C(!Ws,"__referenceConstructor has already been defined"),Ws=n}function xf(){return C(Ws,"Reference.ts has not been loaded"),Ws}function Df(n){return n.views.size===0}function _r(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Po(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Po(o,e,t,s));return r}}function Ja(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ls(t,i?s:null),l=!1;a?l=!0:s instanceof k?(a=ur(t,s),l=!1):(a=k.EMPTY_NODE,l=!1);const h=qs(new Wt(a,l,!1),new Wt(s,i,!1));return new If(e,h)}return o}function Pf(n,e,t,s,i,r){const o=Ja(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Rf(o,t),kf(o,t)}function Of(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ut(n);if(i==="default")for(const[l,h]of n.views.entries())o=o.concat(Do(h,t,s)),xo(h)&&(n.views.delete(l),h.query._queryParams.loadsAllData()||r.push(h.query));else{const l=n.views.get(i);l&&(o=o.concat(Do(l,t,s)),xo(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ut(n)&&r.push(new(xf())(e._repo,e._path)),{removed:r,events:o}}function Za(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ft(n,e){let t=null;for(const s of n.views.values())t=t||Nf(s,e);return t}function el(n,e){if(e._queryParams.loadsAllData())return js(n);{const s=e._queryIdentifier;return n.views.get(s)}}function tl(n,e){return el(n,e)!=null}function Ut(n){return js(n)!=null}function js(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Us;function Mf(n){C(!Us,"__referenceConstructor has already been defined"),Us=n}function Lf(){return C(Us,"Reference.ts has not been loaded"),Us}let Ff=1;class Oo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=df(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nl(n,e,t,s,i){return Zd(n.pendingWriteTree_,e,t,s,i),i?bn(n,new Jt(lr(),e,t)):[]}function Bf(n,e,t,s){ef(n.pendingWriteTree_,e,t,s);const i=te.fromObject(t);return bn(n,new gn(lr(),e,i))}function Pt(n,e,t=!1){const s=tf(n.pendingWriteTree_,e);if(nf(n.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(Q(),!0):Te(s.children,o=>{r=r.set(new Z(o),!0)}),bn(n,new Os(s.path,r,t))}else return[]}function as(n,e,t){return bn(n,new Jt(cr(),e,t))}function Wf(n,e,t){const s=te.fromObject(t);return bn(n,new gn(cr(),e,s))}function Uf(n,e){return bn(n,new Zn(cr(),e))}function $f(n,e,t){const s=gr(n,t);if(s){const i=mr(s),r=i.path,o=i.queryId,a=Me(r,e),l=new Zn(hr(o),a);return vr(n,r,l)}else return[]}function $s(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||tl(o,e))){const l=Of(o,e,t,s);Df(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!i){const d=h.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(u,g)=>Ut(g));if(d&&!f){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const g=zf(u);for(let w=0;w<g.length;++w){const A=g[w],I=A.query,j=ol(n,A);n.listenProvider_.startListening(zn(I),es(n,I),j.hashFn,j.onComplete)}}}!f&&h.length>0&&!s&&(d?n.listenProvider_.stopListening(zn(e),null):h.forEach(u=>{const g=n.queryToTagMap.get(Qs(u));n.listenProvider_.stopListening(zn(u),g)}))}qf(n,h)}return a}function sl(n,e,t,s){const i=gr(n,s);if(i!=null){const r=mr(i),o=r.path,a=r.queryId,l=Me(o,e),h=new Jt(hr(a),l,t);return vr(n,o,h)}else return[]}function Hf(n,e,t,s){const i=gr(n,s);if(i){const r=mr(i),o=r.path,a=r.queryId,l=Me(o,e),h=te.fromObject(t),d=new gn(hr(a),l,h);return vr(n,o,d)}else return[]}function Vi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,g)=>{const w=Me(u,i);r=r||Ft(g,w),o=o||Ut(g)});let a=n.syncPointTree_.get(i);a?(o=o||Ut(a),r=r||Ft(a,Q())):(a=new Xa,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((g,w)=>{const A=Ft(w,Q());A&&(r=r.updateImmediateChild(g,A))}));const h=tl(a,e);if(!h&&!e._queryParams.loadsAllData()){const u=Qs(e);C(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const g=Gf();n.queryToTagMap.set(u,g),n.tagToQueryMap.set(g,u)}const d=Gs(n.pendingWriteTree_,i);let f=Pf(a,e,t,d,r,l);if(!h&&!o&&!s){const u=el(a,e);f=f.concat(jf(n,e,u))}return f}function pr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),h=Ft(a,l);if(h)return h});return qa(i,e,r,t,!0)}function Vf(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,d)=>{const f=Me(h,t);s=s||Ft(d,f)});let i=n.syncPointTree_.get(t);i?s=s||Ft(i,Q()):(i=new Xa,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,a=Gs(n.pendingWriteTree_,e._path),l=Ja(i,e,a,r?o.getNode():k.EMPTY_NODE,r);return Tf(l)}function bn(n,e){return il(e,n.syncPointTree_,null,Gs(n.pendingWriteTree_,Q()))}function il(n,e,t,s){if(V(n.path))return rl(n,e,t,s);{const i=e.get(Q());t==null&&i!=null&&(t=Ft(i,Q()));let r=[];const o=U(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const h=t?t.getImmediateChild(o):null,d=Ga(s,o);r=r.concat(il(a,l,h,d))}return i&&(r=r.concat(_r(i,n,s,t))),r}}function rl(n,e,t,s){const i=e.get(Q());t==null&&i!=null&&(t=Ft(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,h=Ga(s,o),d=n.operationForChild(o);d&&(r=r.concat(rl(d,a,l,h)))}),i&&(r=r.concat(_r(i,n,s,t))),r}function ol(n,e){const t=e.query,s=es(n,t);return{hashFn:()=>(Sf(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$f(n,t._path,s):Uf(n,t._path);{const r=Wu(i,t);return $s(n,t,null,r)}}}}function es(n,e){const t=Qs(e);return n.queryToTagMap.get(t)}function Qs(n){return n._path.toString()+"$"+n._queryIdentifier}function gr(n,e){return n.tagToQueryMap.get(e)}function mr(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Z(n.substr(0,e))}}function vr(n,e,t){const s=n.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Gs(n.pendingWriteTree_,e);return _r(s,t,i,null)}function zf(n){return n.fold((e,t,s)=>{if(t&&Ut(t))return[js(t)];{let i=[];return t&&(i=Za(t)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function zn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lf())(n._repo,n._path):n}function qf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Qs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Gf(){return Ff++}function jf(n,e,t){const s=e._path,i=es(n,e),r=ol(n,t),o=n.listenProvider_.startListening(zn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)C(!Ut(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((h,d,f)=>{if(!V(h)&&d&&Ut(d))return[js(d).query];{let u=[];return d&&(u=u.concat(Za(d).map(g=>g.query))),Te(f,(g,w)=>{u=u.concat(w)}),u}});for(let h=0;h<l.length;++h){const d=l[h];n.listenProvider_.stopListening(zn(d),es(n,d))}}return o}/**
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
 */class yr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yr(t)}node(){return this.node_}}class Cr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new Cr(this.syncTree_,t)}node(){return pr(this.syncTree_,this.path_)}}const Qf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mo=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Yf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Kf(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Yf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Kf=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},al=function(n,e,t,s){return Er(e,new Cr(t,n),s)},ll=function(n,e,t){return Er(n,new yr(e),t)};function Er(n,e,t){const s=n.getPriority().val(),i=Mo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Mo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Ce(a,pe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(he,(a,l)=>{const h=Er(l,e.getImmediateChild(a),t);h!==l&&(r=r.updateImmediateChild(a,h))}),r}}/**
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
 */class br{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function wr(n,e){let t=e instanceof Z?e:new Z(e),s=n,i=U(t);for(;i!==null;){const r=fn(s.node.children,i)||{children:{},childCount:0};s=new br(i,s,r),t=se(t),i=U(t)}return s}function wn(n){return n.node.value}function cl(n,e){n.node.value=e,zi(n)}function hl(n){return n.node.childCount>0}function Xf(n){return wn(n)===void 0&&!hl(n)}function Ys(n,e){Te(n.node.children,(t,s)=>{e(new br(t,n,s))})}function ul(n,e,t,s){t&&e(n),Ys(n,i=>{ul(i,e,!0)})}function Jf(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ls(n){return new Z(n.parent===null?n.name:ls(n.parent)+"/"+n.name)}function zi(n){n.parent!==null&&Zf(n.parent,n.name,n)}function Zf(n,e,t){const s=Xf(t),i=ct(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,zi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zi(n))}/**
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
 */const e_=/[\[\].#$\/\u0000-\u001F\u007F]/,t_=/[\[\].#$\u0000-\u001F\u007F]/,wi=10*1024*1024,Ir=function(n){return typeof n=="string"&&n.length!==0&&!e_.test(n)},dl=function(n){return typeof n=="string"&&n.length!==0&&!t_.test(n)},n_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dl(n)},s_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xi(n)||n&&typeof n=="object"&&ct(n,".sv")},i_=function(n,e,t,s){Ks(Hs(n,"value"),e,t)},Ks=function(n,e,t){const s=t instanceof Z?new yd(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Yt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Yt(s)+" with contents = "+e.toString());if(Xi(e))throw new Error(n+"contains "+e.toString()+" "+Yt(s));if(typeof e=="string"&&e.length>wi/3&&Vs(e)>wi)throw new Error(n+"contains a string greater than "+wi+" utf8 bytes "+Yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ir(o)))throw new Error(n+" contains an invalid key ("+o+") "+Yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cd(s,o),Ks(n,a,s),Ed(s)}),i&&r)throw new Error(n+' contains ".value" child '+Yt(s)+" in addition to actual children.")}},r_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Yn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ir(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vd);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ze(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},o_=function(n,e,t,s){const i=Hs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,a)=>{const l=new Z(o);if(Ks(i,a,ce(t,l)),nr(l)===".priority"&&!s_(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),r_(i,r)},fl=function(n,e,t,s){if(!dl(t))throw new Error(Hs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},a_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fl(n,e,t)},l_=function(n,e){if(U(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},c_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ir(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!n_(t))throw new Error(Hs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class h_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!sr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function _l(n,e,t){Xs(n,t),pl(n,s=>sr(s,e))}function qe(n,e,t){Xs(n,t),pl(n,s=>ze(s,e)||ze(e,s))}function pl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(u_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function u_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Un&&Se("event: "+t.toString()),En(s)}}}/**
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
 */const d_="repo_interrupt",f_=25;class __{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new h_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ps(),this.transactionQueueTree_=new br,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function p_(n,e,t){if(n.stats_=er(n.repoInfo_),n.forceRestClient_||Vu())n.server_=new Ds(n.repoInfo_,(s,i,r,o)=>{Lo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new vt(n.repoInfo_,e,(s,i,r,o)=>{Lo(n,s,i,r,o)},s=>{Fo(n,s)},s=>{m_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qu(n.repoInfo_,()=>new jd(n.stats_,n.server_)),n.infoData_=new Hd,n.infoSyncTree_=new Oo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=as(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sr(n,"connected",!1),n.serverSyncTree_=new Oo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const h=o(a,l);qe(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function g_(n){const t=n.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Js(n){return Qf({timestamp:g_(n)})}function Lo(n,e,t,s,i){n.dataUpdateCount++;const r=new Z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Ss(t,h=>pe(h));o=Hf(n.serverSyncTree_,r,l,i)}else{const l=pe(t);o=sl(n.serverSyncTree_,r,l,i)}else if(s){const l=Ss(t,h=>pe(h));o=Wf(n.serverSyncTree_,r,l)}else{const l=pe(t);o=as(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=vn(n,r)),qe(n.eventQueue_,a,o)}function Fo(n,e){Sr(n,"connected",e),e===!1&&E_(n)}function m_(n,e){Te(e,(t,s)=>{Sr(n,t,s)})}function Sr(n,e,t){const s=new Z("/.info/"+e),i=pe(t);n.infoData_.updateSnapshot(s,i);const r=as(n.infoSyncTree_,s,i);qe(n.eventQueue_,s,r)}function Tr(n){return n.nextWriteId_++}function v_(n,e,t){const s=Vf(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=pe(i).withIndex(e._queryParams.getIndex());Vi(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=as(n.serverSyncTree_,e._path,r);else{const a=es(n.serverSyncTree_,e);o=sl(n.serverSyncTree_,e._path,r,a)}return qe(n.eventQueue_,e._path,o),$s(n.serverSyncTree_,e,t,null,!0),r},i=>(cs(n,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function y_(n,e,t,s,i){cs(n,"set",{path:e.toString(),value:t,priority:s});const r=Js(n),o=pe(t,s),a=pr(n.serverSyncTree_,e),l=ll(o,a,r),h=Tr(n),d=nl(n.serverSyncTree_,e,l,h,!0);Xs(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,g)=>{const w=u==="ok";w||Le("set at "+e+" failed: "+u);const A=Pt(n.serverSyncTree_,h,!w);qe(n.eventQueue_,e,A),qi(n,i,u,g)});const f=Rr(n,e);vn(n,f),qe(n.eventQueue_,f,[])}function C_(n,e,t,s){cs(n,"update",{path:e.toString(),value:t});let i=!0;const r=Js(n),o={};if(Te(t,(a,l)=>{i=!1,o[a]=al(ce(e,a),pe(l),n.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),qi(n,s,"ok",void 0);else{const a=Tr(n),l=Bf(n.serverSyncTree_,e,o,a);Xs(n.eventQueue_,l),n.server_.merge(e.toString(),t,(h,d)=>{const f=h==="ok";f||Le("update at "+e+" failed: "+h);const u=Pt(n.serverSyncTree_,a,!f),g=u.length>0?vn(n,e):e;qe(n.eventQueue_,g,u),qi(n,s,h,d)}),Te(t,h=>{const d=Rr(n,ce(e,h));vn(n,d)}),qe(n.eventQueue_,e,[])}}function E_(n){cs(n,"onDisconnectEvents");const e=Js(n),t=Ps();Fi(n.onDisconnect_,Q(),(i,r)=>{const o=al(i,r,n.serverSyncTree_,e);$a(t,i,o)});let s=[];Fi(t,Q(),(i,r)=>{s=s.concat(as(n.serverSyncTree_,i,r));const o=Rr(n,i);vn(n,o)}),n.onDisconnect_=Ps(),qe(n.eventQueue_,Q(),s)}function b_(n,e,t){let s;U(e._path)===".info"?s=Vi(n.infoSyncTree_,e,t):s=Vi(n.serverSyncTree_,e,t),_l(n.eventQueue_,e._path,s)}function w_(n,e,t){let s;U(e._path)===".info"?s=$s(n.infoSyncTree_,e,t):s=$s(n.serverSyncTree_,e,t),_l(n.eventQueue_,e._path,s)}function I_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(d_)}function cs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Se(t,...e)}function qi(n,e,t,s){e&&En(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function gl(n,e,t){return pr(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function Nr(n,e=n.transactionQueueTree_){if(e||Zs(n,e),wn(e)){const t=vl(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&S_(n,ls(e),t)}else hl(e)&&Ys(e,t=>{Nr(n,t)})}function S_(n,e,t){const s=t.map(h=>h.currentWriteId),i=gl(n,e,s);let r=i;const o=i.hash();for(let h=0;h<t.length;h++){const d=t[h];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Me(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,h=>{cs(n,"transaction put response",{path:l.toString(),status:h});let d=[];if(h==="ok"){const f=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(Pt(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&f.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Zs(n,wr(n.transactionQueueTree_,e)),Nr(n,n.transactionQueueTree_),qe(n.eventQueue_,e,d);for(let u=0;u<f.length;u++)En(f[u])}else{if(h==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Le("transaction at "+l.toString()+" failed: "+h);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=h}vn(n,e)}},o)}function vn(n,e){const t=ml(n,e),s=ls(t),i=vl(n,t);return T_(n,i,s),s}function T_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],h=Me(t,l.path);let d=!1,f;if(C(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,i=i.concat(Pt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=f_)d=!0,f="maxretry",i=i.concat(Pt(n.serverSyncTree_,l.currentWriteId,!0));else{const u=gl(n,l.path,o);l.currentInputSnapshot=u;const g=e[a].update(u.val());if(g!==void 0){Ks("transaction failed: Data returned ",g,l.path);let w=pe(g);typeof g=="object"&&g!=null&&ct(g,".priority")||(w=w.updatePriority(u.getPriority()));const I=l.currentWriteId,j=Js(n),be=ll(w,u,j);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=be,l.currentWriteId=Tr(n),o.splice(o.indexOf(I),1),i=i.concat(nl(n.serverSyncTree_,l.path,be,l.currentWriteId,l.applyLocally)),i=i.concat(Pt(n.serverSyncTree_,I,!0))}else d=!0,f="nodata",i=i.concat(Pt(n.serverSyncTree_,l.currentWriteId,!0))}qe(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Zs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)En(s[a]);Nr(n,n.transactionQueueTree_)}function ml(n,e){let t,s=n.transactionQueueTree_;for(t=U(e);t!==null&&wn(s)===void 0;)s=wr(s,t),e=se(e),t=U(e);return s}function vl(n,e){const t=[];return yl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function yl(n,e,t){const s=wn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Ys(e,i=>{yl(n,i,t)})}function Zs(n,e){const t=wn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,cl(e,t.length>0?t:void 0)}Ys(e,s=>{Zs(n,s)})}function Rr(n,e){const t=ls(ml(n,e)),s=wr(n.transactionQueueTree_,e);return Jf(s,i=>{Ii(n,i)}),Ii(n,s),ul(s,i=>{Ii(n,i)}),t}function Ii(n,e){const t=wn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Pt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?cl(e,void 0):t.length=r+1,qe(n.eventQueue_,ls(e),i);for(let o=0;o<s.length;o++)En(s[o])}}/**
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
 */function N_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function R_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bo=function(n,e){const t=k_(n),s=t.namespace;t.domain==="firebase.com"&&Ct(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ou();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ia(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Z(t.pathString)}},k_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(a=n.substring(0,h-1),n=n.substring(h+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=N_(n.substring(d,f)));const u=R_(n.substring(Math.min(n.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const g=e.slice(0,h);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class A_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class x_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Cl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class kr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:nr(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Io(this._queryParams),t=Ji(e);return t==="{}"?"default":t}get _queryObject(){return Io(this._queryParams)}isEqual(e){if(e=Cn(e),!(e instanceof kr))return!1;const t=this._repo===e._repo,s=sr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+md(this._path)}}class Et extends kr{constructor(e,t){super(e,t,new ar,!1)}get parent(){const e=Pa(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ts{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Z(e),s=Gi(this.ref,e);return new ts(this._node.getChild(t),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ts(i,Gi(this.ref,s),he)))}hasChild(e){const t=new Z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ve(n,e){return n=Cn(n),n._checkNotDeleted("ref"),e!==void 0?Gi(n._root,e):n._root}function Gi(n,e){return n=Cn(n),U(n._path)===null?a_("child","path",e):fl("child","path",e),new Et(n._repo,ce(n._path,e))}function Wo(n,e){n=Cn(n),l_("set",n._path),i_("set",e,n._path);const t=new ns;return y_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function jt(n,e){o_("update",e,n._path);const t=new ns;return C_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Uo(n){n=Cn(n);const e=new Cl(()=>{}),t=new ei(e);return v_(n._repo,n,t).then(s=>new ts(s,new Et(n._repo,n._path),n._queryParams.getIndex()))}class ei{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new A_("value",this,new ts(e.snapshotNode,new Et(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new x_(this,e,t):null}matches(e){return e instanceof ei?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function D_(n,e,t,s,i){const r=new Cl(t,void 0),o=new ei(r);return b_(n._repo,n,o),()=>w_(n._repo,n,o)}function P_(n,e,t,s){return D_(n,"value",e)}Af(Et);Mf(Et);/**
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
 */const O_="FIREBASE_DATABASE_EMULATOR_HOST",ji={};let M_=!1;function L_(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=sa(r);n.repoInfo_=new Ia(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function F_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Bo(r,i),a=o.repoInfo,l;typeof process<"u"&&ro&&(l=ro[O_]),l?(r=`http://${l}?ns=${a.namespace}`,o=Bo(r,i),a=o.repoInfo):o.repoInfo.secure;const h=new qu(n.name,n.options,e);c_("Invalid Firebase Database URL",o),V(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const d=W_(a,n,h,new zu(n,t));return new U_(d,n)}function B_(n,e){const t=ji[e];(!t||t[n.key]!==n)&&Ct(`Database ${e}(${n.repoInfo_}) has already been deleted.`),I_(n),delete t[n.key]}function W_(n,e,t,s){let i=ji[e.name];i||(i={},ji[e.name]=i);let r=i[n.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new __(n,M_,t,s),i[n.toURLString()]=r,r}class U_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(p_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function $_(n=pu(),e){const t=hu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Jc("database");s&&H_(t,...s)}return t}function H_(n,e,t,s={}){n=Cn(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ts(s,r.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ws(ws.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Zc(s.mockUserToken,n.app.options.projectId);o=new ws(a)}sa(e)&&fh(e),L_(r,i,s,o)}/**
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
 */function V_(n){Ru(_u),Rs(new Gn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return F_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),hn(oo,ao,n),hn(oo,ao,"esm2020")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};V_();var z_=L('<div class="qc-actions svelte-1uha8ag"><button title="Edit" class="svelte-1uha8ag">✏️</button> <button title="Delete" class="svelte-1uha8ag">🗑️</button></div>'),q_=L('<button><span class="qc-emoji svelte-1uha8ag"> </span> <span class="qc-title svelte-1uha8ag"> </span> <span class="qc-count svelte-1uha8ag"> </span> <!></button>'),G_=L('<p class="err svelte-1uha8ag"> </p>'),j_=L('<div class="home svelte-1uha8ag"><div class="home-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Quiz</h1> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div> <p class="section-label svelte-1uha8ag">Select a quiz</p> <div class="quiz-grid svelte-1uha8ag"><!> <button class="quiz-card new-card svelte-1uha8ag"><span class="qc-emoji svelte-1uha8ag">＋</span> <span class="qc-title svelte-1uha8ag">Create Quiz</span></button></div> <div class="play-row svelte-1uha8ag"><button class="btn-primary svelte-1uha8ag">Solo Play</button> <button class="btn-secondary svelte-1uha8ag">Create Room</button></div> <div class="join-row svelte-1uha8ag"><input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <button class="btn-join svelte-1uha8ag">Join Room</button></div> <!></div>'),Q_=L("<button> </button>"),Y_=L('<p class="err svelte-1uha8ag"> </p>'),K_=L('<img alt="" class="img-preview svelte-1uha8ag"/>'),X_=L('<div><button class="bq-mark svelte-1uha8ag" title="Mark as correct"> </button> <input class="text-input bq-opt-input svelte-1uha8ag"/></div>'),J_=L('<div class="bq-card svelte-1uha8ag"><div class="bq-top svelte-1uha8ag"><span class="bq-num svelte-1uha8ag"></span> <button class="bq-del svelte-1uha8ag">✕</button></div> <textarea class="text-input bq-prompt svelte-1uha8ag" placeholder="Question…"></textarea> <div class="img-field svelte-1uha8ag"><input class="text-input img-url svelte-1uha8ag" placeholder="Image URL (optional)"/> <!></div> <p class="bq-hint svelte-1uha8ag">Click an answer to mark it as correct ✓</p> <div class="bq-options svelte-1uha8ag"></div></div>'),Z_=L('<div class="builder svelte-1uha8ag"><div class="builder-header svelte-1uha8ag"><button class="btn-ghost svelte-1uha8ag">← Back</button> <h2 class="svelte-1uha8ag"> </h2> <button class="btn-save svelte-1uha8ag">Save</button></div> <div class="builder-meta svelte-1uha8ag"><div class="emoji-picker svelte-1uha8ag"></div> <input class="text-input svelte-1uha8ag" placeholder="Quiz title…"/></div> <!> <div class="q-list svelte-1uha8ag"></div> <button class="btn-add-q svelte-1uha8ag">+ Add Question</button></div>'),ep=L('<p class="err svelte-1uha8ag"> </p>'),tp=L('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Create Room</h2> <p class="sub svelte-1uha8ag"> </p> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Create</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),np=L('<p class="err svelte-1uha8ag"> </p>'),sp=L('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Join Room</h2> <input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Join</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),ip=L('<div class="player-row svelte-1uha8ag"><span></span> </div>'),rp=L('<button class="btn-primary svelte-1uha8ag"> </button>'),op=L('<p class="sub svelte-1uha8ag">Waiting for host to start…</p>'),ap=L('<div class="center-col svelte-1uha8ag"><p class="sub svelte-1uha8ag">Room code</p> <div class="room-code svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag">Share this code with friends</p> <div class="player-list svelte-1uha8ag"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Leave</button></div>'),lp=L('<span class="streak svelte-1uha8ag"> </span>'),cp=L('<img alt="" class="q-img svelte-1uha8ag"/>'),hp=L('<div class="flag svelte-1uha8ag"> </div>'),up=L('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),dp=L("<div> </div>"),fp=L('<div class="popup svelte-1uha8ag"> </div>'),_p=L('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <!></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),pp=L('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag" style="animation:bounce .5s ease"> </div> <h2 class="svelte-1uha8ag">Done!</h2> <div class="final-score svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">Play Again</button> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),gp=L('<img alt="" class="q-img svelte-1uha8ag"/>'),mp=L('<div class="flag svelte-1uha8ag"> </div>'),vp=L('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),yp=L('<p class="sub svelte-1uha8ag" style="text-align:center">Locked in — waiting for others…</p>'),Cp=L('<span class="alb-gain svelte-1uha8ag"> </span>'),Ep=L('<div><span class="alb-rank svelte-1uha8ag"> </span> <div class="alb-middle svelte-1uha8ag"><div class="alb-name-row svelte-1uha8ag"><span class="alb-name svelte-1uha8ag"> </span> <!></div> <div class="alb-bar-track svelte-1uha8ag"><div class="alb-bar svelte-1uha8ag"></div></div></div> <span class="alb-score svelte-1uha8ag"> </span></div>'),bp=L('<div class="anim-lb svelte-1uha8ag"></div>'),wp=L('<div><span class="lb-rank svelte-1uha8ag"></span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),Ip=L('<div class="leaderboard svelte-1uha8ag" style="margin-top:0"></div>'),Sp=L("<div> </div> <!> <!>",1),Tp=L('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <span class="q-num svelte-1uha8ag"> </span></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),Np=L('<div><span class="lb-rank svelte-1uha8ag"> </span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),Rp=L('<button class="btn-primary svelte-1uha8ag">Play Again</button>'),kp=L('<p class="sub svelte-1uha8ag">Waiting for host…</p>'),Ap=L('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag">🏆</div> <h2 class="svelte-1uha8ag">Final Results</h2> <div class="leaderboard svelte-1uha8ag" style="width:100%;max-width:480px"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),xp=L('<div class="center-col svelte-1uha8ag"><p class="err svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">← Home</button></div>'),Dp=L('<div class="app svelte-1uha8ag"><!></div>');function Bp(n,e){Ic(e,!0);const t=aa({projectId:"aktiecase-quiz",appId:"1:52134070639:web:e901510fd6600d489e009a",databaseURL:"https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app",apiKey:"AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4",authDomain:"aktiecase-quiz.firebaseapp.com",messagingSenderId:"52134070639"}),s=$_(t),i=[{country:"Albania",capital:"Tirana",flag:"🇦🇱"},{country:"Austria",capital:"Vienna",flag:"🇦🇹"},{country:"Belarus",capital:"Minsk",flag:"🇧🇾"},{country:"Belgium",capital:"Brussels",flag:"🇧🇪"},{country:"Bulgaria",capital:"Sofia",flag:"🇧🇬"},{country:"Croatia",capital:"Zagreb",flag:"🇭🇷"},{country:"Czech Republic",capital:"Prague",flag:"🇨🇿"},{country:"Denmark",capital:"Copenhagen",flag:"🇩🇰"},{country:"Estonia",capital:"Tallinn",flag:"🇪🇪"},{country:"Finland",capital:"Helsinki",flag:"🇫🇮"},{country:"France",capital:"Paris",flag:"🇫🇷"},{country:"Germany",capital:"Berlin",flag:"🇩🇪"},{country:"Greece",capital:"Athens",flag:"🇬🇷"},{country:"Hungary",capital:"Budapest",flag:"🇭🇺"},{country:"Iceland",capital:"Reykjavik",flag:"🇮🇸"},{country:"Ireland",capital:"Dublin",flag:"🇮🇪"},{country:"Italy",capital:"Rome",flag:"🇮🇹"},{country:"Latvia",capital:"Riga",flag:"🇱🇻"},{country:"Lithuania",capital:"Vilnius",flag:"🇱🇹"},{country:"Luxembourg",capital:"Luxembourg City",flag:"🇱🇺"},{country:"Netherlands",capital:"Amsterdam",flag:"🇳🇱"},{country:"Norway",capital:"Oslo",flag:"🇳🇴"},{country:"Poland",capital:"Warsaw",flag:"🇵🇱"},{country:"Portugal",capital:"Lisbon",flag:"🇵🇹"},{country:"Romania",capital:"Bucharest",flag:"🇷🇴"},{country:"Serbia",capital:"Belgrade",flag:"🇷🇸"},{country:"Slovakia",capital:"Bratislava",flag:"🇸🇰"},{country:"Slovenia",capital:"Ljubljana",flag:"🇸🇮"},{country:"Spain",capital:"Madrid",flag:"🇪🇸"},{country:"Sweden",capital:"Stockholm",flag:"🇸🇪"},{country:"Switzerland",capital:"Bern",flag:"🇨🇭"},{country:"Ukraine",capital:"Kyiv",flag:"🇺🇦"},{country:"United Kingdom",capital:"London",flag:"🇬🇧"}];function r(_){const p=[..._];for(let v=p.length-1;v>0;v--){const S=Math.floor(Math.random()*(v+1));[p[v],p[S]]=[p[S],p[v]]}return p}function o(_=15){return r(i).slice(0,_).map((p,v)=>{const S=v%2===0,T=S?p.capital:p.country,W=S?i.filter(F=>F.capital!==p.capital).map(F=>F.capital):i.filter(F=>F.country!==p.country).map(F=>F.country);return{prompt:S?`What is the capital of ${p.country}?`:`${p.capital} is the capital of which country?`,flag:p.flag,correct:T,options:r([T,...r(W).slice(0,3)])}})}function a(){if(typeof localStorage>"u")return[];try{return JSON.parse(localStorage.getItem("user_quizzes")??"[]")}catch{return[]}}function l(_){typeof localStorage<"u"&&localStorage.setItem("user_quizzes",JSON.stringify(_))}const h=15,d=[{shape:"▲",color:"#e74c3c"},{shape:"◆",color:"#2980b9"},{shape:"●",color:"#f39c12"},{shape:"■",color:"#27ae60"}],f=["🧠","🎯","🏆","🌍","📚","🎓","💡","🔥","⚡","🎮","🦁","🚀","🎵","🍕","⚽","🏛️","🎨","🦊"];let u=Y("home"),g=Y(""),w=Y(At(a())),A=Y("capitals"),I=Y("");const j=oe(()=>[{id:"capitals",title:"European Capitals",emoji:"🌍",questionCount:15},...c(w).map(_=>({id:_.id,title:_.title,emoji:_.emoji,questionCount:_.questions.length}))]);function be(_){if(_==="capitals")return o();const p=c(w).find(v=>v.id===_);return p?r(p.questions):o()}let K=Y(""),ue=Y(""),nt=Y("🧠"),me=Y(At([])),fe=Y("");function Ge(){return{prompt:"",imageUrl:"",options:["","","",""],correctIndex:0}}function je(_){if(_){const p=c(w).find(v=>v.id===_);y(K,_,!0),y(ue,p.title,!0),y(nt,p.emoji,!0),y(me,p.questions.map(v=>({prompt:v.prompt,imageUrl:v.imageUrl??"",options:[...v.options],correctIndex:v.options.indexOf(v.correct)})),!0)}else y(K,""),y(ue,""),y(nt,"🧠"),y(me,[Ge(),Ge(),Ge()],!0);y(fe,""),y(u,"builder")}function bt(){if(y(fe,""),!c(ue).trim()){y(fe,"Give your quiz a title.");return}const _=c(me).filter(S=>S.prompt.trim()&&S.options.every(T=>T.trim()));if(_.length<2){y(fe,"Add at least 2 complete questions (all 4 answers filled in).");return}const p=_.map(S=>({prompt:S.prompt.trim(),...S.imageUrl.trim()?{imageUrl:S.imageUrl.trim()}:{},correct:S.options[S.correctIndex].trim(),options:S.options.map(T=>T.trim())})),v={id:c(K)||crypto.randomUUID(),title:c(ue).trim(),emoji:c(nt),questions:p};y(w,c(K)?c(w).map(S=>S.id===c(K)?v:S):[...c(w),v],!0),l(c(w)),y(A,v.id,!0),y(u,"home")}function ht(_){confirm("Delete this quiz?")&&(y(w,c(w).filter(p=>p.id!==_),!0),l(c(w)),c(A)===_&&y(A,"capitals"))}let le=Y(At([])),Re=Y(0),ke=Y(0),In=Y(0),Qe=Y(0),wt=Y(-1),It=Y(h),ve=Y(At([])),We=null,Ar=0,xr=Y(""),ti=Y(!1);function Dr(){y(le,be(c(A)),!0),y(Re,0),y(ke,0),y(Qe,0),y(ve,[],!0),y(wt,-1),y(u,"solo_q"),Pr()}function Pr(){y(wt,-1),y(It,h),Ar=Date.now(),We&&clearInterval(We),We=setInterval(()=>{hi(It,-1),c(It)<=0&&(clearInterval(We),We=null,Or(-1))},1e3)}function Or(_){if(c(u)!=="solo_q")return;We&&(clearInterval(We),We=null),y(wt,_,!0);const p=c(le)[c(Re)],v=_>=0&&p.options[_]===p.correct,S=Math.max(0,h-(Date.now()-Ar)/1e3);let T=0;v?(T=100+Math.round(S/h*900)+(c(Qe)>=3?100:c(Qe)>=2?50:0),y(ke,c(ke)+T),hi(Qe),y(xr,`+${T}${c(Qe)>2?" 🔥":""}`),y(ti,!0),setTimeout(()=>y(ti,!1),1200)):y(Qe,0),y(ve,[...c(ve),{correct:v,points:T}],!0),y(u,"solo_reveal"),setTimeout(()=>{c(Re)+1>=c(le).length?(c(ke)>c(In)&&y(In,c(ke),!0),y(u,"solo_final")):(hi(Re),y(u,"solo_q"),Pr())},2200)}const El=oe(()=>c(It)/h),Mr=oe(()=>c(le)[c(Re)]),bl=oe(()=>c(ve).filter(_=>_.correct).length),Ae=typeof crypto<"u"?crypto.randomUUID():Math.random().toString(36).slice(2);let st=Y(""),ut=Y(""),St=Y(!1),xe=Y(At({})),$t=Y(At([])),dt=Y(0),ni=Y(0),ft=Y(-1),hs=Y(h),us=null,ds=Y(At({})),_t=!1,Tt="",it=null,fs={},si=Y(At({})),Ht=null;function wl(){Ht&&clearInterval(Ht),y(si,Object.fromEntries(Object.entries(c(xe)).map(([_,p])=>[_,{score:fs[_]??0,name:p.name}])),!0),setTimeout(()=>{const _=Date.now(),p=2e3;Ht=setInterval(()=>{const v=Math.min(1,(Date.now()-_)/p),S=1-Math.pow(1-v,2);y(si,Object.fromEntries(Object.entries(c(xe)).map(([T,W])=>{const F=fs[T]??0;return[T,{score:Math.round(F+(W.score-F)*S),name:W.name}]})),!0),v>=1&&(clearInterval(Ht),Ht=null)},16)},700)}const ii=oe(()=>Object.entries(c(si)).sort(([,_],[,p])=>p.score-_.score));function Il(){const _="ABCDEFGHJKLMNPQRSTUVWXYZ";return Array.from({length:4},()=>_[Math.floor(Math.random()*_.length)]).join("")}async function Sl(){if(!c(st).trim())return;const _=Il(),p=be(c(A));y(ut,_,!0),y(St,!0),await Wo(Ve(s,`rooms/${_}`),{phase:"lobby",hostId:Ae,qIndex:0,startTime:0,questions:p,players:{[Ae]:{name:c(st).trim(),score:0,streak:0}}}),Lr(_),y(u,"mp_lobby")}async function Tl(){if(!c(st).trim()||!c(I).trim())return;const _=c(I).toUpperCase().replace(/[^A-Z]/g,""),p=await Uo(Ve(s,`rooms/${_}`));if(!p.exists()){y(g,"Room not found.");return}if(p.val().phase!=="lobby"){y(g,"Game already started.");return}y(ut,_,!0),y(St,!1),await Wo(Ve(s,`rooms/${_}/players/${Ae}`),{name:c(st).trim(),score:0,streak:0}),Lr(_),y(u,"mp_lobby")}function Lr(_){Tt="";const p=Ve(s,`rooms/${_}`);it=P_(p,v=>{var F,H;if(!v.exists()){y(u,"mp_error"),y(g,"Room was closed.");return}const S=v.val();y(xe,S.players??{},!0),c($t).length||y($t,S.questions??[],!0);const T=S.phase??"lobby",W=S.qIndex??0;if(T==="question"&&c(St)&&!_t){const B=((F=S.answers)==null?void 0:F[W])??{};Object.keys(B).length>=Object.keys(c(xe)).length&&(_t=!0,jt(Ve(s,`rooms/${_}`),{phase:"reveal"}))}if(T==="question"&&(Tt!=="question"||W!==c(dt)))fs=Object.fromEntries(Object.entries(c(xe)).map(([B,x])=>[B,x.score])),y(dt,W,!0),y(ni,S.startTime??Date.now(),!0),y(ft,-1),y(ds,{},!0),Nl(c(ni)),y(u,"mp_question");else if(T==="reveal"&&Tt!=="reveal"){if(y(ds,((H=S.answers)==null?void 0:H[W])??{},!0),y(dt,W,!0),Sn(),wl(),y(u,"mp_reveal"),c(St)){const B=W;setTimeout(async()=>{await jt(Ve(s,`rooms/${_}`),B+1>=c($t).length?{phase:"final"}:{phase:"question",qIndex:B+1,startTime:Date.now()}),_t=!1},6e3)}}else T==="final"&&Tt!=="final"?(Sn(),y(u,"mp_final")):T==="lobby"&&Tt!=="lobby"&&Tt!==""&&(y($t,S.questions??[],!0),y(dt,0),y(ft,-1),_t=!1,y(u,"mp_lobby"));Tt=T})}function Nl(_){Sn();const p=()=>{y(hs,Math.max(0,h-(Date.now()-_)/1e3),!0),c(hs)<=0&&(Sn(),c(ft)<0&&Fr(-1),c(St)&&!_t&&(_t=!0,jt(Ve(s,`rooms/${c(ut)}`),{phase:"reveal"})))};p(),us=setInterval(p,150)}function Sn(){us&&(clearInterval(us),us=null)}async function Rl(){_t=!1,Tt="lobby",await jt(Ve(s,`rooms/${c(ut)}`),{phase:"question",qIndex:0,startTime:Date.now()})}async function Fr(_){if(c(ft)>=0||c(u)!=="mp_question")return;y(ft,_,!0);const p=c($t)[c(dt)],v=Date.now()-c(ni),S=_>=0&&p.options[_]===p.correct,T=c(xe)[Ae]??{score:0,streak:0};let W=0,F=T.streak??0;if(S?(W=100+Math.round(Math.max(0,h-v/1e3)/h*900)+(F>=3?100:F>=2?50:0),F++):F=0,await jt(Ve(s,`rooms/${c(ut)}`),{[`answers/${c(dt)}/${Ae}`]:{choice:_,timeMs:v,points:W,correct:S},[`players/${Ae}/score`]:(T.score??0)+W,[`players/${Ae}/streak`]:F}),c(St)&&!_t){const H=await Uo(Ve(s,`rooms/${c(ut)}/answers/${c(dt)}`));Object.keys(H.val()??{}).length>=Object.keys(c(xe)).length&&(_t=!0,await jt(Ve(s,`rooms/${c(ut)}`),{phase:"reveal"}))}}async function kl(){const _=be(c(A));await jt(Ve(s,`rooms/${c(ut)}`),{phase:"lobby",qIndex:0,startTime:0,questions:_,answers:null,players:Object.fromEntries(Object.entries(c(xe)).map(([p,v])=>[p,{...v,score:0,streak:0}]))})}const Al=oe(()=>c(hs)/h),Br=oe(()=>c($t)[c(dt)]),ri=oe(()=>Object.entries(c(xe)).sort(([,_],[,p])=>p.score-_.score)),_s=oe(()=>c(ds)[Ae]);function Wr(_){return["🥇","🥈","🥉"][_]??`${_+1}.`}jl(()=>{We&&clearInterval(We),Sn(),Ht&&clearInterval(Ht),it==null||it()});var oi=Dp();Oc("1uha8ag",_=>{Tc(()=>{Nc.title="Quiz"})});var xl=E(oi);{var Dl=_=>{var p=j_(),v=b(E(p),4),S=E(v);at(S,17,()=>c(j),ot,(X,G)=>{var O=q_();let ie;var _e=E(O),De=E(_e,!0);m(_e);var Ue=b(_e,2),$e=E(Ue,!0);m(Ue);var Fe=b(Ue,2),Pe=E(Fe);m(Fe);var Ye=b(Fe,2);{var Vt=pt=>{var gt=z_(),R=E(gt),N=b(R,2);m(gt),ee("click",R,D=>{D.stopPropagation(),je(c(G).id)}),ee("click",N,D=>{D.stopPropagation(),ht(c(G).id)}),M(pt,gt)};de(Ye,pt=>{c(G).id!=="capitals"&&pt(Vt)})}m(O),q(()=>{ie=Xe(O,1,"quiz-card svelte-1uha8ag",null,ie,{selected:c(A)===c(G).id}),P(De,c(G).emoji),P($e,c(G).title),P(Pe,`${c(G).questionCount??""} questions`)}),ee("click",O,()=>y(A,c(G).id,!0)),M(X,O)});var T=b(S,2);m(v);var W=b(v,2),F=E(W),H=b(F,2);m(W);var B=b(W,2),x=E(B);Gt(x),Je(x,"maxlength",4);var z=b(x,2);m(B);var ae=b(B,2);{var we=X=>{var G=G_(),O=E(G,!0);m(G),q(()=>P(O,c(g))),M(X,G)};de(ae,X=>{c(g)&&X(we)})}m(p),q(X=>z.disabled=X,[()=>!c(I).trim()]),ee("click",T,()=>je()),ee("click",F,Dr),ee("click",H,()=>{y(g,""),y(u,"mp_create")}),Dt(x,()=>c(I),X=>y(I,X)),ee("click",z,()=>{y(g,""),y(u,"mp_join")}),M(_,p)},Pl=_=>{var p=Z_(),v=E(p),S=E(v),T=b(S,2),W=E(T,!0);m(T);var F=b(T,2);m(v);var H=b(v,2),B=E(H);at(B,21,()=>f,ot,(G,O)=>{var ie=Q_();let _e;var De=E(ie,!0);m(ie),q(()=>{_e=Xe(ie,1,"ep-btn svelte-1uha8ag",null,_e,{"ep-selected":c(nt)===c(O)}),P(De,c(O))}),ee("click",ie,()=>y(nt,c(O),!0)),M(G,ie)}),m(B);var x=b(B,2);Gt(x),m(H);var z=b(H,2);{var ae=G=>{var O=Y_(),ie=E(O,!0);m(O),q(()=>P(ie,c(fe))),M(G,O)};de(z,G=>{c(fe)&&G(ae)})}var we=b(z,2);at(we,21,()=>c(me),ot,(G,O,ie)=>{var _e=J_(),De=E(_e),Ue=E(De);Ue.textContent=`Q${ie+1}`;var $e=b(Ue,2);m(De);var Fe=b(De,2);Rc(Fe),Je(Fe,"rows",2);var Pe=b(Fe,2),Ye=E(Pe);Gt(Ye);var Vt=b(Ye,2);{var pt=N=>{var D=K_();q(()=>Je(D,"src",c(O).imageUrl)),ys("error",D,J=>{J.target.style.display="none"}),ys("load",D,J=>{J.target.style.display="block"}),ui(D),M(N,D)},gt=oe(()=>c(O).imageUrl.trim());de(Vt,N=>{c(gt)&&N(pt)})}m(Pe);var R=b(Pe,4);at(R,21,()=>c(O).options,ot,(N,D,J)=>{var Ie=X_();let re;var Oe=E(Ie),Ke=E(Oe,!0);m(Oe);var rt=b(Oe,2);Gt(rt),Je(rt,"placeholder",`Answer ${J+1}`),m(Ie),q(()=>{re=Xe(Ie,1,"bq-opt-row svelte-1uha8ag",null,re,{"bq-correct":c(O).correctIndex===J}),P(Ke,c(O).correctIndex===J?"✓":d[J].shape)}),ee("click",Oe,()=>c(O).correctIndex=J),ee("click",rt,()=>c(O).correctIndex=J),Dt(rt,()=>c(O).options[J],ye=>c(O).options[J]=ye),M(N,Ie)}),m(R),m(_e),q(()=>$e.disabled=c(me).length<=1),ee("click",$e,()=>y(me,c(me).filter((N,D)=>D!==ie),!0)),Dt(Fe,()=>c(O).prompt,N=>c(O).prompt=N),Dt(Ye,()=>c(O).imageUrl,N=>c(O).imageUrl=N),M(G,_e)}),m(we);var X=b(we,2);m(p),q(()=>P(W,c(K)?"Edit Quiz":"New Quiz")),ee("click",S,()=>y(u,"home")),ee("click",F,bt),Dt(x,()=>c(ue),G=>y(ue,G)),ee("click",X,()=>y(me,[...c(me),Ge()],!0)),M(_,p)},Ol=_=>{var p=tp(),v=b(E(p),2),S=E(v);m(v);var T=b(v,2);Gt(T),Je(T,"maxlength",20);var W=b(T,2);{var F=x=>{var z=ep(),ae=E(z,!0);m(z),q(()=>P(ae,c(g))),M(x,z)};de(W,x=>{c(g)&&x(F)})}var H=b(W,2),B=b(H,2);m(p),q((x,z,ae)=>{P(S,`Playing: ${x??""} ${z??""}`),H.disabled=ae},[()=>{var x;return(x=c(j).find(z=>z.id===c(A)))==null?void 0:x.emoji},()=>{var x;return(x=c(j).find(z=>z.id===c(A)))==null?void 0:x.title},()=>!c(st).trim()]),Dt(T,()=>c(st),x=>y(st,x)),ee("click",H,Sl),ee("click",B,()=>y(u,"home")),M(_,p)},Ml=_=>{var p=sp(),v=b(E(p),2);Gt(v),Je(v,"maxlength",4);var S=b(v,2);Gt(S),Je(S,"maxlength",20);var T=b(S,2);{var W=B=>{var x=np(),z=E(x,!0);m(x),q(()=>P(z,c(g))),M(B,x)};de(T,B=>{c(g)&&B(W)})}var F=b(T,2),H=b(F,2);m(p),q(B=>F.disabled=B,[()=>!c(st).trim()||!c(I).trim()]),Dt(v,()=>c(I),B=>y(I,B)),Dt(S,()=>c(st),B=>y(st,B)),ee("click",F,Tl),ee("click",H,()=>y(u,"home")),M(_,p)},Ll=_=>{var p=ap(),v=b(E(p),2),S=E(v,!0);m(v);var T=b(v,4);at(T,21,()=>Object.entries(c(xe)),ot,(x,z)=>{var ae=oe(()=>vs(c(z),2));let we=()=>c(ae)[0],X=()=>c(ae)[1];var G=ip(),O=E(G);let ie;var _e=b(O);m(G),q(()=>{ie=Xe(O,1,"dot svelte-1uha8ag",null,ie,{"dot-me":we()===Ae}),P(_e,` ${X().name??""}${we()===Ae?" (you)":""}`)}),M(x,G)}),m(T);var W=b(T,2);{var F=x=>{var z=rp(),ae=E(z);m(z),q((we,X)=>P(ae,`Start (${we??""} player${X??""})`),[()=>Object.keys(c(xe)).length,()=>Object.keys(c(xe)).length!==1?"s":""]),ee("click",z,Rl),M(x,z)},H=x=>{var z=op();M(x,z)};de(W,x=>{c(St)?x(F):x(H,-1)})}var B=b(W,2);m(p),q(()=>P(S,c(ut))),ee("click",B,()=>{it==null||it(),y(u,"home")}),M(_,p)},Fl=_=>{const p=oe(()=>c(El)),v=oe(()=>c(Mr));var S=_p(),T=E(S),W=E(T),F=E(W);m(W);var H=b(W,2),B=E(H);m(H);var x=b(H,2);{var z=R=>{var N=lp(),D=E(N);m(N),q(()=>P(D,`🔥 ${c(Qe)??""}`)),M(R,N)};de(x,R=>{c(Qe)>=2&&R(z)})}m(T);var ae=b(T,2),we=E(ae);m(ae);var X=b(ae,2),G=E(X,!0);m(X);var O=b(X,2),ie=E(O);{var _e=R=>{var N=cp();q(()=>Je(N,"src",c(v).imageUrl)),ys("error",N,D=>D.target.style.display="none"),ui(N),M(R,N)};de(ie,R=>{c(v).imageUrl&&R(_e)})}var De=b(ie,2);{var Ue=R=>{var N=hp(),D=E(N,!0);m(N),q(()=>P(D,c(v).flag)),M(R,N)};de(De,R=>{c(v).flag&&R(Ue)})}var $e=b(De,2),Fe=E($e,!0);m($e),m(O);var Pe=b(O,2);at(Pe,21,()=>c(v).options,ot,(R,N,D)=>{const J=oe(()=>c(N)===c(v).correct),Ie=oe(()=>D===c(wt));var re=up();let Oe;var Ke=E(re),rt=E(Ke,!0);m(Ke);var ye=b(Ke,2),He=E(ye,!0);m(ye),m(re),q(()=>{Oe=Xe(re,1,"opt svelte-1uha8ag",null,Oe,{revealed:c(u)==="solo_reveal","opt-correct":c(u)==="solo_reveal"&&c(J),"opt-wrong":c(u)==="solo_reveal"&&c(Ie)&&!c(J),"opt-dim":c(u)==="solo_reveal"&&!c(Ie)&&!c(J)}),qt(re,`--c:${d[D].color??""}`),re.disabled=c(u)==="solo_reveal",P(rt,c(u)==="solo_reveal"?c(J)?"✓":c(Ie)?"✗":d[D].shape:d[D].shape),P(He,c(N))}),ee("click",re,()=>Or(D)),M(R,re)}),m(Pe);var Ye=b(Pe,2);{var Vt=R=>{var N=dp();let D;var J=E(N,!0);m(N),q(()=>{var Ie,re,Oe;D=Xe(N,1,"banner svelte-1uha8ag",null,D,{"banner-ok":(Ie=c(ve)[c(Re)])==null?void 0:Ie.correct,"banner-err":!((re=c(ve)[c(Re)])!=null&&re.correct)}),P(J,(Oe=c(ve)[c(Re)])!=null&&Oe.correct?`🎉 Correct! +${c(ve)[c(Re)].points}`:c(wt)===-1?`⏱ Time's up! → ${c(v).correct}`:`❌ Wrong! → ${c(v).correct}`)}),M(R,N)};de(Ye,R=>{c(u)==="solo_reveal"&&R(Vt)})}var pt=b(Ye,2);{var gt=R=>{var N=fp(),D=E(N,!0);m(N),q(()=>P(D,c(xr))),M(R,N)};de(pt,R=>{c(ti)&&R(gt)})}m(S),q(R=>{P(F,`${c(Re)+1} / ${c(le).length??""}`),P(B,`⭐ ${R??""}`),qt(we,`width:${c(p)*100}%;background:${c(p)>.4?"#2ecc71":c(p)>.2?"#f39c12":"#e74c3c"}`),qt(X,`color:${c(p)>.4?"#2ecc71":c(p)>.2?"#f39c12":"#e74c3c"}`),P(G,c(It)),P(Fe,c(v).prompt)},[()=>c(ke).toLocaleString()]),M(_,S)},Bl=_=>{var p=pp(),v=E(p),S=E(v,!0);m(v);var T=b(v,4),W=E(T,!0);m(T);var F=b(T,2),H=E(F);m(F);var B=b(F,2),x=b(B,2);m(p),q(z=>{P(S,c(ke)>=c(le).length*900?"🥇":c(ke)>=c(le).length*600?"🥈":c(ke)>=c(le).length*300?"🥉":"🎯"),P(W,z),P(H,`${c(bl)??""}/${c(le).length??""} correct`)},[()=>c(ke).toLocaleString()]),ee("click",B,Dr),ee("click",x,()=>y(u,"home")),M(_,p)},Wl=_=>{const p=oe(()=>c(Al)),v=oe(()=>c(Br));var S=Tp(),T=E(S),W=E(T),F=E(W);m(W);var H=b(W,2),B=E(H);m(H);var x=b(H,2),z=E(x);m(x),m(T);var ae=b(T,2),we=E(ae);m(ae);var X=b(ae,2),G=E(X,!0);m(X);var O=b(X,2),ie=E(O);{var _e=R=>{var N=gp();q(()=>Je(N,"src",c(v).imageUrl)),ys("error",N,D=>D.target.style.display="none"),ui(N),M(R,N)};de(ie,R=>{c(v).imageUrl&&R(_e)})}var De=b(ie,2);{var Ue=R=>{var N=mp(),D=E(N,!0);m(N),q(()=>P(D,c(v).flag)),M(R,N)};de(De,R=>{c(v).flag&&R(Ue)})}var $e=b(De,2),Fe=E($e,!0);m($e),m(O);var Pe=b(O,2);at(Pe,21,()=>c(v).options,ot,(R,N,D)=>{const J=oe(()=>c(N)===c(v).correct),Ie=oe(()=>D===c(ft));var re=vp();let Oe;var Ke=E(re),rt=E(Ke,!0);m(Ke);var ye=b(Ke,2),He=E(ye,!0);m(ye),m(re),q(()=>{Oe=Xe(re,1,"opt svelte-1uha8ag",null,Oe,{revealed:c(u)==="mp_reveal","opt-correct":c(u)==="mp_reveal"&&c(J),"opt-wrong":c(u)==="mp_reveal"&&c(Ie)&&!c(J),"opt-dim":c(u)==="mp_reveal"&&!c(Ie)&&!c(J)}),qt(re,`--c:${d[D].color??""}`),re.disabled=c(u)==="mp_reveal"||c(ft)>=0,P(rt,c(u)==="mp_reveal"?c(J)?"✓":c(Ie)?"✗":d[D].shape:d[D].shape),P(He,c(N))}),ee("click",re,()=>Fr(D)),M(R,re)}),m(Pe);var Ye=b(Pe,2);{var Vt=R=>{var N=yp();M(R,N)};de(Ye,R=>{c(u)==="mp_question"&&c(ft)>=0&&R(Vt)})}var pt=b(Ye,2);{var gt=R=>{var N=Sp(),D=kc(N);let J;var Ie=E(D,!0);m(D);var re=b(D,2);{var Oe=ye=>{const He=oe(()=>{var nn,sn;return((sn=(nn=c(ii)[0])==null?void 0:nn[1])==null?void 0:sn.score)||1});var Nt=bp();at(Nt,21,()=>c(ii).slice(0,3),ot,(nn,sn,ps)=>{var gs=oe(()=>vs(c(sn),2));let rn=()=>c(gs)[0],Rt=()=>c(gs)[1];const Tn=oe(()=>{var kt;return(((kt=c(xe)[rn()])==null?void 0:kt.score)??0)-(fs[rn()]??0)});var zt=Ep();let on;var Nn=E(zt),ms=E(Nn,!0);m(Nn);var Rn=b(Nn,2),kn=E(Rn),ai=E(kn),Hl=E(ai,!0);m(ai);var Vl=b(ai,2);{var zl=kt=>{var An=Cp(),li=E(An);m(An),q(()=>P(li,`+${c(Tn)??""}`)),M(kt,An)};de(Vl,kt=>{c(Tn)>0&&kt(zl)})}m(kn);var Ur=b(kn,2),ql=E(Ur);m(Ur),m(Rn);var $r=b(Rn,2),Gl=E($r,!0);m($r),m(zt),q((kt,An,li)=>{on=Xe(zt,1,"alb-row svelte-1uha8ag",null,on,{"alb-me":rn()===Ae}),P(ms,kt),P(Hl,Rt().name),qt(ql,`width:${An??""}%`),P(Gl,li)},[()=>Wr(ps),()=>Math.max(4,Rt().score/c(He)*100),()=>Rt().score.toLocaleString()]),M(nn,zt)}),m(Nt),M(ye,Nt)};de(re,ye=>{c(ii).length>0&&ye(Oe)})}var Ke=b(re,2);{var rt=ye=>{var He=Ip();at(He,21,()=>c(ri).slice(3),ot,(Nt,nn,sn)=>{var ps=oe(()=>vs(c(nn),2));let gs=()=>c(ps)[0],rn=()=>c(ps)[1];var Rt=wp();let Tn;var zt=E(Rt);zt.textContent=`${sn+4}.`;var on=b(zt,2),Nn=E(on,!0);m(on);var ms=b(on,2),Rn=E(ms,!0);m(ms),m(Rt),q(kn=>{Tn=Xe(Rt,1,"lb-row svelte-1uha8ag",null,Tn,{"lb-me":gs()===Ae}),P(Nn,rn().name),P(Rn,kn)},[()=>rn().score.toLocaleString()]),M(Nt,Rt)}),m(He),M(ye,He)};de(Ke,ye=>{c(ri).length>3&&ye(rt)})}q(()=>{var ye,He,Nt;J=Xe(D,1,"banner svelte-1uha8ag",null,J,{"banner-ok":(ye=c(_s))==null?void 0:ye.correct,"banner-err":!((He=c(_s))!=null&&He.correct)}),P(Ie,(Nt=c(_s))!=null&&Nt.correct?`🎉 +${c(_s).points} pts`:c(ft)===-1?`⏱ Time's up! → ${c(v).correct}`:`❌ Wrong! → ${c(v).correct}`)}),M(R,N)};de(pt,R=>{c(u)==="mp_reveal"&&R(gt)})}m(S),q((R,N,D,J)=>{P(F,`${c(dt)+1} / ${c($t).length??""}`),P(B,`⭐ ${R??""}`),P(z,`👥 ${N??""}/${D??""}`),qt(we,`width:${c(p)*100}%;background:${c(p)>.4?"#2ecc71":c(p)>.2?"#f39c12":"#e74c3c"}`),qt(X,`color:${c(p)>.4?"#2ecc71":c(p)>.2?"#f39c12":"#e74c3c"}`),P(G,J),P(Fe,c(v).prompt)},[()=>{var R;return(((R=c(xe)[Ae])==null?void 0:R.score)??0).toLocaleString()},()=>Object.keys(c(ds)).length,()=>Object.keys(c(xe)).length,()=>Math.ceil(c(hs))]),M(_,S)},Ul=_=>{var p=Ap(),v=b(E(p),4);at(v,21,()=>c(ri),ot,(H,B,x)=>{var z=oe(()=>vs(c(B),2));let ae=()=>c(z)[0],we=()=>c(z)[1];var X=Np();let G;var O=E(X),ie=E(O,!0);m(O);var _e=b(O,2),De=E(_e);m(_e);var Ue=b(_e,2),$e=E(Ue,!0);m(Ue),m(X),q((Fe,Pe)=>{G=Xe(X,1,"lb-row svelte-1uha8ag",null,G,{"lb-me":ae()===Ae,"lb-gold":x===0}),P(ie,Fe),P(De,`${we().name??""}${ae()===Ae?" (you)":""}`),P($e,Pe)},[()=>Wr(x),()=>we().score.toLocaleString()]),M(H,X)}),m(v);var S=b(v,2);{var T=H=>{var B=Rp();ee("click",B,kl),M(H,B)},W=H=>{var B=kp();M(H,B)};de(S,H=>{c(St)?H(T):H(W,-1)})}var F=b(S,2);m(p),ee("click",F,()=>{it==null||it(),y(u,"home")}),M(_,p)},$l=_=>{var p=xp(),v=E(p),S=E(v,!0);m(v);var T=b(v,2);m(p),q(()=>P(S,c(g))),ee("click",T,()=>y(u,"home")),M(_,p)};de(xl,_=>{c(u)==="home"?_(Dl):c(u)==="builder"?_(Pl,1):c(u)==="mp_create"?_(Ol,2):c(u)==="mp_join"?_(Ml,3):c(u)==="mp_lobby"?_(Ll,4):(c(u)==="solo_q"||c(u)==="solo_reveal")&&c(Mr)?_(Fl,5):c(u)==="solo_final"?_(Bl,6):(c(u)==="mp_question"||c(u)==="mp_reveal")&&c(Br)?_(Wl,7):c(u)==="mp_final"?_(Ul,8):c(u)==="mp_error"&&_($l,9)})}m(oi),M(n,oi),Sc()}Ac(["click"]);export{Bp as component};
