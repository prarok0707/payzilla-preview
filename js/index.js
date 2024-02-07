!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,()=>(()=>{"use strict";var e,t={};e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});const o="scrolled",r="hidden",s="visible",a=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},l=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(a);if(a(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||a(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var o=t.querySelectorAll(e);return Array.prototype.slice.call(o)}catch(e){}return[]};function v(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;var t;if(6===e.length)return(t=b())[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t;throw new RangeError("Expected array with either 6 or 16 values.")}function b(){for(var e=[],t=0;t<16;t++)e.push(t%5==0?1:0);return e}function F(e,t){for(var n=v(e),i=v(t),o=[],r=0;r<4;r++)for(var s=[n[r],n[r+4],n[r+8],n[r+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[1+c],i[2+c],i[3+c]];o[r+c]=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3]}return o}function w(e,t){var n=b();return n[0]=e,n[5]="number"==typeof t?t:e,n}n=Date.now();var n,i=function(e){var t=Date.now();16<t-n?e(n=t):setTimeout(function(){return i(e)},0)};const N=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||i;function c(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}var d={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function u(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(u(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t,n=[],i=arguments.length-1;0<i--;)n[i]=arguments[i+1];this.constructor.debug&&console&&(t="%cScrollReveal: "+e,n.forEach(function(e){return t+="\n — "+e}),console.log(t,"color: #ea654b;"))}function p(){var n=this,t={active:[],stale:[]},i={active:[],stale:[]},o={active:[],stale:[]};try{f(l("[data-sr-id]"),function(e){e=parseInt(e.getAttribute("data-sr-id"));t.active.push(e)})}catch(n){throw n}f(this.store.elements,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===o.active.indexOf(e.containerId)&&o.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===i.active.indexOf(e.sequence.id)&&i.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===o.active.indexOf(e.id)&&o.stale.push(e.id)}),f(o.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.sequences[e]})}m={},y=document.documentElement.style,z.clearCache=function(){return m={}};var m,y,E=z;function z(e,t){if(void 0===t&&(t=y),e&&"string"==typeof e){if(m[e])return m[e];if("string"==typeof t[e])return m[e]=e;if("string"==typeof t["-webkit-"+e])return m[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}function C(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,o={},r=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=r?r.map(function(e){return e.trim()}).join("; ")+";":"",o.generated=r.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?o.computed:r.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,r=parseFloat(t.opacity),l=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),r={computed:r!==l?"opacity: "+r+";":"",generated:r!==l?"opacity: "+l+";":""},l=[];if(parseFloat(i.distance)){var d="top"===i.origin||"bottom"===i.origin?"Y":"X",u=i.distance,f=(u="top"!==i.origin&&"left"!==i.origin?u:/^-/.test(u)?u.substr(1):"-"+u).match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),h=f[0];switch(f[1]){case"em":u=parseInt(t.fontSize)*h;break;case"px":u=h;break;case"%":u="Y"==d?e.node.getBoundingClientRect().height*h/100:e.node.getBoundingClientRect().width*h/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l.push("Y"==d?(f=u,(s=b())[13]=f,s):(f=u,(s=b())[12]=f,s))}i.rotate.x&&l.push((f=i.rotate.x,a=Math.PI/180*f,(c=b())[5]=c[10]=Math.cos(a),c[6]=c[9]=Math.sin(a),c[9]*=-1,c)),i.rotate.y&&l.push((a=i.rotate.y,a=Math.PI/180*a,(c=b())[0]=c[10]=Math.cos(a),c[2]=c[8]=Math.sin(a),c[2]*=-1,c)),i.rotate.z&&l.push((g=i.rotate.z,g=Math.PI/180*g,(p=b())[0]=p[5]=Math.cos(g),p[1]=p[4]=Math.sin(g),p[4]*=-1,p)),1!==i.scale&&(0===i.scale?l.push(w(2e-4)):l.push(w(i.scale)));var p,m,y,g={},l=(l.length?(g.property=E("transform"),g.computed={raw:t[g.property],matrix:function(e){if("string"==typeof e){e=e.match(/matrix(3d)?\(([^)]+)\)/);if(e)return v(e[2].split(", ").map(parseFloat))}return b()}(t[g.property])},l.unshift(g.computed.matrix),p=l.reduce(F),g.generated={initial:g.property+": matrix3d("+p.join(", ")+");",final:g.property+": matrix3d("+g.computed.matrix.join(", ")+");"}):g.generated={initial:"",final:""},{});return r.generated||g.generated.initial?(l.property=E("transition"),l.computed=t[l.property],l.fragments=[],y=i.delay,m=i.duration,i=i.easing,r.generated&&l.fragments.push({delayed:"opacity "+m/1e3+"s "+i+" "+y/1e3+"s",instant:"opacity "+m/1e3+"s "+i+" 0s"}),g.generated.initial&&l.fragments.push({delayed:g.property+" "+m/1e3+"s "+i+" "+y/1e3+"s",instant:g.property+" "+m/1e3+"s "+i+" 0s"}),l.computed&&!l.computed.match(/all 0s|none 0s/)&&l.fragments.unshift({delayed:l.computed,instant:l.computed}),y=l.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""}),l.generated={delayed:l.property+": "+y.delayed+";",instant:l.property+": "+y.instant+";"}):l.generated={delayed:"",instant:""},{inline:o,opacity:r,position:n,transform:g,transition:l}}function g(n,e){e.split(";").forEach(function(e){var e=e.split(":"),t=e[0],e=e.slice(1);t&&e&&(n.style[t.trim()]=e.join(":"))})}function x(e){var i,o=this;try{f(l(e),function(e){var t,n=e.getAttribute("data-sr-id");null!==n&&(i=!0,(t=o.store.elements[n]).callbackTimer&&window.clearTimeout(t.callbackTimer.clock),g(t.node,t.styles.inline.generated),e.removeAttribute("data-sr-id"),delete o.store.elements[n])})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{p.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function j(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(u(n))return f(e,function(e){f(e,function(e,t){u(e)?(n[t]&&u(n[t])||(n[t]={}),j(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function T(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}D=0;var D,O=function(){return D++};function B(){var t=this;p.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),g(e.node,t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){e=e.node===document.documentElement?window:e.node;e.addEventListener("scroll",t.delegate),e.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function L(e,t){var n=(t=void 0===t?{}:t).pristine||this.pristine,n="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||i?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];n.push(t?e.styles.transition.generated.delayed:e.styles.transition.generated.instant),e.revealed=e.seen=!0,g(e.node,n.filter(function(e){return""!==e}).join(" ")),W.call(this,e,t)}.call(this,e,n):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,g(e.node,t.filter(function(e){return""!==e}).join(" ")),W.call(this,e)}.call(this,e):void 0}function W(e,t){var n=this,t=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,r=0;e.callbackTimer&&(r=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&x.call(n,e.node)},t-r)}}function Y(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return L.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var o=new $(n,"visible",this.store),r=new $(n,"revealed",this.store);if(n.models={visible:o,revealed:r},!r.body.length){var s=n.members[o.body[0]],s=this.store.elements[s];if(s)return _.call(this,n,o.body[0],-1,t),_.call(this,n,o.body[0],1,t),L.call(this,s,{reveal:!0,pristine:t})}return!n.blocked.head&&i===[].concat(r.head).pop()&&i>=[].concat(o.body).shift()?(_.call(this,n,i,-1,t),L.call(this,e,{reveal:!0,pristine:t})):!n.blocked.foot&&i===[].concat(r.foot).shift()&&i<=[].concat(o.body).pop()?(_.call(this,n,i,1,t),L.call(this,e,{reveal:!0,pristine:t})):void 0}}function H(e){e=Math.abs(e);if(isNaN(e))throw new RangeError("Invalid sequence interval.");this.id=O(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function $(e,n,i){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){e=i.elements[e];e&&e[n]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){e=i.elements[e];e&&!e[n]&&(t<o.body[0]?o.head:o.foot).push(t)})}function _(e,t,n,i){var o=this,r=["head",null,"foot"][1+n],t=e.members[t+n],s=this.store.elements[t];e.blocked[r]=!0,setTimeout(function(){e.blocked[r]=!1,s&&Y.call(o,s,i)},e.interval)}function G(e,r,t){var s=this;void 0===t&&(t=!1);var a,c=[],n=(r=void 0===r?{}:r).interval||d.interval;try{n&&(a=new H(n));var i=l(e);if(!i.length)throw new Error("Invalid reveal target.");var o=i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id"),o=(i?(j(n,s.store.elements[i]),g(n.node,n.styles.inline.computed)):(n.id=O(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1),j({},n.config||s.defaults,r));if(!o.mobile&&T()||!o.desktop&&!T())return i&&x.call(s,n),e;i=l(o.container)[0];if(i)return i.contains(t)&&(null===(t=function(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(i,c,s.store.containers))&&(t=O(),c.push({id:t,node:i})),n.config=o,n.containerId=t,n.styles=C(n),a&&(n.sequence={id:a.id,index:a.members.length},a.members.push(n.id)),e.push(n)),e;throw new Error("Invalid container.")},[]);f(o,function(e){(s.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(c,function(e){s.store.containers[e.id]={id:e.id,node:e.node}}),a&&(this.store.sequences[a.id]=a),!0!==t&&(this.store.history.push({target:e,options:r}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(B.bind(this),0))}var k,A,q,P,M,S,R,K,U=Math.sign||function(e){return(0<e)-(e<0)||+e};function X(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,t=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,r=e.node;isNaN(r.offsetTop)||(i+=r.offsetTop),isNaN(r.offsetLeft)||(o+=r.offsetLeft),r=r.offsetParent;);return{bounds:{top:i,right:o+t,bottom:i+n,left:o},height:n,width:t}}function J(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),N(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=X.call(i,e,!0));var t=function(e){var t,e=e.node===document.documentElement?(t=window.pageYOffset,window.pageXOffset):(t=e.node.scrollTop,e.node.scrollLeft);return{top:t,left:e}}.call(i,e);e.scroll&&(e.direction={x:U(t.left-e.scroll.left),y:U(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){!n&&void 0!==e.geometry||(e.geometry=X.call(i,e)),e.visible=function(e){var t,n,i,o,r,s,a,c,l=this.store.containers[(e=void 0===e?{}:e).containerId];if(l)return r=Math.max(0,Math.min(1,e.config.viewFactor)),t=e.config.viewOffset,n=e.geometry.bounds.top+e.geometry.height*r,i=e.geometry.bounds.right-e.geometry.width*r,o=e.geometry.bounds.bottom-e.geometry.height*r,r=e.geometry.bounds.left+e.geometry.width*r,s=l.geometry.bounds.top+l.scroll.top+t.top,a=l.geometry.bounds.right+l.scroll.left-t.right,c=l.geometry.bounds.bottom+l.scroll.top-t.bottom,l=l.geometry.bounds.left+l.scroll.left+t.left,n<c&&l<i&&s<o&&r<a||"fixed"===e.styles.position}.call(i,e)}),f(t,function(e){(e.sequence?Y:L).call(i,e)}),i.pristine=!1})}function I(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==I.prototype)return new I(e);if(!I.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),c();try{t=j({},S||d,e)}catch(e){return h.call(this,"Invalid configuration.",e.message),c()}try{if(!l(t.container)[0])throw new Error("Invalid container.")}catch(e){return h.call(this,e.message),c()}return!(S=t).mobile&&T()||!S.desktop&&!T()?(h.call(this,"This device is disabled.","desktop: "+S.desktop,"mobile: "+S.mobile),c()):(document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"}),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,k=k||J.bind(this),A=A||function(){var t=this;f(this.store.elements,function(e){g(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){e=e.node===document.documentElement?window:e.node;e.removeEventListener("scroll",t.delegate),e.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),q=q||G.bind(this),P=P||x.bind(this),M=M||function(){var t=this;f(this.store.history,function(e){G.call(t,e.target,e.options,!0)}),B.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return k}}),Object.defineProperty(this,"destroy",{get:function(){return A}}),Object.defineProperty(this,"reveal",{get:function(){return q}}),Object.defineProperty(this,"clean",{get:function(){return P}}),Object.defineProperty(this,"sync",{get:function(){return M}}),Object.defineProperty(this,"defaults",{get:function(){return S}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),K=K||this)}I.isSupported=function(){return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e},Object.defineProperty(I,"debug",{get:function(){return R||!1},set:function(e){return R="boolean"==typeof e?e:R}}),I();const Q=I;return document.addEventListener("DOMContentLoaded",e=>{{const n=document.querySelector("[".concat("header","]"));if(n){const i=n.offsetHeight;let t=0;window.addEventListener("scroll",()=>{var e=window.scrollY;e<=0?n.classList.remove(o):n.classList.add(o),e-t>=i?(n.classList.add(r),t=e):t-e>=i&&(n.classList.remove(r),t=e)})}}var t;(t=document.querySelector("[".concat("data-dev-shopping","]")))&&(t=t.querySelectorAll("[".concat("data-dev-shopping-item","]"))).length&&t.forEach(i=>{i.querySelectorAll("[".concat("data-dev-shopping-next","]")).forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();{const t=(e=i).nextElementSibling,n=t.querySelector("[".concat("data-dev-shopping-push","]"));t&&(e.classList.remove(s),t.classList.add(s),n)&&setTimeout(()=>{n.classList.add(s)},500)}})})}),(t=Q({viewFactor:.5})).reveal(".header__logo",{opacity:null,scale:1.1}),t.reveal(".main__embed",{opacity:null,distance:"20px",origin:"top"}),t.reveal(".main__title",{opacity:.8}),t.reveal(".main__subtitle",{opacity:null,distance:"30px",origin:"bottom"}),t.reveal(".statistics__item",{interval:300,distance:"50px",origin:"left"}),t.reveal(".payments__logos",{distance:"50px",origin:"left"}),t.reveal(".payments__main-logo",{rotate:{z:50}}),t.reveal(".payments__shopping",{viewFactor:.2,distance:"50px",origin:"right"}),t.reveal(".steps__item",{interval:300,scale:.8}),t.reveal(".technology__item",{interval:300,distance:"50px",origin:"right"}),t.reveal(".technology__image",{interval:300,distance:"50px",origin:"right"}),t.reveal(".technology__push",{distance:"50px",origin:"top"}),t.reveal(".features__item",{interval:300,distance:"50px",origin:"top"}),t.reveal(".index__started",{viewFactor:.2})}),t})());