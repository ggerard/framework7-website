!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";var t="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,e="undefined"==typeof window?{document:t,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,n=function(t){for(var e=0;e<t.length;e+=1)this[e]=t[e];return this.length=t.length,this};function i(i,r){var o=[],s=0;if(i&&!r&&i instanceof n)return i;if(i)if("string"==typeof i){var a,l,h=i.trim();if(h.indexOf("<")>=0&&h.indexOf(">")>=0){var c="div";for(0===h.indexOf("<li")&&(c="ul"),0===h.indexOf("<tr")&&(c="tbody"),0!==h.indexOf("<td")&&0!==h.indexOf("<th")||(c="tr"),0===h.indexOf("<tbody")&&(c="table"),0===h.indexOf("<option")&&(c="select"),(l=t.createElement(c)).innerHTML=h,s=0;s<l.childNodes.length;s+=1)o.push(l.childNodes[s])}else for(a=r||"#"!==i[0]||i.match(/[ .<>:~]/)?(r||t).querySelectorAll(i.trim()):[t.getElementById(i.trim().split("#")[1])],s=0;s<a.length;s+=1)a[s]&&o.push(a[s])}else if(i.nodeType||i===e||i===t)o.push(i);else if(i.length>0&&i[0].nodeType)for(s=0;s<i.length;s+=1)o.push(i[s]);return new n(o)}function r(t){for(var e=[],n=0;n<t.length;n+=1)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function o(t){return e.requestAnimationFrame?e.requestAnimationFrame(t):e.webkitRequestAnimationFrame?e.webkitRequestAnimationFrame(t):e.setTimeout(t,1e3/60)}i.fn=n.prototype,i.Class=n,i.Dom7=n;var s=Object.freeze({addClass:function(t){if(void 0===t)return this;for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(e[n]);return this},removeClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(e[n]);return this},hasClass:function(t){return!!this[0]&&this[0].classList.contains(t)},toggleClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(e[n]);return this},attr:function(t,e){var n=arguments;if(1===arguments.length&&"string"==typeof t)return this[0]?this[0].getAttribute(t):void 0;for(var i=0;i<this.length;i+=1)if(2===n.length)this[i].setAttribute(t,e);else for(var r in t)this[i][r]=t[r],this[i].setAttribute(r,t[r]);return this},removeAttr:function(t){for(var e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this},prop:function(t,e){var n=arguments;if(1!==arguments.length||"string"!=typeof t){for(var i=0;i<this.length;i+=1)if(2===n.length)this[i][t]=e;else for(var r in t)this[i][r]=t[r];return this}if(this[0])return this[0][t]},data:function(t,e){var n;if(void 0!==e){for(var i=0;i<this.length;i+=1)(n=this[i]).dom7ElementDataStorage||(n.dom7ElementDataStorage={}),n.dom7ElementDataStorage[t]=e;return this}if(n=this[0]){if(n.dom7ElementDataStorage&&t in n.dom7ElementDataStorage)return n.dom7ElementDataStorage[t];var r=n.getAttribute("data-"+t);return r||void 0}},removeData:function(t){for(var e=0;e<this.length;e+=1){var n=this[e];n.dom7ElementDataStorage&&n.dom7ElementDataStorage[t]&&(n.dom7ElementDataStorage[t]=null,delete n.dom7ElementDataStorage[t])}},dataset:function(){var t=this[0];if(t){var e,n={};if(t.dataset)for(var i in t.dataset)n[i]=t.dataset[i];else for(var r=0;r<t.attributes.length;r+=1){var o=t.attributes[r];o.name.indexOf("data-")>=0&&(n[(e=o.name.split("data-")[1],e.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}))]=o.value)}for(var s in n)"false"===n[s]?n[s]=!1:"true"===n[s]?n[s]=!0:parseFloat(n[s])===1*n[s]&&(n[s]*=1);return n}},val:function(t){if(void 0!==t){for(var e=0;e<this.length;e+=1){var n=this[e];if(Array.isArray(t)&&n.multiple&&"select"===n.nodeName.toLowerCase())for(var i=0;i<n.options.length;i+=1)n.options[i].selected=t.indexOf(n.options[i].value)>=0;else n.value=t}return this}if(this[0]){if(this[0].multiple&&"select"===this[0].nodeName.toLowerCase()){for(var r=[],o=0;o<this[0].selectedOptions.length;o+=1)r.push(this[0].selectedOptions[o].value);return r}return this[0].value}},transform:function(t){for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransform=t,n.transform=t}return this},transition:function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransitionDuration=t,n.transitionDuration=t}return this},on:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=e[0],o=e[1],s=e[2],a=e[3];function l(t){var e=t.target;if(e){var n=t.target.dom7EventData||[];if(n.indexOf(t)<0&&n.unshift(t),i(e).is(o))s.apply(e,n);else for(var r=i(e).parents(),a=0;a<r.length;a+=1)i(r[a]).is(o)&&s.apply(r[a],n)}}function h(t){var e=t&&t.target&&t.target.dom7EventData||[];e.indexOf(t)<0&&e.unshift(t),s.apply(this,e)}"function"==typeof e[1]&&(r=(t=e)[0],s=t[1],a=t[2],o=void 0),a||(a=!1);for(var c,f=r.split(" "),u=0;u<this.length;u+=1){var d=this[u];if(o)for(c=0;c<f.length;c+=1){var v=f[c];d.dom7LiveListeners||(d.dom7LiveListeners={}),d.dom7LiveListeners[v]||(d.dom7LiveListeners[v]=[]),d.dom7LiveListeners[v].push({listener:s,proxyListener:l}),d.addEventListener(v,l,a)}else for(c=0;c<f.length;c+=1){var p=f[c];d.dom7Listeners||(d.dom7Listeners={}),d.dom7Listeners[p]||(d.dom7Listeners[p]=[]),d.dom7Listeners[p].push({listener:s,proxyListener:h}),d.addEventListener(p,h,a)}}return this},off:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];"function"==typeof e[1]&&(i=(t=e)[0],o=t[1],s=t[2],r=void 0),s||(s=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var h=a[l],c=0;c<this.length;c+=1){var f=this[c],u=void 0;if(!r&&f.dom7Listeners?u=f.dom7Listeners[h]:r&&f.dom7LiveListeners&&(u=f.dom7LiveListeners[h]),u&&u.length)for(var d=u.length-1;d>=0;d-=1){var v=u[d];o&&v.listener===o?(f.removeEventListener(h,v.proxyListener,s),u.splice(d,1)):o||(f.removeEventListener(h,v.proxyListener,s),u.splice(d,1))}}return this},once:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this,r=e[0],o=e[1],s=e[2],a=e[3];return"function"==typeof e[1]&&(r=(t=e)[0],s=t[1],a=t[2],o=void 0),i.on(r,o,function t(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];s.apply(this,e),i.off(r,o,t,a)},a)},trigger:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];for(var r=n[0].split(" "),o=n[1],s=0;s<r.length;s+=1)for(var a=r[s],l=0;l<this.length;l+=1){var h=this[l],c=void 0;try{c=new e.CustomEvent(a,{detail:o,bubbles:!0,cancelable:!0})}catch(e){(c=t.createEvent("Event")).initEvent(a,!0,!0),c.detail=o}h.dom7EventData=n.filter(function(t,e){return e>0}),h.dispatchEvent(c),h.dom7EventData=[],delete h.dom7EventData}return this},transitionEnd:function(t){var e,n=["webkitTransitionEnd","transitionend"],i=this;function r(o){if(o.target===this)for(t.call(this,o),e=0;e<n.length;e+=1)i.off(n[e],r)}if(t)for(e=0;e<n.length;e+=1)i.on(n[e],r);return this},animationEnd:function(t){var e,n=["webkitAnimationEnd","animationend"],i=this;function r(o){if(o.target===this)for(t.call(this,o),e=0;e<n.length;e+=1)i.off(n[e],r)}if(t)for(e=0;e<n.length;e+=1)i.on(n[e],r);return this},width:function(){return this[0]===e?e.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(t){if(this.length>0){if(t){var e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},height:function(){return this[0]===e?e.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(t){if(this.length>0){if(t){var e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var n=this[0],i=n.getBoundingClientRect(),r=t.body,o=n.clientTop||r.clientTop||0,s=n.clientLeft||r.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:i.top+a-o,left:i.left+l-s}}return null},hide:function(){for(var t=0;t<this.length;t+=1)this[t].style.display="none";return this},show:function(){for(var t=0;t<this.length;t+=1){var n=this[t];"none"===n.style.display&&(n.style.display=""),"none"===e.getComputedStyle(n,null).getPropertyValue("display")&&(n.style.display="block")}return this},styles:function(){return this[0]?e.getComputedStyle(this[0],null):{}},css:function(t,n){var i;if(1===arguments.length){if("string"!=typeof t){for(i=0;i<this.length;i+=1)for(var r in t)this[i].style[r]=t[r];return this}if(this[0])return e.getComputedStyle(this[0],null).getPropertyValue(t)}if(2===arguments.length&&"string"==typeof t){for(i=0;i<this.length;i+=1)this[i].style[t]=n;return this}return this},toArray:function(){for(var t=[],e=0;e<this.length;e+=1)t.push(this[e]);return t},each:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],e,this[e]))return this;return this},forEach:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],this[e],e))return this;return this},filter:function(t){for(var e=[],i=0;i<this.length;i+=1)t.call(this[i],i,this[i])&&e.push(this[i]);return new n(e)},map:function(t){for(var e=[],i=0;i<this.length;i+=1)e.push(t.call(this[i],i,this[i]));return new n(e)},html:function(t){if(void 0===t)return this[0]?this[0].innerHTML:void 0;for(var e=0;e<this.length;e+=1)this[e].innerHTML=t;return this},text:function(t){if(void 0===t)return this[0]?this[0].textContent.trim():null;for(var e=0;e<this.length;e+=1)this[e].textContent=t;return this},is:function(r){var o,s,a=this[0];if(!a||void 0===r)return!1;if("string"==typeof r){if(a.matches)return a.matches(r);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(r);if(a.msMatchesSelector)return a.msMatchesSelector(r);for(o=i(r),s=0;s<o.length;s+=1)if(o[s]===a)return!0;return!1}if(r===t)return a===t;if(r===e)return a===e;if(r.nodeType||r instanceof n){for(o=r.nodeType?[r]:r,s=0;s<o.length;s+=1)if(o[s]===a)return!0;return!1}return!1},indexOf:function(t){for(var e=0;e<this.length;e+=1)if(this[e]===t)return e;return-1},index:function(){var t,e=this[0];if(e){for(t=0;null!==(e=e.previousSibling);)1===e.nodeType&&(t+=1);return t}},eq:function(t){if(void 0===t)return this;var e,i=this.length;return new n(t>i-1?[]:t<0?(e=i+t)<0?[]:[this[e]]:[this[t]])},append:function(){for(var e,i=[],r=arguments.length;r--;)i[r]=arguments[r];for(var o=0;o<i.length;o+=1){e=i[o];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(var l=0;l<e.length;l+=1)this[s].appendChild(e[l]);else this[s].appendChild(e)}return this},appendTo:function(t){return i(t).append(this),this},prepend:function(e){var i,r;for(i=0;i<this.length;i+=1)if("string"==typeof e){var o=t.createElement("div");for(o.innerHTML=e,r=o.childNodes.length-1;r>=0;r-=1)this[i].insertBefore(o.childNodes[r],this[i].childNodes[0])}else if(e instanceof n)for(r=0;r<e.length;r+=1)this[i].insertBefore(e[r],this[i].childNodes[0]);else this[i].insertBefore(e,this[i].childNodes[0]);return this},prependTo:function(t){return i(t).prepend(this),this},insertBefore:function(t){for(var e=i(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0]);else if(e.length>1)for(var r=0;r<e.length;r+=1)e[r].parentNode.insertBefore(this[n].cloneNode(!0),e[r])},insertAfter:function(t){for(var e=i(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0].nextSibling);else if(e.length>1)for(var r=0;r<e.length;r+=1)e[r].parentNode.insertBefore(this[n].cloneNode(!0),e[r].nextSibling)},next:function(t){return this.length>0?t?this[0].nextElementSibling&&i(this[0].nextElementSibling).is(t)?new n([this[0].nextElementSibling]):new n([]):this[0].nextElementSibling?new n([this[0].nextElementSibling]):new n([]):new n([])},nextAll:function(t){var e=[],r=this[0];if(!r)return new n([]);for(;r.nextElementSibling;){var o=r.nextElementSibling;t?i(o).is(t)&&e.push(o):e.push(o),r=o}return new n(e)},prev:function(t){if(this.length>0){var e=this[0];return t?e.previousElementSibling&&i(e.previousElementSibling).is(t)?new n([e.previousElementSibling]):new n([]):e.previousElementSibling?new n([e.previousElementSibling]):new n([])}return new n([])},prevAll:function(t){var e=[],r=this[0];if(!r)return new n([]);for(;r.previousElementSibling;){var o=r.previousElementSibling;t?i(o).is(t)&&e.push(o):e.push(o),r=o}return new n(e)},siblings:function(t){return this.nextAll(t).add(this.prevAll(t))},parent:function(t){for(var e=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(t?i(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return i(r(e))},parents:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var o=this[n].parentNode;o;)t?i(o).is(t)&&e.push(o):e.push(o),o=o.parentNode;return i(r(e))},closest:function(t){var e=this;return void 0===t?new n([]):(e.is(t)||(e=e.parents(t).eq(0)),e)},find:function(t){for(var e=[],i=0;i<this.length;i+=1)for(var r=this[i].querySelectorAll(t),o=0;o<r.length;o+=1)e.push(r[o]);return new n(e)},children:function(t){for(var e=[],o=0;o<this.length;o+=1)for(var s=this[o].childNodes,a=0;a<s.length;a+=1)t?1===s[a].nodeType&&i(s[a]).is(t)&&e.push(s[a]):1===s[a].nodeType&&e.push(s[a]);return new n(r(e))},remove:function(){for(var t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this},detach:function(){return this.remove()},add:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n,r;for(n=0;n<t.length;n+=1){var o=i(t[n]);for(r=0;r<o.length;r+=1)this[this.length]=o[r],this.length+=1}return this},empty:function(){for(var t=0;t<this.length;t+=1){var e=this[t];if(1===e.nodeType){for(var n=0;n<e.childNodes.length;n+=1)e.childNodes[n].parentNode&&e.childNodes[n].parentNode.removeChild(e.childNodes[n]);e.textContent=""}}return this}});var a=Object.freeze({scrollTo:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],s=e[2],a=e[3],l=e[4];return 4===e.length&&"function"==typeof a&&(l=a,i=(t=e)[0],r=t[1],s=t[2],l=t[3],a=t[4]),void 0===a&&(a="swing"),this.each(function(){var t,e,n,h,c,f,u,d,v=this,p=r>0||0===r,g=i>0||0===i;if(void 0===a&&(a="swing"),p&&(t=v.scrollTop,s||(v.scrollTop=r)),g&&(e=v.scrollLeft,s||(v.scrollLeft=i)),s){p&&(n=v.scrollHeight-v.offsetHeight,c=Math.max(Math.min(r,n),0)),g&&(h=v.scrollWidth-v.offsetWidth,f=Math.max(Math.min(i,h),0));var m=null;p&&c===t&&(p=!1),g&&f===e&&(g=!1),o(function n(i){void 0===i&&(i=(new Date).getTime()),null===m&&(m=i);var r,h=Math.max(Math.min((i-m)/s,1),0),y="linear"===a?h:.5-Math.cos(h*Math.PI)/2;p&&(u=t+y*(c-t)),g&&(d=e+y*(f-e)),p&&c>t&&u>=c&&(v.scrollTop=c,r=!0),p&&c<t&&u<=c&&(v.scrollTop=c,r=!0),g&&f>e&&d>=f&&(v.scrollLeft=f,r=!0),g&&f<e&&d<=f&&(v.scrollLeft=f,r=!0),r?l&&l():(p&&(v.scrollTop=u),g&&(v.scrollLeft=d),o(n))})}})},scrollTop:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?this.length>0?this[0].scrollTop:null:this.scrollTo(void 0,i,r,o,s)},scrollLeft:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?this.length>0?this[0].scrollLeft:null:this.scrollTo(i,void 0,r,o,s)}});var l,h,c,f,u=Object.freeze({animate:function(t,n){var i,r=this,s={props:Object.assign({},t),params:Object.assign({duration:300,easing:"swing"},n),elements:r,animating:!1,que:[],easingProgress:function(t,e){return"swing"===t?.5-Math.cos(e*Math.PI)/2:"function"==typeof t?t(e):e},stop:function(){var t;s.frameId&&(t=s.frameId,e.cancelAnimationFrame?e.cancelAnimationFrame(t):e.webkitCancelAnimationFrame?e.webkitCancelAnimationFrame(t):e.clearTimeout(t)),s.animating=!1,s.elements.each(function(t,e){delete e.dom7AnimateInstance}),s.que=[]},done:function(t){if(s.animating=!1,s.elements.each(function(t,e){delete e.dom7AnimateInstance}),t&&t(r),s.que.length>0){var e=s.que.shift();s.animate(e[0],e[1])}},animate:function(t,n){if(s.animating)return s.que.push([t,n]),s;var i=[];s.elements.each(function(n,r){var o,a,l,h,c;r.dom7AnimateInstance||(s.elements[n].dom7AnimateInstance=s),i[n]={container:r},Object.keys(t).forEach(function(s){o=e.getComputedStyle(r,null).getPropertyValue(s).replace(",","."),a=parseFloat(o),l=o.replace(a,""),h=parseFloat(t[s]),c=t[s]+l,i[n][s]={initialFullValue:o,initialValue:a,unit:l,finalValue:h,finalFullValue:c,currentValue:a}})});var a,l,h=null,c=0,f=0,u=!1;return s.animating=!0,s.frameId=o(function e(){var d,v;a=(new Date).getTime(),u||(u=!0,n.begin&&n.begin(r)),null===h&&(h=a),n.progress&&n.progress(r,Math.max(Math.min((a-h)/n.duration,1),0),h+n.duration-a<0?0:h+n.duration-a,h),i.forEach(function(e){var r=e;l||r.done||Object.keys(t).forEach(function(e){if(!l&&!r.done){d=Math.max(Math.min((a-h)/n.duration,1),0),v=s.easingProgress(n.easing,d);var o=r[e],u=o.initialValue,p=o.finalValue,g=o.unit;r[e].currentValue=u+v*(p-u);var m=r[e].currentValue;(p>u&&m>=p||p<u&&m<=p)&&(r.container.style[e]=p+g,(f+=1)===Object.keys(t).length&&(r.done=!0,c+=1),c===i.length&&(l=!0)),l?s.done(n.complete):r.container.style[e]=m+g}})}),l||(s.frameId=o(e))}),s}};if(0===s.elements.length)return r;for(var a=0;a<s.elements.length;a+=1)s.elements[a].dom7AnimateInstance?i=s.elements[a].dom7AnimateInstance:s.elements[a].dom7AnimateInstance=s;return i||(i=s),"stop"===t?i.stop():i.animate(s.props,s.params),r},stop:function(){for(var t=0;t<this.length;t+=1)this[t].dom7AnimateInstance&&this[t].dom7AnimateInstance.stop()}}),d="resize scroll".split(" ");function v(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];if(void 0===n[0]){for(var o=0;o<this.length;o+=1)d.indexOf(t)<0&&(t in this[o]?this[o][t]():i(this[o]).trigger(t));return this}return(e=this).on.apply(e,[t].concat(n))}function p(t,e){var n={};if(e)i(".docs-nav-searchbar div.search-results").remove();else{if(0===t.length)return i(".docs-nav-searchbar div.search-results").remove(),void i(".docs-nav-searchbar").append('<div class="search-results no-search-results">No results found<div class="algolia-logo"></div></div>');t.forEach(function(t){var e=t._highlightResult.page.value,i=t._highlightResult.section.value,r=t._highlightResult.text.value;r.indexOf("<em")>=100&&(r="..."+r.substring(r.indexOf("<em")-50,r.length)),n[t.docs]||(n[t.docs]={}),n[t.docs][e]||(n[t.docs][e]={url:t.pageUrl}),n[t.docs][e][i]||(n[t.docs][e][i]={text:r,url:t.sectionUrl})});var r="\n  <ul>"+Object.keys(n).map(function(t){return"\n    <li>\n      <span>"+t+"</span>\n      <ul>"+Object.keys(n[t]).map(function(e){return'\n        <li>\n          <a href="'+n[t][e].url+'">\n            <span>'+e+"</span>\n          </a>\n          <ul>"+Object.keys(n[t][e]).map(function(i){return"url"===i?"":'\n              <li>\n                <a href="'+n[t][e][i].url+'">\n                  <span>'+i+"</span>\n                  <small>"+n[t][e][i].text+"</small>\n                </a>\n              </li>"}).join("")+"\n          </ul>\n        </li>"}).join("")+"\n      </ul>\n    </li>"}).join("")+"\n  </ul>";i(".docs-nav-searchbar div.search-results").remove(),i(".docs-nav-searchbar").append('<div class="search-results">'+r+'<div class="algolia-logo"></div></div>')}}function g(){var t=window.scrollY,e=i("[data-device-preview]").eq(0).offset().top+t,n=i(".docs-demo-device:not(.docs-inline-device)");n.addClass("visible");var r,o,s,a=n.parent().offset().top+t,l=a;(l<e-a&&(l=e-a),l+n.outerHeight()>n.parent().outerHeight()&&(l=n.parent().outerHeight()-n.outerHeight()),(r=i(".stop-scroll-device").length>0?i(".stop-scroll-device").offset().top+t-a:i(".docs-content .with-device").offset().top+i(".docs-content .with-device").outerHeight()+t-a)&&(r-=n.outerHeight()),r&&l>=r&&(l=r),t+a>l&&(l=t-a),l>r&&(l=r),l<e-a&&(l=e-a),n.transform("translateY("+l+"px)"),i("[data-device-preview]").each(function(){var t=i(this);t.offset().top<i(window).height()/2&&(o=t.attr("data-device-preview"))}),o||(o=i("[data-device-preview]").eq(0).attr("data-device-preview")),o!==f)&&(f=o,n.find(".fade-overlay").addClass("visible"),n.find("iframe")[0].onload=function(){s=!0,setTimeout(function(){n.find(".fade-overlay").removeClass("visible")},0)},setTimeout(function(){s||n.find(".fade-overlay").removeClass("visible")},1e3),n.find("iframe").attr("src",o))}function m(){var t=window.scrollY,e=i(".internal-header")[0].offsetHeight+i(".bsa-cpc")[0].offsetHeight,n=Math.max(e-t,0);i(".docs-nav-toggle").transform("translateY("+n+"px)"),i(".docs-nav-toggle").css({opacity:1})}[s,a,u,Object.freeze({click:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["click"].concat(t))},blur:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["blur"].concat(t))},focus:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["focus"].concat(t))},focusin:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["focusin"].concat(t))},focusout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["focusout"].concat(t))},keyup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["keyup"].concat(t))},keydown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["keydown"].concat(t))},keypress:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["keypress"].concat(t))},submit:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["submit"].concat(t))},change:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["change"].concat(t))},mousedown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mousedown"].concat(t))},mousemove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mousemove"].concat(t))},mouseup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mouseup"].concat(t))},mouseenter:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mouseenter"].concat(t))},mouseleave:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mouseleave"].concat(t))},mouseout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mouseout"].concat(t))},mouseover:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["mouseover"].concat(t))},touchstart:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["touchstart"].concat(t))},touchend:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["touchend"].concat(t))},touchmove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["touchmove"].concat(t))},resize:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["resize"].concat(t))},scroll:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return v.bind(this).apply(void 0,["scroll"].concat(t))}})].forEach(function(t){Object.keys(t).forEach(function(e){i.fn[e]=t[e]})}),window.algoliasearch&&(l=window.algoliasearch("5CN8U5PK9Z","335298dc09a81387378e525c7824e262"),h=l.initIndex("f7_docs"));var y={el:void 0,createEl:function(){var t=document.createElement("div");t.style.display="none",t.style.position="absolute",t.style.visibility="hidden",t.style.right="100%",t.style.bottom="100%",t.style.userSelect="text",t.style.webkitUserSelect="text",t.style["-webkit-user-select"]="text",document.body.appendChild(t),y.el=t},showEl:function(){y.el.style.display="block",y.el.style.visibility="visible"},hideEl:function(){y.el.style.display="none",y.el.style.visibility="hidden"},copy:function(t){y.el||y.createEl(),y.el.innerHTML=t;try{window.getSelection().removeAllRanges()}catch(t){}y.showEl();var e,n=document.createRange();n.selectNode(y.el);try{window.getSelection().addRange(n),e=document.execCommand("copy")}catch(t){e=!1}try{window.getSelection().removeAllRanges()}catch(t){}return y.hideEl(),e}};function b(t,e){window.ga&&t&&t&&window.ga("send","event",e,"click",t)}i(".docs-nav-searchbar").length&&(i(document).on("input",".docs-nav-searchbar input",function(t){var e=t.target.value.trim().toLowerCase();if(clearTimeout(c),!e)return i(this).removeClass("with-query"),void p([],!0);i(this).addClass("with-query"),c=setTimeout(function(){!function(t){t?h.search({query:t,attributesToRetrieve:["docs","page","section","pageUrl","sectionUrl","text"],hitsPerPage:6},function(t,e){t?console.error(t):p(e.hits)}):p([],!0)}(e)},500)}),i(document).on("click",".disable-search",function(){i(this).prev("input").val("").trigger("input")})),i(".docs-content .with-device").length>0&&(i(window).on("resize",function(){g()}),i(window).on("scroll",function(){g()}),g()),i(".docs-demo-device").length>0&&i(".docs-demo-device-buttons a").on("click",function(t){t.preventDefault();var e=i(this);if(!e.hasClass("active")){e.parent().find(".active").removeClass("active"),e.addClass("active");var n=e.parents(".docs-demo-device"),r=e.attr("data-theme"),o=n.find("iframe").attr("src");n.find(".fade-overlay").addClass("visible"),n.find("iframe").attr("src",o.split("?")[0]+"?theme="+r),setTimeout(function(){n.find(".fade-overlay").removeClass("visible")},1e3)}}),function(){if(i(".docs-nav").length>0){var t=document.location.href;t.indexOf("?")>=0&&(t=t.split("?")[0]),t.indexOf("#")>=0&&(t=t.split("#")[0]),t.indexOf("/")>=0&&(t=(t=t.split("/"))[t.length-1]),i(".docs-nav a").each(function(){var e=i(this).attr("href");t===e&&"#"!==e&&i(this).addClass("active").parent("li").addClass("active")}),i(".docs-nav-toggle").click(function(){i(".docs-nav").toggleClass("docs-nav-visible")}),i(window).on("resize scroll",function(){m()}),m()}}();function w(t){if(t)return localStorage.getItem("f7-git-stats-stars")&&i(".gh-stars span").html(localStorage.getItem("f7-git-stats-stars")),void(localStorage.getItem("f7-git-stats-forks")&&i(".gh-forks span").html(localStorage.getItem("f7-git-stats-forks")));window.fetch&&window.fetch("https://api.github.com/repos/framework7io/framework7").then(function(t){return t.json()}).then(function(t){if(t){if(localStorage.setItem("f7-git-stats-date",(new Date).getTime()),t.stargazers_count){var e=t.stargazers_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");localStorage.setItem("f7-git-stats-stars",e),i(".gh-stars span").html(e)}if(t.forks){var n=t.forks.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");localStorage.setItem("f7-git-stats-forks",n),i(".gh-forks span").html(n)}}})}i([".footer .custom-sponsors a",".footer .keycdn-link",".footer .vpsserver-link",".home-sponsors-list a",".sponsors a.sponsor:not(.sponsor-join)",".docs-nav-sponsors a"].join(",")).on("click",function(){b(this.href,"sponsorlink")}),i(['a[href*="patreon.com"]','a[href*="teespring.com"]'].join(",")).on("click",function(){b(this.href,"supportlink")}),i("a").on("click",function(){var t=this.href;t&&(0!==t.indexOf("http")||t.indexOf(document.location.host)>=0||b(t,"outboundlink"))}),i(".home-header .theme-switch a").click(function(t){if(!i(this).hasClass("active")){t.preventDefault();var e=i(this).attr("href");i("header .phone iframe").attr("src",e),i(".home-header .theme-switch a").removeClass("active"),i(this).addClass("active"),i("header .phone .fullscreen").attr("href",e)}}),i(".home-header .mobile-preview-button").click(function(t){t.preventDefault(),i(".home-header").toggleClass("mobile-preview-enabled")}),i('.home-header a[href="#get-started"]').click(function(t){t.preventDefault(),i("#get-started")[0].scrollIntoView({behavior:"smooth",block:"center"})}),i(".f7-demo-icon i").on("click",function(){var t=i(this).parent().next().text();!function(t,e){y.copy(t)&&e&&e()}(t,function(){var e=i('<div class="f7-demo-icons-toast"><b>'+t+"</b> is copied to clipboard</div>");e.once("animationend",function(){e.remove()}),i(document.body).append(e)})}),i(".docs-content").find("h2, h3").on("click",function(){var t=i(this);t.attr("id")&&(document.location.hash=t.attr("id"))}),i(".showcase-apps .app-icon").on("click",function(){var t=i(this).parents(".app").html();i("body").append('<div class="showcase-app-preview-backdrop"></div>'),i("body").append('<div class="showcase-app-preview"><span class="showcase-app-preview-close"></span>'+t.replace("<h4>","<h3>").replace("</h4>","</h3>")+"</div>"),i("body").css("overflow","hidden")}),i(document).on("click",".showcase-app-preview-close, .showcase-app-preview-backdrop",function(){i(".showcase-app-preview, .showcase-app-preview-backdrop").remove(),i("body").css("overflow","")}),i(document).on("click",".app-show-shots a",function(t){t.preventDefault(),i(this).parent().hide().parents(".showcase-app-preview").find(".app-shots").show().find("img").each(function(){i(this).attr("src",i(this).attr("data-src"))})});var E,k,x=localStorage.getItem("f7-git-stats-date");x&&(new Date).getTime()-1*x<36e5?w(!0):w(),E=!1,(k=document.createElement("div")).innerHTML="&nbsp;",k.className="adsbox",document.body.appendChild(k),window.setTimeout(function(){0===k.offsetHeight&&(E=!0),k.remove(),E&&i(".carbon").append('<div class="carbon-placeholder">Support Framework7 development by disabling AdBlock for this website</div>')},0)});
//# sourceMappingURL=main.js.map