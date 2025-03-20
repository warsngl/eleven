(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},an=[],nt=()=>{},$u=()=>!1,ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xr=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Nr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vu=Object.prototype.hasOwnProperty,q=(t,e)=>Vu.call(t,e),D=Array.isArray,cn=t=>si(t)==="[object Map]",sa=t=>si(t)==="[object Set]",M=t=>typeof t=="function",he=t=>typeof t=="string",Rt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",ia=t=>(re(t)||M(t))&&M(t.then)&&M(t.catch),ra=Object.prototype.toString,si=t=>ra.call(t),ju=t=>si(t).slice(8,-1),oa=t=>si(t)==="[object Object]",Rr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gu=/-(\w)/g,It=ii(t=>t.replace(Gu,(e,n)=>n?n.toUpperCase():"")),Ku=/\B([A-Z])/g,At=ii(t=>t.replace(Ku,"-$1").toLowerCase()),la=ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ii=ii(t=>t?`on${la(t)}`:""),bt=(t,e)=>!Object.is(t,e),Ti=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},aa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},qu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fo;const ri=()=>Fo||(Fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ar(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?Ju(s):Ar(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||re(t))return t}const zu=/;(?![^(]*\))/g,Yu=/:([^]+)/,Qu=/\/\*[^]*?\*\//g;function Ju(t){const e={};return t.replace(Qu,"").split(zu).forEach(n=>{if(n){const s=n.split(Yu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tt(t){let e="";if(he(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=Tt(t[n]);s&&(e+=s+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zu=Tr(Xu);function ca(t){return!!t||t===""}const ua=t=>!!(t&&t.__v_isRef===!0),_n=t=>he(t)?t:t==null?"":D(t)||re(t)&&(t.toString===ra||!M(t.toString))?ua(t)?_n(t.value):JSON.stringify(t,ha,2):String(t),ha=(t,e)=>ua(e)?ha(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[xi(s,r)+" =>"]=i,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xi(n))}:Rt(e)?xi(e):re(e)&&!D(e)&&!oa(e)?String(e):e,xi=(t,e="")=>{var n;return Rt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class fa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function da(t){return new fa(t)}function pa(){return Te}function eh(t,e=!1){Te&&Te.cleanups.push(t)}let ee;const Ni=new WeakSet;class _a{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ni.has(this)&&(Ni.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ma(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lo(this),ya(this);const e=ee,n=Ge;ee=this,Ge=!0;try{return this.fn()}finally{va(this),ee=e,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dr(e);this.deps=this.depsTail=void 0,Lo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ni.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zi(this)&&this.run()}get dirty(){return zi(this)}}let ga=0,Bn,Wn;function ma(t,e=!1){if(t.flags|=8,e){t.next=Wn,Wn=t;return}t.next=Bn,Bn=t}function Pr(){ga++}function Or(){if(--ga>0)return;if(Wn){let e=Wn;for(Wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Bn;){let e=Bn;for(Bn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ya(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function va(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Dr(s),th(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function zi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ba(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ba(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qn))return;t.globalVersion=Qn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!zi(t)){t.flags&=-3;return}const n=ee,s=Ge;ee=t,Ge=!0;try{ya(t);const i=t.fn(t._value);(e.version===0||bt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ee=n,Ge=s,va(t),t.flags&=-3}}function Dr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Dr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function th(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ge=!0;const Ca=[];function Pt(){Ca.push(Ge),Ge=!1}function Ot(){const t=Ca.pop();Ge=t===void 0?!0:t}function Lo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ee;ee=void 0;try{e()}finally{ee=n}}}let Qn=0;class nh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ee||!Ge||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new nh(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,Ea(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=s)}return n}trigger(e){this.version++,Qn++,this.notify(e)}notify(e){Pr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Or()}}}function Ea(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ea(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const As=new WeakMap,Gt=Symbol(""),Yi=Symbol(""),Jn=Symbol("");function Ce(t,e,n){if(Ge&&ee){let s=As.get(t);s||As.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Mr),i.map=s,i.key=n),i.track()}}function at(t,e,n,s,i,r){const o=As.get(t);if(!o){Qn++;return}const l=a=>{a&&a.trigger()};if(Pr(),e==="clear")o.forEach(l);else{const a=D(t),c=a&&Rr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Jn||!Rt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Jn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Gt)),cn(t)&&l(o.get(Yi)));break;case"delete":a||(l(o.get(Gt)),cn(t)&&l(o.get(Yi)));break;case"set":cn(t)&&l(o.get(Gt));break}}Or()}function sh(t,e){const n=As.get(t);return n&&n.get(e)}function tn(t){const e=j(t);return e===t?e:(Ce(e,"iterate",Jn),Ue(t)?e:e.map(Ee))}function oi(t){return Ce(t=j(t),"iterate",Jn),t}const ih={__proto__:null,[Symbol.iterator](){return Ri(this,Symbol.iterator,Ee)},concat(...t){return tn(this).concat(...t.map(e=>D(e)?tn(e):e))},entries(){return Ri(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(Ee),arguments)},find(t,e){return ot(this,"find",t,e,Ee,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ai(this,"includes",t)},indexOf(...t){return Ai(this,"indexOf",t)},join(t){return tn(this).join(t)},lastIndexOf(...t){return Ai(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return An(this,"pop")},push(...t){return An(this,"push",t)},reduce(t,...e){return Bo(this,"reduce",t,e)},reduceRight(t,...e){return Bo(this,"reduceRight",t,e)},shift(){return An(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return An(this,"splice",t)},toReversed(){return tn(this).toReversed()},toSorted(t){return tn(this).toSorted(t)},toSpliced(...t){return tn(this).toSpliced(...t)},unshift(...t){return An(this,"unshift",t)},values(){return Ri(this,"values",Ee)}};function Ri(t,e,n){const s=oi(t),i=s[e]();return s!==t&&!Ue(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const rh=Array.prototype;function ot(t,e,n,s,i,r){const o=oi(t),l=o!==t&&!Ue(t),a=o[e];if(a!==rh[e]){const h=a.apply(t,r);return l?Ee(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,Ee(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Bo(t,e,n,s){const i=oi(t);let r=n;return i!==t&&(Ue(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Ee(l),a,t)}),i[e](r,...s)}function Ai(t,e,n){const s=j(t);Ce(s,"iterate",Jn);const i=s[e](...n);return(i===-1||i===!1)&&Lr(n[0])?(n[0]=j(n[0]),s[e](...n)):i}function An(t,e,n=[]){Pt(),Pr();const s=j(t)[e].apply(t,n);return Or(),Ot(),s}const oh=Tr("__proto__,__v_isRef,__isVue"),wa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rt));function lh(t){Rt(t)||(t=String(t));const e=j(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Sa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?mh:Na:r?xa:Ta).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!i){let a;if(o&&(a=ih[n]))return a;if(n==="hasOwnProperty")return lh}const l=Reflect.get(e,n,ce(e)?e:s);return(Rt(n)?wa.has(n):oh(n))||(i||Ce(e,"get",n),r)?l:ce(l)?o&&Rr(n)?l:l.value:re(l)?i?Ra(l):li(l):l}}class Ia extends Sa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=qt(r);if(!Ue(s)&&!qt(s)&&(r=j(r),s=j(s)),!D(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=D(e)&&Rr(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===j(i)&&(o?bt(s,r)&&at(e,"set",n,s):at(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&at(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Rt(n)||!wa.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",D(e)?"length":Gt),Reflect.ownKeys(e)}}class ah extends Sa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ch=new Ia,uh=new ah,hh=new Ia(!0);const Qi=t=>t,Cs=t=>Reflect.getPrototypeOf(t);function fh(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=cn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Qi:e?Ji:Ee;return!e&&Ce(r,"iterate",a?Yi:Gt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dh(t,e){const n={get(i){const r=this.__v_raw,o=j(r),l=j(i);t||(bt(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:a}=Cs(o),c=e?Qi:t?Ji:Ee;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(j(i),"iterate",Gt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=j(r),l=j(i);return t||(bt(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=j(l),c=e?Qi:t?Ji:Ee;return!t&&Ce(a,"iterate",Gt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ne(n,t?{add:Es("add"),set:Es("set"),delete:Es("delete"),clear:Es("clear")}:{add(i){!e&&!Ue(i)&&!qt(i)&&(i=j(i));const r=j(this);return Cs(r).has.call(r,i)||(r.add(i),at(r,"add",i,i)),this},set(i,r){!e&&!Ue(r)&&!qt(r)&&(r=j(r));const o=j(this),{has:l,get:a}=Cs(o);let c=l.call(o,i);c||(i=j(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?bt(r,u)&&at(o,"set",i,r):at(o,"add",i,r),this},delete(i){const r=j(this),{has:o,get:l}=Cs(r);let a=o.call(r,i);a||(i=j(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&at(r,"delete",i,void 0),c},clear(){const i=j(this),r=i.size!==0,o=i.clear();return r&&at(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=fh(i,t,e)}),n}function kr(t,e){const n=dh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const ph={get:kr(!1,!1)},_h={get:kr(!1,!0)},gh={get:kr(!0,!1)};const Ta=new WeakMap,xa=new WeakMap,Na=new WeakMap,mh=new WeakMap;function yh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vh(t){return t.__v_skip||!Object.isExtensible(t)?0:yh(ju(t))}function li(t){return qt(t)?t:Fr(t,!1,ch,ph,Ta)}function bh(t){return Fr(t,!1,hh,_h,xa)}function Ra(t){return Fr(t,!0,uh,gh,Na)}function Fr(t,e,n,s,i){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=vh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ct(t){return qt(t)?Ct(t.__v_raw):!!(t&&t.__v_isReactive)}function qt(t){return!!(t&&t.__v_isReadonly)}function Ue(t){return!!(t&&t.__v_isShallow)}function Lr(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Br(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&aa(t,"__v_skip",!0),t}const Ee=t=>re(t)?li(t):t,Ji=t=>re(t)?Ra(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ai(t){return Ch(t,!1)}function Ch(t,e){return ce(t)?t:new Eh(t,e)}class Eh{constructor(e,n){this.dep=new Mr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:j(e),this._value=n?e:Ee(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ue(e)||qt(e);e=s?e:j(e),bt(e,n)&&(this._rawValue=e,this._value=s?e:Ee(e),this.dep.trigger())}}function fe(t){return ce(t)?t.value:t}const wh={get:(t,e,n)=>e==="__v_raw"?t:fe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Aa(t){return Ct(t)?t:new Proxy(t,wh)}function Sh(t){const e=D(t)?new Array(t.length):{};for(const n in t)e[n]=Th(t,n);return e}class Ih{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sh(j(this._object),this._key)}}function Th(t,e,n){const s=t[e];return ce(s)?s:new Ih(t,e,n)}class xh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return ma(this,!0),!0}get value(){const e=this.dep.track();return ba(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nh(t,e,n=!1){let s,i;return M(t)?s=t:(s=t.get,i=t.set),new xh(s,i,n)}const ws={},Ps=new WeakMap;let Ht;function Rh(t,e=!1,n=Ht){if(n){let s=Ps.get(n);s||Ps.set(n,s=[]),s.push(t)}}function Ah(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=R=>i?R:Ue(R)||i===!1||i===0?vt(R,1):vt(R);let u,h,d,_,C=!1,x=!1;if(ce(t)?(h=()=>t.value,C=Ue(t)):Ct(t)?(h=()=>c(t),C=!0):D(t)?(x=!0,C=t.some(R=>Ct(R)||Ue(R)),h=()=>t.map(R=>{if(ce(R))return R.value;if(Ct(R))return c(R);if(M(R))return a?a(R,2):R()})):M(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Pt();try{d()}finally{Ot()}}const R=Ht;Ht=u;try{return a?a(t,3,[_]):t(_)}finally{Ht=R}}:h=nt,e&&i){const R=h,K=i===!0?1/0:i;h=()=>vt(R(),K)}const B=pa(),W=()=>{u.stop(),B&&B.active&&Nr(B.effects,u)};if(r&&e){const R=e;e=(...K)=>{R(...K),W()}}let z=x?new Array(t.length).fill(ws):ws;const Y=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const K=u.run();if(i||C||(x?K.some((rt,be)=>bt(rt,z[be])):bt(K,z))){d&&d();const rt=Ht;Ht=u;try{const be=[K,z===ws?void 0:x&&z[0]===ws?[]:z,_];a?a(e,3,be):e(...be),z=K}finally{Ht=rt}}}else u.run()};return l&&l(Y),u=new _a(h),u.scheduler=o?()=>o(Y,!1):Y,_=R=>Rh(R,!1,u),d=u.onStop=()=>{const R=Ps.get(u);if(R){if(a)a(R,4);else for(const K of R)K();Ps.delete(u)}},e?s?Y(!0):z=u.run():o?o(Y.bind(null,!0),!0):u.run(),W.pause=u.pause.bind(u),W.resume=u.resume.bind(u),W.stop=W,W}function vt(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))vt(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(sa(t)||cn(t))t.forEach(s=>{vt(s,e,n)});else if(oa(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hs(t,e,n,s){try{return s?t(...s):t()}catch(i){ci(i,e,n)}}function st(t,e,n,s){if(M(t)){const i=hs(t,e,n,s);return i&&ia(i)&&i.catch(r=>{ci(r,e,n)}),i}if(D(t)){const i=[];for(let r=0;r<t.length;r++)i.push(st(t[r],e,n,s));return i}}function ci(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Pt(),hs(r,null,10,[t,a,c]),Ot();return}}Ph(t,n,i,s,o)}function Ph(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const xe=[];let et=-1;const un=[];let mt=null,on=0;const Pa=Promise.resolve();let Os=null;function Oa(t){const e=Os||Pa;return t?e.then(this?t.bind(this):t):e}function Oh(t){let e=et+1,n=xe.length;for(;e<n;){const s=e+n>>>1,i=xe[s],r=Xn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Wr(t){if(!(t.flags&1)){const e=Xn(t),n=xe[xe.length-1];!n||!(t.flags&2)&&e>=Xn(n)?xe.push(t):xe.splice(Oh(e),0,t),t.flags|=1,Da()}}function Da(){Os||(Os=Pa.then(ka))}function Dh(t){D(t)?un.push(...t):mt&&t.id===-1?mt.splice(on+1,0,t):t.flags&1||(un.push(t),t.flags|=1),Da()}function Wo(t,e,n=et+1){for(;n<xe.length;n++){const s=xe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;xe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ma(t){if(un.length){const e=[...new Set(un)].sort((n,s)=>Xn(n)-Xn(s));if(un.length=0,mt){mt.push(...e);return}for(mt=e,on=0;on<mt.length;on++){const n=mt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,on=0}}const Xn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ka(t){try{for(et=0;et<xe.length;et++){const e=xe[et];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;et<xe.length;et++){const e=xe[et];e&&(e.flags&=-2)}et=-1,xe.length=0,Ma(),Os=null,(xe.length||un.length)&&ka()}}let Ve=null,Fa=null;function Ds(t){const e=Ve;return Ve=t,Fa=t&&t.type.__scopeId||null,e}function Mh(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zo(-1);const r=Ds(e);let o;try{o=t(...i)}finally{Ds(r),s._d&&zo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ft(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Pt(),st(a,n,8,[t.el,l,t,e]),Ot())}}const kh=Symbol("_vte"),Fh=t=>t.__isTeleport;function Hr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function La(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ms(t,e,n,s,i=!1){if(D(t)){t.forEach((C,x)=>Ms(C,e&&(D(e)?e[x]:e),n,s,i));return}if(Hn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ms(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?jr(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState,d=j(h),_=h===se?()=>!1:C=>q(d,C);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),M(a))hs(a,l,12,[o,u]);else{const C=he(a),x=ce(a);if(C||x){const B=()=>{if(t.f){const W=C?_(a)?h[a]:u[a]:a.value;i?D(W)&&Nr(W,r):D(W)?W.includes(r)||W.push(r):C?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else C?(u[a]=o,_(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(B.id=-1,Fe(B,n)):B()}}}ri().requestIdleCallback;ri().cancelIdleCallback;const Hn=t=>!!t.type.__asyncLoader,Ba=t=>t.type.__isKeepAlive;function Lh(t,e){Wa(t,"a",e)}function Bh(t,e){Wa(t,"da",e)}function Wa(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ui(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ba(i.parent.vnode)&&Wh(s,e,n,i),i=i.parent}}function Wh(t,e,n,s){const i=ui(e,t,s,!0);Ua(()=>{Nr(s[e],i)},n)}function ui(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Pt();const l=fs(n),a=st(e,n,t,o);return l(),Ot(),a});return s?i.unshift(r):i.push(r),r}}const pt=t=>(e,n=Se)=>{(!es||t==="sp")&&ui(t,(...s)=>e(...s),n)},Hh=pt("bm"),Ha=pt("m"),Uh=pt("bu"),$h=pt("u"),Vh=pt("bum"),Ua=pt("um"),jh=pt("sp"),Gh=pt("rtg"),Kh=pt("rtc");function qh(t,e=Se){ui("ec",t,e)}const zh=Symbol.for("v-ndc");function ks(t,e,n,s){let i;const r=n,o=D(t);if(o||he(t)){const l=o&&Ct(t);let a=!1;l&&(a=!Ue(t),t=oi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Ee(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(re(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Xi=t=>t?cc(t)?jr(t):Xi(t.parent):null,Un=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xi(t.parent),$root:t=>Xi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Va(t),$forceUpdate:t=>t.f||(t.f=()=>{Wr(t.update)}),$nextTick:t=>t.n||(t.n=Oa.bind(t.proxy)),$watch:t=>yf.bind(t)}),Pi=(t,e)=>t!==se&&!t.__isScriptSetup&&q(t,e),Yh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Pi(s,e))return o[e]=1,s[e];if(i!==se&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==se&&q(n,e))return o[e]=4,n[e];Zi&&(o[e]=0)}}const u=Un[e];let h,d;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Pi(i,e)?(i[e]=n,!0):s!==se&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&q(t,o)||Pi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Un,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ho(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zi=!0;function Qh(t){const e=Va(t),n=t.proxy,s=t.ctx;Zi=!1,e.beforeCreate&&Uo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:C,activated:x,deactivated:B,beforeDestroy:W,beforeUnmount:z,destroyed:Y,unmounted:R,render:K,renderTracked:rt,renderTriggered:be,errorCaptured:U,serverPrefetch:V,expose:ue,inheritAttrs:We,components:ze,directives:_t,filters:Tn}=e;if(c&&Jh(c,s,null),o)for(const H in o){const X=o[H];M(X)&&(s[H]=X.bind(n))}if(i){const H=i.call(n,n);re(H)&&(t.data=li(H))}if(Zi=!0,r)for(const H in r){const X=r[H],Mt=M(X)?X.bind(n,n):M(X.get)?X.get.bind(n,n):nt,vs=!M(X)&&M(X.set)?X.set.bind(n):nt,kt=hc({get:Mt,set:vs});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Ye=>kt.value=Ye})}if(l)for(const H in l)$a(l[H],s,n,H);if(a){const H=M(a)?a.call(n):a;Reflect.ownKeys(H).forEach(X=>{sf(X,H[X])})}u&&Uo(u,t,"c");function ae(H,X){D(X)?X.forEach(Mt=>H(Mt.bind(n))):X&&H(X.bind(n))}if(ae(Hh,h),ae(Ha,d),ae(Uh,_),ae($h,C),ae(Lh,x),ae(Bh,B),ae(qh,U),ae(Kh,rt),ae(Gh,be),ae(Vh,z),ae(Ua,R),ae(jh,V),D(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(X=>{Object.defineProperty(H,X,{get:()=>n[X],set:Mt=>n[X]=Mt})})}else t.exposed||(t.exposed={});K&&t.render===nt&&(t.render=K),We!=null&&(t.inheritAttrs=We),ze&&(t.components=ze),_t&&(t.directives=_t),V&&La(t)}function Jh(t,e,n=nt){D(t)&&(t=er(t));for(const s in t){const i=t[s];let r;re(i)?"default"in i?r=$n(i.from||s,i.default,!0):r=$n(i.from||s):r=$n(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Uo(t,e,n){st(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function $a(t,e,n,s){let i=s.includes(".")?sc(n,s):()=>n[s];if(he(t)){const r=e[t];M(r)&&Ts(i,r)}else if(M(t))Ts(i,t.bind(n));else if(re(t))if(D(t))t.forEach(r=>$a(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Ts(i,r,t)}}function Va(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Fs(a,c,o,!0)),Fs(a,e,o)),re(e)&&r.set(e,a),a}function Fs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Fs(t,r,n,!0),i&&i.forEach(o=>Fs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Xh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Xh={data:$o,props:Vo,emits:Vo,methods:Fn,computed:Fn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Fn,directives:Fn,watch:ef,provide:$o,inject:Zh};function $o(t,e){return e?t?function(){return Ne(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Zh(t,e){return Fn(er(t),er(e))}function er(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Ne(Object.create(null),t,e):e}function Vo(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Ho(t),Ho(e??{})):e}function ef(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=Ie(t[s],e[s]);return n}function ja(){return{app:null,config:{isNativeTag:$u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tf=0;function nf(t,e){return function(s,i=null){M(s)||(s=Ne({},s)),i!=null&&!re(i)&&(i=null);const r=ja(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:tf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Hf,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&M(u.install)?(o.add(u),u.install(c,...h)):M(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||Ke(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,jr(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(st(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Kt;Kt=c;try{return u()}finally{Kt=h}}};return c}}let Kt=null;function sf(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function $n(t,e,n=!1){const s=Se||Ve;if(s||Kt){const i=Kt?Kt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function rf(){return!!(Se||Ve||Kt)}const Ga={},Ka=()=>Object.create(Ga),qa=t=>Object.getPrototypeOf(t)===Ga;function of(t,e,n,s=!1){const i={},r=Ka();t.propsDefaults=Object.create(null),za(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:bh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(hi(t.emitsOptions,d))continue;const _=e[d];if(a)if(q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const C=It(d);i[C]=tr(a,l,C,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{za(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=At(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=tr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&at(t.attrs,"set","")}function za(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ln(a))continue;const c=e[a];let u;i&&q(i,u=It(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:hi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=tr(i,a,h,c[h],t,!q(c,h))}}return o}function tr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=fs(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===At(n))&&(s=!0))}return s}const af=new WeakMap;function Ya(t,e,n=!1){const s=n?af:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,_]=Ya(h,e,!0);Ne(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return re(t)&&s.set(t,an),an;if(D(r))for(let u=0;u<r.length;u++){const h=It(r[u]);jo(h)&&(o[h]=se)}else if(r)for(const u in r){const h=It(u);if(jo(h)){const d=r[u],_=o[h]=D(d)||M(d)?{type:d}:Ne({},d),C=_.type;let x=!1,B=!0;if(D(C))for(let W=0;W<C.length;++W){const z=C[W],Y=M(z)&&z.name;if(Y==="Boolean"){x=!0;break}else Y==="String"&&(B=!1)}else x=M(C)&&C.name==="Boolean";_[0]=x,_[1]=B,(x||q(_,"default"))&&l.push(h)}}const c=[o,l];return re(t)&&s.set(t,c),c}function jo(t){return t[0]!=="$"&&!Ln(t)}const Qa=t=>t[0]==="_"||t==="$stable",Ur=t=>D(t)?t.map(tt):[tt(t)],cf=(t,e,n)=>{if(e._n)return e;const s=Mh((...i)=>Ur(e(...i)),n);return s._c=!1,s},Ja=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Qa(i))continue;const r=t[i];if(M(r))e[i]=cf(i,r,s);else if(r!=null){const o=Ur(r);e[i]=()=>o}}},Xa=(t,e)=>{const n=Ur(e);t.slots.default=()=>n},Za=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},uf=(t,e,n)=>{const s=t.slots=Ka();if(t.vnode.shapeFlag&32){const i=e._;i?(Za(s,e,n),n&&aa(s,"_",i,!0)):Ja(e,s)}else e&&Xa(t,e)},hf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Za(i,e,n):(r=!e.$stable,Ja(e,i)),o=e}else e&&(Xa(t,e),o={default:1});if(r)for(const l in i)!Qa(l)&&o[l]==null&&delete i[l]},Fe=If;function ff(t){return df(t)}function df(t,e){const n=ri();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=nt,insertStaticContent:C}=t,x=(f,p,g,v=null,m=null,y=null,I=void 0,S=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!Pn(f,p)&&(v=bs(f),Ye(f,m,y,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:b,ref:A,shapeFlag:T}=p;switch(b){case fi:B(f,p,g,v);break;case zt:W(f,p,g,v);break;case Di:f==null&&z(p,g,v,I);break;case Le:ze(f,p,g,v,m,y,I,S,w);break;default:T&1?K(f,p,g,v,m,y,I,S,w):T&6?_t(f,p,g,v,m,y,I,S,w):(T&64||T&128)&&b.process(f,p,g,v,m,y,I,S,w,Nn)}A!=null&&m&&Ms(A,f&&f.ref,y,p||f,!p)},B=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},z=(f,p,g,v)=>{[f.el,f.anchor]=C(f.children,p,g,v,f.el,f.anchor)},Y=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},R=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},K=(f,p,g,v,m,y,I,S,w)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),f==null?rt(p,g,v,m,y,I,S,w):V(f,p,m,y,I,S,w)},rt=(f,p,g,v,m,y,I,S)=>{let w,b;const{props:A,shapeFlag:T,transition:N,dirs:O}=f;if(w=f.el=o(f.type,y,A&&A.is,A),T&8?u(w,f.children):T&16&&U(f.children,w,null,v,m,Oi(f,y),I,S),O&&Ft(f,null,v,"created"),be(w,f,f.scopeId,I,v),A){for(const Z in A)Z!=="value"&&!Ln(Z)&&r(w,Z,null,A[Z],y,v);"value"in A&&r(w,"value",null,A.value,y),(b=A.onVnodeBeforeMount)&&Ze(b,v,f)}O&&Ft(f,null,v,"beforeMount");const $=pf(m,N);$&&N.beforeEnter(w),s(w,p,g),((b=A&&A.onVnodeMounted)||$||O)&&Fe(()=>{b&&Ze(b,v,f),$&&N.enter(w),O&&Ft(f,null,v,"mounted")},m)},be=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let y=0;y<v.length;y++)_(f,v[y]);if(m){let y=m.subTree;if(p===y||rc(y.type)&&(y.ssContent===p||y.ssFallback===p)){const I=m.vnode;be(f,I,I.scopeId,I.slotScopeIds,m.parent)}}},U=(f,p,g,v,m,y,I,S,w=0)=>{for(let b=w;b<f.length;b++){const A=f[b]=S?yt(f[b]):tt(f[b]);x(null,A,p,g,v,m,y,I,S)}},V=(f,p,g,v,m,y,I)=>{const S=p.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:A}=p;w|=f.patchFlag&16;const T=f.props||se,N=p.props||se;let O;if(g&&Lt(g,!1),(O=N.onVnodeBeforeUpdate)&&Ze(O,g,p,f),A&&Ft(p,f,g,"beforeUpdate"),g&&Lt(g,!0),(T.innerHTML&&N.innerHTML==null||T.textContent&&N.textContent==null)&&u(S,""),b?ue(f.dynamicChildren,b,S,g,v,Oi(p,m),y):I||X(f,p,S,null,g,v,Oi(p,m),y,!1),w>0){if(w&16)We(S,T,N,g,m);else if(w&2&&T.class!==N.class&&r(S,"class",null,N.class,m),w&4&&r(S,"style",T.style,N.style,m),w&8){const $=p.dynamicProps;for(let Z=0;Z<$.length;Z++){const Q=$[Z],Me=T[Q],Re=N[Q];(Re!==Me||Q==="value")&&r(S,Q,Me,Re,m,g)}}w&1&&f.children!==p.children&&u(S,p.children)}else!I&&b==null&&We(S,T,N,g,m);((O=N.onVnodeUpdated)||A)&&Fe(()=>{O&&Ze(O,g,p,f),A&&Ft(p,f,g,"updated")},v)},ue=(f,p,g,v,m,y,I)=>{for(let S=0;S<p.length;S++){const w=f[S],b=p[S],A=w.el&&(w.type===Le||!Pn(w,b)||w.shapeFlag&70)?h(w.el):g;x(w,b,A,null,v,m,y,I,!0)}},We=(f,p,g,v,m)=>{if(p!==g){if(p!==se)for(const y in p)!Ln(y)&&!(y in g)&&r(f,y,p[y],null,m,v);for(const y in g){if(Ln(y))continue;const I=g[y],S=p[y];I!==S&&y!=="value"&&r(f,y,S,I,m,v)}"value"in g&&r(f,"value",p.value,g.value,m)}},ze=(f,p,g,v,m,y,I,S,w)=>{const b=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:N,slotScopeIds:O}=p;O&&(S=S?S.concat(O):O),f==null?(s(b,g,v),s(A,g,v),U(p.children||[],g,A,m,y,I,S,w)):T>0&&T&64&&N&&f.dynamicChildren?(ue(f.dynamicChildren,N,g,m,y,I,S),(p.key!=null||m&&p===m.subTree)&&ec(f,p,!0)):X(f,p,g,A,m,y,I,S,w)},_t=(f,p,g,v,m,y,I,S,w)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,I,w):Tn(p,g,v,m,y,I,w):ys(f,p,w)},Tn=(f,p,g,v,m,y,I)=>{const S=f.component=Mf(f,v,m);if(Ba(f)&&(S.ctx.renderer=Nn),kf(S,!1,I),S.asyncDep){if(m&&m.registerDep(S,ae,I),!f.el){const w=S.subTree=Ke(zt);W(null,w,p,g)}}else ae(S,f,p,g,m,y,I)},ys=(f,p,g)=>{const v=p.component=f.component;if(wf(f,p,g))if(v.asyncDep&&!v.asyncResolved){H(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},ae=(f,p,g,v,m,y,I)=>{const S=()=>{if(f.isMounted){let{next:T,bu:N,u:O,parent:$,vnode:Z}=f;{const Je=tc(f);if(Je){T&&(T.el=Z.el,H(f,T,I)),Je.asyncDep.then(()=>{f.isUnmounted||S()});return}}let Q=T,Me;Lt(f,!1),T?(T.el=Z.el,H(f,T,I)):T=Z,N&&Ti(N),(Me=T.props&&T.props.onVnodeBeforeUpdate)&&Ze(Me,$,T,Z),Lt(f,!0);const Re=Ko(f),Qe=f.subTree;f.subTree=Re,x(Qe,Re,h(Qe.el),bs(Qe),f,m,y),T.el=Re.el,Q===null&&Sf(f,Re.el),O&&Fe(O,m),(Me=T.props&&T.props.onVnodeUpdated)&&Fe(()=>Ze(Me,$,T,Z),m)}else{let T;const{el:N,props:O}=p,{bm:$,m:Z,parent:Q,root:Me,type:Re}=f,Qe=Hn(p);Lt(f,!1),$&&Ti($),!Qe&&(T=O&&O.onVnodeBeforeMount)&&Ze(T,Q,p),Lt(f,!0);{Me.ce&&Me.ce._injectChildStyle(Re);const Je=f.subTree=Ko(f);x(null,Je,g,v,f,m,y),p.el=Je.el}if(Z&&Fe(Z,m),!Qe&&(T=O&&O.onVnodeMounted)){const Je=p;Fe(()=>Ze(T,Q,Je),m)}(p.shapeFlag&256||Q&&Hn(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Fe(f.a,m),f.isMounted=!0,p=g=v=null}};f.scope.on();const w=f.effect=new _a(S);f.scope.off();const b=f.update=w.run.bind(w),A=f.job=w.runIfDirty.bind(w);A.i=f,A.id=f.uid,w.scheduler=()=>Wr(A),Lt(f,!0),b()},H=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,lf(f,p.props,v,g),hf(f,p.children,g),Pt(),Wo(f),Ot()},X=(f,p,g,v,m,y,I,S,w=!1)=>{const b=f&&f.children,A=f?f.shapeFlag:0,T=p.children,{patchFlag:N,shapeFlag:O}=p;if(N>0){if(N&128){vs(b,T,g,v,m,y,I,S,w);return}else if(N&256){Mt(b,T,g,v,m,y,I,S,w);return}}O&8?(A&16&&xn(b,m,y),T!==b&&u(g,T)):A&16?O&16?vs(b,T,g,v,m,y,I,S,w):xn(b,m,y,!0):(A&8&&u(g,""),O&16&&U(T,g,v,m,y,I,S,w))},Mt=(f,p,g,v,m,y,I,S,w)=>{f=f||an,p=p||an;const b=f.length,A=p.length,T=Math.min(b,A);let N;for(N=0;N<T;N++){const O=p[N]=w?yt(p[N]):tt(p[N]);x(f[N],O,g,null,m,y,I,S,w)}b>A?xn(f,m,y,!0,!1,T):U(p,g,v,m,y,I,S,w,T)},vs=(f,p,g,v,m,y,I,S,w)=>{let b=0;const A=p.length;let T=f.length-1,N=A-1;for(;b<=T&&b<=N;){const O=f[b],$=p[b]=w?yt(p[b]):tt(p[b]);if(Pn(O,$))x(O,$,g,null,m,y,I,S,w);else break;b++}for(;b<=T&&b<=N;){const O=f[T],$=p[N]=w?yt(p[N]):tt(p[N]);if(Pn(O,$))x(O,$,g,null,m,y,I,S,w);else break;T--,N--}if(b>T){if(b<=N){const O=N+1,$=O<A?p[O].el:v;for(;b<=N;)x(null,p[b]=w?yt(p[b]):tt(p[b]),g,$,m,y,I,S,w),b++}}else if(b>N)for(;b<=T;)Ye(f[b],m,y,!0),b++;else{const O=b,$=b,Z=new Map;for(b=$;b<=N;b++){const ke=p[b]=w?yt(p[b]):tt(p[b]);ke.key!=null&&Z.set(ke.key,b)}let Q,Me=0;const Re=N-$+1;let Qe=!1,Je=0;const Rn=new Array(Re);for(b=0;b<Re;b++)Rn[b]=0;for(b=O;b<=T;b++){const ke=f[b];if(Me>=Re){Ye(ke,m,y,!0);continue}let Xe;if(ke.key!=null)Xe=Z.get(ke.key);else for(Q=$;Q<=N;Q++)if(Rn[Q-$]===0&&Pn(ke,p[Q])){Xe=Q;break}Xe===void 0?Ye(ke,m,y,!0):(Rn[Xe-$]=b+1,Xe>=Je?Je=Xe:Qe=!0,x(ke,p[Xe],g,null,m,y,I,S,w),Me++)}const Mo=Qe?_f(Rn):an;for(Q=Mo.length-1,b=Re-1;b>=0;b--){const ke=$+b,Xe=p[ke],ko=ke+1<A?p[ke+1].el:v;Rn[b]===0?x(null,Xe,g,ko,m,y,I,S,w):Qe&&(Q<0||b!==Mo[Q]?kt(Xe,g,ko,2):Q--)}}},kt=(f,p,g,v,m=null)=>{const{el:y,type:I,transition:S,children:w,shapeFlag:b}=f;if(b&6){kt(f.component.subTree,p,g,v);return}if(b&128){f.suspense.move(p,g,v);return}if(b&64){I.move(f,p,g,Nn);return}if(I===Le){s(y,p,g);for(let T=0;T<w.length;T++)kt(w[T],p,g,v);s(f.anchor,p,g);return}if(I===Di){Y(f,p,g);return}if(v!==2&&b&1&&S)if(v===0)S.beforeEnter(y),s(y,p,g),Fe(()=>S.enter(y),m);else{const{leave:T,delayLeave:N,afterLeave:O}=S,$=()=>s(y,p,g),Z=()=>{T(y,()=>{$(),O&&O()})};N?N(y,$,Z):Z()}else s(y,p,g)},Ye=(f,p,g,v=!1,m=!1)=>{const{type:y,props:I,ref:S,children:w,dynamicChildren:b,shapeFlag:A,patchFlag:T,dirs:N,cacheIndex:O}=f;if(T===-2&&(m=!1),S!=null&&Ms(S,null,g,f,!0),O!=null&&(p.renderCache[O]=void 0),A&256){p.ctx.deactivate(f);return}const $=A&1&&N,Z=!Hn(f);let Q;if(Z&&(Q=I&&I.onVnodeBeforeUnmount)&&Ze(Q,p,f),A&6)Uu(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}$&&Ft(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,g,Nn,v):b&&!b.hasOnce&&(y!==Le||T>0&&T&64)?xn(b,p,g,!1,!0):(y===Le&&T&384||!m&&A&16)&&xn(w,p,g),v&&Oo(f)}(Z&&(Q=I&&I.onVnodeUnmounted)||$)&&Fe(()=>{Q&&Ze(Q,p,f),$&&Ft(f,null,p,"unmounted")},g)},Oo=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Le){Hu(g,v);return}if(p===Di){R(f);return}const y=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:S}=m,w=()=>I(g,y);S?S(f.el,y,w):w()}else y()},Hu=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Uu=(f,p,g)=>{const{bum:v,scope:m,job:y,subTree:I,um:S,m:w,a:b}=f;Go(w),Go(b),v&&Ti(v),m.stop(),y&&(y.flags|=8,Ye(I,f,p,g)),S&&Fe(S,p),Fe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},xn=(f,p,g,v=!1,m=!1,y=0)=>{for(let I=y;I<f.length;I++)Ye(f[I],p,g,v,m)},bs=f=>{if(f.shapeFlag&6)return bs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[kh];return g?d(g):p};let Si=!1;const Do=(f,p,g)=>{f==null?p._vnode&&Ye(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Si||(Si=!0,Wo(),Ma(),Si=!1)},Nn={p:x,um:Ye,m:kt,r:Oo,mt:Tn,mc:U,pc:X,pbc:ue,n:bs,o:t};return{render:Do,hydrate:void 0,createApp:nf(Do)}}function Oi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ec(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=yt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ec(o,l)),l.type===fi&&(l.el=o.el)}}function _f(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tc(e)}function Go(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const gf=Symbol.for("v-scx"),mf=()=>$n(gf);function Ts(t,e,n){return nc(t,e,n)}function nc(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ne({},n),a=e&&s||!e&&r!=="post";let c;if(es){if(r==="sync"){const _=mf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=nt,_.resume=nt,_.pause=nt,_}}const u=Se;l.call=(_,C,x)=>st(_,u,C,x);let h=!1;r==="post"?l.scheduler=_=>{Fe(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,C)=>{C?_():Wr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Ah(t,e,l);return es&&(c?c.push(d):a&&d()),d}function yf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?sc(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=fs(this),l=nc(i,r.bind(s),n);return o(),l}function sc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const vf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${At(e)}Modifiers`];function bf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&vf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(qu)));let l,a=s[l=Ii(e)]||s[l=Ii(It(e))];!a&&r&&(a=s[l=Ii(At(e))]),a&&st(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,st(c,t,6,i)}}function ic(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=ic(c,e,!0);u&&(l=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(re(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):Ne(o,r),re(t)&&s.set(t,o),o)}function hi(t,e){return!t||!ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,At(e))||q(t,e))}function Ko(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:C,inheritAttrs:x}=t,B=Ds(t);let W,z;try{if(n.shapeFlag&4){const R=i||s,K=R;W=tt(c.call(K,R,u,h,_,d,C)),z=l}else{const R=e;W=tt(R.length>1?R(h,{attrs:l,slots:o,emit:a}):R(h,null)),z=e.props?l:Cf(l)}}catch(R){Vn.length=0,ci(R,t,1),W=Ke(zt)}let Y=W;if(z&&x!==!1){const R=Object.keys(z),{shapeFlag:K}=Y;R.length&&K&7&&(r&&R.some(xr)&&(z=Ef(z,r)),Y=gn(Y,z,!1,!0))}return n.dirs&&(Y=gn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Hr(Y,n.transition),W=Y,Ds(B),W}const Cf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ni(n))&&((e||(e={}))[n]=t[n]);return e},Ef=(t,e)=>{const n={};for(const s in t)(!xr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function wf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?qo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!hi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?qo(s,o,c):!0:!!o;return!1}function qo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!hi(n,r))return!0}return!1}function Sf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const rc=t=>t.__isSuspense;function If(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Dh(t)}const Le=Symbol.for("v-fgt"),fi=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Di=Symbol.for("v-stc"),Vn=[];let Be=null;function ge(t=!1){Vn.push(Be=t?null:[])}function Tf(){Vn.pop(),Be=Vn[Vn.length-1]||null}let Zn=1;function zo(t,e=!1){Zn+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function oc(t){return t.dynamicChildren=Zn>0?Be||an:null,Tf(),Zn>0&&Be&&Be.push(t),t}function we(t,e,n,s,i,r){return oc(Ae(t,e,n,s,i,r,!0))}function xf(t,e,n,s,i){return oc(Ke(t,e,n,s,i,!0))}function lc(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const ac=({key:t})=>t??null,xs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||M(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function Ae(t,e=null,n=null,s=0,i=null,r=t===Le?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ac(e),ref:e&&xs(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return l?(Vr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),Zn>0&&!o&&Be&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Be.push(a),a}const Ke=Nf;function Nf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zh)&&(t=zt),lc(t)){const l=gn(t,e,!0);return n&&Vr(l,n),Zn>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag=-2,l}if(Wf(t)&&(t=t.__vccOpts),e){e=Rf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=Tt(l)),re(a)&&(Lr(a)&&!D(a)&&(a=Ne({},a)),e.style=Ar(a))}const o=he(t)?1:rc(t)?128:Fh(t)?64:re(t)?4:M(t)?2:0;return Ae(t,e,n,s,i,o,r,!0)}function Rf(t){return t?Lr(t)||qa(t)?Ne({},t):t:null}function gn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Pf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ac(c),ref:e&&e.ref?n&&r?D(r)?r.concat(xs(e)):[r,xs(e)]:xs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gn(t.ssContent),ssFallback:t.ssFallback&&gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Hr(u,a.clone(u)),u}function Af(t=" ",e=0){return Ke(fi,null,t,e)}function $r(t="",e=!1){return e?(ge(),xf(zt,null,t)):Ke(zt,null,t)}function tt(t){return t==null||typeof t=="boolean"?Ke(zt):D(t)?Ke(Le,null,t.slice()):lc(t)?yt(t):Ke(fi,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gn(t)}function Vr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Vr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!qa(e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Af(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Tt([e.class,s.class]));else if(i==="style")e.style=Ar([e.style,s.style]);else if(ni(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){st(t,e,7,[n,s])}const Of=ja();let Df=0;function Mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Of,r={uid:Df++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ya(s,i),emitsOptions:ic(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bf.bind(null,r),t.ce&&t.ce(r),r}let Se=null,Ls,nr;{const t=ri(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ls=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),nr=e("__VUE_SSR_SETTERS__",n=>es=n)}const fs=t=>{const e=Se;return Ls(t),t.scope.on(),()=>{t.scope.off(),Ls(e)}},Yo=()=>{Se&&Se.scope.off(),Ls(null)};function cc(t){return t.vnode.shapeFlag&4}let es=!1;function kf(t,e=!1,n=!1){e&&nr(e);const{props:s,children:i}=t.vnode,r=cc(t);of(t,s,r,e),uf(t,i,n);const o=r?Ff(t,e):void 0;return e&&nr(!1),o}function Ff(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Yh);const{setup:s}=n;if(s){Pt();const i=t.setupContext=s.length>1?Bf(t):null,r=fs(t),o=hs(s,t,0,[t.props,i]),l=ia(o);if(Ot(),r(),(l||t.sp)&&!Hn(t)&&La(t),l){if(o.then(Yo,Yo),e)return o.then(a=>{Qo(t,a)}).catch(a=>{ci(a,t,0)});t.asyncDep=o}else Qo(t,o)}else uc(t)}function Qo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Aa(e)),uc(t)}function uc(t,e,n){const s=t.type;t.render||(t.render=s.render||nt);{const i=fs(t);Pt();try{Qh(t)}finally{Ot(),i()}}}const Lf={get(t,e){return Ce(t,"get",""),t[e]}};function Bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lf),slots:t.slots,emit:t.emit,expose:e}}function jr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Aa(Br(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Un)return Un[n](t)},has(e,n){return n in e||n in Un}})):t.proxy}function Wf(t){return M(t)&&"__vccOpts"in t}const hc=(t,e)=>Nh(t,e,es),Hf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sr;const Jo=typeof window<"u"&&window.trustedTypes;if(Jo)try{sr=Jo.createPolicy("vue",{createHTML:t=>t})}catch{}const fc=sr?t=>sr.createHTML(t):t=>t,Uf="http://www.w3.org/2000/svg",$f="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Xo=lt&&lt.createElement("template"),Vf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?lt.createElementNS(Uf,t):e==="mathml"?lt.createElementNS($f,t):n?lt.createElement(t,{is:n}):lt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>lt.createTextNode(t),createComment:t=>lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Xo.innerHTML=fc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Xo.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jf=Symbol("_vtc");function Gf(t,e,n){const s=t[jf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zo=Symbol("_vod"),Kf=Symbol("_vsh"),qf=Symbol(""),zf=/(^|;)\s*display\s*:/;function Yf(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ns(s,l,"")}else for(const o in e)n[o]==null&&Ns(s,o,"");for(const o in n)o==="display"&&(r=!0),Ns(s,o,n[o])}else if(i){if(e!==n){const o=s[qf];o&&(n+=";"+o),s.cssText=n,r=zf.test(n)}}else e&&t.removeAttribute("style");Zo in t&&(t[Zo]=r?s.display:"",t[Kf]&&(s.display="none"))}const el=/\s*!important$/;function Ns(t,e,n){if(D(n))n.forEach(s=>Ns(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qf(t,e);el.test(n)?t.setProperty(At(s),n.replace(el,""),"important"):t[s]=n}}const tl=["Webkit","Moz","ms"],Mi={};function Qf(t,e){const n=Mi[e];if(n)return n;let s=It(e);if(s!=="filter"&&s in t)return Mi[e]=s;s=la(s);for(let i=0;i<tl.length;i++){const r=tl[i]+s;if(r in t)return Mi[e]=r}return e}const nl="http://www.w3.org/1999/xlink";function sl(t,e,n,s,i,r=Zu(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nl,e.slice(6,e.length)):t.setAttributeNS(nl,e,n):n==null||r&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Rt(n)?String(n):n)}function il(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ca(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Jf(t,e,n,s){t.addEventListener(e,n,s)}function Xf(t,e,n,s){t.removeEventListener(e,n,s)}const rl=Symbol("_vei");function Zf(t,e,n,s,i=null){const r=t[rl]||(t[rl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=ed(e);if(s){const c=r[e]=sd(s,i);Jf(t,l,c,a)}else o&&(Xf(t,l,o,a),r[e]=void 0)}}const ol=/(?:Once|Passive|Capture)$/;function ed(t){let e;if(ol.test(t)){e={};let s;for(;s=t.match(ol);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):At(t.slice(2)),e]}let ki=0;const td=Promise.resolve(),nd=()=>ki||(td.then(()=>ki=0),ki=Date.now());function sd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(id(s,n.value),e,5,[s])};return n.value=t,n.attached=nd(),n}function id(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Gf(t,s,o):e==="style"?Yf(t,n,s):ni(e)?xr(e)||Zf(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):od(t,e,s,o))?(il(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?il(t,It(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sl(t,e,s,o))};function od(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ll(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ll(e)&&he(n)?!1:e in t}const ld={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ad=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=At(i.key);if(e.some(o=>o===r||ld[o]===r))return t(i)})},cd=Ne({patchProp:rd},Vf);let al;function ud(){return al||(al=ff(cd))}const hd=(...t)=>{const e=ud().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=dd(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,fd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function fd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function dd(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let dc;const di=t=>dc=t,pc=Symbol();function ir(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jn||(jn={}));function pd(){const t=da(!0),e=t.run(()=>ai({}));let n=[],s=[];const i=Br({install(r){di(i),i._a=r,r.provide(pc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const _c=()=>{};function cl(t,e,n,s=_c){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&pa()&&eh(i),i}function nn(t,...e){t.slice().forEach(n=>{n(...e)})}const _d=t=>t(),ul=Symbol(),Fi=Symbol();function rr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ir(i)&&ir(s)&&t.hasOwnProperty(n)&&!ce(s)&&!Ct(s)?t[n]=rr(i,s):t[n]=s}return t}const gd=Symbol();function md(t){return!ir(t)||!t.hasOwnProperty(gd)}const{assign:gt}=Object;function yd(t){return!!(ce(t)&&t.effect)}function vd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Sh(n.state.value[t]);return gt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Br(hc(()=>{di(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=gc(t,c,e,n,s,!0),a}function gc(t,e,n={},s,i,r){let o;const l=gt({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const C=s.state.value[t];!r&&!C&&(s.state.value[t]={}),ai({});let x;function B(U){let V;c=u=!1,typeof U=="function"?(U(s.state.value[t]),V={type:jn.patchFunction,storeId:t,events:_}):(rr(s.state.value[t],U),V={type:jn.patchObject,payload:U,storeId:t,events:_});const ue=x=Symbol();Oa().then(()=>{x===ue&&(c=!0)}),u=!0,nn(h,V,s.state.value[t])}const W=r?function(){const{state:V}=n,ue=V?V():{};this.$patch(We=>{gt(We,ue)})}:_c;function z(){o.stop(),h=[],d=[],s._s.delete(t)}const Y=(U,V="")=>{if(ul in U)return U[Fi]=V,U;const ue=function(){di(s);const We=Array.from(arguments),ze=[],_t=[];function Tn(H){ze.push(H)}function ys(H){_t.push(H)}nn(d,{args:We,name:ue[Fi],store:K,after:Tn,onError:ys});let ae;try{ae=U.apply(this&&this.$id===t?this:K,We)}catch(H){throw nn(_t,H),H}return ae instanceof Promise?ae.then(H=>(nn(ze,H),H)).catch(H=>(nn(_t,H),Promise.reject(H))):(nn(ze,ae),ae)};return ue[ul]=!0,ue[Fi]=V,ue},R={_p:s,$id:t,$onAction:cl.bind(null,d),$patch:B,$reset:W,$subscribe(U,V={}){const ue=cl(h,U,V.detached,()=>We()),We=o.run(()=>Ts(()=>s.state.value[t],ze=>{(V.flush==="sync"?u:c)&&U({storeId:t,type:jn.direct,events:_},ze)},gt({},a,V)));return ue},$dispose:z},K=li(R);s._s.set(t,K);const be=(s._a&&s._a.runWithContext||_d)(()=>s._e.run(()=>(o=da()).run(()=>e({action:Y}))));for(const U in be){const V=be[U];if(ce(V)&&!yd(V)||Ct(V))r||(C&&md(V)&&(ce(V)?V.value=C[U]:rr(V,C[U])),s.state.value[t][U]=V);else if(typeof V=="function"){const ue=Y(V,U);be[U]=ue,l.actions[U]=V}}return gt(K,be),gt(j(K),be),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:U=>{B(V=>{gt(V,U)})}}),s._p.forEach(U=>{gt(K,o.run(()=>U({store:K,app:s._a,pinia:s,options:l})))}),C&&r&&n.hydrate&&n.hydrate(K.$state,C),c=!0,u=!0,K}/*! #__NO_SIDE_EFFECTS__ */function bd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=rf();return o=o||(a?$n(pc,null):null),o&&di(o),o=dc,o._s.has(t)||(i?gc(t,e,s,o):vd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Cd=()=>{};var hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+mc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ed=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new wd;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const C=c<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vc=function(t){const e=yc(t);return Gr.encodeByteArray(e,!0)},Bs=function(t){return vc(t).replace(/\./g,"")},or=function(t){try{return Gr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){return bc(void 0,t)}function bc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Id(n)||(t[n]=bc(t[n],e[n]));return t}function Id(t){return t!=="__proto__"}/**
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
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xd=()=>Td().__FIREBASE_DEFAULTS__,Nd=()=>{if(typeof process>"u"||typeof hl>"u")return;const t=hl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&or(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return Cd()||xd()||Nd()||Rd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ad=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pd=t=>{const e=Ad(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ec=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Od(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bs(JSON.stringify(n)),Bs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dd())}function Md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){return mc.NODE_ADMIN===!0}function Fd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ld(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="FirebaseError";class ds extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Bd,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sc.prototype.create)}}class Sc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ds(i,l,s)}}function Wd(t,e){return t.replace(Hd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Hd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ts(or(r[0])||""),n=ts(or(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ud=function(t){const e=Ic(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$d=function(t){const e=Ic(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ws(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(dl(r)&&dl(o)){if(!Hs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function dl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Kr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function gi(t){return t&&t._delegate?t._delegate:t}class ns{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class Kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zd(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qd(t){return t===Ut?void 0:t}function zd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Qd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Jd=ne.INFO,Xd={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Zd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Xd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=Jd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const ep=(t,e)=>e.some(n=>t instanceof n);let pl,_l;function tp(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function np(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xc=new WeakMap,lr=new WeakMap,Nc=new WeakMap,Li=new WeakMap,qr=new WeakMap;function sp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xc.set(n,t)}).catch(()=>{}),qr.set(e,t),e}function ip(t){if(lr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});lr.set(t,e)}let ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rp(t){ar=t(ar)}function op(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bi(this),e,...n);return Nc.set(s,e.sort?e.sort():[e]),Et(s)}:np().includes(t)?function(...e){return t.apply(Bi(this),e),Et(xc.get(this))}:function(...e){return Et(t.apply(Bi(this),e))}}function lp(t){return typeof t=="function"?op(t):(t instanceof IDBTransaction&&ip(t),ep(t,tp())?new Proxy(t,ar):t)}function Et(t){if(t instanceof IDBRequest)return sp(t);if(Li.has(t))return Li.get(t);const e=lp(t);return e!==t&&(Li.set(t,e),qr.set(e,t)),e}const Bi=t=>qr.get(t);function ap(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Et(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Et(o.result),a.oldVersion,a.newVersion,Et(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const cp=["get","getKey","getAll","getAllKeys","count"],up=["put","add","delete","clear"],Wi=new Map;function gl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wi.get(e))return Wi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=up.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Wi.set(e,r),r}rp(t=>({...t,get:(e,n,s)=>gl(e,n)||t.get(e,n,s),has:(e,n)=>!!gl(e,n)||t.has(e,n)}));/**
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
 */class hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cr="@firebase/app",ml="0.11.2";/**
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
 */const ht=new Tc("@firebase/app"),dp="@firebase/app-compat",pp="@firebase/analytics-compat",_p="@firebase/analytics",gp="@firebase/app-check-compat",mp="@firebase/app-check",yp="@firebase/auth",vp="@firebase/auth-compat",bp="@firebase/database",Cp="@firebase/data-connect",Ep="@firebase/database-compat",wp="@firebase/functions",Sp="@firebase/functions-compat",Ip="@firebase/installations",Tp="@firebase/installations-compat",xp="@firebase/messaging",Np="@firebase/messaging-compat",Rp="@firebase/performance",Ap="@firebase/performance-compat",Pp="@firebase/remote-config",Op="@firebase/remote-config-compat",Dp="@firebase/storage",Mp="@firebase/storage-compat",kp="@firebase/firestore",Fp="@firebase/vertexai",Lp="@firebase/firestore-compat",Bp="firebase",Wp="11.4.0";/**
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
 */const ur="[DEFAULT]",Hp={[cr]:"fire-core",[dp]:"fire-core-compat",[_p]:"fire-analytics",[pp]:"fire-analytics-compat",[mp]:"fire-app-check",[gp]:"fire-app-check-compat",[yp]:"fire-auth",[vp]:"fire-auth-compat",[bp]:"fire-rtdb",[Cp]:"fire-data-connect",[Ep]:"fire-rtdb-compat",[wp]:"fire-fn",[Sp]:"fire-fn-compat",[Ip]:"fire-iid",[Tp]:"fire-iid-compat",[xp]:"fire-fcm",[Np]:"fire-fcm-compat",[Rp]:"fire-perf",[Ap]:"fire-perf-compat",[Pp]:"fire-rc",[Op]:"fire-rc-compat",[Dp]:"fire-gcs",[Mp]:"fire-gcs-compat",[kp]:"fire-fst",[Lp]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[Bp]:"fire-js-all"};/**
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
 */const Us=new Map,Up=new Map,hr=new Map;function yl(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(hr.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;hr.set(e,t);for(const n of Us.values())yl(n,t);for(const n of Up.values())yl(n,t);return!0}function $p(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vp(t){return t==null?!1:t.settings!==void 0}/**
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
 */const jp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Sc("app","Firebase",jp);/**
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
 */class Gp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kp=Wp;function Rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ur,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=Ec()),!n)throw wt.create("no-options");const r=Us.get(i);if(r){if(Hs(n,r.options)&&Hs(s,r.config))return r;throw wt.create("duplicate-app",{appName:i})}const o=new Yd(i);for(const a of hr.values())o.addComponent(a);const l=new Gp(n,s,o);return Us.set(i,l),l}function qp(t=ur){const e=Us.get(t);if(!e&&t===ur&&Ec())return Rc();if(!e)throw wt.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let i=(s=Hp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(l.join(" "));return}$s(new ns(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zp="firebase-heartbeat-database",Yp=1,ss="firebase-heartbeat-store";let Hi=null;function Ac(){return Hi||(Hi=ap(zp,Yp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),Hi}async function Qp(t){try{const n=(await Ac()).transaction(ss),s=await n.objectStore(ss).get(Pc(t));return await n.done,s}catch(e){if(e instanceof ds)ht.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function vl(t,e){try{const s=(await Ac()).transaction(ss,"readwrite");await s.objectStore(ss).put(e,Pc(t)),await s.done}catch(n){if(n instanceof ds)ht.warn(n.message);else{const s=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(s.message)}}}function Pc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jp=1024,Xp=30;class Zp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Xp){const o=n_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bl(),{heartbeatsToSend:s,unsentEntries:i}=e_(this._heartbeatsCache.heartbeats),r=Bs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ht.warn(n),""}}}function bl(){return new Date().toISOString().substring(0,10)}function e_(t,e=Jp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Cl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class t_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fd()?Ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cl(t){return Bs(JSON.stringify({version:2,heartbeats:t})).length}function n_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function s_(t){$s(new ns("platform-logger",e=>new hp(e),"PRIVATE")),$s(new ns("heartbeat",e=>new Zp(e),"PRIVATE")),hn(cr,ml,t),hn(cr,ml,"esm2017"),hn("fire-js","")}s_("");var i_="firebase",r_="11.4.0";/**
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
 */hn(i_,r_,"app");var El={};const wl="@firebase/database",Sl="1.0.13";/**
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
 */let Oc="";function o_(t){Oc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new l_(e)}}catch{}return new a_},Vt=Dc("localStorage"),c_=Dc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Tc("@firebase/database"),u_=function(){let t=1;return function(){return t++}}(),Mc=function(t){const e=Gd(t),n=new jd;n.update(e);const s=n.digest();return Gr.encodeByteArray(s)},ps=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ps.apply(null,s):typeof s=="object"?e+=_e(s):e+=s,e+=" "}return e};let Gn=null,Il=!0;const h_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),fn.logLevel=ne.VERBOSE,Gn=fn.log.bind(fn)},me=function(...t){if(Il===!0&&(Il=!1,Gn===null&&c_.get("logging_enabled")===!0&&h_()),Gn){const e=ps.apply(null,t);Gn(e)}},_s=function(t){return function(...e){me(t,...e)}},fr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ps(...t);fn.error(e)},ft=function(...t){const e=`FIREBASE FATAL ERROR: ${ps(...t)}`;throw fn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+ps(...t);fn.warn(e)},f_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},d_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yn="[MIN_NAME]",Yt="[MAX_NAME]",Zt=function(t,e){if(t===e)return 0;if(t===yn||e===Yt)return-1;if(e===yn||t===Yt)return 1;{const n=Tl(t),s=Tl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},p_=function(t,e){return t===e?0:t<e?-1:1},On=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Yr=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=_e(e[s]),n+=":",n+=Yr(t[e[s]]);return n+="}",n},kc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fc=function(t){E(!zr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},__=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},g_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function m_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const y_=new RegExp("^-?(0*)\\d{1,10}$"),v_=-2147483648,b_=2147483647,Tl=function(t){if(y_.test(t)){const e=Number(t);if(e>=v_&&e<=b_)return e}return null},wn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},C_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class E_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Vp(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="5",Lc="v",Bc="s",Wc="r",Hc="f",Uc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$c="ls",Vc="p",dr="ac",jc="websocket",Gc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function S_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===jc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Gc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);S_(t)&&(n.ns=t.namespace);const i=[];return ve(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={},$i={};function Jr(t){const e=t.toString();return Ui[e]||(Ui[e]=new I_),Ui[e]}function T_(t,e){const n=t.toString();return $i[n]||($i[n]=e()),$i[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="start",N_="close",R_="pLPCommand",A_="pRTLPCB",zc="id",Yc="pw",Qc="ser",P_="cb",O_="seg",D_="ts",M_="d",k_="dframe",Jc=1870,Xc=30,F_=Jc-Xc,L_=25e3,B_=3e4;class ln{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=Jr(n),this.urlFn=a=>(this.appCheckToken&&(a[dr]=this.appCheckToken),qc(n,Gc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new x_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(B_)),d_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xl)this.id=l,this.password=a;else if(o===N_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[xl]="t",s[Qc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[P_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Lc]=Qr,this.transportSessionId&&(s[Bc]=this.transportSessionId),this.lastSessionId&&(s[$c]=this.lastSessionId),this.applicationId&&(s[Vc]=this.applicationId),this.appCheckToken&&(s[dr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uc.test(location.hostname)&&(s[Wc]=Hc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ln.forceAllow_=!0}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){return ln.forceAllow_?!0:!ln.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!__()&&!g_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vc(n),i=kc(s,F_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[k_]="t",s[zc]=e,s[Yc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=u_(),window[R_+this.uniqueCallbackIdentifier]=e,window[A_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){me("frame writing exception"),l.stack&&me(l.stack),me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zc]=this.myID,e[Yc]=this.myPW,e[Qc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xc+s.length<=Jc;){const o=this.pendingSegs.shift();s=s+"&"+O_+i+"="+o.seg+"&"+D_+i+"="+o.ts+"&"+M_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(L_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=16384,H_=45e3;let Vs=null;typeof MozWebSocket<"u"?Vs=MozWebSocket:typeof WebSocket<"u"&&(Vs=WebSocket);class $e{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=Jr(n),this.connURL=$e.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Lc]=Qr,typeof location<"u"&&location.hostname&&Uc.test(location.hostname)&&(o[Wc]=Hc),n&&(o[Bc]=n),s&&(o[$c]=s),i&&(o[dr]=i),r&&(o[Vc]=r),qc(e,jc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vt.set("previous_websocket_failure",!0);try{let s;kd(),this.mySock=new Vs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vs!==null&&!$e.forceDisallow_}static previouslyFailed(){return Vt.isInMemoryStorage||Vt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kc(n,W_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(H_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{static get ALL_TRANSPORTS(){return[ln,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of is.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=6e4,$_=5e3,V_=10*1024,j_=100*1024,Vi="t",Nl="d",G_="s",Rl="r",K_="e",Al="o",Pl="a",Ol="n",Dl="p",q_="h";class z_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Kn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>j_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>V_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vi in e){const n=e[Vi];n===Pl?this.upgradeIfSecondaryHealthy_():n===Rl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Al&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=On("t",e),s=On("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ol,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=On("t",e),s=On("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=On(Vi,e);if(Nl in e){const s=e[Nl];if(n===q_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ol){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===G_?this.onConnectionShutdown_(s):n===Rl?this.onReset_(s):n===K_?fr("Server Error: "+s):n===Al?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qr!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Kn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(U_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends eu{static getInstance(){return new js}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=32,kl=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new J("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function Zr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Y_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function oe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof J)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new J(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return Pe(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Q_(t,e){const n=rs(t,0),s=rs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Zt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function eo(t,e){if(xt(t)!==xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function He(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xt(t)>xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class J_{constructor(e,n){this.errorPrefix_=n,this.parts_=rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_i(this.parts_[s]);nu(this)}}function X_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_i(e),nu(t)}function Z_(t){const e=t.parts_.pop();t.byteLength_-=_i(e),t.parts_.length>0&&(t.byteLength_-=1)}function nu(t){if(t.byteLength_>kl)throw new Error(t.errorPrefix_+"has a key path longer than "+kl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ml)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ml+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends eu{static getInstance(){return new to}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=1e3,eg=60*5*1e3,Fl=30*1e3,tg=1.3,ng=3e4,sg="server_kill",Ll=3;class ut extends Zc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ut.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dn,this.maxReconnectDelay_=eg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");to.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&js.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(_e(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new pi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ut.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const s=mn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$d(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ud(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fr("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ng&&(this.reconnectDelay_=Dn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ut.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new z_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(sg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),a())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fl(this.interruptReasons_)&&(this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Yr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new J(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ll&&(this.reconnectDelay_=Fl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ll&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Oc.replace(/\./g,"-")]=1,wc()?e["framework.cordova"]=1:Md()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=js.getInstance().currentlyOnline();return fl(this.interruptReasons_)&&e}}ut.nextPersistentConnectionId_=0;ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new k(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new k(yn,e),i=new k(yn,n);return this.compare(s,i)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class su extends mi{static get __EMPTY_NODE(){return Ss}static set __EMPTY_NODE(e){Ss=e}compare(e,n){return Zt(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return k.MIN}maxPost(){return new k(Yt,Ss)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Ss)}toString(){return".key"}}const dn=new su;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??pe.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class ig{copy(e,n,s,i,r){return this}insert(e,n,s){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new ig;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){return Zt(t.name,e.name)}function no(t,e){return Zt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;function og(t){pr=t}const iu=function(t){return typeof t=="number"?"number:"+Fc(t):"string:"+t},ru=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else E(t===pr||t.isEmpty(),"priority of unexpected type.");E(t===pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;class de{static set __childrenNodeConstructor(e){Bl=e}static get __childrenNodeConstructor(){return Bl}constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ru(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:F(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fc(this.value_):e+=this.value_,this.lazyHash_=Mc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),r=de.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou,lu;function lg(t){ou=t}function ag(t){lu=t}class cg extends mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Zt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return k.MIN}maxPost(){return new k(Yt,new de("[PRIORITY-POST]",lu))}makePost(e,n){const s=ou(e);return new k(n,new de("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=Math.log(2);class hg{constructor(e){const n=r=>parseInt(Math.log(r)/ug,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new pe(d,h.node,pe.BLACK,null,null);{const _=parseInt(u/2,10)+a,C=i(a,_),x=i(_+1,c);return h=t[_],d=n?n(h):h,new pe(d,h.node,pe.BLACK,C,x)}},r=function(a){let c=null,u=null,h=t.length;const d=function(C,x){const B=h-C,W=h;h-=C;const z=i(B+1,W),Y=t[B],R=n?n(Y):Y;_(new pe(R,Y.node,x,null,z))},_=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<a.count;++C){const x=a.nextBitIsOne(),B=Math.pow(2,a.count-(C+1));x?d(B,pe.BLACK):(d(B,pe.BLACK),d(B,pe.RED))}return u},o=new hg(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;const sn={};class ct{static get Default(){return E(sn&&le,"ChildrenNode.ts has not been loaded"),ji=ji||new ct({".priority":sn},{".priority":le}),ji}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){E(e!==dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(k.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Gs(s,e.getCompare()):l=sn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ct(u,c)}addToIndexes(e,n){const s=Ws(this.indexes_,(i,r)=>{const o=mn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===sn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(k.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Gs(l,o.getCompare())}else return sn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new k(e.name,l))),a.insert(e,e.node)}});return new ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ws(this.indexes_,i=>{if(i===sn)return i;{const r=n.get(e.name);return r?i.remove(new k(e.name,r)):i}});return new ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn;class P{static get EMPTY_NODE(){return Mn||(Mn=new P(new Oe(no),null,ct.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ru(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new k(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{E(F(e)!==".priority"||xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iu(this.getPriority().val())+":"),this.forEachChild(le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Mc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new k(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new k(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new k(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===dn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(le),i=n.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fg extends P{constructor(){super(new Oe(no),P.EMPTY_NODE,ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const gs=new fg;Object.defineProperties(k,{MIN:{value:new k(yn,P.EMPTY_NODE)},MAX:{value:new k(Yt,gs)}});su.__EMPTY_NODE=P.EMPTY_NODE;de.__childrenNodeConstructor=P;og(gs);ag(gs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=!0;function ye(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ye(e))}if(!(t instanceof Array)&&dg){const n=[];let s=!1;if(ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new k(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=Gs(n,rg,o=>o.name,no);if(s){const o=Gs(n,le.getCompare());return new P(r,ye(e),new ct({".priority":o},{".priority":le}))}else return new P(r,ye(e),ct.Default)}else{let n=P.EMPTY_NODE;return ve(t,(s,i)=>{if(it(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}lg(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends mi{constructor(e){super(),this.indexPath_=e,E(!L(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Zt(e.name,n.name):r}makePost(e,n){const s=ye(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new k(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,gs);return new k(Yt,e)}toString(){return rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Zt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,n){const s=ye(e);return new k(n,s)}toString(){return".value"}}const gg=new _g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){return{type:"value",snapshotNode:t}}function vn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(os(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vn(n,s)):o.trackChildChange(ls(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{n.hasChild(i)||s.trackChildChange(os(i,r))}),n.isLeafNode()||n.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ls(i,r,o))}else s.trackChildChange(vn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.indexedFilter_=new so(e.getIndex()),this.index_=e.getIndex(),this.startPost_=as.getStartPost_(e),this.endPost_=as.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new k(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(le,(o,l)=>{r.matches(new k(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new as(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new k(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new k(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ls(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(os(n,h));const x=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(vn(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(os(c.name,c.node)),r.trackChildChange(vn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vg(t){return t.loadsAllData()?new so(t.getIndex()):t.hasLimit()?new yg(t):new as(t)}function Wl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===gg?n="$value":t.index_===dn?n="$key":(E(t.index_ instanceof pg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=_e(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+_e(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=_e(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Zc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_s("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ks.getListenId_(e,s),l={};this.listens_[o]=l;const a=Wl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),mn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ks.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wl(e._queryParams),s=e._path.toString(),i=new pi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ts(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return{value:null,children:new Map}}function cu(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,qs());const i=t.children.get(s);e=ie(e),cu(i,e,n)}}function _r(t,e,n){t.value!==null?n(e,t.value):Cg(t,(s,i)=>{const r=new J(e.toString()+"/"+s);_r(i,r,n)})}function Cg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ve(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=10*1e3,wg=30*1e3,Sg=5*60*1e3;class Ig{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Eg(e);const s=Ul+(wg-Ul)*Math.random();Kn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ve(e,(i,r)=>{r>0&&it(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Kn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(je||(je={}));function ro(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=je.ACK_USER_WRITE,this.source=ro()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new zs(G(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new zs(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.source=e,this.path=n,this.type=je.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new cs(this.source,G()):new cs(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=je.OVERWRITE}operationForChild(e){return L(this.path)?new Qt(this.source,G(),this.snap.getImmediateChild(e)):new Qt(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=je.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new Qt(this.source,G(),n.value):new bn(this.source,G(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bn(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mg(o.childName,o.snapshotNode))}),kn(t,i,"child_removed",e,s,n),kn(t,i,"child_added",e,s,n),kn(t,i,"child_moved",r,s,n),kn(t,i,"child_changed",e,s,n),kn(t,i,"value",e,s,n),i}function kn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Rg(t,l,a)),o.forEach(l=>{const a=Ng(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ng(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rg(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const s=new k(e.childName,e.snapshotNode),i=new k(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){return{eventCache:t,serverCache:e}}function qn(t,e,n,s){return yi(new Jt(e,n,s),t.serverCache)}function uu(t,e,n,s){return yi(t.eventCache,new Jt(e,n,s))}function gr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;const Ag=()=>(Gi||(Gi=new Oe(p_)),Gi);class te{static fromObject(e){let n=new te(null);return ve(e,(s,i)=>{n=n.set(new J(s),i)}),n}constructor(e,n=Ag()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(L(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:oe(new J(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new te(null)}}set(e,n){if(L(e))return new te(n,this.children);{const s=F(e),r=(this.children.get(s)||new te(null)).set(ie(e),n),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(L(e))return n;{const s=F(e),r=(this.children.get(s)||new te(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(oe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),oe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),oe(n,i),s):new te(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(oe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new te(null))}}function zn(t,e,n){if(L(e))return new qe(new te(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new qe(t.writeTree_.set(i,r))}else{const i=new te(n),r=t.writeTree_.setTree(e,i);return new qe(r)}}}function mr(t,e,n){let s=t;return ve(n,(i,r)=>{s=zn(s,oe(e,i),r)}),s}function $l(t,e){if(L(e))return qe.empty();{const n=t.writeTree_.setTree(e,new te(null));return new qe(n)}}function yr(t,e){return en(t,e)!=null}function en(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Vl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(s,i)=>{e.push(new k(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new k(s,i.value))}),e}function St(t,e){if(L(e))return t;{const n=en(t,e);return n!=null?new qe(new te(n)):new qe(t.writeTree_.subtree(e))}}function vr(t){return t.writeTree_.isEmpty()}function Cn(t,e){return hu(G(),t.writeTree_,e)}function hu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=hu(oe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(oe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){return _u(e,t)}function Pg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=zn(t.visibleWrites,e,n)),t.lastWriteId=s}function Og(t,e,n,s){E(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=mr(t.visibleWrites,e,n),t.lastWriteId=s}function Dg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Mg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&kg(l,s.path)?i=!1:He(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Fg(t),!0;if(s.snap)t.visibleWrites=$l(t.visibleWrites,s.path);else{const l=s.children;ve(l,a=>{t.visibleWrites=$l(t.visibleWrites,oe(s.path,a))})}return!0}else return!1}function kg(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(oe(t.path,n),e))return!0;return!1}function Fg(t){t.visibleWrites=fu(t.allWrites,Lg,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lg(t){return t.visible}function fu(t,e,n){let s=qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)He(n,o)?(l=Pe(n,o),s=zn(s,l,r.snap)):He(o,n)&&(l=Pe(o,n),s=zn(s,G(),r.snap.getChild(l)));else if(r.children){if(He(n,o))l=Pe(n,o),s=mr(s,l,r.children);else if(He(o,n))if(l=Pe(o,n),L(l))s=mr(s,G(),r.children);else{const a=mn(r.children,F(l));if(a){const c=a.getChild(ie(l));s=zn(s,G(),c)}}}else throw En("WriteRecord should have .snap or .children")}}return s}function du(t,e,n,s,i){if(!s&&!i){const r=en(t.visibleWrites,e);if(r!=null)return r;{const o=St(t.visibleWrites,e);if(vr(o))return n;if(n==null&&!yr(o,G()))return null;{const l=n||P.EMPTY_NODE;return Cn(o,l)}}}else{const r=St(t.visibleWrites,e);if(!i&&vr(r))return n;if(!i&&n==null&&!yr(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},l=fu(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Cn(l,a)}}}function Bg(t,e,n){let s=P.EMPTY_NODE;const i=en(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=St(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=Cn(St(r,new J(o)),l);s=s.updateImmediateChild(o,a)}),Vl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=St(t.visibleWrites,e);return Vl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,n);if(yr(t.visibleWrites,r))return null;{const o=St(t.visibleWrites,r);return vr(o)?i.getChild(n):Cn(o,i.getChild(n))}}function Hg(t,e,n,s){const i=oe(e,n),r=en(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=St(t.visibleWrites,i);return Cn(o,s.getNode().getImmediateChild(n))}else return null}function Ug(t,e){return en(t.visibleWrites,e)}function $g(t,e,n,s,i,r,o){let l;const a=St(t.visibleWrites,e),c=en(a,G());if(c!=null)l=c;else if(n!=null)l=Cn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Vg(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function Ys(t,e,n,s){return du(t.writeTree,t.treePath,e,n,s)}function co(t,e){return Bg(t.writeTree,t.treePath,e)}function jl(t,e,n,s){return Wg(t.writeTree,t.treePath,e,n,s)}function Qs(t,e){return Ug(t.writeTree,oe(t.treePath,e))}function jg(t,e,n,s,i,r){return $g(t.writeTree,t.treePath,e,n,s,i,r)}function uo(t,e,n){return Hg(t.writeTree,t.treePath,e,n)}function pu(t,e){return _u(oe(t.treePath,e),t.writeTree)}function _u(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ls(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,os(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ls(s,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const gu=new Kg;class ho{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xt(this.viewCache_),r=jg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return{filter:t}}function zg(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yg(t,e,n,s,i){const r=new Gg;let o,l;if(n.type===je.OVERWRITE){const c=n;c.source.fromUser?o=br(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Js(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===je.MERGE){const c=n;c.source.fromUser?o=Jg(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Cr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===je.ACK_USER_WRITE){const c=n;c.revert?o=em(t,e,c.path,s,i,r):o=Xg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===je.LISTEN_COMPLETE)o=Zg(t,e,n.path,s,r);else throw En("Unknown operation type: "+n.type);const a=r.getChanges();return Qg(e,o,a),{viewCache:o,changes:a}}function Qg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(au(gr(e)))}}function mu(t,e,n,s,i,r){const o=e.eventCache;if(Qs(s,n)!=null)return e;{let l,a;if(L(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xt(e),u=c instanceof P?c:P.EMPTY_NODE,h=co(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ys(s,Xt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){E(xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=jl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=jl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=uo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return qn(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Js(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&xt(n)>1)return e;const C=ie(n),B=a.getNode().getImmediateChild(_).updateChild(C,s);_===".priority"?c=u.updatePriority(a.getNode(),B):c=u.updateChild(a.getNode(),_,B,C,gu,null)}const h=uu(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new ho(i,h,r);return mu(t,h,n,i,d,l)}function br(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new ho(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=qn(e,c,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=qn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let C;if(L(d))C=s;else{const x=u.getCompleteChild(h);x!=null?Zr(d)===".priority"&&x.getChild(tu(d)).isEmpty()?C=x:C=x.updateChild(d,s):C=P.EMPTY_NODE}if(_.equals(C))a=e;else{const x=t.filter.updateChild(l.getNode(),h,C,d,u,o);a=qn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Gl(t,e){return t.eventCache.isCompleteForChild(e)}function Jg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=oe(n,a);Gl(e,F(u))&&(l=br(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=oe(n,a);Gl(e,F(u))||(l=br(t,l,u,c,i,r,o))}),l}function Kl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Cr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new te(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),C=Kl(t,_,d);a=Js(t,a,new J(h),C,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const C=e.serverCache.getNode().getImmediateChild(h),x=Kl(t,C,d);a=Js(t,a,new J(h),x,i,r,o,l)}}),a}function Xg(t,e,n,s,i,r,o){if(Qs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Js(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new te(null);return a.getNode().forEachChild(dn,(u,h)=>{c=c.set(new J(u),h)}),Cr(t,e,n,c,i,r,l,o)}else return e}else{let c=new te(null);return s.foreach((u,h)=>{const d=oe(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Cr(t,e,n,c,i,r,l,o)}}function Zg(t,e,n,s,i){const r=e.serverCache,o=uu(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return mu(t,o,n,s,gu,i)}function em(t,e,n,s,i,r){let o;if(Qs(s,n)!=null)return e;{const l=new ho(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ys(s,Xt(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=co(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=F(n);let h=uo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ys(s,Xt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qs(s,G())!=null,qn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new so(s.getIndex()),r=vg(s);this.processor_=qg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Jt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=yi(h,u),this.eventGenerator_=new Tg(this.query_)}get query(){return this.query_}}function nm(t){return t.viewCache_.serverCache.getNode()}function sm(t,e){const n=Xt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function ql(t){return t.eventRegistrations_.length===0}function im(t,e){t.eventRegistrations_.push(e)}function zl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Yl(t,e,n,s){e.type===je.MERGE&&e.source.queryId!==null&&(E(Xt(t.viewCache_),"We should always have a full cache before handling merges"),E(gr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Yg(t.processor_,i,e,n,s);return zg(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(r,o)=>{s.push(vn(r,o))}),n.isFullyInitialized()&&s.push(au(n.getNode())),yu(t,s,n.getNode(),e)}function yu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return xg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class om{constructor(){this.views=new Map}}function lm(t){E(!Xs,"__referenceConstructor has already been defined"),Xs=t}function am(){return E(Xs,"Reference.ts has not been loaded"),Xs}function cm(t){return t.views.size===0}function fo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Yl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Yl(o,e,n,s));return r}}function um(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ys(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=co(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=yi(new Jt(l,a,!1),new Jt(s,i,!1));return new tm(e,c)}return o}function hm(t,e,n,s,i,r){const o=um(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),im(o,n),rm(o,n)}function fm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Nt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(zl(c,n,s)),ql(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(zl(a,n,s)),ql(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Nt(t)&&r.push(new(am())(e._repo,e._path)),{removed:r,events:o}}function vu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pn(t,e){let n=null;for(const s of t.views.values())n=n||sm(s,e);return n}function bu(t,e){if(e._queryParams.loadsAllData())return vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Cu(t,e){return bu(t,e)!=null}function Nt(t){return vi(t)!=null}function vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;function dm(t){E(!Zs,"__referenceConstructor has already been defined"),Zs=t}function pm(){return E(Zs,"Reference.ts has not been loaded"),Zs}let _m=1;class Ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=Vg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gm(t,e,n,s,i){return Pg(t.pendingWriteTree_,e,n,s,i),i?Sn(t,new Qt(ro(),e,n)):[]}function mm(t,e,n,s){Og(t.pendingWriteTree_,e,n,s);const i=te.fromObject(n);return Sn(t,new bn(ro(),e,i))}function jt(t,e,n=!1){const s=Dg(t.pendingWriteTree_,e);if(Mg(t.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(G(),!0):ve(s.children,o=>{r=r.set(new J(o),!0)}),Sn(t,new zs(s.path,r,n))}else return[]}function bi(t,e,n){return Sn(t,new Qt(oo(),e,n))}function ym(t,e,n){const s=te.fromObject(n);return Sn(t,new bn(oo(),e,s))}function vm(t,e){return Sn(t,new cs(oo(),e))}function bm(t,e,n){const s=po(t,n);if(s){const i=_o(s),r=i.path,o=i.queryId,l=Pe(r,e),a=new cs(lo(o),l);return go(t,r,a)}else return[]}function Er(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Cu(o,e))){const a=fm(o,e,n,s);cm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Nt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=wm(d);for(let C=0;C<_.length;++C){const x=_[C],B=x.query,W=Iu(t,x);t.listenProvider_.startListening(Yn(B),ei(t,B),W.hashFn,W.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Yn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ci(d));t.listenProvider_.stopListening(Yn(d),_)}))}Sm(t,c)}return l}function Cm(t,e,n,s){const i=po(t,s);if(i!=null){const r=_o(i),o=r.path,l=r.queryId,a=Pe(o,e),c=new Qt(lo(l),a,n);return go(t,o,c)}else return[]}function Em(t,e,n,s){const i=po(t,s);if(i){const r=_o(i),o=r.path,l=r.queryId,a=Pe(o,e),c=te.fromObject(n),u=new bn(lo(l),a,c);return go(t,o,u)}else return[]}function Jl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const C=Pe(d,i);r=r||pn(_,C),o=o||Nt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Nt(l),r=r||pn(l,G())):(l=new om,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,C)=>{const x=pn(C,G());x&&(r=r.updateImmediateChild(_,x))}));const c=Cu(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ci(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Im();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=ao(t.pendingWriteTree_,i);let h=hm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=bu(l,e);h=h.concat(Tm(t,e,d))}return h}function Eu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Pe(o,e),c=pn(l,a);if(c)return c});return du(i,e,r,n,!0)}function Sn(t,e){return wu(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,G()))}function wu(t,e,n,s){if(L(t.path))return Su(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=pn(i,G()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=pu(s,o);r=r.concat(wu(l,a,c,u))}return i&&(r=r.concat(fo(i,t,s,n))),r}}function Su(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=pn(i,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=pu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Su(u,l,a,c)))}),i&&(r=r.concat(fo(i,t,s,n))),r}function Iu(t,e){const n=e.query,s=ei(t,n);return{hashFn:()=>(nm(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?bm(t,n._path,s):vm(t,n._path);{const r=m_(i,n);return Er(t,n,null,r)}}}}function ei(t,e){const n=Ci(e);return t.queryToTagMap.get(n)}function Ci(t){return t._path.toString()+"$"+t._queryIdentifier}function po(t,e){return t.tagToQueryMap.get(e)}function _o(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function go(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return fo(s,n,i,null)}function wm(t){return t.fold((e,n,s)=>{if(n&&Nt(n))return[vi(n)];{let i=[];return n&&(i=vu(n)),ve(s,(r,o)=>{i=i.concat(o)}),i}})}function Yn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pm())(t._repo,t._path):t}function Sm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ci(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Im(){return _m++}function Tm(t,e,n){const s=e._path,i=ei(t,e),r=Iu(t,n),o=t.listenProvider_.startListening(Yn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Nt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&Nt(u))return[vi(u).query];{let d=[];return u&&(d=d.concat(vu(u).map(_=>_.query))),ve(h,(_,C)=>{d=d.concat(C)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Yn(u),ei(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mo(n)}node(){return this.node_}}class yo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new yo(this.syncTree_,n)}node(){return Eu(this.syncTree_,this.path_)}}const xm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Rm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Rm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Tu=function(t,e,n,s){return vo(e,new yo(n,t),s)},Am=function(t,e,n){return vo(t,new mo(e),n)};function vo(t,e,n){const s=t.getPriority().val(),i=Xl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Xl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new de(i))),o.forEachChild(le,(l,a)=>{const c=vo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Co(t,e){let n=e instanceof J?e:new J(e),s=t,i=F(n);for(;i!==null;){const r=mn(s.node.children,i)||{children:{},childCount:0};s=new bo(i,s,r),n=ie(n),i=F(n)}return s}function In(t){return t.node.value}function xu(t,e){t.node.value=e,wr(t)}function Nu(t){return t.node.childCount>0}function Pm(t){return In(t)===void 0&&!Nu(t)}function Ei(t,e){ve(t.node.children,(n,s)=>{e(new bo(n,t,s))})}function Ru(t,e,n,s){n&&e(t),Ei(t,i=>{Ru(i,e,!0)})}function Om(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ms(t){return new J(t.parent===null?t.name:ms(t.parent)+"/"+t.name)}function wr(t){t.parent!==null&&Dm(t.parent,t.name,t)}function Dm(t,e,n){const s=Pm(n),i=it(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,wr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=/[\[\].#$\/\u0000-\u001F\u007F]/,km=/[\[\].#$\u0000-\u001F\u007F]/,Ki=10*1024*1024,Eo=function(t){return typeof t=="string"&&t.length!==0&&!Mm.test(t)},Au=function(t){return typeof t=="string"&&t.length!==0&&!km.test(t)},Fm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Au(t)},Lm=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zr(t)||t&&typeof t=="object"&&it(t,".sv")},wo=function(t,e,n){const s=n instanceof J?new J_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(zr(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>Ki/3&&_i(e)>Ki)throw new Error(t+"contains a string greater than "+Ki+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Eo(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);X_(s,o),wo(t,l,s),Z_(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},Bm=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=rs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Eo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Q_);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&He(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Wm=function(t,e,n,s){const i=Kr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ve(e,(o,l)=>{const a=new J(o);if(wo(i,l,oe(n,a)),Zr(a)===".priority"&&!Lm(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Bm(i,r)},Pu=function(t,e,n,s){if(!Au(n))throw new Error(Kr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pu(t,e,n)},Um=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Eo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fm(n))throw new Error(Kr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function So(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!eo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ou(t,e,n){So(t,n),Du(t,s=>eo(s,e))}function dt(t,e,n){So(t,n),Du(t,s=>He(s,e)||He(e,s))}function Du(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Vm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Vm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gn&&me("event: "+n.toString()),wn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="repo_interrupt",Gm=25;class Km{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $m,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qs(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qm(t,e,n){if(t.stats_=Jr(t.repoInfo_),t.forceRestClient_||C_())t.server_=new Ks(t.repoInfo_,(s,i,r,o)=>{Zl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ea(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ut(t.repoInfo_,e,(s,i,r,o)=>{Zl(t,s,i,r,o)},s=>{ea(t,s)},s=>{Ym(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=T_(t.repoInfo_,()=>new Ig(t.stats_,t.server_)),t.infoData_=new bg,t.infoSyncTree_=new Ql({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=bi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),To(t,"connected",!1),t.serverSyncTree_=new Ql({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function zm(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Io(t){return xm({timestamp:zm(t)})}function Zl(t,e,n,s,i){t.dataUpdateCount++;const r=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ws(n,c=>ye(c));o=Em(t.serverSyncTree_,r,a,i)}else{const a=ye(n);o=Cm(t.serverSyncTree_,r,a,i)}else if(s){const a=Ws(n,c=>ye(c));o=ym(t.serverSyncTree_,r,a)}else{const a=ye(n);o=bi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=us(t,r)),dt(t.eventQueue_,l,o)}function ea(t,e){To(t,"connected",e),e===!1&&Jm(t)}function Ym(t,e){ve(e,(n,s)=>{To(t,n,s)})}function To(t,e,n){const s=new J("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=bi(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function Mu(t){return t.nextWriteId_++}function Qm(t,e,n,s){xo(t,"update",{path:e.toString(),value:n});let i=!0;const r=Io(t),o={};if(ve(n,(l,a)=>{i=!1,o[l]=Tu(oe(e,l),ye(a),t.serverSyncTree_,r)}),i)me("update() called with empty data.  Don't do anything."),ta(t,s,"ok",void 0);else{const l=Mu(t),a=mm(t.serverSyncTree_,e,o,l);So(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||De("update at "+e+" failed: "+c);const d=jt(t.serverSyncTree_,l,!h),_=d.length>0?us(t,e):e;dt(t.eventQueue_,_,d),ta(t,s,c,u)}),ve(n,c=>{const u=Wu(t,oe(e,c));us(t,u)}),dt(t.eventQueue_,e,[])}}function Jm(t){xo(t,"onDisconnectEvents");const e=Io(t),n=qs();_r(t.onDisconnect_,G(),(i,r)=>{const o=Tu(i,r,t.serverSyncTree_,e);cu(n,i,o)});let s=[];_r(n,G(),(i,r)=>{s=s.concat(bi(t.serverSyncTree_,i,r));const o=Wu(t,i);us(t,o)}),t.onDisconnect_=qs(),dt(t.eventQueue_,G(),s)}function Xm(t,e,n){let s;F(e._path)===".info"?s=Jl(t.infoSyncTree_,e,n):s=Jl(t.serverSyncTree_,e,n),Ou(t.eventQueue_,e._path,s)}function Zm(t,e,n){let s;F(e._path)===".info"?s=Er(t.infoSyncTree_,e,n):s=Er(t.serverSyncTree_,e,n),Ou(t.eventQueue_,e._path,s)}function ey(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jm)}function xo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),me(n,...e)}function ta(t,e,n,s){e&&wn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ku(t,e,n){return Eu(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function No(t,e=t.transactionQueueTree_){if(e||wi(t,e),In(e)){const n=Lu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ty(t,ms(e),n)}else Nu(e)&&Ei(e,n=>{No(t,n)})}function ty(t,e,n){const s=n.map(c=>c.currentWriteId),i=ku(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{xo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(jt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wi(t,Co(t.transactionQueueTree_,e)),No(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)wn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}us(t,e)}},o)}function us(t,e){const n=Fu(t,e),s=ms(n),i=Lu(t,n);return ny(t,i,s),s}function ny(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Pe(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Gm)u=!0,h="maxretry",i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ku(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){wo("transaction failed: Data returned ",_,a.path);let C=ye(_);typeof _=="object"&&_!=null&&it(_,".priority")||(C=C.updatePriority(d.getPriority()));const B=a.currentWriteId,W=Io(t),z=Am(C,d,W);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=z,a.currentWriteId=Mu(t),o.splice(o.indexOf(B),1),i=i.concat(gm(t.serverSyncTree_,a.path,z,a.currentWriteId,a.applyLocally)),i=i.concat(jt(t.serverSyncTree_,B,!0))}else u=!0,h="nodata",i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}wi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)wn(s[l]);No(t,t.transactionQueueTree_)}function Fu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&In(s)===void 0;)s=Co(s,n),e=ie(e),n=F(e);return s}function Lu(t,e){const n=[];return Bu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Bu(t,e,n){const s=In(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ei(e,i=>{Bu(t,i,n)})}function wi(t,e){const n=In(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xu(e,n.length>0?n:void 0)}Ei(e,s=>{wi(t,s)})}function Wu(t,e){const n=ms(Fu(t,e)),s=Co(t.transactionQueueTree_,e);return Om(s,i=>{qi(t,i)}),qi(t,s),Ru(s,i=>{qi(t,i)}),n}function qi(t,e){const n=In(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xu(e,void 0):n.length=r+1,dt(t.eventQueue_,ms(e),i);for(let o=0;o<s.length;o++)wn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const na=function(t,e){const n=ry(t),s=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||f_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new J(n.pathString)}},ry=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=sy(t.substring(u,h)));const d=iy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class ly{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ro{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Zr(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=Hl(this._queryParams),n=Yr(e);return n==="{}"?"default":n}get _queryObject(){return Hl(this._queryParams)}isEqual(e){if(e=gi(e),!(e instanceof Ro))return!1;const n=this._repo===e._repo,s=eo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Y_(this._path)}}class Dt extends Ro{constructor(e,n){super(e,n,new io,!1)}get parent(){const e=tu(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ti{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),s=Sr(this.ref,e);return new ti(this._node.getChild(n),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ti(i,Sr(this.ref,s),le)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bt(t,e){return t=gi(t),t._checkNotDeleted("ref"),e!==void 0?Sr(t._root,e):t._root}function Sr(t,e){return t=gi(t),F(t._path)===null?Hm("child","path",e):Pu("child","path",e),new Dt(t._repo,oe(t._path,e))}function rn(t,e){Wm("update",e,t._path);const n=new pi;return Qm(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ao{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new oy("value",this,new ti(e.snapshotNode,new Dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ly(this,e,n):null}matches(e){return e instanceof Ao?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function cy(t,e,n,s,i){const r=new ay(n,void 0),o=new Ao(r);return Xm(t._repo,t,o),()=>Zm(t._repo,t,o)}function uy(t,e,n,s){return cy(t,"value",e)}lm(Dt);dm(Dt);/**
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
 */const hy="FIREBASE_DATABASE_EMULATOR_HOST",Ir={};let fy=!1;function dy(t,e,n,s){t.repoInfo_=new Kc(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function py(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=na(r,i),l=o.repoInfo,a;typeof process<"u"&&El&&(a=El[hy]),a?(r=`http://${a}?ns=${l.namespace}`,o=na(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new w_(t.name,t.options,e);Um("Invalid Firebase Database URL",o),L(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const u=gy(l,t,c,new E_(t,n));return new my(u,t)}function _y(t,e){const n=Ir[e];(!n||n[t.key]!==t)&&ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ey(t),delete n[t.key]}function gy(t,e,n,s){let i=Ir[e.name];i||(i={},Ir[e.name]=i);let r=i[t.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Km(t,fy,n,s),i[t.toURLString()]=r,r}class my{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_y(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function yy(t=qp(),e){const n=$p(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Pd("database");s&&vy(n,...s)}return n}function vy(t,e,n,s={}){t=gi(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Hs(s,r.repoInfo_.emulatorOptions))return;ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Rs(Rs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Od(s.mockUserToken,t.app.options.projectId);o=new Rs(l)}dy(r,i,s,o)}/**
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
 */function by(t){o_(Kp),$s(new ns("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return py(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),hn(wl,Sl,t),hn(wl,Sl,"esm2017")}ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};by();const Cy={apiKey:"AIzaSyCQSY8KQWocxngOAwKz9v8MRv72rsPxDfM",authDomain:"eleven-51a45.firebaseapp.com",databaseURL:"https://eleven-51a45-default-rtdb.firebaseio.com",projectId:"eleven-51a45",storageBucket:"eleven-51a45.firebasestorage.app",messagingSenderId:"174153847388",appId:"1:174153847388:web:153de52b1835d3d8238c99"};Rc(Cy);const Wt=yy(),Po=bd("store",{state:()=>({room:"1",playerName:"",game:{}}),getters:{alice(t){return t.alicePlayed.split(",").slice(0,-1)},bob(t){return t.bobPlayed.split(",").slice(0,-1)},aliceLastPlayed(t){return this.alice.at(-1)},bobLastPlayed(t){return this.bob.at(-1)},activePlayer(t){return t.game.active},alicePlayed(t){return t.game.alice.played},bobPlayed(t){return t.game.bob.played},score(t){return t.game.score},aliceHand(t){return t.game.alice.hand.split(",")},bobHand(t){return t.game.bob.hand.split(",")}},actions:{initGame(){rn(Bt(Wt,"room/"+this.room),{active:"alice",alice:{played:"",hand:"1,2,3,4,5,6,7,8,9,10,11"},bob:{played:"",hand:"1,2,3,4,5,6,7,8,9,10,11"}})},getRoom(t=this.room){uy(Bt(Wt,"room/"+t),e=>{this.game=e.val()})},updatePlayed(t,e,n=this.room){rn(Bt(Wt,"room/"+n+"/"+t),{played:e})},turn(t,e){t=="alice"&&(this.updatePlayed("alice",this.alicePlayed+e+","),rn(Bt(Wt,"room/"+this.room),{active:"bob"})),t=="bob"&&(this.updatePlayed("bob",this.bobPlayed+e+","),rn(Bt(Wt,"room/"+this.room),{active:"alice"}),this.aliceLastPlayed!==this.bobLastPlayed&&(this.aliceLastPlayed>this.bobLastPlayed?rn(Bt(Wt,"room/"+this.room),{score:this.score+1}):rn(Bt(Wt,"room/"+this.room),{score:this.score-1})))}}}),Ey={class:"fcc gap-4 py-8 px-2"},wy={class:"w-20 h-20 bg-white cursor-pointer fcc rounded shadow-lg"},Sy={class:"font-bold"},Iy=["onClick"],Ty={key:0,class:"font-bold"},xy={__name:"AliceDeck",props:{isActive:Boolean,player:String},emits:["turn"],setup(t,{emit:e}){const n=Po(),s=t,i=e;function r(l){if(s.isActive&n.playerName=="alice"){let a=o.value.indexOf(l);o.value.splice(a,1),i("turn",l)}}const o=ai(JSON.parse(JSON.stringify(n.aliceHand)));return(l,a)=>(ge(),we("div",{class:Tt(["flex alice",fe(n).playerName=="alice"?"flex-col":"flex-col-reverse"])},[Ae("div",Ey,[(ge(!0),we(Le,null,ks(fe(n).alice,c=>(ge(),we("div",wy,[Ae("p",Sy,_n(c),1),a[0]||(a[0]=Ae("img",{src:"",alt:""},null,-1))]))),256))]),Ae("div",{class:Tt(["fcc gap-4 py-8 px-2",t.isActive?"active":"inactive"])},[(ge(!0),we(Le,null,ks(o.value,c=>(ge(),we("div",{class:"w-20 h-20 bg-white cursor-pointer fcc rounded shadow-lg",onClick:u=>r(c)},[fe(n).playerName=="alice"?(ge(),we("p",Ty,_n(c),1)):$r("",!0),a[1]||(a[1]=Ae("img",{src:"",alt:""},null,-1))],8,Iy))),256))],2)],2))}},Ny={class:"fcc gap-4 py-8 px-2"},Ry={class:"w-20 h-20 bg-white cursor-pointer fcc rounded shadow-lg"},Ay={class:"font-bold"},Py=["onClick"],Oy={key:0,class:"font-bold"},Dy={__name:"BobDeck",props:{isActive:Boolean,player:String},emits:["turn"],setup(t,{emit:e}){const n=Po(),s=t,i=e;function r(l){if(s.isActive&n.playerName=="bob"){let a=o.value.indexOf(l);o.value.splice(a,1),i("turn",l)}}const o=ai(JSON.parse(JSON.stringify(n.bobHand)));return(l,a)=>(ge(),we("div",{class:Tt(["flex bob",fe(n).playerName=="bob"?"flex-col":"flex-col-reverse"])},[Ae("div",Ny,[(ge(!0),we(Le,null,ks(fe(n).bob,c=>(ge(),we("div",Ry,[Ae("p",Ay,_n(c),1),a[0]||(a[0]=Ae("img",{src:"",alt:""},null,-1))]))),256))]),Ae("div",{class:Tt(["fcc gap-4 py-8 px-2",t.isActive?"active":"inactive"])},[(ge(!0),we(Le,null,ks(o.value,c=>(ge(),we("div",{class:"w-20 h-20 bg-white cursor-pointer fcc rounded shadow-lg",onClick:u=>r(c)},[fe(n).playerName=="bob"?(ge(),we("p",Oy,_n(c),1)):$r("",!0),a[1]||(a[1]=Ae("img",{src:"",alt:""},null,-1))],8,Py))),256))],2)],2))}},My=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ky={class:"h-screen flex"},Fy={class:"grow fcc flex-col"},Ly={class:"score"},By={__name:"App",setup(t){const e=Po();function n(s){e.playerName=s.target.value,s.target.value=="alice"&&e.initGame()}return Ha(()=>{e.getRoom()}),(s,i)=>(ge(),we("div",ky,[fe(e).playerName?(ge(),we("div",{key:1,class:Tt(["flex grow",fe(e).playerName=="alice"?"flex-col-reverse":"flex-col"])},[Ke(xy,{isActive:fe(e).activePlayer=="alice",onTurn:i[0]||(i[0]=r=>fe(e).turn("alice",r))},null,8,["isActive"]),Ae("div",Fy,[Ae("div",Ly,_n(fe(e).playerName=="alice"?fe(e).score:fe(e).score*-1),1),fe(e).playerName=="alice"&fe(e).bob.length==11?(ge(),we("button",{key:0,onClick:i[1]||(i[1]=r=>fe(e).initGame()),class:"rounded bg-purple-400 px-4 py-2 cursor-pointer font-bold text-white shadow-xl"},"Заново")):$r("",!0)]),Ke(Dy,{isActive:fe(e).activePlayer=="bob",onTurn:i[2]||(i[2]=r=>fe(e).turn("bob",r))},null,8,["isActive"])],2)):(ge(),we("input",{key:0,type:"text",onKeyup:ad(n,["enter"]),class:"border rounded block m-auto my-20"},null,32))]))}},Wy=My(By,[["__scopeId","data-v-a8499bf4"]]),Hy=pd();hd(Wy).use(Hy).mount("#app");
