!function e(n,t,i){function o(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=t[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return o(t?t:e)},l,l.exports,e,n,t,i)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,n,t){var i=e("./lib/App");window.App=i},{"./lib/App":8}],2:[function(e,n,t){var i=function(e,n,t){var i;for(i in e)e.hasOwnProperty(i)&&n.call(t,i,e[i])};n.exports=i},{}],3:[function(e,n,t){var i=function(e,n){return function(){return e.apply(n,arguments)}};n.exports=i},{}],4:[function(e,n,t){var i=e("./forEach"),o=function(){var e=!1,n=[],t=function(){setTimeout(function(){/loaded|complete/.test(document.readyState)?(e=!0,i(n,function(e){e()})):t()},50)};return t(),function(t){e?t():n.push(t)}}.call();n.exports=o},{"./forEach":5}],5:[function(e,n,t){var i=function(e,n,t){var i,o;for(o=0,i=e.length;i>o;o++)n.call(t,e[o])};n.exports=i},{}],6:[function(e,n,t){var i=function(e,n,t){var i="on"+n;window.addEventListener?e.removeEventListener(n,t,!1):e.detachEvent(i,t)};n.exports=i},{}],7:[function(e,n,t){var i=function(e,n,t){var i="on"+n;window.addEventListener?e.addEventListener(n,t,!1):e.attachEvent(i,t)};n.exports=i},{}],8:[function(e,n,t){function i(e){e=e||{};var n=this;a.supported&&a.enableProgressBar(),o.init(e),this.sender=new r(window.top,e.targetOrigin),this.fireResize=function(){var e=0;document.documentElement&&(e=document.documentElement.scrollHeight),n.sender.send("auth:resize",{height:e})},this.onLoad=function(){n.sender.send("auth:loaded")},u(window,"load",n.onLoad),u(window,"orientationchange",n.fireResize),u(document,"page:change",n.fireResize),s(n.fireResize)}var o=e("./PageManager").instance,r=e("./Sender"),a=e("./Turbolinks"),s=e("../helpers/ie8/documentReady"),u=e("../helpers/ie8/on");o.pages={"/auth/v2/login/signin":e("../pages/signin"),"/auth/v2/login/registration":e("../pages/registration"),"/auth/v2/login/password_reset":e("../pages/password_reset"),"/auth/v2/login/signed_in":e("../pages/signed_in"),"/auth/v2/login/sso":e("../pages/sso"),"auth/v2/login/one_time_password":e("../pages/one_time_password")},n.exports=i},{"../helpers/ie8/documentReady":4,"../helpers/ie8/on":7,"../pages/one_time_password":14,"../pages/password_reset":15,"../pages/registration":16,"../pages/signed_in":17,"../pages/signin":18,"../pages/sso":19,"./PageManager":11,"./Sender":12,"./Turbolinks":13}],9:[function(e,n,t){var i=function(e){"string"==typeof e&&(e=this.deserialize(e)),e=e||{},this.type=e.type||"",this.data=e.data||{}};i.prototype={serialize:function(){return JSON.stringify(this)},deserialize:function(e){return JSON.parse(e)}},n.exports=i},{}],10:[function(e,n,t){var i=e("../helpers/forIn"),o=function(e){e=e||{},i(e,function(e,n){this[e]=n},this)};o.prototype={init:function(){},load:function(){},unload:function(){}},n.exports=o},{"../helpers/forIn":2}],11:[function(e,n,t){var i=e("./Turbolinks"),o=e("../helpers/forIn"),r=e("../helpers/ie8/bind"),a=e("../helpers/ie8/on"),s=e("../helpers/ie8/off"),u=e("../helpers/ie8/documentReady"),l=function(){this._active=null,this.pages={}};l.prototype={init:function(e){o(this.pages,function(n,t){t.init.call(t,e)}),this.loadPage=r(this.loadPage,this),this.unloadPage=r(this.unloadPage,this),i.supported?(a(document,"page:change",this.loadPage),a(document,"page:before-unload",this.unloadPage)):u(this.loadPage)},getPath:function(){return window.location.pathname},getPageFromRoute:function(){var e,n,t;return n=this.pages,e=this.getPath(),o(this.pages,function(n,i){new RegExp(n).test(e)&&(t=i)}),t},unloadPage:function(){this._active&&this._active.unload.call(this._active)},loadPage:function(){var e=this._active=this.getPageFromRoute();e&&e.load.call(e)},destroy:function(){s(document,"page:change",this.loadPage),s(document,"page:before-unload",this.unloadPage),this._active=void 0,this.pages=void 0}},l.instance=new l,n.exports=l},{"../helpers/forIn":2,"../helpers/ie8/bind":3,"../helpers/ie8/documentReady":4,"../helpers/ie8/off":6,"../helpers/ie8/on":7,"./Turbolinks":13}],12:[function(e,n,t){var i=e("./Evt"),o=function(e,n){if(!e)throw new Error("Missing target");this.target=e,this.targetOrigin=n};o.prototype={send:function(e,n){var t=new i({type:e,data:n});this.target.postMessage(t.serialize(),this.targetOrigin)}},n.exports=o},{"./Evt":9}],13:[function(e,n,t){n.exports=window.Turbolinks},{}],14:[function(e,n,t){var i=e("../lib/Page");n.exports=new i({init:function(){},load:function(){document.getElementById("password").focus()},unload:function(){}})},{"../lib/Page":10}],15:[function(e,n,t){var i=e("../lib/Page");n.exports=new i({init:function(){},load:function(){},unload:function(){}})},{"../lib/Page":10}],16:[function(e,n,t){var i=e("../lib/Page"),o=e("../lib/Sender");n.exports=new i({init:function(e){this.sender=new o(window.top,e.targetOrigin),this.timer=null},load:function(){var e=this;this.timer=setInterval(function(){e.resize.call(e)},500)},unload:function(){clearInterval(this.timer)},resize:function(){var e=0;document.documentElement&&(e=document.documentElement.scrollHeight,this.sender.send("auth:resize",{height:e}))}})},{"../lib/Page":10,"../lib/Sender":12}],17:[function(e,n,t){var i=e("../lib/Page"),o=e("../lib/Sender");n.exports=new i({init:function(e){this.sender=new o(window.top,e.targetOrigin)},load:function(){this.sender.send("auth:goto_return_to")}})},{"../lib/Page":10,"../lib/Sender":12}],18:[function(e,n,t){var i=e("../lib/Page"),o=e("../lib/Sender"),r=e("../helpers/ie8/bind"),a=e("../helpers/ie8/on"),s=e("../helpers/ie8/off");n.exports=new i({cancelElm:void 0,onClick:function(e){e.preventDefault(),this.sender.send("auth:close")},init:function(e){this.sender=new o(window.top,e.targetOrigin),this.onClick=r(this.onClick,this)},load:function(){this.cancelElm=document.querySelector("[data-close]"),this.cancelElm&&a(this.cancelElm,"click",this.onClick)},unload:function(){this.cancelElm&&(s(this.cancelElm,"click",this.onClick),this.cancelElm=void 0)}})},{"../helpers/ie8/bind":3,"../helpers/ie8/off":6,"../helpers/ie8/on":7,"../lib/Page":10,"../lib/Sender":12}],19:[function(e,n,t){var i=e("../lib/Page"),o=e("../lib/Sender");n.exports=new i({init:function(e){this.sender=new o(window.top,e.targetOrigin)},load:function(){var e,n;e=document.querySelector("#sso_url"),e&&(n=e.getAttribute("value"),this.sender.send("auth:load_url",{url:n}))}})},{"../lib/Page":10,"../lib/Sender":12}]},{},[1]);