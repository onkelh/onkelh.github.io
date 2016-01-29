!function(t){function e(){for(var t=0;t<S.length;t++)S[t][0](S[t][1]);S=[],y=!1}function n(t,n){S.push([t,n]),y||(y=!0,b(e,0))}function i(t,e){function n(t){s(e,t)}function i(t){c(e,t)}try{t(n,i)}catch(r){i(r)}}function r(t){var e=t.owner,n=e.state_,i=e.data_,r=t[n],a=t.then;if("function"==typeof r){n=v;try{i=r(i)}catch(h){c(a,h)}}o(a,i)||(n===v&&s(a,i),n===w&&c(a,i))}function o(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var i=e.then;if("function"==typeof i)return i.call(e,function(i){n||(n=!0,e!==i?s(t,i):a(t,i))},function(e){n||(n=!0,c(t,e))}),!0}}catch(r){return n||c(t,r),!0}return!1}function s(t,e){t!==e&&o(t,e)||a(t,e)}function a(t,e){t.state_===m&&(t.state_=g,t.data_=e,n(u,t))}function c(t,e){t.state_===m&&(t.state_=g,t.data_=e,n(f,t))}function h(t){t.then_=t.then_.forEach(r)}function u(t){t.state_=v,h(t)}function f(t){t.state_=w,h(t)}function d(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof d==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],i(t,this)}var p=t.Promise,l=p&&"resolve"in p&&"reject"in p&&"all"in p&&"race"in p&&function(){var t;return new p(function(e){t=e}),"function"==typeof t}();"undefined"!=typeof exports&&exports?exports.Promise=d||p:l||(t.Promise=d);var y,m="pending",g="sealed",v="fulfilled",w="rejected",k=function(){},b="undefined"!=typeof setImmediate?setImmediate:setTimeout,S=[];d.prototype={constructor:d,state_:m,then_:null,data_:void 0,then:function(t,e){var i={owner:this,then:new this.constructor(k),fulfilled:t,rejected:e};return this.state_===v||this.state_===w?n(r,i):this.then_.push(i),i.then},"catch":function(t){return this.then(null,t)}},d.all=function(t){var e=this;if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new e(function(e,n){function i(t){return s++,function(n){o[t]=n,--s||e(o)}}for(var r,o=[],s=0,a=0;a<t.length;a++)r=t[a],r&&"function"==typeof r.then?r.then(i(a),n):o[a]=r;s||e(o)})},d.race=function(t){var e=this;if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new e(function(e,n){for(var i,r=0;r<t.length;r++)i=t[r],i&&"function"==typeof i.then?i.then(e,n):e(i)})},d.resolve=function(t){var e=this;return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},d.reject=function(t){var e=this;return new e(function(e,n){n(t)})}}(new Function("return this")());var am=am||{},header,headerHeight,firstAd,firstAdHeight;am.StickyAd=function(){function t(t){if(t){this.ad=t;var e=t.getBoundingClientRect();header=document.querySelector(".am-page-header"),headerHeight=header.clientHeight,firstAd=document.querySelector("#am-ad-Skyskraper_1"),firstAdHeight=firstAd?550:50,this.top=headerHeight+firstAdHeight+this.getScroll(),this.left=e.left,this.isSticky=!1,this.ad.classList.contains("am-adContainer--labeled")?this.offsetTop=20:this.offsetTop=0,this.update(),this.attachListeners()}}return t.prototype.attachListeners=function(){var t=this;["resize","scroll"].forEach(function(e){window.addEventListener(e,t.update.bind(t))})},t.prototype.update=function(){this.setSticky(this.isAboveScroll())},t.prototype.isAboveScroll=function(){return this.getScroll()>header.clientHeight+firstAdHeight-this.offsetTop},t.prototype.getScroll=function(){return window.pageYOffset||document.documentElement.scrollTop},t.prototype.setSticky=function(t){if(t!==this.isSticky){var e=this.ad.style;e.position=t?"fixed":"relative",t?(e.top=this.offsetTop+"px",e.left=this.left+"px"):(e.top="auto",e.left="auto"),this.isSticky=t}},t}(),document.addEventListener("DOMContentLoaded",function(t){new am.StickyAd(document.querySelector("#am-ad-Sticky_skyskraper"))});var am=am||{};am.Ad=function(){"use strict";function t(t){var n=document.createElement.bind(document),i=document.querySelector.bind(document);e("\nAd config:",t,"\n"),Object.keys(t).forEach(function(e){this[e]=t[e]}.bind(this)),this.wrapper=i(this.positions[this.position]),this.wrapper.style.width=this.width+"px",this.invertedL&&i(this.positions.topbanner).classList.add("am-adContainer--bleed"),new am.StickyAd(this.wrapper),this.counter&&this.insertCounter(n),this.flashSettings&&this.installedFlashVersion()>=Number(this.flashSettings.requiredFlashVersion)?this.insertFlash(n):this.insertGraphic(n),document.addEventListener("DOMContentLoaded",function(){var t=i(this.positions.stickySkyskraper);t.parentNode.removeChild(t)}.bind(this))}var e=-1!==window.location.href.indexOf("debug=true")?console.log.bind(console):function(){};return e("\nAd script loaded\n"),t.prototype.positions={topbanner:"#am-ad-Toppbanner",stickySkyskraper:"#am-ad-Sticky_skyskraper",skyskraper:"#am-ad-Skyskraper_1"},t.prototype.insertCounter=function(t){var e=t("div");e.setAttribute("style","display: none");var n=t("img"),i={width:1,height:1,border:0,src:this.counter};Object.keys(i).forEach(function(t){n.setAttribute(t,i[t])}),e.appendChild(n),this.wrapper.appendChild(e)},t.prototype.insertFlash=function(t){var e=t("object"),n={type:"application/x-shockwave-flash",data:this.flashSettings.movie},i={quality:"autohigh",allowScriptAccess:"always",wmode:this.flashSettings.wmode,scale:this.flashSettings.scale,bgcolor:this.flashSettings.bgcolor},r=this.clickthrough.map(function(t,e){return this.clicktype+(e>0?e:"")+"="+this.adclick+t}.bind(this));i.flashvars=r.join("&"),Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])}),Object.keys(i).forEach(function(n){var r=t("param");r.setAttribute("name",n),r.setAttribute("value",i[n]),e.appendChild(r)});var o=["width: "+this.width+"px","height: "+this.height+"px"];e.setAttribute("style",o.join("; ")),this.wrapper.appendChild(e)},t.prototype.insertGraphic=function(t){var e=t("a"),n=t("img"),i={src:this.image,alt:"annonse",width:this.width,height:this.height,border:0};this.clickthrough.length>0&&e.setAttribute("href",this.adclick+this.clickthrough[0]),e.setAttribute("target","_blank"),Object.keys(i).forEach(function(t){n.setAttribute(t,i[t])}),e.appendChild(n),this.wrapper.appendChild(e)},t.prototype.installedFlashVersion=function(){function t(t){var e=t.match(/[\d]+/g);return e.length=2,e.join(".")}var e=null;if(navigator.plugins&&navigator.plugins.length){var n=navigator.plugins["Shockwave Flash"];n&&n.description&&(e=t(n.description))}return e},t}(),function(){var t=document.getElementById("am-ad-Vaerknapp"),e=document.getElementById("apiWeatherSponsorAd");t&&e&&e.appendChild(t)}();