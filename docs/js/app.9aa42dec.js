(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0923339a","chunk-443c7261":"27e1be56","chunk-44bc1f1e":"604be54d","chunk-6080a0b1":"ad9dfefd","chunk-6f92dfe0":"dbfdbe46","chunk-b027aa58":"f231db95","chunk-c945beb8":"0adad187","chunk-ea9a6be4":"8e01a571"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-443c7261":1,"chunk-44bc1f1e":1,"chunk-6080a0b1":1,"chunk-6f92dfe0":1,"chunk-b027aa58":1,"chunk-c945beb8":1,"chunk-ea9a6be4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b17d4151","chunk-443c7261":"354cfdc9","chunk-44bc1f1e":"eee0ed38","chunk-6080a0b1":"354cfdc9","chunk-6f92dfe0":"9e0269c5","chunk-b027aa58":"cb455294","chunk-c945beb8":"60f198ed","chunk-ea9a6be4":"200b46b4"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],h.parentNode.removeChild(h),n(u)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1559:function(e,t,n){},2922:function(e,t,n){"use strict";var r=n("3eee"),o=n.n(r);o.a},"2b7c":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("bc3a"),o=n.n(r),a=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,u){var i={url:e,method:t};"get"===t.toLowerCase()?i.params=n:i.data=n,localStorage.token&&(o.a.defaults.headers.common["Authorization"]=localStorage.token),o()(i).then(function(e){"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(a["Message"].error("请求出错:"+e.data.msg),u(e.data))}).catch(function(e){console.log(e),a["Message"].error("网络出错"),u({msg:"网络出错"})})})}o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.baseURL="//blog-server.hunger-valley.com"},"3eee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Head",{staticClass:"header"}),n("router-view",{staticClass:"main"}),n("Foot",{staticClass:"footer"})],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{"no-login":!e.isLogin,"is-login":e.isLogin}},[e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("Let's share")])],1),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"el-icon-edit"})]),n("div",[n("img",{attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),n("ul",[n("li",[n("el-button",{attrs:{type:"text"},on:{click:e.onMy}},[e._v("我的")])],1),n("li",[n("el-button",{attrs:{type:"text"},on:{click:e.onLogout}},[e._v("注销")])],1)])])]:[n("h1",[e._v("Let's share")]),n("P",[e._v("精品博客")]),n("div",{staticClass:"buttons"},[n("el-button",{on:{click:e.onLogin}},[e._v("登陆")]),n("el-button",{on:{click:e.onRegister}},[e._v("注册")])],1)]],2)},i=[],c=n("be94"),s=n("2f62"),l={name:"home",components:{},data:function(){return{}},computed:Object(c["a"])({},Object(s["c"])(["isLogin","user"])),created:function(){},methods:Object(c["a"])({},Object(s["b"])(["checklogin","logout"]),{onLogout:function(){this.logout(),this.$router.push("/")},onLogin:function(){this.$router.push("/login")},onRegister:function(){this.$router.push("/register")},onMy:function(){this.$router.push("/my")}})},f=l,h=(n("2922"),n("2877")),d=Object(h["a"])(f,u,i,!1,null,null,null);d.options.__file="header.vue";var p=d.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("徐启能: 379664090@qq.com 18857576150")])])}],m=(n("68b3"),{}),v=Object(h["a"])(m,b,g,!1,null,null,null);v.options.__file="footer.vue";var k=v.exports,w={components:{Head:p,Foot:k}},y=w,L=(n("5c0b"),Object(h["a"])(y,o,a,!1,null,null,null));L.options.__file="App.vue";var O=L.exports,_=n("8c4f"),j=(n("96cf"),n("1da1")),x=n("2b7c"),S={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",ISLOGIN:"/auth"},E={register:function(e){var t=e.username,n=e.password;return Object(x["a"])(S.REGISTER,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(x["a"])(S.LOGIN,"POST",{username:t,password:n})},logout:function(){return localStorage.removeItem("token"),Object(x["a"])(S.LOGOUT)},islogin:function(){return Object(x["a"])(S.ISLOGIN)}},T={user:null,isLogin:!1},P={user:function(e){return e.user},isLogin:function(e){return e.isLogin}},R={setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},I={login:function(e,t){var n=e.commit,r=t.username,o=t.password;return E.login({username:r,password:o}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},logout:function(){var e=Object(j["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,E.logout();case 3:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(j["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.username,a=n.password,e.next=4,E.register({username:o,password:a});case 4:return u=e.sent,r("setUser",{user:u.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",u.data);case 8:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),checklogin:function(){var e=Object(j["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.isLogin){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,E.islogin();case 5:if(o=e.sent,n("setLogin",{isLogin:o.isLogin}),r.isLogin){e.next=9;break}return e.abrupt("return",!1);case 9:return n("setUser",{user:o.data}),e.abrupt("return",!0);case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},M={state:T,getters:P,mutations:R,actions:I},A=n("a9ce"),q=n.n(A);r["default"].use(s["a"]);var C=new s["a"].Store({modules:{auth:M,blog:q.a}});r["default"].use(_["a"]);var G=new _["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("chunk-6f92dfe0").then(n.bind(null,"6511"))}},{path:"/detail/:blogId",name:"detail",component:function(){return n.e("chunk-c945beb8").then(n.bind(null,"1000"))}},{path:"/create",name:"create",meta:{requiresAuth:!0},component:function(){return n.e("chunk-6080a0b1").then(n.bind(null,"5baf"))}},{path:"/edit/:blogId",name:"edit",meta:{requiresAuth:!0},component:function(){return n.e("chunk-443c7261").then(n.bind(null,"a2c6"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-b027aa58").then(n.bind(null,"7803"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-44bc1f1e").then(n.bind(null,"dd7b"))}},{path:"/user/:userId",name:"user",meta:{requiresAuth:!0},component:function(){return n.e("chunk-ea9a6be4").then(n.bind(null,"a547"))}},{path:"/my",name:"my",meta:{requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"0c6f"))}}]});G.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?C.dispatch("checklogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var $=G,N=n("5c96"),U=n.n(N),B=n("53ca");function F(e){var t="object"===Object(B["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),o=r-n,a="";switch(!0){case o<6e4:a="刚刚";break;case o<36e5:a=Math.floor(o/6e4)+"分钟前";break;case o<864e5:a=Math.floor(o/36e5)+"小时前";break;case o<31536e6:a=Math.floor(o/864e5)+"天前";break;default:a=Math.floor(o/31536e6)+"年前";break}return a}var H={install:function(e){e.prototype.friendlyDate=F}};n("0fae");r["default"].config.productionTip=!1,r["default"].use(U.a),r["default"].use(H),new r["default"]({router:$,store:C,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"68b3":function(e,t,n){"use strict";var r=n("1559"),o=n.n(r);o.a},a9ce:function(e,t){}});