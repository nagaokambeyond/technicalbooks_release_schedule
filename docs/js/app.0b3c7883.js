(function(e){function t(t){for(var o,i,a=t[0],c=t[1],l=t[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/technicalbooks_release_schedule/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0313":function(e,t,n){"use strict";n("548a")},"548a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Head",{attrs:{child_active_menu:e.active_menu}}),n("br"),n("Books",{attrs:{child_active_menu:e.active_menu,child_menu_id:e.active_menu_id}})],1)},s=[],i=n("bc3a"),a=n.n(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{type:"light",variant:"light"}},[null!==this.child_active_menu?n("h3",[e._v(" "+e._s(this.child_active_menu[0].menu_title_head)+" ")]):e._e()])},l=[],u={name:"Head",props:["child_active_menu"]},d=u,h=n("2877"),_=Object(h["a"])(d,c,l,!1,null,null,null),f=_.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("td",{attrs:{colspan:"2"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"form-control",attrs:{type:"text",placeholder:"例:Python"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}})])]),e._m(0)]),n("tbody",[e._l(e.books,(function(t){return[n("tr",{key:t.id},[n("td",[e._v(e._s(t.release_date)),n("br"),e._v(e._s(t.book_publisher))]),n("td",[n("a",{attrs:{href:t.book_url}},[e._v(e._s(t.book_title))]),n("br"),e._l(t.keyword_master,(function(t){return[0!==t.icon.length?[n("i",{key:t.id,class:t.icon})]:[n("span",{key:t.id,class:t.id},[e._v(" ・"+e._s(t.display_name)+" ")])]]}))],2)])]}))],2)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{attrs:{scope:"col"}},[e._v("発売日")]),n("th",{attrs:{scope:"col"}},[e._v("タイトル")])])}],v={name:"Books",props:["child_menu_id","child_active_menu"],data(){return{books:[],book_keywords:[],search_string:""}},methods:{setKeyWords:function(){let e=this;a.a.get(e.child_active_menu[0].menu_keyword_url).then((function(t){e.book_keywords=t.data})).catch(e=>console.log(e))},setBooks:function(e){a.a.get(this.child_active_menu[0].menu_data_url).then(t=>{let n=t.data;n.forEach(e=>{let t=[];e.keywords.forEach(e=>{const n=this.book_keywords.filter(t=>t.id===e);n.length>0&&t.push(n[0])}),e.keyword_master=t}),0===e.length?this.books=n:this.books=n.filter(t=>(t.book_title+t.book_publisher+t.release_date).toLowerCase().indexOf(e.toLowerCase())>0)}).catch(e=>console.log(e))}},mounted:function(){let e=this;setTimeout((function(){e.setKeyWords(),e.setBooks("")}),500)},computed:{searchString:{get(){return this.search_string},set(e){this.search_string=e}}},watch:{search_string(e){this.setBooks(e)},child_menu_id(){this.setKeyWords(),this.setBooks("")}}},b=v,g=(n("0313"),Object(h["a"])(b,p,m,!1,null,null,null)),y=g.exports,k=(n("9c7d"),{components:{Head:f,Books:y},data(){return{active_menu_id:1,menu:null,active_menu:null}},methods:{setActiveMenu:function(){null!==this.menu&&(this.active_menu=this.menu.filter(e=>e.id===this.active_menu_id))}},created:function(){let e=this;a.a.get("https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json").then((function(t){e.menu=t.data,e.setActiveMenu()})).catch(e=>console.log(e))}}),w=k,O=Object(h["a"])(w,r,s,!1,null,null,null),j=O.exports,x=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(x["a"]),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(j)}).$mount("#app")}});
//# sourceMappingURL=app.0b3c7883.js.map