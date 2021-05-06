(function () {function q(e,t){return D(e)||C(e,t)||B(e,t)||z()}function z(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,u=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);c=!0);}catch(i){a=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return u}}function D(e){if(Array.isArray(e))return e}var j,x,E=false;function F(){if(E)return;E=true;x={};!function(e,t,n){if(e){for(var r,i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},o={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},a={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";","\"":"'","<":",",">":".","?":"/","|":"\\"},c={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},s=1;s<20;++s)i[111+s]="f"+s;for(s=0;s<=9;++s)i[s+96]=s.toString();d.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},d.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},d.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},d.prototype.reset=function(){return this._callbacks={},this._directMap={},this},d.prototype.stopCallback=function(e,n){if((" "+n.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function e(n,r){return null!==n&&n!==t&&(n===r||e(n.parentNode,r))}(n,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var r=e.composedPath()[0];r!==e.target&&(n=r)}return"INPUT"==n.tagName||"SELECT"==n.tagName||"TEXTAREA"==n.tagName||n.isContentEditable},d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},d.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);r=null},d.init=function(){var e=d(t);for(var n in e)"_"!==n.charAt(0)&&(d[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n))},d.init(),e.Mousetrap=d,x&&(x=d),"function"==typeof j&&j.amd&&j(function(){return d})}function l(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function u(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return i[e.which]?i[e.which]:o[e.which]?o[e.which]:String.fromCharCode(e.which).toLowerCase()}function f(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function p(e,t,n){return n||(n=function(){if(!r)for(var e in r={},i)e>95&&e<112||i.hasOwnProperty(e)&&(r[i[e]]=e);return r}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function h(e,t){var n,r,i,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<n.length;++i)r=n[i],c[r]&&(r=c[r]),t&&"keypress"!=t&&a[r]&&(r=a[r],o.push("shift")),f(r)&&o.push(r);return{key:r,modifiers:o,action:t=p(r,o,t)}}function d(e){var n=this;if(e=e||t,!(n instanceof d))return new d(e);n.target=e,n._callbacks={},n._directMap={};var r,i={},o=!1,a=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in i)e[t]?n=!0:i[t]=0;n||(c=!1)}function p(e,t,r,o,a,c){var s,l,u,p,h=[],d=r.type;if(!n._callbacks[e])return[];for("keyup"==d&&f(e)&&(t=[e]),s=0;s<n._callbacks[e].length;++s)if(l=n._callbacks[e][s],(o||!l.seq||i[l.seq]==l.level)&&d==l.action&&("keypress"==d&&!r.metaKey&&!r.ctrlKey||(u=t,p=l.modifiers,u.sort().join(",")===p.sort().join(",")))){var y=!o&&l.combo==a,m=o&&l.seq==o&&l.level==c;(y||m)&&n._callbacks[e].splice(s,1),h.push(l)}return h}function y(e,t,r,i){n.stopCallback(t,t.target||t.srcElement,r,i)||!1===e(t,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(t),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(t))}function m(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=u(e);t&&("keyup"!=e.type||o!==t?n.handleKey(t,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function k(e,t,n,a){function l(t){return function(){c=t,++i[e],clearTimeout(r),r=setTimeout(s,1e3)}}function f(t){y(n,t,e),"keyup"!==a&&(o=u(t)),setTimeout(s,10)}i[e]=0;for(var p=0;p<t.length;++p){var d=p+1===t.length?f:l(a||h(t[p+1]).action);v(t[p],d,a,e,p)}}function v(e,t,r,i,o){n._directMap[e+":"+r]=t;var a,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?k(e,c,t,r):(a=h(e,r),n._callbacks[a.key]=n._callbacks[a.key]||[],p(a.key,a.modifiers,{type:a.action},i,e,o),n._callbacks[a.key][i?"unshift":"push"]({callback:t,modifiers:a.modifiers,action:a.action,seq:i,level:o,combo:e}))}n._handleKey=function(e,t,n){var r,i=p(e,t,n),o={},l=0,u=!1;for(r=0;r<i.length;++r)i[r].seq&&(l=Math.max(l,i[r].level));for(r=0;r<i.length;++r)if(i[r].seq){if(i[r].level!=l)continue;u=!0,o[i[r].seq]=1,y(i[r].callback,n,i[r].combo,i[r].seq)}else u||y(i[r].callback,n,i[r].combo);var h="keypress"==n.type&&a;n.type!=c||f(e)||h||s(o),a=u&&"keydown"==n.type},n._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)v(e[r],t,n)},l(e,"keypress",m),l(e,"keydown",m),l(e,"keyup",m)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}!function(){var e=(F(),x),t={showCommentaryKey:{key:"space",cb:function(){d(),b()},getElems:function(){return document.querySelectorAll(".commentary-button,.bottom-navs__long-nav")}},pressNextArrowButtonKey:{key:"g",cb:function(){$()},getElems:null},pressKnownButtonKey:{key:"k",cb:function(){v(),p()},getElems:function(){return document.querySelectorAll(".choice-button.is-known,.bottom-navs__short-nav--right a")}},pressUnknownButtonKey:{key:"j",cb:function(){y(),h()},getElems:function(){return document.querySelectorAll(".choice-button.is-unknown,.bottom-navs__short-nav--left a")}},pressExampleButtonKey:{key:"1",cb:function(){o(),i()},getElems:function(){return[n("\u4F8B\u6587"),n("\u82F1\u2192\u65E5")]}},pressWordButtonKey:{key:"2",cb:function(){c(),l()},getElems:function(){return[n("\u5358\u8A9E"),n("\u65E5\u2192\u82F1")]}},pressExampleJaButtonKey:{key:"3",cb:function(){u(),s()},getElems:function(){return[n("\u4F8B\u6587\u8A33"),n("\u97F3\u2192\u65E5")]}},pressWordJaButtonKey:{key:"4",cb:function(){a(),m()},getElems:function(){return[n("\u5358\u8A9E\u8A33"),n("\u7A74\u57CB\u3081")]}},playAudioKey:{key:"p",cb:function(){return f()},getElems:null},pressAnswer1:{key:"a",cb:function(){return g(1)},getElems:function(){return[k(1)]}},pressAnswer2:{key:"s",cb:function(){return g(2)},getElems:function(){return[k(2)]}},pressAnswer3:{key:"d",cb:function(){return g(3)},getElems:function(){return[k(3)]}},pressAnswer4:{key:"f",cb:function(){return g(4)},getElems:function(){return[k(4)]}},pressClose:{key:"x",cb:function(){return A()},getElems:function(){return document.querySelectorAll(".exam-header .exam-header-main>a")}}},n=function(e){var t=null;return Array.from(document.querySelectorAll(".change-phrase-mode-btn a,.change-mode-btns a")).forEach(function(n){var r;(null==(r=null==n?void 0:n.textContent)?void 0:r.trim().split(" ")[0])===e&&(t=n)}),t},r=function(e){var t;return null===(t=n(e))||void 0===t?void 0:t.click()},o=function(){return r("\u4F8B\u6587")},u=function(){return r("\u4F8B\u6587\u8A33")},c=function(){return r("\u5358\u8A9E")},a=function(){return r("\u5358\u8A9E\u8A33")},i=function(){return r("\u82F1\u2192\u65E5")},l=function(){return r("\u65E5\u2192\u82F1")},s=function(){return r("\u97F3\u2192\u65E5")},m=function(){return r("\u7A74\u57CB\u3081")},f=function(){var e;return null===(e=document.querySelector(".speaker-button-component"))||void 0===e?void 0:e.click()},d=function(){var e;return null===(e=document.querySelector(".commentary-button"))||void 0===e?void 0:e.click()},v=function(){var e;return null===(e=document.querySelector(".choice-button.is-known"))||void 0===e?void 0:e.click()},y=function(){var e;return null===(e=document.querySelector(".choice-button.is-unknown"))||void 0===e?void 0:e.click()},b=function(){var e;return null===(e=document.querySelector(".bottom-navs__long-nav"))||void 0===e?void 0:e.click()},p=function(){var e;return null===(e=document.querySelector(".bottom-navs__short-nav--right a"))||void 0===e?void 0:e.click()},h=function(){var e;return null===(e=document.querySelector(".bottom-navs__short-nav--left a"))||void 0===e?void 0:e.click()},$=function(){var e;return null===(e=document.querySelector(".arrow-button-component.is-right"))||void 0===e?void 0:e.click()},k=function(e){var t=Array.from(document.querySelectorAll(".selection-button-wrapper button>span,.answer-area .button-content a"));return t.length<4?null:t[e-1]},g=function(e){var t;return null===(t=k(e))||void 0===t?void 0:t.click()},A=function(){var e;return null===(e=document.querySelector(".exam-header .exam-header-main>a"))||void 0===e?void 0:e.click()},_=function(){var e,t=document.querySelector(".commentary-area,.answer-check");if(null!==t&&!t.dataset.searched){t.dataset.searched="true";var n,r,o,u=null===(e=document.querySelector(".marksheet-answer__paragraph,.marksheet-answer__word").textContent)||void 0===e?void 0:e.trim();if(location.href.includes("part-five-test"))u=null===(n=document.querySelector(".marksheet-answer-body__body.is-correct"))||void 0===n?void 0:null===(r=n.textContent)||void 0===r?void 0:null===(o=r.trim().split("\n").slice(-1)[0])||void 0===o?void 0:o.trim();navigator.clipboard.writeText(u)}},S=function(){!function(){var n=function(){return document.querySelector("body")};if(!n().dataset.enableKeyShortCut){n().dataset.enableKeyShortCut="true";for(var r=function(){var t=q(u[o],2),n=(t[0],t[1]),r=n.key;e.bind(r,function(){return n.cb()})},o=0,u=Object.entries(t);o<u.length;o++)r()}}();for(var n=function(){var e=q(o[r],2),t=(e[0],e[1]),n=t.getElems;if(!n)return"continue";n().forEach(function(e){return function(e,t){if(e){var n=null==e?void 0:e.textContent;/\[[0-9A-Z]+\]/.test(n)||(Array.from(e.classList).includes("button-text")?e.insertAdjacentHTML("beforeend","<span>[".concat(t.toUpperCase(),"]</span>")):e.textContent="".concat(n," [").concat(t.toUpperCase(),"]"))}}(e,t.key)})},r=0,o=Object.entries(t);r<o.length;r++)n()};!function e(){setTimeout(function(){_(),S(),e()},300)}()}();})();