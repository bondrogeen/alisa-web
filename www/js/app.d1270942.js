(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6423c3cc":"8f16a22b","chunk-938bca70":"c3ee3b6e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6423c3cc":1,"chunk-938bca70":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6423c3cc":"90deea57","chunk-938bca70":"febaf030"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"119f":function(e,t,n){},"3c68":function(e,t,n){},5505:function(e,t,n){"use strict";n("119f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var r=n("2b0e"),o=n("5132"),i=n.n(o),a=n("8e27"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"app__header"},[n("AppHeader")],1),n("div",{staticClass:"app__body"},[n("router-view")],1),n("div",{staticClass:"app__footer"},[n("AppFooter")],1)])},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__brand"},[e._v("Alisa Web")]),n("div",{staticClass:"header__center"}),n("div",{staticClass:"header__profile"},[e.login?n("i",{staticClass:"icon icon-settings"}):n("i",{staticClass:"icon icon-user"})])])},l=[],p={name:"app-header",computed:{login:function(){return!0}}},f=p,d=(n("5505"),n("2877")),v=Object(d["a"])(f,u,l,!1,null,"4ea23813",null),b=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__copyright"},[n("p",[e._v(e._s("Copyright © «Alisa web», "+(new Date).getFullYear()))]),n("a",{attrs:{href:"https://github.com/bondrogeen/alisa-web",target:"blank"}},[n("i",{staticClass:"icon icon-github",on:{click:e.click}})]),n("span",{staticClass:"footer__version"},[e._v("ver."+e._s(e.$config.version))])])])},g=[],m=(n("b583"),{}),_=Object(d["a"])(m,h,g,!1,null,"68db5d00",null),y=_.exports,w={name:"app",components:{AppHeader:b,AppFooter:y}},k=w,E=(n("d11b"),Object(d["a"])(k,s,c,!1,null,"852f6452",null)),j=E.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(C["a"]);var O=[{path:"/",name:"Home",component:function(){return n.e("chunk-6423c3cc").then(n.bind(null,"bb51"))}},{path:"/player",name:"Player",component:function(){return n.e("chunk-938bca70").then(n.bind(null,"bf5c"))}},{path:"/player/:id",name:"Player",component:function(){return n.e("chunk-938bca70").then(n.bind(null,"bf5c"))}}],x=new C["a"]({mode:"history",base:"/",routes:O}),S=x,A=n("2f62"),P=n("2909"),T=(n("99af"),{namespaced:!0,state:function(){return{errors:[]}},mutations:{SET_ERROR:function(e,t){e.errors=[].concat(Object(P["a"])(e.errors),[t])}},actions:{setError:function(e,t){var n=e.commit;n("SET_ERROR",{date:Date.now(),error:t})}},getters:{getErrors:function(e){var t=e.errors;return t}}}),$=n("5530"),M={namespaced:!0,state:function(){return{message:{}}},mutations:{SET_MESSAGE:function(e,t){e.message=t}},actions:{socket_message:function(e,t){var n=e.commit;n("SET_MESSAGE",Object($["a"])({},t))}},getters:{getMessage:function(e){var t=e.message;return t}}};r["a"].use(A["a"]);var D=new A["a"].Store({modules:{logging:T,socket:M}}),N=(n("6fe8"),n("a0d8"),n("9224")),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"a-button",class:["a-button--"+e.color,{"a-button--full":e.full}],on:{click:function(t){return e.$emit("click",t)}}},[e._t("default",(function(){return[e._v(e._s(e.text))]}))],2)},B=[],L={name:"a-button",props:{text:{type:String,default:"Button"},color:String,full:Boolean}},F=L,H=(n("a3ce"),Object(d["a"])(F,R,B,!1,null,"5209bee8",null)),J=H.exports,q=[J];console.log(window.location.href),r["a"].use(new i.a({debug:!1,connection:Object(a["io"])(window.location.href),vuex:{store:D,actionPrefix:"socket_"}})),r["a"].prototype.$config={isDev:!1,version:N.version},r["a"].config.productionTip=!1,q.forEach((function(e){return r["a"].component(e.name,e)})),new r["a"]({router:S,store:D,render:function(e){return e(j)}}).$mount("#app")},"6fe8":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"alisa-web","version":"0.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint"},"dependencies":{"core-js":"^3.6.5","socket.io-client":"^4.2.0","vue":"^2.6.11","vue-router":"^3.2.0","vue-socket.io":"^3.0.10","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-plugin-router":"~4.5.0","@vue/cli-plugin-unit-jest":"~4.5.0","@vue/cli-plugin-vuex":"~4.5.0","@vue/cli-service":"~4.5.0","@vue/eslint-config-prettier":"^6.0.0","@vue/test-utils":"^1.0.3","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^2.2.1","sass-loader":"^8.0.2","vue-template-compiler":"^2.6.11"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{},"overrides":[{"files":["**/__tests__/*.{j,t}s?(x)","**/tests/unit/**/*.spec.{j,t}s?(x)"],"env":{"jest":true}}]},"browserslist":["> 1%","last 2 versions","not dead"],"jest":{"preset":"@vue/cli-plugin-unit-jest"}}')},a0d8:function(e,t,n){},a3ce:function(e,t,n){"use strict";n("3c68")},aaf5:function(e,t,n){},afa1:function(e,t,n){},b583:function(e,t,n){"use strict";n("afa1")},d11b:function(e,t,n){"use strict";n("aaf5")}});