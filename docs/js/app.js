(function(e){function t(t){for(var o,l,s=t[0],c=t[1],i=t[2],p=0,d=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/technicalbooks_release_schedule/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0313":function(e,t,n){"use strict";n("548a")},"548a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Head"),n("br"),n("Menu",{attrs:{child_page:e.active_page},on:{input:function(t){e.active_page=t}}}),n("Books")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("コンピュータ技術書近刊一覧")])},s=[],c=n("2877"),i={},u=Object(c["a"])(i,l,s,!1,null,null,null),p=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"nav nav-tabs"},e._l(e.menu,(function(t){return n("li",{key:t.id,staticClass:"nav-item"},[n("label",{class:[e.local_active_page===t.id?"btn btn-primary btn-sm":"btn btn-outline-primary btn-sm"]},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.local_active_page,expression:"local_active_page"}],staticClass:"nav-link",attrs:{type:"radio"},domProps:{value:t.id,checked:e._q(e.local_active_page,t.id)},on:{change:function(n){e.local_active_page=t.id}}}),e._v(" "+e._s(t.title)+" ")])])})),0)])},f=[],_=n("bc3a"),b=n.n(_),h={name:"Menu",props:["child_page"],data(){return{menu:[]}},mounted:function(){b.a.get("@/assets/json/menu.json").then(e=>this.menu=e.data).catch(e=>console.log(e))},computed:{local_active_page:{get:function(){return this.child_page},set:function(e){this.$emit("input",e)}}}},v=h,m=Object(c["a"])(v,d,f,!1,null,"f5689348",null),g=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table table-sm"},[e._m(0),n("tbody",[e._l(e.books,(function(t){return[n("tr",{key:t.id},[n("td",[e._v(e._s(t.release_date)),n("br"),e._v(e._s(t.book_publisher))]),n("td",[n("a",{attrs:{href:t.book_url}},[e._v(e._s(t.book_title))]),n("br"),e._l(t.keyword_master,(function(t){return n("span",{key:t.id,class:t.id},[e._v(" ・"+e._s(t.display_name)+" ")])}))],2)])]}))],2)])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("発売日")]),n("th",{attrs:{scope:"col"}},[e._v("タイトル")])])])}],j={name:"App",data(){return{books:[],book_keywords:[]}},mounted:function(){b.a.get("/assets/json/computer_book_keywords.json").then(e=>this.book_keywords=e.data).catch(e=>console.log(e)),b.a.get("/assets/json/computer_books.json").then(e=>{let t=e.data;t.forEach(e=>{let t=[];e.keywords.forEach(e=>{const n=this.book_keywords.filter(t=>t.id===e);n.length>0&&t.push(n[0])}),e.keyword_master=t}),this.books=t}).catch(e=>console.log(e))}},w=j,O=(n("0313"),Object(c["a"])(w,y,k,!1,null,null,null)),x=O.exports,P={components:{Head:p,Menu:g,Books:x},data(){return{active_page:2}}},E=P,M=Object(c["a"])(E,r,a,!1,null,null,null),$=M.exports,S=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(S["a"]),o["default"].config.productionTip=!1,new o["default"]({render:e=>e($)}).$mount("#app")}});
//# sourceMappingURL=app.js.map