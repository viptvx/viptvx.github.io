(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19bfa8a0":"3e7d3ec8","chunk-1fa0abb2":"944d5a95","chunk-2d22d746":"be812e06","chunk-61c25b1a":"0c565a76"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-19bfa8a0":1,"chunk-1fa0abb2":1,"chunk-61c25b1a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-19bfa8a0":"2d88f91c","chunk-1fa0abb2":"f3485020","chunk-2d22d746":"31d6cfe0","chunk-61c25b1a":"946095cf"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/viptv/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"App"},c=u,i=n("2877"),s=Object(i["a"])(c,a,o,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header"),n("el-container",{staticStyle:{border:"1px solid #eee"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"20%"}},e._l(e.migutvNav,(function(t,r){return n("el-menu",{key:r},[n("el-menu-item-group",[n("el-menu-item",{on:{click:function(n){return e.say(t.vomsID)}}},[e._v(e._s(t.name))])],1)],1)})),1),n("el-main",[n("el-carousel",{attrs:{interval:5e3,arrow:"always"}},e._l(4,(function(t){return n("el-carousel-item",{key:t},[n("h3",[e._v(e._s(t))])])})),1),n("el-row",e._l(e.migutvCont,(function(t,r){return n("el-col",{key:r,attrs:{span:8}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:t.h5pics.lowResolutionH}}),n("time",{staticClass:"time"},[e._v(e._s(t.name))])])],1)})),1)],1)],1),n("el-footer",[e._v("客服QQ:2236639958")])],1)},p=[],m={created:function(){this.$store.dispatch("migutv_data","e7716fea6aa1483c80cfc10b7795fcb8")},methods:{say:function(e){this.$store.dispatch("migutv_data",e)},play:function(e){this.$router.push("/playback/"+e)},handleClick:function(e,t){console.log(e,t)}},computed:{migutvNav:function(){return this.$store.state.migutvNav},migutvCont:function(){return this.$store.state.migutvCont}}},h=m,v=(n("cccb"),Object(i["a"])(h,d,p,!1,null,null,null)),b=v.exports;r["default"].use(f["a"]);var g=[{path:"/",name:"home",component:b},{path:"/tvdata",name:"tvdata",component:function(){return n.e("chunk-61c25b1a").then(n.bind(null,"c358"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/xgplayer",name:"xgplayer",component:function(){return n.e("chunk-1fa0abb2").then(n.bind(null,"7d50"))}},{path:"/dplayer",name:"dplayer",component:function(){return n.e("chunk-19bfa8a0").then(n.bind(null,"5553"))}}],y=new f["a"]({mode:"hash",base:"/viptv/",routes:g}),k=y,_=n("5c96"),w=n.n(_),j=n("2f62"),C={migutvNav:null,migutvCont:null},x={},O=(n("96cf"),n("89ba")),P=n("bc3a"),S=n.n(P),E=S.a.create({baseURL:"http://live.miguvideo.com",timeout:5e3,headers:{"Content-Type":"application/json; charset=utf-8",withCredentials:!0}});function N(){return T.apply(this,arguments)}function T(){return T=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"70002091",e.prev=1,e.next=4,E.get("/live/v2/tv-data/"+t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])}))),T.apply(this,arguments)}E.interceptors.request.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)})),E.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var L={migutv_data:function(e,t){return N(t).then((function(t){200===t.data.code&&(e.commit("migutv_nav",t.data.body.liveList),e.commit("migutv_cont",t.data.body.dataList))}))}},$={migutv_nav:function(e,t){e.migutvNav=t},migutv_cont:function(e,t){e.migutvCont=t}};r["default"].use(j["a"]);var A=new j["a"].Store({state:C,getters:x,actions:L,mutations:$}),M=A;n("0fae");r["default"].use(w.a),r["default"].config.productionTip=!1,new r["default"]({router:k,store:M,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a}});
//# sourceMappingURL=app.b536ff90.js.map