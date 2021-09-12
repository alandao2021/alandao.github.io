function e(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function i(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=T(r)?o(r):i(r);if(s)for(const e in s)t[e]=s[e]}return t}return T(e)||k(e)?e:void 0}const r=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(r).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(T(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const i=a(e[n]);i&&(t+=i+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const l=e=>null==e?"":b(e)||k(e)&&(e.toString===P||!E(e.toString))?JSON.stringify(e,c,2):String(e),c=(e,t)=>t&&t.__v_isRef?c(e,t.value):C(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:I(t)?{[`Set(${t.size})`]:[...t.values()]}:!k(t)||b(t)||R(t)?t:String(t),u={},h=[],d=()=>{},p=()=>!1,f=/^on[^a-z]/,_=e=>f.test(e),m=e=>e.startsWith("onUpdate:"),g=Object.assign,y=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},v=Object.prototype.hasOwnProperty,w=(e,t)=>v.call(e,t),b=Array.isArray,C=e=>"[object Map]"===N(e),I=e=>"[object Set]"===N(e),E=e=>"function"==typeof e,T=e=>"string"==typeof e,S=e=>"symbol"==typeof e,k=e=>null!==e&&"object"==typeof e,x=e=>k(e)&&E(e.then)&&E(e.catch),P=Object.prototype.toString,N=e=>P.call(e),R=e=>"[object Object]"===N(e),A=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,F=D((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),L=/\B([A-Z])/g,q=D((e=>e.replace(L,"-$1").toLowerCase())),j=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),U=D((e=>e?`on${j(e)}`:"")),W=(e,t)=>!Object.is(e,t),B=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},V=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let z;const H=[];class K{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&z&&(this.parent=z,this.index=(z.scopes||(z.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(H.push(this),z=this)}off(){this.active&&(H.pop(),z=H[H.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const G=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Y=e=>(e.w&Z)>0,Q=e=>(e.n&Z)>0,J=new WeakMap;let X=0,Z=1;const ee=[];let te;const ne=Symbol(""),ie=Symbol("");class re{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||z)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!ee.includes(this))try{return ee.push(te=this),ae.push(oe),oe=!0,Z=1<<++X,X<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Z})(this):se(this),this.fn()}finally{X<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];Y(r)&&!Q(r)?r.delete(e):t[n++]=r,r.w&=~Z,r.n&=~Z}t.length=n}})(this),Z=1<<--X,ce(),ee.pop();const e=ee.length;te=e>0?ee[e-1]:void 0}}stop(){this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let oe=!0;const ae=[];function le(){ae.push(oe),oe=!1}function ce(){const e=ae.pop();oe=void 0===e||e}function ue(e,t,n){if(!he())return;let i=J.get(e);i||J.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=G()),de(r)}function he(){return oe&&void 0!==te}function de(e,t){let n=!1;X<=30?Q(e)||(e.n|=Z,n=!Y(e)):n=!e.has(te),n&&(e.add(te),te.deps.push(e))}function pe(e,t,n,i,r,s){const o=J.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=i)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":b(e)?A(n)&&a.push(o.get("length")):(a.push(o.get(ne)),C(e)&&a.push(o.get(ie)));break;case"delete":b(e)||(a.push(o.get(ne)),C(e)&&a.push(o.get(ie)));break;case"set":C(e)&&a.push(o.get(ne))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(G(e))}}function fe(e,t){for(const n of b(e)?e:[...e])(n!==te||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const _e=e("__proto__,__v_isRef,__isVue"),me=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(S)),ge=Ce(),ye=Ce(!1,!0),ve=Ce(!0),we=be();function be(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=at(this);for(let t=0,r=this.length;t<r;t++)ue(n,0,t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(at)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=at(this)[t].apply(this,e);return ce(),n}})),e}function Ce(e=!1,t=!1){return function(n,i,r){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&r===(e?t?Ze:Xe:t?Je:Qe).get(n))return n;const s=b(n);if(!e&&s&&w(we,i))return Reflect.get(we,i,r);const o=Reflect.get(n,i,r);if(S(i)?me.has(i):_e(i))return o;if(e||ue(n,0,i),t)return o;if(dt(o)){return!s||!A(i)?o.value:o}return k(o)?e?nt(o):tt(o):o}}function Ie(e=!1){return function(t,n,i,r){let s=t[n];if(!e&&(i=at(i),s=at(s),!b(t)&&dt(s)&&!dt(i)))return s.value=i,!0;const o=b(t)&&A(n)?Number(n)<t.length:w(t,n),a=Reflect.set(t,n,i,r);return t===at(r)&&(o?W(i,s)&&pe(t,"set",n,i):pe(t,"add",n,i)),a}}const Ee={get:ge,set:Ie(),deleteProperty:function(e,t){const n=w(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&pe(e,"delete",t,void 0),i},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&me.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,b(e)?"length":ne),Reflect.ownKeys(e)}},Te={get:ve,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Se=g({},Ee,{get:ye,set:Ie(!0)}),ke=e=>k(e)?tt(e):e,xe=e=>k(e)?nt(e):e,Pe=e=>e,Ne=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,i=!1){const r=at(e=e.__v_raw),s=at(t);t!==s&&!n&&ue(r,0,t),!n&&ue(r,0,s);const{has:o}=Ne(r),a=i?Pe:n?xe:ke;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Ae(e,t=!1){const n=this.__v_raw,i=at(n),r=at(e);return e!==r&&!t&&ue(i,0,e),!t&&ue(i,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function Oe(e,t=!1){return e=e.__v_raw,!t&&ue(at(e),0,ne),Reflect.get(e,"size",e)}function De(e){e=at(e);const t=at(this);return Ne(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Me(e,t){t=at(t);const n=at(this),{has:i,get:r}=Ne(n);let s=i.call(n,e);s||(e=at(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?W(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Fe(e){const t=at(this),{has:n,get:i}=Ne(t);let r=n.call(t,e);r||(e=at(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&pe(t,"delete",e,void 0),s}function Le(){const e=at(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function qe(e,t){return function(n,i){const r=this,s=r.__v_raw,o=at(s),a=t?Pe:e?xe:ke;return!e&&ue(o,0,ne),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function je(e,t,n){return function(...i){const r=this.__v_raw,s=at(r),o=C(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=r[e](...i),u=n?Pe:t?xe:ke;return!t&&ue(s,0,l?ie:ne),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return"delete"!==e&&this}}function We(){const e={get(e){return Re(this,e)},get size(){return Oe(this)},has:Ae,add:De,set:Me,delete:Fe,clear:Le,forEach:qe(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return Oe(this)},has:Ae,add:De,set:Me,delete:Fe,clear:Le,forEach:qe(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return Oe(this,!0)},has(e){return Ae.call(this,e,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:qe(!0,!1)},i={get(e){return Re(this,e,!0,!0)},get size(){return Oe(this,!0)},has(e){return Ae.call(this,e,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=je(r,!1,!1),n[r]=je(r,!0,!1),t[r]=je(r,!1,!0),i[r]=je(r,!0,!0)})),[e,n,t,i]}const[Be,$e,Ve,ze]=We();function He(e,t){const n=t?e?ze:Ve:e?$e:Be;return(t,i,r)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(w(n,i)&&i in t?n:t,i,r)}const Ke={get:He(!1,!1)},Ge={get:He(!1,!0)},Ye={get:He(!0,!1)},Qe=new WeakMap,Je=new WeakMap,Xe=new WeakMap,Ze=new WeakMap;function et(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function tt(e){return e&&e.__v_isReadonly?e:it(e,!1,Ee,Ke,Qe)}function nt(e){return it(e,!0,Te,Ye,Xe)}function it(e,t,n,i,r){if(!k(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=et(e);if(0===o)return e;const a=new Proxy(e,2===o?i:n);return r.set(e,a),a}function rt(e){return st(e)?rt(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return rt(e)||st(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function lt(e){return $(e,"__v_skip",!0),e}function ct(e){he()&&((e=at(e)).dep||(e.dep=G()),de(e.dep))}function ut(e,t){(e=at(e)).dep&&fe(e.dep)}const ht=e=>k(e)?tt(e):e;function dt(e){return Boolean(e&&!0===e.__v_isRef)}function pt(e){return _t(e,!1)}class ft{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:ht(e)}get value(){return ct(this),this._value}set value(e){e=this._shallow?e:at(e),W(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ht(e),ut(this))}}function _t(e,t){return dt(e)?e:new ft(e,t)}function mt(e){return dt(e)?e.value:e}const gt={get:(e,t,n)=>mt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return dt(r)&&!dt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function yt(e){return rt(e)?e:new Proxy(e,gt)}class vt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new re(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.__v_isReadonly=n}get value(){const e=at(this);return ct(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wt(e,t){let n,i;E(e)?(n=e,i=d):(n=e.get,i=e.set);return new vt(n,i,E(e)||!e.set)}Promise.resolve();function bt(e,t,...n){const i=e.vnode.props||u;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=i[e]||u;s?r=n.map((e=>e.trim())):t&&(r=n.map(V))}let a,l=i[a=U(t)]||i[a=U(F(t))];!l&&s&&(l=i[a=U(q(t))]),l&&Oi(l,e,6,r);const c=i[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Oi(c,e,6,r)}}function Ct(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(void 0!==r)return r;const s=e.emits;let o={},a=!1;if(!E(e)){const i=e=>{const n=Ct(e,t,!0);n&&(a=!0,g(o,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):g(o,s),i.set(e,o),o):(i.set(e,null),null)}function It(e,t){return!(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),w(e,t[0].toLowerCase()+t.slice(1))||w(e,q(t))||w(e,t))}let Et=null,Tt=null;function St(e){const t=Et;return Et=e,Tt=e&&e.type.__scopeId||null,t}function kt(e,t=Et,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Xn(-1);const r=St(t),s=e(...n);return St(r),i._d&&Xn(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function xt(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:_}=e;let g;const y=St(e);try{let e;if(4&n.shapeFlag){const t=r||i;g=pi(u.call(t,t,h,s,p,d,f)),e=l}else{const n=t;0,g=pi(n.length>1?n(s,{attrs:l,slots:a,emit:c}):n(s,null)),e=t.props?l:Pt(l)}let y=g;if(e&&!1!==_){const t=Object.keys(e),{shapeFlag:n}=y;t.length&&7&n&&(o&&t.some(m)&&(e=Nt(e,o)),y=ci(y,e))}0,n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),g=y}catch(v){Gn.length=0,Di(v,e,1),g=li(Hn)}return St(y),g}const Pt=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},Nt=(e,t)=>{const n={};for(const i in e)m(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Rt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!It(n,s))return!0}return!1}function At(e,t){if(Ci){let n=Ci.provides;const i=Ci.parent&&Ci.parent.provides;i===n&&(n=Ci.provides=Object.create(i)),n[e]=t}else;}function Ot(e,t,n=!1){const i=Ci||Et;if(i){const r=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&E(t)?t.call(i.proxy):t}}const Dt=[Function,Array];Boolean,Boolean;function Mt(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Ft(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:_,onAppear:m,onAfterAppear:g,onAppearCancelled:y}=t,v=String(e.key),w=Mt(n,e),b=(e,t)=>{e&&Oi(e,i,9,t)},C={mode:s,persisted:o,beforeEnter(t){let i=a;if(!n.isMounted){if(!r)return;i=_||a}t._leaveCb&&t._leaveCb(!0);const s=w[v];s&&ii(e,s)&&s.el._leaveCb&&s.el._leaveCb(),b(i,[t])},enter(e){let t=l,i=c,s=u;if(!n.isMounted){if(!r)return;t=m||l,i=g||c,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,b(t?s:i,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();b(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),b(n?f:p,[t]),t._leaveCb=void 0,w[r]===e&&delete w[r])};w[r]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>Ft(e,t,n,i)};return C}function Lt(e){if($t(e))return(e=ci(e)).children=null,e}function qt(e){return $t(e)?e.children?e.children[0]:void 0:e}function jt(e,t){6&e.shapeFlag&&e.component?jt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ut(e,t=!1){let n=[],i=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Vn?(128&s.patchFlag&&i++,n=n.concat(Ut(s.children,t))):(t||s.type!==Hn)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Wt(e){return E(e)?{setup:e,name:e.name}:e}const Bt=e=>!!e.type.__asyncLoader,$t=e=>e.type.__isKeepAlive;function Vt(e,t){Ht(e,"a",t)}function zt(e,t){Ht(e,"da",t)}function Ht(e,t,n=Ci){const i=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Gt(t,i,n),n){let e=n.parent;for(;e&&e.parent;)$t(e.parent.vnode)&&Kt(i,t,n,e),e=e.parent}}function Kt(e,t,n,i){const r=Gt(t,e,i,!0);tn((()=>{y(i[t],r)}),n)}function Gt(e,t,n=Ci,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;le(),Ei(n);const r=Oi(t,n,e,i);return Ti(),ce(),r});return i?r.unshift(s):r.push(s),s}}const Yt=e=>(t,n=Ci)=>(!ki||"sp"===e)&&Gt(e,t,n),Qt=Yt("bm"),Jt=Yt("m"),Xt=Yt("bu"),Zt=Yt("u"),en=Yt("bum"),tn=Yt("um"),nn=Yt("sp"),rn=Yt("rtg"),sn=Yt("rtc");function on(e,t=Ci){Gt("ec",e,t)}let an=!0;function ln(e){const t=hn(e),n=e.proxy,i=e.ctx;an=!1,t.beforeCreate&&cn(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:f,updated:_,activated:m,deactivated:g,beforeDestroy:y,beforeUnmount:v,destroyed:w,unmounted:C,render:I,renderTracked:T,renderTriggered:S,errorCaptured:x,serverPrefetch:P,expose:N,inheritAttrs:R,components:A,directives:O,filters:D}=t;if(c&&function(e,t,n=d,i=!1){b(e)&&(e=_n(e));for(const r in e){const n=e[r];let s;s=k(n)?"default"in n?Ot(n.from||r,n.default,!0):Ot(n.from||r):Ot(n),dt(s)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s}}(c,i,null,e.appContext.config.unwrapInjectedRef),o)for(const d in o){const e=o[d];E(e)&&(i[d]=e.bind(n))}if(r){const t=r.call(n,n);k(t)&&(e.data=tt(t))}if(an=!0,s)for(const b in s){const e=s[b],t=wt({get:E(e)?e.bind(n,n):E(e.get)?e.get.bind(n,n):d,set:!E(e)&&E(e.set)?e.set.bind(n):d});Object.defineProperty(i,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)un(a[d],i,n,d);if(l){const e=E(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{At(t,e[t])}))}function M(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&cn(u,e,"c"),M(Qt,h),M(Jt,p),M(Xt,f),M(Zt,_),M(Vt,m),M(zt,g),M(on,x),M(sn,T),M(rn,S),M(en,v),M(tn,C),M(nn,P),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===d&&(e.render=I),null!=R&&(e.inheritAttrs=R),A&&(e.components=A),O&&(e.directives=O)}function cn(e,t,n){Oi(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function un(e,t,n,i){const r=i.includes(".")?or(n,i):()=>n[i];if(T(e)){const n=t[e];E(n)&&ir(r,n)}else if(E(e))ir(r,e.bind(n));else if(k(e))if(b(e))e.forEach((e=>un(e,t,n,i)));else{const i=E(e.handler)?e.handler.bind(n):t[e.handler];E(i)&&ir(r,i,e)}}function hn(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:r.length||n||i?(l={},r.length&&r.forEach((e=>dn(l,e,o,!0))),dn(l,t,o)):l=t,s.set(t,l),l}function dn(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&dn(e,s,n,!0),r&&r.forEach((t=>dn(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=pn[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const pn={data:fn,props:gn,emits:gn,methods:gn,computed:gn,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:gn,directives:gn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=g(Object.create(null),e);for(const i in t)n[i]=mn(e[i],t[i]);return n},provide:fn,inject:function(e,t){return gn(_n(e),_n(t))}};function fn(e,t){return t?e?function(){return g(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function _n(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mn(e,t){return e?[...new Set([].concat(e,t))]:t}function gn(e,t){return e?g(g(Object.create(null),e),t):t}function yn(e,t,n,i=!1){const r={},s={};$(s,ri,1),e.propsDefaults=Object.create(null),vn(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:it(r,!1,Se,Ge,Je):e.type.props?e.props=r:e.props=s,e.attrs=s}function vn(e,t,n,i){const[r,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(O(l))continue;const c=t[l];let u;r&&w(r,u=F(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:It(e.emitsOptions,l)||c!==i[l]&&(i[l]=c,a=!0)}if(s){const t=at(n),i=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=wn(r,t,a,i[a],e,!w(i,a))}}return a}function wn(e,t,n,i,r,s){const o=e[n];if(null!=o){const e=w(o,"default");if(e&&void 0===i){const e=o.default;if(o.type!==Function&&E(e)){const{propsDefaults:s}=r;n in s?i=s[n]:(Ei(r),i=s[n]=e.call(null,t),Ti())}else i=e}o[0]&&(s&&!e?i=!1:!o[1]||""!==i&&i!==q(n)||(i=!0))}return i}function bn(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!E(e)){const i=e=>{l=!0;const[n,i]=bn(e,t,!0);g(o,n),i&&a.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=F(s[h]);Cn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=F(u);if(Cn(e)){const t=s[u],n=o[e]=b(t)||E(t)?{type:t}:t;if(n){const t=Tn(Boolean,n.type),i=Tn(String,n.type);n[0]=t>-1,n[1]=i<0||t<i,(t>-1||w(n,"default"))&&a.push(e)}}}const c=[o,a];return i.set(e,c),c}function Cn(e){return"$"!==e[0]}function In(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function En(e,t){return In(e)===In(t)}function Tn(e,t){return b(t)?t.findIndex((t=>En(t,e))):E(t)&&En(t,e)?0:-1}const Sn=e=>"_"===e[0]||"$stable"===e,kn=e=>b(e)?e.map(pi):[pi(e)],xn=(e,t,n)=>{const i=kt(((...e)=>kn(t(...e))),n);return i._c=!1,i},Pn=(e,t,n)=>{const i=e._ctx;for(const r in e){if(Sn(r))continue;const n=e[r];if(E(n))t[r]=xn(0,n,i);else if(null!=n){const e=kn(n);t[r]=()=>e}}},Nn=(e,t)=>{const n=kn(t);e.slots.default=()=>n};function Rn(e,t){if(null===Et)return e;const n=Et.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[e,s,o,a=u]=t[r];E(e)&&(e={mounted:e,updated:e}),e.deep&&ar(s),i.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function An(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(le(),Oi(l,n,8,[e.el,a,e,t]),ce())}}function On(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dn=0;function Mn(e,t){return function(n,i=null){null==i||k(i)||(i=null);const r=On(),s=new Set;let o=!1;const a=r.app={_uid:Dn++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:cr,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&E(e.install)?(s.add(e),e.install(a,...t)):E(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),a),component:(e,t)=>t?(r.components[e]=t,a):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,a):r.directives[e],mount(s,l,c){if(!o){const u=li(n,i);return u.appContext=r,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,a)};return a}}const Fn=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Ji(e,$i,Bi,Vi)};function Ln(e){return function(e,t){const{insert:n,remove:i,patchProp:r,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:p,nextSibling:f,setScopeId:_=d,cloneNode:m,insertStaticContent:y}=e,v=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ii(e,t)&&(i=te(e),Q(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case zn:b(e,t,n,i);break;case Hn:C(e,t,n,i);break;case Kn:null==e&&I(t,n,i,o);break;case Vn:M(e,t,n,i,r,s,o,a,l);break;default:1&h?S(e,t,n,i,r,s,o,a,l):6&h?L(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,ie)}null!=u&&r&&qn(u,e&&e.ref,s,t||e,!t)},b=(e,t,i,r)=>{if(null==e)n(t.el=o(t.children),i,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},C=(e,t,i,r)=>{null==e?n(t.el=a(t.children||""),i,r):t.el=e.el},I=(e,t,n,i)=>{[e.el,e.anchor]=y(e.children,t,n,i)},E=({el:e,anchor:t},i,r)=>{let s;for(;e&&e!==t;)s=f(e),n(e,i,r),e=s;n(t,i,r)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},S=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?k(t,n,i,r,s,o,a,l):R(e,t,r,s,o,a,l)},k=(e,t,i,o,a,l,u,h)=>{let d,p;const{type:f,props:_,shapeFlag:g,transition:y,patchFlag:v,dirs:w}=e;if(e.el&&void 0!==m&&-1===v)d=e.el=m(e.el);else{if(d=e.el=s(e.type,l,_&&_.is,_),8&g?c(d,e.children):16&g&&N(e.children,d,null,o,a,l&&"foreignObject"!==f,u,h),w&&An(e,null,o,"created"),_){for(const t in _)"value"===t||O(t)||r(d,t,null,_[t],l,e.children,o,a,ee);"value"in _&&r(d,"value",null,_.value),(p=_.onVnodeBeforeMount)&&jn(p,o,e)}P(d,e,e.scopeId,u,o)}w&&An(e,null,o,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(d),n(d,t,i),((p=_&&_.onVnodeMounted)||b||w)&&Fn((()=>{p&&jn(p,o,e),b&&y.enter(d),w&&An(e,null,o,"mounted")}),a)},P=(e,t,n,i,r)=>{if(n&&_(e,n),i)for(let s=0;s<i.length;s++)_(e,i[s]);if(r){if(t===r.subTree){const t=r.vnode;P(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},N=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?fi(e[c]):pi(e[c]);v(null,l,t,n,i,r,s,o,a)}},R=(e,t,n,i,s,o,a)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const f=e.props||u,_=t.props||u;let m;(m=_.onVnodeBeforeUpdate)&&jn(m,n,t,e),p&&An(t,e,n,"beforeUpdate");const g=s&&"foreignObject"!==t.type;if(d?A(e.dynamicChildren,d,l,n,i,g,o):a||z(e,t,l,null,n,i,g,o,!1),h>0){if(16&h)D(l,t,f,_,n,i,s);else if(2&h&&f.class!==_.class&&r(l,"class",null,_.class,s),4&h&&r(l,"style",f.style,_.style,s),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=f[a],u=_[a];u===c&&"value"!==a||r(l,a,c,u,s,e.children,n,i,ee)}}1&h&&e.children!==t.children&&c(l,t.children)}else a||null!=d||D(l,t,f,_,n,i,s);((m=_.onVnodeUpdated)||p)&&Fn((()=>{m&&jn(m,n,t,e),p&&An(t,e,n,"updated")}),i)},A=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Vn||!ii(l,c)||70&l.shapeFlag)?p(l.el):n;v(l,c,u,null,i,r,s,o,!0)}},D=(e,t,n,i,s,o,a)=>{if(n!==i){for(const l in i){if(O(l))continue;const c=i[l],u=n[l];c!==u&&"value"!==l&&r(e,l,u,c,a,t.children,s,o,ee)}if(n!==u)for(const l in n)O(l)||l in i||r(e,l,n[l],null,a,t.children,s,o,ee);"value"in i&&r(e,"value",n.value,i.value)}},M=(e,t,i,r,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(n(h,i,r),n(d,i,r),N(t.children,i,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(A(e.dynamicChildren,f,i,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&Un(e,t,!0)):z(e,t,i,d,s,a,l,c,u)},L=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):j(t,n,i,r,s,o,l):U(e,t,l)},j=(e,t,n,i,r,s,o)=>{const a=e.component=function(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||wi,s={uid:bi++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new K(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bn(i,r),emitsOptions:Ct(i,r),emit:null,emitted:null,propsDefaults:u,inheritAttrs:i.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=bt.bind(null,s),e.ce&&e.ce(s);return s}(e,i,r);if($t(e)&&(a.ctx.renderer=ie),function(e,t=!1){ki=t;const{props:n,children:i}=e.vnode,r=Si(e);yn(e,n,r,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=at(t),$(t,"_",n)):Pn(t,e.slots={})}else e.slots={},t&&Nn(e,t);$(e.slots,ri,1)})(e,i);const s=r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,vi));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ue(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;Ei(e),le();const r=Ai(i,e,0,[e.props,n]);if(ce(),Ti(),x(r)){if(r.then(Ti,Ti),t)return r.then((t=>{xi(e,t)})).catch((t=>{Di(t,e,0)}));e.asyncDep=r}else xi(e,r)}else Pi(e)}(e,t):void 0;ki=!1}(a),a.asyncDep){if(r&&r.registerDep(a,W),!e.el){const e=a.subTree=li(Hn);C(null,e,t,n)}}else W(a,e,t,n,r,s,o)},U=(e,t,n)=>{const i=t.component=e.component;if(function(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Rt(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?Rt(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!It(c,n))return!0}}return!1}(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void V(i,t,n);i.next=t,function(e){const t=Li.indexOf(e);t>qi&&Li.splice(t,1)}(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},W=(e,t,n,i,r,s,o)=>{const a=new re((()=>{if(e.isMounted){let t,{next:n,bu:i,u:l,parent:c,vnode:u}=e,h=n;a.allowRecurse=!1,n?(n.el=u.el,V(e,n,o)):n=u,i&&B(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&jn(t,c,n,u),a.allowRecurse=!0;const d=xt(e),f=e.subTree;e.subTree=d,v(f,d,p(f.el),te(f),e,r,s),n.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),l&&Fn(l,r),(t=n.props&&n.props.onVnodeUpdated)&&Fn((()=>jn(t,c,n,u)),r)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Bt(t);if(a.allowRecurse=!1,u&&B(u),!p&&(o=c&&c.onVnodeBeforeMount)&&jn(o,d,t),a.allowRecurse=!0,l&&oe){const n=()=>{e.subTree=xt(e),oe(l,e.subTree,e,r,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=xt(e);v(null,o,n,i,e,r,s),t.el=o.el}if(h&&Fn(h,r),!p&&(o=c&&c.onVnodeMounted)){const e=t;Fn((()=>jn(o,d,e)),r)}256&t.shapeFlag&&e.a&&Fn(e.a,r),e.isMounted=!0,t=n=i=null}}),(()=>Yi(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=at(r),[l]=e.propsOptions;let c=!1;if(!(i||o>0)||16&o){let i;vn(e,t,r,s)&&(c=!0);for(const s in a)t&&(w(t,s)||(i=q(s))!==s&&w(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(r[s]=wn(l,a,s,void 0,e,!0)):delete r[s]);if(s!==a)for(const e in s)t&&w(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let o=n[i];const u=t[o];if(l)if(w(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=F(o);r[t]=wn(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&pe(e,"set","$attrs")}(e,t.props,i,n),((e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=u;if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(g(r,t),n||1!==e||delete r._):(s=!t.$stable,Pn(t,r)),o=t}else t&&(Nn(e,t),o={default:1});if(s)for(const a in r)Sn(a)||a in o||delete r[a]})(e,t.children,n),le(),Xi(void 0,e.update),ce()},z=(e,t,n,i,r,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void G(u,d,n,i,r,s,o,a,l);if(256&p)return void H(u,d,n,i,r,s,o,a,l)}8&f?(16&h&&ee(u,r,s),d!==u&&c(n,d)):16&h?16&f?G(u,d,n,i,r,s,o,a,l):ee(u,r,s,!0):(8&h&&c(n,""),16&f&&N(d,n,i,r,s,o,a,l))},H=(e,t,n,i,r,s,o,a,l)=>{t=t||h;const c=(e=e||h).length,u=t.length,d=Math.min(c,u);let p;for(p=0;p<d;p++){const i=t[p]=l?fi(t[p]):pi(t[p]);v(e[p],i,n,null,r,s,o,a,l)}c>u?ee(e,r,s,!0,!1,d):N(t,n,i,r,s,o,a,l,d)},G=(e,t,n,i,r,s,o,a,l)=>{let c=0;const u=t.length;let d=e.length-1,p=u-1;for(;c<=d&&c<=p;){const i=e[c],u=t[c]=l?fi(t[c]):pi(t[c]);if(!ii(i,u))break;v(i,u,n,null,r,s,o,a,l),c++}for(;c<=d&&c<=p;){const i=e[d],c=t[p]=l?fi(t[p]):pi(t[p]);if(!ii(i,c))break;v(i,c,n,null,r,s,o,a,l),d--,p--}if(c>d){if(c<=p){const e=p+1,h=e<u?t[e].el:i;for(;c<=p;)v(null,t[c]=l?fi(t[c]):pi(t[c]),n,h,r,s,o,a,l),c++}}else if(c>p)for(;c<=d;)Q(e[c],r,s,!0),c++;else{const f=c,_=c,m=new Map;for(c=_;c<=p;c++){const e=t[c]=l?fi(t[c]):pi(t[c]);null!=e.key&&m.set(e.key,c)}let g,y=0;const w=p-_+1;let b=!1,C=0;const I=new Array(w);for(c=0;c<w;c++)I[c]=0;for(c=f;c<=d;c++){const i=e[c];if(y>=w){Q(i,r,s,!0);continue}let u;if(null!=i.key)u=m.get(i.key);else for(g=_;g<=p;g++)if(0===I[g-_]&&ii(i,t[g])){u=g;break}void 0===u?Q(i,r,s,!0):(I[u-_]=c+1,u>=C?C=u:b=!0,v(i,t[u],n,null,r,s,o,a,l),y++)}const E=b?function(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(I):h;for(g=E.length-1,c=w-1;c>=0;c--){const e=_+c,h=t[e],d=e+1<u?t[e+1].el:i;0===I[c]?v(null,h,n,d,r,s,o,a,l):b&&(g<0||c!==E[g]?Y(h,n,d,2):g--)}}},Y=(e,t,i,r,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void Y(e.component.subTree,t,i,r);if(128&u)return void e.suspense.move(t,i,r);if(64&u)return void a.move(e,t,i,ie);if(a===Vn){n(o,t,i);for(let e=0;e<c.length;e++)Y(c[e],t,i,r);return void n(e.anchor,t,i)}if(a===Kn)return void E(e,t,i);if(2!==r&&1&u&&l)if(0===r)l.beforeEnter(o),n(o,t,i),Fn((()=>l.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=l,a=()=>n(o,t,i),c=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,c):c()}else n(o,t,i)},Q=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&qn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Bt(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&jn(_,t,e),6&u)Z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&An(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,ie,i):c&&(s!==Vn||h>0&&64&h)?ee(c,t,n,!1,!0):(s===Vn&&384&h||!r&&16&u)&&ee(l,t,n),i&&J(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&Fn((()=>{_&&jn(_,t,e),p&&An(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Vn)return void X(n,r);if(t===Kn)return void T(e);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:i}=s,r=()=>t(n,o);i?i(e.el,o,r):r()}else o()},X=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},Z=(e,t,n)=>{const{bum:i,scope:r,update:s,subTree:o,um:a}=e;i&&B(i),r.stop(),s&&(s.active=!1,Q(o,e,t,n)),a&&Fn(a,t),Fn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)Q(e[o],t,n,i,r)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Zi(),t._vnode=e},ie={p:v,um:Q,m:Y,r:J,mt:j,mc:N,pc:z,pbc:A,n:te,o:e};let se,oe;t&&([se,oe]=t(ie));return{render:ne,hydrate:se,createApp:Mn(ne,se)}}(e)}function qn(e,t,n,i,r=!1){if(b(e))return void e.forEach(((e,s)=>qn(e,t&&(b(t)?t[s]:t),n,i,r)));if(Bt(i)&&!r)return;const s=4&i.shapeFlag?Ni(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,c=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=c&&c!==l&&(T(c)?(h[c]=null,w(d,c)&&(d[c]=null)):dt(c)&&(c.value=null)),T(l)){const e=()=>{h[l]=o,w(d,l)&&(d[l]=o)};o?(e.id=-1,Fn(e,n)):e()}else if(dt(l)){const e=()=>{l.value=o};o?(e.id=-1,Fn(e,n)):e()}else E(l)&&Ai(l,a,12,[o,h])}function jn(e,t,n,i=null){Oi(e,t,7,[n,i])}function Un(e,t,n=!1){const i=e.children,r=t.children;if(b(i)&&b(r))for(let s=0;s<i.length;s++){const e=i[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=fi(r[s]),t.el=e.el),n||Un(e,t))}}function Wn(e,t){return function(e,t,n=!0,i=!1){const r=Et||Ci;if(r){const n=r.type;if("components"===e){const e=Ri(n);if(e&&(e===t||e===F(t)||e===j(F(t))))return n}const s=$n(r[e]||n[e],t)||$n(r.appContext[e],t);return!s&&i?n:s}}("components",e,!0,t)||e}const Bn=Symbol();function $n(e,t){return e&&(e[t]||e[F(t)]||e[j(F(t))])}const Vn=Symbol(void 0),zn=Symbol(void 0),Hn=Symbol(void 0),Kn=Symbol(void 0),Gn=[];let Yn=null;function Qn(e=!1){Gn.push(Yn=e?null:[])}let Jn=1;function Xn(e){Jn+=e}function Zn(e){return e.dynamicChildren=Jn>0?Yn||h:null,Gn.pop(),Yn=Gn[Gn.length-1]||null,Jn>0&&Yn&&Yn.push(e),e}function ei(e,t,n,i,r,s){return Zn(ai(e,t,n,i,r,s,!0))}function ti(e,t,n,i,r){return Zn(li(e,t,n,i,r,!0))}function ni(e){return!!e&&!0===e.__v_isVNode}function ii(e,t){return e.type===t.type&&e.key===t.key}const ri="__vInternal",si=({key:e})=>null!=e?e:null,oi=({ref:e})=>null!=e?T(e)||dt(e)||E(e)?{i:Et,r:e}:e:null;function ai(e,t=null,n=null,i=0,r=null,s=(e===Vn?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&si(t),ref:t&&oi(t),scopeId:Tt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(_i(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=T(n)?8:16),Jn>0&&!o&&Yn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Yn.push(l),l}const li=function(e,t=null,n=null,r=0,s=null,o=!1){e&&e!==Bn||(e=Hn);if(ni(e)){const i=ci(e,t,!0);return n&&_i(i,n),i}l=e,E(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ot(e)||ri in e?g({},e):e:null}(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=a(e)),k(n)&&(ot(n)&&!b(n)&&(n=g({},n)),t.style=i(n))}const c=T(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:k(e)?4:E(e)?2:0;return ai(e,t,n,r,s,c,o,!0)};function ci(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=a([t.class,r.class]));else if("style"===e)t.style=i([t.style,r.style]);else if(_(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&si(c),ref:t&&t.ref?n&&s?b(s)?s.concat(oi(t)):[s,oi(t)]:oi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ci(e.ssContent),ssFallback:e.ssFallback&&ci(e.ssFallback),el:e.el,anchor:e.anchor}}function ui(e=" ",t=0){return li(zn,null,e,t)}function hi(e,t){const n=li(Kn,null,e);return n.staticCount=t,n}function di(e="",t=!1){return t?(Qn(),ti(Hn,null,e)):li(Hn,null,e)}function pi(e){return null==e||"boolean"==typeof e?li(Hn):b(e)?li(Vn,null,e.slice()):"object"==typeof e?fi(e):li(zn,null,String(e))}function fi(e){return null===e.el||e.memo?e:ci(e)}function _i(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),_i(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||ri in t?3===i&&Et&&(1===Et.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Et}}else E(t)?(t={default:t,_ctx:Et},n=32):(t=String(t),64&i?(n=16,t=[ui(t)]):n=8);e.children=t,e.shapeFlag|=n}function mi(e,t,n,i){let r;const s=n&&n[i];if(b(e)||T(e)){r=new Array(e.length);for(let n=0,i=e.length;n<i;n++)r[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n])}else if(k(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);r=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const o=n[i];r[i]=t(e[o],o,i,s&&s[i])}}else r=[];return n&&(n[i]=r),r}const gi=e=>e?Si(e)?Ni(e)||e.proxy:gi(e.parent):null,yi=g(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gi(e.parent),$root:e=>gi(e.root),$emit:e=>e.emit,$options:e=>hn(e),$forceUpdate:e=>()=>Yi(e.update),$nextTick:e=>Gi.bind(e.proxy),$watch:e=>sr.bind(e)}),vi={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return i[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else{if(i!==u&&w(i,t))return o[t]=0,i[t];if(r!==u&&w(r,t))return o[t]=1,r[t];if((c=e.propsOptions[0])&&w(c,t))return o[t]=2,s[t];if(n!==u&&w(n,t))return o[t]=3,n[t];an&&(o[t]=4)}}const h=yi[t];let d,p;return h?("$attrs"===t&&ue(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&w(n,t)?(o[t]=3,n[t]):(p=l.config.globalProperties,w(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;if(r!==u&&w(r,t))r[t]=n;else if(i!==u&&w(i,t))i[t]=n;else if(w(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&w(e,o)||t!==u&&w(t,o)||(a=s[0])&&w(a,o)||w(i,o)||w(yi,o)||w(r.config.globalProperties,o)}},wi=On();let bi=0;let Ci=null;const Ii=()=>Ci||Et,Ei=e=>{Ci=e,e.scope.on()},Ti=()=>{Ci&&Ci.scope.off(),Ci=null};function Si(e){return 4&e.vnode.shapeFlag}let ki=!1;function xi(e,t,n){E(t)?e.render=t:k(t)&&(e.setupState=yt(t)),Pi(e)}function Pi(e,t,n){const i=e.type;e.render||(e.render=i.render||d),Ei(e),le(),ln(e),ce(),Ti()}function Ni(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yt(lt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in yi?yi[n](e):void 0}))}function Ri(e){return E(e)&&e.displayName||e.name}function Ai(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Di(s,t,n)}return r}function Oi(e,t,n,i){if(E(e)){const r=Ai(e,t,n,i);return r&&x(r)&&r.catch((e=>{Di(e,t,n)})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Oi(e[s],t,n,i));return r}function Di(e,t,n,i=!0){t&&t.vnode;if(t){let i=t.parent;const r=t.proxy,s=n;for(;i;){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void Ai(o,null,10,[e,r,s])}!function(e,t,n,i=!0){console.error(e)}(e,0,0,i)}let Mi=!1,Fi=!1;const Li=[];let qi=0;const ji=[];let Ui=null,Wi=0;const Bi=[];let $i=null,Vi=0;const zi=Promise.resolve();let Hi=null,Ki=null;function Gi(e){const t=Hi||zi;return e?t.then(this?e.bind(this):e):t}function Yi(e){Li.length&&Li.includes(e,Mi&&e.allowRecurse?qi+1:qi)||e===Ki||(null==e.id?Li.push(e):Li.splice(function(e){let t=qi+1,n=Li.length;for(;t<n;){const i=t+n>>>1;er(Li[i])<e?t=i+1:n=i}return t}(e.id),0,e),Qi())}function Qi(){Mi||Fi||(Fi=!0,Hi=zi.then(tr))}function Ji(e,t,n,i){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),Qi()}function Xi(e,t=null){if(ji.length){for(Ki=t,Ui=[...new Set(ji)],ji.length=0,Wi=0;Wi<Ui.length;Wi++)Ui[Wi]();Ui=null,Wi=0,Ki=null,Xi(e,t)}}function Zi(e){if(Bi.length){const e=[...new Set(Bi)];if(Bi.length=0,$i)return void $i.push(...e);for($i=e,$i.sort(((e,t)=>er(e)-er(t))),Vi=0;Vi<$i.length;Vi++)$i[Vi]();$i=null,Vi=0}}const er=e=>null==e.id?1/0:e.id;function tr(e){Fi=!1,Mi=!0,Xi(e),Li.sort(((e,t)=>er(e)-er(t)));try{for(qi=0;qi<Li.length;qi++){const e=Li[qi];e&&!1!==e.active&&Ai(e,null,14)}}finally{qi=0,Li.length=0,Zi(),Mi=!1,Hi=null,(Li.length||ji.length||Bi.length)&&tr(e)}}const nr={};function ir(e,t,n){return rr(e,t,n)}function rr(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=u){const a=Ci;let l,c,h=!1,p=!1;if(dt(e)?(l=()=>e.value,h=!!e._shallow):rt(e)?(l=()=>e,i=!0):b(e)?(p=!0,h=e.some(rt),l=()=>e.map((e=>dt(e)?e.value:rt(e)?ar(e):E(e)?Ai(e,a,2):void 0))):l=E(e)?t?()=>Ai(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),Oi(e,a,3,[f])}:d,t&&i){const e=l;l=()=>ar(e())}let f=e=>{c=v.onStop=()=>{Ai(e,a,4)}},_=p?[]:nr;const m=()=>{if(v.active)if(t){const e=v.run();(i||h||(p?e.some(((e,t)=>W(e,_[t]))):W(e,_)))&&(c&&c(),Oi(t,a,3,[e,_===nr?void 0:_,f]),_=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===r?m:"post"===r?()=>Fn(m,a&&a.suspense):()=>{!a||a.isMounted?function(e){Ji(e,Ui,ji,Wi)}(m):m()};const v=new re(l,g);return t?n?m():_=v.run():"post"===r?Fn(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&y(a.scope.effects,v)}}function sr(e,t,n){const i=this.proxy,r=T(e)?e.includes(".")?or(i,e):()=>i[e]:e.bind(i,i);let s;E(t)?s=t:(s=t.handler,n=t);const o=Ci;Ei(this);const a=rr(r,s.bind(i),n);return o?Ei(o):Ti(),a}function or(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ar(e,t=new Set){if(!k(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),dt(e))ar(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)ar(e[n],t);else if(I(e)||C(e))e.forEach((e=>{ar(e,t)}));else if(R(e))for(const n in e)ar(e[n],t);return e}function lr(e,t,n){const i=arguments.length;return 2===i?k(t)&&!b(t)?ni(t)?li(e,null,[t]):li(e,t):li(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&ni(n)&&(n=[n]),li(e,t,n))}const cr="3.2.11",ur="undefined"!=typeof document?document:null,hr=new Map,dr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?ur.createElementNS("http://www.w3.org/2000/svg",e):ur.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>ur.createTextNode(e),createComment:e=>ur.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ur.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i){const r=n?n.previousSibling:t.lastChild;let s=hr.get(e);if(!s){const t=ur.createElement("template");if(t.innerHTML=i?`<svg>${e}</svg>`:e,s=t.content,i){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}hr.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const pr=/\s*!important$/;function fr(e,t,n){if(b(n))n.forEach((n=>fr(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=function(e,t){const n=mr[t];if(n)return n;let i=F(t);if("filter"!==i&&i in e)return mr[t]=i;i=j(i);for(let r=0;r<_r.length;r++){const n=_r[r]+i;if(n in e)return mr[t]=n}return t}(e,t);pr.test(n)?e.setProperty(q(i),n.replace(pr,""),"important"):e[i]=n}}const _r=["Webkit","Moz","ms"],mr={};const gr="http://www.w3.org/1999/xlink";let yr=Date.now,vr=!1;if("undefined"!=typeof window){yr()>document.createEvent("Event").timeStamp&&(yr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);vr=!!(e&&Number(e[1])<=53)}let wr=0;const br=Promise.resolve(),Cr=()=>{wr=0};function Ir(e,t,n,i){e.addEventListener(t,n,i)}function Er(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=function(e){let t;if(Tr.test(e)){let n;for(t={};n=e.match(Tr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[q(e.slice(2)),t]}(t);if(i){Ir(e,n,s[t]=function(e,t){const n=e=>{const i=e.timeStamp||yr();(vr||i>=n.attached-1)&&Oi(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>wr||(br.then(Cr),wr=yr()))(),n}(i,r),a)}else o&&(!function(e,t,n,i){e.removeEventListener(t,n,i)}(e,n,o,a),s[t]=void 0)}}const Tr=/(?:Once|Passive|Capture)$/;const Sr=/^on[a-z]/;Boolean;const kr=e=>{const t=e.props["onUpdate:modelValue"];return b(t)?e=>B(t,e):t};function xr(e){e.target.composing=!0}function Pr(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Nr={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e._assign=kr(r);const s=i||r.props&&"number"===r.props.type;Ir(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=V(i)),e._assign(i)})),n&&Ir(e,"change",(()=>{e.value=e.value.trim()})),t||(Ir(e,"compositionstart",xr),Ir(e,"compositionend",Pr),Ir(e,"change",Pr))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e._assign=kr(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((r||"number"===e.type)&&V(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Rr={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ar=(e,t)=>n=>{if(!("key"in n))return;const i=q(n.key);return t.some((e=>e===i||Rr[e]===i))?e(n):void 0},Or=g({patchProp:(e,i,r,s,o=!1,a,l,c,u)=>{"class"===i?function(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===i?function(e,t,n){const i=e.style,r=i.display;if(n)if(T(n))t!==n&&(i.cssText=n);else{for(const e in n)fr(i,e,n[e]);if(t&&!T(t))for(const e in t)null==n[e]&&fr(i,e,"")}else e.removeAttribute("style");"_vod"in e&&(i.display=r)}(e,r,s):_(i)?m(i)||Er(e,i,0,s,l):("."===i[0]?(i=i.slice(1),1):"^"===i[0]?(i=i.slice(1),0):function(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&Sr.test(t)&&E(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Sr.test(t)&&T(n))return!1;return t in e}(e,i,s,o))?function(e,t,i,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==i?"":i);if("value"===t&&"PROGRESS"!==e.tagName){e._value=i;const n=null==i?"":i;return e.value!==n&&(e.value=n),void(null==i&&e.removeAttribute(t))}if(""===i||null==i){const r=typeof e[t];if("boolean"===r)return void(e[t]=n(i));if(null==i&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=i}catch(c){}}(e,i,s,a,l,c,u):("true-value"===i?e._trueValue=s:"false-value"===i&&(e._falseValue=s),function(e,i,r,s,o){if(s&&i.startsWith("xlink:"))null==r?e.removeAttributeNS(gr,i.slice(6,i.length)):e.setAttributeNS(gr,i,r);else{const s=t(i);null==r||s&&!n(r)?e.removeAttribute(i):e.setAttribute(i,s?"":r)}}(e,i,s,o))}},dr);let Dr;const Mr=(...e)=>{const t=(Dr||(Dr=Ln(Or))).createApp(...e),{mount:n}=t;return t.mount=e=>{const i=function(e){if(T(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!i)return;const r=t._component;E(r)||r.render||r.template||(r.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};const Fr="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Lr=e=>Fr?Symbol(e):"_vr_"+e,qr=Lr("rvlm"),jr=Lr("rvd"),Ur=Lr("r"),Wr=Lr("rl"),Br=Lr("rvl"),$r="undefined"!=typeof window;const Vr=Object.assign;function zr(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const Hr=()=>{},Kr=/\/$/;function Gr(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),r=e(s)),l>-1&&(i=i||t.slice(0,l),o=t.slice(l,t.length)),i=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Yr(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Qr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Xr(e[n],t[n]))return!1;return!0}function Xr(e,t){return Array.isArray(e)?Zr(e,t):Array.isArray(t)?Zr(t,e):e===t}function Zr(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var es,ts,ns,is;function rs(e){if(!e)if($r){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Kr,"")}(ts=es||(es={})).pop="pop",ts.push="push",(is=ns||(ns={})).back="back",is.forward="forward",is.unknown="";const ss=/^[^#]+#/;function os(e,t){return e.replace(ss,"#")+t}const as=()=>({left:window.pageXOffset,top:window.pageYOffset});function ls(e){let t;if("el"in e){const n=e.el,i="string"==typeof n&&n.startsWith("#"),r="string"==typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function cs(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function hs(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),Yr(n,"")}return Yr(n,e)+i+r}function ds(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?as():null}}function ps(e){const{history:t,location:n}=window,i={value:hs(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:location.protocol+"//"+location.host+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:function(e,n){const o=Vr({},r.value,t.state,{forward:e,scroll:as()});s(o.current,o,!0),s(e,Vr({},ds(i.value,e,null),{position:o.position+1},n),!1),i.value=e},replace:function(e,n){s(e,Vr({},t.state,ds(r.value.back,e,r.value.forward,!0),n,{position:r.value.position}),!0),i.value=e}}}function fs(e){const t=ps(e=rs(e)),n=function(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=hs(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach((e=>{e(n.value,l,{delta:u,type:es.pop,direction:u?u>0?ns.forward:ns.back:ns.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(Vr({},e.state,{scroll:as()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const i=Vr({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:os.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function _s(e){return"string"==typeof e||"symbol"==typeof e}const ms={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gs=Lr("nf");var ys,vs;function ws(e,t){return Vr(new Error,{type:e,[gs]:!0},t)}function bs(e,t){return e instanceof Error&&gs in e&&(null==t||!!(e.type&t))}(vs=ys||(ys={}))[vs.aborted=4]="aborted",vs[vs.cancelled=8]="cancelled",vs[vs.duplicated=16]="duplicated";const Cs={sensitive:!1,strict:!1,start:!0,end:!0},Is=/[.+*?^${}()[\]/\\]/g;function Es(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Ts(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const e=Es(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const Ss={type:0,value:""},ks=/[a-zA-Z0-9_]/;function xs(e,t,n){const i=function(e,t){const n=Vr({},Cs,t),i=[];let r=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let t=0;t<l.length;t++){const i=l[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(Is,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:c,regexp:u}=i;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),r+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");return{re:o,score:i,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Ss]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:ks.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}(e.path),n),r=Vr(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ps(e,t){const n=[],i=new Map;function r(e,n,i){const a=!i,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ns(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=i&&i.record;const c=Os(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Vr({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=xs(t,n,c),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!Rs(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)r(e[t],h,i&&i.children[t])}i=i||h,o(h)}return d?()=>{s(d)}:Hr}function s(e){if(_s(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Ts(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Rs(e)&&i.set(e.record.name,e)}return t=Os({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>r(e))),{addRoute:r,resolve:function(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw ws(1,{location:e});o=r.record.name,a=Vr(function(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw ws(1,{location:e,currentLocation:t});o=r.record.name,a=Vr({},t.params,e.params),s=r.stringify(a)}const l=[];let c=r;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:As(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return i.get(e)}}}function Ns(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"==typeof n?n:n[i];return t}function Rs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function As(e){return e.reduce(((e,t)=>Vr(e,t.meta)),{})}function Os(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const Ds=/#/g,Ms=/&/g,Fs=/\//g,Ls=/=/g,qs=/\?/g,js=/\+/g,Us=/%5B/g,Ws=/%5D/g,Bs=/%5E/g,$s=/%60/g,Vs=/%7B/g,zs=/%7C/g,Hs=/%7D/g,Ks=/%20/g;function Gs(e){return encodeURI(""+e).replace(zs,"|").replace(Us,"[").replace(Ws,"]")}function Ys(e){return Gs(e).replace(js,"%2B").replace(Ks,"+").replace(Ds,"%23").replace(Ms,"%26").replace($s,"`").replace(Vs,"{").replace(Hs,"}").replace(Bs,"^")}function Qs(e){return null==e?"":function(e){return Gs(e).replace(Ds,"%23").replace(qs,"%3F")}(e).replace(Fs,"%2F")}function Js(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Xs(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const e=n[i].replace(js," "),r=e.indexOf("="),s=Js(r<0?e:e.slice(0,r)),o=r<0?null:Js(e.slice(r+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Zs(e){let t="";for(let n in e){const i=e[n];if(n=Ys(n).replace(Ls,"%3D"),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map((e=>e&&Ys(e))):[i&&Ys(i)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function eo(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}function to(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function no(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(ws(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(ws(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function io(e,t,n,i){const r=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&r.push(no(s,n,i,o,e))}else{let s=a();r.push((()=>s.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=r).__esModule||Fr&&"Module"===a[Symbol.toStringTag]?r.default:r;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&no(l,n,i,o,e)()}))))}}var s;return r}function ro(e){const t=Ot(Ur),n=Ot(Wr),i=wt((()=>t.resolve(mt(e.to)))),r=wt((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(Qr.bind(null,r));if(o>-1)return o;const a=oo(e[t-2]);return t>1&&oo(r)===a&&s[s.length-1].path!==a?s.findIndex(Qr.bind(null,e[t-2])):o})),s=wt((()=>r.value>-1&&function(e,t){for(const n in t){const i=t[n],r=e[n];if("string"==typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}(n.params,i.value.params))),o=wt((()=>r.value>-1&&r.value===n.matched.length-1&&Jr(n.params,i.value.params)));return{route:i,href:wt((()=>i.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[mt(e.replace)?"replace":"push"](mt(e.to)).catch(Hr):Promise.resolve()}}}const so=Wt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(e,{slots:t}){const n=tt(ro(e)),{options:i}=Ot(Ur),r=wt((()=>({[ao(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ao(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:lr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}});function oo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ao=(e,t,n)=>null!=e?e:null!=t?t:n;function lo(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const co=Wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Ot(Br),r=wt((()=>e.route||i.value)),s=Ot(jr,0),o=wt((()=>r.value.matched[s]));At(jr,s+1),At(qr,o),At(Br,r);const a=pt();return ir((()=>[a.value,o.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&Qr(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=r.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return lo(n.default,{Component:l,route:i});const u=s.props[e.name],h=u?!0===u?i.params:"function"==typeof u?u(i):u:null,d=lr(l,Vr({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return lo(n.default,{Component:d,route:i})||d}}});function uo(e){const t=Ps(e.routes,e),n=e.parseQuery||Xs,i=e.stringifyQuery||Zs,r=e.history,s=to(),o=to(),a=to(),l=_t(ms,!0);let c=ms;$r&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zr.bind(null,(e=>""+e)),h=zr.bind(null,Qs),d=zr.bind(null,Js);function p(e,s){if(s=Vr({},s||l.value),"string"==typeof e){const i=Gr(n,e,s.path),o=t.resolve({path:i.path},s),a=r.createHref(i.fullPath);return Vr(i,o,{params:d(o.params),hash:Js(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=Vr({},e,{path:Gr(n,e.path,s.path).path});else{const t=Vr({},e.params);for(const e in t)null==t[e]&&delete t[e];o=Vr({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,Vr({},e,{hash:(f=c,Gs(f).replace(Vs,"{").replace(Hs,"}").replace(Bs,"^")),path:a.path}));var f;const _=r.createHref(p);return Vr({fullPath:p,hash:c,query:i===Zs?eo(e.query):e.query||{}},a,{redirectedFrom:void 0,href:_})}function f(e){return"string"==typeof e?Gr(n,e,l.value.path):Vr({},e)}function _(e,t){if(c!==e)return ws(8,{from:t,to:e})}function m(e){return y(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"==typeof n?n(e):n;return"string"==typeof i&&(i=i.includes("?")||i.includes("#")?i=f(i):{path:i},i.params={}),Vr({query:e.query,hash:e.hash,params:e.params},i)}}function y(e,t){const n=c=p(e),r=l.value,s=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return y(Vr(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Qr(t.matched[i],n.matched[r])&&Jr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(d=ws(16,{to:h,from:r}),N(r,r,!0,!1)),(d?Promise.resolve(d):w(h,r)).catch((e=>bs(e)?e:x(e,h,r))).then((e=>{if(e){if(bs(e,2))return y(Vr(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=C(h,r,!0,a,s);return b(h,r,e),e}))}function v(e,t){const n=_(e,t);return n?Promise.reject(n):Promise.resolve()}function w(e,t){let n;const[i,r,a]=function(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>Qr(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>Qr(e,a)))||r.push(a))}return[n,i,r]}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(e,t);n=io(i.reverse(),"beforeRouteLeave",e,t);for(const s of i)s.leaveGuards.forEach((i=>{n.push(no(i,e,t))}));const l=v.bind(null,e,t);return n.push(l),ho(n).then((()=>{n=[];for(const i of s.list())n.push(no(i,e,t));return n.push(l),ho(n)})).then((()=>{n=io(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(no(i,e,t))}));return n.push(l),ho(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(no(r,e,t));else n.push(no(i.beforeEnter,e,t));return n.push(l),ho(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=io(a,"beforeRouteEnter",e,t),n.push(l),ho(n)))).then((()=>{n=[];for(const i of o.list())n.push(no(i,e,t));return n.push(l),ho(n)})).catch((e=>bs(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const i of a.list())i(e,t,n)}function C(e,t,n,i,s){const o=_(e,t);if(o)return o;const a=t===ms,c=$r?history.state:{};n&&(i||a?r.replace(e.fullPath,Vr({scroll:a&&c&&c.scroll},s)):r.push(e.fullPath,s)),l.value=e,N(e,t,n,a),P()}let I;function E(){I=r.listen(((e,t,n)=>{const i=p(e),s=g(i);if(s)return void y(Vr(s,{replace:!0}),i).catch(Hr);c=i;const o=l.value;var a,u;$r&&(a=cs(o.fullPath,n.delta),u=as(),us.set(a,u)),w(i,o).catch((e=>bs(e,12)?e:bs(e,2)?(y(e.to,i).then((e=>{bs(e,20)&&!n.delta&&n.type===es.pop&&r.go(-1,!1)})).catch(Hr),Promise.reject()):(n.delta&&r.go(-n.delta,!1),x(e,i,o)))).then((e=>{(e=e||C(i,o,!1))&&(n.delta?r.go(-n.delta,!1):n.type===es.pop&&bs(e,20)&&r.go(-1,!1)),b(i,o,e)})).catch(Hr)}))}let T,S=to(),k=to();function x(e,t,n){P(e);const i=k.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function P(e){T||(T=!0,E(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset())}function N(t,n,i,r){const{scrollBehavior:s}=e;if(!$r||!s)return Promise.resolve();const o=!i&&function(e){const t=us.get(e);return us.delete(e),t}(cs(t.fullPath,0))||(r||!i)&&history.state&&history.state.scroll||null;return Gi().then((()=>s(t,n,o))).then((e=>e&&ls(e))).catch((e=>x(e,t,n)))}const R=e=>r.go(e);let A;const O=new Set;return{currentRoute:l,addRoute:function(e,n){let i,r;return _s(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:m,replace:function(e){return m(Vr(f(e),{replace:!0}))},go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:function(){return T&&l.value!==ms?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",so),e.component("RouterView",co),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(l)}),$r&&!A&&l.value===ms&&(A=!0,m(r.location).catch((e=>{})));const t={};for(const i in ms)t[i]=wt((()=>l.value[i]));e.provide(Ur,this),e.provide(Wr,tt(t)),e.provide(Br,l);const n=e.unmount;O.add(e),e.unmount=function(){O.delete(e),O.size<1&&(c=ms,I&&I(),l.value=ms,A=!1,T=!1),n()}}}}function ho(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}var po=function(e,t){return(po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function fo(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{l(i.next(e))}catch(t){s(t)}}function a(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))}function _o(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function mo(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function go(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function yo(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vo=!1,wo="${JSCORE_VERSION}",bo=function(e,t){if(!e)throw Co(t)},Co=function(e){return new Error("Firebase Database ("+wo+") INTERNAL ASSERT FAILED: "+e)},Io=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],r=0;r<e.length;r+=3){var s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),i.push(n[u],n[h],n[d],n[p])}return i.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Io(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,i=0;n<e.length;){var r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){var s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){var o=((7&r)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],r=0;r<e.length;){var s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0,a=++r<e.length?n[e.charAt(r)]:64,l=++r<e.length?n[e.charAt(r)]:64;if(++r,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(i.push(c),64!==a){var u=o<<4&240|a>>2;if(i.push(u),64!==l){var h=a<<6&192|l;i.push(h)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},To=function(e){try{return Eo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function So(e){return ko(void 0,e)}function ko(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ko(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xo=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,i){n?t.reject(n):t.resolve(i),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,i))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function No(){return!0===vo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ro=function(e){function t(n,i,r){var s=e.call(this,i)||this;return s.code=n,s.customData=r,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ao.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}po(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Ao=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=t[0]||{},r=this.service+"/"+e,s=this.errors[e],o=s?Oo(s,i):"Error",a=this.serviceName+": "+o+" ("+r+").",l=new Ro(r,a,i);return l},e}();function Oo(e,t){return e.replace(Do,(function(e,n){var i=t[n];return null!=i?String(i):"<"+n+"?>"}))}var Do=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){return JSON.parse(e)}function Fo(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lo=function(e){var t={},n={},i={},r="";try{var s=e.split(".");t=Mo(To(s[0])||""),n=Mo(To(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:i,signature:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function jo(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Uo(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wo(e,t,n){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Bo(e,t){if(e===t)return!0;for(var n=Object.keys(e),i=Object.keys(t),r=0,s=n;r<s.length;r++){var o=s[r];if(!i.includes(o))return!1;var a=e[o],l=t[o];if($o(a)&&$o(l)){if(!Bo(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=i;c<u.length;c++){o=u[c];if(!n.includes(o))return!1}return!0}function $o(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vo=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):i<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);r=(a<<5|a>>>27)+s+h+o+n[i]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++i,++s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++i,++s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var i=0;for(n=0;n<5;n++)for(var r=24;r>=0;r-=8)e[i]=this.chain_[n]>>r&255,++i;return e},e}();function zo(e,t){return e+" failed: "+t+" argument "}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho=function(e){for(var t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function Ko(e,t,n){void 0===t&&(t=1e3),void 0===n&&(n=2);var i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
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
 */function Go(e){return e&&e._delegate?e._delegate:e}var Yo=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Qo=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new xo;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(r){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var i=mo(this.instancesDeferred.entries()),r=i.next();!r.done;r=i.next()){var s=go(r.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(u){}}}catch(h){t={error:h}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return fo(this,void 0,void 0,(function(){var e;return _o(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(yo(yo([],go(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),go(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,r=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var a=mo(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=go(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);var s=this.instances.get(i);return s&&e(s,i),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,r=this.onInitCallbacks.get(t);if(r)try{for(var s=mo(r),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,i=e.options,r=void 0===i?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
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
 */var Jo,Xo,Zo,ea=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Qo(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function ta(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),r=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Zo=Xo||(Xo={}))[Zo.DEBUG=0]="DEBUG",Zo[Zo.VERBOSE=1]="VERBOSE",Zo[Zo.INFO=2]="INFO",Zo[Zo.WARN=3]="WARN",Zo[Zo.ERROR=4]="ERROR",Zo[Zo.SILENT=5]="SILENT";var na={debug:Xo.DEBUG,verbose:Xo.VERBOSE,info:Xo.INFO,warn:Xo.WARN,error:Xo.ERROR,silent:Xo.SILENT},ia=Xo.INFO,ra=((Jo={})[Xo.DEBUG]="log",Jo[Xo.VERBOSE]="log",Jo[Xo.INFO]="info",Jo[Xo.WARN]="warn",Jo[Xo.ERROR]="error",Jo),sa=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var r=(new Date).toISOString(),s=ra[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,ta(["["+r+"]  "+e.name+":"],n))}},oa=function(){function e(e){this.name=e,this._logLevel=ia,this._logHandler=sa,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Xo))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?na[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ta([this,Xo.DEBUG],e)),this._logHandler.apply(this,ta([this,Xo.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ta([this,Xo.VERBOSE],e)),this._logHandler.apply(this,ta([this,Xo.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ta([this,Xo.INFO],e)),this._logHandler.apply(this,ta([this,Xo.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ta([this,Xo.WARN],e)),this._logHandler.apply(this,ta([this,Xo.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ta([this,Xo.ERROR],e)),this._logHandler.apply(this,ta([this,Xo.ERROR],e))},e}();
/**
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
 */
class aa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const la=new oa("@firebase/app"),ca={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ua=new Map,ha=new Map;function da(e,t){try{e.container.addComponent(t)}catch(n){la.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pa(e){const t=e.name;if(ha.has(t))return la.debug(`There were multiple attempts to register component ${t}.`),!1;ha.set(t,e);for(const n of ua.values())da(n,e);return!0}function fa(e,t){return e.container.getProvider(t)}
/**
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
 */const _a=new Ao("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class ma{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Yo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _a.create("app-deleted",{appName:this._name})}}
/**
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
 */function ga(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw _a.create("bad-app-name",{appName:String(i)});const r=ua.get(i);if(r){if(Bo(e,r.options)&&Bo(n,r.config))return r;throw _a.create("duplicate-app",{appName:i})}const s=new ea(i);for(const a of ha.values())s.addComponent(a);const o=new ma(e,n,s);return ua.set(i,o),o}function ya(e="[DEFAULT]"){const t=ua.get(e);if(!t)throw _a.create("no-app",{appName:e});return t}function va(e,t,n){var i;let r=null!==(i=ca[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void la.warn(e.join(" "))}pa(new Yo(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
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
 */var wa;pa(new Yo("platform-logger",(e=>new aa(e)),"PRIVATE")),va("@firebase/app","0.7.0",wa),va("fire-js","");function ba(e){return Array.prototype.slice.call(e)}function Ca(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function Ia(e,t,n){var i,r=new Promise((function(r,s){Ca(i=e[t].apply(e,n)).then(r,s)}));return r.request=i,r}function Ea(e,t,n){var i=Ia(e,t,n);return i.then((function(e){if(e)return new Na(e,i.request)}))}function Ta(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function Sa(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return Ia(this[t],i,arguments)})}))}function ka(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function xa(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return Ea(this[t],i,arguments)})}))}function Pa(e){this._index=e}function Na(e,t){this._cursor=e,this._request=t}function Ra(e){this._store=e}function Aa(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function Oa(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new Aa(n)}function Da(e){this._db=e}
/**
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
 */
va("firebase","9.0.2","app"),Ta(Pa,"_index",["name","keyPath","multiEntry","unique"]),Sa(Pa,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),xa(Pa,"_index",IDBIndex,["openCursor","openKeyCursor"]),Ta(Na,"_cursor",["direction","key","primaryKey","value"]),Sa(Na,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(Na.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),Ca(t._request).then((function(e){if(e)return new Na(e,t._request)}))}))})})),Ra.prototype.createIndex=function(){return new Pa(this._store.createIndex.apply(this._store,arguments))},Ra.prototype.index=function(){return new Pa(this._store.index.apply(this._store,arguments))},Ta(Ra,"_store",["name","keyPath","indexNames","autoIncrement"]),Sa(Ra,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),xa(Ra,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),ka(Ra,"_store",IDBObjectStore,["deleteIndex"]),Aa.prototype.objectStore=function(){return new Ra(this._tx.objectStore.apply(this._tx,arguments))},Ta(Aa,"_tx",["objectStoreNames","mode"]),ka(Aa,"_tx",IDBTransaction,["abort"]),Oa.prototype.createObjectStore=function(){return new Ra(this._db.createObjectStore.apply(this._db,arguments))},Ta(Oa,"_db",["name","version","objectStoreNames"]),ka(Oa,"_db",IDBDatabase,["deleteObjectStore","close"]),Da.prototype.transaction=function(){return new Aa(this._db.transaction.apply(this._db,arguments))},Ta(Da,"_db",["name","version","objectStoreNames"]),ka(Da,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[Ra,Pa].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=ba(arguments),n=t[t.length-1],i=this._store||this._index,r=i[e].apply(i,t.slice(0,-1));r.onsuccess=function(){n(r.result)}})}))})),[Pa,Ra].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})}));const Ma=new Ao("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Fa(e){return e instanceof Ro&&e.code.includes("request-failed")}
/**
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
 */function La({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function qa(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ja(e,t){const n=(await t.json()).error;return Ma.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ua({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Wa(e,{refreshToken:t}){const n=Ua(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
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
 */(t)),n}async function Ba(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
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
 */
function $a(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
const Va=/^[cdef][\w-]{21}$/;function za(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
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
 */(e);return Va.test(t)?t:""}catch(e){return""}}function Ha(e){return`${e.appName}!${e.appId}`}
/**
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
 */const Ka=new Map;function Ga(e,t){const n=Ha(e);Ya(n,t),function(e,t){const n=function(){!Qa&&"BroadcastChannel"in self&&(Qa=new BroadcastChannel("[Firebase] FID Change"),Qa.onmessage=e=>{Ya(e.data.key,e.data.fid)});return Qa}();n&&n.postMessage({key:e,fid:t});0===Ka.size&&Qa&&(Qa.close(),Qa=null)}(n,t)}function Ya(e,t){const n=Ka.get(e);if(n)for(const i of n)i(t)}let Qa=null;
/**
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
 */
const Ja="firebase-installations-store";let Xa=null;function Za(){var e,t,n;return Xa||(e=e=>{switch(e.oldVersion){case 0:e.createObjectStore(Ja)}},t=Ia(indexedDB,"open",["firebase-installations-database",1]),(n=t.request)&&(n.onupgradeneeded=function(t){e&&e(new Oa(n.result,t.oldVersion,n.transaction))}),Xa=t.then((function(e){return new Da(e)}))),Xa}async function el(e,t){const n=Ha(e),i=(await Za()).transaction(Ja,"readwrite"),r=i.objectStore(Ja),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||Ga(e,t.fid),t}async function tl(e){const t=Ha(e),n=(await Za()).transaction(Ja,"readwrite");await n.objectStore(Ja).delete(t),await n.complete}async function nl(e,t){const n=Ha(e),i=(await Za()).transaction(Ja,"readwrite"),r=i.objectStore(Ja),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||Ga(e,o.fid),o}
/**
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
 */async function il(e){let t;const n=await nl(e,(n=>{const i=function(e){return ol(e||{fid:za(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Ma.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(e,t){try{return el(e,await async function(e,{fid:t}){const n=La(e),i=Ua(e),r={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.0"},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await Ba((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:qa(e.authToken)}}throw await ja("Create Installation",o)}(e,t))}catch(n){throw Fa(n)&&409===n.customData.serverCode?await tl(e):await el(e,{fid:t.fid,registrationStatus:0}),n}}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:rl(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function rl(e){let t=await sl(e);for(;1===t.registrationStatus;)await $a(100),t=await sl(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await il(e);return n||t}return t}function sl(e){return nl(e,(e=>{if(!e)throw Ma.create("installation-not-found");return ol(e)}))}function ol(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}async function al({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${La(e)}/${t}/authTokens:generate`}
/**
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
 */(e,n),r=Wa(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:"w:0.5.0"}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Ba((()=>fetch(i,a)));if(l.ok){return qa(await l.json())}throw await ja("Generate Auth Token",l)}async function ll(e,t=!1){let n;const i=await nl(e.appConfig,(i=>{if(!ul(i))throw Ma.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await cl(e.appConfig);for(;1===n.authToken.requestStatus;)await $a(100),n=await cl(e.appConfig);const i=n.authToken;return 0===i.requestStatus?ll(e,t):i}(e,t),i;{if(!navigator.onLine)throw Ma.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await al(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await el(e.appConfig,i),n}catch(n){if(!Fa(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await el(e.appConfig,n)}else await tl(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function cl(e){return nl(e,(e=>{if(!ul(e))throw Ma.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
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
 */}))}function ul(e){return void 0!==e&&2===e.registrationStatus}
/**
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
 */
async function hl(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await il(e);t&&await t}
/**
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
 */(n.appConfig);return(await ll(n,t)).token}function dl(e){return Ma.create("missing-app-config-values",{valueName:e})}
/**
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
 */const pl=e=>{const t=fa(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await il(t.appConfig);return i?i.catch(console.error):ll(t).catch(console.error),n.fid}(t),getToken:e=>hl(t,e)}};pa(new Yo("installations",(e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw dl("App Configuration");if(!e.name)throw dl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw dl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:fa(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),pa(new Yo("installations-internal",pl,"PRIVATE")),va("@firebase/installations","0.5.0");
/**
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
 */
const fl="https://www.googletagmanager.com/gtag/js",_l=new oa("@firebase/analytics");
/**
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
 */
function ml(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function gl(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await ml(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){_l.error(s)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await ml(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(a){_l.error(a)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(a){_l.error(a)}}}
/**
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
 */
const yl=new Ao("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const vl=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function wl(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bl(e,t=vl,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw yl.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw yl.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Il;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Cl({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Cl(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=vl){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(yl.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(a){if(o)return _l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:wl(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw yl.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(a){if(!function(e){if(!(e instanceof Ro&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(a)){if(r.deleteThrottleMetadata(s),o)return _l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const t=503===Number(a.customData.httpStatus)?Ko(n,r.intervalMillis,30):Ko(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return r.setThrottleMetadata(s,l),_l.debug(`Calling attemptFetch again in ${t} millis`),Cl(e,l,i,r)}}class Il{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
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
 */async function El(){if(!("indexedDB"in self)||null==indexedDB)return _l.warn(yl.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise((function(e,t){try{var n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=function(){r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=function(){n=!1},r.onerror=function(){var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}))}catch(e){return _l.warn(yl.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Tl(e,t,n,i,r,s,o){var a;const l=bl(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&_l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>_l.error(e))),t.push(l);const c=El().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fl))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${fl}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
/**
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
 */class Sl{constructor(e){this.app=e}_delete(){return delete kl[this.app.options.appId],Promise.resolve()}}let kl={},xl=[];const Pl={};let Nl,Rl,Al=!1;function Ol(){const e=[];var t;if("object"==typeof(t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==t.id&&e.push("This is a browser extension environment."),navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=yl.create("invalid-analytics-context",{errorInfo:t});_l.warn(n.message)}}function Dl(e,t,n){Ol();const i=e.options.appId;if(!i)throw yl.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw yl.create("no-api-key");_l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=kl[i])throw yl.create("already-exists",{id:i});if(!Al){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}("dataLayer");const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=gl(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(kl,xl,Pl,"dataLayer","gtag");Rl=e,Nl=t,Al=!0}kl[i]=Tl(e,xl,Pl,t,Nl,"dataLayer",n);return new Sl(e)}
/**
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
 */function Ml(e=ya()){const t=fa(e=Go(e),"analytics");return t.isInitialized()?t.getImmediate():function(e,t={}){const n=fa(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(Bo(t,n.getOptions()))return e;throw yl.create("already-initialized")}return n.initialize({options:t})}(e)}function Fl(e,t,n,i){e=Go(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Rl,kl[e.app.options.appId],t,n,i).catch((e=>_l.error(e)))}pa(new Yo("analytics",((e,{options:t})=>Dl(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),pa(new Yo("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>Fl(t,e,n,i)}}catch(t){throw yl.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),va("@firebase/analytics","0.7.0");
/**
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
 */
let Ll="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fo(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Mo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return qo(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ql(t)}}catch(t){}return new jl},Wl=Ul("localStorage"),Bl=Ul("sessionStorage"),$l=new oa("@firebase/database"),Vl=function(){let e=1;return function(){return e++}}(),zl=function(e){const t=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);if(r>=55296&&r<=56319){var s=r-55296;i++,bo(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(s<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new Vo;n.update(t);const i=n.digest();return Eo.encodeByteArray(i)},Hl=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Hl.apply(null,i):t+="object"==typeof i?Fo(i):i,t+=" "}return t};let Kl=null,Gl=!0;const Yl=function(...e){var t,n;if(!0===Gl&&(Gl=!1,null===Kl&&!0===Bl.get("logging_enabled")&&(t=!0,bo(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?($l.logLevel=Xo.VERBOSE,Kl=$l.log.bind($l),n&&Bl.set("logging_enabled",!0)):"function"==typeof t?Kl=t:(Kl=null,Bl.remove("logging_enabled")))),Kl){const t=Hl.apply(null,e);Kl(t)}},Ql=function(e){return function(...t){Yl(e,...t)}},Jl=function(...e){const t="FIREBASE INTERNAL ERROR: "+Hl(...e);$l.error(t)},Xl=function(...e){const t=`FIREBASE FATAL ERROR: ${Hl(...e)}`;throw $l.error(t),new Error(t)},Zl=function(...e){const t="FIREBASE WARNING: "+Hl(...e);$l.warn(t)},ec=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tc="[MIN_NAME]",nc="[MAX_NAME]",ic=function(e,t){if(e===t)return 0;if(e===tc||t===nc)return-1;if(t===tc||e===nc)return 1;{const n=hc(e),i=hc(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},rc=function(e,t){return e===t?0:e<t?-1:1},sc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Fo(t))},oc=function(e){if("object"!=typeof e||null===e)return Fo(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Fo(t[i]),n+=":",n+=oc(e[t[i]]);return n+="}",n},ac=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function lc(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const cc=function(e){bo(!ec(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const uc=new RegExp("^-?(0*)\\d{1,10}$"),hc=function(e){if(uc.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},dc=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Zl("Exception was thrown by user callback.",e),t}),Math.floor(0))}},pc=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class fc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Zl(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Yl("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zl(e)}}class mc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mc.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wl.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wl.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vc(e,t,n){let i;if(bo("string"==typeof t,"typeof type must == string"),bo("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return lc(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.counters_={}}incrementCounter(e,t=1){qo(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return So(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc={},Cc={};function Ic(e){const t=e.toString();return bc[t]||(bc[t]=new wc),bc[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&dc((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ql(e),this.stats_=Ic(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),vc(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ec(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sc(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&gc.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tc.forceAllow_=!0}static forceDisallow(){Tc.forceDisallow_=!0}static isAvailable(){return!!Tc.forceAllow_||!(Tc.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Fo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(i=Io(t),Eo.encodeByteArray(i,!0));var i;const r=ac(n,1840);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Fo(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Sc{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vl(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Sc.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){Yl("frame writing exception"),r.stack&&Yl(r.stack),Yl(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Yl("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Yl("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc=null;"undefined"!=typeof MozWebSocket?kc=MozWebSocket:"undefined"!=typeof WebSocket&&(kc=WebSocket);class xc{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ql(this.connId),this.stats_=Ic(t),this.connURL=xc.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&gc.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),vc(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wl.set("previous_websocket_failure",!0);try{if(No());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new kc(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){xc.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==kc&&!xc.forceDisallow_}static previouslyFailed(){return Wl.isInMemoryStorage||!0===Wl.get("previous_websocket_failure")}markConnectionHealthy(){Wl.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Mo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(bo(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Fo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ac(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xc.responsesRequiredToBeHealthy=2,xc.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tc,xc]}initTransports_(e){const t=xc&&xc.isAvailable();let n=t&&!xc.previouslyFailed();if(e.webSocketOnly&&(t||Zl("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[xc];else{const e=this.transports_=[];for(const t of Pc.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ql("c:"+this.id+":"),this.transportManager_=new Pc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pc((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sc("t",e),n=sc("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sc("t",e),n=sc("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sc("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Jl("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Zl("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),pc((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pc((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wl.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.allowedEvents_=e,this.listeners_={},bo(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){bo(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Ac{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Po()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Oc}getInitialEvent(e){return bo("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Mc(){return new Dc("")}function Fc(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Lc(e){return e.pieces_.length-e.pieceNum_}function qc(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Dc(e.pieces_,t)}function jc(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Uc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Wc(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Dc(t,0)}function Bc(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Dc)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Dc(n,0)}function $c(e){return e.pieceNum_>=e.pieces_.length}function Vc(e,t){const n=Fc(e),i=Fc(t);if(null===n)return t;if(n===i)return Vc(qc(e),qc(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function zc(e,t){if(Lc(e)!==Lc(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Hc(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Lc(e)>Lc(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Kc{constructor(e,t){this.errorPrefix_=t,this.parts_=Uc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ho(this.parts_[n]);Gc(this)}}function Gc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Yc(e))}function Yc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Ac{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Qc}getInitialEvent(e){return bo("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Rc{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Jc.nextPersistentConnectionId_++,this.log_=Ql("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!No())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qc.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Fo(r)),bo(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new xo,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),bo(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),bo(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Jc.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&qo(e,"w")){const n=jo(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Zl(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Lo(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Lo(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),bo(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fo(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Jl("Unrecognized action received from server: "+Fo(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){bo(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Jc.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(e){bo(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Yl("getToken() completed but was canceled"):(Yl("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Nc(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{Zl(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Zl(e),l())}}}interrupt(e){Yl("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yl("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uo(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>oc(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Dc(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Yl("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Yl("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ll.replace(/\./g,"-")]=1,Po()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oc.getInstance().currentlyOnline();return Uo(this.interruptReasons_)&&e}}Jc.nextPersistentConnectionId_=0,Jc.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Xc(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Xc(tc,e),i=new Xc(tc,t);return 0!==this.compare(n,i)}minPost(){return Xc.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;class tu extends Zc{static get __EMPTY_NODE(){return eu}static set __EMPTY_NODE(e){eu=e}compare(e,t){return ic(e.name,t.name)}isDefinedOn(e){throw Co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Xc.MIN}maxPost(){return new Xc(nc,eu)}makePost(e,t){return bo("string"==typeof e,"KeyIndex indexValue must always be a string."),new Xc(e,eu)}toString(){return".key"}}const nu=new tu;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ru{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:ru.RED,this.left=null!=i?i:su.EMPTY_NODE,this.right=null!=r?r:su.EMPTY_NODE}copy(e,t,n,i,r){return new ru(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return su.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return su.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ru.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ru.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ru.RED=!0,ru.BLACK=!1;class su{constructor(e,t=su.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new su(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ru.BLACK,null,null))}remove(e){return new su(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ru.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new iu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new iu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new iu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new iu(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ou(e,t){return ic(e.name,t.name)}function au(e,t){return ic(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu;su.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new ru(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const cu=function(e){return"number"==typeof e?"number:"+cc(e):"string:"+e},uu=function(e){if(e.isLeafNode()){const t=e.val();bo("string"==typeof t||"number"==typeof t||"object"==typeof t&&qo(t,".sv"),"Priority must be a string or number.")}else bo(e===lu||e.isEmpty(),"priority of unexpected type.");bo(e===lu||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let hu,du,pu;class fu{constructor(e,t=fu.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,bo(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),uu(this.priorityNode_)}static set __childrenNodeConstructor(e){hu=e}static get __childrenNodeConstructor(){return hu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fu(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:fu.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $c(e)?this:".priority"===Fc(e)?this.priorityNode_:fu.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:fu.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Fc(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(bo(".priority"!==n||1===Lc(e),".priority must be the last token in a path"),this.updateImmediateChild(n,fu.__childrenNodeConstructor.EMPTY_NODE.updateChild(qc(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?cc(this.value_):this.value_,this.lazyHash_=zl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fu.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fu.__childrenNodeConstructor?-1:(bo(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=fu.VALUE_TYPE_ORDER.indexOf(t),r=fu.VALUE_TYPE_ORDER.indexOf(n);return bo(i>=0,"Unknown leaf type: "+t),bo(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}fu.VALUE_TYPE_ORDER=["object","boolean","number","string"];const _u=new class extends Zc{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?ic(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Xc.MIN}maxPost(){return new Xc(nc,new fu("[PRIORITY-POST]",pu))}makePost(e,t){const n=du(e);return new Xc(t,new fu("[PRIORITY-POST]",n))}toString(){return".priority"}},mu=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/mu,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yu=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new ru(a,o.node,ru.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new ru(a,o.node,ru.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new ru(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ru.BLACK):(a(i,ru.BLACK),a(i,ru.RED))}return s}(new gu(e.length));return new su(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const wu={};class bu{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return bo(wu&&_u,"ChildrenNode.ts has not been loaded"),vu=vu||new bu({".priority":wu},{".priority":_u}),vu}get(e){const t=jo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof su?t:null}hasIndex(e){return qo(this.indexSet_,e.toString())}addIndex(e,t){bo(e!==nu,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Xc.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?yu(n,e.getCompare()):wu;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new bu(c,l)}addToIndexes(e,t){const n=Wo(this.indexes_,((n,i)=>{const r=jo(this.indexSet_,i);if(bo(r,"Missing index implementation for "+i),n===wu){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Xc.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),yu(n,r.getCompare())}return wu}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Xc(e.name,i))),r.insert(e,e.node)}}));return new bu(n,this.indexSet_)}removeFromIndexes(e,t){const n=Wo(this.indexes_,(n=>{if(n===wu)return n;{const i=t.get(e.name);return i?n.remove(new Xc(e.name,i)):n}}));return new bu(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;class Iu{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&uu(this.priorityNode_),this.children_.isEmpty()&&bo(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cu||(Cu=new Iu(new su(au),null,bu.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cu}updatePriority(e){return this.children_.isEmpty()?this:new Iu(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Cu:t}}getChild(e){const t=Fc(e);return null===t?this:this.getImmediateChild(t).getChild(qc(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(bo(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Xc(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Cu:this.priorityNode_;return new Iu(i,s,r)}}updateChild(e,t){const n=Fc(e);if(null===n)return t;{bo(".priority"!==Fc(e)||1===Lc(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(qc(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(_u,((s,o)=>{t[s]=o.val(e),n++,r&&Iu.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+cu(this.getPriority().val())+":"),this.forEachChild(_u,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":zl(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Xc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Xc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Xc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Xc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Xc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eu?-1:0}withIndex(e){if(e===nu||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Iu(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nu||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(_u),n=t.getIterator(_u);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===nu?null:this.indexMap_.get(e.toString())}}Iu.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Eu=new class extends Iu{constructor(){super(new su(au),Iu.EMPTY_NODE,bu.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Iu.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Xc,{MIN:{value:new Xc(tc,Iu.EMPTY_NODE)},MAX:{value:new Xc(nc,Eu)}}),tu.__EMPTY_NODE=Iu.EMPTY_NODE,fu.__childrenNodeConstructor=Iu,lu=Eu,function(e){pu=e}(Eu);function Tu(e,t=null){if(null===e)return Iu.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),bo(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new fu(e,Tu(t))}if(e instanceof Array){let n=Iu.EMPTY_NODE;return lc(e,((t,i)=>{if(qo(e,t)&&"."!==t.substring(0,1)){const e=Tu(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Tu(t))}{const n=[];let i=!1;if(lc(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Tu(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Xc(e,r)))}})),0===n.length)return Iu.EMPTY_NODE;const r=yu(n,ou,(e=>e.name),au);if(i){const e=yu(n,_u.getCompare());return new Iu(r,Tu(t),new bu({".priority":e},{".priority":_u}))}return new Iu(r,Tu(t),bu.Default)}}!function(e){du=e}(Tu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su extends Zc{constructor(e){super(),this.indexPath_=e,bo(!$c(e)&&".priority"!==Fc(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?ic(e.name,t.name):r}makePost(e,t){const n=Tu(e),i=Iu.EMPTY_NODE.updateChild(this.indexPath_,n);return new Xc(t,i)}maxPost(){const e=Iu.EMPTY_NODE.updateChild(this.indexPath_,Eu);return new Xc(nc,e)}toString(){return Uc(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new class extends Zc{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ic(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Xc.MIN}maxPost(){return Xc.MAX}makePost(e,t){const n=Tu(e);return new Xc(t,n)}toString(){return".value"}},xu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Pu=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const s=new Array(8);for(r=7;r>=0;r--)s[r]=xu.charAt(n%64),n=Math.floor(n/64);bo(0===n,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=xu.charAt(t[r]);return bo(20===o.length,"nextPushId: Length should be 20."),o}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nu(e){return{type:"value",snapshotNode:e}}function Ru(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Au(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ou(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){bo(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Au(t,o)):bo(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Ru(t,n)):s.trackChildChange(Ou(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(_u,((e,i)=>{t.hasChild(e)||n.trackChildChange(Au(e,i))})),t.isLeafNode()||t.forEachChild(_u,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ou(t,i,r))}else n.trackChildChange(Ru(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Iu.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.indexedFilter_=new Du(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mu.getStartPost_(e),this.endPost_=Mu.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Xc(t,n))||(n=Iu.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Iu.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Iu.EMPTY_NODE);const r=this;return t.forEachChild(_u,((e,t)=>{r.matches(new Xc(e,t))||(i=i.updateImmediateChild(e,Iu.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.rangedFilter_=new Mu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Xc(t,n))||(n=Iu.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Iu.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Iu.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(Iu.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Iu.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;bo(o.numChildren()===this.limit_,"");const a=new Xc(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(Ou(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Au(t,e));const n=o.updateImmediateChild(t,Iu.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(Ru(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Au(l.name,l.node)),r.trackChildChange(Ru(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Iu.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_u}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return bo(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return bo(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tc}hasEnd(){return this.endSet_}getIndexEndValue(){return bo(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return bo(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nc}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return bo(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_u}copy(){const e=new Lu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qu(e){const t={};if(e.isDefault())return t;let n;return e.index_===_u?n="$priority":e.index_===ku?n="$value":e.index_===nu?n="$key":(bo(e.index_ instanceof Su,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Fo(n),e.startSet_&&(t.startAt=Fo(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Fo(e.indexStartName_))),e.endSet_&&(t.endAt=Fo(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Fo(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ju(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==_u&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Rc{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ql("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(bo(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Uu.getListenId_(e,n),o={};this.listens_[s]=o;const a=qu(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),jo(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Uu.getListenId_(e,t);delete this.listens_[n]}get(e){const t=qu(e._queryParams),n=e._path.toString(),i=new xo;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},i=0,r=Object.entries(e);i<r.length;i++){var s=r[i];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=Mo(o.responseText)}catch(e){Zl("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Zl("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.rootNode_=Iu.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){return{value:null,children:new Map}}function $u(e,t,n){if($c(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Fc(t);e.children.has(i)||e.children.set(i,Bu());$u(e.children.get(i),t=qc(t),n)}}function Vu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Vu(i,new Dc(t.toString()+"/"+e),n)}))}class zu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&lc(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zu(e);const n=1e4+2e4*Math.random();pc(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;lc(e,((e,i)=>{i>0&&qo(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),pc(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ku,Gu;function Yu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Gu=Ku||(Ku={}))[Gu.OVERWRITE=0]="OVERWRITE",Gu[Gu.MERGE=1]="MERGE",Gu[Gu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Gu[Gu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Qu{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ku.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if($c(this.path)){if(null!=this.affectedTree.value)return bo(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Dc(e));return new Qu(Mc(),t,this.revert)}}return bo(Fc(this.path)===e,"operationForChild called for unrelated child."),new Qu(qc(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.source=e,this.path=t,this.type=Ku.LISTEN_COMPLETE}operationForChild(e){return $c(this.path)?new Ju(this.source,Mc()):new Ju(this.source,qc(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ku.OVERWRITE}operationForChild(e){return $c(this.path)?new Xu(this.source,Mc(),this.snap.getImmediateChild(e)):new Xu(this.source,qc(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ku.MERGE}operationForChild(e){if($c(this.path)){const t=this.children.subtree(new Dc(e));return t.isEmpty()?null:t.value?new Xu(this.source,Mc(),t.value):new Zu(this.source,Mc(),t)}return bo(Fc(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zu(this.source,qc(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($c(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fc(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nh(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Co("Should only compare child_ events.");const i=new Xc(t.childName,t.snapshotNode),r=new Xc(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ih(e,t){return{eventCache:e,serverCache:t}}function rh(e,t,n,i){return ih(new eh(t,n,i),e.serverCache)}function sh(e,t,n,i){return ih(e.eventCache,new eh(t,n,i))}function oh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ah(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class ch{constructor(e,t=(()=>(lh||(lh=new su(rc)),lh))()){this.value=e,this.children=t}static fromObject(e){let t=new ch(null);return lc(e,((e,n)=>{t=t.set(new Dc(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Mc(),value:this.value};if($c(e))return null;{const n=Fc(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(qc(e),t);if(null!=r){return{path:Bc(new Dc(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if($c(e))return this;{const t=Fc(e),n=this.children.get(t);return null!==n?n.subtree(qc(e)):new ch(null)}}set(e,t){if($c(e))return new ch(t,this.children);{const n=Fc(e),i=(this.children.get(n)||new ch(null)).set(qc(e),t),r=this.children.insert(n,i);return new ch(this.value,r)}}remove(e){if($c(e))return this.children.isEmpty()?new ch(null):new ch(null,this.children);{const t=Fc(e),n=this.children.get(t);if(n){const i=n.remove(qc(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new ch(null):new ch(this.value,r)}return this}}get(e){if($c(e))return this.value;{const t=Fc(e),n=this.children.get(t);return n?n.get(qc(e)):null}}setTree(e,t){if($c(e))return t;{const n=Fc(e),i=(this.children.get(n)||new ch(null)).setTree(qc(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ch(this.value,r)}}fold(e){return this.fold_(Mc(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Bc(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Mc(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if($c(e))return null;{const i=Fc(e),r=this.children.get(i);return r?r.findOnPath_(qc(e),Bc(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Mc(),t)}foreachOnPath_(e,t,n){if($c(e))return this;{this.value&&n(t,this.value);const i=Fc(e),r=this.children.get(i);return r?r.foreachOnPath_(qc(e),Bc(t,i),n):new ch(null)}}foreach(e){this.foreach_(Mc(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Bc(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.writeTree_=e}static empty(){return new uh(new ch(null))}}function hh(e,t,n){if($c(t))return new uh(new ch(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Vc(r,t);return s=s.updateChild(o,n),new uh(e.writeTree_.set(r,s))}{const i=new ch(n),r=e.writeTree_.setTree(t,i);return new uh(r)}}}function dh(e,t,n){let i=e;return lc(n,((e,n)=>{i=hh(i,Bc(t,e),n)})),i}function ph(e,t){if($c(t))return uh.empty();{const n=e.writeTree_.setTree(t,new ch(null));return new uh(n)}}function fh(e,t){return null!=_h(e,t)}function _h(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Vc(n.path,t)):null}function mh(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(_u,((e,n)=>{t.push(new Xc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Xc(e,n.value))})),t}function gh(e,t){if($c(t))return e;{const n=_h(e,t);return new uh(null!=n?new ch(n):e.writeTree_.subtree(t))}}function yh(e){return e.writeTree_.isEmpty()}function vh(e,t){return wh(Mc(),e.writeTree_,t)}function wh(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(bo(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=wh(Bc(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Bc(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(e,t){return Dh(t,e)}function Ch(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));bo(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ih(t,i.path)?r=!1:Hc(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Th(e.allWrites,Eh,Mc()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=ph(e.visibleWrites,i.path);else{lc(i.children,(t=>{e.visibleWrites=ph(e.visibleWrites,Bc(i.path,t))}))}return!0}return!1}function Ih(e,t){if(e.snap)return Hc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Hc(Bc(e.path,n),t))return!0;return!1}function Eh(e){return e.visible}function Th(e,t,n){let i=uh.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Hc(n,e)?(t=Vc(n,e),i=hh(i,t,s.snap)):Hc(e,n)&&(t=Vc(e,n),i=hh(i,Mc(),s.snap.getChild(t)));else{if(!s.children)throw Co("WriteRecord should have .snap or .children");if(Hc(n,e))t=Vc(n,e),i=dh(i,t,s.children);else if(Hc(e,n))if(t=Vc(e,n),$c(t))i=dh(i,Mc(),s.children);else{const e=jo(s.children,Fc(t));if(e){const n=e.getChild(qc(t));i=hh(i,Mc(),n)}}}}}return i}function Sh(e,t,n,i,r){if(i||r){const s=gh(e.visibleWrites,t);if(!r&&yh(s))return n;if(r||null!=n||fh(s,Mc())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Hc(e.path,t)||Hc(t,e.path))};return vh(Th(e.allWrites,s,t),n||Iu.EMPTY_NODE)}return null}{const i=_h(e.visibleWrites,t);if(null!=i)return i;{const i=gh(e.visibleWrites,t);if(yh(i))return n;if(null!=n||fh(i,Mc())){return vh(i,n||Iu.EMPTY_NODE)}return null}}}function kh(e,t,n,i){return Sh(e.writeTree,e.treePath,t,n,i)}function xh(e,t){return function(e,t,n){let i=Iu.EMPTY_NODE;const r=_h(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(_u,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=gh(e.visibleWrites,t);return n.forEachChild(_u,((e,t)=>{const n=vh(gh(r,new Dc(e)),t);i=i.updateImmediateChild(e,n)})),mh(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return mh(gh(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Ph(e,t,n,i){return function(e,t,n,i,r){bo(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Bc(t,n);if(fh(e.visibleWrites,s))return null;{const t=gh(e.visibleWrites,s);return yh(t)?r.getChild(n):vh(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Nh(e,t){return function(e,t){return _h(e.visibleWrites,t)}(e.writeTree,Bc(e.treePath,t))}function Rh(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=gh(e.visibleWrites,t),c=_h(l,Mc());if(null!=c)a=c;else{if(null==n)return[];a=vh(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Ah(e,t,n){return function(e,t,n,i){const r=Bc(t,n),s=_h(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return vh(gh(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Oh(e,t){return Dh(Bc(e.treePath,t),e.writeTree)}function Dh(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;bo("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),bo(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ou(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Au(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Ru(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Co("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ou(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Lh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new eh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ah(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ah(this.viewCache_),r=Rh(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e,t,n,i,r){const s=new Mh;let o,a;if(n.type===Ku.OVERWRITE){const l=n;l.source.fromUser?o=Wh(e,t,l.path,l.snap,i,r,s):(bo(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!$c(l.path),o=Uh(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Ku.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Bc(n,i);Bh(t,Fc(c))&&(a=Wh(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Bc(n,i);Bh(t,Fc(c))||(a=Wh(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(bo(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Vh(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Ku.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=Nh(i,n))return t;{const a=new Lh(i,t,r),l=t.eventCache.getNode();let c;if($c(n)||".priority"===Fc(n)){let n;if(t.serverCache.isFullyInitialized())n=kh(i,ah(t));else{const e=t.serverCache.getNode();bo(e instanceof Iu,"serverChildren would be complete if leaf node"),n=xh(i,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const r=Fc(n);let u=Ah(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,qc(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,Iu.EMPTY_NODE,qc(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=kh(i,ah(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Nh(i,Mc()),rh(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=Nh(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if($c(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Uh(e,t,n,l.getNode().getChild(n),r,s,a,o);if($c(n)){let i=new ch(null);return l.getNode().forEachChild(nu,((e,t)=>{i=i.set(new Dc(e),t)})),Vh(e,t,n,i,r,s,a,o)}return t}{let c=new ch(null);return i.foreach(((e,t)=>{const i=Bc(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Vh(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Ku.LISTEN_COMPLETE)throw Co("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=sh(t,s.getNode(),s.isFullyInitialized()||$c(n),s.isFiltered());return jh(e,o,n,i,Fh,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=oh(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Nu(oh(t)))}}(t,o,l),{viewCache:o,changes:l}}function jh(e,t,n,i,r,s){const o=t.eventCache;if(null!=Nh(i,n))return t;{let a,l;if($c(n))if(bo(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ah(t),r=xh(i,n instanceof Iu?n:Iu.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=kh(i,ah(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Fc(n);if(".priority"===c){bo(1===Lc(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=Ph(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=qc(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Ph(i,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Ah(i,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,r,s):o.getNode()}}return rh(t,a,o.isFullyInitialized()||$c(n),e.filter.filtersNodes())}}function Uh(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if($c(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Fc(n);if(!l.isCompleteForPath(n)&&Lc(n)>1)return t;const r=qc(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,r,Fh,null)}const h=sh(t,c,l.isFullyInitialized()||$c(n),u.filtersNodes());return jh(e,h,n,r,new Lh(r,h,s),a)}function Wh(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new Lh(r,t,s);if($c(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=rh(t,c,!0,e.filter.filtersNodes());else{const r=Fc(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=rh(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=qc(n),c=a.getNode().getImmediateChild(r);let h;if($c(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===jc(s)&&e.getChild(Wc(s)).isEmpty()?e:e.updateChild(s,i):Iu.EMPTY_NODE}if(c.equals(h))l=t;else{l=rh(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Bh(e,t){return e.eventCache.isCompleteForChild(t)}function $h(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Vh(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=$c(n)?i:new ch(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=$h(0,t.serverCache.getNode().getImmediateChild(n),i);c=Uh(e,c,new Dc(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!l){const l=$h(0,t.serverCache.getNode().getImmediateChild(n),i);c=Uh(e,c,new Dc(n),l,r,s,o,a)}})),c}class zh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Du(n.getIndex()),r=(s=n).loadsAllData()?new Du(s.getIndex()):s.hasLimit()?new Fu(s):new Mu(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Iu.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Iu.EMPTY_NODE,a.getNode(),null),u=new eh(l,o.isFullyInitialized(),i.filtersNodes()),h=new eh(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ih(h,u),this.eventGenerator_=new th(this.query_)}get query(){return this.query_}}function Hh(e,t){const n=ah(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!$c(t)&&!n.getImmediateChild(Fc(t)).isEmpty())?n.getChild(t):null}function Kh(e){return 0===e.eventRegistrations_.length}function Gh(e,t,n){const i=[];if(n){bo(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Yh(e,t,n,i){t.type===Ku.MERGE&&null!==t.source.queryId&&(bo(ah(e.viewCache_),"We should always have a full cache before handling merges"),bo(oh(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=qh(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,bo(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),bo(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),bo(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Qh(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Qh(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),nh(e,r,"child_removed",t,i,n),nh(e,r,"child_added",t,i,n),nh(e,r,"child_moved",s,i,n),nh(e,r,"child_changed",t,i,n),nh(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jh,Xh;class Zh{constructor(){this.views=new Map}}function ed(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return bo(null!=s,"SyncTree gave us an op for an invalid query."),Yh(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Yh(s,t,n,i));return r}}function td(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=kh(n,r?i:null),s=!1;e?s=!0:i instanceof Iu?(e=xh(n,i),s=!1):(e=Iu.EMPTY_NODE,s=!1);const o=ih(new eh(e,s,!1),new eh(i,r,!1));return new zh(t,o)}return o}function nd(e,t,n,i,r,s){const o=td(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(_u,((e,t)=>{i.push(Ru(e,t))}));return n.isFullyInitialized()&&i.push(Nu(n.getNode())),Qh(e,i,n.getNode(),t)}(o,n)}function id(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=ld(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Gh(c,n,i)),Kh(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Gh(t,n,i)),Kh(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!ld(e)&&s.push(new(bo(Jh,"Reference.ts has not been loaded"),Jh)(t._repo,t._path)),{removed:s,events:o}}function rd(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function sd(e,t){let n=null;for(const i of e.views.values())n=n||Hh(i,t);return n}function od(e,t){if(t._queryParams.loadsAllData())return cd(e);{const n=t._queryIdentifier;return e.views.get(n)}}function ad(e,t){return null!=od(e,t)}function ld(e){return null!=cd(e)}function cd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud=1;class hd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ch(null),this.pendingWriteTree_={visibleWrites:uh.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dd(e,t,n,i,r){return function(e,t,n,i,r){bo(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=hh(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?vd(e,new Xu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function pd(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Ch(e.pendingWriteTree_,t)){let t=new ch(null);return null!=i.snap?t=t.set(Mc(),!0):lc(i.children,(e=>{t=t.set(new Dc(e),!0)})),vd(e,new Qu(i.path,t,n))}return[]}function fd(e,t,n){return vd(e,new Xu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function _d(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||ad(s,t))){const a=id(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(r,((e,t)=>ld(t)));if(c&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&ld(t)){return[cd(t)]}{let e=[];return t&&(e=rd(t)),lc(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Cd(e,i);e.listenProvider_.startListening(xd(r),Id(e,r),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(xd(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Ed(t));e.listenProvider_.stopListening(xd(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ed(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function md(e,t,n){const i=t._path;let r=null,s=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Vc(e,i);r=r||sd(t,n),s=s||ld(t)}));let o,a=e.syncPointTree_.get(i);if(a?(s=s||ld(a),r=r||sd(a,Mc())):(a=new Zh,e.syncPointTree_=e.syncPointTree_.set(i,a)),null!=r)o=!0;else{o=!1,r=Iu.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=sd(t,Mc());n&&(r=r.updateImmediateChild(e,n))}))}const l=ad(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Ed(t);bo(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ud++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=nd(a,t,n,bh(e.pendingWriteTree_,i),r,o);if(!l&&!s){const n=od(a,t);c=c.concat(function(e,t,n){const i=t._path,r=Id(e,t),s=Cd(e,n),o=e.listenProvider_.startListening(xd(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)bo(!ld(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!$c(e)&&t&&ld(t))return[cd(t).query];{let e=[];return t&&(e=e.concat(rd(t).map((e=>e.query)))),lc(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(xd(i),Id(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return c}function gd(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=sd(n,Vc(e,t));if(i)return i}));return Sh(i,t,r,n,!0)}function yd(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Vc(e,n);i=i||sd(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||sd(r,Mc()):(r=new Zh,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new eh(i,!0,!1):null;return function(e){return oh(e.viewCache_)}(td(r,t,bh(e.pendingWriteTree_,t._path),s?o.getNode():Iu.EMPTY_NODE,s))}function vd(e,t){return wd(t,e.syncPointTree_,null,bh(e.pendingWriteTree_,Mc()))}function wd(e,t,n,i){if($c(e.path))return bd(e,t,n,i);{const r=t.get(Mc());null==n&&null!=r&&(n=sd(r,Mc()));let s=[];const o=Fc(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Oh(i,o);s=s.concat(wd(a,l,e,t))}return r&&(s=s.concat(ed(r,e,i,n))),s}}function bd(e,t,n,i){const r=t.get(Mc());null==n&&null!=r&&(n=sd(r,Mc()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Oh(i,t),l=e.operationForChild(t);l&&(s=s.concat(bd(l,r,o,a)))})),r&&(s=s.concat(ed(r,e,i,n))),s}function Cd(e,t){const n=t.query,i=Id(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Iu.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Td(e,n);if(i){const n=Sd(i),r=n.path,s=n.queryId,o=Vc(r,t);return kd(e,r,new Ju(Yu(s),o))}return[]}(e,n._path,i):function(e,t){return vd(e,new Ju({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return _d(e,n,null,i)}}}}function Id(e,t){const n=Ed(t);return e.queryToTagMap.get(n)}function Ed(e){return e._path.toString()+"$"+e._queryIdentifier}function Td(e,t){return e.tagToQueryMap.get(t)}function Sd(e){const t=e.indexOf("$");return bo(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Dc(e.substr(0,t))}}function kd(e,t,n){const i=e.syncPointTree_.get(t);bo(i,"Missing sync point for query tag that we're tracking");return ed(i,n,bh(e.pendingWriteTree_,t),null)}function xd(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(bo(Xh,"Reference.ts has not been loaded"),Xh)(e._repo,e._path):e}class Pd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Pd(t)}node(){return this.node_}}class Nd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Bc(this.path_,e);return new Nd(this.syncTree_,t)}node(){return gd(this.syncTree_,this.path_)}}const Rd=function(e,t,n){return e&&"object"==typeof e?(bo(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ad(e[".sv"],t,n):"object"==typeof e[".sv"]?Od(e[".sv"],t):void bo(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ad=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:bo(!1,"Unexpected server value: "+e)}},Od=function(e,t,n){e.hasOwnProperty("increment")||bo(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&bo(!1,"Unexpected increment value: "+i);const r=t.node();if(bo(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Dd=function(e,t,n){return Md(e,new Pd(t),n)};function Md(e,t,n){const i=e.getPriority().val(),r=Rd(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Rd(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new fu(s,Tu(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new fu(r))),i.forEachChild(_u,((e,i)=>{const r=Md(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ld(e,t){let n=t instanceof Dc?t:new Dc(t),i=e,r=Fc(n);for(;null!==r;){const e=jo(i.node.children,r)||{children:{},childCount:0};i=new Fd(r,i,e),n=qc(n),r=Fc(n)}return i}function qd(e){return e.node.value}function jd(e,t){e.node.value=t,Vd(e)}function Ud(e){return e.node.childCount>0}function Wd(e,t){lc(e.node.children,((n,i)=>{t(new Fd(n,e,i))}))}function Bd(e,t,n,i){n&&!i&&t(e),Wd(e,(e=>{Bd(e,t,!0,i)})),n&&i&&t(e)}function $d(e){return new Dc(null===e.parent?e.name:$d(e.parent)+"/"+e.name)}function Vd(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===qd(e)&&!Ud(e)}(n),r=qo(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Vd(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Vd(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const zd=/[\[\].#$\/\u0000-\u001F\u007F]/,Hd=/[\[\].#$\u0000-\u001F\u007F]/,Kd=function(e){return"string"==typeof e&&0!==e.length&&!zd.test(e)},Gd=function(e){return"string"==typeof e&&0!==e.length&&!Hd.test(e)},Yd=function(e,t,n,i){i&&void 0===t||Qd(zo(e,"value"),t,n)},Qd=function(e,t,n){const i=n instanceof Dc?new Kc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Yc(i));if("function"==typeof t)throw new Error(e+"contains a function "+Yc(i)+" with contents = "+t.toString());if(ec(t))throw new Error(e+"contains "+t.toString()+" "+Yc(i));if("string"==typeof t&&t.length>10485760/3&&Ho(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Yc(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(lc(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Kd(t)))throw new Error(e+" contains an invalid key ("+t+") "+Yc(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ho(a),Gc(o),Qd(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ho(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Yc(i)+" in addition to actual children.")}},Jd=function(e,t,n,i){if(!(i&&void 0===n||Gd(n)))throw new Error(zo(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Xd=function(e,t){if(".info"===Fc(t))throw new Error(e+" failed = Can't modify data under /.info/")},Zd=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Kd(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Gd(e)}(n))throw new Error(zo(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ep{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tp(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||zc(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function np(e,t,n){tp(e,n),rp(e,(e=>zc(e,t)))}function ip(e,t,n){tp(e,n),rp(e,(e=>Hc(e,t)||Hc(t,e)))}function rp(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(sp(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function sp(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Kl&&Yl("event: "+n.toString()),dc(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ep,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bu(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ap(e,t,n){if(e.stats_=Ic(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Uu(e.repoInfo_,((t,n,i,r)=>{up(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>hp(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fo(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Jc(e.repoInfo_,t,((t,n,i,r)=>{up(e,t,n,i,r)}),(t=>{hp(e,t)}),(t=>{!function(e,t){lc(t,((t,n)=>{dp(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Cc[n]||(Cc[n]=t()),Cc[n]}(e.repoInfo_,(()=>new Hu(e.stats_,e.server_))),e.infoData_=new Wu,e.infoSyncTree_=new hd({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=fd(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),dp(e,"connected",!1),e.serverSyncTree_=new hd({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);ip(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function lp(e){const t=e.infoData_.getNode(new Dc(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function cp(e){return(t=(t={timestamp:lp(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function up(e,t,n,i,r){e.dataUpdateCount++;const s=new Dc(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Wo(n,(e=>Tu(e)));o=function(e,t,n,i){const r=Td(e,i);if(r){const i=Sd(r),s=i.path,o=i.queryId,a=Vc(s,t),l=ch.fromObject(n);return kd(e,s,new Zu(Yu(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Tu(n);o=function(e,t,n,i){const r=Td(e,i);if(null!=r){const i=Sd(r),s=i.path,o=i.queryId,a=Vc(s,t);return kd(e,s,new Xu(Yu(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=Wo(n,(e=>Tu(e)));o=function(e,t,n){const i=ch.fromObject(n);return vd(e,new Zu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Tu(n);o=fd(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=vp(e,s)),ip(e.eventQueue_,a,o)}function hp(e,t){dp(e,"connected",t),!1===t&&function(e){mp(e,"onDisconnectEvents");const t=cp(e),n=Bu();Vu(e.onDisconnect_,Mc(),((i,r)=>{const s=function(e,t,n,i){return Md(t,new Nd(n,e),i)}(i,r,e.serverSyncTree_,t);$u(n,i,s)}));let i=[];Vu(n,Mc(),((t,n)=>{i=i.concat(fd(e.serverSyncTree_,t,n));const r=Ep(e,t);vp(e,r)})),e.onDisconnect_=Bu(),ip(e.eventQueue_,Mc(),i)}(e)}function dp(e,t,n){const i=new Dc("/.info/"+t),r=Tu(n);e.infoData_.updateSnapshot(i,r);const s=fd(e.infoSyncTree_,i,r);ip(e.eventQueue_,i,s)}function pp(e){return e.nextWriteId_++}function fp(e,t,n,i,r){mp(e,"set",{path:t.toString(),value:n,priority:i});const s=cp(e),o=Tu(n,i),a=gd(e.serverSyncTree_,t),l=Dd(o,a,s),c=pp(e),u=dd(e.serverSyncTree_,t,l,c,!0);tp(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Zl("set at "+t+" failed: "+n);const o=pd(e.serverSyncTree_,c,!s);ip(e.eventQueue_,t,o),function(e,t,n,i){t&&dc((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}(0,r,n,i)}));const h=Ep(e,t);vp(e,h),ip(e.eventQueue_,h,[])}function _p(e,t,n){let i;i=".info"===Fc(t._path)?_d(e.infoSyncTree_,t,n):_d(e.serverSyncTree_,t,n),np(e.eventQueue_,t._path,i)}function mp(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Yl(n,...t)}function gp(e,t,n){return gd(e.serverSyncTree_,t,n)||Iu.EMPTY_NODE}function yp(e,t=e.transactionQueueTree_){if(t||Ip(e,t),qd(t)){const n=bp(e,t);bo(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=gp(e,t,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const e=n[c];bo(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Vc(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{mp(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(pd(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ip(e,Ld(e.transactionQueueTree_,t)),yp(e,e.transactionQueueTree_),ip(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)dc(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Zl("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}vp(e,t)}}),o)}(e,$d(t),n)}else Ud(t)&&Wd(t,(t=>{yp(e,t)}))}function vp(e,t){const n=wp(e,t),i=$d(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Vc(n,l.path);let u,h=!1;if(bo(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,r=r.concat(pd(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",r=r.concat(pd(e.serverSyncTree_,l.currentWriteId,!0));else{const n=gp(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Qd("transaction failed: Data returned ",i,l.path);let t=Tu(i);"object"==typeof i&&null!=i&&qo(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=cp(e),c=Dd(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=pp(e),s.splice(s.indexOf(o),1),r=r.concat(dd(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(pd(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(pd(e.serverSyncTree_,l.currentWriteId,!0))}ip(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Ip(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)dc(i[a]);yp(e,e.transactionQueueTree_)}(e,bp(e,n),i),i}function wp(e,t){let n,i=e.transactionQueueTree_;for(n=Fc(t);null!==n&&void 0===qd(i);)i=Ld(i,n),n=Fc(t=qc(t));return i}function bp(e,t){const n=[];return Cp(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Cp(e,t,n){const i=qd(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Wd(t,(t=>{Cp(e,t,n)}))}function Ip(e,t){const n=qd(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,jd(t,n.length>0?n:void 0)}Wd(t,(t=>{Ip(e,t)}))}function Ep(e,t){const n=$d(wp(e,t)),i=Ld(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Tp(e,t)})),Tp(e,i),Bd(i,(t=>{Tp(e,t)})),n}function Tp(e,t){const n=qd(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(bo(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(bo(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(pd(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?jd(t,void 0):n.length=s+1,ip(e.eventQueue_,$d(t),r);for(let e=0;e<i.length;e++)dc(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(e,t){const n=kp(e),i=n.namespace;"firebase.com"===n.domain&&Xl(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Xl("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Zl("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new yc(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new Dc(n.pathString)}},kp=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Zl(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fo(this.snapshot.exportVal())}}class Pp{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return bo(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */class Rp{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return $c(this._path)?null:jc(this._path)}get ref(){return new Ap(this._repo,this._path)}get _queryIdentifier(){const e=ju(this._queryParams),t=oc(e);return"{}"===t?"default":t}get _queryObject(){return ju(this._queryParams)}isEqual(e){if(!((e=Go(e))instanceof Rp))return!1;const t=this._repo===e._repo,n=zc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ap extends Rp{constructor(e,t){super(e,t,new Lu,!1)}get parent(){const e=Wc(this._path);return null===e?null:new Ap(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Op{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Dc(e),n=Mp(this.ref,e);return new Op(this._node.getChild(t),n,_u)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Op(n,Mp(this.ref,t),_u))))}hasChild(e){const t=new Dc(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dp(e,t){return(e=Go(e))._checkNotDeleted("ref"),void 0!==t?Mp(e._root,t):e._root}function Mp(e,t){var n,i,r,s;return null===Fc((e=Go(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Jd(n,i,r,s)):Jd("child","path",t,!1),new Ap(e._repo,Bc(e._path,t))}function Fp(e,t){e=Go(e),Xd("push",e._path),Yd("push",t,e._path,!0);const n=lp(e._repo),i=Pu(n),r=Mp(e,i),s=Mp(e,i);let o;return o=null!=t?function(e,t){e=Go(e),Xd("set",e._path),Yd("set",t,e._path,!1);const n=new xo;return fp(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}(s,t).then((()=>s)):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function Lp(e){return function(e,t){const n=yd(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=Tu(n).withIndex(t._queryParams.getIndex()),r=fd(e.serverSyncTree_,t._path,i);return np(e.eventQueue_,t._path,r),Promise.resolve(i)}),(n=>(mp(e,"get for query "+Fo(t)+" failed: "+n),Promise.reject(new Error(n)))))}((e=Go(e))._repo,e).then((t=>new Op(t,new Ap(e._repo,e._path),e._queryParams.getIndex())))}class qp{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new xp("value",this,new Op(e.snapshotNode,new Ap(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Pp(this,e,t):null}matches(e){return e instanceof qp&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class jp{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Pp(this,e,t):null}createEvent(e,t){bo(null!=e.childName,"Child events should have a childName.");const n=Mp(new Ap(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new xp(e.type,this,new Op(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jp&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Up(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{_p(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Np(n,s||void 0),a="value"===t?new qp(o):new jp(t,o);return function(e,t,n){let i;i=".info"===Fc(t._path)?md(e.infoSyncTree_,t,n):md(e.serverSyncTree_,t,n),np(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>_p(e._repo,e,a)}function Wp(e,t,n,i){return Up(e,"child_added",t,n,i)}!function(e){bo(!Jh,"__referenceConstructor has already been defined"),Jh=e}(Ap),function(e){bo(!Xh,"__referenceConstructor has already been defined"),Xh=e}(Ap);
/**
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
 */
const Bp={};function $p(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Xl("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yl("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Sp(s,r),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Sp(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new mc(mc.OWNER):new _c(e.name,e.options,t);Zd("Invalid Firebase Database URL",l),$c(l.path)||Xl("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=Bp[t.name];r||(r={},Bp[t.name]=r);let s=r[e.toURLString()];s&&Xl("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new op(e,false,n,i),r[e.toURLString()]=s,s}(c,e,u,new fc(e.name,n));return new Vp(h,e)}class Vp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ap(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ap(this._repo,Mc())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Bp[t];n&&n[e.key]===e||Xl(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Xl("Cannot call "+e+" on a deleted database.")}}function zp(e=ya(),t){return fa(e,"database").getImmediate({identifier:t})}
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Jc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Jc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Ll="9.0.0",pa(new Yo("database",((e,{instanceIdentifier:t})=>$p(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),va("@firebase/database","0.12.0",e)}();export{uo as A,fs as B,Mr as C,Vn as F,ti as a,di as b,ei as c,li as d,pt as e,ai as f,ui as g,mi as h,hi as i,ga as j,Ml as k,zp as l,Lp as m,a as n,Qn as o,Mp as p,Dp as q,Wn as r,Wp as s,l as t,Rn as u,Nr as v,kt as w,dt as x,Ar as y,Fp as z};
