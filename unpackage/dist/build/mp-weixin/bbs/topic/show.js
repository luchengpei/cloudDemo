(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bbs/topic/show"],{"0967":function(t,n,a){"use strict";a.r(n);var e=a("9f1d"),i=a("336f");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);var s,u=a("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"73cb8922",null,!1,e["a"],s);n["default"]=c.exports},"336f":function(t,n,a){"use strict";a.r(n);var e=a("9c94"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"9c94":function(t,n,a){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(a("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,n,a,e,i,o,s){try{var u=t[o](s),c=u.value}catch(r){return void a(r)}u.done?n(c):Promise.resolve(c).then(e,i)}function u(t){return function(){var n=this,a=arguments;return new Promise((function(e,i){var o=t.apply(n,a);function u(t){s(o,e,i,u,c,"next",t)}function c(t){s(o,e,i,u,c,"throw",t)}u(void 0)}))}}var c=function(){Promise.all([a.e("common/vendor"),a.e("components/cmform")]).then(function(){return resolve(a("3453"))}.bind(null,a)).catch(a.oe)},r={components:{cmform:c},data:function(){return{focus:!1,pageLoad:!1,author:{},data:{},id:"",islove:!1,isfav:!1,ssuserid:"",unLogin:!0,fans:0,blogger:0}},onLoad:function(t){this.id=t.id,this.ssuserid=getApp().globalData.ssuserid,this.unLogin=getApp().globalData.unLogin,this.getPage(),this.addView()},methods:{openImg:function(n){var a=n.target.dataset.src,e=[];for(var i in this.data.imgList)e[i]=this.data.imgList[i].imgurl;t.previewImage({current:a,urls:e})},focusOn:function(){if(this.author._id!=this.ssuserid){var n=this;e.callFunction({name:"fans",data:{action:"add",params:{bloggerId:this.author._id,fansId:this.ssuserid}}}).then((function(a){1==a.success&&(n.focus=!0,t.showToast({title:"关注成功！",icon:"none"}))}))}else t.showToast({title:"不能关注自己！",icon:"none"})},cancelFocus:function(){var n=this;e.callFunction({name:"fans",data:{action:"cancel",params:{bloggerId:this.author._id,fansId:this.ssuserid}}}).then((function(a){1==a.success&&(n.focus=!1,t.showToast({title:"取消关注！",icon:"none"}))}))},getPage:function(){var t=this;return u(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t,n.next=3,e.callFunction({name:"bbs_topic",data:{cloudAction:"show",params:{id:t.id}}}).then((function(t){t=t.result.data;a.data=t.data,a.author=t.user}));case 3:return t.pageLoad=!0,e.callFunction({name:"love",data:{cloudAction:"get",params:{objectid:t.id,tablename:"bbs-topic",ssuserid:t.ssuserid}},success:function(t){1==t.result.data?a.islove=!0:a.islove=!1}}),e.callFunction({name:"fav",data:{cloudAction:"get",params:{objectid:t.id,tablename:"bbs-topic",ssuserid:t.ssuserid}},success:function(t){1==t.result.data?a.isfav=!0:a.isfav=!1}}),n.next=8,e.callFunction({name:"fans",data:{action:"get",params:{bloggerId:t.author._id,fansId:t.ssuserid}}}).then((function(t){1==t.result&&(a.focus=!0)}));case 8:return n.next=10,e.callFunction({name:"fans",data:{action:"getfans",params:{bloggerId:t.author._id}}}).then((function(t){a.fans=t.result}));case 10:return n.next=12,e.callFunction({name:"fans",data:{action:"getblogger",params:{bloggerId:t.author._id}}}).then((function(t){a.blogger=t.result}));case 12:case"end":return n.stop()}}),n)})))()},addView:function(){e.callFunction({name:"bbs_topic",data:{cloudAction:"addView",params:{id:this.id}}}).then((function(t){}))},favToggle:function(t){var n=this;n=this;e.callFunction({name:"fav",data:{cloudAction:"toggle",params:{objectid:t,tablename:"bbs-topic",ssuserid:this.ssuserid}},success:function(t){"add"==t.result.data.action?n.isfav=!0:n.isfav=!1},fail:function(t){}})},loveToggle:function(t){var n=this;e.callFunction({name:"love",data:{cloudAction:"toggle",params:{objectid:t,tablename:"bbs-topic",ssuserid:this.ssuserid}},success:function(t){"add"==t.result.data.action?n.islove=!0:n.islove=!1},fail:function(t){}})}}};n.default=r}).call(this,a("543d")["default"],a("a9ff")["default"])},"9f1d":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={uLoading:function(){return a.e("uview-ui/components/u-loading/u-loading").then(a.bind(null,"4883"))}},i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},fc51:function(t,n,a){"use strict";(function(t){a("7d33");e(a("66fd"));var n=e(a("0967"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])}},[["fc51","common/runtime","common/vendor"]]]);