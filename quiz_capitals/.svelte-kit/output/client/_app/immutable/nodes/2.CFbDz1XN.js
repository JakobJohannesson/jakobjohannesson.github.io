import{a as M,f as L}from"../chunks/BWRt2y-Q.js";import{a as Kl}from"../chunks/DF0VU7MB.js";import{h as Te,c as $n,C as zo,i as Ss,a as Xl,b as qo,J as l,r as Jl,P as Zl,s as qr,d as Hn,e as Wn,a8 as Go,ag as ec,_ as Gr,k as cn,j as Ri,aE as tc,l as nc,aF as jo,av as sc,aG as ic,af as Xi,aH as rc,L as jr,aI as oc,aJ as ac,az as lc,aK as ct,ar as cc,f as Qo,p as Yo,aL as di,M as Ko,aM as hc,aN as uc,ad as dc,m as fc,g as _c,aa as ki,aO as pc,a1 as gc,aP as mc,aQ as vc,aR as yc,aS as Cc,aT as Ec,aU as bc,aV as wc,aB as Ic,o as Sc,K as Tc,t as Nc,aC as Q,ao as xt,w as Rc,ai as kc,x as E,y as m,aD as oe,aW as Ac,z as b,v as G,ap as v,aX as xc,q as Dc,aY as Es,aZ as fi}from"../chunks/DpYGvlyP.js";import{d as Pc,a as Z,s as P,e as bs,r as _i}from"../chunks/BiCfskr2.js";import{i as de}from"../chunks/CSLQBlsr.js";function at(n,e){return e}function Oc(n,e,t){for(var s=[],i=e.length,r,o=e.length,a=0;a<i;a++){let f=e[a];Yo(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var u=n.outrogroups;Ai(n,Xi(r.done)),u.delete(r),u.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=s.length===0&&t!==null;if(c){var h=t,d=h.parentNode;dc(d),d.append(h),n.items.clear()}Ai(n,e,!c)}else r={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Ai(n,e,t=!0){var s;if(n.pending.size>0){s=new Set;for(const o of n.pending.values())for(const a of o)s.add(n.items.get(a).e)}for(var i=0;i<e.length;i++){var r=e[i];if(s!=null&&s.has(r)){r.f|=ct;const o=document.createDocumentFragment();fc(r,o)}else _c(e[i],t)}}var Qr;function lt(n,e,t,s,i,r=null){var o=n,a=new Map,c=(e&jo)!==0;if(c){var h=n;o=Te?$n(zo(h)):h.appendChild(Ss())}Te&&Xl();var d=null,f=sc(()=>{var K=t();return ic(K)?K:K==null?[]:Xi(K)}),u,g=new Map,w=!0;function x(K){(Ee.effect.f&cc)===0&&(Ee.pending.delete(K),Ee.fallback=d,Mc(Ee,u,o,e,s),d!==null&&(u.length===0?(d.f&ct)===0?Qo(d):(d.f^=ct,Un(d,null,o)):Yo(d,()=>{d=null})))}function I(K){Ee.pending.delete(K)}var j=qo(()=>{u=l(f);var K=u.length;let ue=!1;if(Te){var tt=Jl(o)===Zl;tt!==(K===0)&&(o=qr(),$n(o),Hn(!1),ue=!0)}for(var me=new Set,fe=cn,Ge=nc(),Ue=0;Ue<K;Ue+=1){Te&&Wn.nodeType===Go&&Wn.data===ec&&(o=Wn,ue=!0,Hn(!1));var wt=u[Ue],nt=s(wt,Ue),le=w?null:a.get(nt);le?(le.v&&Gr(le.v,wt),le.i&&Gr(le.i,Ue),Ge&&fe.unskip_effect(le.e)):(le=Lc(a,w?o:Qr??(Qr=Ss()),wt,nt,Ue,i,e,t),w||(le.e.f|=ct),a.set(nt,le)),me.add(nt)}if(K===0&&r&&!d&&(w?d=Ri(()=>r(o)):(d=Ri(()=>r(Qr??(Qr=Ss()))),d.f|=ct)),K>me.size&&tc(),Te&&K>0&&$n(qr()),!w)if(g.set(fe,me),Ge){for(const[Ne,Re]of a)me.has(Ne)||fe.skip_effect(Re.e);fe.oncommit(x),fe.ondiscard(I)}else x(fe);ue&&Hn(!0),l(f)}),Ee={effect:j,items:a,pending:g,outrogroups:null,fallback:d};w=!1,Te&&(o=Wn)}function On(n){for(;n!==null&&(n.f&hc)===0;)n=n.next;return n}function Mc(n,e,t,s,i){var wt,nt,le,Ne,Re,Sn,je,It,ut;var r=(s&uc)!==0,o=e.length,a=n.items,c=On(n.effect.first),h,d=null,f,u=[],g=[],w,x,I,j;if(r)for(j=0;j<o;j+=1)w=e[j],x=i(w,j),I=a.get(x).e,(I.f&ct)===0&&((nt=(wt=I.nodes)==null?void 0:wt.a)==null||nt.measure(),(f??(f=new Set)).add(I));for(j=0;j<o;j+=1){if(w=e[j],x=i(w,j),I=a.get(x).e,n.outrogroups!==null)for(const ke of n.outrogroups)ke.pending.delete(I),ke.done.delete(I);if((I.f&di)!==0&&(Qo(I),r&&((Ne=(le=I.nodes)==null?void 0:le.a)==null||Ne.unfix(),(f??(f=new Set)).delete(I))),(I.f&ct)!==0)if(I.f^=ct,I===c)Un(I,null,t);else{var Ee=d?d.next:c;I===n.effect.last&&(n.effect.last=I.prev),I.prev&&(I.prev.next=I.next),I.next&&(I.next.prev=I.prev),Dt(n,d,I),Dt(n,I,Ee),Un(I,Ee,t),d=I,u=[],g=[],c=On(d.next);continue}if(I!==c){if(h!==void 0&&h.has(I)){if(u.length<g.length){var K=g[0],ue;d=K.prev;var tt=u[0],me=u[u.length-1];for(ue=0;ue<u.length;ue+=1)Un(u[ue],K,t);for(ue=0;ue<g.length;ue+=1)h.delete(g[ue]);Dt(n,tt.prev,me.next),Dt(n,d,tt),Dt(n,me,K),c=K,d=me,j-=1,u=[],g=[]}else h.delete(I),Un(I,c,t),Dt(n,I.prev,I.next),Dt(n,I,d===null?n.effect.first:d.next),Dt(n,d,I),d=I;continue}for(u=[],g=[];c!==null&&c!==I;)(h??(h=new Set)).add(c),g.push(c),c=On(c.next);if(c===null)continue}(I.f&ct)===0&&u.push(I),d=I,c=On(I.next)}if(n.outrogroups!==null){for(const ke of n.outrogroups)ke.pending.size===0&&(Ai(n,Xi(ke.done)),(Re=n.outrogroups)==null||Re.delete(ke));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var fe=[];if(h!==void 0)for(I of h)(I.f&di)===0&&fe.push(I);for(;c!==null;)(c.f&di)===0&&c!==n.fallback&&fe.push(c),c=On(c.next);var Ge=fe.length;if(Ge>0){var Ue=(s&jo)!==0&&o===0?t:null;if(r){for(j=0;j<Ge;j+=1)(je=(Sn=fe[j].nodes)==null?void 0:Sn.a)==null||je.measure();for(j=0;j<Ge;j+=1)(ut=(It=fe[j].nodes)==null?void 0:It.a)==null||ut.fix()}Oc(n,fe,Ue)}}r&&Ko(()=>{var ke,Tn;if(f!==void 0)for(I of f)(Tn=(ke=I.nodes)==null?void 0:ke.a)==null||Tn.apply()})}function Lc(n,e,t,s,i,r,o,a){var c=(o&oc)!==0?(o&ac)===0?lc(t,!1,!1):jr(t):null,h=(o&rc)!==0?jr(i):null;return{v:c,i:h,e:Ri(()=>(r(e,c??t,h??i,a),()=>{n.delete(s)}))}}function Un(n,e,t){if(n.nodes)for(var s=n.nodes.start,i=n.nodes.end,r=e&&(e.f&ct)===0?e.nodes.start:t;s!==null;){var o=ki(s);if(r.before(s),s===i)return;s=o}}function Dt(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Fc(n,e){let t=null,s=Te;var i;if(Te){t=Wn;for(var r=zo(document.head);r!==null&&(r.nodeType!==Go||r.data!==n);)r=ki(r);if(r===null)Hn(!1);else{var o=ki(r);r.remove(),$n(o)}}Te||(i=document.head.appendChild(Ss()));try{qo(()=>e(i),pc|gc)}finally{s&&(Hn(!0),$n(t))}}const Yr=[...` 	
\r\f \v\uFEFF`];function Bc(n,e,t){var s=n==null?"":""+n;if(t){for(var i of Object.keys(t))if(t[i])s=s?s+" "+i:i;else if(s.length)for(var r=i.length,o=0;(o=s.indexOf(i,o))>=0;){var a=o+r;(o===0||Yr.includes(s[o-1]))&&(a===s.length||Yr.includes(s[a]))?s=(o===0?"":s.substring(0,o))+s.substring(a+1):o=a}}return s===""?null:s}function Wc(n,e){return n==null?null:String(n)}function Ke(n,e,t,s,i,r){var o=n.__className;if(Te||o!==t||o===void 0){var a=Bc(t,s,r);(!Te||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=t}else if(r&&i!==r)for(var c in r){var h=!!r[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return r}function Gt(n,e,t,s){var i=n.__style;if(Te||i!==e){var r=Wc(e);(!Te||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n.__style=e}return s}const Uc=Symbol("is custom element"),$c=Symbol("is html"),Hc=bc?"link":"LINK";function jt(n){if(Te){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;Xe(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;Xe(n,"checked",null),n.checked=i}}};n.__on_r=t,Ko(t),mc()}}function Xe(n,e,t,s){var i=Vc(n);Te&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===Hc)||i[e]!==(i[e]=t)&&(e==="loading"&&(n[Cc]=t),t==null?n.removeAttribute(e):typeof t!="string"&&zc(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Vc(n){return n.__attributes??(n.__attributes={[Uc]:n.nodeName.includes("-"),[$c]:n.namespaceURI===vc})}var Kr=new Map;function zc(n){var e=n.getAttribute("is")||n.nodeName,t=Kr.get(e);if(t)return t;Kr.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=Ec(i);for(var o in s)s[o].set&&t.push(o);i=yc(i)}return t}function Pt(n,e,t=e){var s=new WeakSet;wc(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=pi(n)?gi(r):r,t(r),cn!==null&&s.add(cn),await Ic(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,c=n.value.length;if(n.value=r??"",a!==null){var h=n.value.length;o===a&&a===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=o,n.selectionEnd=Math.min(a,h))}}}),(Te&&n.defaultValue!==n.value||Sc(e)==null&&n.value)&&(t(pi(n)?gi(n.value):n.value),cn!==null&&s.add(cn)),Tc(()=>{var i=e();if(n===document.activeElement){var r=cn;if(s.has(r))return}pi(n)&&i===gi(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function pi(n){var e=n.type;return e==="number"||e==="range"}function gi(n){return n===""?null:+n}const qc=()=>{};var Xr={};/**
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
 */const Xo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw Cn(e)},Cn=function(n){return new Error("Firebase Database ("+Xo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Jo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ji={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let u=(a&15)<<2|h>>6,g=h&63;c||(g=64,o||(u=64)),s.push(t[d],t[f],t[u],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||f==null)throw new jc;const u=r<<2|a>>4;if(s.push(u),h!==64){const g=a<<4&240|h>>2;if(s.push(g),f!==64){const w=h<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zo=function(n){const e=Jo(n);return Ji.encodeByteArray(e,!0)},Ns=function(n){return Zo(n).replace(/\./g,"")},xi=function(n){try{return Ji.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qc(n){return ea(void 0,n)}function ea(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Yc(t)||(n[t]=ea(n[t],e[t]));return n}function Yc(n){return n!=="__proto__"}/**
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
 */function Kc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xc=()=>Kc().__FIREBASE_DEFAULTS__,Jc=()=>{if(typeof process>"u"||typeof Xr>"u")return;const n=Xr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xi(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return qc()||Xc()||Jc()||Zc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eh=n=>{var e,t;return(t=(e=ta())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},th=n=>{const e=eh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},na=()=>{var n;return(n=ta())==null?void 0:n.config};/**
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
 */class rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function nh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ns(JSON.stringify(t)),Ns(JSON.stringify(o)),""].join(".")}/**
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
 */function sh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sh())}function ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rh(){return Xo.NODE_ADMIN===!0}function oh(){try{return typeof indexedDB=="object"}catch{return!1}}function ah(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const lh="FirebaseError";class os extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=lh,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ch(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function ch(n,e){return n.replace(hh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hh=/\{\$([^}]+)}/g;/**
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
 */function Qn(n){return JSON.parse(n)}function ge(n){return JSON.stringify(n)}/**
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
 */const ra=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Qn(xi(r[0])||""),t=Qn(xi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},uh=function(n){const e=ra(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},dh=function(n){const e=ra(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function _n(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Jr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ks(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Zr(r)&&Zr(o)){if(!ks(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Zr(n){return n!==null&&typeof n=="object"}/**
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
 */function fh(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class _h{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const u=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],h,d;for(let f=0;f<80;f++){f<40?f<20?(h=a^r&(o^a),d=1518500249):(h=r^o^a,d=1859775393):f<60?(h=r&o|a&(r|o),d=2400959708):(h=r^o^a,d=3395469782);const u=(i<<5|i>>>27)+h+c+d+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ph=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function En(n){return n&&n._delegate?n._delegate:n}/**
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
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gh(n){return(await fetch(n,{credentials:"include"})).ok}class Yn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class mh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new rs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yh(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vh(n){return n===Yt?void 0:n}function yh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ch{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Eh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},bh=ne.INFO,wh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ih=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=wh[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=bh,this._logHandler=Ih,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Sh=(n,e)=>e.some(t=>n instanceof t);let eo,to;function Th(){return eo||(eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nh(){return to||(to=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,Di=new WeakMap,ca=new WeakMap,mi=new WeakMap,Zi=new WeakMap;function Rh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Mt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&la.set(t,n)}).catch(()=>{}),Zi.set(e,n),e}function kh(n){if(Di.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Di.set(n,e)}let Pi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Di.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ca.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ah(n){Pi=n(Pi)}function xh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(vi(this),e,...t);return ca.set(s,e.sort?e.sort():[e]),Mt(s)}:Nh().includes(n)?function(...e){return n.apply(vi(this),e),Mt(la.get(this))}:function(...e){return Mt(n.apply(vi(this),e))}}function Dh(n){return typeof n=="function"?xh(n):(n instanceof IDBTransaction&&kh(n),Sh(n,Th())?new Proxy(n,Pi):n)}function Mt(n){if(n instanceof IDBRequest)return Rh(n);if(mi.has(n))return mi.get(n);const e=Dh(n);return e!==n&&(mi.set(n,e),Zi.set(e,n)),e}const vi=n=>Zi.get(n);function Ph(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Oh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],yi=new Map;function no(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Mh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Oh.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),i&&c.done]))[0]};return yi.set(e,r),r}Ah(n=>({...n,get:(e,t,s)=>no(e,t)||n.get(e,t,s),has:(e,t)=>!!no(e,t)||n.has(e,t)}));/**
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
 */class Lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Fh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oi="@firebase/app",so="0.14.11";/**
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
 */const Ct=new aa("@firebase/app"),Bh="@firebase/app-compat",Wh="@firebase/analytics-compat",Uh="@firebase/analytics",$h="@firebase/app-check-compat",Hh="@firebase/app-check",Vh="@firebase/auth",zh="@firebase/auth-compat",qh="@firebase/database",Gh="@firebase/data-connect",jh="@firebase/database-compat",Qh="@firebase/functions",Yh="@firebase/functions-compat",Kh="@firebase/installations",Xh="@firebase/installations-compat",Jh="@firebase/messaging",Zh="@firebase/messaging-compat",eu="@firebase/performance",tu="@firebase/performance-compat",nu="@firebase/remote-config",su="@firebase/remote-config-compat",iu="@firebase/storage",ru="@firebase/storage-compat",ou="@firebase/firestore",au="@firebase/ai",lu="@firebase/firestore-compat",cu="firebase",hu="12.12.0";/**
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
 */const Mi="[DEFAULT]",uu={[Oi]:"fire-core",[Bh]:"fire-core-compat",[Uh]:"fire-analytics",[Wh]:"fire-analytics-compat",[Hh]:"fire-app-check",[$h]:"fire-app-check-compat",[Vh]:"fire-auth",[zh]:"fire-auth-compat",[qh]:"fire-rtdb",[Gh]:"fire-data-connect",[jh]:"fire-rtdb-compat",[Qh]:"fire-fn",[Yh]:"fire-fn-compat",[Kh]:"fire-iid",[Xh]:"fire-iid-compat",[Jh]:"fire-fcm",[Zh]:"fire-fcm-compat",[eu]:"fire-perf",[tu]:"fire-perf-compat",[nu]:"fire-rc",[su]:"fire-rc-compat",[iu]:"fire-gcs",[ru]:"fire-gcs-compat",[ou]:"fire-fst",[lu]:"fire-fst-compat",[au]:"fire-vertex","fire-js":"fire-js",[cu]:"fire-js-all"};/**
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
 */const As=new Map,du=new Map,Li=new Map;function io(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xs(n){const e=n.name;if(Li.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of As.values())io(t,n);for(const t of du.values())io(t,n);return!0}function fu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _u(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new ia("app","Firebase",pu);/**
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
 */class gu{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const mu=hu;function ha(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Mi,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(t||(t=na()),!t)throw Lt.create("no-options");const r=As.get(i);if(r){if(ks(t,r.options)&&ks(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Ch(i);for(const c of Li.values())o.addComponent(c);const a=new gu(t,s,o);return As.set(i,a),a}function vu(n=Mi){const e=As.get(n);if(!e&&n===Mi&&na())return ha();if(!e)throw Lt.create("no-app",{appName:n});return e}function un(n,e,t){let s=uu[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(o.join(" "));return}xs(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yu="firebase-heartbeat-database",Cu=1,Kn="firebase-heartbeat-store";let Ci=null;function ua(){return Ci||(Ci=Ph(yu,Cu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),Ci}async function Eu(n){try{const t=(await ua()).transaction(Kn),s=await t.objectStore(Kn).get(da(n));return await t.done,s}catch(e){if(e instanceof os)Ct.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function ro(n,e){try{const s=(await ua()).transaction(Kn,"readwrite");await s.objectStore(Kn).put(e,da(n)),await s.done}catch(t){if(t instanceof os)Ct.warn(t.message);else{const s=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(s.message)}}}function da(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bu=1024,wu=30;class Iu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>wu){const o=Nu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ct.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oo(),{heartbeatsToSend:s,unsentEntries:i}=Su(this._heartbeatsCache.heartbeats),r=Ns(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ct.warn(t),""}}}function oo(){return new Date().toISOString().substring(0,10)}function Su(n,e=bu){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ao(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ao(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Tu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oh()?ah().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Eu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ao(n){return Ns(JSON.stringify({version:2,heartbeats:n})).length}function Nu(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Ru(n){xs(new Yn("platform-logger",e=>new Lh(e),"PRIVATE")),xs(new Yn("heartbeat",e=>new Iu(e),"PRIVATE")),un(Oi,so,n),un(Oi,so,"esm2020"),un("fire-js","")}Ru("");var ku="firebase",Au="12.12.0";/**
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
 */un(ku,Au,"app");var lo={};const co="@firebase/database",ho="1.1.2";/**
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
 */let fa="";function xu(n){fa=n}/**
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
 */class Du{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Pu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const _a=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Du(e)}}catch{}return new Pu},Xt=_a("localStorage"),Ou=_a("sessionStorage");/**
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
 */const dn=new aa("@firebase/database"),Mu=(function(){let n=1;return function(){return n++}})(),pa=function(n){const e=ph(n),t=new _h;t.update(e);const s=t.digest();return Ji.encodeByteArray(s)},as=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=as.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let Vn=null,uo=!0;const Lu=function(n,e){C(!0,"Can't turn on custom loggers persistently."),dn.logLevel=ne.VERBOSE,Vn=dn.log.bind(dn)},Ie=function(...n){if(uo===!0&&(uo=!1,Vn===null&&Ou.get("logging_enabled")===!0&&Lu()),Vn){const e=as.apply(null,n);Vn(e)}},ls=function(n){return function(...e){Ie(n,...e)}},Fi=function(...n){const e="FIREBASE INTERNAL ERROR: "+as(...n);dn.error(e)},Et=function(...n){const e=`FIREBASE FATAL ERROR: ${as(...n)}`;throw dn.error(e),new Error(e)},Le=function(...n){const e="FIREBASE WARNING: "+as(...n);dn.warn(e)},Fu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},er=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Bu=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},pn="[MIN_NAME]",Jt="[MAX_NAME]",tn=function(n,e){if(n===e)return 0;if(n===pn||e===Jt)return-1;if(e===pn||n===Jt)return 1;{const t=fo(n),s=fo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Wu=function(n,e){return n===e?0:n<e?-1:1},Mn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ge(e))},tr=function(n){if(typeof n!="object"||n===null)return ge(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ge(e[s]),t+=":",t+=tr(n[e[s]]);return t+="}",t},ga=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ma=function(n){C(!er(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const d=h.join("");let f="";for(c=0;c<64;c+=8){let u=parseInt(d.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},Uu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$u=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Vu=new RegExp("^-?(0*)\\d{1,10}$"),zu=-2147483648,qu=2147483647,fo=function(n){if(Vu.test(n)){const e=Number(n);if(e>=zu&&e<=qu)return e}return null},bn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Le("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ju{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,_u(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Qu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class Ts{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ts.OWNER="owner";/**
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
 */const nr="5",va="v",ya="s",Ca="r",Ea="f",ba=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wa="ls",Ia="p",Bi="ac",Sa="websocket",Ta="long_polling";/**
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
 */class Na{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ra(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let s;if(e===Sa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ta)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yu(n)&&(t.ns=n.namespace);const i=[];return Se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ku{constructor(){this.counters_={}}incrementCounter(e,t=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qc(this.counters_)}}/**
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
 */const Ei={},bi={};function sr(n){const e=n.toString();return Ei[e]||(Ei[e]=new Ku),Ei[e]}function Xu(n,e){const t=n.toString();return bi[t]||(bi[t]=e()),bi[t]}/**
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
 */class Ju{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _o="start",Zu="close",ed="pLPCommand",td="pRTLPCB",ka="id",Aa="pw",xa="ser",nd="cb",sd="seg",id="ts",rd="d",od="dframe",Da=1870,Pa=30,ad=Da-Pa,ld=25e3,cd=3e4;class hn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=sr(t),this.urlFn=c=>(this.appCheckToken&&(c[Bi]=this.appCheckToken),Ra(t,Ta,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ju(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cd)),Bu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ir((...r)=>{const[o,a,c,h,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_o)this.id=a,this.password=c;else if(o===Zu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_o]="t",s[xa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[nd]=this.scriptTagHolder.uniqueCallbackIdentifier),s[va]=nr,this.transportSessionId&&(s[ya]=this.transportSessionId),this.lastSessionId&&(s[wa]=this.lastSessionId),this.applicationId&&(s[Ia]=this.applicationId),this.appCheckToken&&(s[Bi]=this.appCheckToken),typeof location<"u"&&location.hostname&&ba.test(location.hostname)&&(s[Ca]=Ea);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uu()&&!$u()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zo(t),i=ga(s,ad);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[od]="t",s[ka]=e,s[Aa]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ir{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mu(),window[ed+this.uniqueCallbackIdentifier]=e,window[td+this.uniqueCallbackIdentifier]=t,this.myIFrame=ir.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ka]=this.myID,e[Aa]=this.myPW,e[xa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pa+s.length<=Da;){const o=this.pendingSegs.shift();s=s+"&"+sd+i+"="+o.seg+"&"+id+i+"="+o.ts+"&"+rd+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ld)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const hd=16384,ud=45e3;let Ds=null;typeof MozWebSocket<"u"?Ds=MozWebSocket:typeof WebSocket<"u"&&(Ds=WebSocket);class Je{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=sr(t),this.connURL=Je.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[va]=nr,typeof location<"u"&&location.hostname&&ba.test(location.hostname)&&(o[Ca]=Ea),t&&(o[ya]=t),s&&(o[wa]=s),i&&(o[Bi]=i),r&&(o[Ia]=r),Ra(e,Sa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let s;rh(),this.mySock=new Ds(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ds!==null&&!Je.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||Xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Qn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ga(t,hd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ud))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
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
 */class Xn{static get ALL_TRANSPORTS(){return[hn,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Je&&Je.isAvailable();let s=t&&!Je.previouslyFailed();if(e.webSocketOnly&&(t||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of Xn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Xn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xn.globalTransportInitialized_=!1;/**
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
 */const dd=6e4,fd=5e3,_d=10*1024,pd=100*1024,wi="t",po="d",gd="s",go="r",md="e",mo="o",vo="a",yo="n",Co="p",vd="h";class yd{constructor(e,t,s,i,r,o,a,c,h,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new Xn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_d?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wi in e){const t=e[wi];t===vo?this.upgradeIfSecondaryHealthy_():t===go?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===mo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Co,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mn(wi,e);if(po in e){const s=e[po];if(t===vd){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===yo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gd?this.onConnectionShutdown_(s):t===go?this.onReset_(s):t===md?Fi("Server Error: "+s):t===mo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),nr!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Co,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Oa{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ma{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ps extends Ma{static getInstance(){return new Ps}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Eo=32,bo=768;class ee{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Y(){return new ee("")}function U(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Wt(n){return n.pieces_.length-n.pieceNum_}function se(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ee(n.pieces_,e)}function rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Cd(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Jn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function La(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ee(e,0)}function ce(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new ee(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=U(n),s=U(e);if(t===null)return e;if(t===s)return Me(se(n),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ed(n,e){const t=Jn(n,0),s=Jn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=tn(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function or(n,e){if(Wt(n)!==Wt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ze(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Wt(n)>Wt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class bd{constructor(e,t){this.errorPrefix_=t,this.parts_=Jn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Gs(this.parts_[s]);Fa(this)}}function wd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Gs(e),Fa(n)}function Id(n){const e=n.parts_.pop();n.byteLength_-=Gs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Fa(n){if(n.byteLength_>bo)throw new Error(n.errorPrefix_+"has a key path longer than "+bo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Eo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eo+") or object contains a cycle "+Kt(n))}function Kt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ar extends Ma{static getInstance(){return new ar}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ln=1e3,Sd=300*1e3,wo=30*1e3,Td=1.3,Nd=3e4,Rd="server_kill",Io=3;class yt extends Oa{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=yt.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=Sd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ar.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ps.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ge(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new rs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,h=a.s;yt.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ht(e,"w")){const s=_n(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Fi("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nd&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Td)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},h=function(f){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:h};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,a=new yd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{Le(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rd)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Le(f),c())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jr(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>tr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Io&&(this.reconnectDelay_=wo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Io&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fa.replace(/\./g,"-")]=1,sa()?e["framework.cordova"]=1:ih()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ps.getInstance().currentlyOnline();return Jr(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
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
 */class js{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new $(pn,e),i=new $(pn,t);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
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
 */let ws;class Ba extends js{static get __EMPTY_NODE(){return ws}static set __EMPTY_NODE(e){ws=e}compare(e,t){return tn(e.name,t.name)}isDefinedOn(e){throw Cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $.MIN}maxPost(){return new $(Jt,ws)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,ws)}toString(){return".key"}}const fn=new Ba;/**
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
 */class Is{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ce.RED,this.left=i??Be.EMPTY_NODE,this.right=r??Be.EMPTY_NODE}copy(e,t,s,i,r){return new Ce(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class kd{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,t=Be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new kd;/**
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
 */function Ad(n,e){return tn(n.name,e.name)}function lr(n,e){return tn(n,e)}/**
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
 */let Wi;function xd(n){Wi=n}const Wa=function(n){return typeof n=="number"?"number:"+ma(n):"string:"+n},Ua=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else C(n===Wi||n.isEmpty(),"priority of unexpected type.");C(n===Wi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let So;class ye{static set __childrenNodeConstructor(e){So=e}static get __childrenNodeConstructor(){return So}constructor(e,t=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ua(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:U(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=U(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ma(this.value_):e+=this.value_,this.lazyHash_=pa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(t),r=ye.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+t),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $a,Ha;function Dd(n){$a=n}function Pd(n){Ha=n}class Od extends js{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?tn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Jt,new ye("[PRIORITY-POST]",Ha))}makePost(e,t){const s=$a(e);return new $(t,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new Od;/**
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
 */const Md=Math.log(2);class Ld{constructor(e){const t=r=>parseInt(Math.log(r)/Md,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Os=function(n,e,t,s){n.sort(e);const i=function(c,h){const d=h-c;let f,u;if(d===0)return null;if(d===1)return f=n[c],u=t?t(f):f,new Ce(u,f.node,Ce.BLACK,null,null);{const g=parseInt(d/2,10)+c,w=i(c,g),x=i(g+1,h);return f=n[g],u=t?t(f):f,new Ce(u,f.node,Ce.BLACK,w,x)}},r=function(c){let h=null,d=null,f=n.length;const u=function(w,x){const I=f-w,j=f;f-=w;const Ee=i(I+1,j),K=n[I],ue=t?t(K):K;g(new Ce(ue,K.node,x,null,Ee))},g=function(w){h?(h.left=w,h=w):(d=w,h=w)};for(let w=0;w<c.count;++w){const x=c.nextBitIsOne(),I=Math.pow(2,c.count-(w+1));x?u(I,Ce.BLACK):(u(I,Ce.BLACK),u(I,Ce.RED))}return d},o=new Ld(n.length),a=r(o);return new Be(s||e,a)};/**
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
 */let Ii;const ln={};class vt{static get Default(){return C(ln&&he,"ChildrenNode.ts has not been loaded"),Ii=Ii||new vt({".priority":ln},{".priority":he}),Ii}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=_n(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Be?t:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,t){C(e!==fn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Os(s,e.getCompare()):a=ln;const c=e.toString(),h={...this.indexSet_};h[c]=e;const d={...this.indexes_};return d[c]=a,new vt(d,h)}addToIndexes(e,t){const s=Rs(this.indexes_,(i,r)=>{const o=_n(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator($.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&a.push(h),h=c.getNext();return a.push(e),Os(a,o.getCompare())}else return ln;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new $(e.name,a))),c.insert(e,e.node)}});return new vt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Rs(this.indexes_,i=>{if(i===ln)return i;{const r=t.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new vt(s,this.indexSet_)}}/**
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
 */let Fn;class A{static get EMPTY_NODE(){return Fn||(Fn=new A(new Be(lr),null,vt.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ua(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fn:t}}getChild(e){const t=U(e);return t===null?this:this.getImmediateChild(t).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new $(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,t){const s=U(e);if(s===null)return t;{C(U(e)!==".priority"||Wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(se(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,a)=>{t[o]=a.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wa(this.getPriority().val())+":"),this.forEachChild(he,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":pa(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===fn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(he),i=t.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Fd extends A{constructor(){super(new Be(lr),A.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const cs=new Fd;Object.defineProperties($,{MIN:{value:new $(pn,A.EMPTY_NODE)},MAX:{value:new $(Jt,cs)}});Ba.__EMPTY_NODE=A.EMPTY_NODE;ye.__childrenNodeConstructor=A;xd(cs);Pd(cs);/**
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
 */const Bd=!0;function pe(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ye(t,pe(e))}if(!(n instanceof Array)&&Bd){const t=[];let s=!1;if(Se(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=pe(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new $(o,c)))}}),t.length===0)return A.EMPTY_NODE;const r=Os(t,Ad,o=>o.name,lr);if(s){const o=Os(t,he.getCompare());return new A(r,pe(e),new vt({".priority":o},{".priority":he}))}else return new A(r,pe(e),vt.Default)}else{let t=A.EMPTY_NODE;return Se(n,(s,i)=>{if(ht(n,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(pe(e))}}Dd(pe);/**
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
 */class Wd extends js{constructor(e){super(),this.indexPath_=e,C(!V(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?tn(e.name,t.name):r}makePost(e,t){const s=pe(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(t,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,cs);return new $(Jt,e)}toString(){return Jn(this.indexPath_,0).join("/")}}/**
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
 */class Ud extends js{compare(e,t){const s=e.node.compareTo(t.node);return s===0?tn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,t){const s=pe(e);return new $(t,s)}toString(){return".value"}}const $d=new Ud;/**
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
 */function Va(n){return{type:"value",snapshotNode:n}}function gn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Zn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function es(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Hd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class cr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Zn(t,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gn(t,s)):o.trackChildChange(es(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{t.hasChild(i)||s.trackChildChange(Zn(i,r))}),t.isLeafNode()||t.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(es(i,r,o))}else s.trackChildChange(gn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ts{constructor(e){this.indexedFilter_=new cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ts.getStartPost_(e),this.endPost_=ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new $(t,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=A.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(he,(o,a)=>{r.matches(new $(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Vd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new $(t,s))||(s=A.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(u,g)=>f(g,u)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const c=new $(t,s),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,h,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const g=u==null?1:o(u,c);if(d&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(es(t,s,f)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Zn(t,f));const x=a.updateImmediateChild(t,A.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(gn(u.name,u.node)),x.updateImmediateChild(u.name,u.node)):x}}else return s.isEmpty()?e:d&&o(h,c)>=0?(r!=null&&(r.trackChildChange(Zn(h.name,h.node)),r.trackChildChange(gn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(h.name,A.EMPTY_NODE)):e}}/**
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
 */class hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zd(n){return n.loadsAllData()?new cr(n.getIndex()):n.hasLimit()?new Vd(n):new ts(n)}function To(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===$d?t="$value":n.index_===fn?t="$key":(C(n.index_ instanceof Wd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ge(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ge(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ge(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ge(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ge(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function No(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
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
 */class Ms extends Oa{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ms.getListenId_(e,s),a={};this.listens_[o]=a;const c=To(e._queryParams);this.restRequest_(r+".json",c,(h,d)=>{let f=d;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(r,f,!1,s),_n(this.listens_,o)===a){let u;h?h===401?u="permission_denied":u="rest_error:"+h:u="ok",i(u,null)}})}unlisten(e,t){const s=Ms.getListenId_(e,t);delete this.listens_[s]}get(e){const t=To(e._queryParams),s=e._path.toString(),i=new rs;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fh(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Qn(a.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class qd{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ls(){return{value:null,children:new Map}}function za(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=U(e);n.children.has(s)||n.children.set(s,Ls());const i=n.children.get(s);e=se(e),za(i,e,t)}}function Ui(n,e,t){n.value!==null?t(e,n.value):Gd(n,(s,i)=>{const r=new ee(e.toString()+"/"+s);Ui(i,r,t)})}function Gd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class jd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ro=10*1e3,Qd=30*1e3,Yd=300*1e3;class Kd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jd(e);const s=Ro+(Qd-Ro)*Math.random();zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Se(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yd))}}/**
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
 */var Ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Fs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ze.ACK_USER_WRITE,this.source=ur()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ee(e));return new Fs(Y(),t,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new Fs(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class ns{constructor(e,t){this.source=e,this.path=t,this.type=Ze.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new ns(this.source,Y()):new ns(this.source,se(this.path))}}/**
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
 */class Zt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ze.OVERWRITE}operationForChild(e){return V(this.path)?new Zt(this.source,Y(),this.snap.getImmediateChild(e)):new Zt(this.source,se(this.path),this.snap)}}/**
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
 */class mn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ze.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new ee(e));return t.isEmpty()?null:t.value?new Zt(this.source,Y(),t.value):new mn(this.source,Y(),t)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mn(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ut{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=U(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Xd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Jd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Hd(o.childName,o.snapshotNode))}),Bn(n,i,"child_removed",e,s,t),Bn(n,i,"child_added",e,s,t),Bn(n,i,"child_moved",r,s,t),Bn(n,i,"child_changed",e,s,t),Bn(n,i,"value",e,s,t),i}function Bn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>ef(n,a,c)),o.forEach(a=>{const c=Zd(n,a,r);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(c,n.query_))})})}function Zd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ef(n,e,t){if(e.childName==null||t.childName==null)throw Cn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Qs(n,e){return{eventCache:n,serverCache:e}}function qn(n,e,t,s){return Qs(new Ut(e,t,s),n.serverCache)}function qa(n,e,t,s){return Qs(n.eventCache,new Ut(e,t,s))}function Bs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function en(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Si;const tf=()=>(Si||(Si=new Be(Wu)),Si);class te{static fromObject(e){let t=new te(null);return Se(e,(s,i)=>{t=t.set(new ee(s),i)}),t}constructor(e,t=tf()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Y(),value:this.value};if(V(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(se(e),t);return r!=null?{path:ce(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=U(e),s=this.children.get(t);return s!==null?s.subtree(se(e)):new te(null)}}set(e,t){if(V(e))return new te(t,this.children);{const s=U(e),r=(this.children.get(s)||new te(null)).set(se(e),t),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const t=U(e),s=this.children.get(t);if(s){const i=s.remove(se(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const t=U(e),s=this.children.get(t);return s?s.get(se(e)):null}}setTree(e,t){if(V(e))return t;{const s=U(e),r=(this.children.get(s)||new te(null)).setTree(se(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ce(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Y(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(V(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(se(e),ce(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Y(),t)}foreachOnPath_(e,t,s){if(V(e))return this;{this.value&&s(t,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(se(e),ce(t,i),s):new te(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ce(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new te(null))}}function Gn(n,e,t){if(V(e))return new et(new te(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,t),new et(n.writeTree_.set(i,r))}else{const i=new te(t),r=n.writeTree_.setTree(e,i);return new et(r)}}}function $i(n,e,t){let s=n;return Se(t,(i,r)=>{s=Gn(s,ce(e,i),r)}),s}function ko(n,e){if(V(e))return et.empty();{const t=n.writeTree_.setTree(e,new te(null));return new et(t)}}function Hi(n,e){return nn(n,e)!=null}function nn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function Ao(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(s,i)=>{e.push(new $(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Ft(n,e){if(V(e))return n;{const t=nn(n,e);return t!=null?new et(new te(t)):new et(n.writeTree_.subtree(e))}}function Vi(n){return n.writeTree_.isEmpty()}function vn(n,e){return Ga(Y(),n.writeTree_,e)}function Ga(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ga(ce(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ce(n,".priority"),s)),t}}/**
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
 */function Ys(n,e){return Ka(e,n)}function nf(n,e,t,s,i){C(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Gn(n.visibleWrites,e,t)),n.lastWriteId=s}function sf(n,e,t,s){C(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=$i(n.visibleWrites,e,t),n.lastWriteId=s}function rf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function of(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&af(a,s.path)?i=!1:ze(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return lf(n),!0;if(s.snap)n.visibleWrites=ko(n.visibleWrites,s.path);else{const a=s.children;Se(a,c=>{n.visibleWrites=ko(n.visibleWrites,ce(s.path,c))})}return!0}else return!1}function af(n,e){if(n.snap)return ze(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ze(ce(n.path,t),e))return!0;return!1}function lf(n){n.visibleWrites=ja(n.allWrites,cf,Y()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cf(n){return n.visible}function ja(n,e,t){let s=et.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ze(t,o)?(a=Me(t,o),s=Gn(s,a,r.snap)):ze(o,t)&&(a=Me(o,t),s=Gn(s,Y(),r.snap.getChild(a)));else if(r.children){if(ze(t,o))a=Me(t,o),s=$i(s,a,r.children);else if(ze(o,t))if(a=Me(o,t),V(a))s=$i(s,Y(),r.children);else{const c=_n(r.children,U(a));if(c){const h=c.getChild(se(a));s=Gn(s,Y(),h)}}}else throw Cn("WriteRecord should have .snap or .children")}}return s}function Qa(n,e,t,s,i){if(!s&&!i){const r=nn(n.visibleWrites,e);if(r!=null)return r;{const o=Ft(n.visibleWrites,e);if(Vi(o))return t;if(t==null&&!Hi(o,Y()))return null;{const a=t||A.EMPTY_NODE;return vn(o,a)}}}else{const r=Ft(n.visibleWrites,e);if(!i&&Vi(r))return t;if(!i&&t==null&&!Hi(r,Y()))return null;{const o=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(ze(h.path,e)||ze(e,h.path))},a=ja(n.allWrites,o,e),c=t||A.EMPTY_NODE;return vn(a,c)}}}function hf(n,e,t){let s=A.EMPTY_NODE;const i=nn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ft(n.visibleWrites,e);return t.forEachChild(he,(o,a)=>{const c=vn(Ft(r,new ee(o)),a);s=s.updateImmediateChild(o,c)}),Ao(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(n.visibleWrites,e);return Ao(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function uf(n,e,t,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ce(e,t);if(Hi(n.visibleWrites,r))return null;{const o=Ft(n.visibleWrites,r);return Vi(o)?i.getChild(t):vn(o,i.getChild(t))}}function df(n,e,t,s){const i=ce(e,t),r=nn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ft(n.visibleWrites,i);return vn(o,s.getNode().getImmediateChild(t))}else return null}function ff(n,e){return nn(n.visibleWrites,e)}function _f(n,e,t,s,i,r,o){let a;const c=Ft(n.visibleWrites,e),h=nn(c,Y());if(h!=null)a=h;else if(t!=null)a=vn(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=u.getNext();for(;g&&d.length<i;)f(g,s)!==0&&d.push(g),g=u.getNext();return d}else return[]}function pf(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Ws(n,e,t,s){return Qa(n.writeTree,n.treePath,e,t,s)}function _r(n,e){return hf(n.writeTree,n.treePath,e)}function xo(n,e,t,s){return uf(n.writeTree,n.treePath,e,t,s)}function Us(n,e){return ff(n.writeTree,ce(n.treePath,e))}function gf(n,e,t,s,i,r){return _f(n.writeTree,n.treePath,e,t,s,i,r)}function pr(n,e,t){return df(n.writeTree,n.treePath,e,t)}function Ya(n,e){return Ka(ce(n.treePath,e),n.writeTree)}function Ka(n,e){return{treePath:n,writeTree:e}}/**
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
 */class mf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,es(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Zn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,gn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,es(s,e.snapshotNode,i.oldSnap));else throw Cn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class vf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Xa=new vf;class gr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=gf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function yf(n){return{filter:n}}function Cf(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ef(n,e,t,s,i){const r=new mf;let o,a;if(t.type===Ze.OVERWRITE){const h=t;h.source.fromUser?o=zi(n,e,h.path,h.snap,s,i,r):(C(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!V(h.path),o=$s(n,e,h.path,h.snap,s,i,a,r))}else if(t.type===Ze.MERGE){const h=t;h.source.fromUser?o=wf(n,e,h.path,h.children,s,i,r):(C(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=qi(n,e,h.path,h.children,s,i,a,r))}else if(t.type===Ze.ACK_USER_WRITE){const h=t;h.revert?o=Tf(n,e,h.path,s,i,r):o=If(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===Ze.LISTEN_COMPLETE)o=Sf(n,e,t.path,s,r);else throw Cn("Unknown operation type: "+t.type);const c=r.getChanges();return bf(e,o,c),{viewCache:o,changes:c}}function bf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Bs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Va(Bs(e)))}}function Ja(n,e,t,s,i,r){const o=e.eventCache;if(Us(s,t)!=null)return e;{let a,c;if(V(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=en(e),d=h instanceof A?h:A.EMPTY_NODE,f=_r(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const h=Ws(s,en(e));a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=U(t);if(h===".priority"){C(Wt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=xo(s,t,d,c);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=se(t);let f;if(o.isCompleteForChild(h)){c=e.serverCache.getNode();const u=xo(s,t,o.getNode(),c);u!=null?f=o.getNode().getImmediateChild(h).updateChild(d,u):f=o.getNode().getImmediateChild(h)}else f=pr(s,h,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),h,f,d,i,r):a=o.getNode()}}return qn(e,a,o.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function $s(n,e,t,s,i,r,o,a){const c=e.serverCache;let h;const d=o?n.filter:n.filter.getIndexedFilter();if(V(t))h=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(t,s);h=d.updateFullNode(c.getNode(),g,null)}else{const g=U(t);if(!c.isCompleteForPath(t)&&Wt(t)>1)return e;const w=se(t),I=c.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?h=d.updatePriority(c.getNode(),I):h=d.updateChild(c.getNode(),g,I,w,Xa,null)}const f=qa(e,h,c.isFullyInitialized()||V(t),d.filtersNodes()),u=new gr(i,f,r);return Ja(n,f,t,i,u,a)}function zi(n,e,t,s,i,r,o){const a=e.eventCache;let c,h;const d=new gr(i,e,r);if(V(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=qn(e,h,!0,n.filter.filtersNodes());else{const f=U(t);if(f===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),c=qn(e,h,a.isFullyInitialized(),a.isFiltered());else{const u=se(t),g=a.getNode().getImmediateChild(f);let w;if(V(u))w=s;else{const x=d.getCompleteChild(f);x!=null?rr(u)===".priority"&&x.getChild(La(u)).isEmpty()?w=x:w=x.updateChild(u,s):w=A.EMPTY_NODE}if(g.equals(w))c=e;else{const x=n.filter.updateChild(a.getNode(),f,w,u,d,o);c=qn(e,x,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Do(n,e){return n.eventCache.isCompleteForChild(e)}function wf(n,e,t,s,i,r,o){let a=e;return s.foreach((c,h)=>{const d=ce(t,c);Do(e,U(d))&&(a=zi(n,a,d,h,i,r,o))}),s.foreach((c,h)=>{const d=ce(t,c);Do(e,U(d))||(a=zi(n,a,d,h,i,r,o))}),a}function Po(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function qi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;V(t)?h=s:h=new te(null).setTree(t,s);const d=e.serverCache.getNode();return h.children.inorderTraversal((f,u)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),w=Po(n,g,u);c=$s(n,c,new ee(f),w,i,r,o,a)}}),h.children.inorderTraversal((f,u)=>{const g=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!d.hasChild(f)&&!g){const w=e.serverCache.getNode().getImmediateChild(f),x=Po(n,w,u);c=$s(n,c,new ee(f),x,i,r,o,a)}}),c}function If(n,e,t,s,i,r,o){if(Us(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(V(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return $s(n,e,t,c.getNode().getChild(t),i,r,a,o);if(V(t)){let h=new te(null);return c.getNode().forEachChild(fn,(d,f)=>{h=h.set(new ee(d),f)}),qi(n,e,t,h,i,r,a,o)}else return e}else{let h=new te(null);return s.foreach((d,f)=>{const u=ce(t,d);c.isCompleteForPath(u)&&(h=h.set(d,c.getNode().getChild(u)))}),qi(n,e,t,h,i,r,a,o)}}function Sf(n,e,t,s,i){const r=e.serverCache,o=qa(e,r.getNode(),r.isFullyInitialized()||V(t),r.isFiltered());return Ja(n,o,t,s,Xa,i)}function Tf(n,e,t,s,i,r){let o;if(Us(s,t)!=null)return e;{const a=new gr(s,e,i),c=e.eventCache.getNode();let h;if(V(t)||U(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ws(s,en(e));else{const f=e.serverCache.getNode();C(f instanceof A,"serverChildren would be complete if leaf node"),d=_r(s,f)}d=d,h=n.filter.updateFullNode(c,d,r)}else{const d=U(t);let f=pr(s,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?h=n.filter.updateChild(c,d,f,se(t),a,r):e.eventCache.getNode().hasChild(d)?h=n.filter.updateChild(c,d,A.EMPTY_NODE,se(t),a,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ws(s,en(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Us(s,Y())!=null,qn(e,h,o,n.filter.filtersNodes())}}/**
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
 */class Nf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cr(s.getIndex()),r=zd(s);this.processor_=yf(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new Ut(c,o.isFullyInitialized(),i.filtersNodes()),f=new Ut(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qs(f,d),this.eventGenerator_=new Xd(this.query_)}get query(){return this.query_}}function Rf(n){return n.viewCache_.serverCache.getNode()}function kf(n){return Bs(n.viewCache_)}function Af(n,e){const t=en(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild(U(e)).isEmpty())?t.getChild(e):null}function Oo(n){return n.eventRegistrations_.length===0}function xf(n,e){n.eventRegistrations_.push(e)}function Mo(n,e,t){const s=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Lo(n,e,t,s){e.type===Ze.MERGE&&e.source.queryId!==null&&(C(en(n.viewCache_),"We should always have a full cache before handling merges"),C(Bs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Ef(n.processor_,i,e,t,s);return Cf(n.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Za(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Df(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(r,o)=>{s.push(gn(r,o))}),t.isFullyInitialized()&&s.push(Va(t.getNode())),Za(n,s,t.getNode(),e)}function Za(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Jd(n.eventGenerator_,e,t,i)}/**
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
 */let Hs;class el{constructor(){this.views=new Map}}function Pf(n){C(!Hs,"__referenceConstructor has already been defined"),Hs=n}function Of(){return C(Hs,"Reference.ts has not been loaded"),Hs}function Mf(n){return n.views.size===0}function mr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Lo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Lo(o,e,t,s));return r}}function tl(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ws(t,i?s:null),c=!1;a?c=!0:s instanceof A?(a=_r(t,s),c=!1):(a=A.EMPTY_NODE,c=!1);const h=Qs(new Ut(a,c,!1),new Ut(s,i,!1));return new Nf(e,h)}return o}function Lf(n,e,t,s,i,r){const o=tl(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),xf(o,t),Df(o,t)}function Ff(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=$t(n);if(i==="default")for(const[c,h]of n.views.entries())o=o.concat(Mo(h,t,s)),Oo(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||r.push(h.query));else{const c=n.views.get(i);c&&(o=o.concat(Mo(c,t,s)),Oo(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!$t(n)&&r.push(new(Of())(e._repo,e._path)),{removed:r,events:o}}function nl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Bt(n,e){let t=null;for(const s of n.views.values())t=t||Af(s,e);return t}function sl(n,e){if(e._queryParams.loadsAllData())return Ks(n);{const s=e._queryIdentifier;return n.views.get(s)}}function il(n,e){return sl(n,e)!=null}function $t(n){return Ks(n)!=null}function Ks(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vs;function Bf(n){C(!Vs,"__referenceConstructor has already been defined"),Vs=n}function Wf(){return C(Vs,"Reference.ts has not been loaded"),Vs}let Uf=1;class Fo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=pf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rl(n,e,t,s,i){return nf(n.pendingWriteTree_,e,t,s,i),i?wn(n,new Zt(ur(),e,t)):[]}function $f(n,e,t,s){sf(n.pendingWriteTree_,e,t,s);const i=te.fromObject(t);return wn(n,new mn(ur(),e,i))}function Ot(n,e,t=!1){const s=rf(n.pendingWriteTree_,e);if(of(n.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(Y(),!0):Se(s.children,o=>{r=r.set(new ee(o),!0)}),wn(n,new Fs(s.path,r,t))}else return[]}function hs(n,e,t){return wn(n,new Zt(dr(),e,t))}function Hf(n,e,t){const s=te.fromObject(t);return wn(n,new mn(dr(),e,s))}function Vf(n,e){return wn(n,new ns(dr(),e))}function zf(n,e,t){const s=yr(n,t);if(s){const i=Cr(s),r=i.path,o=i.queryId,a=Me(r,e),c=new ns(fr(o),a);return Er(n,r,c)}else return[]}function zs(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||il(o,e))){const c=Ff(o,e,t,s);Mf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=c.removed;if(a=c.events,!i){const d=h.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(u,g)=>$t(g));if(d&&!f){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const g=jf(u);for(let w=0;w<g.length;++w){const x=g[w],I=x.query,j=cl(n,x);n.listenProvider_.startListening(jn(I),ss(n,I),j.hashFn,j.onComplete)}}}!f&&h.length>0&&!s&&(d?n.listenProvider_.stopListening(jn(e),null):h.forEach(u=>{const g=n.queryToTagMap.get(Xs(u));n.listenProvider_.stopListening(jn(u),g)}))}Qf(n,h)}return a}function ol(n,e,t,s){const i=yr(n,s);if(i!=null){const r=Cr(i),o=r.path,a=r.queryId,c=Me(o,e),h=new Zt(fr(a),c,t);return Er(n,o,h)}else return[]}function qf(n,e,t,s){const i=yr(n,s);if(i){const r=Cr(i),o=r.path,a=r.queryId,c=Me(o,e),h=te.fromObject(t),d=new mn(fr(a),c,h);return Er(n,o,d)}else return[]}function Gi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,g)=>{const w=Me(u,i);r=r||Bt(g,w),o=o||$t(g)});let a=n.syncPointTree_.get(i);a?(o=o||$t(a),r=r||Bt(a,Y())):(a=new el,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((g,w)=>{const x=Bt(w,Y());x&&(r=r.updateImmediateChild(g,x))}));const h=il(a,e);if(!h&&!e._queryParams.loadsAllData()){const u=Xs(e);C(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const g=Yf();n.queryToTagMap.set(u,g),n.tagToQueryMap.set(g,u)}const d=Ys(n.pendingWriteTree_,i);let f=Lf(a,e,t,d,r,c);if(!h&&!o&&!s){const u=sl(a,e);f=f.concat(Kf(n,e,u))}return f}function vr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Me(o,e),h=Bt(a,c);if(h)return h});return Qa(i,e,r,t,!0)}function Gf(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,d)=>{const f=Me(h,t);s=s||Bt(d,f)});let i=n.syncPointTree_.get(t);i?s=s||Bt(i,Y()):(i=new el,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ut(s,!0,!1):null,a=Ys(n.pendingWriteTree_,e._path),c=tl(i,e,a,r?o.getNode():A.EMPTY_NODE,r);return kf(c)}function wn(n,e){return al(e,n.syncPointTree_,null,Ys(n.pendingWriteTree_,Y()))}function al(n,e,t,s){if(V(n.path))return ll(n,e,t,s);{const i=e.get(Y());t==null&&i!=null&&(t=Bt(i,Y()));let r=[];const o=U(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const h=t?t.getImmediateChild(o):null,d=Ya(s,o);r=r.concat(al(a,c,h,d))}return i&&(r=r.concat(mr(i,n,s,t))),r}}function ll(n,e,t,s){const i=e.get(Y());t==null&&i!=null&&(t=Bt(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,h=Ya(s,o),d=n.operationForChild(o);d&&(r=r.concat(ll(d,a,c,h)))}),i&&(r=r.concat(mr(i,n,s,t))),r}function cl(n,e){const t=e.query,s=ss(n,t);return{hashFn:()=>(Rf(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zf(n,t._path,s):Vf(n,t._path);{const r=Hu(i,t);return zs(n,t,null,r)}}}}function ss(n,e){const t=Xs(e);return n.queryToTagMap.get(t)}function Xs(n){return n._path.toString()+"$"+n._queryIdentifier}function yr(n,e){return n.tagToQueryMap.get(e)}function Cr(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ee(n.substr(0,e))}}function Er(n,e,t){const s=n.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Ys(n.pendingWriteTree_,e);return mr(s,t,i,null)}function jf(n){return n.fold((e,t,s)=>{if(t&&$t(t))return[Ks(t)];{let i=[];return t&&(i=nl(t)),Se(s,(r,o)=>{i=i.concat(o)}),i}})}function jn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Wf())(n._repo,n._path):n}function Qf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Xs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Yf(){return Uf++}function Kf(n,e,t){const s=e._path,i=ss(n,e),r=cl(n,t),o=n.listenProvider_.startListening(jn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)C(!$t(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((h,d,f)=>{if(!V(h)&&d&&$t(d))return[Ks(d).query];{let u=[];return d&&(u=u.concat(nl(d).map(g=>g.query))),Se(f,(g,w)=>{u=u.concat(w)}),u}});for(let h=0;h<c.length;++h){const d=c[h];n.listenProvider_.stopListening(jn(d),ss(n,d))}}return o}/**
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
 */class br{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new br(t)}node(){return this.node_}}class wr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new wr(this.syncTree_,t)}node(){return vr(this.syncTree_,this.path_)}}const Xf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Bo=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Jf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Zf(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Jf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Zf=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hl=function(n,e,t,s){return Ir(e,new wr(t,n),s)},ul=function(n,e,t){return Ir(n,new br(e),t)};function Ir(n,e,t){const s=n.getPriority().val(),i=Bo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Bo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,pe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(he,(a,c)=>{const h=Ir(c,e.getImmediateChild(a),t);h!==c&&(r=r.updateImmediateChild(a,h))}),r}}/**
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
 */class Sr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Tr(n,e){let t=e instanceof ee?e:new ee(e),s=n,i=U(t);for(;i!==null;){const r=_n(s.node.children,i)||{children:{},childCount:0};s=new Sr(i,s,r),t=se(t),i=U(t)}return s}function In(n){return n.node.value}function dl(n,e){n.node.value=e,ji(n)}function fl(n){return n.node.childCount>0}function e_(n){return In(n)===void 0&&!fl(n)}function Js(n,e){Se(n.node.children,(t,s)=>{e(new Sr(t,n,s))})}function _l(n,e,t,s){t&&e(n),Js(n,i=>{_l(i,e,!0)})}function t_(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function us(n){return new ee(n.parent===null?n.name:us(n.parent)+"/"+n.name)}function ji(n){n.parent!==null&&n_(n.parent,n.name,n)}function n_(n,e,t){const s=e_(t),i=ht(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ji(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ji(n))}/**
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
 */const s_=/[\[\].#$\/\u0000-\u001F\u007F]/,i_=/[\[\].#$\u0000-\u001F\u007F]/,Ti=10*1024*1024,Nr=function(n){return typeof n=="string"&&n.length!==0&&!s_.test(n)},pl=function(n){return typeof n=="string"&&n.length!==0&&!i_.test(n)},r_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pl(n)},o_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!er(n)||n&&typeof n=="object"&&ht(n,".sv")},a_=function(n,e,t,s){Zs(qs(n,"value"),e,t)},Zs=function(n,e,t){const s=t instanceof ee?new bd(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Kt(s)+" with contents = "+e.toString());if(er(e))throw new Error(n+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>Ti/3&&Gs(e)>Ti)throw new Error(n+"contains a string greater than "+Ti+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wd(s,o),Zs(n,a,s),Id(s)}),i&&r)throw new Error(n+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},l_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Jn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Nr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ed);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ze(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},c_=function(n,e,t,s){const i=qs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Se(e,(o,a)=>{const c=new ee(o);if(Zs(i,a,ce(t,c)),rr(c)===".priority"&&!o_(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),l_(i,r)},gl=function(n,e,t,s){if(!pl(t))throw new Error(qs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},h_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gl(n,e,t)},u_=function(n,e){if(U(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},d_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!r_(t))throw new Error(qs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class f_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ei(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!or(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ml(n,e,t){ei(n,t),vl(n,s=>or(s,e))}function qe(n,e,t){ei(n,t),vl(n,s=>ze(s,e)||ze(e,s))}function vl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(__(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function __(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Vn&&Ie("event: "+t.toString()),bn(s)}}}/**
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
 */const p_="repo_interrupt",g_=25;class m_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new f_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ls(),this.transactionQueueTree_=new Sr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v_(n,e,t){if(n.stats_=sr(n.repoInfo_),n.forceRestClient_||Gu())n.server_=new Ms(n.repoInfo_,(s,i,r,o)=>{Wo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Uo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new yt(n.repoInfo_,e,(s,i,r,o)=>{Wo(n,s,i,r,o)},s=>{Uo(n,s)},s=>{C_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Xu(n.repoInfo_,()=>new Kd(n.stats_,n.server_)),n.infoData_=new qd,n.infoSyncTree_=new Fo({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=hs(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rr(n,"connected",!1),n.serverSyncTree_=new Fo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const h=o(a,c);qe(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function y_(n){const t=n.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ti(n){return Xf({timestamp:y_(n)})}function Wo(n,e,t,s,i){n.dataUpdateCount++;const r=new ee(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Rs(t,h=>pe(h));o=qf(n.serverSyncTree_,r,c,i)}else{const c=pe(t);o=ol(n.serverSyncTree_,r,c,i)}else if(s){const c=Rs(t,h=>pe(h));o=Hf(n.serverSyncTree_,r,c)}else{const c=pe(t);o=hs(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=yn(n,r)),qe(n.eventQueue_,a,o)}function Uo(n,e){Rr(n,"connected",e),e===!1&&I_(n)}function C_(n,e){Se(e,(t,s)=>{Rr(n,t,s)})}function Rr(n,e,t){const s=new ee("/.info/"+e),i=pe(t);n.infoData_.updateSnapshot(s,i);const r=hs(n.infoSyncTree_,s,i);qe(n.eventQueue_,s,r)}function kr(n){return n.nextWriteId_++}function E_(n,e,t){const s=Gf(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=pe(i).withIndex(e._queryParams.getIndex());Gi(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=hs(n.serverSyncTree_,e._path,r);else{const a=ss(n.serverSyncTree_,e);o=ol(n.serverSyncTree_,e._path,r,a)}return qe(n.eventQueue_,e._path,o),zs(n.serverSyncTree_,e,t,null,!0),r},i=>(ds(n,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function b_(n,e,t,s,i){ds(n,"set",{path:e.toString(),value:t,priority:s});const r=ti(n),o=pe(t,s),a=vr(n.serverSyncTree_,e),c=ul(o,a,r),h=kr(n),d=rl(n.serverSyncTree_,e,c,h,!0);ei(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,g)=>{const w=u==="ok";w||Le("set at "+e+" failed: "+u);const x=Ot(n.serverSyncTree_,h,!w);qe(n.eventQueue_,e,x),Qi(n,i,u,g)});const f=xr(n,e);yn(n,f),qe(n.eventQueue_,f,[])}function w_(n,e,t,s){ds(n,"update",{path:e.toString(),value:t});let i=!0;const r=ti(n),o={};if(Se(t,(a,c)=>{i=!1,o[a]=hl(ce(e,a),pe(c),n.serverSyncTree_,r)}),i)Ie("update() called with empty data.  Don't do anything."),Qi(n,s,"ok",void 0);else{const a=kr(n),c=$f(n.serverSyncTree_,e,o,a);ei(n.eventQueue_,c),n.server_.merge(e.toString(),t,(h,d)=>{const f=h==="ok";f||Le("update at "+e+" failed: "+h);const u=Ot(n.serverSyncTree_,a,!f),g=u.length>0?yn(n,e):e;qe(n.eventQueue_,g,u),Qi(n,s,h,d)}),Se(t,h=>{const d=xr(n,ce(e,h));yn(n,d)}),qe(n.eventQueue_,e,[])}}function I_(n){ds(n,"onDisconnectEvents");const e=ti(n),t=Ls();Ui(n.onDisconnect_,Y(),(i,r)=>{const o=hl(i,r,n.serverSyncTree_,e);za(t,i,o)});let s=[];Ui(t,Y(),(i,r)=>{s=s.concat(hs(n.serverSyncTree_,i,r));const o=xr(n,i);yn(n,o)}),n.onDisconnect_=Ls(),qe(n.eventQueue_,Y(),s)}function S_(n,e,t){let s;U(e._path)===".info"?s=Gi(n.infoSyncTree_,e,t):s=Gi(n.serverSyncTree_,e,t),ml(n.eventQueue_,e._path,s)}function T_(n,e,t){let s;U(e._path)===".info"?s=zs(n.infoSyncTree_,e,t):s=zs(n.serverSyncTree_,e,t),ml(n.eventQueue_,e._path,s)}function N_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(p_)}function ds(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ie(t,...e)}function Qi(n,e,t,s){e&&bn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function yl(n,e,t){return vr(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function Ar(n,e=n.transactionQueueTree_){if(e||ni(n,e),In(e)){const t=El(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&R_(n,us(e),t)}else fl(e)&&Js(e,t=>{Ar(n,t)})}function R_(n,e,t){const s=t.map(h=>h.currentWriteId),i=yl(n,e,s);let r=i;const o=i.hash();for(let h=0;h<t.length;h++){const d=t[h];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Me(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,h=>{ds(n,"transaction put response",{path:c.toString(),status:h});let d=[];if(h==="ok"){const f=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(Ot(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&f.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();ni(n,Tr(n.transactionQueueTree_,e)),Ar(n,n.transactionQueueTree_),qe(n.eventQueue_,e,d);for(let u=0;u<f.length;u++)bn(f[u])}else{if(h==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Le("transaction at "+c.toString()+" failed: "+h);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=h}yn(n,e)}},o)}function yn(n,e){const t=Cl(n,e),s=us(t),i=El(n,t);return k_(n,i,s),s}function k_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],h=Me(t,c.path);let d=!1,f;if(C(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,i=i.concat(Ot(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=g_)d=!0,f="maxretry",i=i.concat(Ot(n.serverSyncTree_,c.currentWriteId,!0));else{const u=yl(n,c.path,o);c.currentInputSnapshot=u;const g=e[a].update(u.val());if(g!==void 0){Zs("transaction failed: Data returned ",g,c.path);let w=pe(g);typeof g=="object"&&g!=null&&ht(g,".priority")||(w=w.updatePriority(u.getPriority()));const I=c.currentWriteId,j=ti(n),Ee=ul(w,u,j);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=Ee,c.currentWriteId=kr(n),o.splice(o.indexOf(I),1),i=i.concat(rl(n.serverSyncTree_,c.path,Ee,c.currentWriteId,c.applyLocally)),i=i.concat(Ot(n.serverSyncTree_,I,!0))}else d=!0,f="nodata",i=i.concat(Ot(n.serverSyncTree_,c.currentWriteId,!0))}qe(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}ni(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)bn(s[a]);Ar(n,n.transactionQueueTree_)}function Cl(n,e){let t,s=n.transactionQueueTree_;for(t=U(e);t!==null&&In(s)===void 0;)s=Tr(s,t),e=se(e),t=U(e);return s}function El(n,e){const t=[];return bl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function bl(n,e,t){const s=In(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Js(e,i=>{bl(n,i,t)})}function ni(n,e){const t=In(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,dl(e,t.length>0?t:void 0)}Js(e,s=>{ni(n,s)})}function xr(n,e){const t=us(Cl(n,e)),s=Tr(n.transactionQueueTree_,e);return t_(s,i=>{Ni(n,i)}),Ni(n,s),_l(s,i=>{Ni(n,i)}),t}function Ni(n,e){const t=In(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ot(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dl(e,void 0):t.length=r+1,qe(n.eventQueue_,us(e),i);for(let o=0;o<s.length;o++)bn(s[o])}}/**
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
 */function A_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function x_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${t}' in query '${n}'`)}return e}const $o=function(n,e){const t=D_(n),s=t.namespace;t.domain==="firebase.com"&&Et(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Fu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Na(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new ee(t.pathString)}},D_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(a=n.substring(0,h-1),n=n.substring(h+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=A_(n.substring(d,f)));const u=x_(n.substring(Math.min(n.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const g=e.slice(0,h);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class P_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class O_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class wl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:rr(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=No(this._queryParams),t=tr(e);return t==="{}"?"default":t}get _queryObject(){return No(this._queryParams)}isEqual(e){if(e=En(e),!(e instanceof Dr))return!1;const t=this._repo===e._repo,s=or(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cd(this._path)}}class bt extends Dr{constructor(e,t){super(e,t,new hr,!1)}get parent(){const e=La(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class is{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ee(e),s=Yi(this.ref,e);return new is(this._node.getChild(t),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new is(i,Yi(this.ref,s),he)))}hasChild(e){const t=new ee(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ve(n,e){return n=En(n),n._checkNotDeleted("ref"),e!==void 0?Yi(n._root,e):n._root}function Yi(n,e){return n=En(n),U(n._path)===null?h_("child","path",e):gl("child","path",e),new bt(n._repo,ce(n._path,e))}function Ho(n,e){n=En(n),u_("set",n._path),a_("set",e,n._path);const t=new rs;return b_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Qt(n,e){c_("update",e,n._path);const t=new rs;return w_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Vo(n){n=En(n);const e=new wl(()=>{}),t=new si(e);return E_(n._repo,n,t).then(s=>new is(s,new bt(n._repo,n._path),n._queryParams.getIndex()))}class si{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new P_("value",this,new is(e.snapshotNode,new bt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new O_(this,e,t):null}matches(e){return e instanceof si?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function M_(n,e,t,s,i){const r=new wl(t,void 0),o=new si(r);return S_(n._repo,n,o),()=>T_(n._repo,n,o)}function L_(n,e,t,s){return M_(n,"value",e)}Pf(bt);Bf(bt);/**
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
 */const F_="FIREBASE_DATABASE_EMULATOR_HOST",Ki={};let B_=!1;function W_(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=oa(r);n.repoInfo_=new Na(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function U_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=$o(r,i),a=o.repoInfo,c;typeof process<"u"&&lo&&(c=lo[F_]),c?(r=`http://${c}?ns=${a.namespace}`,o=$o(r,i),a=o.repoInfo):o.repoInfo.secure;const h=new Qu(n.name,n.options,e);d_("Invalid Firebase Database URL",o),V(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const d=H_(a,n,h,new ju(n,t));return new V_(d,n)}function $_(n,e){const t=Ki[e];(!t||t[n.key]!==n)&&Et(`Database ${e}(${n.repoInfo_}) has already been deleted.`),N_(n),delete t[n.key]}function H_(n,e,t,s){let i=Ki[e.name];i||(i={},Ki[e.name]=i);let r=i[n.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new m_(n,B_,t,s),i[n.toURLString()]=r,r}class V_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&($_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function z_(n=vu(),e){const t=fu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=th("database");s&&q_(t,...s)}return t}function q_(n,e,t,s={}){n=En(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&ks(s,r.repoInfo_.emulatorOptions))return;Et("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ts(Ts.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:nh(s.mockUserToken,n.app.options.projectId);o=new Ts(a)}oa(e)&&gh(e),W_(r,i,s,o)}/**
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
 */function G_(n){xu(mu),xs(new Yn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return U_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),un(co,ho,n),un(co,ho,"esm2020")}yt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};G_();var j_=L('<div class="qc-actions svelte-1uha8ag"><span role="button" tabindex="0" title="Edit" class="svelte-1uha8ag">✏️</span> <span role="button" tabindex="0" title="Delete" class="svelte-1uha8ag">🗑️</span></div>'),Q_=L('<button><span class="qc-emoji svelte-1uha8ag"> </span> <span class="qc-title svelte-1uha8ag"> </span> <span class="qc-count svelte-1uha8ag"> </span> <!></button>'),Y_=L('<p class="err svelte-1uha8ag"> </p>'),K_=L('<div class="home svelte-1uha8ag"><div class="home-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Quiz</h1> <a href="../../arcade.html" class="back-link svelte-1uha8ag">← Arcade</a></div> <p class="section-label svelte-1uha8ag">Select a quiz</p> <div class="quiz-grid svelte-1uha8ag"><!> <button class="quiz-card new-card svelte-1uha8ag"><span class="qc-emoji svelte-1uha8ag">＋</span> <span class="qc-title svelte-1uha8ag">Create Quiz</span></button></div> <div class="play-row svelte-1uha8ag"><button class="btn-primary svelte-1uha8ag">Solo Play</button> <button class="btn-secondary svelte-1uha8ag">Create Room</button></div> <div class="join-row svelte-1uha8ag"><input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <button class="btn-join svelte-1uha8ag">Join Room</button></div> <!></div>'),X_=L("<button> </button>"),J_=L('<p class="err svelte-1uha8ag"> </p>'),Z_=L('<img alt="" class="img-preview svelte-1uha8ag"/>'),ep=L('<div><button class="bq-mark svelte-1uha8ag" title="Mark as correct"> </button> <input class="text-input bq-opt-input svelte-1uha8ag"/></div>'),tp=L('<div class="bq-card svelte-1uha8ag"><div class="bq-top svelte-1uha8ag"><span class="bq-num svelte-1uha8ag"></span> <button class="bq-del svelte-1uha8ag">✕</button></div> <textarea class="text-input bq-prompt svelte-1uha8ag" placeholder="Question…"></textarea> <div class="img-field svelte-1uha8ag"><input class="text-input img-url svelte-1uha8ag" placeholder="Image URL (optional)"/> <!></div> <p class="bq-hint svelte-1uha8ag">Click an answer to mark it as correct ✓</p> <div class="bq-options svelte-1uha8ag"></div></div>'),np=L('<div class="builder svelte-1uha8ag"><div class="builder-header svelte-1uha8ag"><button class="btn-ghost svelte-1uha8ag">← Back</button> <h2 class="svelte-1uha8ag"> </h2> <button class="btn-save svelte-1uha8ag">Save</button></div> <div class="builder-meta svelte-1uha8ag"><div class="emoji-picker svelte-1uha8ag"></div> <input class="text-input svelte-1uha8ag" placeholder="Quiz title…"/></div> <!> <div class="q-list svelte-1uha8ag"></div> <button class="btn-add-q svelte-1uha8ag">+ Add Question</button></div>'),sp=L('<p class="err svelte-1uha8ag"> </p>'),ip=L('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Create Room</h2> <p class="sub svelte-1uha8ag"> </p> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Create</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),rp=L('<p class="err svelte-1uha8ag"> </p>'),op=L('<div class="center-col svelte-1uha8ag"><h2 class="svelte-1uha8ag">Join Room</h2> <input class="text-input code-input svelte-1uha8ag" placeholder="Room code"/> <input class="text-input svelte-1uha8ag" placeholder="Your name"/> <!> <button class="btn-primary svelte-1uha8ag">Join</button> <button class="btn-ghost svelte-1uha8ag">← Back</button></div>'),ap=L('<div class="player-row svelte-1uha8ag"><span></span> </div>'),lp=L('<button class="btn-primary svelte-1uha8ag"> </button>'),cp=L('<p class="sub svelte-1uha8ag">Waiting for host to start…</p>'),hp=L('<div class="center-col svelte-1uha8ag"><p class="sub svelte-1uha8ag">Room code</p> <div class="room-code svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag">Share this code with friends</p> <div class="player-list svelte-1uha8ag"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Leave</button></div>'),up=L('<span class="streak svelte-1uha8ag"> </span>'),dp=L('<img alt="" class="q-img svelte-1uha8ag"/>'),fp=L('<div class="flag svelte-1uha8ag"> </div>'),_p=L('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),pp=L("<div> </div>"),gp=L('<div class="popup svelte-1uha8ag"> </div>'),mp=L('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <!></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),vp=L('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag" style="animation:bounce .5s ease"> </div> <h2 class="svelte-1uha8ag">Done!</h2> <div class="final-score svelte-1uha8ag"> </div> <p class="sub svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">Play Again</button> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),yp=L('<img alt="" class="q-img svelte-1uha8ag"/>'),Cp=L('<div class="flag svelte-1uha8ag"> </div>'),Ep=L('<button><span class="shape svelte-1uha8ag"> </span> <span class="opt-text svelte-1uha8ag"> </span></button>'),bp=L('<p class="sub svelte-1uha8ag" style="text-align:center">Locked in — waiting for others…</p>'),wp=L('<span class="alb-gain svelte-1uha8ag"> </span>'),Ip=L('<div><span class="alb-rank svelte-1uha8ag"> </span> <div class="alb-middle svelte-1uha8ag"><div class="alb-name-row svelte-1uha8ag"><span class="alb-name svelte-1uha8ag"> </span> <!></div> <div class="alb-bar-track svelte-1uha8ag"><div class="alb-bar svelte-1uha8ag"></div></div></div> <span class="alb-score svelte-1uha8ag"> </span></div>'),Sp=L('<div class="anim-lb svelte-1uha8ag"></div>'),Tp=L('<div><span class="lb-rank svelte-1uha8ag"></span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),Np=L('<div class="leaderboard svelte-1uha8ag" style="margin-top:0"></div>'),Rp=L("<div> </div> <!> <!>",1),kp=L('<div class="quiz-screen svelte-1uha8ag"><div class="hud svelte-1uha8ag"><span class="q-num svelte-1uha8ag"> </span> <span class="score-pill svelte-1uha8ag"> </span> <span class="q-num svelte-1uha8ag"> </span></div> <div class="timer-bar svelte-1uha8ag"><div class="timer-fill svelte-1uha8ag"></div></div> <div class="timer-num svelte-1uha8ag"> </div> <div class="q-card svelte-1uha8ag"><!> <!> <p class="prompt svelte-1uha8ag"> </p></div> <div class="options svelte-1uha8ag"></div> <!> <!></div>'),Ap=L('<div><span class="lb-rank svelte-1uha8ag"> </span> <span class="lb-name svelte-1uha8ag"> </span> <span class="lb-score svelte-1uha8ag"> </span></div>'),xp=L('<button class="btn-primary svelte-1uha8ag">Play Again</button>'),Dp=L('<p class="sub svelte-1uha8ag">Waiting for host…</p>'),Pp=L('<div class="center-col svelte-1uha8ag"><div class="big-emoji svelte-1uha8ag">🏆</div> <h2 class="svelte-1uha8ag">Final Results</h2> <div class="leaderboard svelte-1uha8ag" style="width:100%;max-width:480px"></div> <!> <button class="btn-ghost svelte-1uha8ag">← Home</button></div>'),Op=L('<div class="center-col svelte-1uha8ag"><p class="err svelte-1uha8ag"> </p> <button class="btn-primary svelte-1uha8ag">← Home</button></div>'),Mp=L('<div class="app svelte-1uha8ag"><!></div>');function $p(n,e){Nc(e,!0);const t=ha({projectId:"aktiecase-quiz",appId:"1:52134070639:web:e901510fd6600d489e009a",databaseURL:"https://aktiecase-quiz-default-rtdb.europe-west1.firebasedatabase.app",apiKey:"AIzaSyAY8az3H_7zuwhLHTym7_90iu9qmOmNVq4",authDomain:"aktiecase-quiz.firebaseapp.com",messagingSenderId:"52134070639"}),s=z_(t),i=[{country:"Albania",capital:"Tirana",flag:"🇦🇱"},{country:"Austria",capital:"Vienna",flag:"🇦🇹"},{country:"Belarus",capital:"Minsk",flag:"🇧🇾"},{country:"Belgium",capital:"Brussels",flag:"🇧🇪"},{country:"Bulgaria",capital:"Sofia",flag:"🇧🇬"},{country:"Croatia",capital:"Zagreb",flag:"🇭🇷"},{country:"Czech Republic",capital:"Prague",flag:"🇨🇿"},{country:"Denmark",capital:"Copenhagen",flag:"🇩🇰"},{country:"Estonia",capital:"Tallinn",flag:"🇪🇪"},{country:"Finland",capital:"Helsinki",flag:"🇫🇮"},{country:"France",capital:"Paris",flag:"🇫🇷"},{country:"Germany",capital:"Berlin",flag:"🇩🇪"},{country:"Greece",capital:"Athens",flag:"🇬🇷"},{country:"Hungary",capital:"Budapest",flag:"🇭🇺"},{country:"Iceland",capital:"Reykjavik",flag:"🇮🇸"},{country:"Ireland",capital:"Dublin",flag:"🇮🇪"},{country:"Italy",capital:"Rome",flag:"🇮🇹"},{country:"Latvia",capital:"Riga",flag:"🇱🇻"},{country:"Lithuania",capital:"Vilnius",flag:"🇱🇹"},{country:"Luxembourg",capital:"Luxembourg City",flag:"🇱🇺"},{country:"Netherlands",capital:"Amsterdam",flag:"🇳🇱"},{country:"Norway",capital:"Oslo",flag:"🇳🇴"},{country:"Poland",capital:"Warsaw",flag:"🇵🇱"},{country:"Portugal",capital:"Lisbon",flag:"🇵🇹"},{country:"Romania",capital:"Bucharest",flag:"🇷🇴"},{country:"Serbia",capital:"Belgrade",flag:"🇷🇸"},{country:"Slovakia",capital:"Bratislava",flag:"🇸🇰"},{country:"Slovenia",capital:"Ljubljana",flag:"🇸🇮"},{country:"Spain",capital:"Madrid",flag:"🇪🇸"},{country:"Sweden",capital:"Stockholm",flag:"🇸🇪"},{country:"Switzerland",capital:"Bern",flag:"🇨🇭"},{country:"Ukraine",capital:"Kyiv",flag:"🇺🇦"},{country:"United Kingdom",capital:"London",flag:"🇬🇧"}];function r(_){const p=[..._];for(let y=p.length-1;y>0;y--){const S=Math.floor(Math.random()*(y+1));[p[y],p[S]]=[p[S],p[y]]}return p}function o(_=15){return r(i).slice(0,_).map((p,y)=>{const S=y%2===0,T=S?p.capital:p.country,W=S?i.filter(F=>F.capital!==p.capital).map(F=>F.capital):i.filter(F=>F.country!==p.country).map(F=>F.country);return{prompt:S?`What is the capital of ${p.country}?`:`${p.capital} is the capital of which country?`,flag:p.flag,correct:T,options:r([T,...r(W).slice(0,3)])}})}function a(){if(typeof localStorage>"u")return[];try{return JSON.parse(localStorage.getItem("user_quizzes")??"[]")}catch{return[]}}function c(_){typeof localStorage<"u"&&localStorage.setItem("user_quizzes",JSON.stringify(_))}const h=15,d=[{shape:"▲",color:"#e74c3c"},{shape:"◆",color:"#2980b9"},{shape:"●",color:"#f39c12"},{shape:"■",color:"#27ae60"}],f=["🧠","🎯","🏆","🌍","📚","🎓","💡","🔥","⚡","🎮","🦁","🚀","🎵","🍕","⚽","🏛️","🎨","🦊"];let u=Q("home"),g=Q(""),w=Q(xt(a())),x=Q("capitals"),I=Q("");const j=oe(()=>[{id:"capitals",title:"European Capitals",emoji:"🌍",questionCount:15},...l(w).map(_=>({id:_.id,title:_.title,emoji:_.emoji,questionCount:_.questions.length}))]);function Ee(_){if(_==="capitals")return o();const p=l(w).find(y=>y.id===_);return p?r(p.questions):o()}let K=Q(""),ue=Q(""),tt=Q("🧠"),me=Q(xt([])),fe=Q("");function Ge(){return{prompt:"",imageUrl:"",options:["","","",""],correctIndex:0}}function Ue(_){if(_){const p=l(w).find(y=>y.id===_);v(K,_,!0),v(ue,p.title,!0),v(tt,p.emoji,!0),v(me,p.questions.map(y=>({prompt:y.prompt,imageUrl:y.imageUrl??"",options:[...y.options],correctIndex:y.options.indexOf(y.correct)})),!0)}else v(K,""),v(ue,""),v(tt,"🧠"),v(me,[Ge(),Ge(),Ge()],!0);v(fe,""),v(u,"builder")}function wt(){if(v(fe,""),!l(ue).trim()){v(fe,"Give your quiz a title.");return}const _=l(me).filter(S=>S.prompt.trim()&&S.options.every(T=>T.trim()));if(_.length<2){v(fe,"Add at least 2 complete questions (all 4 answers filled in).");return}const p=_.map(S=>({prompt:S.prompt.trim(),...S.imageUrl.trim()?{imageUrl:S.imageUrl.trim()}:{},correct:S.options[S.correctIndex].trim(),options:S.options.map(T=>T.trim())})),y={id:l(K)||crypto.randomUUID(),title:l(ue).trim(),emoji:l(tt),questions:p};v(w,l(K)?l(w).map(S=>S.id===l(K)?y:S):[...l(w),y],!0),c(l(w)),v(x,y.id,!0),v(u,"home")}function nt(_){confirm("Delete this quiz?")&&(v(w,l(w).filter(p=>p.id!==_),!0),c(l(w)),l(x)===_&&v(x,"capitals"))}let le=Q(xt([])),Ne=Q(0),Re=Q(0),Sn=Q(0),je=Q(0),It=Q(-1),ut=Q(!1),ke=null;function Tn(){v(ut,!1),ke&&clearTimeout(ke),ke=setTimeout(()=>{v(ut,!0)},1500)}let Nn=Q(h),St=Q(xt([])),st=null,Pr=0,Or=Q(""),ii=Q(!1);function Mr(){v(le,Ee(l(x)),!0),v(Ne,0),v(Re,0),v(je,0),v(St,[],!0),v(It,-1),v(u,"solo_q"),Lr()}function Lr(){v(It,-1),v(Nn,h),Pr=Date.now(),Tn(),st&&clearInterval(st),st=setInterval(()=>{fi(Nn,-1),l(Nn)<=0&&(clearInterval(st),st=null,Fr(-1))},1e3)}function Fr(_){if(l(u)!=="solo_q")return;st&&(clearInterval(st),st=null),v(It,_,!0);const p=l(le)[l(Ne)],y=_>=0&&p.options[_]===p.correct,S=Math.max(0,h-(Date.now()-Pr)/1e3);let T=0;y?(T=100+Math.round(S/h*900)+(l(je)>=3?100:l(je)>=2?50:0),v(Re,l(Re)+T),fi(je),v(Or,`+${T}${l(je)>2?" 🔥":""}`),v(ii,!0),setTimeout(()=>v(ii,!1),1200)):v(je,0),v(St,[...l(St),{correct:y,points:T}],!0),v(u,"solo_reveal"),setTimeout(()=>{l(Ne)+1>=l(le).length?(l(Re)>l(Sn)&&v(Sn,l(Re),!0),v(u,"solo_final")):(fi(Ne),v(u,"solo_q"),Lr())},2200)}const Il=oe(()=>l(Nn)/h),Br=oe(()=>l(le)[l(Ne)]),Sl=oe(()=>l(St).filter(_=>_.correct).length),Ae=typeof crypto<"u"?crypto.randomUUID():Math.random().toString(36).slice(2);let it=Q(""),dt=Q(""),Tt=Q(!1),xe=Q(xt({})),Ht=Q(xt([])),ft=Q(0),ri=Q(0),_t=Q(-1),fs=Q(h),_s=null,ps=Q(xt({})),pt=!1,Nt="",rt=null,gs={},oi=Q(xt({})),Vt=null;function Tl(){Vt&&clearInterval(Vt),v(oi,Object.fromEntries(Object.entries(l(xe)).map(([_,p])=>[_,{score:gs[_]??0,name:p.name}])),!0),setTimeout(()=>{const _=Date.now(),p=2e3;Vt=setInterval(()=>{const y=Math.min(1,(Date.now()-_)/p),S=1-Math.pow(1-y,2);v(oi,Object.fromEntries(Object.entries(l(xe)).map(([T,W])=>{const F=gs[T]??0;return[T,{score:Math.round(F+(W.score-F)*S),name:W.name}]})),!0),y>=1&&(clearInterval(Vt),Vt=null)},16)},700)}const ai=oe(()=>Object.entries(l(oi)).sort(([,_],[,p])=>p.score-_.score));function Nl(){const _="ABCDEFGHJKLMNPQRSTUVWXYZ";return Array.from({length:4},()=>_[Math.floor(Math.random()*_.length)]).join("")}async function Rl(){if(!l(it).trim())return;const _=Nl(),p=Ee(l(x));v(dt,_,!0),v(Tt,!0),await Ho(Ve(s,`rooms/${_}`),{phase:"lobby",hostId:Ae,qIndex:0,startTime:0,questions:p,players:{[Ae]:{name:l(it).trim(),score:0,streak:0}}}),Wr(_),v(u,"mp_lobby")}async function kl(){if(!l(it).trim()||!l(I).trim())return;const _=l(I).toUpperCase().replace(/[^A-Z]/g,""),p=await Vo(Ve(s,`rooms/${_}`));if(!p.exists()){v(g,"Room not found.");return}if(p.val().phase!=="lobby"){v(g,"Game already started.");return}v(dt,_,!0),v(Tt,!1),await Ho(Ve(s,`rooms/${_}/players/${Ae}`),{name:l(it).trim(),score:0,streak:0}),Wr(_),v(u,"mp_lobby")}function Wr(_){Nt="";const p=Ve(s,`rooms/${_}`);rt=L_(p,y=>{var F,H;if(!y.exists()){v(u,"mp_error"),v(g,"Room was closed.");return}const S=y.val();v(xe,S.players??{},!0),l(Ht).length||v(Ht,S.questions??[],!0);const T=S.phase??"lobby",W=S.qIndex??0;if(T==="question"&&l(Tt)&&!pt){const B=((F=S.answers)==null?void 0:F[W])??{};Object.keys(B).length>=Object.keys(l(xe)).length&&(pt=!0,Qt(Ve(s,`rooms/${_}`),{phase:"reveal"}))}if(T==="question"&&(Nt!=="question"||W!==l(ft)))gs=Object.fromEntries(Object.entries(l(xe)).map(([B,D])=>[B,D.score])),v(ft,W,!0),v(ri,S.startTime??Date.now(),!0),v(_t,-1),v(ps,{},!0),Al(l(ri)),Tn(),v(u,"mp_question");else if(T==="reveal"&&Nt!=="reveal"){if(v(ps,((H=S.answers)==null?void 0:H[W])??{},!0),v(ft,W,!0),Rn(),Tl(),v(u,"mp_reveal"),l(Tt)){const B=W;setTimeout(async()=>{await Qt(Ve(s,`rooms/${_}`),B+1>=l(Ht).length?{phase:"final"}:{phase:"question",qIndex:B+1,startTime:Date.now()}),pt=!1},6e3)}}else T==="final"&&Nt!=="final"?(Rn(),v(u,"mp_final")):T==="lobby"&&Nt!=="lobby"&&Nt!==""&&(v(Ht,S.questions??[],!0),v(ft,0),v(_t,-1),pt=!1,v(u,"mp_lobby"));Nt=T})}function Al(_){Rn();const p=()=>{v(fs,Math.max(0,h-(Date.now()-_)/1e3),!0),l(fs)<=0&&(Rn(),l(_t)<0&&Ur(-1),l(Tt)&&!pt&&(pt=!0,Qt(Ve(s,`rooms/${l(dt)}`),{phase:"reveal"})))};p(),_s=setInterval(p,150)}function Rn(){_s&&(clearInterval(_s),_s=null)}async function xl(){pt=!1,Nt="lobby",await Qt(Ve(s,`rooms/${l(dt)}`),{phase:"question",qIndex:0,startTime:Date.now()})}async function Ur(_){if(l(_t)>=0||l(u)!=="mp_question")return;v(_t,_,!0);const p=l(Ht)[l(ft)],y=Date.now()-l(ri),S=_>=0&&p.options[_]===p.correct,T=l(xe)[Ae]??{score:0,streak:0};let W=0,F=T.streak??0;if(S?(W=100+Math.round(Math.max(0,h-y/1e3)/h*900)+(F>=3?100:F>=2?50:0),F++):F=0,await Qt(Ve(s,`rooms/${l(dt)}`),{[`answers/${l(ft)}/${Ae}`]:{choice:_,timeMs:y,points:W,correct:S},[`players/${Ae}/score`]:(T.score??0)+W,[`players/${Ae}/streak`]:F}),l(Tt)&&!pt){const H=await Vo(Ve(s,`rooms/${l(dt)}/answers/${l(ft)}`));Object.keys(H.val()??{}).length>=Object.keys(l(xe)).length&&(pt=!0,await Qt(Ve(s,`rooms/${l(dt)}`),{phase:"reveal"}))}}async function Dl(){const _=Ee(l(x));await Qt(Ve(s,`rooms/${l(dt)}`),{phase:"lobby",qIndex:0,startTime:0,questions:_,answers:null,players:Object.fromEntries(Object.entries(l(xe)).map(([p,y])=>[p,{...y,score:0,streak:0}]))})}const Pl=oe(()=>l(fs)/h),$r=oe(()=>l(Ht)[l(ft)]),li=oe(()=>Object.entries(l(xe)).sort(([,_],[,p])=>p.score-_.score)),ms=oe(()=>l(ps)[Ae]);function Hr(_){return["🥇","🥈","🥉"][_]??`${_+1}.`}Kl(()=>{st&&clearInterval(st),Rn(),Vt&&clearInterval(Vt),ke&&clearTimeout(ke),rt==null||rt()});var ci=Mp();Fc("1uha8ag",_=>{kc(()=>{Ac.title="Quiz"})});var Ol=E(ci);{var Ml=_=>{var p=K_(),y=b(E(p),4),S=E(y);lt(S,17,()=>l(j),at,(X,q)=>{var O=Q_();let ie;var _e=E(O),De=E(_e,!0);m(_e);var We=b(_e,2),$e=E(We,!0);m(We);var Fe=b(We,2),Pe=E(Fe);m(Fe);var Qe=b(Fe,2);{var zt=gt=>{var mt=j_(),R=E(mt),N=b(R,2);m(mt),Z("click",R,k=>{k.stopPropagation(),Ue(l(q).id)}),Z("keydown",R,k=>k.key==="Enter"&&Ue(l(q).id)),Z("click",N,k=>{k.stopPropagation(),nt(l(q).id)}),Z("keydown",N,k=>k.key==="Enter"&&nt(l(q).id)),M(gt,mt)};de(Qe,gt=>{l(q).id!=="capitals"&&gt(zt)})}m(O),G(()=>{ie=Ke(O,1,"quiz-card svelte-1uha8ag",null,ie,{selected:l(x)===l(q).id}),P(De,l(q).emoji),P($e,l(q).title),P(Pe,`${l(q).questionCount??""} questions`)}),Z("click",O,()=>v(x,l(q).id,!0)),M(X,O)});var T=b(S,2);m(y);var W=b(y,2),F=E(W),H=b(F,2);m(W);var B=b(W,2),D=E(B);jt(D),Xe(D,"maxlength",4);var z=b(D,2);m(B);var ae=b(B,2);{var be=X=>{var q=Y_(),O=E(q,!0);m(q),G(()=>P(O,l(g))),M(X,q)};de(ae,X=>{l(g)&&X(be)})}m(p),G(X=>z.disabled=X,[()=>!l(I).trim()]),Z("click",T,()=>Ue()),Z("click",F,Mr),Z("click",H,()=>{v(g,""),v(u,"mp_create")}),Pt(D,()=>l(I),X=>v(I,X)),Z("click",z,()=>{v(g,""),v(u,"mp_join")}),M(_,p)},Ll=_=>{var p=np(),y=E(p),S=E(y),T=b(S,2),W=E(T,!0);m(T);var F=b(T,2);m(y);var H=b(y,2),B=E(H);lt(B,21,()=>f,at,(q,O)=>{var ie=X_();let _e;var De=E(ie,!0);m(ie),G(()=>{_e=Ke(ie,1,"ep-btn svelte-1uha8ag",null,_e,{"ep-selected":l(tt)===l(O)}),P(De,l(O))}),Z("click",ie,()=>v(tt,l(O),!0)),M(q,ie)}),m(B);var D=b(B,2);jt(D),m(H);var z=b(H,2);{var ae=q=>{var O=J_(),ie=E(O,!0);m(O),G(()=>P(ie,l(fe))),M(q,O)};de(z,q=>{l(fe)&&q(ae)})}var be=b(z,2);lt(be,21,()=>l(me),at,(q,O,ie)=>{var _e=tp(),De=E(_e),We=E(De);We.textContent=`Q${ie+1}`;var $e=b(We,2);m(De);var Fe=b(De,2);xc(Fe),Xe(Fe,"rows",2);var Pe=b(Fe,2),Qe=E(Pe);jt(Qe);var zt=b(Qe,2);{var gt=N=>{var k=Z_();G(()=>Xe(k,"src",l(O).imageUrl)),bs("error",k,J=>{J.target.style.display="none"}),bs("load",k,J=>{J.target.style.display="block"}),_i(k),M(N,k)},mt=oe(()=>l(O).imageUrl.trim());de(zt,N=>{l(mt)&&N(gt)})}m(Pe);var R=b(Pe,4);lt(R,21,()=>l(O).options,at,(N,k,J)=>{var we=ep();let re;var Oe=E(we),Ye=E(Oe,!0);m(Oe);var ot=b(Oe,2);jt(ot),Xe(ot,"placeholder",`Answer ${J+1}`),m(we),G(()=>{re=Ke(we,1,"bq-opt-row svelte-1uha8ag",null,re,{"bq-correct":l(O).correctIndex===J}),P(Ye,l(O).correctIndex===J?"✓":d[J].shape)}),Z("click",Oe,()=>l(O).correctIndex=J),Z("click",ot,()=>l(O).correctIndex=J),Pt(ot,()=>l(O).options[J],ve=>l(O).options[J]=ve),M(N,we)}),m(R),m(_e),G(()=>$e.disabled=l(me).length<=1),Z("click",$e,()=>v(me,l(me).filter((N,k)=>k!==ie),!0)),Pt(Fe,()=>l(O).prompt,N=>l(O).prompt=N),Pt(Qe,()=>l(O).imageUrl,N=>l(O).imageUrl=N),M(q,_e)}),m(be);var X=b(be,2);m(p),G(()=>P(W,l(K)?"Edit Quiz":"New Quiz")),Z("click",S,()=>v(u,"home")),Z("click",F,wt),Pt(D,()=>l(ue),q=>v(ue,q)),Z("click",X,()=>v(me,[...l(me),Ge()],!0)),M(_,p)},Fl=_=>{var p=ip(),y=b(E(p),2),S=E(y);m(y);var T=b(y,2);jt(T),Xe(T,"maxlength",20);var W=b(T,2);{var F=D=>{var z=sp(),ae=E(z,!0);m(z),G(()=>P(ae,l(g))),M(D,z)};de(W,D=>{l(g)&&D(F)})}var H=b(W,2),B=b(H,2);m(p),G((D,z,ae)=>{P(S,`Playing: ${D??""} ${z??""}`),H.disabled=ae},[()=>{var D;return(D=l(j).find(z=>z.id===l(x)))==null?void 0:D.emoji},()=>{var D;return(D=l(j).find(z=>z.id===l(x)))==null?void 0:D.title},()=>!l(it).trim()]),Pt(T,()=>l(it),D=>v(it,D)),Z("click",H,Rl),Z("click",B,()=>v(u,"home")),M(_,p)},Bl=_=>{var p=op(),y=b(E(p),2);jt(y),Xe(y,"maxlength",4);var S=b(y,2);jt(S),Xe(S,"maxlength",20);var T=b(S,2);{var W=B=>{var D=rp(),z=E(D,!0);m(D),G(()=>P(z,l(g))),M(B,D)};de(T,B=>{l(g)&&B(W)})}var F=b(T,2),H=b(F,2);m(p),G(B=>F.disabled=B,[()=>!l(it).trim()||!l(I).trim()]),Pt(y,()=>l(I),B=>v(I,B)),Pt(S,()=>l(it),B=>v(it,B)),Z("click",F,kl),Z("click",H,()=>v(u,"home")),M(_,p)},Wl=_=>{var p=hp(),y=b(E(p),2),S=E(y,!0);m(y);var T=b(y,4);lt(T,21,()=>Object.entries(l(xe)),at,(D,z)=>{var ae=oe(()=>Es(l(z),2));let be=()=>l(ae)[0],X=()=>l(ae)[1];var q=ap(),O=E(q);let ie;var _e=b(O);m(q),G(()=>{ie=Ke(O,1,"dot svelte-1uha8ag",null,ie,{"dot-me":be()===Ae}),P(_e,` ${X().name??""}${be()===Ae?" (you)":""}`)}),M(D,q)}),m(T);var W=b(T,2);{var F=D=>{var z=lp(),ae=E(z);m(z),G((be,X)=>P(ae,`Start (${be??""} player${X??""})`),[()=>Object.keys(l(xe)).length,()=>Object.keys(l(xe)).length!==1?"s":""]),Z("click",z,xl),M(D,z)},H=D=>{var z=cp();M(D,z)};de(W,D=>{l(Tt)?D(F):D(H,-1)})}var B=b(W,2);m(p),G(()=>P(S,l(dt))),Z("click",B,()=>{rt==null||rt(),v(u,"home")}),M(_,p)},Ul=_=>{const p=oe(()=>l(Il)),y=oe(()=>l(Br));var S=mp(),T=E(S),W=E(T),F=E(W);m(W);var H=b(W,2),B=E(H);m(H);var D=b(H,2);{var z=R=>{var N=up(),k=E(N);m(N),G(()=>P(k,`🔥 ${l(je)??""}`)),M(R,N)};de(D,R=>{l(je)>=2&&R(z)})}m(T);var ae=b(T,2),be=E(ae);m(ae);var X=b(ae,2),q=E(X,!0);m(X);var O=b(X,2),ie=E(O);{var _e=R=>{var N=dp();G(()=>Xe(N,"src",l(y).imageUrl)),bs("error",N,k=>k.target.style.display="none"),_i(N),M(R,N)};de(ie,R=>{l(y).imageUrl&&R(_e)})}var De=b(ie,2);{var We=R=>{var N=fp(),k=E(N,!0);m(N),G(()=>P(k,l(y).flag)),M(R,N)};de(De,R=>{l(y).flag&&R(We)})}var $e=b(De,2),Fe=E($e,!0);m($e),m(O);var Pe=b(O,2);lt(Pe,21,()=>l(y).options,at,(R,N,k)=>{const J=oe(()=>l(N)===l(y).correct),we=oe(()=>k===l(It));var re=_p();let Oe;var Ye=E(re),ot=E(Ye,!0);m(Ye);var ve=b(Ye,2),He=E(ve,!0);m(ve),m(re),G(()=>{Oe=Ke(re,1,"opt svelte-1uha8ag",null,Oe,{revealed:l(u)==="solo_reveal","opt-correct":l(u)==="solo_reveal"&&l(J),"opt-wrong":l(u)==="solo_reveal"&&l(we)&&!l(J),"opt-dim":l(u)==="solo_reveal"&&!l(we)&&!l(J),"opts-hidden":!l(ut)&&l(u)==="solo_q"}),Gt(re,`--c:${d[k].color??""};--delay:${k*80}ms`),re.disabled=l(u)==="solo_reveal"||!l(ut),P(ot,l(u)==="solo_reveal"?l(J)?"✓":l(we)?"✗":d[k].shape:d[k].shape),P(He,l(N))}),Z("click",re,()=>Fr(k)),M(R,re)}),m(Pe);var Qe=b(Pe,2);{var zt=R=>{var N=pp();let k;var J=E(N,!0);m(N),G(()=>{var we,re,Oe;k=Ke(N,1,"banner svelte-1uha8ag",null,k,{"banner-ok":(we=l(St)[l(Ne)])==null?void 0:we.correct,"banner-err":!((re=l(St)[l(Ne)])!=null&&re.correct)}),P(J,(Oe=l(St)[l(Ne)])!=null&&Oe.correct?`🎉 Correct! +${l(St)[l(Ne)].points}`:l(It)===-1?`⏱ Time's up! → ${l(y).correct}`:`❌ Wrong! → ${l(y).correct}`)}),M(R,N)};de(Qe,R=>{l(u)==="solo_reveal"&&R(zt)})}var gt=b(Qe,2);{var mt=R=>{var N=gp(),k=E(N,!0);m(N),G(()=>P(k,l(Or))),M(R,N)};de(gt,R=>{l(ii)&&R(mt)})}m(S),G(R=>{P(F,`${l(Ne)+1} / ${l(le).length??""}`),P(B,`⭐ ${R??""}`),Gt(be,`width:${l(p)*100}%;background:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),Gt(X,`color:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),P(q,l(Nn)),P(Fe,l(y).prompt)},[()=>l(Re).toLocaleString()]),M(_,S)},$l=_=>{var p=vp(),y=E(p),S=E(y,!0);m(y);var T=b(y,4),W=E(T,!0);m(T);var F=b(T,2),H=E(F);m(F);var B=b(F,2),D=b(B,2);m(p),G(z=>{P(S,l(Re)>=l(le).length*900?"🥇":l(Re)>=l(le).length*600?"🥈":l(Re)>=l(le).length*300?"🥉":"🎯"),P(W,z),P(H,`${l(Sl)??""}/${l(le).length??""} correct`)},[()=>l(Re).toLocaleString()]),Z("click",B,Mr),Z("click",D,()=>v(u,"home")),M(_,p)},Hl=_=>{const p=oe(()=>l(Pl)),y=oe(()=>l($r));var S=kp(),T=E(S),W=E(T),F=E(W);m(W);var H=b(W,2),B=E(H);m(H);var D=b(H,2),z=E(D);m(D),m(T);var ae=b(T,2),be=E(ae);m(ae);var X=b(ae,2),q=E(X,!0);m(X);var O=b(X,2),ie=E(O);{var _e=R=>{var N=yp();G(()=>Xe(N,"src",l(y).imageUrl)),bs("error",N,k=>k.target.style.display="none"),_i(N),M(R,N)};de(ie,R=>{l(y).imageUrl&&R(_e)})}var De=b(ie,2);{var We=R=>{var N=Cp(),k=E(N,!0);m(N),G(()=>P(k,l(y).flag)),M(R,N)};de(De,R=>{l(y).flag&&R(We)})}var $e=b(De,2),Fe=E($e,!0);m($e),m(O);var Pe=b(O,2);lt(Pe,21,()=>l(y).options,at,(R,N,k)=>{const J=oe(()=>l(N)===l(y).correct),we=oe(()=>k===l(_t));var re=Ep();let Oe;var Ye=E(re),ot=E(Ye,!0);m(Ye);var ve=b(Ye,2),He=E(ve,!0);m(ve),m(re),G(()=>{Oe=Ke(re,1,"opt svelte-1uha8ag",null,Oe,{revealed:l(u)==="mp_reveal","opt-correct":l(u)==="mp_reveal"&&l(J),"opt-wrong":l(u)==="mp_reveal"&&l(we)&&!l(J),"opt-dim":l(u)==="mp_reveal"&&!l(we)&&!l(J),"opts-hidden":!l(ut)&&l(u)==="mp_question"}),Gt(re,`--c:${d[k].color??""};--delay:${k*80}ms`),re.disabled=l(u)==="mp_reveal"||l(_t)>=0||!l(ut),P(ot,l(u)==="mp_reveal"?l(J)?"✓":l(we)?"✗":d[k].shape:d[k].shape),P(He,l(N))}),Z("click",re,()=>Ur(k)),M(R,re)}),m(Pe);var Qe=b(Pe,2);{var zt=R=>{var N=bp();M(R,N)};de(Qe,R=>{l(u)==="mp_question"&&l(_t)>=0&&R(zt)})}var gt=b(Qe,2);{var mt=R=>{var N=Rp(),k=Dc(N);let J;var we=E(k,!0);m(k);var re=b(k,2);{var Oe=ve=>{const He=oe(()=>{var sn,rn;return((rn=(sn=l(ai)[0])==null?void 0:sn[1])==null?void 0:rn.score)||1});var Rt=Sp();lt(Rt,21,()=>l(ai).slice(0,3),at,(sn,rn,vs)=>{var ys=oe(()=>Es(l(rn),2));let on=()=>l(ys)[0],kt=()=>l(ys)[1];const kn=oe(()=>{var At;return(((At=l(xe)[on()])==null?void 0:At.score)??0)-(gs[on()]??0)});var qt=Ip();let an;var An=E(qt),Cs=E(An,!0);m(An);var xn=b(An,2),Dn=E(xn),hi=E(Dn),ql=E(hi,!0);m(hi);var Gl=b(hi,2);{var jl=At=>{var Pn=wp(),ui=E(Pn);m(Pn),G(()=>P(ui,`+${l(kn)??""}`)),M(At,Pn)};de(Gl,At=>{l(kn)>0&&At(jl)})}m(Dn);var Vr=b(Dn,2),Ql=E(Vr);m(Vr),m(xn);var zr=b(xn,2),Yl=E(zr,!0);m(zr),m(qt),G((At,Pn,ui)=>{an=Ke(qt,1,"alb-row svelte-1uha8ag",null,an,{"alb-me":on()===Ae}),P(Cs,At),P(ql,kt().name),Gt(Ql,`width:${Pn??""}%`),P(Yl,ui)},[()=>Hr(vs),()=>Math.max(4,kt().score/l(He)*100),()=>kt().score.toLocaleString()]),M(sn,qt)}),m(Rt),M(ve,Rt)};de(re,ve=>{l(ai).length>0&&ve(Oe)})}var Ye=b(re,2);{var ot=ve=>{var He=Np();lt(He,21,()=>l(li).slice(3),at,(Rt,sn,rn)=>{var vs=oe(()=>Es(l(sn),2));let ys=()=>l(vs)[0],on=()=>l(vs)[1];var kt=Tp();let kn;var qt=E(kt);qt.textContent=`${rn+4}.`;var an=b(qt,2),An=E(an,!0);m(an);var Cs=b(an,2),xn=E(Cs,!0);m(Cs),m(kt),G(Dn=>{kn=Ke(kt,1,"lb-row svelte-1uha8ag",null,kn,{"lb-me":ys()===Ae}),P(An,on().name),P(xn,Dn)},[()=>on().score.toLocaleString()]),M(Rt,kt)}),m(He),M(ve,He)};de(Ye,ve=>{l(li).length>3&&ve(ot)})}G(()=>{var ve,He,Rt;J=Ke(k,1,"banner svelte-1uha8ag",null,J,{"banner-ok":(ve=l(ms))==null?void 0:ve.correct,"banner-err":!((He=l(ms))!=null&&He.correct)}),P(we,(Rt=l(ms))!=null&&Rt.correct?`🎉 +${l(ms).points} pts`:l(_t)===-1?`⏱ Time's up! → ${l(y).correct}`:`❌ Wrong! → ${l(y).correct}`)}),M(R,N)};de(gt,R=>{l(u)==="mp_reveal"&&R(mt)})}m(S),G((R,N,k,J)=>{P(F,`${l(ft)+1} / ${l(Ht).length??""}`),P(B,`⭐ ${R??""}`),P(z,`👥 ${N??""}/${k??""}`),Gt(be,`width:${l(p)*100}%;background:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),Gt(X,`color:${l(p)>.4?"#2ecc71":l(p)>.2?"#f39c12":"#e74c3c"}`),P(q,J),P(Fe,l(y).prompt)},[()=>{var R;return(((R=l(xe)[Ae])==null?void 0:R.score)??0).toLocaleString()},()=>Object.keys(l(ps)).length,()=>Object.keys(l(xe)).length,()=>Math.ceil(l(fs))]),M(_,S)},Vl=_=>{var p=Pp(),y=b(E(p),4);lt(y,21,()=>l(li),at,(H,B,D)=>{var z=oe(()=>Es(l(B),2));let ae=()=>l(z)[0],be=()=>l(z)[1];var X=Ap();let q;var O=E(X),ie=E(O,!0);m(O);var _e=b(O,2),De=E(_e);m(_e);var We=b(_e,2),$e=E(We,!0);m(We),m(X),G((Fe,Pe)=>{q=Ke(X,1,"lb-row svelte-1uha8ag",null,q,{"lb-me":ae()===Ae,"lb-gold":D===0}),P(ie,Fe),P(De,`${be().name??""}${ae()===Ae?" (you)":""}`),P($e,Pe)},[()=>Hr(D),()=>be().score.toLocaleString()]),M(H,X)}),m(y);var S=b(y,2);{var T=H=>{var B=xp();Z("click",B,Dl),M(H,B)},W=H=>{var B=Dp();M(H,B)};de(S,H=>{l(Tt)?H(T):H(W,-1)})}var F=b(S,2);m(p),Z("click",F,()=>{rt==null||rt(),v(u,"home")}),M(_,p)},zl=_=>{var p=Op(),y=E(p),S=E(y,!0);m(y);var T=b(y,2);m(p),G(()=>P(S,l(g))),Z("click",T,()=>v(u,"home")),M(_,p)};de(Ol,_=>{l(u)==="home"?_(Ml):l(u)==="builder"?_(Ll,1):l(u)==="mp_create"?_(Fl,2):l(u)==="mp_join"?_(Bl,3):l(u)==="mp_lobby"?_(Wl,4):(l(u)==="solo_q"||l(u)==="solo_reveal")&&l(Br)?_(Ul,5):l(u)==="solo_final"?_($l,6):(l(u)==="mp_question"||l(u)==="mp_reveal")&&l($r)?_(Hl,7):l(u)==="mp_final"?_(Vl,8):l(u)==="mp_error"&&_(zl,9)})}m(ci),M(n,ci),Rc()}Pc(["click","keydown"]);export{$p as component};
