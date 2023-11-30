(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function g0(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const n2={},c3=[],D2=()=>{},Gl=()=>!1,Kl=/^on[^a-z]/,j4=c=>Kl.test(c),L0=c=>c.startsWith("onUpdate:"),z2=Object.assign,x0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Xl=Object.prototype.hasOwnProperty,W=(c,a)=>Xl.call(c,a),I=Array.isArray,a3=c=>G4(c)==="[object Map]",ec=c=>G4(c)==="[object Set]",$=c=>typeof c=="function",f2=c=>typeof c=="string",W4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",rc=c=>(i2(c)||$(c))&&$(c.then)&&$(c.catch),sc=Object.prototype.toString,G4=c=>sc.call(c),Yl=c=>G4(c).slice(8,-1),nc=c=>G4(c)==="[object Object]",b0=c=>f2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,b4=g0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Ql=/-(\w)/g,X2=K4(c=>c.replace(Ql,(a,e)=>e?e.toUpperCase():"")),Jl=/\B([A-Z])/g,h3=K4(c=>c.replace(Jl,"-$1").toLowerCase()),X4=K4(c=>c.charAt(0).toUpperCase()+c.slice(1)),y6=K4(c=>c?`on${X4(c)}`:""),B1=(c,a)=>!Object.is(c,a),S6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},P4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Zl=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let f5;const q6=()=>f5||(f5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function i3(c){if(I(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=f2(r)?ro(r):i3(r);if(s)for(const n in s)a[n]=s[n]}return a}else if(f2(c)||i2(c))return c}const co=/;(?![^(]*\))/g,ao=/:([^]+)/,eo=/\/\*[^]*?\*\//g;function ro(c){const a={};return c.replace(eo,"").split(co).forEach(e=>{if(e){const r=e.split(ao);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function H3(c){let a="";if(f2(c))a=c;else if(I(c))for(let e=0;e<c.length;e++){const r=H3(c[e]);r&&(a+=r+" ")}else if(i2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}function so(c){if(!c)return null;let{class:a,style:e}=c;return a&&!f2(a)&&(c.class=H3(a)),e&&(c.style=i3(e)),c}const no="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",io=g0(no);function ic(c){return!!c||c===""}const tc=c=>f2(c)?c:c==null?"":I(c)||i2(c)&&(c.toString===sc||!$(c.toString))?JSON.stringify(c,lc,2):String(c),lc=(c,a)=>a&&a.__v_isRef?lc(c,a.value):a3(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s])=>(e[`${r} =>`]=s,e),{})}:ec(a)?{[`Set(${a.size})`]:[...a.values()]}:i2(a)&&!I(a)&&!nc(a)?String(a):a;let R2;class to{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=R2,!a&&R2&&(this.index=(R2.scopes||(R2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=R2;try{return R2=this,a()}finally{R2=e}}}on(){R2=this}off(){R2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lo(c,a=R2){a&&a.active&&a.effects.push(c)}function oo(){return R2}const N0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},oc=c=>(c.w&d1)>0,fc=c=>(c.n&d1)>0,fo=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=d1},mo=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];oc(s)&&!fc(s)?s.delete(c):a[e++]=s,s.w&=~d1,s.n&=~d1}a.length=e}},j6=new WeakMap;let N3=0,d1=1;const W6=30;let B2;const _1=Symbol(""),G6=Symbol("");class y0{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,lo(this,r)}run(){if(!this.active)return this.fn();let a=B2,e=p1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=B2,B2=this,p1=!0,d1=1<<++N3,N3<=W6?fo(this):m5(this),this.fn()}finally{N3<=W6&&mo(this),d1=1<<--N3,B2=this.parent,p1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){B2===this?this.deferStop=!0:this.active&&(m5(this),this.onStop&&this.onStop(),this.active=!1)}}function m5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let p1=!0;const mc=[];function z3(){mc.push(p1),p1=!1}function p3(){const c=mc.pop();p1=c===void 0?!0:c}function S2(c,a,e){if(p1&&B2){let r=j6.get(c);r||j6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=N0()),uc(s)}}function uc(c,a){let e=!1;N3<=W6?fc(c)||(c.n|=d1,e=!oc(c)):e=!c.has(B2),e&&(c.add(B2),B2.deps.push(c))}function e1(c,a,e,r,s,n){const i=j6.get(c);if(!i)return;let t=[];if(a==="clear")t=[...i.values()];else if(e==="length"&&I(c)){const l=Number(r);i.forEach((o,f)=>{(f==="length"||!W4(f)&&f>=l)&&t.push(o)})}else switch(e!==void 0&&t.push(i.get(e)),a){case"add":I(c)?b0(e)&&t.push(i.get("length")):(t.push(i.get(_1)),a3(c)&&t.push(i.get(G6)));break;case"delete":I(c)||(t.push(i.get(_1)),a3(c)&&t.push(i.get(G6)));break;case"set":a3(c)&&t.push(i.get(_1));break}if(t.length===1)t[0]&&K6(t[0]);else{const l=[];for(const o of t)o&&l.push(...o);K6(N0(l))}}function K6(c,a){const e=I(c)?c:[...c];for(const r of e)r.computed&&u5(r);for(const r of e)r.computed||u5(r)}function u5(c,a){(c!==B2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const uo=g0("__proto__,__v_isRef,__isVue"),vc=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(W4)),v5=vo();function vo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=G(this);for(let n=0,i=this.length;n<i;n++)S2(r,"get",n+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){z3();const r=G(this)[a].apply(this,e);return p3(),r}}),c}function ho(c){const a=G(this);return S2(a,"has",c),a.hasOwnProperty(c)}class hc{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,n=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return n;if(e==="__v_raw"&&r===(s?n?So:Vc:n?pc:zc).get(a))return a;const i=I(a);if(!s){if(i&&W(v5,e))return Reflect.get(v5,e,r);if(e==="hasOwnProperty")return ho}const t=Reflect.get(a,e,r);return(W4(e)?vc.has(e):uo(e))||(s||S2(a,"get",e),n)?t:d2(t)?i&&b0(e)?t:t.value:i2(t)?s?Mc(t):Q4(t):t}}class Hc extends hc{constructor(a=!1){super(!1,a)}set(a,e,r,s){let n=a[e];if(t3(n)&&d2(n)&&!d2(r))return!1;if(!this._shallow&&(!T4(r)&&!t3(r)&&(n=G(n),r=G(r)),!I(a)&&d2(n)&&!d2(r)))return n.value=r,!0;const i=I(a)&&b0(e)?Number(e)<a.length:W(a,e),t=Reflect.set(a,e,r,s);return a===G(s)&&(i?B1(r,n)&&e1(a,"set",e,r):e1(a,"add",e,r)),t}deleteProperty(a,e){const r=W(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&e1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!W4(e)||!vc.has(e))&&S2(a,"has",e),r}ownKeys(a){return S2(a,"iterate",I(a)?"length":_1),Reflect.ownKeys(a)}}class Ho extends hc{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const zo=new Hc,po=new Ho,Vo=new Hc(!0),S0=c=>c,Y4=c=>Reflect.getPrototypeOf(c);function f4(c,a,e=!1,r=!1){c=c.__v_raw;const s=G(c),n=G(a);e||(B1(a,n)&&S2(s,"get",a),S2(s,"get",n));const{has:i}=Y4(s),t=r?S0:e?k0:F3;if(i.call(s,a))return t(c.get(a));if(i.call(s,n))return t(c.get(n));c!==s&&c.get(a)}function m4(c,a=!1){const e=this.__v_raw,r=G(e),s=G(c);return a||(B1(c,s)&&S2(r,"has",c),S2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function u4(c,a=!1){return c=c.__v_raw,!a&&S2(G(c),"iterate",_1),Reflect.get(c,"size",c)}function h5(c){c=G(c);const a=G(this);return Y4(a).has.call(a,c)||(a.add(c),e1(a,"add",c,c)),this}function H5(c,a){a=G(a);const e=G(this),{has:r,get:s}=Y4(e);let n=r.call(e,c);n||(c=G(c),n=r.call(e,c));const i=s.call(e,c);return e.set(c,a),n?B1(a,i)&&e1(e,"set",c,a):e1(e,"add",c,a),this}function z5(c){const a=G(this),{has:e,get:r}=Y4(a);let s=e.call(a,c);s||(c=G(c),s=e.call(a,c)),r&&r.call(a,c);const n=a.delete(c);return s&&e1(a,"delete",c,void 0),n}function p5(){const c=G(this),a=c.size!==0,e=c.clear();return a&&e1(c,"clear",void 0,void 0),e}function v4(c,a){return function(r,s){const n=this,i=n.__v_raw,t=G(i),l=a?S0:c?k0:F3;return!c&&S2(t,"iterate",_1),i.forEach((o,f)=>r.call(s,l(o),l(f),n))}}function h4(c,a,e){return function(...r){const s=this.__v_raw,n=G(s),i=a3(n),t=c==="entries"||c===Symbol.iterator&&i,l=c==="keys"&&i,o=s[c](...r),f=e?S0:a?k0:F3;return!a&&S2(n,"iterate",l?G6:_1),{next(){const{value:u,done:h}=o.next();return h?{value:u,done:h}:{value:t?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function u1(c){return function(...a){return c==="delete"?!1:this}}function Mo(){const c={get(n){return f4(this,n)},get size(){return u4(this)},has:m4,add:h5,set:H5,delete:z5,clear:p5,forEach:v4(!1,!1)},a={get(n){return f4(this,n,!1,!0)},get size(){return u4(this)},has:m4,add:h5,set:H5,delete:z5,clear:p5,forEach:v4(!1,!0)},e={get(n){return f4(this,n,!0)},get size(){return u4(this,!0)},has(n){return m4.call(this,n,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:v4(!0,!1)},r={get(n){return f4(this,n,!0,!0)},get size(){return u4(this,!0)},has(n){return m4.call(this,n,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:v4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=h4(n,!1,!1),e[n]=h4(n,!0,!1),a[n]=h4(n,!1,!0),r[n]=h4(n,!0,!0)}),[c,e,a,r]}const[Co,go,Lo,xo]=Mo();function w0(c,a){const e=a?c?xo:Lo:c?go:Co;return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(W(e,s)&&s in r?e:r,s,n)}const bo={get:w0(!1,!1)},No={get:w0(!1,!0)},yo={get:w0(!0,!1)},zc=new WeakMap,pc=new WeakMap,Vc=new WeakMap,So=new WeakMap;function wo(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ao(c){return c.__v_skip||!Object.isExtensible(c)?0:wo(Yl(c))}function Q4(c){return t3(c)?c:A0(c,!1,zo,bo,zc)}function dc(c){return A0(c,!1,Vo,No,pc)}function Mc(c){return A0(c,!0,po,yo,Vc)}function A0(c,a,e,r,s){if(!i2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=Ao(c);if(i===0)return c;const t=new Proxy(c,i===2?r:e);return s.set(c,t),t}function e3(c){return t3(c)?e3(c.__v_raw):!!(c&&c.__v_isReactive)}function t3(c){return!!(c&&c.__v_isReadonly)}function T4(c){return!!(c&&c.__v_isShallow)}function Cc(c){return e3(c)||t3(c)}function G(c){const a=c&&c.__v_raw;return a?G(a):c}function gc(c){return P4(c,"__v_skip",!0),c}const F3=c=>i2(c)?Q4(c):c,k0=c=>i2(c)?Mc(c):c;function Lc(c){p1&&B2&&(c=G(c),uc(c.dep||(c.dep=N0())))}function xc(c,a){c=G(c);const e=c.dep;e&&K6(e)}function d2(c){return!!(c&&c.__v_isRef===!0)}function bc(c){return Nc(c,!1)}function ko(c){return Nc(c,!0)}function Nc(c,a){return d2(c)?c:new Po(c,a)}class Po{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:G(a),this._value=e?a:F3(a)}get value(){return Lc(this),this._value}set value(a){const e=this.__v_isShallow||T4(a)||t3(a);a=e?a:G(a),B1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:F3(a),xc(this))}}function r3(c){return d2(c)?c.value:c}const To={get:(c,a,e)=>r3(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return d2(s)&&!d2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function yc(c){return e3(c)?c:new Proxy(c,To)}class _o{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new y0(a,()=>{this._dirty||(this._dirty=!0,xc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=G(this);return Lc(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Ro(c,a,e=!1){let r,s;const n=$(c);return n?(r=c,s=D2):(r=c.get,s=c.set),new _o(r,s,n||!s,e)}function V1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(n){J4(n,a,e)}return s}function O2(c,a,e,r){if($(c)){const n=V1(c,a,e,r);return n&&rc(n)&&n.catch(i=>{J4(i,a,e)}),n}const s=[];for(let n=0;n<c.length;n++)s.push(O2(c[n],a,e,r));return s}function J4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,t=e;for(;n;){const o=n.ec;if(o){for(let f=0;f<o.length;f++)if(o[f](c,i,t)===!1)return}n=n.parent}const l=a.appContext.config.errorHandler;if(l){V1(l,null,10,[c,i,t]);return}}Bo(c,e,s,r)}function Bo(c,a,e,r=!0){console.error(c)}let D3=!1,X6=!1;const V2=[];let G2=0;const s3=[];let c1=null,A1=0;const Sc=Promise.resolve();let P0=null;function wc(c){const a=P0||Sc;return c?a.then(this?c.bind(this):c):a}function Eo(c){let a=G2+1,e=V2.length;for(;a<e;){const r=a+e>>>1,s=V2[r],n=O3(s);n<c||n===c&&s.pre?a=r+1:e=r}return a}function T0(c){(!V2.length||!V2.includes(c,D3&&c.allowRecurse?G2+1:G2))&&(c.id==null?V2.push(c):V2.splice(Eo(c.id),0,c),Ac())}function Ac(){!D3&&!X6&&(X6=!0,P0=Sc.then(Pc))}function Fo(c){const a=V2.indexOf(c);a>G2&&V2.splice(a,1)}function Do(c){I(c)?s3.push(...c):(!c1||!c1.includes(c,c.allowRecurse?A1+1:A1))&&s3.push(c),Ac()}function V5(c,a=D3?G2+1:0){for(;a<V2.length;a++){const e=V2[a];e&&e.pre&&(V2.splice(a,1),a--,e())}}function kc(c){if(s3.length){const a=[...new Set(s3)];if(s3.length=0,c1){c1.push(...a);return}for(c1=a,c1.sort((e,r)=>O3(e)-O3(r)),A1=0;A1<c1.length;A1++)c1[A1]();c1=null,A1=0}}const O3=c=>c.id==null?1/0:c.id,Oo=(c,a)=>{const e=O3(c)-O3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function Pc(c){X6=!1,D3=!0,V2.sort(Oo);const a=D2;try{for(G2=0;G2<V2.length;G2++){const e=V2[G2];e&&e.active!==!1&&V1(e,null,14)}}finally{G2=0,V2.length=0,kc(),D3=!1,P0=null,(V2.length||s3.length)&&Pc()}}function Io(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||n2;let s=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in r){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:h}=r[f]||n2;h&&(s=e.map(z=>f2(z)?z.trim():z)),u&&(s=e.map(Zl))}let t,l=r[t=y6(a)]||r[t=y6(X2(a))];!l&&n&&(l=r[t=y6(h3(a))]),l&&O2(l,c,6,s);const o=r[t+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,O2(o,c,6,s)}}function Tc(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},t=!1;if(!$(c)){const l=o=>{const f=Tc(o,a,!0);f&&(t=!0,z2(i,f))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!n&&!t?(i2(c)&&r.set(c,null),null):(I(n)?n.forEach(l=>i[l]=null):z2(i,n),i2(c)&&r.set(c,i),i)}function Z4(c,a){return!c||!j4(a)?!1:(a=a.slice(2).replace(/Once$/,""),W(c,a[0].toLowerCase()+a.slice(1))||W(c,h3(a))||W(c,a))}let x2=null,c6=null;function _4(c){const a=x2;return x2=c,c6=c&&c.type.__scopeId||null,a}function _c(c){c6=c}function Rc(){c6=null}function Bc(c,a=x2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&w5(-1);const n=_4(a);let i;try{i=c(...s)}finally{_4(n),r._d&&w5(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function w6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:n,propsOptions:[i],slots:t,attrs:l,emit:o,render:f,renderCache:u,data:h,setupState:z,ctx:b,inheritAttrs:S}=c;let P,V;const C=_4(c);try{if(e.shapeFlag&4){const w=s||r;P=W2(f.call(w,w,u,n,z,h,b)),V=l}else{const w=a;P=W2(w.length>1?w(n,{attrs:l,slots:t,emit:o}):w(n,null)),V=a.props?l:Uo(l)}}catch(w){P3.length=0,J4(w,c,1),P=O(M1)}let B=P;if(V&&S!==!1){const w=Object.keys(V),{shapeFlag:q}=B;w.length&&q&7&&(i&&w.some(L0)&&(V=$o(V,i)),B=l3(B,V))}return e.dirs&&(B=l3(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),P=B,_4(C),P}const Uo=c=>{let a;for(const e in c)(e==="class"||e==="style"||j4(e))&&((a||(a={}))[e]=c[e]);return a},$o=(c,a)=>{const e={};for(const r in c)(!L0(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function qo(c,a,e){const{props:r,children:s,component:n}=c,{props:i,children:t,patchFlag:l}=a,o=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?d5(r,i,o):!!i;if(l&8){const f=a.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(i[h]!==r[h]&&!Z4(o,h))return!0}}}else return(s||t)&&(!t||!t.$stable)?!0:r===i?!1:r?i?d5(r,i,o):!0:!!i;return!1}function d5(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(a[n]!==c[n]&&!Z4(e,n))return!0}return!1}function jo({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Ec="components";function I3(c,a){return Go(Ec,c,!0,a)||c}const Wo=Symbol.for("v-ndc");function Go(c,a,e=!0,r=!1){const s=x2||H2;if(s){const n=s.type;if(c===Ec){const t=Ff(n,!1);if(t&&(t===a||t===X2(a)||t===X4(X2(a))))return n}const i=M5(s[c]||n[c],a)||M5(s.appContext[c],a);return!i&&r?n:i}}function M5(c,a){return c&&(c[a]||c[X2(a)]||c[X4(X2(a))])}const Ko=c=>c.__isSuspense;function Xo(c,a){a&&a.pendingBranch?I(c)?a.effects.push(...c):a.effects.push(c):Do(c)}const H4={};function w3(c,a,e){return Fc(c,a,e)}function Fc(c,a,{immediate:e,deep:r,flush:s,onTrack:n,onTrigger:i}=n2){var t;const l=oo()===((t=H2)==null?void 0:t.scope)?H2:null;let o,f=!1,u=!1;if(d2(c)?(o=()=>c.value,f=T4(c)):e3(c)?(o=()=>c,r=!0):I(c)?(u=!0,f=c.some(w=>e3(w)||T4(w)),o=()=>c.map(w=>{if(d2(w))return w.value;if(e3(w))return Q1(w);if($(w))return V1(w,l,2)})):$(c)?a?o=()=>V1(c,l,2):o=()=>{if(!(l&&l.isUnmounted))return h&&h(),O2(c,l,3,[z])}:o=D2,a&&r){const w=o;o=()=>Q1(w())}let h,z=w=>{h=C.onStop=()=>{V1(w,l,4)}},b;if($3)if(z=D2,a?e&&O2(a,l,3,[o(),u?[]:void 0,z]):o(),s==="sync"){const w=If();b=w.__watcherHandles||(w.__watcherHandles=[])}else return D2;let S=u?new Array(c.length).fill(H4):H4;const P=()=>{if(C.active)if(a){const w=C.run();(r||f||(u?w.some((q,Z)=>B1(q,S[Z])):B1(w,S)))&&(h&&h(),O2(a,l,3,[w,S===H4?void 0:u&&S[0]===H4?[]:S,z]),S=w)}else C.run()};P.allowRecurse=!!a;let V;s==="sync"?V=P:s==="post"?V=()=>y2(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),V=()=>T0(P));const C=new y0(o,V);a?e?P():S=C.run():s==="post"?y2(C.run.bind(C),l&&l.suspense):C.run();const B=()=>{C.stop(),l&&l.scope&&x0(l.scope.effects,C)};return b&&b.push(B),B}function Yo(c,a,e){const r=this.proxy,s=f2(c)?c.includes(".")?Dc(r,c):()=>r[c]:c.bind(r,r);let n;$(a)?n=a:(n=a.handler,e=a);const i=H2;o3(this);const t=Fc(s,n.bind(r),e);return i?o3(i):R1(),t}function Dc(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function Q1(c,a){if(!i2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),d2(c))Q1(c.value,a);else if(I(c))for(let e=0;e<c.length;e++)Q1(c[e],a);else if(ec(c)||a3(c))c.forEach(e=>{Q1(e,a)});else if(nc(c))for(const e in c)Q1(c[e],a);return c}function N1(c,a,e,r){const s=c.dirs,n=a&&a.dirs;for(let i=0;i<s.length;i++){const t=s[i];n&&(t.oldValue=n[i].value);let l=t.dir[r];l&&(z3(),O2(l,e,8,[c.el,t,c,a]),p3())}}/*! #__NO_SIDE_EFFECTS__ */function _0(c,a){return $(c)?(()=>z2({name:c.name},a,{setup:c}))():c}const A3=c=>!!c.type.__asyncLoader,Oc=c=>c.type.__isKeepAlive;function Qo(c,a){Ic(c,"a",a)}function Jo(c,a){Ic(c,"da",a)}function Ic(c,a,e=H2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(a6(a,r,e),e){let s=e.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&Zo(r,a,e,s),s=s.parent}}function Zo(c,a,e,r){const s=a6(a,c,r,!0);Uc(()=>{x0(r[a],s)},e)}function a6(c,a,e=H2,r=!1){if(e){const s=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;z3(),o3(e);const t=O2(a,e,c,i);return R1(),p3(),t});return r?s.unshift(n):s.push(n),n}}const t1=c=>(a,e=H2)=>(!$3||c==="sp")&&a6(c,(...r)=>a(...r),e),cf=t1("bm"),af=t1("m"),ef=t1("bu"),rf=t1("u"),sf=t1("bum"),Uc=t1("um"),nf=t1("sp"),tf=t1("rtg"),lf=t1("rtc");function of(c,a=H2){a6("ec",c,a)}function $c(c,a,e,r){let s;const n=e&&e[r];if(I(c)||f2(c)){s=new Array(c.length);for(let i=0,t=c.length;i<t;i++)s[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){s=new Array(c);for(let i=0;i<c;i++)s[i]=a(i+1,i,void 0,n&&n[i])}else if(i2(c))if(c[Symbol.iterator])s=Array.from(c,(i,t)=>a(i,t,void 0,n&&n[t]));else{const i=Object.keys(c);s=new Array(i.length);for(let t=0,l=i.length;t<l;t++){const o=i[t];s[t]=a(c[o],o,t,n&&n[t])}}else s=[];return e&&(e[r]=s),s}function Y6(c,a,e={},r,s){if(x2.isCE||x2.parent&&A3(x2.parent)&&x2.parent.isCE)return a!=="default"&&(e.name=a),O("slot",e,r&&r());let n=c[a];n&&n._c&&(n._d=!1),M2();const i=n&&qc(n(e)),t=E4(L2,{key:e.key||i&&i.key||`_${a}`},i||(r?r():[]),i&&c._===1?64:-2);return!s&&t.scopeId&&(t.slotScopeIds=[t.scopeId+"-s"]),n&&n._c&&(n._d=!0),t}function qc(c){return c.some(a=>F4(a)?!(a.type===M1||a.type===L2&&!qc(a.children)):!0)?c:null}const Q6=c=>c?r9(c)?D0(c)||c.proxy:Q6(c.parent):null,k3=z2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>Q6(c.parent),$root:c=>Q6(c.root),$emit:c=>c.emit,$options:c=>R0(c),$forceUpdate:c=>c.f||(c.f=()=>T0(c.update)),$nextTick:c=>c.n||(c.n=wc.bind(c.proxy)),$watch:c=>Yo.bind(c)}),A6=(c,a)=>c!==n2&&!c.__isScriptSetup&&W(c,a),ff={get({_:c},a){const{ctx:e,setupState:r,data:s,props:n,accessCache:i,type:t,appContext:l}=c;let o;if(a[0]!=="$"){const z=i[a];if(z!==void 0)switch(z){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return n[a]}else{if(A6(r,a))return i[a]=1,r[a];if(s!==n2&&W(s,a))return i[a]=2,s[a];if((o=c.propsOptions[0])&&W(o,a))return i[a]=3,n[a];if(e!==n2&&W(e,a))return i[a]=4,e[a];J6&&(i[a]=0)}}const f=k3[a];let u,h;if(f)return a==="$attrs"&&S2(c,"get",a),f(c);if((u=t.__cssModules)&&(u=u[a]))return u;if(e!==n2&&W(e,a))return i[a]=4,e[a];if(h=l.config.globalProperties,W(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:n}=c;return A6(s,a)?(s[a]=e,!0):r!==n2&&W(r,a)?(r[a]=e,!0):W(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:n}},i){let t;return!!e[i]||c!==n2&&W(c,i)||A6(a,i)||(t=n[0])&&W(t,i)||W(r,i)||W(k3,i)||W(s.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:W(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function C5(c){return I(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let J6=!0;function mf(c){const a=R0(c),e=c.proxy,r=c.ctx;J6=!1,a.beforeCreate&&g5(a.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:t,provide:l,inject:o,created:f,beforeMount:u,mounted:h,beforeUpdate:z,updated:b,activated:S,deactivated:P,beforeDestroy:V,beforeUnmount:C,destroyed:B,unmounted:w,render:q,renderTracked:Z,renderTriggered:t2,errorCaptured:w2,serverPrefetch:C2,expose:P2,inheritAttrs:f1,components:b1,directives:U2,filters:C3}=a;if(o&&uf(o,r,null),i)for(const J in i){const K=i[J];$(K)&&(r[J]=K.bind(e))}if(s){const J=s.call(e,e);i2(J)&&(c.data=Q4(J))}if(J6=!0,n)for(const J in n){const K=n[J],J2=$(K)?K.bind(e,e):$(K.get)?K.get.bind(e,e):D2,m1=!$(K)&&$(K.set)?K.set.bind(e):D2,$2=v2({get:J2,set:m1});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>$2.value,set:b2=>$2.value=b2})}if(t)for(const J in t)jc(t[J],r,e,J);if(l){const J=$(l)?l.call(e):l;Reflect.ownKeys(J).forEach(K=>{N4(K,J[K])})}f&&g5(f,c,"c");function u2(J,K){I(K)?K.forEach(J2=>J(J2.bind(e))):K&&J(K.bind(e))}if(u2(cf,u),u2(af,h),u2(ef,z),u2(rf,b),u2(Qo,S),u2(Jo,P),u2(of,w2),u2(lf,Z),u2(tf,t2),u2(sf,C),u2(Uc,w),u2(nf,C2),I(P2))if(P2.length){const J=c.exposed||(c.exposed={});P2.forEach(K=>{Object.defineProperty(J,K,{get:()=>e[K],set:J2=>e[K]=J2})})}else c.exposed||(c.exposed={});q&&c.render===D2&&(c.render=q),f1!=null&&(c.inheritAttrs=f1),b1&&(c.components=b1),U2&&(c.directives=U2)}function uf(c,a,e=D2){I(c)&&(c=Z6(c));for(const r in c){const s=c[r];let n;i2(s)?"default"in s?n=r1(s.from||r,s.default,!0):n=r1(s.from||r):n=r1(s),d2(n)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):a[r]=n}}function g5(c,a,e){O2(I(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function jc(c,a,e,r){const s=r.includes(".")?Dc(e,r):()=>e[r];if(f2(c)){const n=a[c];$(n)&&w3(s,n)}else if($(c))w3(s,c.bind(e));else if(i2(c))if(I(c))c.forEach(n=>jc(n,a,e,r));else{const n=$(c.handler)?c.handler.bind(e):a[c.handler];$(n)&&w3(s,n,c)}}function R0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(a);let l;return t?l=t:!s.length&&!e&&!r?l=a:(l={},s.length&&s.forEach(o=>R4(l,o,i,!0)),R4(l,a,i)),i2(a)&&n.set(a,l),l}function R4(c,a,e,r=!1){const{mixins:s,extends:n}=a;n&&R4(c,n,e,!0),s&&s.forEach(i=>R4(c,i,e,!0));for(const i in a)if(!(r&&i==="expose")){const t=vf[i]||e&&e[i];c[i]=t?t(c[i],a[i]):a[i]}return c}const vf={data:L5,props:x5,emits:x5,methods:y3,computed:y3,beforeCreate:g2,created:g2,beforeMount:g2,mounted:g2,beforeUpdate:g2,updated:g2,beforeDestroy:g2,beforeUnmount:g2,destroyed:g2,unmounted:g2,activated:g2,deactivated:g2,errorCaptured:g2,serverPrefetch:g2,components:y3,directives:y3,watch:Hf,provide:L5,inject:hf};function L5(c,a){return a?c?function(){return z2($(c)?c.call(this,this):c,$(a)?a.call(this,this):a)}:a:c}function hf(c,a){return y3(Z6(c),Z6(a))}function Z6(c){if(I(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function g2(c,a){return c?[...new Set([].concat(c,a))]:a}function y3(c,a){return c?z2(Object.create(null),c,a):a}function x5(c,a){return c?I(c)&&I(a)?[...new Set([...c,...a])]:z2(Object.create(null),C5(c),C5(a??{})):a}function Hf(c,a){if(!c)return a;if(!a)return c;const e=z2(Object.create(null),c);for(const r in a)e[r]=g2(c[r],a[r]);return e}function Wc(){return{app:null,config:{isNativeTag:Gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function pf(c,a){return function(r,s=null){$(r)||(r=z2({},r)),s!=null&&!i2(s)&&(s=null);const n=Wc(),i=new WeakSet;let t=!1;const l=n.app={_uid:zf++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Uf,get config(){return n.config},set config(o){},use(o,...f){return i.has(o)||(o&&$(o.install)?(i.add(o),o.install(l,...f)):$(o)&&(i.add(o),o(l,...f))),l},mixin(o){return n.mixins.includes(o)||n.mixins.push(o),l},component(o,f){return f?(n.components[o]=f,l):n.components[o]},directive(o,f){return f?(n.directives[o]=f,l):n.directives[o]},mount(o,f,u){if(!t){const h=O(r,s);return h.appContext=n,f&&a?a(h,o):c(h,o,u),t=!0,l._container=o,o.__vue_app__=l,D0(h.component)||h.component.proxy}},unmount(){t&&(c(null,l._container),delete l._container.__vue_app__)},provide(o,f){return n.provides[o]=f,l},runWithContext(o){B4=l;try{return o()}finally{B4=null}}};return l}}let B4=null;function N4(c,a){if(H2){let e=H2.provides;const r=H2.parent&&H2.parent.provides;r===e&&(e=H2.provides=Object.create(r)),e[c]=a}}function r1(c,a,e=!1){const r=H2||x2;if(r||B4){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:B4._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&$(a)?a.call(r&&r.proxy):a}}function Vf(c,a,e,r=!1){const s={},n={};P4(n,r6,1),c.propsDefaults=Object.create(null),Gc(c,a,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);e?c.props=r?s:dc(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function df(c,a,e,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,t=G(s),[l]=c.propsOptions;let o=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Z4(c.emitsOptions,h))continue;const z=a[h];if(l)if(W(n,h))z!==n[h]&&(n[h]=z,o=!0);else{const b=X2(h);s[b]=c0(l,t,b,z,c,!1)}else z!==n[h]&&(n[h]=z,o=!0)}}}else{Gc(c,a,s,n)&&(o=!0);let f;for(const u in t)(!a||!W(a,u)&&((f=h3(u))===u||!W(a,f)))&&(l?e&&(e[u]!==void 0||e[f]!==void 0)&&(s[u]=c0(l,t,u,void 0,c,!0)):delete s[u]);if(n!==t)for(const u in n)(!a||!W(a,u))&&(delete n[u],o=!0)}o&&e1(c,"set","$attrs")}function Gc(c,a,e,r){const[s,n]=c.propsOptions;let i=!1,t;if(a)for(let l in a){if(b4(l))continue;const o=a[l];let f;s&&W(s,f=X2(l))?!n||!n.includes(f)?e[f]=o:(t||(t={}))[f]=o:Z4(c.emitsOptions,l)||(!(l in r)||o!==r[l])&&(r[l]=o,i=!0)}if(n){const l=G(e),o=t||n2;for(let f=0;f<n.length;f++){const u=n[f];e[u]=c0(s,l,u,o[u],c,!W(o,u))}}return i}function c0(c,a,e,r,s,n){const i=c[e];if(i!=null){const t=W(i,"default");if(t&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&$(l)){const{propsDefaults:o}=s;e in o?r=o[e]:(o3(s),r=o[e]=l.call(null,a),R1())}else r=l}i[0]&&(n&&!t?r=!1:i[1]&&(r===""||r===h3(e))&&(r=!0))}return r}function Kc(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},t=[];let l=!1;if(!$(c)){const f=u=>{l=!0;const[h,z]=Kc(u,a,!0);z2(i,h),z&&t.push(...z)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!n&&!l)return i2(c)&&r.set(c,c3),c3;if(I(n))for(let f=0;f<n.length;f++){const u=X2(n[f]);b5(u)&&(i[u]=n2)}else if(n)for(const f in n){const u=X2(f);if(b5(u)){const h=n[f],z=i[u]=I(h)||$(h)?{type:h}:z2({},h);if(z){const b=S5(Boolean,z.type),S=S5(String,z.type);z[0]=b>-1,z[1]=S<0||b<S,(b>-1||W(z,"default"))&&t.push(u)}}}const o=[i,t];return i2(c)&&r.set(c,o),o}function b5(c){return c[0]!=="$"}function N5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function y5(c,a){return N5(c)===N5(a)}function S5(c,a){return I(a)?a.findIndex(e=>y5(e,c)):$(a)&&y5(a,c)?0:-1}const Xc=c=>c[0]==="_"||c==="$stable",B0=c=>I(c)?c.map(W2):[W2(c)],Mf=(c,a,e)=>{if(a._n)return a;const r=Bc((...s)=>B0(a(...s)),e);return r._c=!1,r},Yc=(c,a,e)=>{const r=c._ctx;for(const s in c){if(Xc(s))continue;const n=c[s];if($(n))a[s]=Mf(s,n,r);else if(n!=null){const i=B0(n);a[s]=()=>i}}},Qc=(c,a)=>{const e=B0(a);c.slots.default=()=>e},Cf=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=G(a),P4(a,"_",e)):Yc(a,c.slots={})}else c.slots={},a&&Qc(c,a);P4(c.slots,r6,1)},gf=(c,a,e)=>{const{vnode:r,slots:s}=c;let n=!0,i=n2;if(r.shapeFlag&32){const t=a._;t?e&&t===1?n=!1:(z2(s,a),!e&&t===1&&delete s._):(n=!a.$stable,Yc(a,s)),i=a}else a&&(Qc(c,a),i={default:1});if(n)for(const t in s)!Xc(t)&&i[t]==null&&delete s[t]};function a0(c,a,e,r,s=!1){if(I(c)){c.forEach((h,z)=>a0(h,a&&(I(a)?a[z]:a),e,r,s));return}if(A3(r)&&!s)return;const n=r.shapeFlag&4?D0(r.component)||r.component.proxy:r.el,i=s?null:n,{i:t,r:l}=c,o=a&&a.r,f=t.refs===n2?t.refs={}:t.refs,u=t.setupState;if(o!=null&&o!==l&&(f2(o)?(f[o]=null,W(u,o)&&(u[o]=null)):d2(o)&&(o.value=null)),$(l))V1(l,t,12,[i,f]);else{const h=f2(l),z=d2(l);if(h||z){const b=()=>{if(c.f){const S=h?W(u,l)?u[l]:f[l]:l.value;s?I(S)&&x0(S,n):I(S)?S.includes(n)||S.push(n):h?(f[l]=[n],W(u,l)&&(u[l]=f[l])):(l.value=[n],c.k&&(f[c.k]=l.value))}else h?(f[l]=i,W(u,l)&&(u[l]=i)):z&&(l.value=i,c.k&&(f[c.k]=i))};i?(b.id=-1,y2(b,e)):b()}}}const y2=Xo;function Lf(c){return xf(c)}function xf(c,a){const e=q6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:t,createComment:l,setText:o,setElementText:f,parentNode:u,nextSibling:h,setScopeId:z=D2,insertStaticContent:b}=c,S=(m,v,H,p=null,M=null,g=null,A=!1,x=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!L3(m,v)&&(p=d(m),b2(m,M,g,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:L,ref:F,shapeFlag:_}=v;switch(L){case e6:P(m,v,H,p);break;case M1:V(m,v,H,p);break;case k6:m==null&&C(v,H,p,A);break;case L2:b1(m,v,H,p,M,g,A,x,N);break;default:_&1?q(m,v,H,p,M,g,A,x,N):_&6?U2(m,v,H,p,M,g,A,x,N):(_&64||_&128)&&L.process(m,v,H,p,M,g,A,x,N,y)}F!=null&&M&&a0(F,m&&m.ref,g,v||m,!v)},P=(m,v,H,p)=>{if(m==null)r(v.el=t(v.children),H,p);else{const M=v.el=m.el;v.children!==m.children&&o(M,v.children)}},V=(m,v,H,p)=>{m==null?r(v.el=l(v.children||""),H,p):v.el=m.el},C=(m,v,H,p)=>{[m.el,m.anchor]=b(m.children,v,H,p,m.el,m.anchor)},B=({el:m,anchor:v},H,p)=>{let M;for(;m&&m!==v;)M=h(m),r(m,H,p),m=M;r(v,H,p)},w=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),s(m),m=H;s(v)},q=(m,v,H,p,M,g,A,x,N)=>{A=A||v.type==="svg",m==null?Z(v,H,p,M,g,A,x,N):C2(m,v,M,g,A,x,N)},Z=(m,v,H,p,M,g,A,x)=>{let N,L;const{type:F,props:_,shapeFlag:D,transition:U,dirs:j}=m;if(N=m.el=i(m.type,g,_&&_.is,_),D&8?f(N,m.children):D&16&&w2(m.children,N,null,p,M,g&&F!=="foreignObject",A,x),j&&N1(m,null,p,"created"),t2(N,m,m.scopeId,A,p),_){for(const Q in _)Q!=="value"&&!b4(Q)&&n(N,Q,null,_[Q],g,m.children,p,M,p2);"value"in _&&n(N,"value",null,_.value),(L=_.onVnodeBeforeMount)&&j2(L,p,m)}j&&N1(m,null,p,"beforeMount");const c2=bf(M,U);c2&&U.beforeEnter(N),r(N,v,H),((L=_&&_.onVnodeMounted)||c2||j)&&y2(()=>{L&&j2(L,p,m),c2&&U.enter(N),j&&N1(m,null,p,"mounted")},M)},t2=(m,v,H,p,M)=>{if(H&&z(m,H),p)for(let g=0;g<p.length;g++)z(m,p[g]);if(M){let g=M.subTree;if(v===g){const A=M.vnode;t2(m,A,A.scopeId,A.slotScopeIds,M.parent)}}},w2=(m,v,H,p,M,g,A,x,N=0)=>{for(let L=N;L<m.length;L++){const F=m[L]=x?H1(m[L]):W2(m[L]);S(null,F,v,H,p,M,g,A,x)}},C2=(m,v,H,p,M,g,A)=>{const x=v.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:F}=v;N|=m.patchFlag&16;const _=m.props||n2,D=v.props||n2;let U;H&&y1(H,!1),(U=D.onVnodeBeforeUpdate)&&j2(U,H,v,m),F&&N1(v,m,H,"beforeUpdate"),H&&y1(H,!0);const j=M&&v.type!=="foreignObject";if(L?P2(m.dynamicChildren,L,x,H,p,j,g):A||K(m,v,x,null,H,p,j,g,!1),N>0){if(N&16)f1(x,v,_,D,H,p,M);else if(N&2&&_.class!==D.class&&n(x,"class",null,D.class,M),N&4&&n(x,"style",_.style,D.style,M),N&8){const c2=v.dynamicProps;for(let Q=0;Q<c2.length;Q++){const o2=c2[Q],_2=_[o2],K1=D[o2];(K1!==_2||o2==="value")&&n(x,o2,_2,K1,M,m.children,H,p,p2)}}N&1&&m.children!==v.children&&f(x,v.children)}else!A&&L==null&&f1(x,v,_,D,H,p,M);((U=D.onVnodeUpdated)||F)&&y2(()=>{U&&j2(U,H,v,m),F&&N1(v,m,H,"updated")},p)},P2=(m,v,H,p,M,g,A)=>{for(let x=0;x<v.length;x++){const N=m[x],L=v[x],F=N.el&&(N.type===L2||!L3(N,L)||N.shapeFlag&70)?u(N.el):H;S(N,L,F,null,p,M,g,A,!0)}},f1=(m,v,H,p,M,g,A)=>{if(H!==p){if(H!==n2)for(const x in H)!b4(x)&&!(x in p)&&n(m,x,H[x],null,A,v.children,M,g,p2);for(const x in p){if(b4(x))continue;const N=p[x],L=H[x];N!==L&&x!=="value"&&n(m,x,L,N,A,v.children,M,g,p2)}"value"in p&&n(m,"value",H.value,p.value)}},b1=(m,v,H,p,M,g,A,x,N)=>{const L=v.el=m?m.el:t(""),F=v.anchor=m?m.anchor:t("");let{patchFlag:_,dynamicChildren:D,slotScopeIds:U}=v;U&&(x=x?x.concat(U):U),m==null?(r(L,H,p),r(F,H,p),w2(v.children,H,F,M,g,A,x,N)):_>0&&_&64&&D&&m.dynamicChildren?(P2(m.dynamicChildren,D,H,M,g,A,x),(v.key!=null||M&&v===M.subTree)&&Jc(m,v,!0)):K(m,v,H,F,M,g,A,x,N)},U2=(m,v,H,p,M,g,A,x,N)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?M.ctx.activate(v,H,p,A,N):C3(v,H,p,M,g,A,N):j1(m,v,N)},C3=(m,v,H,p,M,g,A)=>{const x=m.component=Tf(m,p,M);if(Oc(m)&&(x.ctx.renderer=y),_f(x),x.asyncDep){if(M&&M.registerDep(x,u2),!m.el){const N=x.subTree=O(M1);V(null,N,v,H)}return}u2(x,m,v,H,M,g,A)},j1=(m,v,H)=>{const p=v.component=m.component;if(qo(m,v,H))if(p.asyncDep&&!p.asyncResolved){J(p,v,H);return}else p.next=v,Fo(p.update),p.update();else v.el=m.el,p.vnode=v},u2=(m,v,H,p,M,g,A)=>{const x=()=>{if(m.isMounted){let{next:F,bu:_,u:D,parent:U,vnode:j}=m,c2=F,Q;y1(m,!1),F?(F.el=j.el,J(m,F,A)):F=j,_&&S6(_),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&j2(Q,U,F,j),y1(m,!0);const o2=w6(m),_2=m.subTree;m.subTree=o2,S(_2,o2,u(_2.el),d(_2),m,M,g),F.el=o2.el,c2===null&&jo(m,o2.el),D&&y2(D,M),(Q=F.props&&F.props.onVnodeUpdated)&&y2(()=>j2(Q,U,F,j),M)}else{let F;const{el:_,props:D}=v,{bm:U,m:j,parent:c2}=m,Q=A3(v);if(y1(m,!1),U&&S6(U),!Q&&(F=D&&D.onVnodeBeforeMount)&&j2(F,c2,v),y1(m,!0),_&&X){const o2=()=>{m.subTree=w6(m),X(_,m.subTree,m,M,null)};Q?v.type.__asyncLoader().then(()=>!m.isUnmounted&&o2()):o2()}else{const o2=m.subTree=w6(m);S(null,o2,H,p,m,M,g),v.el=o2.el}if(j&&y2(j,M),!Q&&(F=D&&D.onVnodeMounted)){const o2=v;y2(()=>j2(F,c2,o2),M)}(v.shapeFlag&256||c2&&A3(c2.vnode)&&c2.vnode.shapeFlag&256)&&m.a&&y2(m.a,M),m.isMounted=!0,v=H=p=null}},N=m.effect=new y0(x,()=>T0(L),m.scope),L=m.update=()=>N.run();L.id=m.uid,y1(m,!0),L()},J=(m,v,H)=>{v.component=m;const p=m.vnode.props;m.vnode=v,m.next=null,df(m,v.props,p,H),gf(m,v.children,H),z3(),V5(),p3()},K=(m,v,H,p,M,g,A,x,N=!1)=>{const L=m&&m.children,F=m?m.shapeFlag:0,_=v.children,{patchFlag:D,shapeFlag:U}=v;if(D>0){if(D&128){m1(L,_,H,p,M,g,A,x,N);return}else if(D&256){J2(L,_,H,p,M,g,A,x,N);return}}U&8?(F&16&&p2(L,M,g),_!==L&&f(H,_)):F&16?U&16?m1(L,_,H,p,M,g,A,x,N):p2(L,M,g,!0):(F&8&&f(H,""),U&16&&w2(_,H,p,M,g,A,x,N))},J2=(m,v,H,p,M,g,A,x,N)=>{m=m||c3,v=v||c3;const L=m.length,F=v.length,_=Math.min(L,F);let D;for(D=0;D<_;D++){const U=v[D]=N?H1(v[D]):W2(v[D]);S(m[D],U,H,null,M,g,A,x,N)}L>F?p2(m,M,g,!0,!1,_):w2(v,H,p,M,g,A,x,N,_)},m1=(m,v,H,p,M,g,A,x,N)=>{let L=0;const F=v.length;let _=m.length-1,D=F-1;for(;L<=_&&L<=D;){const U=m[L],j=v[L]=N?H1(v[L]):W2(v[L]);if(L3(U,j))S(U,j,H,null,M,g,A,x,N);else break;L++}for(;L<=_&&L<=D;){const U=m[_],j=v[D]=N?H1(v[D]):W2(v[D]);if(L3(U,j))S(U,j,H,null,M,g,A,x,N);else break;_--,D--}if(L>_){if(L<=D){const U=D+1,j=U<F?v[U].el:p;for(;L<=D;)S(null,v[L]=N?H1(v[L]):W2(v[L]),H,j,M,g,A,x,N),L++}}else if(L>D)for(;L<=_;)b2(m[L],M,g,!0),L++;else{const U=L,j=L,c2=new Map;for(L=j;L<=D;L++){const A2=v[L]=N?H1(v[L]):W2(v[L]);A2.key!=null&&c2.set(A2.key,L)}let Q,o2=0;const _2=D-j+1;let K1=!1,t5=0;const g3=new Array(_2);for(L=0;L<_2;L++)g3[L]=0;for(L=U;L<=_;L++){const A2=m[L];if(o2>=_2){b2(A2,M,g,!0);continue}let q2;if(A2.key!=null)q2=c2.get(A2.key);else for(Q=j;Q<=D;Q++)if(g3[Q-j]===0&&L3(A2,v[Q])){q2=Q;break}q2===void 0?b2(A2,M,g,!0):(g3[q2-j]=L+1,q2>=t5?t5=q2:K1=!0,S(A2,v[q2],H,null,M,g,A,x,N),o2++)}const l5=K1?Nf(g3):c3;for(Q=l5.length-1,L=_2-1;L>=0;L--){const A2=j+L,q2=v[A2],o5=A2+1<F?v[A2+1].el:p;g3[L]===0?S(null,q2,H,o5,M,g,A,x,N):K1&&(Q<0||L!==l5[Q]?$2(q2,H,o5,2):Q--)}}},$2=(m,v,H,p,M=null)=>{const{el:g,type:A,transition:x,children:N,shapeFlag:L}=m;if(L&6){$2(m.component.subTree,v,H,p);return}if(L&128){m.suspense.move(v,H,p);return}if(L&64){A.move(m,v,H,y);return}if(A===L2){r(g,v,H);for(let _=0;_<N.length;_++)$2(N[_],v,H,p);r(m.anchor,v,H);return}if(A===k6){B(m,v,H);return}if(p!==2&&L&1&&x)if(p===0)x.beforeEnter(g),r(g,v,H),y2(()=>x.enter(g),M);else{const{leave:_,delayLeave:D,afterLeave:U}=x,j=()=>r(g,v,H),c2=()=>{_(g,()=>{j(),U&&U()})};D?D(g,j,c2):c2()}else r(g,v,H)},b2=(m,v,H,p=!1,M=!1)=>{const{type:g,props:A,ref:x,children:N,dynamicChildren:L,shapeFlag:F,patchFlag:_,dirs:D}=m;if(x!=null&&a0(x,null,H,m,!0),F&256){v.ctx.deactivate(m);return}const U=F&1&&D,j=!A3(m);let c2;if(j&&(c2=A&&A.onVnodeBeforeUnmount)&&j2(c2,v,m),F&6)o4(m.component,H,p);else{if(F&128){m.suspense.unmount(H,p);return}U&&N1(m,null,v,"beforeUnmount"),F&64?m.type.remove(m,v,H,M,y,p):L&&(g!==L2||_>0&&_&64)?p2(L,v,H,!1,!0):(g===L2&&_&384||!M&&F&16)&&p2(N,v,H),p&&W1(m)}(j&&(c2=A&&A.onVnodeUnmounted)||U)&&y2(()=>{c2&&j2(c2,v,m),U&&N1(m,null,v,"unmounted")},H)},W1=m=>{const{type:v,el:H,anchor:p,transition:M}=m;if(v===L2){G1(H,p);return}if(v===k6){w(m);return}const g=()=>{s(H),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:A,delayLeave:x}=M,N=()=>A(H,g);x?x(m.el,g,N):N()}else g()},G1=(m,v)=>{let H;for(;m!==v;)H=h(m),s(m),m=H;s(v)},o4=(m,v,H)=>{const{bum:p,scope:M,update:g,subTree:A,um:x}=m;p&&S6(p),M.stop(),g&&(g.active=!1,b2(A,m,v,H)),x&&y2(x,v),y2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},p2=(m,v,H,p=!1,M=!1,g=0)=>{for(let A=g;A<m.length;A++)b2(m[A],v,H,p,M)},d=m=>m.shapeFlag&6?d(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),T=(m,v,H)=>{m==null?v._vnode&&b2(v._vnode,null,null,!0):S(v._vnode||null,m,v,null,null,null,H),V5(),kc(),v._vnode=m},y={p:S,um:b2,m:$2,r:W1,mt:C3,mc:w2,pc:K,pbc:P2,n:d,o:c};let E,X;return a&&([E,X]=a(y)),{render:T,hydrate:E,createApp:pf(T,E)}}function y1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function bf(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function Jc(c,a,e=!1){const r=c.children,s=a.children;if(I(r)&&I(s))for(let n=0;n<r.length;n++){const i=r[n];let t=s[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=s[n]=H1(s[n]),t.el=i.el),e||Jc(i,t)),t.type===e6&&(t.el=i.el)}}function Nf(c){const a=c.slice(),e=[0];let r,s,n,i,t;const l=c.length;for(r=0;r<l;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(n=0,i=e.length-1;n<i;)t=n+i>>1,c[e[t]]<o?n=t+1:i=t;o<c[e[n]]&&(n>0&&(a[r]=e[n-1]),e[n]=r)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const yf=c=>c.__isTeleport,L2=Symbol.for("v-fgt"),e6=Symbol.for("v-txt"),M1=Symbol.for("v-cmt"),k6=Symbol.for("v-stc"),P3=[];let E2=null;function M2(c=!1){P3.push(E2=c?null:[])}function Sf(){P3.pop(),E2=P3[P3.length-1]||null}let U3=1;function w5(c){U3+=c}function Zc(c){return c.dynamicChildren=U3>0?E2||c3:null,Sf(),U3>0&&E2&&E2.push(c),c}function T2(c,a,e,r,s,n){return Zc(h2(c,a,e,r,s,n,!0))}function E4(c,a,e,r,s){return Zc(O(c,a,e,r,s,!0))}function F4(c){return c?c.__v_isVNode===!0:!1}function L3(c,a){return c.type===a.type&&c.key===a.key}const r6="__vInternal",c9=({key:c})=>c??null,y4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?f2(c)||d2(c)||$(c)?{i:x2,r:c,k:a,f:!!e}:c:null);function h2(c,a=null,e=null,r=0,s=null,n=c===L2?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&c9(a),ref:a&&y4(a),scopeId:c6,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:x2};return t?(E0(l,e),n&128&&c.normalize(l)):e&&(l.shapeFlag|=f2(e)?8:16),U3>0&&!i&&E2&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&E2.push(l),l}const O=wf;function wf(c,a=null,e=null,r=0,s=null,n=!1){if((!c||c===Wo)&&(c=M1),F4(c)){const t=l3(c,a,!0);return e&&E0(t,e),U3>0&&!n&&E2&&(t.shapeFlag&6?E2[E2.indexOf(c)]=t:E2.push(t)),t.patchFlag|=-2,t}if(Df(c)&&(c=c.__vccOpts),a){a=a9(a);let{class:t,style:l}=a;t&&!f2(t)&&(a.class=H3(t)),i2(l)&&(Cc(l)&&!I(l)&&(l=z2({},l)),a.style=i3(l))}const i=f2(c)?1:Ko(c)?128:yf(c)?64:i2(c)?4:$(c)?2:0;return h2(c,a,e,r,s,i,n,!0)}function a9(c){return c?Cc(c)||r6 in c?z2({},c):c:null}function l3(c,a,e=!1){const{props:r,ref:s,patchFlag:n,children:i}=c,t=a?Af(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&c9(t),ref:a&&a.ref?e&&s?I(s)?s.concat(y4(a)):[s,y4(a)]:y4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==L2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&l3(c.ssContent),ssFallback:c.ssFallback&&l3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function e9(c=" ",a=0){return O(e6,null,c,a)}function S4(c="",a=!1){return a?(M2(),E4(M1,null,c)):O(M1,null,c)}function W2(c){return c==null||typeof c=="boolean"?O(M1):I(c)?O(L2,null,c.slice()):typeof c=="object"?H1(c):O(e6,null,String(c))}function H1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:l3(c)}function E0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(I(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),E0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(r6 in a)?a._ctx=x2:s===3&&x2&&(x2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else $(a)?(a={default:a,_ctx:x2},e=32):(a=String(a),r&64?(e=16,a=[e9(a)]):e=8);c.children=a,c.shapeFlag|=e}function Af(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=H3([a.class,r.class]));else if(s==="style")a.style=i3([a.style,r.style]);else if(j4(s)){const n=a[s],i=r[s];i&&n!==i&&!(I(n)&&n.includes(i))&&(a[s]=n?[].concat(n,i):i)}else s!==""&&(a[s]=r[s])}return a}function j2(c,a,e,r=null){O2(c,a,7,[e,r])}const kf=Wc();let Pf=0;function Tf(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||kf,n={uid:Pf++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new to(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kc(r,s),emitsOptions:Tc(r,s),emit:null,emitted:null,propsDefaults:n2,inheritAttrs:r.inheritAttrs,ctx:n2,data:n2,props:n2,attrs:n2,slots:n2,refs:n2,setupState:n2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=Io.bind(null,n),c.ce&&c.ce(n),n}let H2=null,F0,X1,A5="__VUE_INSTANCE_SETTERS__";(X1=q6()[A5])||(X1=q6()[A5]=[]),X1.push(c=>H2=c),F0=c=>{X1.length>1?X1.forEach(a=>a(c)):X1[0](c)};const o3=c=>{F0(c),c.scope.on()},R1=()=>{H2&&H2.scope.off(),F0(null)};function r9(c){return c.vnode.shapeFlag&4}let $3=!1;function _f(c,a=!1){$3=a;const{props:e,children:r}=c.vnode,s=r9(c);Vf(c,e,s,a),Cf(c,r);const n=s?Rf(c,a):void 0;return $3=!1,n}function Rf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=gc(new Proxy(c.ctx,ff));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?Ef(c):null;o3(c),z3();const n=V1(r,c,0,[c.props,s]);if(p3(),R1(),rc(n)){if(n.then(R1,R1),a)return n.then(i=>{k5(c,i,a)}).catch(i=>{J4(i,c,0)});c.asyncDep=n}else k5(c,n,a)}else s9(c,a)}function k5(c,a,e){$(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i2(a)&&(c.setupState=yc(a)),s9(c,e)}let P5;function s9(c,a,e){const r=c.type;if(!c.render){if(!a&&P5&&!r.render){const s=r.template||R0(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:l}=r,o=z2(z2({isCustomElement:n,delimiters:t},i),l);r.render=P5(s,o)}}c.render=r.render||D2}{o3(c),z3();try{mf(c)}finally{p3(),R1()}}}function Bf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return S2(c,"get","$attrs"),a[e]}}))}function Ef(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Bf(c)},slots:c.slots,emit:c.emit,expose:a}}function D0(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(yc(gc(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in k3)return k3[e](c)},has(a,e){return e in a||e in k3}}))}function Ff(c,a=!0){return $(c)?c.displayName||c.name:c.name||a&&c.__name}function Df(c){return $(c)&&"__vccOpts"in c}const v2=(c,a)=>Ro(c,a,$3);function O0(c,a,e){const r=arguments.length;return r===2?i2(a)&&!I(a)?F4(a)?O(c,null,[a]):O(c,a):O(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&F4(e)&&(e=[e]),O(c,a,e))}const Of=Symbol.for("v-scx"),If=()=>r1(Of),Uf="3.3.8",$f="http://www.w3.org/2000/svg",k1=typeof document<"u"?document:null,T5=k1&&k1.createElement("template"),qf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?k1.createElementNS($f,c):k1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>k1.createTextNode(c),createComment:c=>k1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>k1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,n){const i=e?e.previousSibling:a.lastChild;if(s&&(s===n||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===n||!(s=s.nextSibling)););else{T5.innerHTML=r?`<svg>${c}</svg>`:c;const t=T5.content;if(r){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}a.insertBefore(t,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},jf=Symbol("_vtc");function Wf(c,a,e){const r=c[jf];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const Gf=Symbol("_vod");function Kf(c,a,e){const r=c.style,s=f2(e);if(e&&!s){if(a&&!f2(a))for(const n in a)e[n]==null&&e0(r,n,"");for(const n in e)e0(r,n,e[n])}else{const n=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),Gf in c&&(r.display=n)}}const _5=/\s*!important$/;function e0(c,a,e){if(I(e))e.forEach(r=>e0(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Xf(c,a);_5.test(e)?c.setProperty(h3(r),e.replace(_5,""),"important"):c[r]=e}}const R5=["Webkit","Moz","ms"],P6={};function Xf(c,a){const e=P6[a];if(e)return e;let r=X2(a);if(r!=="filter"&&r in c)return P6[a]=r;r=X4(r);for(let s=0;s<R5.length;s++){const n=R5[s]+r;if(n in c)return P6[a]=n}return a}const B5="http://www.w3.org/1999/xlink";function Yf(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(B5,a.slice(6,a.length)):c.setAttributeNS(B5,a,e);else{const n=io(a);e==null||n&&!ic(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function Qf(c,a,e,r,s,n,i){if(a==="innerHTML"||a==="textContent"){r&&i(r,s,n),c[a]=e??"";return}const t=c.tagName;if(a==="value"&&t!=="PROGRESS"&&!t.includes("-")){c._value=e;const o=t==="OPTION"?c.getAttribute("value"):c.value,f=e??"";o!==f&&(c.value=f),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=ic(e):e==null&&o==="string"?(e="",l=!0):o==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function Jf(c,a,e,r){c.addEventListener(a,e,r)}function Zf(c,a,e,r){c.removeEventListener(a,e,r)}const E5=Symbol("_vei");function cm(c,a,e,r,s=null){const n=c[E5]||(c[E5]={}),i=n[a];if(r&&i)i.value=r;else{const[t,l]=am(a);if(r){const o=n[a]=sm(r,s);Jf(c,t,o,l)}else i&&(Zf(c,t,i,l),n[a]=void 0)}}const F5=/(?:Once|Passive|Capture)$/;function am(c){let a;if(F5.test(c)){a={};let r;for(;r=c.match(F5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):h3(c.slice(2)),a]}let T6=0;const em=Promise.resolve(),rm=()=>T6||(em.then(()=>T6=0),T6=Date.now());function sm(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;O2(nm(r,e.value),a,5,[r])};return e.value=c,e.attached=rm(),e}function nm(c,a){if(I(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const D5=/^on[a-z]/,im=(c,a,e,r,s=!1,n,i,t,l)=>{a==="class"?Wf(c,r,s):a==="style"?Kf(c,e,r):j4(a)?L0(a)||cm(c,a,e,r,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):tm(c,a,r,s))?Qf(c,a,r,n,i,t,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Yf(c,a,r,s))};function tm(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&D5.test(a)&&$(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||D5.test(a)&&f2(e)?!1:a in c}const lm=z2({patchProp:im},qf);let O5;function om(){return O5||(O5=Lf(lm))}const fm=(...c)=>{const a=om().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=mm(r);if(!s)return;const n=a._component;!$(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},a};function mm(c){return f2(c)?document.querySelector(c):c}const I0=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},um=c=>(_c("data-v-08637a46"),c=c(),Rc(),c),vm=um(()=>h2("h1",{class:"title"},"小权 组件文档",-1)),hm={class:"nav"},Hm={class:"displayArea"},zm={__name:"App",setup(c){const a=[{path:"/",label:"Icon"},{path:"/button",label:"Button"},{path:"/card",label:"Card"},{path:"/dialog",label:"Dialog"},{path:"/pager",label:"Pager"},{path:"/collapse",label:"Collapse"},{path:"/tooltip",label:"Tooltip"},{path:"/dropdown",label:"Dropdown"}];return(e,r)=>{const s=I3("router-link"),n=I3("router-view");return M2(),T2(L2,null,[vm,h2("nav",hm,[(M2(),T2(L2,null,$c(a,i=>O(s,{key:i.path,to:i.path},{default:Bc(()=>[e9(tc(i.label),1)]),_:2},1032,["to"])),64))]),h2("div",Hm,[O(n)])],64)}}},pm=I0(zm,[["__scopeId","data-v-08637a46"]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Y1=typeof window<"u";function Vm(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Y=Object.assign;function _6(c,a){const e={};for(const r in a){const s=a[r];e[r]=I2(s)?s.map(c):c(s)}return e}const T3=()=>{},I2=Array.isArray,dm=/\/$/,Mm=c=>c.replace(dm,"");function R6(c,a,e="/"){let r,s={},n="",i="";const t=a.indexOf("#");let l=a.indexOf("?");return t<l&&t>=0&&(l=-1),l>-1&&(r=a.slice(0,l),n=a.slice(l+1,t>-1?t:a.length),s=c(n)),t>-1&&(r=r||a.slice(0,t),i=a.slice(t,a.length)),r=xm(r??a,e),{fullPath:r+(n&&"?")+n+i,path:r,query:s,hash:i}}function Cm(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function I5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function gm(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&f3(a.matched[r],e.matched[s])&&n9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function f3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function n9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Lm(c[e],a[e]))return!1;return!0}function Lm(c,a){return I2(c)?U5(c,a):I2(a)?U5(a,c):c===a}function U5(c,a){return I2(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function xm(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let n=e.length-1,i,t;for(i=0;i<r.length;i++)if(t=r[i],t!==".")if(t==="..")n>1&&n--;else break;return e.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var q3;(function(c){c.pop="pop",c.push="push"})(q3||(q3={}));var _3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(_3||(_3={}));function bm(c){if(!c)if(Y1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Mm(c)}const Nm=/^[^#]+#/;function ym(c,a){return c.replace(Nm,"#")+a}function Sm(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const s6=()=>({left:window.pageXOffset,top:window.pageYOffset});function wm(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=Sm(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function $5(c,a){return(history.state?history.state.position-a:-1)+c}const r0=new Map;function Am(c,a){r0.set(c,a)}function km(c){const a=r0.get(c);return r0.delete(c),a}let Pm=()=>location.protocol+"//"+location.host;function i9(c,a){const{pathname:e,search:r,hash:s}=a,n=c.indexOf("#");if(n>-1){let t=s.includes(c.slice(n))?c.slice(n).length:1,l=s.slice(t);return l[0]!=="/"&&(l="/"+l),I5(l,"")}return I5(e,c)+r+s}function Tm(c,a,e,r){let s=[],n=[],i=null;const t=({state:h})=>{const z=i9(c,location),b=e.value,S=a.value;let P=0;if(h){if(e.value=z,a.value=h,i&&i===b){i=null;return}P=S?h.position-S.position:0}else r(z);s.forEach(V=>{V(e.value,b,{delta:P,type:q3.pop,direction:P?P>0?_3.forward:_3.back:_3.unknown})})};function l(){i=e.value}function o(h){s.push(h);const z=()=>{const b=s.indexOf(h);b>-1&&s.splice(b,1)};return n.push(z),z}function f(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:s6()}),"")}function u(){for(const h of n)h();n=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:o,destroy:u}}function q5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?s6():null}}function _m(c){const{history:a,location:e}=window,r={value:i9(c,e)},s={value:a.state};s.value||n(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(l,o,f){const u=c.indexOf("#"),h=u>-1?(e.host&&document.querySelector("base")?c:c.slice(u))+l:Pm()+c+l;try{a[f?"replaceState":"pushState"](o,"",h),s.value=o}catch(z){console.error(z),e[f?"replace":"assign"](h)}}function i(l,o){const f=Y({},a.state,q5(s.value.back,l,s.value.forward,!0),o,{position:s.value.position});n(l,f,!0),r.value=l}function t(l,o){const f=Y({},s.value,a.state,{forward:l,scroll:s6()});n(f.current,f,!0);const u=Y({},q5(r.value,l,null),{position:f.position+1},o);n(l,u,!1),r.value=l}return{location:r,state:s,push:t,replace:i}}function Rm(c){c=bm(c);const a=_m(c),e=Tm(c,a.state,a.location,a.replace);function r(n,i=!0){i||e.pauseListeners(),history.go(n)}const s=Y({location:"",base:c,go:r,createHref:ym.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Bm(c){return typeof c=="string"||c&&typeof c=="object"}function t9(c){return typeof c=="string"||typeof c=="symbol"}const v1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},l9=Symbol("");var j5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(j5||(j5={}));function m3(c,a){return Y(new Error,{type:c,[l9]:!0},a)}function Z2(c,a){return c instanceof Error&&l9 in c&&(a==null||!!(c.type&a))}const W5="[^/]+?",Em={sensitive:!1,strict:!1,start:!0,end:!0},Fm=/[.+*?^${}()[\]/\\]/g;function Dm(c,a){const e=Y({},Em,a),r=[];let s=e.start?"^":"";const n=[];for(const o of c){const f=o.length?[]:[90];e.strict&&!o.length&&(s+="/");for(let u=0;u<o.length;u++){const h=o[u];let z=40+(e.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(Fm,"\\$&"),z+=40;else if(h.type===1){const{value:b,repeatable:S,optional:P,regexp:V}=h;n.push({name:b,repeatable:S,optional:P});const C=V||W5;if(C!==W5){z+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+w.message)}}let B=S?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(B=P&&o.length<2?`(?:/${B})`:"/"+B),P&&(B+="?"),s+=B,z+=20,P&&(z+=-8),S&&(z+=-20),C===".*"&&(z+=-50)}f.push(z)}r.push(f)}if(e.strict&&e.end){const o=r.length-1;r[o][r[o].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const i=new RegExp(s,e.sensitive?"":"i");function t(o){const f=o.match(i),u={};if(!f)return null;for(let h=1;h<f.length;h++){const z=f[h]||"",b=n[h-1];u[b.name]=z&&b.repeatable?z.split("/"):z}return u}function l(o){let f="",u=!1;for(const h of c){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const z of h)if(z.type===0)f+=z.value;else if(z.type===1){const{value:b,repeatable:S,optional:P}=z,V=b in o?o[b]:"";if(I2(V)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=I2(V)?V.join("/"):V;if(!C)if(P)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);f+=C}}return f||"/"}return{re:i,score:r,keys:n,parse:t,stringify:l}}function Om(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Im(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const n=Om(r[e],s[e]);if(n)return n;e++}if(Math.abs(s.length-r.length)===1){if(G5(r))return 1;if(G5(s))return-1}return s.length-r.length}function G5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Um={type:0,value:""},$m=/[a-zA-Z0-9_]/;function qm(c){if(!c)return[[]];if(c==="/")return[[Um]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${o}": ${z}`)}let e=0,r=e;const s=[];let n;function i(){n&&s.push(n),n=[]}let t=0,l,o="",f="";function u(){o&&(e===0?n.push({type:0,value:o}):e===1||e===2||e===3?(n.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:o,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),o="")}function h(){o+=l}for(;t<c.length;){if(l=c[t++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(o&&u(),i()):l===":"?(u(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:$m.test(l)?h():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:e=3:f+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--,f="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${o}"`),u(),i(),s}function jm(c,a,e){const r=Dm(qm(c.path),e),s=Y(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Wm(c,a){const e=[],r=new Map;a=Y5({strict:!1,end:!0,sensitive:!1},a);function s(f){return r.get(f)}function n(f,u,h){const z=!h,b=Gm(f);b.aliasOf=h&&h.record;const S=Y5(a,f),P=[b];if("alias"in f){const B=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of B)P.push(Y({},b,{components:h?h.record.components:b.components,path:w,aliasOf:h?h.record:b}))}let V,C;for(const B of P){const{path:w}=B;if(u&&w[0]!=="/"){const q=u.record.path,Z=q[q.length-1]==="/"?"":"/";B.path=u.record.path+(w&&Z+w)}if(V=jm(B,u,S),h?h.alias.push(V):(C=C||V,C!==V&&C.alias.push(V),z&&f.name&&!X5(V)&&i(f.name)),b.children){const q=b.children;for(let Z=0;Z<q.length;Z++)n(q[Z],V,h&&h.children[Z])}h=h||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return C?()=>{i(C)}:T3}function i(f){if(t9(f)){const u=r.get(f);u&&(r.delete(f),e.splice(e.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=e.indexOf(f);u>-1&&(e.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function t(){return e}function l(f){let u=0;for(;u<e.length&&Im(f,e[u])>=0&&(f.record.path!==e[u].record.path||!o9(f,e[u]));)u++;e.splice(u,0,f),f.record.name&&!X5(f)&&r.set(f.record.name,f)}function o(f,u){let h,z={},b,S;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw m3(1,{location:f});S=h.record.name,z=Y(K5(u.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&K5(f.params,h.keys.map(C=>C.name))),b=h.stringify(z)}else if("path"in f)b=f.path,h=e.find(C=>C.re.test(b)),h&&(z=h.parse(b),S=h.record.name);else{if(h=u.name?r.get(u.name):e.find(C=>C.re.test(u.path)),!h)throw m3(1,{location:f,currentLocation:u});S=h.record.name,z=Y({},u.params,f.params),b=h.stringify(z)}const P=[];let V=h;for(;V;)P.unshift(V.record),V=V.parent;return{name:S,path:b,params:z,matched:P,meta:Xm(P)}}return c.forEach(f=>n(f)),{addRoute:n,resolve:o,removeRoute:i,getRoutes:t,getRecordMatcher:s}}function K5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function Gm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Km(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Km(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function X5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Xm(c){return c.reduce((a,e)=>Y(a,e.meta),{})}function Y5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function o9(c,a){return a.children.some(e=>e===c||o9(c,e))}const f9=/#/g,Ym=/&/g,Qm=/\//g,Jm=/=/g,Zm=/\?/g,m9=/\+/g,cu=/%5B/g,au=/%5D/g,u9=/%5E/g,eu=/%60/g,v9=/%7B/g,ru=/%7C/g,h9=/%7D/g,su=/%20/g;function U0(c){return encodeURI(""+c).replace(ru,"|").replace(cu,"[").replace(au,"]")}function nu(c){return U0(c).replace(v9,"{").replace(h9,"}").replace(u9,"^")}function s0(c){return U0(c).replace(m9,"%2B").replace(su,"+").replace(f9,"%23").replace(Ym,"%26").replace(eu,"`").replace(v9,"{").replace(h9,"}").replace(u9,"^")}function iu(c){return s0(c).replace(Jm,"%3D")}function tu(c){return U0(c).replace(f9,"%23").replace(Zm,"%3F")}function lu(c){return c==null?"":tu(c).replace(Qm,"%2F")}function D4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function ou(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const n=r[s].replace(m9," "),i=n.indexOf("="),t=D4(i<0?n:n.slice(0,i)),l=i<0?null:D4(n.slice(i+1));if(t in a){let o=a[t];I2(o)||(o=a[t]=[o]),o.push(l)}else a[t]=l}return a}function Q5(c){let a="";for(let e in c){const r=c[e];if(e=iu(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(I2(r)?r.map(n=>n&&s0(n)):[r&&s0(r)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function fu(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=I2(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const mu=Symbol(""),J5=Symbol(""),$0=Symbol(""),H9=Symbol(""),n0=Symbol("");function x3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function z1(c,a,e,r,s){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,t)=>{const l=u=>{u===!1?t(m3(4,{from:e,to:a})):u instanceof Error?t(u):Bm(u)?t(m3(2,{from:a,to:u})):(n&&r.enterCallbacks[s]===n&&typeof u=="function"&&n.push(u),i())},o=c.call(r&&r.instances[s],a,e,l);let f=Promise.resolve(o);c.length<3&&(f=f.then(l)),f.catch(u=>t(u))})}function B6(c,a,e,r){const s=[];for(const n of c)for(const i in n.components){let t=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(uu(t)){const o=(t.__vccOpts||t)[a];o&&s.push(z1(o,e,r,n,i))}else{let l=t();s.push(()=>l.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=Vm(o)?o.default:o;n.components[i]=f;const h=(f.__vccOpts||f)[a];return h&&z1(h,e,r,n,i)()}))}}return s}function uu(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function Z5(c){const a=r1($0),e=r1(H9),r=v2(()=>a.resolve(r3(c.to))),s=v2(()=>{const{matched:l}=r.value,{length:o}=l,f=l[o-1],u=e.matched;if(!f||!u.length)return-1;const h=u.findIndex(f3.bind(null,f));if(h>-1)return h;const z=c7(l[o-2]);return o>1&&c7(f)===z&&u[u.length-1].path!==z?u.findIndex(f3.bind(null,l[o-2])):h}),n=v2(()=>s.value>-1&&zu(e.params,r.value.params)),i=v2(()=>s.value>-1&&s.value===e.matched.length-1&&n9(e.params,r.value.params));function t(l={}){return Hu(l)?a[r3(c.replace)?"replace":"push"](r3(c.to)).catch(T3):Promise.resolve()}return{route:r,href:v2(()=>r.value.href),isActive:n,isExactActive:i,navigate:t}}const vu=_0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Z5,setup(c,{slots:a}){const e=Q4(Z5(c)),{options:r}=r1($0),s=v2(()=>({[a7(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[a7(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:O0("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},n)}}}),hu=vu;function Hu(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function zu(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!I2(s)||s.length!==r.length||r.some((n,i)=>n!==s[i]))return!1}return!0}function c7(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const a7=(c,a,e)=>c??a??e,pu=_0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=r1(n0),s=v2(()=>c.route||r.value),n=r1(J5,0),i=v2(()=>{let o=r3(n);const{matched:f}=s.value;let u;for(;(u=f[o])&&!u.components;)o++;return o}),t=v2(()=>s.value.matched[i.value]);N4(J5,v2(()=>i.value+1)),N4(mu,t),N4(n0,s);const l=bc();return w3(()=>[l.value,t.value,c.name],([o,f,u],[h,z,b])=>{f&&(f.instances[u]=o,z&&z!==f&&o&&o===h&&(f.leaveGuards.size||(f.leaveGuards=z.leaveGuards),f.updateGuards.size||(f.updateGuards=z.updateGuards))),o&&f&&(!z||!f3(f,z)||!h)&&(f.enterCallbacks[u]||[]).forEach(S=>S(o))},{flush:"post"}),()=>{const o=s.value,f=c.name,u=t.value,h=u&&u.components[f];if(!h)return e7(e.default,{Component:h,route:o});const z=u.props[f],b=z?z===!0?o.params:typeof z=="function"?z(o):z:null,P=O0(h,Y({},b,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(u.instances[f]=null)},ref:l}));return e7(e.default,{Component:P,route:o})||P}}});function e7(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Vu=pu;function du(c){const a=Wm(c.routes,c),e=c.parseQuery||ou,r=c.stringifyQuery||Q5,s=c.history,n=x3(),i=x3(),t=x3(),l=ko(v1);let o=v1;Y1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=_6.bind(null,d=>""+d),u=_6.bind(null,lu),h=_6.bind(null,D4);function z(d,T){let y,E;return t9(d)?(y=a.getRecordMatcher(d),E=T):E=d,a.addRoute(E,y)}function b(d){const T=a.getRecordMatcher(d);T&&a.removeRoute(T)}function S(){return a.getRoutes().map(d=>d.record)}function P(d){return!!a.getRecordMatcher(d)}function V(d,T){if(T=Y({},T||l.value),typeof d=="string"){const H=R6(e,d,T.path),p=a.resolve({path:H.path},T),M=s.createHref(H.fullPath);return Y(H,p,{params:h(p.params),hash:D4(H.hash),redirectedFrom:void 0,href:M})}let y;if("path"in d)y=Y({},d,{path:R6(e,d.path,T.path).path});else{const H=Y({},d.params);for(const p in H)H[p]==null&&delete H[p];y=Y({},d,{params:u(H)}),T.params=u(T.params)}const E=a.resolve(y,T),X=d.hash||"";E.params=f(h(E.params));const m=Cm(r,Y({},d,{hash:nu(X),path:E.path})),v=s.createHref(m);return Y({fullPath:m,hash:X,query:r===Q5?fu(d.query):d.query||{}},E,{redirectedFrom:void 0,href:v})}function C(d){return typeof d=="string"?R6(e,d,l.value.path):Y({},d)}function B(d,T){if(o!==d)return m3(8,{from:T,to:d})}function w(d){return t2(d)}function q(d){return w(Y(C(d),{replace:!0}))}function Z(d){const T=d.matched[d.matched.length-1];if(T&&T.redirect){const{redirect:y}=T;let E=typeof y=="function"?y(d):y;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=C(E):{path:E},E.params={}),Y({query:d.query,hash:d.hash,params:"path"in E?{}:d.params},E)}}function t2(d,T){const y=o=V(d),E=l.value,X=d.state,m=d.force,v=d.replace===!0,H=Z(y);if(H)return t2(Y(C(H),{state:typeof H=="object"?Y({},X,H.state):X,force:m,replace:v}),T||y);const p=y;p.redirectedFrom=T;let M;return!m&&gm(r,E,y)&&(M=m3(16,{to:p,from:E}),$2(E,E,!0,!1)),(M?Promise.resolve(M):P2(p,E)).catch(g=>Z2(g)?Z2(g,2)?g:m1(g):K(g,p,E)).then(g=>{if(g){if(Z2(g,2))return t2(Y({replace:v},C(g.to),{state:typeof g.to=="object"?Y({},X,g.to.state):X,force:m}),T||p)}else g=b1(p,E,!0,v,X);return f1(p,E,g),g})}function w2(d,T){const y=B(d,T);return y?Promise.reject(y):Promise.resolve()}function C2(d){const T=G1.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(d):d()}function P2(d,T){let y;const[E,X,m]=Mu(d,T);y=B6(E.reverse(),"beforeRouteLeave",d,T);for(const H of E)H.leaveGuards.forEach(p=>{y.push(z1(p,d,T))});const v=w2.bind(null,d,T);return y.push(v),p2(y).then(()=>{y=[];for(const H of n.list())y.push(z1(H,d,T));return y.push(v),p2(y)}).then(()=>{y=B6(X,"beforeRouteUpdate",d,T);for(const H of X)H.updateGuards.forEach(p=>{y.push(z1(p,d,T))});return y.push(v),p2(y)}).then(()=>{y=[];for(const H of m)if(H.beforeEnter)if(I2(H.beforeEnter))for(const p of H.beforeEnter)y.push(z1(p,d,T));else y.push(z1(H.beforeEnter,d,T));return y.push(v),p2(y)}).then(()=>(d.matched.forEach(H=>H.enterCallbacks={}),y=B6(m,"beforeRouteEnter",d,T),y.push(v),p2(y))).then(()=>{y=[];for(const H of i.list())y.push(z1(H,d,T));return y.push(v),p2(y)}).catch(H=>Z2(H,8)?H:Promise.reject(H))}function f1(d,T,y){t.list().forEach(E=>C2(()=>E(d,T,y)))}function b1(d,T,y,E,X){const m=B(d,T);if(m)return m;const v=T===v1,H=Y1?history.state:{};y&&(E||v?s.replace(d.fullPath,Y({scroll:v&&H&&H.scroll},X)):s.push(d.fullPath,X)),l.value=d,$2(d,T,y,v),m1()}let U2;function C3(){U2||(U2=s.listen((d,T,y)=>{if(!o4.listening)return;const E=V(d),X=Z(E);if(X){t2(Y(X,{replace:!0}),E).catch(T3);return}o=E;const m=l.value;Y1&&Am($5(m.fullPath,y.delta),s6()),P2(E,m).catch(v=>Z2(v,12)?v:Z2(v,2)?(t2(v.to,E).then(H=>{Z2(H,20)&&!y.delta&&y.type===q3.pop&&s.go(-1,!1)}).catch(T3),Promise.reject()):(y.delta&&s.go(-y.delta,!1),K(v,E,m))).then(v=>{v=v||b1(E,m,!1),v&&(y.delta&&!Z2(v,8)?s.go(-y.delta,!1):y.type===q3.pop&&Z2(v,20)&&s.go(-1,!1)),f1(E,m,v)}).catch(T3)}))}let j1=x3(),u2=x3(),J;function K(d,T,y){m1(d);const E=u2.list();return E.length?E.forEach(X=>X(d,T,y)):console.error(d),Promise.reject(d)}function J2(){return J&&l.value!==v1?Promise.resolve():new Promise((d,T)=>{j1.add([d,T])})}function m1(d){return J||(J=!d,C3(),j1.list().forEach(([T,y])=>d?y(d):T()),j1.reset()),d}function $2(d,T,y,E){const{scrollBehavior:X}=c;if(!Y1||!X)return Promise.resolve();const m=!y&&km($5(d.fullPath,0))||(E||!y)&&history.state&&history.state.scroll||null;return wc().then(()=>X(d,T,m)).then(v=>v&&wm(v)).catch(v=>K(v,d,T))}const b2=d=>s.go(d);let W1;const G1=new Set,o4={currentRoute:l,listening:!0,addRoute:z,removeRoute:b,hasRoute:P,getRoutes:S,resolve:V,options:c,push:w,replace:q,go:b2,back:()=>b2(-1),forward:()=>b2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:t.add,onError:u2.add,isReady:J2,install(d){const T=this;d.component("RouterLink",hu),d.component("RouterView",Vu),d.config.globalProperties.$router=T,Object.defineProperty(d.config.globalProperties,"$route",{enumerable:!0,get:()=>r3(l)}),Y1&&!W1&&l.value===v1&&(W1=!0,w(s.location).catch(X=>{}));const y={};for(const X in v1)Object.defineProperty(y,X,{get:()=>l.value[X],enumerable:!0});d.provide($0,T),d.provide(H9,dc(y)),d.provide(n0,l);const E=d.unmount;G1.add(d),d.unmount=function(){G1.delete(d),G1.size<1&&(o=v1,U2&&U2(),U2=null,l.value=v1,W1=!1,J=!1),E()}}};function p2(d){return d.reduce((T,y)=>T.then(()=>C2(y)),Promise.resolve())}return o4}function Mu(c,a){const e=[],r=[],s=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const t=a.matched[i];t&&(c.matched.find(o=>f3(o,t))?r.push(t):e.push(t));const l=c.matched[i];l&&(a.matched.find(o=>f3(o,l))||s.push(l))}return[e,r,s]}const Cu="modulepreload",gu=function(c){return"/"+c},r7={},S1=function(a,e,r){if(!e||e.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=gu(n),n in r7)return;r7[n]=!0;const i=n.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const u=s[f];if(u.href===n&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Cu,i||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),i)return new Promise((f,u)=>{o.addEventListener("load",f),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};const J3=c=>(_c("data-v-234e4681"),c=c(),Rc(),c),Lu=J3(()=>h2("h1",{class:"row-title"},"普通引入",-1)),xu={class:"row"},bu=J3(()=>h2("h1",{class:"row-title"},"设置不同大小",-1)),Nu={class:"row"},yu=J3(()=>h2("h1",{class:"row-title"},"旋转与翻转",-1)),Su={class:"row"},wu=J3(()=>h2("h1",{class:"row-title"},"动画效果",-1)),Au={class:"row"},ku=J3(()=>h2("h1",{class:"row-title"},"添加自定义属性",-1)),Pu={class:"row"},Tu={__name:"IconView",setup(c){const a=["user-secret","bars","shield-halved","file","filter","gear","barcode","folder","folder-open","play"];return(e,r)=>{const s=I3("Xiaoquan-Icon");return M2(),T2(L2,null,[Lu,h2("div",xu,[(M2(),T2(L2,null,$c(a,n=>O(s,{key:n,icon:n},null,8,["icon"])),64))]),bu,h2("div",Nu,[O(s,{icon:"user-secret",size:"2xs"}),O(s,{icon:"bars",size:"xs"}),O(s,{icon:"shield-halved",size:"sm"}),O(s,{icon:"file",size:"lg"}),O(s,{icon:"filter",size:"xl"}),O(s,{icon:"gear",size:"2xl"}),O(s,{icon:"barcode",size:"2x"}),O(s,{icon:"folder",size:"3x"}),O(s,{icon:"folder-open",size:"4x"})]),yu,h2("div",Su,[O(s,{icon:"user-secret",rotation:"90",size:"xl"}),O(s,{icon:"bars",rotation:270,size:"xl"}),O(s,{icon:"shield-halved",rotation:"180",size:"xl"}),O(s,{icon:"file",flip:"horizontal",size:"xl"}),O(s,{icon:"filter",flip:"vertical",size:"xl"}),O(s,{icon:"folder-open",flip:"both",size:"xl"})]),wu,h2("div",Au,[O(s,{icon:"user-secret",size:"xl",beat:""}),O(s,{icon:"bars",size:"xl","beat-fade":""}),O(s,{icon:"shield-halved",size:"xl",bounce:""}),O(s,{icon:"file",size:"xl",fade:""}),O(s,{icon:"filter",size:"xl",flip:""}),O(s,{icon:"gear",size:"xl",shake:""}),O(s,{icon:"barcode",size:"xl",spin:""}),O(s,{icon:"folder",size:"xl",spin:"","spin-reverse":""}),O(s,{icon:"folder-open",size:"xl","spin-pulse":""})]),ku,h2("div",Pu,[O(s,{icon:"user-secret",size:"xl",type:"primary"}),O(s,{icon:"bars",size:"xl",type:"success"}),O(s,{icon:"shield-halved",size:"xl",type:"info"}),O(s,{icon:"file",size:"xl",type:"warning"}),O(s,{icon:"filter",size:"xl",type:"danger"}),O(s,{icon:"gear",size:"xl",color:"#e47412"}),O(s,{icon:"barcode",size:"xl",color:"#7ec102"}),O(s,{icon:"folder",size:"xl",color:"skyblue"}),O(s,{icon:"folder-open",size:"xl",color:"rgba(122, 122, 122, .5)"})])],64)}}},_u=I0(Tu,[["__scopeId","data-v-234e4681"]]);const Ru={},Bu={class:"s1 ac"};function Eu(c,a){return M2(),T2("div",Bu,[h2("button",{disabled:"",onClick:a[0]||(a[0]=e=>c.alert(1))},"+")])}const Fu=I0(Ru,[["render",Eu],["__scopeId","data-v-60569161"]]),Du=[{path:"/test",name:"Test",component:Fu},{path:"/",name:"icon",component:_u},{path:"/button",name:"button",component:()=>S1(()=>import("./ButtonView-f1e247c6.js"),[])},{path:"/card",name:"card",component:()=>S1(()=>import("./CardView-c8219bc3.js"),["assets/CardView-c8219bc3.js","assets/CardView-6f23d96b.css"])},{path:"/collapse",name:"collapse",component:()=>S1(()=>import("./CollapseView-19103aa8.js"),[])},{path:"/dialog",name:"dialog",component:()=>S1(()=>import("./DialogView-12c14744.js"),[])},{path:"/dropdown",name:"dropdown",component:()=>S1(()=>import("./DropdownView-7552346a.js"),[])},{path:"/pager",name:"pager",component:()=>S1(()=>import("./PagerView-7ef5f621.js"),[])},{path:"/tooltip",name:"tooltip",component:()=>S1(()=>import("./TooltipView-1bc5993f.js"),[])}],Ou=du({linkActiveClass:"active",history:Rm("/"),routes:Du});function s7(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?s7(Object(e),!0).forEach(function(r){m2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):s7(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function O4(c){"@babel/helpers - typeof";return O4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},O4(c)}function Iu(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function n7(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Uu(c,a,e){return a&&n7(c.prototype,a),e&&n7(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function m2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function q0(c,a){return qu(c)||Wu(c,a)||z9(c,a)||Ku()}function Z3(c){return $u(c)||ju(c)||z9(c)||Gu()}function $u(c){if(Array.isArray(c))return i0(c)}function qu(c){if(Array.isArray(c))return c}function ju(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Wu(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,t=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function z9(c,a){if(c){if(typeof c=="string")return i0(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i0(c,a)}}function i0(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Gu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ku(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i7=function(){},j0={},p9={},V9=null,d9={mark:i7,measure:i7};try{typeof window<"u"&&(j0=window),typeof document<"u"&&(p9=document),typeof MutationObserver<"u"&&(V9=MutationObserver),typeof performance<"u"&&(d9=performance)}catch{}var Xu=j0.navigator||{},t7=Xu.userAgent,l7=t7===void 0?"":t7,C1=j0,s2=p9,o7=V9,z4=d9;C1.document;var l1=!!s2.documentElement&&!!s2.head&&typeof s2.addEventListener=="function"&&typeof s2.createElement=="function",M9=~l7.indexOf("MSIE")||~l7.indexOf("Trident/"),p4,V4,d4,M4,C4,s1="___FONT_AWESOME___",t0=16,C9="fa",g9="svg-inline--fa",E1="data-fa-i2svg",l0="data-fa-pseudo-element",Yu="data-fa-pseudo-element-pending",W0="data-prefix",G0="data-icon",f7="fontawesome-i2svg",Qu="async",Ju=["HTML","HEAD","STYLE","SCRIPT"],L9=function(){try{return!0}catch{return!1}}(),r2="classic",l2="sharp",K0=[r2,l2];function c4(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[r2]}})}var j3=c4((p4={},m2(p4,r2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),m2(p4,l2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),p4)),W3=c4((V4={},m2(V4,r2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),m2(V4,l2,{solid:"fass",regular:"fasr",light:"fasl"}),V4)),G3=c4((d4={},m2(d4,r2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),m2(d4,l2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),d4)),Zu=c4((M4={},m2(M4,r2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),m2(M4,l2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),M4)),cv=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,x9="fa-layers-text",av=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ev=c4((C4={},m2(C4,r2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),m2(C4,l2,{900:"fass",400:"fasr",300:"fasl"}),C4)),b9=[1,2,3,4,5,6,7,8,9,10],rv=b9.concat([11,12,13,14,15,16,17,18,19,20]),sv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K3=new Set;Object.keys(W3[r2]).map(K3.add.bind(K3));Object.keys(W3[l2]).map(K3.add.bind(K3));var nv=[].concat(K0,Z3(K3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(b9.map(function(c){return"".concat(c,"x")})).concat(rv.map(function(c){return"w-".concat(c)})),R3=C1.FontAwesomeConfig||{};function iv(c){var a=s2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function tv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(s2&&typeof s2.querySelector=="function"){var lv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lv.forEach(function(c){var a=q0(c,2),e=a[0],r=a[1],s=tv(iv(e));s!=null&&(R3[r]=s)})}var N9={styleDefault:"solid",familyDefault:"classic",cssPrefix:C9,replacementClass:g9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R3.familyPrefix&&(R3.cssPrefix=R3.familyPrefix);var u3=k(k({},N9),R3);u3.autoReplaceSvg||(u3.observeMutations=!1);var R={};Object.keys(N9).forEach(function(c){Object.defineProperty(R,c,{enumerable:!0,set:function(e){u3[c]=e,B3.forEach(function(r){return r(R)})},get:function(){return u3[c]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(a){u3.cssPrefix=a,B3.forEach(function(e){return e(R)})},get:function(){return u3.cssPrefix}});C1.FontAwesomeConfig=R;var B3=[];function ov(c){return B3.push(c),function(){B3.splice(B3.indexOf(c),1)}}var h1=t0,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fv(c){if(!(!c||!l1)){var a=s2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=s2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return s2.head.insertBefore(a,r),c}}var mv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function X3(){for(var c=12,a="";c-- >0;)a+=mv[Math.random()*62|0];return a}function V3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function X0(c){return c.classList?V3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function y9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(y9(c[e]),'" ')},"").trim()}function n6(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Y0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function vv(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(t)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:o}}function hv(c){var a=c.transform,e=c.width,r=e===void 0?t0:e,s=c.height,n=s===void 0?t0:s,i=c.startCentered,t=i===void 0?!1:i,l="";return t&&M9?l+="translate(".concat(a.x/h1-r/2,"em, ").concat(a.y/h1-n/2,"em) "):t?l+="translate(calc(-50% + ".concat(a.x/h1,"em), calc(-50% + ").concat(a.y/h1,"em)) "):l+="translate(".concat(a.x/h1,"em, ").concat(a.y/h1,"em) "),l+="scale(".concat(a.size/h1*(a.flipX?-1:1),", ").concat(a.size/h1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Hv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function S9(){var c=C9,a=g9,e=R.cssPrefix,r=R.replacementClass,s=Hv;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var m7=!1;function E6(){R.autoAddCss&&!m7&&(fv(S9()),m7=!0)}var zv={mixout:function(){return{dom:{css:S9,insertCss:E6}}},hooks:function(){return{beforeDOMElementCreation:function(){E6()},beforeI2svg:function(){E6()}}}},n1=C1||{};n1[s1]||(n1[s1]={});n1[s1].styles||(n1[s1].styles={});n1[s1].hooks||(n1[s1].hooks={});n1[s1].shims||(n1[s1].shims=[]);var F2=n1[s1],w9=[],pv=function c(){s2.removeEventListener("DOMContentLoaded",c),I4=1,w9.map(function(a){return a()})},I4=!1;l1&&(I4=(s2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s2.readyState),I4||s2.addEventListener("DOMContentLoaded",pv));function Vv(c){l1&&(I4?setTimeout(c,0):w9.push(c))}function a4(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?y9(c):"<".concat(a," ").concat(uv(r),">").concat(n.map(a4).join(""),"</").concat(a,">")}function u7(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var dv=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},F6=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?dv(e,s):e,l,o,f;for(r===void 0?(l=1,f=a[n[0]]):(l=0,f=r);l<i;l++)o=n[l],f=t(f,a[o],o,a);return f};function Mv(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function o0(c){var a=Mv(c);return a.length===1?a[0].toString(16):null}function Cv(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function v7(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function f0(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=v7(a);typeof F2.hooks.addPack=="function"&&!s?F2.hooks.addPack(c,v7(a)):F2.styles[c]=k(k({},F2.styles[c]||{}),n),c==="fas"&&f0("fa",a)}var g4,L4,x4,J1=F2.styles,gv=F2.shims,Lv=(g4={},m2(g4,r2,Object.values(G3[r2])),m2(g4,l2,Object.values(G3[l2])),g4),Q0=null,A9={},k9={},P9={},T9={},_9={},xv=(L4={},m2(L4,r2,Object.keys(j3[r2])),m2(L4,l2,Object.keys(j3[l2])),L4);function bv(c){return~nv.indexOf(c)}function Nv(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!bv(s)?s:null}var R9=function(){var a=function(n){return F6(J1,function(i,t,l){return i[l]=F6(t,n,{}),i},{})};A9=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(l){return typeof l=="number"});t.forEach(function(l){s[l.toString(16)]=i})}return s}),k9=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(l){return typeof l=="string"});t.forEach(function(l){s[l]=i})}return s}),_9=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(l){s[l]=i}),s});var e="far"in J1||R.autoFetchSvg,r=F6(gv,function(s,n){var i=n[0],t=n[1],l=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:l}),s},{names:{},unicodes:{}});P9=r.names,T9=r.unicodes,Q0=i6(R.styleDefault,{family:R.familyDefault})};ov(function(c){Q0=i6(c.styleDefault,{family:R.familyDefault})});R9();function J0(c,a){return(A9[c]||{})[a]}function yv(c,a){return(k9[c]||{})[a]}function T1(c,a){return(_9[c]||{})[a]}function B9(c){return P9[c]||{prefix:null,iconName:null}}function Sv(c){var a=T9[c],e=J0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function g1(){return Q0}var Z0=function(){return{prefix:null,iconName:null,rest:[]}};function i6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?r2:e,s=j3[r][c],n=W3[r][c]||W3[r][s],i=c in F2.styles?c:null;return n||i||null}var h7=(x4={},m2(x4,r2,Object.keys(G3[r2])),m2(x4,l2,Object.keys(G3[l2])),x4);function t6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},m2(a,r2,"".concat(R.cssPrefix,"-").concat(r2)),m2(a,l2,"".concat(R.cssPrefix,"-").concat(l2)),a),i=null,t=r2;(c.includes(n[r2])||c.some(function(o){return h7[r2].includes(o)}))&&(t=r2),(c.includes(n[l2])||c.some(function(o){return h7[l2].includes(o)}))&&(t=l2);var l=c.reduce(function(o,f){var u=Nv(R.cssPrefix,f);if(J1[f]?(f=Lv[t].includes(f)?Zu[t][f]:f,i=f,o.prefix=f):xv[t].indexOf(f)>-1?(i=f,o.prefix=i6(f,{family:t})):u?o.iconName=u:f!==R.replacementClass&&f!==n[r2]&&f!==n[l2]&&o.rest.push(f),!s&&o.prefix&&o.iconName){var h=i==="fa"?B9(o.iconName):{},z=T1(o.prefix,o.iconName);h.prefix&&(i=null),o.iconName=h.iconName||z||o.iconName,o.prefix=h.prefix||o.prefix,o.prefix==="far"&&!J1.far&&J1.fas&&!R.autoFetchSvg&&(o.prefix="fas")}return o},Z0());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&t===l2&&(J1.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=T1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=g1()||"fas"),l}var wv=function(){function c(){Iu(this,c),this.definitions={}}return Uu(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=k(k({},e.definitions[t]||{}),i[t]),f0(t,i[t]);var l=G3[r2][t];l&&f0(l,i[t]),R9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,l=i.iconName,o=i.icon,f=o[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[t][u]=o)}),e[t][l]=o}),e}}]),c}(),H7=[],Z1={},n3={},Av=Object.keys(n3);function kv(c,a){var e=a.mixoutsTo;return H7=c,Z1={},Object.keys(n3).forEach(function(r){Av.indexOf(r)===-1&&delete n3[r]}),H7.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),O4(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){Z1[i]||(Z1[i]=[]),Z1[i].push(n[i])})}r.provides&&r.provides(n3)}),e}function m0(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=Z1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function F1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Z1[c]||[];s.forEach(function(n){n.apply(null,e)})}function i1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return n3[c]?n3[c].apply(null,a):void 0}function u0(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||g1();if(a)return a=T1(e,a)||a,u7(E9.definitions,e,a)||u7(F2.styles,e,a)}var E9=new wv,Pv=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,F1("noAuto")},Tv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(F1("beforeI2svg",a),i1("pseudoElements2svg",a),i1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Vv(function(){Rv({autoReplaceSvgRoot:e}),F1("watch",a)})}},_v={icon:function(a){if(a===null)return null;if(O4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:T1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=i6(a[0]);return{prefix:r,iconName:T1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(R.cssPrefix,"-"))>-1||a.match(cv))){var s=t6(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||g1(),iconName:T1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=g1();return{prefix:n,iconName:T1(n,a)||a}}}},k2={noAuto:Pv,config:R,dom:Tv,parse:_v,library:E9,findIconDefinition:u0,toHtml:a4},Rv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?s2:e;(Object.keys(F2.styles).length>0||R.autoFetchSvg)&&l1&&R.autoReplaceSvg&&k2.dom.i2svg({node:r})};function l6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return a4(r)})}}),Object.defineProperty(c,"node",{get:function(){if(l1){var r=s2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Bv(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(Y0(i)&&e.found&&!r.found){var t=e.width,l=e.height,o={x:t/l/2,y:.5};s.style=n6(k(k({},n),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Ev(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(R.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:i}),children:r}]}]}function c8(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,l=c.title,o=c.maskId,f=c.titleId,u=c.extra,h=c.watchable,z=h===void 0?!1:h,b=r.found?r:e,S=b.width,P=b.height,V=s==="fak",C=[R.replacementClass,n?"".concat(R.cssPrefix,"-").concat(n):""].filter(function(C2){return u.classes.indexOf(C2)===-1}).filter(function(C2){return C2!==""||!!C2}).concat(u.classes).join(" "),B={children:[],attributes:k(k({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},w=V&&!~u.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};z&&(B.attributes[E1]=""),l&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(f||X3())},children:[l]}),delete B.attributes.title);var q=k(k({},B),{},{prefix:s,iconName:n,main:e,mask:r,maskId:o,transform:i,symbol:t,styles:k(k({},w),u.styles)}),Z=r.found&&e.found?i1("generateAbstractMask",q)||{children:[],attributes:{}}:i1("generateAbstractIcon",q)||{children:[],attributes:{}},t2=Z.children,w2=Z.attributes;return q.children=t2,q.attributes=w2,t?Ev(q):Bv(q)}function z7(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,l=t===void 0?!1:t,o=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(o[E1]="");var f=k({},i.styles);Y0(s)&&(f.transform=hv({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var u=n6(f);u.length>0&&(o.style=u);var h=[];return h.push({tag:"span",attributes:o,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function Fv(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=n6(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var D6=F2.styles;function v0(c){var a=c[0],e=c[1],r=c.slice(4),s=q0(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(P1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(P1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(P1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Dv={found:!1,width:512,height:512};function Ov(c,a){!L9&&!R.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function h0(c,a){var e=a;return a==="fa"&&R.styleDefault!==null&&(a=g1()),new Promise(function(r,s){if(i1("missingIconAbstract"),e==="fa"){var n=B9(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&D6[a]&&D6[a][c]){var i=D6[a][c];return r(v0(i))}Ov(c,a),r(k(k({},Dv),{},{icon:R.showMissingIcons&&c?i1("missingIconAbstract")||{}:{}}))})}var p7=function(){},H0=R.measurePerformance&&z4&&z4.mark&&z4.measure?z4:{mark:p7,measure:p7},S3='FA "6.4.2"',Iv=function(a){return H0.mark("".concat(S3," ").concat(a," begins")),function(){return F9(a)}},F9=function(a){H0.mark("".concat(S3," ").concat(a," ends")),H0.measure("".concat(S3," ").concat(a),"".concat(S3," ").concat(a," begins"),"".concat(S3," ").concat(a," ends"))},a8={begin:Iv,end:F9},w4=function(){};function V7(c){var a=c.getAttribute?c.getAttribute(E1):null;return typeof a=="string"}function Uv(c){var a=c.getAttribute?c.getAttribute(W0):null,e=c.getAttribute?c.getAttribute(G0):null;return a&&e}function $v(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(R.replacementClass)}function qv(){if(R.autoReplaceSvg===!0)return A4.replace;var c=A4[R.autoReplaceSvg];return c||A4.replace}function jv(c){return s2.createElementNS("http://www.w3.org/2000/svg",c)}function Wv(c){return s2.createElement(c)}function D9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?jv:Wv:e;if(typeof c=="string")return s2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(D9(i,{ceFn:r}))}),s}function Gv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var A4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(D9(s),e)}),e.getAttribute(E1)===null&&R.keepOriginalSource){var r=s2.createComment(Gv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~X0(e).indexOf(R.replacementClass))return A4.replace(a);var s=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,l){return l===R.replacementClass||l.match(s)?t.toSvg.push(l):t.toNode.push(l),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return a4(t)}).join(`
`);e.setAttribute(E1,""),e.innerHTML=i}};function d7(c){c()}function O9(c,a){var e=typeof a=="function"?a:w4;if(c.length===0)e();else{var r=d7;R.mutateApproach===Qu&&(r=C1.requestAnimationFrame||d7),r(function(){var s=qv(),n=a8.begin("mutate");c.map(s),n(),e()})}}var e8=!1;function I9(){e8=!0}function z0(){e8=!1}var U4=null;function M7(c){if(o7&&R.observeMutations){var a=c.treeCallback,e=a===void 0?w4:a,r=c.nodeCallback,s=r===void 0?w4:r,n=c.pseudoElementsCallback,i=n===void 0?w4:n,t=c.observeMutationsRoot,l=t===void 0?s2:t;U4=new o7(function(o){if(!e8){var f=g1();V3(o).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!V7(u.addedNodes[0])&&(R.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&R.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&V7(u.target)&&~sv.indexOf(u.attributeName))if(u.attributeName==="class"&&Uv(u.target)){var h=t6(X0(u.target)),z=h.prefix,b=h.iconName;u.target.setAttribute(W0,z||f),b&&u.target.setAttribute(G0,b)}else $v(u.target)&&s(u.target)})}}),l1&&U4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kv(){U4&&U4.disconnect()}function Xv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Yv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=t6(X0(c));return s.prefix||(s.prefix=g1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=yv(s.prefix,c.innerText)||J0(s.prefix,o0(c.innerText))),!s.iconName&&R.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Qv(c){var a=V3(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return R.autoA11y&&(e?a["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||X3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Jv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Yv(c),r=e.iconName,s=e.prefix,n=e.rest,i=Qv(c),t=m0("parseNodeAttributes",{},c),l=a.styleParser?Xv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},t)}var Zv=F2.styles;function U9(c){var a=R.autoReplaceSvg==="nest"?C7(c,{styleParser:!1}):C7(c);return~a.extra.classes.indexOf(x9)?i1("generateLayersText",c,a):i1("generateSvgReplacementMutation",c,a)}var L1=new Set;K0.map(function(c){L1.add("fa-".concat(c))});Object.keys(j3[r2]).map(L1.add.bind(L1));Object.keys(j3[l2]).map(L1.add.bind(L1));L1=Z3(L1);function g7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var e=s2.documentElement.classList,r=function(u){return e.add("".concat(f7,"-").concat(u))},s=function(u){return e.remove("".concat(f7,"-").concat(u))},n=R.autoFetchSvg?L1:K0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Zv));n.includes("fa")||n.push("fa");var i=[".".concat(x9,":not([").concat(E1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(E1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=V3(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var l=a8.begin("onTree"),o=t.reduce(function(f,u){try{var h=U9(u);h&&f.push(h)}catch(z){L9||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise(function(f,u){Promise.all(o).then(function(h){O9(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(h){l(),u(h)})})}function ch(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U9(c).then(function(e){e&&O9([e],a)})}function ah(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:u0(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:u0(s||{})),c(r,k(k({},e),{},{mask:s}))}}var eh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?K2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,l=t===void 0?null:t,o=e.maskId,f=o===void 0?null:o,u=e.title,h=u===void 0?null:u,z=e.titleId,b=z===void 0?null:z,S=e.classes,P=S===void 0?[]:S,V=e.attributes,C=V===void 0?{}:V,B=e.styles,w=B===void 0?{}:B;if(a){var q=a.prefix,Z=a.iconName,t2=a.icon;return l6(k({type:"icon"},a),function(){return F1("beforeDOMElementCreation",{iconDefinition:a,params:e}),R.autoA11y&&(h?C["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(b||X3()):(C["aria-hidden"]="true",C.focusable="false")),c8({icons:{main:v0(t2),mask:l?v0(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:Z,transform:k(k({},K2),s),symbol:i,title:h,maskId:f,titleId:b,extra:{attributes:C,styles:w,classes:P}})})}},rh={mixout:function(){return{icon:ah(eh)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=g7,e.nodeCallback=ch,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?s2:r,n=e.callback,i=n===void 0?function(){}:n;return g7(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,l=r.transform,o=r.symbol,f=r.mask,u=r.maskId,h=r.extra;return new Promise(function(z,b){Promise.all([h0(s,t),f.iconName?h0(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=q0(S,2),V=P[0],C=P[1];z([e,c8({icons:{main:V,mask:C},prefix:t,iconName:s,transform:l,symbol:o,maskId:u,title:n,titleId:i,extra:h,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,l=n6(t);l.length>0&&(s.style=l);var o;return Y0(i)&&(o=i1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(o||n.icon),{children:r,attributes:s}}}},sh={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return l6({type:"layer"},function(){F1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(l){i=i.concat(l.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Z3(n)).join(" ")},children:i}]})}}}},nh={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,l=r.attributes,o=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return l6({type:"counter",content:e},function(){return F1("beforeDOMElementCreation",{content:e,params:r}),Fv({content:e.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Z3(t))}})})}}}},ih={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?K2:s,i=r.title,t=i===void 0?null:i,l=r.classes,o=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,h=r.styles,z=h===void 0?{}:h;return l6({type:"text",content:e},function(){return F1("beforeDOMElementCreation",{content:e,params:r}),z7({content:e,transform:k(k({},K2),n),title:t,extra:{attributes:u,styles:z,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Z3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,l=null;if(M9){var o=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/o,l=f.height/o}return R.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,z7({content:e.innerHTML,width:t,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},th=new RegExp('"',"ug"),L7=[1105920,1112319];function lh(c){var a=c.replace(th,""),e=Cv(a,0),r=e>=L7[0]&&e<=L7[1],s=a.length===2?a[0]===a[1]:!1;return{value:o0(s?a[0]:a),isSecondary:r||s}}function x7(c,a){var e="".concat(Yu).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=V3(c.children),i=n.filter(function(t2){return t2.getAttribute(l0)===a})[0],t=C1.getComputedStyle(c,a),l=t.getPropertyValue("font-family").match(av),o=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&f!=="none"&&f!==""){var u=t.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?l2:r2,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?W3[h][l[2].toLowerCase()]:ev[h][o],b=lh(u),S=b.value,P=b.isSecondary,V=l[0].startsWith("FontAwesome"),C=J0(z,S),B=C;if(V){var w=Sv(S);w.iconName&&w.prefix&&(C=w.iconName,z=w.prefix)}if(C&&!P&&(!i||i.getAttribute(W0)!==z||i.getAttribute(G0)!==B)){c.setAttribute(e,B),i&&c.removeChild(i);var q=Jv(),Z=q.extra;Z.attributes[l0]=a,h0(C,z).then(function(t2){var w2=c8(k(k({},q),{},{icons:{main:t2,mask:Z0()},prefix:z,iconName:B,extra:Z,watchable:!0})),C2=s2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(C2,c.firstChild):c.appendChild(C2),C2.outerHTML=w2.map(function(P2){return a4(P2)}).join(`