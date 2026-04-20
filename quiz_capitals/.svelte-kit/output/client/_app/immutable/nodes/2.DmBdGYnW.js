import{a as L,f as F}from"../chunks/hbZDdk5z.js";import{a as ic}from"../chunks/CXLXOrcK.js";import{h as ke,k as qn,G as Ko,c as ks,g as rc,f as Xo,M as l,i as oc,U as ac,j as Xr,l as Gn,e as Vn,ab as Jo,aj as lc,a1 as Jr,a as dn,b as xi,aE as cc,s as hc,aF as Zo,av as uc,aG as dc,ai as er,aH as fc,N as Zr,aI as _c,aJ as pc,az as gc,aK as gt,ar as mc,r as ea,p as ta,aL as _i,O as na,aM as vc,aN as yc,ag as Cc,m as Ec,d as bc,ad as Di,aO as wc,a4 as Ic,aP as Sc,aQ as Tc,aR as Nc,aS as Rc,aT as kc,aU as Ac,aV as xc,aB as Dc,u as Pc,q as Oc,x as Mc,aC as Y,ao as Lt,v as Lc,w as pi,z as Fc,o as Bc,aW as Wc,ap as y,C as b,A as C,B as g,aD as oe,y as G,aX as Uc,aY as Ss,aZ as gi}from"../chunks/g4PfawHS.js";import{d as $c,a as ee,s as k,e as Ts,r as mi}from"../chunks/BS-nX1oO.js";import{b as Hc,i as _e}from"../chunks/BdbKUOii.js";function _t(n,e){return e}function Vc(n,e,t){for(var s=[],i=e.length,r,o=e.length,a=0;a<i;a++){let f=e[a];ta(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var u=n.outrogroups;Pi(n,er(r.done)),u.delete(r),u.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=s.length===0&&t!==null;if(c){var h=t,d=h.parentNode;Cc(d),d.append(h),n.items.clear()}Pi(n,e,!c)}else r={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Pi(n,e,t=!0){var s;if(n.pending.size>0){s=new Set;for(const o of n.pending.values())for(const a of o)s.add(n.items.get(a).e)}for(var i=0;i<e.length;i++){var r=e[i];if(s!=null&&s.has(r)){r.f|=gt;const o=document.createDocumentFragment();Ec(r,o)}else bc(e[i],t)}}var eo;function pt(n,e,t,s,i,r=null){var o=n,a=new Map,c=(e&Zo)!==0;if(c){var h=n;o=ke?qn(Ko(h)):h.appendChild(ks())}ke&&rc();var d=null,f=uc(()=>{var X=t();return dc(X)?X:X==null?[]:er(X)}),u,v=new Map,w=!0;function A(X){(be.effect.f&mc)===0&&(be.pending.delete(X),be.fallback=d,zc(be,u,o,e,s),d!==null&&(u.length===0?(d.f&gt)===0?ea(d):(d.f^=gt,zn(d,null,o)):ta(d,()=>{d=null})))}function I(X){be.pending.delete(X)}var j=Xo(()=>{u=l(f);var X=u.length;let de=!1;if(ke){var ot=oc(o)===ac;ot!==(X===0)&&(o=Xr(),qn(o),Gn(!1),de=!0)}for(var ye=new Set,pe=dn,Xe=hc(),qe=0;qe<X;qe+=1){ke&&Vn.nodeType===Jo&&Vn.data===lc&&(o=Vn,de=!0,Gn(!1));var kt=u[qe],at=s(kt,qe),ae=w?null:a.get(at);ae?(ae.v&&Jr(ae.v,kt),ae.i&&Jr(ae.i,qe),Xe&&pe.unskip_effect(ae.e)):(ae=qc(a,w?o:eo??(eo=ks()),kt,at,qe,i,e,t),w||(ae.e.f|=gt),a.set(at,ae)),ye.add(at)}if(X===0&&r&&!d&&(w?d=xi(()=>r(o)):(d=xi(()=>r(eo??(eo=ks()))),d.f|=gt)),X>ye.size&&cc(),ke&&X>0&&qn(Xr()),!w)if(v.set(pe,ye),Xe){for(const[$e,we]of a)ye.has($e)||pe.skip_effect(we.e);pe.oncommit(A),pe.ondiscard(I)}else A(pe);de&&Gn(!0),l(f)}),be={effect:j,items:a,pending:v,outrogroups:null,fallback:d};w=!1,ke&&(o=Vn)}function Bn(n){for(;n!==null&&(n.f&vc)===0;)n=n.next;return n}function zc(n,e,t,s,i){var kt,at,ae,$e,we,Rn,Je,At,vt;var r=(s&yc)!==0,o=e.length,a=n.items,c=Bn(n.effect.first),h,d=null,f,u=[],v=[],w,A,I,j;if(r)for(j=0;j<o;j+=1)w=e[j],A=i(w,j),I=a.get(A).e,(I.f&gt)===0&&((at=(kt=I.nodes)==null?void 0:kt.a)==null||at.measure(),(f??(f=new Set)).add(I));for(j=0;j<o;j+=1){if(w=e[j],A=i(w,j),I=a.get(A).e,n.outrogroups!==null)for(const Ae of n.outrogroups)Ae.pending.delete(I),Ae.done.delete(I);if((I.f&_i)!==0&&(ea(I),r&&(($e=(ae=I.nodes)==null?void 0:ae.a)==null||$e.unfix(),(f??(f=new Set)).delete(I))),(I.f&gt)!==0)if(I.f^=gt,I===c)zn(I,null,t);else{var be=d?d.next:c;I===n.effect.last&&(n.effect.last=I.prev),I.prev&&(I.prev.next=I.next),I.next&&(I.next.prev=I.prev),Ft(n,d,I),Ft(n,I,be),zn(I,be,t),d=I,u=[],v=[],c=Bn(d.next);continue}if(I!==c){if(h!==void 0&&h.has(I)){if(u.length<v.length){var X=v[0],de;d=X.prev;var ot=u[0],ye=u[u.length-1];for(de=0;de<u.length;de+=1)zn(u[de],X,t);for(de=0;de<v.length;de+=1)h.delete(v[de]);Ft(n,ot.prev,ye.next),Ft(n,d,ot),Ft(n,ye,X),c=X,d=ye,j-=1,u=[],v=[]}else h.delete(I),zn(I,c,t),Ft(n,I.prev,I.next),Ft(n,I,d===null?n.effect.first:d.next),Ft(n,d,I),d=I;continue}for(u=[],v=[];c!==null&&c!==I;)(h??(h=new Set)).add(c),v.push(c),c=Bn(c.next);if(c===null)continue}(I.f&gt)===0&&u.push(I),d=I,c=Bn(I.next)}if(n.outrogroups!==null){for(const Ae of n.outrogroups)Ae.pending.size===0&&(Pi(n,er(Ae.done)),(we=n.outrogroups)==null||we.delete(Ae));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var pe=[];if(h!==void 0)for(I of h)(I.f&_i)===0&&pe.push(I);for(;c!==null;)(c.f&_i)===0&&c!==n.fallback&&pe.push(c),c=Bn(c.next);var Xe=pe.length;if(Xe>0){var qe=(s&Zo)!==0&&o===0?t:null;if(r){for(j=0;j<Xe;j+=1)(Je=(Rn=pe[j].nodes)==null?void 0:Rn.a)==null||Je.measure();for(j=0;j<Xe;j+=1)(vt=(At=pe[j].nodes)==null?void 0:At.a)==null||vt.fix()}Vc(n,pe,qe)}}r&&na(()=>{var Ae,kn;if(f!==void 0)for(I of f)(kn=(Ae=I.nodes)==null?void 0:Ae.a)==null||kn.apply()})}function qc(n,e,t,s,i,r,o,a){var c=(o&_c)!==0?(o&pc)===0?gc(t,!1,!1):Zr(t):null,h=(o&fc)!==0?Zr(i):null;return{v:c,i:h,e:xi(()=>(r(e,c??t,h??i,a),()=>{n.delete(s)}))}}function zn(n,e,t){if(n.nodes)for(var s=n.nodes.start,i=n.nodes.end,r=e&&(e.f&gt)===0?e.nodes.start:t;s!==null;){var o=Di(s);if(r.before(s),s===i)return;s=o}}function Ft(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Gc(n,e){let t=null,s=ke;var i;if(ke){t=Vn;for(var r=Ko(document.head);r!==null&&(r.nodeType!==Jo||r.data!==n);)r=Di(r);if(r===null)Gn(!1);else{var o=Di(r);r.remove(),qn(o)}}ke||(i=document.head.appendChild(ks()));try{Xo(()=>e(i),wc|Ic)}finally{s&&(Gn(!0),qn(t))}}const to=[...` 	
\r\f \v\uFEFF`];function jc(n,e,t){var s=n==null?"":""+n;if(t){for(var i of Object.keys(t))if(t[i])s=s?s+" "+i:i;else if(s.length)for(var r=i.length,o=0;(o=s.indexOf(i,o))>=0;){var a=o+r;(o===0||to.includes(s[o-1]))&&(a===s.length||to.includes(s[a]))?s=(o===0?"":s.substring(0,o))+s.substring(a+1):o=a}}return s===""?null:s}function Qc(n,e){return n==null?null:String(n)}function tt(n,e,t,s,i,r){var o=n.__className;if(ke||o!==t||o===void 0){var a=jc(t,s,r);(!ke||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=t}else if(r&&i!==r)for(var c in r){var h=!!r[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return r}function Bt(n,e,t,s){var i=n.__style;if(ke||i!==e){var r=Qc(e);(!ke||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n.__style=e}return s}const Yc=Symbol("is custom element"),Kc=Symbol("is html"),Xc=Ac?"link":"LINK";function Zt(n){if(ke){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;nt(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;nt(n,"checked",null),n.checked=i}}};n.__on_r=t,na(t),Sc()}}function nt(n,e,t,s){var i=Jc(n);ke&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===Xc)||i[e]!==(i[e]=t)&&(e==="loading"&&(n[Rc]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Zc(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Jc(n){return n.__attributes??(n.__attributes={[Yc]:n.nodeName.includes("-"),[Kc]:n.namespaceURI===Tc})}var no=new Map;function Zc(n){var e=n.getAttribute("is")||n.nodeName,t=no.get(e);if(t)return t;no.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=kc(i);for(var o in s)s[o].set&&t.push(o);i=Nc(i)}return t}function Wt(n,e,t=e){var s=new WeakSet;xc(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=vi(n)?yi(r):r,t(r),dn!==null&&s.add(dn),await Dc(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,c=n.value.length;if(n.value=r??"",a!==null){var h=n.value.length;o===a&&a===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=o,n.selectionEnd=Math.min(a,h))}}}),(ke&&n.defaultValue!==n.value||Pc(e)==null&&n.value)&&(t(vi(n)?yi(n.value):n.value),dn!==null&&s.add(dn)),Oc(()=>{var i=e();if(n===document.activeElement){var r=dn;if(s.has(r))return}vi(n)&&i===yi(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function vi(n){var e=n.type;return e==="number"||e==="range"}function yi(n){return n===""?null:+n}const eh=()=>{};var so={};/**
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
 */const sa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(n,e){if(!n)throw wn(e)},wn=function(n){return new Error("Firebase Database ("+sa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ia=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},th=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let u=(a&15)<<2|h>>6,v=h&63;c||(v=64,o||(u=64)),s.push(t[d],t[f],t[u],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ia(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):th(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||f==null)throw new nh;const u=r<<2|a>>4;if(s.push(u),h!==64){const v=a<<4&240|h>>2;if(s.push(v),f!==64){const w=h<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ra=function(n){const e=ia(n);return tr.encodeByteArray(e,!0)},xs=function(n){return ra(n).replace(/\./g,"")},Oi=function(n){try{return tr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sh(n){return oa(void 0,n)}function oa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ih(t)||(n[t]=oa(n[t],e[t]));return n}function ih(n){return n!=="__proto__"}/**
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
 */function rh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oh=()=>rh().__FIREBASE_DEFAULTS__,ah=()=>{if(typeof process>"u"||typeof so>"u")return;const n=so.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Oi(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return eh()||oh()||ah()||lh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var e,t;return(t=(e=aa())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hh=n=>{const e=ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},la=()=>{var n;return(n=aa())==null?void 0:n.config};/**
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
 */class cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function uh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xs(JSON.stringify(t)),xs(JSON.stringify(o)),""].join(".")}/**
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
 */function dh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dh())}function fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _h(){return sa.NODE_ADMIN===!0}function ph(){try{return typeof indexedDB=="object"}catch{return!1}}function gh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const mh="FirebaseError";class hs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mh,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hs(i,a,s)}}function vh(n,e){return n.replace(yh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yh=/\{\$([^}]+)}/g;/**
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
 */function Jn(n){return JSON.parse(n)}function ve(n){return JSON.stringify(n)}/**
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
 */const ua=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Jn(Oi(r[0])||""),t=Jn(Oi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ch=function(n){const e=ua(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Eh=function(n){const e=ua(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function io(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ds(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ps(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ro(r)&&ro(o)){if(!Ps(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ro(n){return n!==null&&typeof n=="object"}/**
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
 */function bh(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class wh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const u=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],h,d;for(let f=0;f<80;f++){f<40?f<20?(h=a^r&(o^a),d=1518500249):(h=r^o^a,d=1859775393):f<60?(h=r&o|a&(r|o),d=2400959708):(h=r^o^a,d=3395469782);const u=(i<<5|i>>>27)+h+c+d+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ys(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Ih=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ks=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function In(n){return n&&n._delegate?n._delegate:n}/**
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
 */function da(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sh(n){return(await fetch(n,{credentials:"include"})).ok}class Zn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Th{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rh(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nh(n){return n===tn?void 0:n}function Rh(n){return n.instantiationMode==="EAGER"}/**
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
 */class kh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Th(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const Ah={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},xh=ie.INFO,Dh={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ph=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Dh[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=xh,this._logHandler=Ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Oh=(n,e)=>e.some(t=>n instanceof t);let oo,ao;function Mh(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lh(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,Mi=new WeakMap,pa=new WeakMap,Ci=new WeakMap,nr=new WeakMap;function Fh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t($t(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_a.set(t,n)}).catch(()=>{}),nr.set(e,n),e}function Bh(n){if(Mi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Mi.set(n,e)}let Li={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wh(n){Li=n(Li)}function Uh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ei(this),e,...t);return pa.set(s,e.sort?e.sort():[e]),$t(s)}:Lh().includes(n)?function(...e){return n.apply(Ei(this),e),$t(_a.get(this))}:function(...e){return $t(n.apply(Ei(this),e))}}function $h(n){return typeof n=="function"?Uh(n):(n instanceof IDBTransaction&&Bh(n),Oh(n,Mh())?new Proxy(n,Li):n)}function $t(n){if(n instanceof IDBRequest)return Fh(n);if(Ci.has(n))return Ci.get(n);const e=$h(n);return e!==n&&(Ci.set(n,e),nr.set(e,n)),e}const Ei=n=>nr.get(n);function Hh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=$t(o);return s&&o.addEventListener("upgradeneeded",c=>{s($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Vh=["get","getKey","getAll","getAllKeys","count"],zh=["put","add","delete","clear"],bi=new Map;function lo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=zh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vh.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),i&&c.done]))[0]};return bi.set(e,r),r}Wh(n=>({...n,get:(e,t,s)=>lo(e,t)||n.get(e,t,s),has:(e,t)=>!!lo(e,t)||n.has(e,t)}));/**
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
 */class qh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Gh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fi="@firebase/app",co="0.14.11";/**
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
 */const Tt=new fa("@firebase/app"),jh="@firebase/app-compat",Qh="@firebase/analytics-compat",Yh="@firebase/analytics",Kh="@firebase/app-check-compat",Xh="@firebase/app-check",Jh="@firebase/auth",Zh="@firebase/auth-compat",eu="@firebase/database",tu="@firebase/data-connect",nu="@firebase/database-compat",su="@firebase/functions",iu="@firebase/functions-compat",ru="@firebase/installations",ou="@firebase/installations-compat",au="@firebase/messaging",lu="@firebase/messaging-compat",cu="@firebase/performance",hu="@firebase/performance-compat",uu="@firebase/remote-config",du="@firebase/remote-config-compat",fu="@firebase/storage",_u="@firebase/storage-compat",pu="@firebase/firestore",gu="@firebase/ai",mu="@firebase/firestore-compat",vu="firebase",yu="12.12.0";/**
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
 */const Bi="[DEFAULT]",Cu={[Fi]:"fire-core",[jh]:"fire-core-compat",[Yh]:"fire-analytics",[Qh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Jh]:"fire-auth",[Zh]:"fire-auth-compat",[eu]:"fire-rtdb",[tu]:"fire-data-connect",[nu]:"fire-rtdb-compat",[su]:"fire-fn",[iu]:"fire-fn-compat",[ru]:"fire-iid",[ou]:"fire-iid-compat",[au]:"fire-fcm",[lu]:"fire-fcm-compat",[cu]:"fire-perf",[hu]:"fire-perf-compat",[uu]:"fire-rc",[du]:"fire-rc-compat",[fu]:"fire-gcs",[_u]:"fire-gcs-compat",[pu]:"fire-fst",[mu]:"fire-fst-compat",[gu]:"fire-vertex","fire-js":"fire-js",[vu]:"fire-js-all"};/**
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
 */const Os=new Map,Eu=new Map,Wi=new Map;function ho(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ms(n){const e=n.name;if(Wi.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;Wi.set(e,n);for(const t of Os.values())ho(t,n);for(const t of Eu.values())ho(t,n);return!0}function bu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wu(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new ha("app","Firebase",Iu);/**
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
 */class Su{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Tu=yu;function ga(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Bi,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=la()),!t)throw Ht.create("no-options");const r=Os.get(i);if(r){if(Ps(t,r.options)&&Ps(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new kh(i);for(const c of Wi.values())o.addComponent(c);const a=new Su(t,s,o);return Os.set(i,a),a}function Nu(n=Bi){const e=Os.get(n);if(!e&&n===Bi&&la())return ga();if(!e)throw Ht.create("no-app",{appName:n});return e}function _n(n,e,t){let s=Cu[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(o.join(" "));return}Ms(new Zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ru="firebase-heartbeat-database",ku=1,es="firebase-heartbeat-store";let wi=null;function ma(){return wi||(wi=Hh(Ru,ku,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(es)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),wi}async function Au(n){try{const t=(await ma()).transaction(es),s=await t.objectStore(es).get(va(n));return await t.done,s}catch(e){if(e instanceof hs)Tt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function uo(n,e){try{const s=(await ma()).transaction(es,"readwrite");await s.objectStore(es).put(e,va(n)),await s.done}catch(t){if(t instanceof hs)Tt.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(s.message)}}}function va(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xu=1024,Du=30;class Pu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Du){const o=Lu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fo(),{heartbeatsToSend:s,unsentEntries:i}=Ou(this._heartbeatsCache.heartbeats),r=xs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Tt.warn(t),""}}}function fo(){return new Date().toISOString().substring(0,10)}function Ou(n,e=xu){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_o(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),_o(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Mu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?gh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Au(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _o(n){return xs(JSON.stringify({version:2,heartbeats:n})).length}function Lu(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Fu(n){Ms(new Zn("platform-logger",e=>new qh(e),"PRIVATE")),Ms(new Zn("heartbeat",e=>new Pu(e),"PRIVATE")),_n(Fi,co,n),_n(Fi,co,"esm2020"),_n("fire-js","")}Fu("");var Bu="firebase",Wu="12.12.0";/**
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
 */_n(Bu,Wu,"app");var po={};const go="@firebase/database",mo="1.1.2";/**
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
 */let ya="";function Uu(n){ya=n}/**
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
 */class $u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Jn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Hu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ca=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $u(e)}}catch{}return new Hu},sn=Ca("localStorage"),Vu=Ca("sessionStorage");/**
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
 */const pn=new fa("@firebase/database"),zu=(function(){let n=1;return function(){return n++}})(),Ea=function(n){const e=Ih(n),t=new wh;t.update(e);const s=t.digest();return tr.encodeByteArray(s)},us=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let jn=null,vo=!0;const qu=function(n,e){E(!0,"Can't turn on custom loggers persistently."),pn.logLevel=ie.VERBOSE,jn=pn.log.bind(pn)},Te=function(...n){if(vo===!0&&(vo=!1,jn===null&&Vu.get("logging_enabled")===!0&&qu()),jn){const e=us.apply(null,n);jn(e)}},ds=function(n){return function(...e){Te(n,...e)}},Ui=function(...n){const e="FIREBASE INTERNAL ERROR: "+us(...n);pn.error(e)},Nt=function(...n){const e=`FIREBASE FATAL ERROR: ${us(...n)}`;throw pn.error(e),new Error(e)},Le=function(...n){const e="FIREBASE WARNING: "+us(...n);pn.warn(e)},Gu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ju=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vn="[MIN_NAME]",rn="[MAX_NAME]",ln=function(n,e){if(n===e)return 0;if(n===vn||e===rn)return-1;if(e===vn||n===rn)return 1;{const t=yo(n),s=yo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Qu=function(n,e){return n===e?0:n<e?-1:1},Wn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ve(e))},ir=function(n){if(typeof n!="object"||n===null)return ve(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ve(e[s]),t+=":",t+=ir(n[e[s]]);return t+="}",t},ba=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wa=function(n){E(!sr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const d=h.join("");let f="";for(c=0;c<64;c+=8){let u=parseInt(d.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},Yu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ku=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ju=new RegExp("^-?(0*)\\d{1,10}$"),Zu=-2147483648,ed=2147483647,yo=function(n){if(Ju.test(n)){const e=Number(n);if(e>=Zu&&e<=ed)return e}return null},Sn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Le("Exception was thrown by user callback.",t),e},Math.floor(0))}},td=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class nd{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,wu(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class sd{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
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
 */const rr="5",Ia="v",Sa="s",Ta="r",Na="f",Ra=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ka="ls",Aa="p",$i="ac",xa="websocket",Da="long_polling";/**
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
 */class Pa{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function id(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Oa(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let s;if(e===xa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Da)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);id(n)&&(t.ns=n.namespace);const i=[];return Ne(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class rd{constructor(){this.counters_={}}incrementCounter(e,t=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sh(this.counters_)}}/**
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
 */const Ii={},Si={};function or(n){const e=n.toString();return Ii[e]||(Ii[e]=new rd),Ii[e]}function od(n,e){const t=n.toString();return Si[t]||(Si[t]=e()),Si[t]}/**
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
 */class ad{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Sn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Co="start",ld="close",cd="pLPCommand",hd="pRTLPCB",Ma="id",La="pw",Fa="ser",ud="cb",dd="seg",fd="ts",_d="d",pd="dframe",Ba=1870,Wa=30,gd=Ba-Wa,md=25e3,vd=3e4;class fn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ds(e),this.stats_=or(t),this.urlFn=c=>(this.appCheckToken&&(c[$i]=this.appCheckToken),Oa(t,Da,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ad(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vd)),ju(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ar((...r)=>{const[o,a,c,h,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Co)this.id=a,this.password=c;else if(o===ld)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Co]="t",s[Fa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ud]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ia]=rr,this.transportSessionId&&(s[Sa]=this.transportSessionId),this.lastSessionId&&(s[ka]=this.lastSessionId),this.applicationId&&(s[Aa]=this.applicationId),this.appCheckToken&&(s[$i]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(s[Ta]=Na);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Yu()&&!Ku()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ra(t),i=ba(s,gd);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[pd]="t",s[Ma]=e,s[La]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ve(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ar{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zu(),window[cd+this.uniqueCallbackIdentifier]=e,window[hd+this.uniqueCallbackIdentifier]=t,this.myIFrame=ar.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ma]=this.myID,e[La]=this.myPW,e[Fa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wa+s.length<=Ba;){const o=this.pendingSegs.shift();s=s+"&"+dd+i+"="+o.seg+"&"+fd+i+"="+o.ts+"&"+_d+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(md)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const yd=16384,Cd=45e3;let Ls=null;typeof MozWebSocket<"u"?Ls=MozWebSocket:typeof WebSocket<"u"&&(Ls=WebSocket);class st{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ds(this.connId),this.stats_=or(t),this.connURL=st.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ia]=rr,typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(o[Ta]=Na),t&&(o[Sa]=t),s&&(o[ka]=s),i&&(o[$i]=i),r&&(o[Aa]=r),Oa(e,xa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;_h(),this.mySock=new Ls(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ls!==null&&!st.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Jn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ba(t,yd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cd))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
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
 */class ts{static get ALL_TRANSPORTS(){return[fn,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=st&&st.isAvailable();let s=t&&!st.previouslyFailed();if(e.webSocketOnly&&(t||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[st];else{const i=this.transports_=[];for(const r of ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
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
 */const Ed=6e4,bd=5e3,wd=10*1024,Id=100*1024,Ti="t",Eo="d",Sd="s",bo="r",Td="e",wo="o",Io="a",So="n",To="p",Nd="h";class Rd{constructor(e,t,s,i,r,o,a,c,h,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ds("c:"+this.id+":"),this.transportManager_=new ts(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Id?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ti in e){const t=e[Ti];t===Io?this.upgradeIfSecondaryHealthy_():t===bo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wn("t",e),s=Wn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:To,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Io,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:So,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wn("t",e),s=Wn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wn(Ti,e);if(Eo in e){const s=e[Eo];if(t===Nd){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===So){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Sd?this.onConnectionShutdown_(s):t===bo?this.onReset_(s):t===Td?Ui("Server Error: "+s):t===wo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ui("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),rr!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ed))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:To,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ua{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class $a{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Fs extends $a{static getInstance(){return new Fs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const No=32,Ro=768;class te{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new te("")}function $(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qt(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new te(n.pieces_,e)}function lr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function kd(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ns(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ha(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new te(e,0)}function he(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new te(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=$(n),s=$(e);if(t===null)return e;if(t===s)return Me(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ad(n,e){const t=ns(n,0),s=ns(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=ln(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function cr(n,e){if(qt(n)!==qt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ye(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(qt(n)>qt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class xd{constructor(e,t){this.errorPrefix_=t,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ks(this.parts_[s]);Va(this)}}function Dd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ks(e),Va(n)}function Pd(n){const e=n.parts_.pop();n.byteLength_-=Ks(e),n.parts_.length>0&&(n.byteLength_-=1)}function Va(n){if(n.byteLength_>Ro)throw new Error(n.errorPrefix_+"has a key path longer than "+Ro+" bytes ("+n.byteLength_+").");if(n.parts_.length>No)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+No+") or object contains a cycle "+nn(n))}function nn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class hr extends $a{static getInstance(){return new hr}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Un=1e3,Od=300*1e3,ko=30*1e3,Md=1.3,Ld=3e4,Fd="server_kill",Ao=3;class St extends Ua{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=St.nextPersistentConnectionId_++,this.log_=ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=Od,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ve(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new cs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,h=a.s;St.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&mt(e,"w")){const s=mn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ko)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ch(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ui("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ld&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Md)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},h=function(f){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:h};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,a=new Rd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,v=>{Le(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fd)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Le(f),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],io(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ir(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ao&&(this.reconnectDelay_=ko,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ao&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ya.replace(/\./g,"-")]=1,ca()?e["framework.cordova"]=1:fh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fs.getInstance().currentlyOnline();return io(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
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
 */class H{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new H(e,t)}}/**
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
 */class Xs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new H(vn,e),i=new H(vn,t);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
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
 */let Ns;class za extends Xs{static get __EMPTY_NODE(){return Ns}static set __EMPTY_NODE(e){Ns=e}compare(e,t){return ln(e.name,t.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return H.MIN}maxPost(){return new H(rn,Ns)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Ns)}toString(){return".key"}}const gn=new za;/**
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
 */class Rs{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ee.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,t,s,i,r){return new Ee(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Bd{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,t=Ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rs(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Bd;/**
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
 */function Wd(n,e){return ln(n.name,e.name)}function ur(n,e){return ln(n,e)}/**
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
 */let Hi;function Ud(n){Hi=n}const qa=function(n){return typeof n=="number"?"number:"+wa(n):"string:"+n},Ga=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else E(n===Hi||n.isEmpty(),"priority of unexpected type.");E(n===Hi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xo;class Ce{static set __childrenNodeConstructor(e){xo=e}static get __childrenNodeConstructor(){return xo}constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ga(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:$(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=$(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wa(this.value_):e+=this.value_,this.lazyHash_=Ea(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(t),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ja,Qa;function $d(n){ja=n}function Hd(n){Qa=n}class Vd extends Xs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ln(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return H.MIN}maxPost(){return new H(rn,new Ce("[PRIORITY-POST]",Qa))}makePost(e,t){const s=ja(e);return new H(t,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Vd;/**
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
 */const zd=Math.log(2);class qd{constructor(e){const t=r=>parseInt(Math.log(r)/zd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bs=function(n,e,t,s){n.sort(e);const i=function(c,h){const d=h-c;let f,u;if(d===0)return null;if(d===1)return f=n[c],u=t?t(f):f,new Ee(u,f.node,Ee.BLACK,null,null);{const v=parseInt(d/2,10)+c,w=i(c,v),A=i(v+1,h);return f=n[v],u=t?t(f):f,new Ee(u,f.node,Ee.BLACK,w,A)}},r=function(c){let h=null,d=null,f=n.length;const u=function(w,A){const I=f-w,j=f;f-=w;const be=i(I+1,j),X=n[I],de=t?t(X):X;v(new Ee(de,X.node,A,null,be))},v=function(w){h?(h.left=w,h=w):(d=w,h=w)};for(let w=0;w<c.count;++w){const A=c.nextBitIsOne(),I=Math.pow(2,c.count-(w+1));A?u(I,Ee.BLACK):(u(I,Ee.BLACK),u(I,Ee.RED))}return d},o=new qd(n.length),a=r(o);return new Ue(s||e,a)};/**
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
 */let Ni;const un={};class It{static get Default(){return E(un&&ue,"ChildrenNode.ts has not been loaded"),Ni=Ni||new It({".priority":un},{".priority":ue}),Ni}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=mn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ue?t:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,t){E(e!==gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Bs(s,e.getCompare()):a=un;const c=e.toString(),h={...this.indexSet_};h[c]=e;const d={...this.indexes_};return d[c]=a,new It(d,h)}addToIndexes(e,t){const s=Ds(this.indexes_,(i,r)=>{const o=mn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(H.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&a.push(h),h=c.getNext();return a.push(e),Bs(a,o.getCompare())}else return un;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new H(e.name,a))),c.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ds(this.indexes_,i=>{if(i===un)return i;{const r=t.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
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
 */let $n;class R{static get EMPTY_NODE(){return $n||($n=new R(new Ue(ur),null,It.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ga(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$n:t}}getChild(e){const t=$(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new H(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=$(e);if(s===null)return t;{E($(e)!==".priority"||qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qa(this.getPriority().val())+":"),this.forEachChild(ue,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Ea(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new H(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new H(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fs?-1:0}withIndex(e){if(e===gn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ue),i=t.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gn?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gd extends R{constructor(){super(new Ue(ur),R.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const fs=new Gd;Object.defineProperties(H,{MIN:{value:new H(vn,R.EMPTY_NODE)},MAX:{value:new H(rn,fs)}});za.__EMPTY_NODE=R.EMPTY_NODE;Ce.__childrenNodeConstructor=R;Ud(fs);Hd(fs);/**
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
 */const jd=!0;function me(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,me(e))}if(!(n instanceof Array)&&jd){const t=[];let s=!1;if(Ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=me(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new H(o,c)))}}),t.length===0)return R.EMPTY_NODE;const r=Bs(t,Wd,o=>o.name,ur);if(s){const o=Bs(t,ue.getCompare());return new R(r,me(e),new It({".priority":o},{".priority":ue}))}else return new R(r,me(e),It.Default)}else{let t=R.EMPTY_NODE;return Ne(n,(s,i)=>{if(mt(n,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(me(e))}}$d(me);/**
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
 */class Qd extends Xs{constructor(e){super(),this.indexPath_=e,E(!V(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ln(e.name,t.name):r}makePost(e,t){const s=me(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,fs);return new H(rn,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
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
 */class Yd extends Xs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ln(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,t){const s=me(e);return new H(t,s)}toString(){return".value"}}const Kd=new Yd;/**
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
 */function Ya(n){return{type:"value",snapshotNode:n}}function yn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ss(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function is(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Xd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class dr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ss(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yn(t,s)):o.trackChildChange(is(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{t.hasChild(i)||s.trackChildChange(ss(i,r))}),t.isLeafNode()||t.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(is(i,r,o))}else s.trackChildChange(yn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rs{constructor(e){this.indexedFilter_=new dr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rs.getStartPost_(e),this.endPost_=rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new H(t,s))||(s=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=R.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const r=this;return t.forEachChild(ue,(o,a)=>{r.matches(new H(o,a))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Jd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new H(t,s))||(s=R.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(u,v)=>f(v,u)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new H(t,s),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,h,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const v=u==null?1:o(u,c);if(d&&!s.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(is(t,s,f)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ss(t,f));const A=a.updateImmediateChild(t,R.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(yn(u.name,u.node)),A.updateImmediateChild(u.name,u.node)):A}}else return s.isEmpty()?e:d&&o(h,c)>=0?(r!=null&&(r.trackChildChange(ss(h.name,h.node)),r.trackChildChange(yn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(h.name,R.EMPTY_NODE)):e}}/**
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
 */class fr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new fr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zd(n){return n.loadsAllData()?new dr(n.getIndex()):n.hasLimit()?new Jd(n):new rs(n)}function Do(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ue?t="$priority":n.index_===Kd?t="$value":n.index_===gn?t="$key":(E(n.index_ instanceof Qd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ve(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ve(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ve(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ve(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ve(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Po(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ue&&(e.i=n.index_.toString()),e}/**
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
 */class Ws extends Ua{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ds("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ws.getListenId_(e,s),a={};this.listens_[o]=a;const c=Do(e._queryParams);this.restRequest_(r+".json",c,(h,d)=>{let f=d;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(r,f,!1,s),mn(this.listens_,o)===a){let u;h?h===401?u="permission_denied":u="rest_error:"+h:u="ok",i(u,null)}})}unlisten(e,t){const s=Ws.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Do(e._queryParams),s=e._path.toString(),i=new cs;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bh(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Jn(a.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ef{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Us(){return{value:null,children:new Map}}function Ka(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=$(e);n.children.has(s)||n.children.set(s,Us());const i=n.children.get(s);e=re(e),Ka(i,e,t)}}function Vi(n,e,t){n.value!==null?t(e,n.value):tf(n,(s,i)=>{const r=new te(e.toString()+"/"+s);Vi(i,r,t)})}function tf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class nf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ne(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Oo=10*1e3,sf=30*1e3,rf=300*1e3;class of{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nf(e);const s=Oo+(sf-Oo)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ne(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rf))}}/**
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
 */var it;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function _r(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class $s{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=_r()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new te(e));return new $s(K(),t,this.revert)}}else return E($(this.path)===e,"operationForChild called for unrelated child."),new $s(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class os{constructor(e,t){this.source=e,this.path=t,this.type=it.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new os(this.source,K()):new os(this.source,re(this.path))}}/**
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
 */class on{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return V(this.path)?new on(this.source,K(),this.snap.getImmediateChild(e)):new on(this.source,re(this.path),this.snap)}}/**
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
 */class Cn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=it.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new te(e));return t.isEmpty()?null:t.value?new on(this.source,K(),t.value):new Cn(this.source,K(),t)}else return E($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cn(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=$(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class af{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lf(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xd(o.childName,o.snapshotNode))}),Hn(n,i,"child_removed",e,s,t),Hn(n,i,"child_added",e,s,t),Hn(n,i,"child_moved",r,s,t),Hn(n,i,"child_changed",e,s,t),Hn(n,i,"value",e,s,t),i}function Hn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>hf(n,a,c)),o.forEach(a=>{const c=cf(n,a,r);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(c,n.query_))})})}function cf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function hf(n,e,t){if(e.childName==null||t.childName==null)throw wn("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Js(n,e){return{eventCache:n,serverCache:e}}function Yn(n,e,t,s){return Js(new Gt(e,t,s),n.serverCache)}function Xa(n,e,t,s){return Js(n.eventCache,new Gt(e,t,s))}function Hs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function an(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ri;const uf=()=>(Ri||(Ri=new Ue(Qu)),Ri);class se{static fromObject(e){let t=new se(null);return Ne(e,(s,i)=>{t=t.set(new te(s),i)}),t}constructor(e,t=uf()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(V(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:he(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=$(e),s=this.children.get(t);return s!==null?s.subtree(re(e)):new se(null)}}set(e,t){if(V(e))return new se(t,this.children);{const s=$(e),r=(this.children.get(s)||new se(null)).set(re(e),t),o=this.children.insert(s,r);return new se(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const t=$(e),s=this.children.get(t);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new se(null):new se(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const t=$(e),s=this.children.get(t);return s?s.get(re(e)):null}}setTree(e,t){if(V(e))return t;{const s=$(e),r=(this.children.get(s)||new se(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new se(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(V(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(re(e),he(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,s){if(V(e))return this;{this.value&&s(t,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),he(t,i),s):new se(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class rt{constructor(e){this.writeTree_=e}static empty(){return new rt(new se(null))}}function Kn(n,e,t){if(V(e))return new rt(new se(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,t),new rt(n.writeTree_.set(i,r))}else{const i=new se(t),r=n.writeTree_.setTree(e,i);return new rt(r)}}}function zi(n,e,t){let s=n;return Ne(t,(i,r)=>{s=Kn(s,he(e,i),r)}),s}function Mo(n,e){if(V(e))return rt.empty();{const t=n.writeTree_.setTree(e,new se(null));return new rt(t)}}function qi(n,e){return cn(n,e)!=null}function cn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function Lo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ue,(s,i)=>{e.push(new H(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function Vt(n,e){if(V(e))return n;{const t=cn(n,e);return t!=null?new rt(new se(t)):new rt(n.writeTree_.subtree(e))}}function Gi(n){return n.writeTree_.isEmpty()}function En(n,e){return Ja(K(),n.writeTree_,e)}function Ja(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ja(he(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(he(n,".priority"),s)),t}}/**
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
 */function Zs(n,e){return nl(e,n)}function df(n,e,t,s,i){E(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Kn(n.visibleWrites,e,t)),n.lastWriteId=s}function ff(n,e,t,s){E(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=zi(n.visibleWrites,e,t),n.lastWriteId=s}function _f(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function pf(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&gf(a,s.path)?i=!1:Ye(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return mf(n),!0;if(s.snap)n.visibleWrites=Mo(n.visibleWrites,s.path);else{const a=s.children;Ne(a,c=>{n.visibleWrites=Mo(n.visibleWrites,he(s.path,c))})}return!0}else return!1}function gf(n,e){if(n.snap)return Ye(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ye(he(n.path,t),e))return!0;return!1}function mf(n){n.visibleWrites=Za(n.allWrites,vf,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function vf(n){return n.visible}function Za(n,e,t){let s=rt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Ye(t,o)?(a=Me(t,o),s=Kn(s,a,r.snap)):Ye(o,t)&&(a=Me(o,t),s=Kn(s,K(),r.snap.getChild(a)));else if(r.children){if(Ye(t,o))a=Me(t,o),s=zi(s,a,r.children);else if(Ye(o,t))if(a=Me(o,t),V(a))s=zi(s,K(),r.children);else{const c=mn(r.children,$(a));if(c){const h=c.getChild(re(a));s=Kn(s,K(),h)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function el(n,e,t,s,i){if(!s&&!i){const r=cn(n.visibleWrites,e);if(r!=null)return r;{const o=Vt(n.visibleWrites,e);if(Gi(o))return t;if(t==null&&!qi(o,K()))return null;{const a=t||R.EMPTY_NODE;return En(o,a)}}}else{const r=Vt(n.visibleWrites,e);if(!i&&Gi(r))return t;if(!i&&t==null&&!qi(r,K()))return null;{const o=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(Ye(h.path,e)||Ye(e,h.path))},a=Za(n.allWrites,o,e),c=t||R.EMPTY_NODE;return En(a,c)}}}function yf(n,e,t){let s=R.EMPTY_NODE;const i=cn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Vt(n.visibleWrites,e);return t.forEachChild(ue,(o,a)=>{const c=En(Vt(r,new te(o)),a);s=s.updateImmediateChild(o,c)}),Lo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vt(n.visibleWrites,e);return Lo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Cf(n,e,t,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,t);if(qi(n.visibleWrites,r))return null;{const o=Vt(n.visibleWrites,r);return Gi(o)?i.getChild(t):En(o,i.getChild(t))}}function Ef(n,e,t,s){const i=he(e,t),r=cn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Vt(n.visibleWrites,i);return En(o,s.getNode().getImmediateChild(t))}else return null}function bf(n,e){return cn(n.visibleWrites,e)}function wf(n,e,t,s,i,r,o){let a;const c=Vt(n.visibleWrites,e),h=cn(c,K());if(h!=null)a=h;else if(t!=null)a=En(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let v=u.getNext();for(;v&&d.length<i;)f(v,s)!==0&&d.push(v),v=u.getNext();return d}else return[]}function If(){return{visibleWrites:rt.empty(),allWrites:[],lastWriteId:-1}}function Vs(n,e,t,s){return el(n.writeTree,n.treePath,e,t,s)}function mr(n,e){return yf(n.writeTree,n.treePath,e)}function Fo(n,e,t,s){return Cf(n.writeTree,n.treePath,e,t,s)}function zs(n,e){return bf(n.writeTree,he(n.treePath,e))}function Sf(n,e,t,s,i,r){return wf(n.writeTree,n.treePath,e,t,s,i,r)}function vr(n,e,t){return Ef(n.writeTree,n.treePath,e,t)}function tl(n,e){return nl(he(n.treePath,e),n.writeTree)}function nl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Tf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,is(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ss(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,yn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,is(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Nf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const sl=new Nf;class yr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:an(this.viewCache_),r=Sf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Rf(n){return{filter:n}}function kf(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Af(n,e,t,s,i){const r=new Tf;let o,a;if(t.type===it.OVERWRITE){const h=t;h.source.fromUser?o=ji(n,e,h.path,h.snap,s,i,r):(E(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!V(h.path),o=qs(n,e,h.path,h.snap,s,i,a,r))}else if(t.type===it.MERGE){const h=t;h.source.fromUser?o=Df(n,e,h.path,h.children,s,i,r):(E(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Qi(n,e,h.path,h.children,s,i,a,r))}else if(t.type===it.ACK_USER_WRITE){const h=t;h.revert?o=Mf(n,e,h.path,s,i,r):o=Pf(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===it.LISTEN_COMPLETE)o=Of(n,e,t.path,s,r);else throw wn("Unknown operation type: "+t.type);const c=r.getChanges();return xf(e,o,c),{viewCache:o,changes:c}}function xf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Hs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ya(Hs(e)))}}function il(n,e,t,s,i,r){const o=e.eventCache;if(zs(s,t)!=null)return e;{let a,c;if(V(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=an(e),d=h instanceof R?h:R.EMPTY_NODE,f=mr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const h=Vs(s,an(e));a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=$(t);if(h===".priority"){E(qt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Fo(s,t,d,c);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=re(t);let f;if(o.isCompleteForChild(h)){c=e.serverCache.getNode();const u=Fo(s,t,o.getNode(),c);u!=null?f=o.getNode().getImmediateChild(h).updateChild(d,u):f=o.getNode().getImmediateChild(h)}else f=vr(s,h,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),h,f,d,i,r):a=o.getNode()}}return Yn(e,a,o.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function qs(n,e,t,s,i,r,o,a){const c=e.serverCache;let h;const d=o?n.filter:n.filter.getIndexedFilter();if(V(t))h=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(t,s);h=d.updateFullNode(c.getNode(),v,null)}else{const v=$(t);if(!c.isCompleteForPath(t)&&qt(t)>1)return e;const w=re(t),I=c.getNode().getImmediateChild(v).updateChild(w,s);v===".priority"?h=d.updatePriority(c.getNode(),I):h=d.updateChild(c.getNode(),v,I,w,sl,null)}const f=Xa(e,h,c.isFullyInitialized()||V(t),d.filtersNodes()),u=new yr(i,f,r);return il(n,f,t,i,u,a)}function ji(n,e,t,s,i,r,o){const a=e.eventCache;let c,h;const d=new yr(i,e,r);if(V(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Yn(e,h,!0,n.filter.filtersNodes());else{const f=$(t);if(f===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),c=Yn(e,h,a.isFullyInitialized(),a.isFiltered());else{const u=re(t),v=a.getNode().getImmediateChild(f);let w;if(V(u))w=s;else{const A=d.getCompleteChild(f);A!=null?lr(u)===".priority"&&A.getChild(Ha(u)).isEmpty()?w=A:w=A.updateChild(u,s):w=R.EMPTY_NODE}if(v.equals(w))c=e;else{const A=n.filter.updateChild(a.getNode(),f,w,u,d,o);c=Yn(e,A,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Bo(n,e){return n.eventCache.isCompleteForChild(e)}function Df(n,e,t,s,i,r,o){let a=e;return s.foreach((c,h)=>{const d=he(t,c);Bo(e,$(d))&&(a=ji(n,a,d,h,i,r,o))}),s.foreach((c,h)=>{const d=he(t,c);Bo(e,$(d))||(a=ji(n,a,d,h,i,r,o))}),a}function Wo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Qi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;V(t)?h=s:h=new se(null).setTree(t,s);const d=e.serverCache.getNode();return h.children.inorderTraversal((f,u)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),w=Wo(n,v,u);c=qs(n,c,new te(f),w,i,r,o,a)}}),h.children.inorderTraversal((f,u)=>{const v=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!d.hasChild(f)&&!v){const w=e.serverCache.getNode().getImmediateChild(f),A=Wo(n,w,u);c=qs(n,c,new te(f),A,i,r,o,a)}}),c}function Pf(n,e,t,s,i,r,o){if(zs(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(V(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return qs(n,e,t,c.getNode().getChild(t),i,r,a,o);if(V(t)){let h=new se(null);return c.getNode().forEachChild(gn,(d,f)=>{h=h.set(new te(d),f)}),Qi(n,e,t,h,i,r,a,o)}else return e}else{let h=new se(null);return s.foreach((d,f)=>{const u=he(t,d);c.isCompleteForPath(u)&&(h=h.set(d,c.getNode().getChild(u)))}),Qi(n,e,t,h,i,r,a,o)}}function Of(n,e,t,s,i){const r=e.serverCache,o=Xa(e,r.getNode(),r.isFullyInitialized()||V(t),r.isFiltered());return il(n,o,t,s,sl,i)}function Mf(n,e,t,s,i,r){let o;if(zs(s,t)!=null)return e;{const a=new yr(s,e,i),c=e.eventCache.getNode();let h;if(V(t)||$(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Vs(s,an(e));else{const f=e.serverCache.getNode();E(f instanceof R,"serverChildren would be complete if leaf node"),d=mr(s,f)}d=d,h=n.filter.updateFullNode(c,d,r)}else{const d=$(t);let f=vr(s,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?h=n.filter.updateChild(c,d,f,re(t),a,r):e.eventCache.getNode().hasChild(d)?h=n.filter.updateChild(c,d,R.EMPTY_NODE,re(t),a,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vs(s,an(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||zs(s,K())!=null,Yn(e,h,o,n.filter.filtersNodes())}}/**
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
 */class Lf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new dr(s.getIndex()),r=Zd(s);this.processor_=Rf(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),d=new Gt(c,o.isFullyInitialized(),i.filtersNodes()),f=new Gt(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Js(f,d),this.eventGenerator_=new af(this.query_)}get query(){return this.query_}}function Ff(n){return n.viewCache_.serverCache.getNode()}function Bf(n){return Hs(n.viewCache_)}function Wf(n,e){const t=an(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild($(e)).isEmpty())?t.getChild(e):null}function Uo(n){return n.eventRegistrations_.length===0}function Uf(n,e){n.eventRegistrations_.push(e)}function $o(n,e,t){const s=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ho(n,e,t,s){e.type===it.MERGE&&e.source.queryId!==null&&(E(an(n.viewCache_),"We should always have a full cache before handling merges"),E(Hs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Af(n.processor_,i,e,t,s);return kf(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,rl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function $f(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ue,(r,o)=>{s.push(yn(r,o))}),t.isFullyInitialized()&&s.push(Ya(t.getNode())),rl(n,s,t.getNode(),e)}function rl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return lf(n.eventGenerator_,e,t,i)}/**
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
 */let Gs;class ol{constructor(){this.views=new Map}}function Hf(n){E(!Gs,"__referenceConstructor has already been defined"),Gs=n}function Vf(){return E(Gs,"Reference.ts has not been loaded"),Gs}function zf(n){return n.views.size===0}function Cr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Ho(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ho(o,e,t,s));return r}}function al(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Vs(t,i?s:null),c=!1;a?c=!0:s instanceof R?(a=mr(t,s),c=!1):(a=R.EMPTY_NODE,c=!1);const h=Js(new Gt(a,c,!1),new Gt(s,i,!1));return new Lf(e,h)}return o}function qf(n,e,t,s,i,r){const o=al(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Uf(o,t),$f(o,t)}function Gf(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=jt(n);if(i==="default")for(const[c,h]of n.views.entries())o=o.concat($o(h,t,s)),Uo(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||r.push(h.query));else{const c=n.views.get(i);c&&(o=o.concat($o(c,t,s)),Uo(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!jt(n)&&r.push(new(Vf())(e._repo,e._path)),{removed:r,events:o}}function ll(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function zt(n,e){let t=null;for(const s of n.views.values())t=t||Wf(s,e);return t}function cl(n,e){if(e._queryParams.loadsAllData())return ei(n);{const s=e._queryIdentifier;return n.views.get(s)}}function hl(n,e){return cl(n,e)!=null}function jt(n){return ei(n)!=null}function ei(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let js;function jf(n){E(!js,"__referenceConstructor has already been defined"),js=n}function Qf(){return E(js,"Reference.ts has not been loaded"),js}let Yf=1;class Vo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=If(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ul(n,e,t,s,i){return df(n.pendingWriteTree_,e,t,s,i),i?Tn(n,new on(_r(),e,t)):[]}function Kf(n,e,t,s){ff(n.pendingWriteTree_,e,t,s);const i=se.fromObject(t);return Tn(n,new Cn(_r(),e,i))}function Ut(n,e,t=!1){const s=_f(n.pendingWriteTree_,e);if(pf(n.pendingWriteTree_,e)){let r=new se(null);return s.snap!=null?r=r.set(K(),!0):Ne(s.children,o=>{r=r.set(new te(o),!0)}),Tn(n,new $s(s.path,r,t))}else return[]}function _s(n,e,t){return Tn(n,new on(pr(),e,t))}function Xf(n,e,t){const s=se.fromObject(t);return Tn(n,new Cn(pr(),e,s))}function Jf(n,e){return Tn(n,new os(pr(),e))}function Zf(n,e,t){const s=br(n,t);if(s){const i=wr(s),r=i.path,o=i.queryId,a=Me(r,e),c=new os(gr(o),a);return Ir(n,r,c)}else return[]}function Qs(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||hl(o,e))){const c=Gf(o,e,t,s);zf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=c.removed;if(a=c.events,!i){const d=h.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(u,v)=>jt(v));if(d&&!f){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const v=n_(u);for(let w=0;w<v.length;++w){const A=v[w],I=A.query,j=pl(n,A);n.listenProvider_.startListening(Xn(I),as(n,I),j.hashFn,j.onComplete)}}}!f&&h.length>0&&!s&&(d?n.listenProvider_.stopListening(Xn(e),null):h.forEach(u=>{const v=n.queryToTagMap.get(ti(u));n.listenProvider_.stopListening(Xn(u),v)}))}s_(n,h)}return a}function dl(n,e,t,s){const i=br(n,s);if(i!=null){const r=wr(i),o=r.path,a=r.queryId,c=Me(o,e),h=new on(gr(a),c,t);return Ir(n,o,h)}else return[]}function e_(n,e,t,s){const i=br(n,s);if(i){const r=wr(i),o=r.path,a=r.queryId,c=Me(o,e),h=se.fromObject(t),d=new Cn(gr(a),c,h);return Ir(n,o,d)}else return[]}function Yi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,v)=>{const w=Me(u,i);r=r||zt(v,w),o=o||jt(v)});let a=n.syncPointTree_.get(i);a?(o=o||jt(a),r=r||zt(a,K())):(a=new ol,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=R.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((v,w)=>{const A=zt(w,K());A&&(r=r.updateImmediateChild(v,A))}));const h=hl(a,e);if(!h&&!e._queryParams.loadsAllData()){const u=ti(e);E(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const v=i_();n.queryToTagMap.set(u,v),n.tagToQueryMap.set(v,u)}const d=Zs(n.pendingWriteTree_,i);let f=qf(a,e,t,d,r,c);if(!h&&!o&&!s){const u=cl(a,e);f=f.concat(r_(n,e,u))}return f}function Er(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Me(o,e),h=zt(a,c);if(h)return h});return el(i,e,r,t,!0)}function t_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,d)=>{const f=Me(h,t);s=s||zt(d,f)});let i=n.syncPointTree_.get(t);i?s=s||zt(i,K()):(i=new ol,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Gt(s,!0,!1):null,a=Zs(n.pendingWriteTree_,e._path),c=al(i,e,a,r?o.getNode():R.EMPTY_NODE,r);return Bf(c)}function Tn(n,e){return fl(e,n.syncPointTree_,null,Zs(n.pendingWriteTree_,K()))}function fl(n,e,t,s){if(V(n.path))return _l(n,e,t,s);{const i=e.get(K());t==null&&i!=null&&(t=zt(i,K()));let r=[];const o=$(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const h=t?t.getImmediateChild(o):null,d=tl(s,o);r=r.concat(fl(a,c,h,d))}return i&&(r=r.concat(Cr(i,n,s,t))),r}}function _l(n,e,t,s){const i=e.get(K());t==null&&i!=null&&(t=zt(i,K()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,h=tl(s,o),d=n.operationForChild(o);d&&(r=r.concat(_l(d,a,c,h)))}),i&&(r=r.concat(Cr(i,n,s,t))),r}function pl(n,e){const t=e.query,s=as(n,t);return{hashFn:()=>(Ff(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Zf(n,t._path,s):Jf(n,t._path);{const r=Xu(i,t);return Qs(n,t,null,r)}}}}function as(n,e){const t=ti(e);return n.queryToTagMap.get(t)}function ti(n){return n._path.toString()+"$"+n._queryIdentifier}function br(n,e){return n.tagToQueryMap.get(e)}function wr(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new te(n.substr(0,e))}}function Ir(n,e,t){const s=n.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Zs(n.pendingWriteTree_,e);return Cr(s,t,i,null)}function n_(n){return n.fold((e,t,s)=>{if(t&&jt(t))return[ei(t)];{let i=[];return t&&(i=ll(t)),Ne(s,(r,o)=>{i=i.concat(o)}),i}})}function Xn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Qf())(n._repo,n._path):n}function s_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ti(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function i_(){return Yf++}function r_(n,e,t){const s=e._path,i=as(n,e),r=pl(n,t),o=n.listenProvider_.startListening(Xn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)E(!jt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((h,d,f)=>{if(!V(h)&&d&&jt(d))return[ei(d).query];{let u=[];return d&&(u=u.concat(ll(d).map(v=>v.query))),Ne(f,(v,w)=>{u=u.concat(w)}),u}});for(let h=0;h<c.length;++h){const d=c[h];n.listenProvider_.stopListening(Xn(d),as(n,d))}}return o}/**
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
 */class Sr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sr(t)}node(){return this.node_}}class Tr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=he(this.path_,e);return new Tr(this.syncTree_,t)}node(){return Er(this.syncTree_,this.path_)}}const o_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},zo=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return a_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return l_(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},a_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},l_=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gl=function(n,e,t,s){return Nr(e,new Tr(t,n),s)},ml=function(n,e,t){return Nr(n,new Sr(e),t)};function Nr(n,e,t){const s=n.getPriority().val(),i=zo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=zo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Ce(a,me(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(ue,(a,c)=>{const h=Nr(c,e.getImmediateChild(a),t);h!==c&&(r=r.updateImmediateChild(a,h))}),r}}/**
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
 */class Rr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function kr(n,e){let t=e instanceof te?e:new te(e),s=n,i=$(t);for(;i!==null;){const r=mn(s.node.children,i)||{children:{},childCount:0};s=new Rr(i,s,r),t=re(t),i=$(t)}return s}function Nn(n){return n.node.value}function vl(n,e){n.node.value=e,Ki(n)}function yl(n){return n.node.childCount>0}function c_(n){return Nn(n)===void 0&&!yl(n)}function ni(n,e){Ne(n.node.children,(t,s)=>{e(new Rr(t,n,s))})}function Cl(n,e,t,s){t&&e(n),ni(n,i=>{Cl(i,e,!0)})}function h_(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ps(n){return new te(n.parent===null?n.name:ps(n.parent)+"/"+n.name)}function Ki(n){n.parent!==null&&u_(n.parent,n.name,n)}function u_(n,e,t){const s=c_(t),i=mt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ki(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ki(n))}/**
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
 */const d_=/[\[\].#$\/\u0000-\u001F\u007F]/,f_=/[\[\].#$\u0000-\u001F\u007F]/,ki=10*1024*1024,Ar=function(n){return typeof n=="string"&&n.length!==0&&!d_.test(n)},El=function(n){return typeof n=="string"&&n.length!==0&&!f_.test(n)},__=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),El(n)},p_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!sr(n)||n&&typeof n=="object"&&mt(n,".sv")},g_=function(n,e,t,s){si(Ys(n,"value"),e,t)},si=function(n,e,t){const s=t instanceof te?new xd(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nn(s));if(typeof e=="function")throw new Error(n+"contains a function "+nn(s)+" with contents = "+e.toString());if(sr(e))throw new Error(n+"contains "+e.toString()+" "+nn(s));if(typeof e=="string"&&e.length>ki/3&&Ks(e)>ki)throw new Error(n+"contains a string greater than "+ki+" utf8 bytes "+nn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ar(o)))throw new Error(n+" contains an invalid key ("+o+") "+nn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Dd(s,o),si(n,a,s),Pd(s)}),i&&r)throw new Error(n+' contains ".value" child '+nn(s)+" in addition to actual children.")}},m_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=ns(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ar(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ad);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Ye(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},v_=function(n,e,t,s){const i=Ys(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ne(e,(o,a)=>{const c=new te(o);if(si(i,a,he(t,c)),lr(c)===".priority"&&!p_(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),m_(i,r)},bl=function(n,e,t,s){if(!El(t))throw new Error(Ys(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bl(n,e,t)},C_=function(n,e){if($(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},E_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ar(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!__(t))throw new Error(Ys(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ii(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!cr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function wl(n,e,t){ii(n,t),Il(n,s=>cr(s,e))}function Ke(n,e,t){ii(n,t),Il(n,s=>Ye(s,e)||Ye(e,s))}function Il(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(w_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function w_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();jn&&Te("event: "+t.toString()),Sn(s)}}}/**
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
 */const I_="repo_interrupt",S_=25;class T_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Us(),this.transactionQueueTree_=new Rr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N_(n,e,t){if(n.stats_=or(n.repoInfo_),n.forceRestClient_||td())n.server_=new Ws(n.repoInfo_,(s,i,r,o)=>{qo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Go(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new St(n.repoInfo_,e,(s,i,r,o)=>{qo(n,s,i,r,o)},s=>{Go(n,s)},s=>{k_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=od(n.repoInfo_,()=>new of(n.stats_,n.server_)),n.infoData_=new ef,n.infoSyncTree_=new Vo({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=_s(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xr(n,"connected",!1),n.serverSyncTree_=new Vo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const h=o(a,c);Ke(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function R_(n){const t=n.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ri(n){return o_({timestamp:R_(n)})}function qo(n,e,t,s,i){n.dataUpdateCount++;const r=new te(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Ds(t,h=>me(h));o=e_(n.serverSyncTree_,r,c,i)}else{const c=me(t);o=dl(n.serverSyncTree_,r,c,i)}else if(s){const c=Ds(t,h=>me(h));o=Xf(n.serverSyncTree_,r,c)}else{const c=me(t);o=_s(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=bn(n,r)),Ke(n.eventQueue_,a,o)}function Go(n,e){xr(n,"connected",e),e===!1&&P_(n)}function k_(n,e){Ne(e,(t,s)=>{xr(n,t,s)})}function xr(n,e,t){const s=new te("/.info/"+e),i=me(t);n.infoData_.updateSnapshot(s,i);const r=_s(n.infoSyncTree_,s,i);Ke(n.eventQueue_,s,r)}function Dr(n){return n.nextWriteId_++}function A_(n,e,t){const s=t_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());Yi(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=_s(n.serverSyncTree_,e._path,r);else{const a=as(n.serverSyncTree_,e);o=dl(n.serverSyncTree_,e._path,r,a)}return Ke(n.eventQueue_,e._path,o),Qs(n.serverSyncTree_,e,t,null,!0),r},i=>(gs(n,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function x_(n,e,t,s,i){gs(n,"set",{path:e.toString(),value:t,priority:s});const r=ri(n),o=me(t,s),a=Er(n.serverSyncTree_,e),c=ml(o,a,r),h=Dr(n),d=ul(n.serverSyncTree_,e,c,h,!0);ii(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,v)=>{const w=u==="ok";w||Le("set at "+e+" failed: "+u);const A=Ut(n.serverSyncTree_,h,!w);Ke(n.eventQueue_,e,A),Xi(n,i,u,v)});const f=Or(n,e);bn(n,f),Ke(n.eventQueue_,f,[])}function D_(n,e,t,s){gs(n,"update",{path:e.toString(),value:t});let i=!0;const r=ri(n),o={};if(Ne(t,(a,c)=>{i=!1,o[a]=gl(he(e,a),me(c),n.serverSyncTree_,r)}),i)Te("update() called with empty data.  Don't do anything."),Xi(n,s,"ok",void 0);else{const a=Dr(n),c=Kf(n.serverSyncTree_,e,o,a);ii(n.eventQueue_,c),n.server_.merge(e.toString(),t,(h,d)=>{const f=h==="ok";f||Le("update at "+e+" failed: "+h);const u=Ut(n.serverSyncTree_,a,!f),v=u.length>0?bn(n,e):e;Ke(n.eventQueue_,v,u),Xi(n,s,h,d)}),Ne(t,h=>{const d=Or(n,he(e,h));bn(n,d)}),Ke(n.eventQueue_,e,[])}}function P_(n){gs(n,"onDisconnectEvents");const e=ri(n),t=Us();Vi(n.onDisconnect_,K(),(i,r)=>{const o=gl(i,r,n.serverSyncTree_,e);Ka(t,i,o)});let s=[];Vi(t,K(),(i,r)=>{s=s.concat(_s(n.serverSyncTree_,i,r));const o=Or(n,i);bn(n,o)}),n.onDisconnect_=Us(),Ke(n.eventQueue_,K(),s)}function O_(n,e,t){let s;$(e._path)===".info"?s=Yi(n.infoSyncTree_,e,t):s=Yi(n.serverSyncTree_,e,t),wl(n.eventQueue_,e._path,s)}function M_(n,e,t){let s;$(e._path)===".info"?s=Qs(n.infoSyncTree_,e,t):s=Qs(n.serverSyncTree_,e,t),wl(n.eventQueue_,e._path,s)}function L_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(I_)}function gs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Te(t,...e)}function Xi(n,e,t,s){e&&Sn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Sl(n,e,t){return Er(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function Pr(n,e=n.transactionQueueTree_){if(e||oi(n,e),Nn(e)){const t=Nl(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&F_(n,ps(e),t)}else yl(e)&&ni(e,t=>{Pr(n,t)})}function F_(n,e,t){const s=t.map(h=>h.currentWriteId),i=Sl(n,e,s);let r=i;const o=i.hash();for(let h=0;h<t.length;h++){const d=t[h];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Me(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,h=>{gs(n,"transaction put response",{path:c.toString(),status:h});let d=[];if(h==="ok"){const f=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(Ut(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&f.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();oi(n,kr(n.transactionQueueTree_,e)),Pr(n,n.transactionQueueTree_),Ke(n.eventQueue_,e,d);for(let u=0;u<f.length;u++)Sn(f[u])}else{if(h==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Le("transaction at "+c.toString()+" failed: "+h);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=h}bn(n,e)}},o)}function bn(n,e){const t=Tl(n,e),s=ps(t),i=Nl(n,t);return B_(n,i,s),s}function B_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],h=Me(t,c.path);let d=!1,f;if(E(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=S_)d=!0,f="maxretry",i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0));else{const u=Sl(n,c.path,o);c.currentInputSnapshot=u;const v=e[a].update(u.val());if(v!==void 0){si("transaction failed: Data returned ",v,c.path);let w=me(v);typeof v=="object"&&v!=null&&mt(v,".priority")||(w=w.updatePriority(u.getPriority()));const I=c.currentWriteId,j=ri(n),be=ml(w,u,j);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=be,c.currentWriteId=Dr(n),o.splice(o.indexOf(I),1),i=i.concat(ul(n.serverSyncTree_,c.path,be,c.currentWriteId,c.applyLocally)),i=i.concat(Ut(n.serverSyncTree_,I,!0))}else d=!0,f="nodata",i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0))}Ke(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}oi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Sn(s[a]);Pr(n,n.transactionQueueTree_)}function Tl(n,e){let t,s=n.transactionQueueTree_;for(t=$(e);t!==null&&Nn(s)===void 0;)s=kr(s,t),e=re(e),t=$(e);return s}function Nl(n,e){const t=[];return Rl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Rl(n,e,t){const s=Nn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ni(e,i=>{Rl(n,i,t)})}function oi(n,e){const t=Nn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,vl(e,t.length>0?t:void 0)}ni(e,s=>{oi(n,s)})}function Or(n,e){const t=ps(Tl(n,e)),s=kr(n.transactionQueueTree_,e);return h_(s,i=>{Ai(n,i)}),Ai(n,s),Cl(s,i=>{Ai(n,i)}),t}function Ai(n,e){const t=Nn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ut(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vl(e,void 0):t.length=r+1,Ke(n.eventQueue_,ps(e),i);for(let o=0;o<s.length;o++)Sn(s[o])}}/**
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
 */function W_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${t}' in query '${n}'`)}return e}const jo=function(n,e){const t=$_(n),s=t.namespace;t.domain==="firebase.com"&&Nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Gu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Pa(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new te(t.pathString)}},$_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(a=n.substring(0,h-1),n=n.substring(h+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=W_(n.substring(d,f)));const u=U_(n.substring(Math.min(n.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const v=e.slice(0,h);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class H_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class V_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Mr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:lr(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=Po(this._queryParams),t=ir(e);return t==="{}"?"default":t}get _queryObject(){return Po(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof Mr))return!1;const t=this._repo===e._repo,s=cr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kd(this._path)}}class Rt extends Mr{constructor(e,t){super(e,t,new fr,!1)}get parent(){const e=Ha(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new te(e),s=Ji(this.ref,e);return new ls(this._node.getChild(t),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ls(i,Ji(this.ref,s),ue)))}hasChild(e){const t=new te(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qe(n,e){return n=In(n),n._checkNotDeleted("ref"),e!==void 0?Ji(n._root,e):n._root}function Ji(n,e){return n=In(n),$(n._path)===null?y_("child","path",e):bl("child","path",e),new Rt(n._repo,he(n._path,e))}function Qo(n,e){n=In(n),C_("set",n._path),g_("set",e,n._path);const t=new cs;return x_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function en(n,e){v_("update",e,n._path);const t=new cs;return D_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Yo(n){n=In(n);const e=new kl(()=>{}),t=new ai(e);return A_(n._repo,n,t).then(s=>new ls(s,new Rt(n._repo,n._path),n._queryParams.getIndex()))}class ai{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new H_("value",this,new ls(e.snapshotNode,new Rt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new V_(this,e,t):null}matches(e){return e instanceof ai?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function z_(n,e,t,s,i){const r=new kl(t,void 0),o=new ai(r);return O_(n._repo,n,o),()=>M_(n._repo,n,o)}function q_(n,e,t,s){return z_(n,"value",e)}Hf(Rt);jf(Rt);/**
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
 */const G_="FIREBASE_DATABASE_EMULATOR_HOST",Zi={};let j_=!1;function Q_(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=da(r);n.repoInfo_=new Pa(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Y_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=jo(r,i),a=o.repoInfo,c;typeof process<"u"&&po&&(c=po[G_]),c?(r=`http://${c}?ns=${a.namespace}`,o=jo(r,i),a=o.repoInfo):o.repoInfo.secure;const h=new sd(n.name,n.options,e);E_("Invalid Firebase Database URL",o),V(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=X_(a,n,h,new nd(n,t));return new J_(d,n)}function K_(n,e){const t=Zi[e];(!t||t[n.key]!==n)&&Nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),L_(n),delete t[n.key]}function X_(n,e,t,s){let i=Zi[e.name];i||(i={},Zi[e.name]=i);let r=i[n.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new T_(n,j_,t,s),i[n.toURLString()]=r,r}class J_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}}function Z_(n=Nu(),e){const t=bu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=hh("database");s&&ep(t,...s)}return t}function ep(n,e,t,s={}){n=In(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ps(s,r.repoInfo_.emulatorOptions))return;Nt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new As(As.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:uh(s.mockUserToken,n.app.options.projectId);o=new As(a)}da(e)&&Sh(e),Q_(r,i,s,o)}/**
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
 */function tp(n){Uu(Tu),Ms(new Zn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Y_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),_n(go,mo,n),_n(go,mo,"esm2020")}St.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};St.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};tp();var np=F('<div class="qc-actions svelte-1uha8ag"><span role="button" tabindex="0" title="Edit" class="svelte-1uha8ag">✏️</span> <span role="button" tabindex="0" title="Delete" class="svelte-1uha8ag">🗑️</span></div>'),sp=F('<button><span class="qc-emoji svelte-1uha8ag"> </span> <span class="qc-title svelte-1uha8ag"> </span> <span class="qc-count svelte-1uha8ag"> </span> <!></button>'),ip=F('<p class="err svelte-1uha8ag"> </p>'),rp=F('<div class="home svelte-1uha8ag"><div class="home-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Quiz</h1> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div> <p class="section-label svelte-1uha8ag">Select a quiz</p> <div class="quiz-grid svelte-1uha8ag"><!> <button class="quiz-card new-card svelte-1uha8ag"><span class="qc-emoji svelte-1uha8ag">＋</span> <span class="qc-title svelte-1uha8ag">Create Quiz</span></button></div> <div class="play-row svelte-1uha8ag"><button class="btn-primary svelte-1uha8ag">Solo Play</button> <button class="btn-secondary svelte-1uha8ag">Create Room</button></div> <div class="join-row svelte-1uha8ag"><input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <button class="btn-join svelte-1uha8ag">Join Room</button></div> <!></div>'),op=F("<button> </button>"),ap=F('<p class="err svelte-1uha8ag"> </p>'),lp=F('<img alt="" class="img-preview svelte-1uha8ag"/>'),cp=F('<div><button class="bq-mark svelte-1uha8ag" title="Mark as correct"> </button> <input class="text-input bq-opt-input svelte-1uha8ag"/></div>'),hp=F('<div class="bq-card svelte-1uha8ag"><div class="bq-top svelte-1uha8ag"><span class="bq-num svelte-1uha8ag"></span> <button class="bq-del svelte-1uha8ag">✕</button></div> <textarea class="text-input bq-prompt svelte-1uha8ag" placeholder="Question…"></textarea> <div class="img-field svelte-1uha8ag"><input class="text-input img-url svelte-1uha8ag" placeholder="Image URL (optional)"/> <!></div> <p class="bq-hint svelte-1uha8ag">Click an answer to mark it as correct ✓</p> <div class="bq-options svelte-1uha8ag"></div></div>'),up=F('<div class="builder svelte-1uha8ag"><div class="builder-header svelte-1uha8ag"><button class="btn-ghost svelte-1uha8ag">← Back</button> <h2 class="svelte-1uha8ag"> </h2> <button class="btn-save svelte-1uha8ag">Save</button></div> <div class="builder-meta svelte-1uha8ag"><div class="emoji-picker svelte-1uha8ag"></div> <input class="text-input svelte-1uha8ag" placeholder="Quiz title…"/></div> <!> <div class="q-list svelte-1uha8ag"></div> <button class="btn-add-q svelte-1uha8ag">+ Add Question</button></div>'),dp=F('<p class="err svelte-1uha8ag"> </p>'),fp=F('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Create Room</h2> <p class="sub svelte-1uha8ag"> </p> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Create</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),_p=F('<p class="err svelte-1uha8ag"> </p>'),pp=F('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Join Room</h2> <input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Join</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),gp=F('<div class="player-row svelte-1uha8ag"><span></span> </div>'),mp=F('<button class="btn-primary svelte-1uha8ag"> </button>'),vp=F('<p class="sub svelte-1uha8ag">Waiting for host to start…</p>'),yp=F('<div class="center-col svelte-1uha8ag"><p class="sub svelte-1uha8ag">Room code</p> <div class="room-code svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag">Share this code with friends</p> <div class="player-list svelte-1uha8ag"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Leave</button></div>'),Cp=F('<span class="streak svelte-1uha8ag"> </span>'),Ep=F('<img alt="" class="q-img svelte-1uha8ag"/>'),bp=F('<div class="flag svelte-1uha8ag"> </div>'),wp=F('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),Ip=F('<span class="src-gain svelte-1uha8ag"> </span>'),Sp=F('<div> </div> <div class="score-reveal-card svelte-1uha8ag"><div class="src-row svelte-1uha8ag"><span class="src-label svelte-1uha8ag">Din poäng</span> <!></div> <div class="src-score svelte-1uha8ag"> </div> <div class="src-bar-track svelte-1uha8ag"><div class="src-bar svelte-1uha8ag"></div></div> <div class="src-meta svelte-1uha8ag"> </div></div>',1),Tp=F('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <!></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!></div>'),Np=F('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag" style="animation:bounce .5s ease"> </div> <h2 class="svelte-1uha8ag">Done!</h2> <div class="final-score svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">Play Again</button> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),Rp=F('<img alt="" class="q-img svelte-1uha8ag"/>'),kp=F('<div class="flag svelte-1uha8ag"> </div>'),Ap=F('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),xp=F('<p class="sub svelte-1uha8ag" style="text-align:center">Locked in — waiting for others…</p>'),Dp=F('<span class="alb-gain svelte-1uha8ag"> </span>'),Pp=F('<div><span class="alb-rank svelte-1uha8ag"> </span> <div class="alb-middle svelte-1uha8ag"><div class="alb-name-row svelte-1uha8ag"><span class="alb-name svelte-1uha8ag"> </span> <!></div> <div class="alb-bar-track svelte-1uha8ag"><div class="alb-bar svelte-1uha8ag"></div></div></div> <span class="alb-score svelte-1uha8ag"> </span></div>'),Op=F('<div class="anim-lb svelte-1uha8ag"></div>'),Mp=F('<div><span class="lb-rank svelte-1uha8ag"></span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),Lp=F('<div class="leaderboard svelte-1uha8ag" style="margin-top:0"></div>'),Fp=F("<div> </div> <!> <!>",1),Bp=F('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <span class="q-num svelte-1uha8ag"> </span></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),Wp=F('<div><span class="lb-rank svelte-1uha8ag"> </span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),Up=F('<button class="btn-primary svelte-1uha8ag">Play Again</button>'),$p=F('<p class="sub svelte-1uha8ag">Waiting for host…</p>'),Hp=F('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag">🏆</div> <h2 class="svelte-1uha8ag">Final Results</h2> <div class="leaderboard svelte-1uha8ag" style="width:100%;max-width:480px"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),Vp=F('<div class="center-col svelte-1uha8ag"><p class="err svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">← Home</button></div>'),zp=F('<canvas class="confetti-canvas svelte-1uha8ag"></canvas> <div class="app svelte-1uha8ag"><!></div>',1);function Kp(n,e){Mc(e,!0);const t=ga({projectId:"aktiecase-quiz",appId:"1:52134070639:web:e901510fd6600d489e009a",databaseURL:"https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app",apiKey:"AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4",authDomain:"aktiecase-quiz.firebaseapp.com",messagingSenderId:"52134070639"}),s=Z_(t),i=[{country:"Albania",capital:"Tirana",flag:"🇦🇱"},{country:"Austria",capital:"Vienna",flag:"🇦🇹"},{country:"Belarus",capital:"Minsk",flag:"🇧🇾"},{country:"Belgium",capital:"Brussels",flag:"🇧🇪"},{country:"Bulgaria",capital:"Sofia",flag:"🇧🇬"},{country:"Croatia",capital:"Zagreb",flag:"🇭🇷"},{country:"Czech Republic",capital:"Prague",flag:"🇨🇿"},{country:"Denmark",capital:"Copenhagen",flag:"🇩🇰"},{country:"Estonia",capital:"Tallinn",flag:"🇪🇪"},{country:"Finland",capital:"Helsinki",flag:"🇫🇮"},{country:"France",capital:"Paris",flag:"🇫🇷"},{country:"Germany",capital:"Berlin",flag:"🇩🇪"},{country:"Greece",capital:"Athens",flag:"🇬🇷"},{country:"Hungary",capital:"Budapest",flag:"🇭🇺"},{country:"Iceland",capital:"Reykjavik",flag:"🇮🇸"},{country:"Ireland",capital:"Dublin",flag:"🇮🇪"},{country:"Italy",capital:"Rome",flag:"🇮🇹"},{country:"Latvia",capital:"Riga",flag:"🇱🇻"},{country:"Lithuania",capital:"Vilnius",flag:"🇱🇹"},{country:"Luxembourg",capital:"Luxembourg City",flag:"🇱🇺"},{country:"Netherlands",capital:"Amsterdam",flag:"🇳🇱"},{country:"Norway",capital:"Oslo",flag:"🇳🇴"},{country:"Poland",capital:"Warsaw",flag:"🇵🇱"},{country:"Portugal",capital:"Lisbon",flag:"🇵🇹"},{country:"Romania",capital:"Bucharest",flag:"🇷🇴"},{country:"Serbia",capital:"Belgrade",flag:"🇷🇸"},{country:"Slovakia",capital:"Bratislava",flag:"🇸🇰"},{country:"Slovenia",capital:"Ljubljana",flag:"🇸🇮"},{country:"Spain",capital:"Madrid",flag:"🇪🇸"},{country:"Sweden",capital:"Stockholm",flag:"🇸🇪"},{country:"Switzerland",capital:"Bern",flag:"🇨🇭"},{country:"Ukraine",capital:"Kyiv",flag:"🇺🇦"},{country:"United Kingdom",capital:"London",flag:"🇬🇧"}];function r(_){const p=[..._];for(let m=p.length-1;m>0;m--){const S=Math.floor(Math.random()*(m+1));[p[m],p[S]]=[p[S],p[m]]}return p}function o(_=15){return r(i).slice(0,_).map((p,m)=>{const S=m%2===0,N=S?p.capital:p.country,P=S?i.filter(O=>O.capital!==p.capital).map(O=>O.capital):i.filter(O=>O.country!==p.country).map(O=>O.country);return{prompt:S?`What is the capital of ${p.country}?`:`${p.capital} is the capital of which country?`,flag:p.flag,correct:N,options:r([N,...r(P).slice(0,3)])}})}function a(){if(typeof localStorage>"u")return[];try{return JSON.parse(localStorage.getItem("user_quizzes")??"[]")}catch{return[]}}function c(_){typeof localStorage<"u"&&localStorage.setItem("user_quizzes",JSON.stringify(_))}const h=15,d=[{shape:"▲",color:"#e74c3c"},{shape:"◆",color:"#2980b9"},{shape:"●",color:"#f39c12"},{shape:"■",color:"#27ae60"}],f=["🧠","🎯","🏆","🌍","📚","🎓","💡","🔥","⚡","🎮","🦁","🚀","🎵","🍕","⚽","🏛️","🎨","🦊"];let u=Y("home"),v=Y(""),w=Y(Lt(a())),A=Y("capitals"),I=Y("");const j=oe(()=>[{id:"capitals",title:"European Capitals",emoji:"🌍",questionCount:15},...l(w).map(_=>({id:_.id,title:_.title,emoji:_.emoji,questionCount:_.questions.length}))]);function be(_){if(_==="capitals")return o();const p=l(w).find(m=>m.id===_);return p?r(p.questions):o()}let X=Y(""),de=Y(""),ot=Y("🧠"),ye=Y(Lt([])),pe=Y("");function Xe(){return{prompt:"",imageUrl:"",options:["","","",""],correctIndex:0}}function qe(_){if(_){const p=l(w).find(m=>m.id===_);y(X,_,!0),y(de,p.title,!0),y(ot,p.emoji,!0),y(ye,p.questions.map(m=>({prompt:m.prompt,imageUrl:m.imageUrl??"",options:[...m.options],correctIndex:m.options.indexOf(m.correct)})),!0)}else y(X,""),y(de,""),y(ot,"🧠"),y(ye,[Xe(),Xe(),Xe()],!0);y(pe,""),y(u,"builder")}function kt(){if(y(pe,""),!l(de).trim()){y(pe,"Give your quiz a title.");return}const _=l(ye).filter(S=>S.prompt.trim()&&S.options.every(N=>N.trim()));if(_.length<2){y(pe,"Add at least 2 complete questions (all 4 answers filled in).");return}const p=_.map(S=>({prompt:S.prompt.trim(),...S.imageUrl.trim()?{imageUrl:S.imageUrl.trim()}:{},correct:S.options[S.correctIndex].trim(),options:S.options.map(N=>N.trim())})),m={id:l(X)||crypto.randomUUID(),title:l(de).trim(),emoji:l(ot),questions:p};y(w,l(X)?l(w).map(S=>S.id===l(X)?m:S):[...l(w),m],!0),c(l(w)),y(A,m.id,!0),y(u,"home")}function at(_){confirm("Delete this quiz?")&&(y(w,l(w).filter(p=>p.id!==_),!0),c(l(w)),l(A)===_&&y(A,"capitals"))}let ae=Y(Lt([])),$e=Y(0),we=Y(0),Rn=Y(0),Je=Y(0),At=Y(-1),vt=Y(!1),Ae=null;function kn(){y(vt,!1),Ae&&clearTimeout(Ae),Ae=setTimeout(()=>{y(vt,!0)},1500)}let An=Y(h),xn=Y(Lt([])),lt=null,Lr=0,Fr=0,ms=Y(0),Qt=null;function Al(_,p){Qt&&clearInterval(Qt),y(ms,_,!0);const m=Date.now();Qt=setInterval(()=>{const S=Math.min(1,(Date.now()-m)/1400);y(ms,Math.round(_+(p-_)*(1-Math.pow(1-S,2))),!0),S>=1&&(clearInterval(Qt),Qt=null)},16)}function Br(){y(ae,be(l(A)),!0),y($e,0),y(we,0),y(Je,0),y(xn,[],!0),y(At,-1),y(u,"solo_q"),Wr()}function Wr(){y(At,-1),y(An,h),Lr=Date.now(),kn(),lt&&clearInterval(lt),lt=setInterval(()=>{gi(An,-1),l(An)<=0&&(clearInterval(lt),lt=null,Ur(-1))},1e3)}function Ur(_){if(l(u)!=="solo_q")return;lt&&(clearInterval(lt),lt=null),y(At,_,!0);const p=l(ae)[l($e)],m=_>=0&&p.options[_]===p.correct,S=Math.max(0,h-(Date.now()-Lr)/1e3);let N=0;Fr=l(we),m?(N=100+Math.round(S/h*900)+(l(Je)>=3?100:l(Je)>=2?50:0),y(we,l(we)+N),gi(Je)):y(Je,0),y(xn,[...l(xn),{correct:m,points:N}],!0),Al(Fr,l(we)),y(u,"solo_reveal"),setTimeout(()=>{l($e)+1>=l(ae).length?(l(we)>l(Rn)&&y(Rn,l(we),!0),y(u,"solo_final")):(gi($e),y(u,"solo_q"),Wr())},3500)}const xl=oe(()=>l(An)/h),$r=oe(()=>l(ae)[l($e)]),Dl=oe(()=>l(xn).filter(_=>_.correct).length),xe=typeof crypto<"u"?crypto.randomUUID():Math.random().toString(36).slice(2);let ct=Y(""),yt=Y(""),xt=Y(!1),De=Y(Lt({})),Yt=Y(Lt([])),Ct=Y(0),li=Y(0),Et=Y(-1),vs=Y(h),ys=null,Cs=Y(Lt({})),bt=!1,Dt="",ht=null,Es={},ci=Y(Lt({})),Kt=null;function Pl(){Kt&&clearInterval(Kt),y(ci,Object.fromEntries(Object.entries(l(De)).map(([_,p])=>[_,{score:Es[_]??0,name:p.name}])),!0),setTimeout(()=>{const _=Date.now(),p=2e3;Kt=setInterval(()=>{const m=Math.min(1,(Date.now()-_)/p),S=1-Math.pow(1-m,2);y(ci,Object.fromEntries(Object.entries(l(De)).map(([N,P])=>{const O=Es[N]??0;return[N,{score:Math.round(O+(P.score-O)*S),name:P.name}]})),!0),m>=1&&(clearInterval(Kt),Kt=null)},16)},700)}const hi=oe(()=>Object.entries(l(ci)).sort(([,_],[,p])=>p.score-_.score));function Ol(){const _="ABCDEFGHJKLMNPQRSTUVWXYZ";return Array.from({length:4},()=>_[Math.floor(Math.random()*_.length)]).join("")}async function Ml(){if(!l(ct).trim())return;const _=Ol(),p=be(l(A));y(yt,_,!0),y(xt,!0),await Qo(Qe(s,`rooms/${_}`),{phase:"lobby",hostId:xe,qIndex:0,startTime:0,questions:p,players:{[xe]:{name:l(ct).trim(),score:0,streak:0}}}),Hr(_),y(u,"mp_lobby")}async function Ll(){if(!l(ct).trim()||!l(I).trim())return;const _=l(I).toUpperCase().replace(/[^A-Z]/g,""),p=await Yo(Qe(s,`rooms/${_}`));if(!p.exists()){y(v,"Room not found.");return}if(p.val().phase!=="lobby"){y(v,"Game already started.");return}y(yt,_,!0),y(xt,!1),await Qo(Qe(s,`rooms/${_}/players/${xe}`),{name:l(ct).trim(),score:0,streak:0}),Hr(_),y(u,"mp_lobby")}function Hr(_){Dt="";const p=Qe(s,`rooms/${_}`);ht=q_(p,m=>{var O,U;if(!m.exists()){y(u,"mp_error"),y(v,"Room was closed.");return}const S=m.val();y(De,S.players??{},!0),l(Yt).length||y(Yt,S.questions??[],!0);const N=S.phase??"lobby",P=S.qIndex??0;if(N==="question"&&l(xt)&&!bt){const T=((O=S.answers)==null?void 0:O[P])??{};Object.keys(T).length>=Object.keys(l(De)).length&&(bt=!0,en(Qe(s,`rooms/${_}`),{phase:"reveal"}))}if(N==="question"&&(Dt!=="question"||P!==l(Ct)))Es=Object.fromEntries(Object.entries(l(De)).map(([T,x])=>[T,x.score])),y(Ct,P,!0),y(li,S.startTime??Date.now(),!0),y(Et,-1),y(Cs,{},!0),Fl(l(li)),kn(),y(u,"mp_question");else if(N==="reveal"&&Dt!=="reveal"){if(y(Cs,((U=S.answers)==null?void 0:U[P])??{},!0),y(Ct,P,!0),Dn(),Pl(),y(u,"mp_reveal"),l(xt)){const T=P;setTimeout(async()=>{await en(Qe(s,`rooms/${_}`),T+1>=l(Yt).length?{phase:"final"}:{phase:"question",qIndex:T+1,startTime:Date.now()}),bt=!1},6e3)}}else N==="final"&&Dt!=="final"?(Dn(),y(u,"mp_final")):N==="lobby"&&Dt!=="lobby"&&Dt!==""&&(y(Yt,S.questions??[],!0),y(Ct,0),y(Et,-1),bt=!1,y(u,"mp_lobby"));Dt=N})}function Fl(_){Dn();const p=()=>{y(vs,Math.max(0,h-(Date.now()-_)/1e3),!0),l(vs)<=0&&(Dn(),l(Et)<0&&Vr(-1),l(xt)&&!bt&&(bt=!0,en(Qe(s,`rooms/${l(yt)}`),{phase:"reveal"})))};p(),ys=setInterval(p,150)}function Dn(){ys&&(clearInterval(ys),ys=null)}async function Bl(){bt=!1,Dt="lobby",await en(Qe(s,`rooms/${l(yt)}`),{phase:"question",qIndex:0,startTime:Date.now()})}async function Vr(_){if(l(Et)>=0||l(u)!=="mp_question")return;y(Et,_,!0);const p=l(Yt)[l(Ct)],m=Date.now()-l(li),S=_>=0&&p.options[_]===p.correct,N=l(De)[xe]??{score:0,streak:0};let P=0,O=N.streak??0;if(S?(P=100+Math.round(Math.max(0,h-m/1e3)/h*900)+(O>=3?100:O>=2?50:0),O++):O=0,await en(Qe(s,`rooms/${l(yt)}`),{[`answers/${l(Ct)}/${xe}`]:{choice:_,timeMs:m,points:P,correct:S},[`players/${xe}/score`]:(N.score??0)+P,[`players/${xe}/streak`]:O}),l(xt)&&!bt){const U=await Yo(Qe(s,`rooms/${l(yt)}/answers/${l(Ct)}`));Object.keys(U.val()??{}).length>=Object.keys(l(De)).length&&(bt=!0,await en(Qe(s,`rooms/${l(yt)}`),{phase:"reveal"}))}}async function Wl(){const _=be(l(A));await en(Qe(s,`rooms/${l(yt)}`),{phase:"lobby",qIndex:0,startTime:0,questions:_,answers:null,players:Object.fromEntries(Object.entries(l(De)).map(([p,m])=>[p,{...m,score:0,streak:0}]))})}const Ul=oe(()=>l(vs)/h),zr=oe(()=>l(Yt)[l(Ct)]),ui=oe(()=>Object.entries(l(De)).sort(([,_],[,p])=>p.score-_.score)),bs=oe(()=>l(Cs)[xe]);function qr(_){return["🥇","🥈","🥉"][_]??`${_+1}.`}let ws=Y(void 0),Pn=0;function $l(){if(!l(ws))return;cancelAnimationFrame(Pn);const _=l(ws);_.width=window.innerWidth,_.height=window.innerHeight;const p=_.getContext("2d"),m=["#e74c3c","#3498db","#f1c40f","#2ecc71","#9b59b6","#e67e22","#ff6b6b","#1abc9c","#fff"],S=Array.from({length:140},()=>({x:Math.random()*_.width,y:-10-Math.random()*300,vx:(Math.random()-.5)*4,vy:1.5+Math.random()*3.5,rot:Math.random()*Math.PI*2,rv:(Math.random()-.5)*.18,color:m[Math.floor(Math.random()*m.length)],w:7+Math.random()*9,h:3+Math.random()*5})),N=Date.now();function P(){p.clearRect(0,0,_.width,_.height);const O=Date.now()-N,U=Math.max(0,1-(O-3e3)/2500);if(U<=0){p.clearRect(0,0,_.width,_.height);return}for(const T of S)T.x+=T.vx,T.y+=T.vy,T.vy+=.06,T.rot+=T.rv,T.y>_.height+20&&(T.y=-10,T.x=Math.random()*_.width,T.vy=1.5+Math.random()*2),p.save(),p.globalAlpha=U,p.translate(T.x,T.y),p.rotate(T.rot),p.fillStyle=T.color,p.fillRect(-T.w/2,-T.h/2,T.w,T.h),p.restore();Pn=requestAnimationFrame(P)}Pn=requestAnimationFrame(P)}Lc(()=>{l(u)==="solo_final"||l(u)==="mp_final"?setTimeout($l,100):cancelAnimationFrame(Pn)}),ic(()=>{lt&&clearInterval(lt),Qt&&clearInterval(Qt),Dn(),Kt&&clearInterval(Kt),Ae&&clearTimeout(Ae),cancelAnimationFrame(Pn),ht==null||ht()});var Gr=zp();Gc("1uha8ag",_=>{Bc(()=>{Wc.title="Quiz"})});var jr=pi(Gr);Hc(jr,_=>y(ws,_),()=>l(ws));var Qr=b(jr,2),Hl=C(Qr);{var Vl=_=>{var p=rp(),m=b(C(p),4),S=C(m);pt(S,17,()=>l(j),_t,(J,q)=>{var M=sp();let le;var ge=C(M),Pe=C(ge,!0);g(ge);var He=b(ge,2),Ge=C(He,!0);g(He);var Fe=b(He,2),Oe=C(Fe);g(Fe);var ut=b(Fe,2);{var Xt=ne=>{var Z=np(),D=C(Z),B=b(D,2);g(Z),ee("click",D,W=>{W.stopPropagation(),qe(l(q).id)}),ee("keydown",D,W=>W.key==="Enter"&&qe(l(q).id)),ee("click",B,W=>{W.stopPropagation(),at(l(q).id)}),ee("keydown",B,W=>W.key==="Enter"&&at(l(q).id)),L(ne,Z)};_e(ut,ne=>{l(q).id!=="capitals"&&ne(Xt)})}g(M),G(()=>{le=tt(M,1,"quiz-card svelte-1uha8ag",null,le,{selected:l(A)===l(q).id}),k(Pe,l(q).emoji),k(Ge,l(q).title),k(Oe,`${l(q).questionCount??""} questions`)}),ee("click",M,()=>y(A,l(q).id,!0)),L(J,M)});var N=b(S,2);g(m);var P=b(m,2),O=C(P),U=b(O,2);g(P);var T=b(P,2),x=C(T);Zt(x),nt(x,"maxlength",4);var z=b(x,2);g(T);var ce=b(T,2);{var Ie=J=>{var q=ip(),M=C(q,!0);g(q),G(()=>k(M,l(v))),L(J,q)};_e(ce,J=>{l(v)&&J(Ie)})}g(p),G(J=>z.disabled=J,[()=>!l(I).trim()]),ee("click",N,()=>qe()),ee("click",O,Br),ee("click",U,()=>{y(v,""),y(u,"mp_create")}),Wt(x,()=>l(I),J=>y(I,J)),ee("click",z,()=>{y(v,""),y(u,"mp_join")}),L(_,p)},zl=_=>{var p=up(),m=C(p),S=C(m),N=b(S,2),P=C(N,!0);g(N);var O=b(N,2);g(m);var U=b(m,2),T=C(U);pt(T,21,()=>f,_t,(q,M)=>{var le=op();let ge;var Pe=C(le,!0);g(le),G(()=>{ge=tt(le,1,"ep-btn svelte-1uha8ag",null,ge,{"ep-selected":l(ot)===l(M)}),k(Pe,l(M))}),ee("click",le,()=>y(ot,l(M),!0)),L(q,le)}),g(T);var x=b(T,2);Zt(x),g(U);var z=b(U,2);{var ce=q=>{var M=ap(),le=C(M,!0);g(M),G(()=>k(le,l(pe))),L(q,M)};_e(z,q=>{l(pe)&&q(ce)})}var Ie=b(z,2);pt(Ie,21,()=>l(ye),_t,(q,M,le)=>{var ge=hp(),Pe=C(ge),He=C(Pe);He.textContent=`Q${le+1}`;var Ge=b(He,2);g(Pe);var Fe=b(Pe,2);Uc(Fe),nt(Fe,"rows",2);var Oe=b(Fe,2),ut=C(Oe);Zt(ut);var Xt=b(ut,2);{var ne=B=>{var W=lp();G(()=>nt(W,"src",l(M).imageUrl)),Ts("error",W,Q=>{Q.target.style.display="none"}),Ts("load",W,Q=>{Q.target.style.display="block"}),mi(W),L(B,W)},Z=oe(()=>l(M).imageUrl.trim());_e(Xt,B=>{l(Z)&&B(ne)})}g(Oe);var D=b(Oe,4);pt(D,21,()=>l(M).options,_t,(B,W,Q)=>{var Re=cp();let fe;var Ve=C(Re),je=C(Ve,!0);g(Ve);var Be=b(Ve,2);Zt(Be),nt(Be,"placeholder",`Answer ${Q+1}`),g(Re),G(()=>{fe=tt(Re,1,"bq-opt-row svelte-1uha8ag",null,fe,{"bq-correct":l(M).correctIndex===Q}),k(je,l(M).correctIndex===Q?"✓":d[Q].shape)}),ee("click",Ve,()=>l(M).correctIndex=Q),ee("click",Be,()=>l(M).correctIndex=Q),Wt(Be,()=>l(M).options[Q],Se=>l(M).options[Q]=Se),L(B,Re)}),g(D),g(ge),G(()=>Ge.disabled=l(ye).length<=1),ee("click",Ge,()=>y(ye,l(ye).filter((B,W)=>W!==le),!0)),Wt(Fe,()=>l(M).prompt,B=>l(M).prompt=B),Wt(ut,()=>l(M).imageUrl,B=>l(M).imageUrl=B),L(q,ge)}),g(Ie);var J=b(Ie,2);g(p),G(()=>k(P,l(X)?"Edit Quiz":"New Quiz")),ee("click",S,()=>y(u,"home")),ee("click",O,kt),Wt(x,()=>l(de),q=>y(de,q)),ee("click",J,()=>y(ye,[...l(ye),Xe()],!0)),L(_,p)},ql=_=>{var p=fp(),m=b(C(p),2),S=C(m);g(m);var N=b(m,2);Zt(N),nt(N,"maxlength",20);var P=b(N,2);{var O=x=>{var z=dp(),ce=C(z,!0);g(z),G(()=>k(ce,l(v))),L(x,z)};_e(P,x=>{l(v)&&x(O)})}var U=b(P,2),T=b(U,2);g(p),G((x,z,ce)=>{k(S,`Playing: ${x??""} ${z??""}`),U.disabled=ce},[()=>{var x;return(x=l(j).find(z=>z.id===l(A)))==null?void 0:x.emoji},()=>{var x;return(x=l(j).find(z=>z.id===l(A)))==null?void 0:x.title},()=>!l(ct).trim()]),Wt(N,()=>l(ct),x=>y(ct,x)),ee("click",U,Ml),ee("click",T,()=>y(u,"home")),L(_,p)},Gl=_=>{var p=pp(),m=b(C(p),2);Zt(m),nt(m,"maxlength",4);var S=b(m,2);Zt(S),nt(S,"maxlength",20);var N=b(S,2);{var P=T=>{var x=_p(),z=C(x,!0);g(x),G(()=>k(z,l(v))),L(T,x)};_e(N,T=>{l(v)&&T(P)})}var O=b(N,2),U=b(O,2);g(p),G(T=>O.disabled=T,[()=>!l(ct).trim()||!l(I).trim()]),Wt(m,()=>l(I),T=>y(I,T)),Wt(S,()=>l(ct),T=>y(ct,T)),ee("click",O,Ll),ee("click",U,()=>y(u,"home")),L(_,p)},jl=_=>{var p=yp(),m=b(C(p),2),S=C(m,!0);g(m);var N=b(m,4);pt(N,21,()=>Object.entries(l(De)),_t,(x,z)=>{var ce=oe(()=>Ss(l(z),2));let Ie=()=>l(ce)[0],J=()=>l(ce)[1];var q=gp(),M=C(q);let le;var ge=b(M);g(q),G(()=>{le=tt(M,1,"dot svelte-1uha8ag",null,le,{"dot-me":Ie()===xe}),k(ge,` ${J().name??""}${Ie()===xe?" (you)":""}`)}),L(x,q)}),g(N);var P=b(N,2);{var O=x=>{var z=mp(),ce=C(z);g(z),G((Ie,J)=>k(ce,`Start (${Ie??""} player${J??""})`),[()=>Object.keys(l(De)).length,()=>Object.keys(l(De)).length!==1?"s":""]),ee("click",z,Bl),L(x,z)},U=x=>{var z=vp();L(x,z)};_e(P,x=>{l(xt)?x(O):x(U,-1)})}var T=b(P,2);g(p),G(()=>k(S,l(yt))),ee("click",T,()=>{ht==null||ht(),y(u,"home")}),L(_,p)},Ql=_=>{const p=oe(()=>l(xl)),m=oe(()=>l($r));var S=Tp(),N=C(S),P=C(N),O=C(P);g(P);var U=b(P,2),T=C(U);g(U);var x=b(U,2);{var z=ne=>{var Z=Cp(),D=C(Z);g(Z),G(()=>k(D,`🔥 ${l(Je)??""}`)),L(ne,Z)};_e(x,ne=>{l(Je)>=2&&ne(z)})}g(N);var ce=b(N,2),Ie=C(ce);g(ce);var J=b(ce,2),q=C(J,!0);g(J);var M=b(J,2),le=C(M);{var ge=ne=>{var Z=Ep();G(()=>nt(Z,"src",l(m).imageUrl)),Ts("error",Z,D=>D.target.style.display="none"),mi(Z),L(ne,Z)};_e(le,ne=>{l(m).imageUrl&&ne(ge)})}var Pe=b(le,2);{var He=ne=>{var Z=bp(),D=C(Z,!0);g(Z),G(()=>k(D,l(m).flag)),L(ne,Z)};_e(Pe,ne=>{l(m).flag&&ne(He)})}var Ge=b(Pe,2),Fe=C(Ge,!0);g(Ge),g(M);var Oe=b(M,2);pt(Oe,21,()=>l(m).options,_t,(ne,Z,D)=>{const B=oe(()=>l(Z)===l(m).correct),W=oe(()=>D===l(At));var Q=wp();let Re;var fe=C(Q),Ve=C(fe,!0);g(fe);var je=b(fe,2),Be=C(je,!0);g(je),g(Q),G(()=>{Re=tt(Q,1,"opt svelte-1uha8ag",null,Re,{revealed:l(u)==="solo_reveal","opt-correct":l(u)==="solo_reveal"&&l(B),"opt-wrong":l(u)==="solo_reveal"&&l(W)&&!l(B),"opt-dim":l(u)==="solo_reveal"&&!l(W)&&!l(B),"opts-hidden":!l(vt)&&l(u)==="solo_q"}),Bt(Q,`--c:${d[D].color??""};--delay:${D*80}ms`),Q.disabled=l(u)==="solo_reveal"||!l(vt),k(Ve,l(u)==="solo_reveal"?l(B)?"✓":l(W)?"✗":d[D].shape:d[D].shape),k(Be,l(Z))}),ee("click",Q,()=>Ur(D)),L(ne,Q)}),g(Oe);var ut=b(Oe,2);{var Xt=ne=>{const Z=oe(()=>l(xn)[l($e)]);var D=Sp(),B=pi(D);let W;var Q=C(B,!0);g(B);var Re=b(B,2),fe=C(Re),Ve=b(C(fe),2);{var je=ft=>{var ze=Ip(),Ze=C(ze);g(ze),G(()=>k(Ze,`+${l(Z).points??""}${l(Je)>1?" 🔥":""}`)),L(ft,ze)};_e(Ve,ft=>{var ze;((ze=l(Z))==null?void 0:ze.points)>0&&ft(je)})}g(fe);var Be=b(fe,2),Se=C(Be,!0);g(Be);var We=b(Be,2),dt=C(We);g(We);var wt=b(We,2),Pt=C(wt);g(wt),g(Re),G((ft,ze)=>{var Ze,et,Ot;W=tt(B,1,"banner svelte-1uha8ag",null,W,{"banner-ok":(Ze=l(Z))==null?void 0:Ze.correct,"banner-err":!((et=l(Z))!=null&&et.correct)}),k(Q,(Ot=l(Z))!=null&&Ot.correct?"🎉 Correct!":l(At)===-1?`⏱ Time's up! → ${l(m).correct}`:`❌ Wrong! → ${l(m).correct}`),k(Se,ft),Bt(dt,`width:${ze??""}%`),k(Pt,`${l($e)+1} / ${l(ae).length??""} frågor`)},[()=>l(ms).toLocaleString(),()=>Math.min(100,l(ms)/(l(ae).length*1e3)*100)]),L(ne,D)};_e(ut,ne=>{l(u)==="solo_reveal"&&ne(Xt)})}g(S),G(ne=>{k(O,`${l($e)+1} / ${l(ae).length??""}`),k(T,`⭐ ${ne??""}`),Bt(Ie,`width:${l(p)*100}%;background:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),Bt(J,`color:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),k(q,l(An)),k(Fe,l(m).prompt)},[()=>l(we).toLocaleString()]),L(_,S)},Yl=_=>{var p=Np(),m=C(p),S=C(m,!0);g(m);var N=b(m,4),P=C(N,!0);g(N);var O=b(N,2),U=C(O);g(O);var T=b(O,2),x=b(T,2);g(p),G(z=>{k(S,l(we)>=l(ae).length*900?"🥇":l(we)>=l(ae).length*600?"🥈":l(we)>=l(ae).length*300?"🥉":"🎯"),k(P,z),k(U,`${l(Dl)??""}/${l(ae).length??""} correct`)},[()=>l(we).toLocaleString()]),ee("click",T,Br),ee("click",x,()=>y(u,"home")),L(_,p)},Kl=_=>{const p=oe(()=>l(Ul)),m=oe(()=>l(zr));var S=Bp(),N=C(S),P=C(N),O=C(P);g(P);var U=b(P,2),T=C(U);g(U);var x=b(U,2),z=C(x);g(x),g(N);var ce=b(N,2),Ie=C(ce);g(ce);var J=b(ce,2),q=C(J,!0);g(J);var M=b(J,2),le=C(M);{var ge=D=>{var B=Rp();G(()=>nt(B,"src",l(m).imageUrl)),Ts("error",B,W=>W.target.style.display="none"),mi(B),L(D,B)};_e(le,D=>{l(m).imageUrl&&D(ge)})}var Pe=b(le,2);{var He=D=>{var B=kp(),W=C(B,!0);g(B),G(()=>k(W,l(m).flag)),L(D,B)};_e(Pe,D=>{l(m).flag&&D(He)})}var Ge=b(Pe,2),Fe=C(Ge,!0);g(Ge),g(M);var Oe=b(M,2);pt(Oe,21,()=>l(m).options,_t,(D,B,W)=>{const Q=oe(()=>l(B)===l(m).correct),Re=oe(()=>W===l(Et));var fe=Ap();let Ve;var je=C(fe),Be=C(je,!0);g(je);var Se=b(je,2),We=C(Se,!0);g(Se),g(fe),G(()=>{Ve=tt(fe,1,"opt svelte-1uha8ag",null,Ve,{revealed:l(u)==="mp_reveal","opt-correct":l(u)==="mp_reveal"&&l(Q),"opt-wrong":l(u)==="mp_reveal"&&l(Re)&&!l(Q),"opt-dim":l(u)==="mp_reveal"&&!l(Re)&&!l(Q),"opts-hidden":!l(vt)&&l(u)==="mp_question"}),Bt(fe,`--c:${d[W].color??""};--delay:${W*80}ms`),fe.disabled=l(u)==="mp_reveal"||l(Et)>=0||!l(vt),k(Be,l(u)==="mp_reveal"?l(Q)?"✓":l(Re)?"✗":d[W].shape:d[W].shape),k(We,l(B))}),ee("click",fe,()=>Vr(W)),L(D,fe)}),g(Oe);var ut=b(Oe,2);{var Xt=D=>{var B=xp();L(D,B)};_e(ut,D=>{l(u)==="mp_question"&&l(Et)>=0&&D(Xt)})}var ne=b(ut,2);{var Z=D=>{var B=Fp(),W=pi(B);let Q;var Re=C(W,!0);g(W);var fe=b(W,2);{var Ve=Se=>{const We=oe(()=>{var wt,Pt;return((Pt=(wt=l(hi)[0])==null?void 0:wt[1])==null?void 0:Pt.score)||1});var dt=Op();pt(dt,21,()=>l(hi).slice(0,3),_t,(wt,Pt,ft)=>{var ze=oe(()=>Ss(l(Pt),2));let Ze=()=>l(ze)[0],et=()=>l(ze)[1];const Ot=oe(()=>{var Mt;return(((Mt=l(De)[Ze()])==null?void 0:Mt.score)??0)-(Es[Ze()]??0)});var Jt=Pp();let hn;var On=C(Jt),Is=C(On,!0);g(On);var Mn=b(On,2),Ln=C(Mn),di=C(Ln),Zl=C(di,!0);g(di);var ec=b(di,2);{var tc=Mt=>{var Fn=Dp(),fi=C(Fn);g(Fn),G(()=>k(fi,`+${l(Ot)??""}`)),L(Mt,Fn)};_e(ec,Mt=>{l(Ot)>0&&Mt(tc)})}g(Ln);var Yr=b(Ln,2),nc=C(Yr);g(Yr),g(Mn);var Kr=b(Mn,2),sc=C(Kr,!0);g(Kr),g(Jt),G((Mt,Fn,fi)=>{hn=tt(Jt,1,"alb-row svelte-1uha8ag",null,hn,{"alb-me":Ze()===xe}),k(Is,Mt),k(Zl,et().name),Bt(nc,`width:${Fn??""}%`),k(sc,fi)},[()=>qr(ft),()=>Math.max(4,et().score/l(We)*100),()=>et().score.toLocaleString()]),L(wt,Jt)}),g(dt),L(Se,dt)};_e(fe,Se=>{l(hi).length>0&&Se(Ve)})}var je=b(fe,2);{var Be=Se=>{var We=Lp();pt(We,21,()=>l(ui).slice(3),_t,(dt,wt,Pt)=>{var ft=oe(()=>Ss(l(wt),2));let ze=()=>l(ft)[0],Ze=()=>l(ft)[1];var et=Mp();let Ot;var Jt=C(et);Jt.textContent=`${Pt+4}.`;var hn=b(Jt,2),On=C(hn,!0);g(hn);var Is=b(hn,2),Mn=C(Is,!0);g(Is),g(et),G(Ln=>{Ot=tt(et,1,"lb-row svelte-1uha8ag",null,Ot,{"lb-me":ze()===xe}),k(On,Ze().name),k(Mn,Ln)},[()=>Ze().score.toLocaleString()]),L(dt,et)}),g(We),L(Se,We)};_e(je,Se=>{l(ui).length>3&&Se(Be)})}G(()=>{var Se,We,dt;Q=tt(W,1,"banner svelte-1uha8ag",null,Q,{"banner-ok":(Se=l(bs))==null?void 0:Se.correct,"banner-err":!((We=l(bs))!=null&&We.correct)}),k(Re,(dt=l(bs))!=null&&dt.correct?`🎉 +${l(bs).points} pts`:l(Et)===-1?`⏱ Time's up! → ${l(m).correct}`:`❌ Wrong! → ${l(m).correct}`)}),L(D,B)};_e(ne,D=>{l(u)==="mp_reveal"&&D(Z)})}g(S),G((D,B,W,Q)=>{k(O,`${l(Ct)+1} / ${l(Yt).length??""}`),k(T,`⭐ ${D??""}`),k(z,`👥 ${B??""}/${W??""}`),Bt(Ie,`width:${l(p)*100}%;background:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),Bt(J,`color:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),k(q,Q),k(Fe,l(m).prompt)},[()=>{var D;return(((D=l(De)[xe])==null?void 0:D.score)??0).toLocaleString()},()=>Object.keys(l(Cs)).length,()=>Object.keys(l(De)).length,()=>Math.ceil(l(vs))]),L(_,S)},Xl=_=>{var p=Hp(),m=b(C(p),4);pt(m,21,()=>l(ui),_t,(U,T,x)=>{var z=oe(()=>Ss(l(T),2));let ce=()=>l(z)[0],Ie=()=>l(z)[1];var J=Wp();let q;var M=C(J),le=C(M,!0);g(M);var ge=b(M,2),Pe=C(ge);g(ge);var He=b(ge,2),Ge=C(He,!0);g(He),g(J),G((Fe,Oe)=>{q=tt(J,1,"lb-row svelte-1uha8ag",null,q,{"lb-me":ce()===xe,"lb-gold":x===0}),k(le,Fe),k(Pe,`${Ie().name??""}${ce()===xe?" (you)":""}`),k(Ge,Oe)},[()=>qr(x),()=>Ie().score.toLocaleString()]),L(U,J)}),g(m);var S=b(m,2);{var N=U=>{var T=Up();ee("click",T,Wl),L(U,T)},P=U=>{var T=$p();L(U,T)};_e(S,U=>{l(xt)?U(N):U(P,-1)})}var O=b(S,2);g(p),ee("click",O,()=>{ht==null||ht(),y(u,"home")}),L(_,p)},Jl=_=>{var p=Vp(),m=C(p),S=C(m,!0);g(m);var N=b(m,2);g(p),G(()=>k(S,l(v))),ee("click",N,()=>y(u,"home")),L(_,p)};_e(Hl,_=>{l(u)==="home"?_(Vl):l(u)==="builder"?_(zl,1):l(u)==="mp_create"?_(ql,2):l(u)==="mp_join"?_(Gl,3):l(u)==="mp_lobby"?_(jl,4):(l(u)==="solo_q"||l(u)==="solo_reveal")&&l($r)?_(Ql,5):l(u)==="solo_final"?_(Yl,6):(l(u)==="mp_question"||l(u)==="mp_reveal")&&l(zr)?_(Kl,7):l(u)==="mp_final"?_(Xl,8):l(u)==="mp_error"&&_(Jl,9)})}g(Qr),L(n,Gr),Fc()}$c(["click","keydown"]);export{Kp as component};
