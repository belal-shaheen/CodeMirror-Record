!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=110)}([function(t,e,r){var n=r(23),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){var n=r(51),o=r(57);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(41),o=r(42),i=r(43),a=r(44),u=r(45);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(21);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(11),o=r(53),i=r(54),a="[object Null]",u="[object Undefined]",c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:c&&c in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(1)(Object,"create");t.exports=n},function(t,e,r){var n=r(67);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(25),o=r(26);t.exports=function(t,e,r,i){var a=!r;r||(r={});for(var u=-1,c=e.length;++u<c;){var s=e[u],f=i?i(r[s],t[s],s,r,t):void 0;void 0===f&&(f=t[s]),a?o(r,s,f):n(r,s,f)}return r}},function(t,e,r){var n=r(1)(r(0),"Map");t.exports=n},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e,r){var n=r(27),o=r(81),i=r(31);t.exports=function(t){return i(t)?n(t):o(t)}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(23),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,r(14)(t))},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(89),o=r(33),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),n(a(t),function(e){return i.call(t,e)}))}:o;t.exports=u},function(t,e,r){var n=r(93),o=r(10),i=r(94),a=r(95),u=r(96),c=r(6),s=r(24),f=s(n),l=s(o),p=s(i),h=s(a),v=s(u),y=c;(n&&"[object DataView]"!=y(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||i&&"[object Promise]"!=y(i.resolve())||a&&"[object Set]"!=y(new a)||u&&"[object WeakMap]"!=y(new u))&&(y=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case v:return"[object WeakMap]"}return e}),t.exports=y},function(t,e,r){var n=r(99);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(6),o=r(2),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==a||e==u||e==i||e==c}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(52))},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(26),o=r(21),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];i.call(t,e)&&o(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},function(t,e,r){var n=r(72);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},function(t,e,r){var n=r(74),o=r(75),i=r(13),a=r(28),u=r(78),c=r(79),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),f=!r&&o(t),l=!r&&!f&&a(t),p=!r&&!f&&!l&&c(t),h=r||f||l||p,v=h?n(t.length,String):[],y=v.length;for(var d in t)!e&&!s.call(t,d)||h&&("length"==d||l&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,y))||v.push(d);return v}},function(t,e,r){(function(t){var n=r(0),o=r(77),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,r(14)(t))},function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(22),o=r(29);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e,r){var n=r(27),o=r(84),i=r(31);t.exports=function(t){return i(t)?n(t,!0):o(t)}},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(35),o=r(36),i=r(18),a=r(33),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,i(t)),t=o(t);return e}:a;t.exports=u},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(30)(Object.getPrototypeOf,Object);t.exports=n},function(t,e,r){var n=r(35),o=r(13);t.exports=function(t,e,r){var i=e(t);return o(t)?i:n(i,r(t))}},function(t,e,r){var n=r(39),o=1,i=4;t.exports=function(t){return n(t,o|i)}},function(t,e,r){var n=r(40),o=r(71),i=r(25),a=r(73),u=r(83),c=r(86),s=r(87),f=r(88),l=r(90),p=r(91),h=r(92),v=r(19),y=r(97),d=r(98),b=r(104),g=r(13),m=r(28),x=r(106),j=r(2),_=r(108),O=r(12),w=1,D=2,A=4,T="[object Arguments]",M="[object Function]",k="[object GeneratorFunction]",P="[object Object]",S={};S[T]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[P]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[M]=S["[object WeakMap]"]=!1,t.exports=function t(e,r,C,I,z,E){var L,F=r&w,R=r&D,U=r&A;if(C&&(L=z?C(e,I,z,E):C(e)),void 0!==L)return L;if(!j(e))return e;var B=g(e);if(B){if(L=y(e),!F)return s(e,L)}else{var V=v(e),$=V==M||V==k;if(m(e))return c(e,F);if(V==P||V==T||$&&!z){if(L=R||$?{}:b(e),!F)return R?l(e,u(L,e)):f(e,a(L,e))}else{if(!S[V])return z?e:{};L=d(e,V,F)}}E||(E=new n);var N=E.get(e);if(N)return N;E.set(e,L),_(e)?e.forEach(function(n){L.add(t(n,r,C,n,e,E))}):x(e)&&e.forEach(function(n,o){L.set(o,t(n,r,C,o,e,E))});var W=U?R?h:p:R?keysIn:O,J=B?void 0:W(e);return o(J||e,function(n,o){J&&(n=e[o=n]),i(L,o,t(n,r,C,o,e,E))}),L}},function(t,e,r){var n=r(4),o=r(46),i=r(47),a=r(48),u=r(49),c=r(50);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(5),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e,r){var n=r(5);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(5);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(5);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(4);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(4),o=r(10),i=r(58),a=200;t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var u=r.__data__;if(!o||u.length<a-1)return u.push([t,e]),this.size=++r.size,this;r=this.__data__=new i(u)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(22),o=r(55),i=r(2),a=r(24),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?p:u).test(a(t))}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(11),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n,o=r(56),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(59),o=r(66),i=r(68),a=r(69),u=r(70);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(60),o=r(4),i=r(10);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e,r){var n=r(61),o=r(62),i=r(63),a=r(64),u=r(65);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(7);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(7),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return i.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(7),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(7),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(8);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(8);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(8);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(8);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}},function(t,e,r){var n=r(1),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,r){var n=r(9),o=r(12);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(76),o=r(3),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,r){var n=r(6),o=r(3),i="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==i}},function(t,e){t.exports=function(){return!1}},function(t,e){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){var n=r(80),o=r(15),i=r(16),a=i&&i.isTypedArray,u=a?o(a):n;t.exports=u},function(t,e,r){var n=r(6),o=r(29),i=r(3),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[n(t)]}},function(t,e,r){var n=r(17),o=r(82),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e,r){var n=r(30)(Object.keys,Object);t.exports=n},function(t,e,r){var n=r(9),o=r(32);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e,r){var n=r(2),o=r(17),i=r(85),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=o(t),r=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&r.push(u);return r}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){(function(t){var n=r(0),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.Buffer:void 0,u=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=u?u(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(14)(t))},function(t,e){t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},function(t,e,r){var n=r(9),o=r(18);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}},function(t,e,r){var n=r(9),o=r(34);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e,r){var n=r(37),o=r(18),i=r(12);t.exports=function(t){return n(t,i,o)}},function(t,e,r){var n=r(37),o=r(34),i=r(32);t.exports=function(t){return n(t,i,o)}},function(t,e,r){var n=r(1)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(1)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(1)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(1)(r(0),"WeakMap");t.exports=n},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},function(t,e,r){var n=r(20),o=r(100),i=r(101),a=r(102),u=r(103),c="[object Boolean]",s="[object Date]",f="[object Map]",l="[object Number]",p="[object RegExp]",h="[object Set]",v="[object String]",y="[object Symbol]",d="[object ArrayBuffer]",b="[object DataView]",g="[object Float32Array]",m="[object Float64Array]",x="[object Int8Array]",j="[object Int16Array]",_="[object Int32Array]",O="[object Uint8Array]",w="[object Uint8ClampedArray]",D="[object Uint16Array]",A="[object Uint32Array]";t.exports=function(t,e,r){var T=t.constructor;switch(e){case d:return n(t);case c:case s:return new T(+t);case b:return o(t,r);case g:case m:case x:case j:case _:case O:case w:case D:case A:return u(t,r);case f:return new T;case l:case v:return new T(t);case p:return i(t);case h:return new T;case y:return a(t)}}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e,r){var n=r(20);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},function(t,e){var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},function(t,e,r){var n=r(11),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},function(t,e,r){var n=r(20);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},function(t,e,r){var n=r(105),o=r(36),i=r(17);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},function(t,e,r){var n=r(2),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i},function(t,e,r){var n=r(107),o=r(15),i=r(16),a=i&&i.isMap,u=a?o(a):n;t.exports=u},function(t,e,r){var n=r(19),o=r(3),i="[object Map]";t.exports=function(t){return o(t)&&n(t)==i}},function(t,e,r){var n=r(109),o=r(15),i=r(16),a=i&&i.isSet,u=a?o(a):n;t.exports=u},function(t,e,r){var n=r(19),o=r(3),i="[object Set]";t.exports=function(t){return o(t)&&n(t)==i}},function(t,e,r){"use strict";r.r(e);var n={"*compose":"c","+delete":"d","+input":"i",markText:"k",select:"l","*mouse":"m","*rename":"n","+move":"o",paste:"p",drag:"r",setValue:"s",cut:"x"},o=function(t){return n[t]};function i(t){return t.from.line===t.to.line&&t.from.ch===t.to.ch?[t.from.line,t.from.ch]:[[t.from.line,t.from.ch],[t.to.line,t.to.ch]]}function a(t,e){if(t.ops.length!==e.ops.length)return!1;for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(o.from.line!==o.to.line||n.from.line!==n.to.line||o.from.ch!==o.to.ch||n.from.ch!==n.to.ch)return!1;if(n.from.ch+n.text[0].length!==o.from.ch)return!1}return!0}var u={acceptableMinOperationDelay:1200,acceptableMinCursorMoveDelay:800},c=0,s=0;function f(t,e){var r=u.acceptableMinCursorMoveDelay;return t.delayDuration>=r&&function(t){var e=u.acceptableMinCursorMoveDelay/2,r=t.delayDuration;if(0!==c){if(r>=s+e)return!1;if(r<=s-e)return!1}return!0}(e)?(s=(s*c+e.delayDuration)/(c+1),c++,!0):(c=0,s=0,!1)}function l(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=u.acceptableMinCursorMoveDelay;if(t.crs.length!==e.crs.length)return!1;if(e.delayDuration>=n){if(!f(t,e))return!1}else if(t.delayDuration>=n)return!1;return!!function(t,e,r){for(var n=0;n<e.crs.length;n++){var o=t.crs[n],i=e.crs[n];if(o.anchor.line!==o.head.line||o.anchor.ch!==o.head.ch)return!1;if(t.crs[n].anchor.ch+r!==i.anchor.ch)return!1;if(t.crs[n].anchor.line!==i.anchor.line)return!1}return!0}(t,e,r)}function p(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[];t.length>0;){var n=t.pop();if("crs"in n){for(;t.length>0;){var o=t.pop();if(!("crs"in o&&l(o,n,e))){t.push(o);break}n.startTime=o.startTime,n.delayDuration=o.delayDuration,n.combo+=1;for(var i=0;i<n.crs.length;i++)n.crs[i].anchor=o.crs[i].anchor}r.unshift(n)}else r.unshift(n)}return r}var h=0,v=0;function y(t,e){var r=u.acceptableMinOperationDelay;return t.delayDuration>=r&&function(t){var e=u.acceptableMinOperationDelay/2,r=t.delayDuration;if(0!==h){if(r>=v+e)return!1;if(r<=v-e)return!1}return!0}(e)?(v=(v*h+e.delayDuration)/(h+1),h++,!0):(h=0,v=0,!1)}function d(t,e){var r=u.acceptableMinOperationDelay;if(t.ops.length!==e.ops.length)return!1;if(e.delayDuration>=r){if(!y(t,e))return!1}else if(t.delayDuration>=r)return!1;return!!function(t,e){for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(o.from.line!==o.to.line||n.from.line!==n.to.line||o.from.ch!==o.to.ch||n.from.ch!==n.to.ch)return!1;if(n.from.ch+1!==o.from.ch&&(n.from.line+1!==o.from.line||0!==o.from.ch))return!1}return!0}(t,e)}function b(t){for(var e=0;e<t.ops.length;e++){for(var r="",n=0;n<t.ops[e].text.length;n++)""!==t.ops[e].text[n]?r+=t.ops[e].text[n]:n+1<t.ops[e].text.length&&""===t.ops[e].text[n+1]&&(r+="\n",n++);t.ops[e].text=r}return t}var g=r(38),m=0,x=0;function j(t,e){var r=u.acceptableMinCursorMoveDelay;return t.delayDuration>=r&&function(t){var e=u.acceptableMinCursorMoveDelay/2,r=t.delayDuration;if(0!==m){if(r>=x+e)return!1;if(r<=x-e)return!1}return!0}(e)?(x=(x*m+e.delayDuration)/(m+1),m++,!0):(m=0,x=0,!1)}function _(t,e){var r=u.acceptableMinCursorMoveDelay;if(t.crs.length!==e.crs.length)return!1;if(e.delayDuration>=r){if(!j(t,e))return!1}else if(t.delayDuration>=r)return!1;return!!function(t,e){for(var r=0;r<e.crs.length;r++){var n=t.crs[r],o=e.crs[r];if(o.anchor.line===o.head.line&&o.anchor.ch===o.head.ch)return!1;if(n.anchor.line!==o.anchor.line||n.anchor.ch!==o.anchor.ch)return!1}return!0}(t,e)}function O(t){for(var e=[],r=-1;t.length>0;){var n=t.shift();r!==n.line&&(e.push([n.line]),r=n.line),e[e.length-1].push(n.ch)}for(var o=0;o<e.length;o++){var i=e[o].slice(1);i=w(i),i=w(i,-1),e[o]=[e[o][0],i]}return e}function w(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[];t.length>0;){var n=t.shift();"number"!=typeof n?r.push(n):0===r.length||Array.isArray(r[r.length-1])?r.push({from:n,to:n}):"to"in r[r.length-1]&&(r[r.length-1].to+e!==n?r.push({from:n,to:n}):r[r.length-1].to=n)}for(var o=0;o<r.length;o++)"to"in r[o]&&(r[o].from===r[o].to?r[o]=r[o].from:r[o]=[r[o].from,r[o].to]);return r}var D=0,A=0;function T(t,e){var r=u.acceptableMinOperationDelay;return t.delayDuration>=r&&function(t){var e=u.acceptableMinOperationDelay/2,r=t.delayDuration;if(0!==D){if(r>=A+e)return!1;if(r<=A-e)return!1}return!0}(e)?(A=(A*D+e.delayDuration)/(D+1),D++,!0):(D=0,A=0,!1)}function M(t,e){var r=u.acceptableMinOperationDelay;if(t.ops.length!==e.ops.length)return!1;if(e.delayDuration>=r){if(!T(t,e))return!1}else if(t.delayDuration>=r)return!1;return!!function(t,e){for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(n.from.ch!==o.to.ch||n.from.line!==o.to.line)return!1}return!0}(t,e)}function k(t){if(1===t.combo)return t;for(var e=0;e<t.ops.length;e++){for(var r=[],n=[];t.ops[e].removed.length>0;){var o=t.ops[e].removed.shift();"string"==typeof o?0===n.length?n.push(o):n[0].length===o.length?n.push(o):(r.push([n[0].length,n.length]),(n=[]).push(o)):(n.length>0&&(r.push([n[0].length,n.length]),n=[]),r.push([[o[0].line,o[0].ch],[o[1].line,o[1].ch]]))}n.length>0&&r.push([n[0].length,n.length]),t.ops[e].removed=r}return t}var P=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("*compose"===r.ops[0].origin){for(;t.length>0;){var n=t.pop();if("*compose"!==n.ops[0].origin||!a(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var o=0;o<r.ops.length;o++)r.ops[o].from=n.ops[o].from,r.ops[o].to=n.ops[o].to,r.ops[o].text=n.ops[o].text.concat(r.ops[o].text)}e.unshift(r)}else e.unshift(r)}return e}(t)},S=function(t){return t=p(t,1),t=function(t){for(var e=0;e<t.length;e++)if("crs"in t[e]){t[e].ops=[];for(var r=0;r<t[e].crs.length;r++)t[e].ops.push({from:t[e].crs[r].anchor,to:t[e].crs[r].head,origin:"+move",text:[""],removed:[""]});delete t[e].crs}return t}(t=p(t,-1))},C=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("+input"===r.ops[0].origin){for(;t.length>0;){var n=t.pop();if("+input"!==n.ops[0].origin||!d(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var o=0;o<r.ops.length;o++)r.ops[o].from=n.ops[o].from,r.ops[o].to=n.ops[o].to,r.ops[o].text=n.ops[o].text.concat(r.ops[o].text)}r=b(r),e.unshift(r)}else e.unshift(r)}return e}(t)},I=function(t){return t=function(t){for(var e=0;e<t.length;e++)if("crs"in t[e]&&t[e].combo>1){t[e].ops=[];for(var r=0;r<t[e].crs.length;r++)t[e].ops.push({from:t[e].crs[r].anchor,to:t[e].crs[r].anchor,origin:"select",text:[""],removed:[""],select:O(t[e].crs[r].heads)});delete t[e].crs}return t}(t=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var e=[];t.length>0;){var r=g(t.pop());if("crs"in r){for(;t.length>0;){var n=g(t.pop());if(!("crs"in n&&_(n,r))){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var o=0;o<r.crs.length;o++)"heads"in r.crs[o]?r.crs[o].heads.unshift(n.crs[o].head):r.crs[o].heads=[n.crs[o].head,r.crs[o].head]}e.unshift(r)}else e.unshift(r)}return e}(t))},z=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("+delete"===r.ops[0].origin){for(;t.length>0;){var n=t.pop();if("+delete"!==n.ops[0].origin||!M(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration;for(var o=0;o<r.ops.length;o++)1===r.combo&&r.ops[o].removed.length>1&&(r.ops[o].removed=[[r.ops[o].from,r.ops[o].to]]),n.ops[o].removed.length>1&&(n.ops[o].removed=[[n.ops[o].from,n.ops[o].to]]),r.ops[o].removed=r.ops[o].removed.concat(n.ops[o].removed),r.ops[o].to=n.ops[o].to;r.combo+=1}r=k(r),e.unshift(r)}else e.unshift(r)}return e}(t)};function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initTime=+new Date,this.lastChangeTime=+new Date,this.lastCursorActivityTime=+new Date,this.operations=[],this.editor=e,this.changesListener=this.changesListener.bind(this),this.cursorActivityListener=this.cursorActivityListener.bind(this)}var e,r,n;return e=t,(r=[{key:"listen",value:function(){this.editor.on("changes",this.changesListener),this.editor.on("cursorActivity",this.cursorActivityListener)}},{key:"getRecords",value:function(){return this.removeRedundantCursorOperations(),this.compressCursorOperations(),this.compressChanges(),JSON.stringify(function(t){for(var e,r=[];t.length>0;){for(var n=t.pop(),a=0;a<n.ops.length;a++)n.ops[a].i=i(n.ops[a]),n.ops[a].a=n.ops[a].text,n.ops[a].d=n.ops[a].removed,n.ops[a].o=o(n.ops[a].origin),1===n.ops[a].a.length&&""===n.ops[a].a[0]&&delete n.ops[a].a,1===n.ops[a].d.length&&""===n.ops[a].d[0]&&delete n.ops[a].d,"select"in n.ops[a]&&(n.ops[a].s=n.ops[a].select,delete n.ops[a].select),1===n.combo&&delete n.ops[a].d,delete n.ops[a].removed,delete n.ops[a].text,delete n.ops[a].from,delete n.ops[a].origin,delete n.ops[a].to;n.t=(e=[n.startTime,n.endTime])[0]===e[1]?e[0]:e,n.l=n.combo,n.o=n.ops,1===n.l&&delete n.l,delete n.ops,delete n.delayDuration,delete n.combo,delete n.startTime,delete n.endTime,r.unshift(n)}return r}(this.operations))}},{key:"getOperationRelativeTime",value:function(){return+new Date-this.initTime}},{key:"getLastChangePause",value:function(){var t=+new Date,e=t-this.lastChangeTime;return this.lastChangeTime=t,e}},{key:"getLastCursorActivityPause",value:function(){var t=+new Date,e=t-this.lastCursorActivityTime;return this.lastCursorActivityTime=t,e}},{key:"changesListener",value:function(t,e){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastChangePause(),ops:e,combo:1})}},{key:"cursorActivityListener",value:function(t){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastCursorActivityPause(),crs:t.listSelections(),combo:1})}},{key:"isPasteOperation",value:function(t){for(var e=0;e<t.ops.length;e++)if("paste"===t.ops[e].origin)return!0;return!1}},{key:"removeRedundantCursorOperations",value:function(){for(var t=this.operations,e=[],r=0;r<t.length;r++)"ops"in t[r]?(e.push(t[r]),r>0&&this.isPasteOperation(t[r])&&(t[r-1].startTime=t[r].startTime+1,t[r-1].endTime=t[r].endTime+1,e.push(t[r-1]))):r<t.length-1&&"ops"in t[r+1]||e.push(t[r]);this.operations=e}},{key:"compressCursorOperations",value:function(){var t=this.operations;t=I(t),t=S(t),this.operations=t}},{key:"compressChanges",value:function(){var t=this.operations;t=C(t),t=z(t),t=P(t),this.operations=t}}])&&E(e.prototype,r),n&&E(e,n),t}();function F(t){for(var e=[],r=0;r<t.length;r++)for(var n=0;n<t[r][1].length;n++)if("number"==typeof t[r][1][n])e.push([t[r][0],t[r][1][n]]);else{var o=t[r][1][n][0]<t[r][1][n][1]?1:-1,i=t[r][1][n][0];for(e.push([t[r][0],i]);i!==t[r][1][n][1];)i+=o,e.push([t[r][0],i])}return e}var R=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],cursorOnly:!1};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({a:null,i:null});for(var u=0;u<t.o.length;u++)o.o[u].a=t.o[u].a[e],o.o[u].i=[i[u][0],i[u][1]],i[u][1]+=t.o[u].a[e].length;return o},U=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],cursorOnly:!0};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({i:null});for(var u=0;u<t.o.length;u++){var c=i[u][0][0],s=i[u][0][1]+(i[u][1][1]-i[u][0][1])/(t.l-1)*e;o.o[u].i=[c,s]}return o},B=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],cursorOnly:!1};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({a:null,i:null});for(var u=0;u<t.o.length;u++)o.o[u].a=t.o[u].a[e],o.o[u].i=[i[u][0],i[u][1]],"\n"!==o.o[u].a?i[u][1]++:(i[u][0]++,i[u][1]=0);return o},V=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],cursorOnly:!0};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({i:null});for(var u=0;u<t.o.length;u++){var c=[t.o[u].i[0],t.o[u].i[1]],s=F(t.o[u].s),f=[s[e][0],s[e][1]];o.o[u].i=[c,f]}return o},$=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],cursorOnly:!1};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i[1]),o.o.push({i:null});for(var u=0;u<t.o.length;u++){var c=t.o[u].d.pop();"number"==typeof c[0]?(o.o[u].i=[[i[u][0],i[u][1]-c[0]],[i[u][0],i[u][1]]],i[u][1]-=c[0],c[1]-1>0&&t.o[u].d.push([c[0],c[1]-1])):(o.o[u].i=[[c[0][0],c[0][1]],[c[1][0],c[1][1]]],t.o[u].i[1]=[c[0][0],c[0][1]])}return o};function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var W=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.timer=0,this.operations=[],this.editor=e}var e,r,n;return e=t,(r=[{key:"addOperation",value:function(t){var e=this.parseOperations(t);this.operations=this.operations.concat(e),this.playChanges()}},{key:"isAutoIndent",value:function(t){return"i"===t.o&&""===t.a}},{key:"playChanges",value:function(){var t=this;this.editor.focus();var e=this.operations;if(e.length>0){this.timer=e[0].t;for(var r=function(){var r=e.shift();setTimeout(function(){t.playChange(t.editor,r)},r.t-t.timer)};e.length>0;)r()}}},{key:"playChange",value:function(t,e){for(var r=0;r<e.o.length;r++){var n=this.insertionText(e.o[r]),o=e.o[r].i;"number"==typeof o[0]&&(o=[o,o]),this.isAutoIndent(e.o[r])||(0===r?t.setSelection({line:o[0][0],ch:o[0][1]},{line:o[1][0],ch:o[1][1]}):t.addSelection({line:o[0][0],ch:o[0][1]},{line:o[1][0],ch:o[1][1]})),e.cursorOnly||t.replaceRange(n,{line:o[0][0],ch:o[0][1]},{line:o[1][0],ch:o[1][1]})}}},{key:"insertionText",value:function(t){var e="";return"string"==typeof t.a?e=t.a:"a"in t&&(e=t.a.join("\n")),e}},{key:"classifyOperation",value:function(t){return t.cursorOnly=!1,"o"!==t.o[0].o&&"l"!==t.o[0].o||(t.cursorOnly=!0),t}},{key:"parseOperations",value:function(t){t=JSON.parse(t);var e=[],r=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var u=i.value;if("l"in(u=this.classifyOperation(u)))for(var c=0;c<u.l;c++)"i"===u.o[0].o?e.push(B(u,c)):"c"===u.o[0].o?e.push(R(u,c)):"d"===u.o[0].o?e.push($(u,c)):"o"===u.o[0].o?e.push(U(u,c)):"l"===u.o[0].o&&e.push(V(u,c));else e.push(u)}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return console.info(e),e}}])&&N(e.prototype,r),n&&N(e,n),t}(),J=CodeMirror.fromTextArea(document.getElementById("editor-record"),{mode:"javascript"}),q=new L(J),G="";q.listen(),document.getElementById("record").onclick=function(){G=q.getRecords(),console.log(JSON.parse(G))},document.getElementById("play").onclick=function(){H.addOperation(G)};var H=new W(CodeMirror.fromTextArea(document.getElementById("editor-play"),{readOnly:!0,mode:"javascript"}));J.setValue('var tes;\nlet a = "\\n\\nLOL";')}]);