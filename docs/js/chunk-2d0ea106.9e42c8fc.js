(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0ea106"],{"8fce":function(t,a,n){"use strict";n.r(a);var e=n("5530"),s=n("4481"),r=n("2f62"),o=(n("d81d"),{name:"Home",data:function(){return{tab:!0}},created:function(){var t=this;this.nav&&this.nav.map((function(a){t.$store.dispatch(a.id+"_nav")}))},props:{val:String,nav:Array},watch:{nav:function(t){var a=this;t&&t.map((function(t){a.$store.dispatch(t.id+"_nav")}))}},methods:{handleTabRemove:function(t){this["tab"+t]=!1},getNav:function(t){return this.$store.getters[t+"Nav"]},toList:function(t,a){this.$router.push({name:"list",params:{id:Object(s.b)(this.$route.params.id+"@"+t+"@"+a)}})}}}),i=n("0c7c"),c={name:"MovieHome",data:function(){return{val:"free",navData:[]}},created:function(){this.navData=this.Category&&this.Category[Object(s.a)(this.$route.params.id)]},components:{Tabs:Object(i.a)(o,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("Tabs",{attrs:{value:t.val}},t._l(t.nav,(function(a,e){return n("TabPane",{directives:[{name:"show",rawName:"v-show",value:t.tab,expression:"tab"}],key:e,attrs:{label:a.name,name:a.id}},t._l(t.getNav(a.id),(function(e,s){return n("Button",{key:s,staticClass:"button",nativeOn:{click:function(n){return t.toList(a.id,e.id)}}},[t._v(t._s(e.name))])})),1)})),1)}),[],!1,null,null,null).exports},watch:{"$route.params.id":function(t){this.navData=this.Category&&this.Category[Object(s.a)(t)]}},computed:Object(e.a)({},Object(r.c)(["Category"]))},l=Object(i.a)(c,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("Collapse",{attrs:{accordion:""},model:{value:t.val,callback:function(a){t.val=a},expression:"val"}},[n("Panel",{attrs:{name:"free"}},[t._v(" 体验区 "),n("p",{attrs:{slot:"content"},slot:"content"},[n("Tabs",{attrs:{val:t.navData.val[0],nav:t.navData.vol[0]}})],1)]),n("Panel",{directives:[{name:"show",rawName:"v-show",value:!!t.navData.val[1],expression:"navData.val[1] ? true : false"}],attrs:{name:"vip"}},[t._v(" 精品区 "),n("p",{attrs:{slot:"content"},slot:"content"},[n("Tabs",{attrs:{val:t.navData.val[1],nav:t.navData.vol[1]}})],1)])],1)}),[],!1,null,null,null);a.default=l.exports}}]);