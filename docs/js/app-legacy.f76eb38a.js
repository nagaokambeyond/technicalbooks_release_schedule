(function(){"use strict";var e={302:function(e,t,n){var o=n(963),r=n(252);const a={id:"app"},i=(0,r._)("br",null,null,-1);function l(e,t,n,o,l,s){const c=(0,r.up)("Head"),u=(0,r.up)("Books");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c,{child_active_menu:e.active_menu},null,8,["child_active_menu"]),i,(0,r.Wm)(u,{child_active_menu:e.active_menu,child_menu_id:e.active_menu_id},null,8,["child_active_menu","child_menu_id"])])}var s=n(655),c=n(945),u=n(577);const d={class:"navbar navbar-expand-lg navbar-light bg-light"},h={key:0,href:"#",class:"container-fluid"},_={class:"collapse navbar-collapse",id:"navbarNavDropdown"},f={class:"navbar-nav"},b={class:"nav-item dropdown"},v=(0,r._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," SNS ",-1),m={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"};function p(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("nav",d,[null!==this.child_active_menu?((0,r.wg)(),(0,r.iD)("div",h,(0,u.zw)(this.child_active_menu[0].menu_title_head),1)):(0,r.kq)("",!0),(0,r._)("div",_,[(0,r._)("ul",f,[(0,r._)("li",b,[v,(0,r._)("ul",m,[(0,r._)("li",{class:"dropdown-item devicon-facebook-plain colored",onClick:t[0]||(t[0]=e=>i.share("facebook"))}," Facebookでシェアする ")])])])])])}var k={name:"HeadItem",props:["child_active_menu"],methods:{share:function(e){let t="";const n="https://nagaokambeyond.github.io/technicalbooks_release_schedule/";switch(e){case"facebook":t=`https://www.facebook.com/sharer/sharer.php?u=${n}`;break}""!==t&&window.open(t,"_blank")}}},g=n(744);const w=(0,g.Z)(k,[["render",p]]);var y=w;const O={class:"table table-sm table-striped"},S={colspan:"2"},j=(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"発売日"),(0,r._)("th",{scope:"col"},"タイトル")],-1),x=["href"];function D(e,t,n,a,i,l){return(0,r.wg)(),(0,r.iD)("table",O,[(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("td",S,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"例:Python","data-hotkey":"/","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchString=e)},null,512),[[o.nr,l.searchString]])])]),j]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.books,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",null,(0,u.zw)(e.release_date),1),(0,r._)("td",null,[(0,r._)("a",{href:e.book_url,target:"_blank",rel:"noopener noreferrer"},(0,u.zw)(e.book_title),9,x)])])))),128))])])}var B=n(793),M={name:"BooksItem",props:["child_menu_id","child_active_menu"],data(){return{books:[],book_keywords:[],search_string:""}},methods:{setKeyWords:function(){let e=this;c.Z.get(e.child_active_menu[0].menu_keyword_url).then((function(t){e.book_keywords=t.data})).catch((e=>console.log(e)))},setBooks:function(e){c.Z.get(this.child_active_menu[0].menu_data_url).then((t=>{let n=t.data.slice().reverse();n.forEach((e=>{let t=[];e.keywords.forEach((e=>{const n=this.book_keywords.filter((t=>t.id===e));n.length>0&&t.push(n[0])})),e.keyword_master=t})),0===e.length?this.books=n:this.books=n.filter((t=>(t.book_title+t.book_publisher+t.release_date).toLowerCase().indexOf(e.toLowerCase())>0))})).catch((e=>console.log(e)))}},mounted:function(){let e=this;setTimeout((function(){e.setKeyWords(),e.setBooks("")}),500);for(const t of document.querySelectorAll("[data-hotkey]"))(0,B.N9)(t)},onBeforeUnmount:function(){for(const e of document.querySelectorAll("[data-hotkey]"))(0,B.Tz)(e)},computed:{searchString:{get(){return this.search_string},set(e){this.search_string=e}}},watch:{search_string(e){this.setBooks(e)},child_menu_id(){this.setKeyWords(),this.setBooks("")}}};const T=(0,g.Z)(M,[["render",D]]);var Z=T,C=n(124);let P=class extends C.w3{};P=(0,s.gn)([(0,C.Ei)({components:{Head:y,Books:Z},data(){return{active_menu_id:1,menu:null,active_menu:null}},methods:{setActiveMenu:function(){null!==this.menu&&(this.active_menu=this.menu.filter((e=>e.id===this.active_menu_id)))}},created:function(){let e=this;c.Z.get("https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json").then((function(t){e.menu=t.data,e.setActiveMenu()})).catch((e=>console.log(e)))}})],P);var W=P;const z=(0,g.Z)(W,[["render",l]]);var A=z;n(877);(0,o.ri)(A).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunktechnicalbooks_release_schedule"]=self["webpackChunktechnicalbooks_release_schedule"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(302)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.f76eb38a.js.map