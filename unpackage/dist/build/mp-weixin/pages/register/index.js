(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/index"],{"4b4f":function(e,n,t){"use strict";t.r(n);var a=t("bd38"),u=t("d83f");for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);t("9426");var c,r=t("f0c5"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"6300b454",null,!1,a["a"],c);n["default"]=i.exports},"7e2e":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{pageLoad:!1,pageData:{}}},onLoad:function(e){this.pageLoad=!0},methods:{formSubmit:function(n){if(n.detail.value.username=n.detail.value.nickname,n.detail.value.password2!=n.detail.value.password)return e.showToast({title:"两次密码不一样"}),!1;t.callFunction({name:"user-center",data:{action:"register",params:{username:n.detail.value.username,password:n.detail.value.password,nickname:n.detail.value.nickname,gold:0,grade:0,avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hzqasl/7ff730f0-f4d1-11ea-b680-7980c8a877b8.png"}},success:function(n){if(e.showModal({showCancel:!1,content:n.result.msg}),0==n.result.code){e.setStorageSync("uniIdToken",n.result.token);t.callFunction({name:"user-center",data:{action:"checkToken"},success:function(n){if(void 0==n.result.uid)return!1;getApp().globalData.ssuserid=n.result.uid,getApp().globalData.unLogin=!1,e.reLaunch({url:"/pages/index/index"})}})}},fail:function(n){console.error(n),e.showModal({showCancel:!1,content:"注册失败，请稍后再试"})}})}}};n.default=a}).call(this,t("543d")["default"],t("a9ff")["default"])},9426:function(e,n,t){"use strict";var a=t("e404"),u=t.n(a);u.a},bd38:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var u=function(){var e=this,n=e.$createElement;e._self._c},o=[]},c3cf:function(e,n,t){"use strict";(function(e){t("7d33");a(t("66fd"));var n=a(t("4b4f"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},d83f:function(e,n,t){"use strict";t.r(n);var a=t("7e2e"),u=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=u.a},e404:function(e,n,t){}},[["c3cf","common/runtime","common/vendor"]]]);