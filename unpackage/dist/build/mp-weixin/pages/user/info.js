(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/info"],{"62e8":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"676f":function(t,e,n){"use strict";n.r(e);var u=n("62e8"),a=n("bb9e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i,o=n("f0c5"),s=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);e["default"]=s.exports},af16:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{pageLoad:!1,user:{},unLogin:!0,ssuserid:""}},onLoad:function(t){if(this.ssuserid=getApp().globalData.ssuserid,this.unLogin=getApp().globalData.unLogin,""==this.ssuserid)return!1;this.getPage()},methods:{getPage:function(){var e=this;t.callFunction({name:"user-center",data:{action:"get",id:this.ssuserid},success:function(t){var n=t.result;if(n.error)return!1;console.log(n),e.pageLoad=!0,e.user=n.data.user}})},submit:function(t){}}};e.default=n}).call(this,n("a9ff")["default"])},bb9e:function(t,e,n){"use strict";n.r(e);var u=n("af16"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=a.a},f858:function(t,e,n){"use strict";(function(t){n("7d33");u(n("66fd"));var e=u(n("676f"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f858","common/runtime","common/vendor"]]]);