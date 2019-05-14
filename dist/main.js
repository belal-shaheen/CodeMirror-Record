!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function(e,t){return function(){return e.apply(t,arguments)}},n={"*compose":"c","+delete":"d","+input":"i",markText:"k",select:"l","*mouse":"m","*rename":"n","+move":"o",paste:"p",drag:"r",setValue:"s",cut:"x"},i=function(e){return n[e]};function s(e,t){if(e.ops.length!==t.ops.length)return!1;for(var o=0;o<t.ops.length;o++){if(t.ops[o].from.line!==t.ops[o].to.line||e.ops[o].from.line!==e.ops[o].to.line||t.ops[o].from.ch!==t.ops[o].to.ch||e.ops[o].from.ch!==e.ops[o].to.ch)return!1;if(e.ops[o].from.ch+e.ops[o].text[0].length!==t.ops[o].from.ch)return!1}return!0}var a={acceptableMinOperationDelay:1200,acceptableMinCursorMoveDelay:600};function l(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e.crs.length!==t.crs.length)return!1;if(t.delayDuration>=a.acceptableMinCursorMoveDelay)return!1;for(var r=0;r<t.crs.length;r++){if(e.crs[r].anchor.line!==e.crs[r].head.line||e.crs[r].anchor.ch!==e.crs[r].head.ch)return!1;if(e.crs[r].anchor.ch+o!==t.crs[r].anchor.ch)return!1;if(e.crs[r].anchor.line!==t.crs[r].anchor.line)return!1}return!0}function u(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=[];e.length>0;){var r=e.pop();if("crs"in r){for(;e.length>0;){var n=e.pop();if(!("crs"in n&&l(n,r,t))){e.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var i=0;i<r.crs.length;i++)r.crs[i].anchor=n.crs[i].anchor}o.unshift(r)}else o.unshift(r)}return o}function h(e,t){if(e.ops.length!==t.ops.length)return!1;if(t.delayDuration>=a.acceptableMinOperationDelay)return!1;for(var o=0;o<t.ops.length;o++){if(t.ops[o].from.line!==t.ops[o].to.line||e.ops[o].from.line!==e.ops[o].to.line||t.ops[o].from.ch!==t.ops[o].to.ch||e.ops[o].from.ch!==e.ops[o].to.ch)return!1;if(e.ops[o].from.ch+1!==t.ops[o].from.ch&&(e.ops[o].from.line+1!==t.ops[o].from.line||0!==t.ops[o].from.ch))return!1}return!0}function c(e){for(var t=0;t<e.ops.length;t++){for(var o="",r=0;r<e.ops[t].text.length;r++)""!==e.ops[t].text[r]?o+=e.ops[t].text[r]:r+1<e.ops[t].text.length&&""===e.ops[t].text[r+1]&&(o+="\n",r++);e.ops[t].text=o}return e}function p(e,t){if(e.crs.length!==t.crs.length)return!1;for(var o=0;o<t.crs.length;o++){if(t.crs[o].anchor.line===t.crs[o].head.line&&t.crs[o].anchor.ch===t.crs[o].head.ch)return!1;if(e.crs[o].anchor.line!==t.crs[o].anchor.line||e.crs[o].anchor.ch!==t.crs[o].anchor.ch)return!1}return!0}function f(e){for(var t=[],o=-1;e.length>0;){var r=e.shift();o!==r.line&&(t.push([r.line]),o=r.line),t[t.length-1].push(r.ch)}for(var n=0;n<t.length;n++){var i=t[n].slice(1);i=v(i),i=v(i,-1),t[n]=[t[n][0],i]}return t}function v(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=[];e.length>0;){var r=e.shift();"number"!=typeof r?o.push(r):0===o.length||Array.isArray(o[o.length-1])?o.push({from:r,to:r}):"to"in o[o.length-1]&&(o[o.length-1].to+t!==r?o.push({from:r,to:r}):o[o.length-1].to=r)}for(var n=0;n<o.length;n++)"to"in o[n]&&(o[n].from===o[n].to?o[n]=o[n].from:o[n]=[o[n].from,o[n].to]);return o}function g(e,t){if(e.ops.length!==t.ops.length)return!1;if(t.delayDuration>=a.acceptableMinOperationDelay)return!1;for(var o=0;o<t.ops.length;o++)if(e.ops[o].from.ch!==t.ops[o].to.ch||e.ops[o].from.line!==t.ops[o].to.line)return!1;return!0}function m(e){if(1===e.combo)return e;for(var t=0;t<e.ops.length;t++){for(var o=[],r=[];e.ops[t].removed.length>0;){var n=e.ops[t].removed.shift();"string"==typeof n?0===r.length?r.push(n):r[0].length===n.length?r.push(n):(o.push([r[0].length,r.length]),(r=[]).push(n)):(r.length>0&&(o.push([r[0].length,r.length]),r=[]),o.push([[n[0].line,n[0].ch],[n[1].line,n[1].ch]]))}r.length>0&&o.push([r[0].length,r.length]),e.ops[t].removed=o}return e}var d=function(e){return function(e){for(var t=[];e.length>0;){var o=e.pop();if("*compose"===o.ops[0].origin){for(;e.length>0;){var r=e.pop();if("*compose"!==r.ops[0].origin||!s(r,o)){e.push(r);break}o.startTime=r.startTime,o.delayDuration=r.delayDuration,o.combo+=1;for(var n=0;n<o.ops.length;n++)o.ops[n].from=r.ops[n].from,o.ops[n].to=r.ops[n].to,o.ops[n].text=r.ops[n].text.concat(o.ops[n].text)}t.unshift(o)}else t.unshift(o)}return t}(e)},y=function(e){return e=u(e,1),e=function(e){for(var t=0;t<e.length;t++)if("crs"in e[t]){e[t].ops=[];for(var o=0;o<e[t].crs.length;o++)e[t].ops.push({from:e[t].crs[o].anchor,to:e[t].crs[o].head,origin:"+move",text:[""],removed:[""]});delete e[t].crs}return e}(e=u(e,-1))},b=function(e){return function(e){for(var t=[];e.length>0;){var o=e.pop();if("+input"===o.ops[0].origin){for(;e.length>0;){var r=e.pop();if("+input"!==r.ops[0].origin||!h(r,o)){e.push(r);break}o.startTime=r.startTime,o.delayDuration=r.delayDuration,o.combo+=1;for(var n=0;n<o.ops.length;n++)o.ops[n].from=r.ops[n].from,o.ops[n].to=r.ops[n].to,o.ops[n].text=r.ops[n].text.concat(o.ops[n].text)}o=c(o),t.unshift(o)}else t.unshift(o)}return t}(e)},T=function(e){return e=function(e){for(var t=0;t<e.length;t++)if("crs"in e[t]&&e[t].combo>1){e[t].ops=[];for(var o=0;o<e[t].crs.length;o++)e[t].ops.push({from:e[t].crs[o].anchor,to:e[t].crs[o].anchor,origin:"select",text:[""],removed:[""],select:f(e[t].crs[o].heads)});delete e[t].crs}return e}(e=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=[];e.length>0;){var o=e.pop();if("crs"in o){for(;e.length>0;){var r=e.pop();if(!("crs"in r&&p(r,o))){e.push(r);break}o.startTime=r.startTime,o.delayDuration=r.delayDuration,o.combo+=1;for(var n=0;n<o.crs.length;n++)"heads"in o.crs[n]?o.crs[n].heads.unshift(r.crs[n].head):o.crs[n].heads=[r.crs[n].head,o.crs[n].head]}t.unshift(o)}else t.unshift(o)}return t}(e))},O=function(e){return function(e){for(var t=[];e.length>0;){var o=e.pop();if("+delete"===o.ops[0].origin){for(;e.length>0;){var r=e.pop();if("+delete"!==r.ops[0].origin||!g(r,o)){e.push(r);break}o.startTime=r.startTime,o.delayDuration=r.delayDuration;for(var n=0;n<o.ops.length;n++)1===o.combo&&o.ops[n].removed.length>1&&(o.ops[n].removed=[[o.ops[n].from,o.ops[n].to]]),r.ops[n].removed.length>1&&(r.ops[n].removed=[[r.ops[n].from,r.ops[n].to]]),o.ops[n].removed=o.ops[n].removed.concat(r.ops[n].removed),o.ops[n].to=r.ops[n].to;o.combo+=1}o=m(o),t.unshift(o)}else t.unshift(o)}return t}(e)};function x(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initTime=+new Date,this.lastChangeTime=+new Date,this.lastCursorActivityTime=+new Date,this.operations=[],this.editor=t,this.changesListener=r(this.changesListener,this),this.cursorActivityListener=r(this.cursorActivityListener,this)}var t,o,n;return t=e,(o=[{key:"listen",value:function(){this.editor.on("changes",this.changesListener),this.editor.on("cursorActivity",this.cursorActivityListener)}},{key:"getRecords",value:function(){return this.removeRedundantCursorOperations(),this.compressCursorOperations(),this.compressChanges(),JSON.stringify(function(e){for(var t,o,r=[];e.length>0;){for(var n=e.pop(),s=0;s<n.ops.length;s++)n.ops[s].i=(o=n.ops[s]).from.line===o.to.line&&o.from.ch===o.to.ch?[o.from.line,o.from.ch]:[[o.from.line,o.from.ch],[o.to.line,o.to.ch]],n.ops[s].a=n.ops[s].text,n.ops[s].d=n.ops[s].removed,n.ops[s].o=i(n.ops[s].origin),1===n.ops[s].a.length&&""===n.ops[s].a[0]&&delete n.ops[s].a,1===n.ops[s].d.length&&""===n.ops[s].d[0]&&delete n.ops[s].d,"select"in n.ops[s]&&(n.ops[s].s=n.ops[s].select,delete n.ops[s].select),1===n.combo&&delete n.ops[s].d,delete n.ops[s].removed,delete n.ops[s].text,delete n.ops[s].from,delete n.ops[s].origin,delete n.ops[s].to;n.t=(t=[n.startTime,n.endTime])[0]===t[1]?t[0]:t,n.l=n.combo,n.o=n.ops,1===n.l&&delete n.l,delete n.ops,delete n.delayDuration,delete n.combo,delete n.startTime,delete n.endTime,r.unshift(n)}return r}(this.operations))}},{key:"getOperationRelativeTime",value:function(){return+new Date-this.initTime}},{key:"getLastChangePause",value:function(){var e=+new Date,t=e-this.lastChangeTime;return this.lastChangeTime=e,t}},{key:"getLastCursorActivityPause",value:function(){var e=+new Date,t=e-this.lastCursorActivityTime;return this.lastCursorActivityTime=e,t}},{key:"changesListener",value:function(e,t){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastChangePause(),ops:t,combo:1})}},{key:"cursorActivityListener",value:function(e){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastCursorActivityPause(),crs:e.listSelections(),combo:1})}},{key:"removeRedundantCursorOperations",value:function(){for(var e=this.operations,t=[],o=0;o<e.length;o++)o<e.length-1&&"ops"in e[o+1]&&!("ops"in e[o])||t.push(e[o]);this.operations=t}},{key:"compressCursorOperations",value:function(){var e=this.operations;e=T(e),e=y(e),this.operations=e}},{key:"compressChanges",value:function(){var e=this.operations;e=b(e),e=O(e),e=d(e),this.operations=e}}])&&x(t.prototype,o),n&&x(t,n),e}();function C(e){for(var t=[],o=0;o<e.length;o++)for(var r=0;r<e[o][1].length;r++)if("number"==typeof e[o][1][r])t.push([e[o][0],e[o][1][r]]);else{var n=e[o][1][r][0]<e[o][1][r][1]?1:-1,i=e[o][1][r][0];for(t.push([e[o][0],i]);i!==e[o][1][r][1];)i+=n,t.push([e[o][0],i])}return t}var k=function(e,t){var o=e.t[0],r=(e.t[1]-e.t[0])/(e.l-1),n={t:null,o:[]};n.t=Math.floor(o+t*r),t===e.l-1&&(n.t=e.t[1]),n.cursorOnly=!1;for(var i=[],s=0;s<e.o.length;s++)i.push(e.o[s].i),n.o.push({a:null,i:null});for(var a=0;a<e.o.length;a++)n.o[a].a=e.o[a].a[t],n.o[a].i=[i[a][0],i[a][1]],i[a][1]+=e.o[a].a[t].length;return n},w=function(e,t){var o=e.t[0],r=(e.t[1]-e.t[0])/(e.l-1),n={t:null,o:[]};n.t=Math.floor(o+t*r),t===e.l-1&&(n.t=e.t[1]),n.cursorOnly=!0;for(var i=[],s=0;s<e.o.length;s++)i.push(e.o[s].i),n.o.push({i:null});for(var a=0;a<e.o.length;a++){var l=i[a][0][0],u=i[a][0][1]+(i[a][1][1]-i[a][0][1])/(e.l-1)*t;n.o[a].i=[l,u]}return n},M=function(e,t){var o=e.t[0],r=(e.t[1]-e.t[0])/(e.l-1),n={t:null,o:[]};n.t=Math.floor(o+t*r),t===e.l-1&&(n.t=e.t[1]),n.cursorOnly=!1;for(var i=[],s=0;s<e.o.length;s++)i.push(e.o[s].i),n.o.push({a:null,i:null});for(var a=0;a<e.o.length;a++)n.o[a].a=e.o[a].a[t],n.o[a].i=[i[a][0],i[a][1]],"\n"!==n.o[a].a?i[a][1]++:(i[a][0]++,i[a][1]=0);return n},P=function(e,t){var o=e.t[0],r=(e.t[1]-e.t[0])/(e.l-1),n={t:null,o:[]};n.t=Math.floor(o+t*r),t===e.l-1&&(n.t=e.t[1]),n.cursorOnly=!0;for(var i=[],s=0;s<e.o.length;s++)i.push(e.o[s].i),n.o.push({i:null});for(var a=0;a<e.o.length;a++){var l=[e.o[a].i[0],e.o[a].i[1]],u=C(e.o[a].s),h=[u[t][0],u[t][1]];n.o[a].i=[l,h]}return n},A=function(e,t){var o=e.t[0],r=(e.t[1]-e.t[0])/(e.l-1),n={t:null,o:[]};n.t=Math.floor(o+t*r),t===e.l-1&&(n.t=e.t[1]),n.cursorOnly=!1;for(var i=[],s=0;s<e.o.length;s++)i.push(e.o[s].i[1]),n.o.push({i:null});for(var a=0;a<e.o.length;a++){var l=e.o[a].d.pop();"number"==typeof l[0]?(n.o[a].i=[[i[a][0],i[a][1]-l[0]],[i[a][0],i[a][1]]],i[a][1]-=l[0],l[1]-1>0&&e.o[a].d.push([l[0],l[1]-1])):(n.o[a].i=[[l[0][0],l[0][1]],[l[1][0],l[1][1]]],e.o[a].i[1]=[l[0][0],l[0][1]])}return n};function L(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timer=0,this.operations=[],this.proxy=null,this.editor=t}var t,o,r;return t=e,(o=[{key:"addOperation",value:function(e){var t=this.parseOpertaions(e);this.proxy.operations=this.operations.concat(t),this.playNewChanges()}},{key:"listen",value:function(){this.proxy=new Proxy(this,{set:function(e,t,o){return e[t]=o,!0}})}},{key:"playNewChanges",value:function(){var e=this;this.editor.focus();var t=this.operations;if(t.length>0){this.timer=t[0].t;for(var o=function(){var o=t.shift();setTimeout(function(){e.playChange(e.editor,o)},o.t-e.timer)};t.length>0;)o()}}},{key:"playChange",value:function(e,t){for(var o=0;o<t.o.length;o++){var r=this.insertionText(t.o[o]),n=t.o[o].i;"number"==typeof n[0]&&(n=[n,n]),e.setSelection({line:n[0][0],ch:n[0][1]},{line:n[1][0],ch:n[1][1]}),t.cursorOnly||e.replaceRange(r,{line:n[0][0],ch:n[0][1]},{line:n[1][0],ch:n[1][1]})}}},{key:"insertionText",value:function(e){var t="";return"string"==typeof e.a?t=e.a:"a"in e&&(t=e.a.join("\n")),t}},{key:"parseOpertaions",value:function(e){e=JSON.parse(e);var t=[],o=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var a=i.value;if("l"in a)for(var l=0;l<a.l;l++)"i"===a.o[0].o?t.push(M(a,l)):"c"===a.o[0].o?t.push(k(a,l)):"d"===a.o[0].o?t.push(A(a,l)):"o"===a.o[0].o?t.push(w(a,l)):"l"===a.o[0].o&&t.push(P(a,l));else t.push(a)}}catch(e){r=!0,n=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw n}}return t}}])&&L(t.prototype,o),r&&L(t,r),e}();o.d(t,"CodeRecord",function(){return D}),o.d(t,"CodePlay",function(){return j})}]);