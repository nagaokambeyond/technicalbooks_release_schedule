(function(e){function t(t){for(var o,r,l=t[0],i=t[1],s=t[2],d=0,b=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/technicalbooks_release_schedule/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0f56":function(e,t,n){"use strict";n("6022")},6022:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c={id:"app"},a=Object(o["e"])("br",null,null,-1);function r(e,t,n,r,l,i){const s=Object(o["m"])("Head"),u=Object(o["m"])("Books");return Object(o["i"])(),Object(o["d"])("div",c,[Object(o["g"])(s,{child_active_menu:e.active_menu},null,8,["child_active_menu"]),a,Object(o["g"])(u,{child_active_menu:e.active_menu,child_menu_id:e.active_menu_id},null,8,["child_active_menu","child_menu_id"])])}var l=n("9ab4"),i=n("bc3a"),s=n.n(i);const u={class:"navbar navbar-expand-lg navbar-light bg-light"},d={key:0,href:"#",class:"container-fluid"},b={class:"collapse navbar-collapse",id:"navbarNavDropdown"},h={class:"navbar-nav"},p={class:"nav-item dropdown"},_=Object(o["e"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," SNS ",-1),f={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"};function O(e,t,n,c,a,r){return Object(o["i"])(),Object(o["d"])("nav",u,[null!==this.child_active_menu?(Object(o["i"])(),Object(o["d"])("div",d,Object(o["n"])(this.child_active_menu[0].menu_title_head),1)):Object(o["c"])("",!0),Object(o["e"])("div",b,[Object(o["e"])("ul",h,[Object(o["e"])("li",p,[_,Object(o["e"])("ul",f,[Object(o["e"])("li",{class:"dropdown-item devicon-facebook-plain colored",onClick:t[0]||(t[0]=e=>r.share("facebook"))}," Facebookでシェアする ")])])])])])}var j={name:"Head",props:["child_active_menu"],methods:{share:function(e){let t="";const n="https://nagaokambeyond.github.io/technicalbooks_release_schedule/";switch(e){case"facebook":t="https://www.facebook.com/sharer/sharer.php?u="+n;break}""!==t&&window.open(t,"_blank")}}};j.render=O;var v=j;const m={class:"table table-sm table-striped"},k={colspan:"2"},g=Object(o["e"])("tr",null,[Object(o["e"])("th",{scope:"col"},"発売日"),Object(o["e"])("th",{scope:"col"},"タイトル")],-1),y=Object(o["e"])("br",null,null,-1),w=["href"],x=Object(o["e"])("br",null,null,-1);function S(e,t,n,c,a,r){return Object(o["i"])(),Object(o["d"])("table",m,[Object(o["e"])("thead",null,[Object(o["e"])("tr",null,[Object(o["e"])("td",k,[Object(o["p"])(Object(o["e"])("input",{type:"text",class:"form-control",placeholder:"例:Python","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchString=e)},null,512),[[o["o"],r.searchString]])])]),g]),Object(o["e"])("tbody",null,[(Object(o["i"])(!0),Object(o["d"])(o["a"],null,Object(o["l"])(a.books,e=>(Object(o["i"])(),Object(o["d"])("tr",{key:e.id},[Object(o["e"])("td",null,[Object(o["f"])(Object(o["n"])(e.release_date),1),y,Object(o["f"])(Object(o["n"])(e.book_publisher),1)]),Object(o["e"])("td",null,[Object(o["e"])("a",{href:e.book_url,target:"_blank",rel:"noopener noreferrer"},Object(o["n"])(e.book_title),9,w),x,(Object(o["i"])(!0),Object(o["d"])(o["a"],null,Object(o["l"])(e.keyword_master,e=>(Object(o["i"])(),Object(o["d"])(o["a"],null,[0!==e.icon.length?(Object(o["i"])(),Object(o["d"])("i",{key:e.id,class:Object(o["h"])(e.icon)},null,2)):(Object(o["i"])(),Object(o["d"])("span",{key:e.id,class:Object(o["h"])(e.id)}," ・"+Object(o["n"])(e.display_name)+"   ",3))],64))),256))])]))),128))])])}var M={name:"Books",props:["child_menu_id","child_active_menu"],data(){return{books:[],book_keywords:[],search_string:""}},methods:{setKeyWords:function(){let e=this;s.a.get(e.child_active_menu[0].menu_keyword_url).then((function(t){e.book_keywords=t.data})).catch(e=>console.log(e))},setBooks:function(e){s.a.get(this.child_active_menu[0].menu_data_url).then(t=>{let n=t.data.slice().reverse();n.forEach(e=>{let t=[];e.keywords.forEach(e=>{const n=this.book_keywords.filter(t=>t.id===e);n.length>0&&t.push(n[0])}),e.keyword_master=t}),0===e.length?this.books=n:this.books=n.filter(t=>(t.book_title+t.book_publisher+t.release_date).toLowerCase().indexOf(e.toLowerCase())>0)}).catch(e=>console.log(e))}},mounted:function(){let e=this;setTimeout((function(){e.setKeyWords(),e.setBooks("")}),500)},computed:{searchString:{get(){return this.search_string},set(e){this.search_string=e}}},watch:{search_string(e){this.setBooks(e)},child_menu_id(){this.setKeyWords(),this.setBooks("")}}};n("0f56");M.render=S;var P=M,B=(n("9c7d"),n("ce1f"));let L=class extends B["b"]{};L=Object(l["a"])([Object(B["a"])({components:{Head:v,Books:P},data(){return{active_menu_id:1,menu:null,active_menu:null}},methods:{setActiveMenu:function(){null!==this.menu&&(this.active_menu=this.menu.filter(e=>e.id===this.active_menu_id))}},created:function(){let e=this;s.a.get("https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json").then((function(t){e.menu=t.data,e.setActiveMenu()})).catch(e=>console.log(e))}})],L);var C=L;C.render=r;var D=C;n("7b17"),n("ab8b");Object(o["b"])(D).mount("#app")}});
//# sourceMappingURL=app.a61384fc.js.map