webpackJsonp([0],{"4ELh":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"js-cursor-dim",class:{active:e.isActive}},e._l(e.items,function(t){return i("li",{key:t.id,staticClass:"js-cursor-highlight js-cursor-underline",class:e.itemClass,attrs:{id:t.id},on:{click:e.itemClick}},[t.to?i("router-link",{attrs:{to:t.to}},[i("span",{staticClass:"underlined"},[e._v(" "+e._s(t.text)+" ")])]):e._e(),e._v(" "),t.href?i("a",{attrs:{href:t.href,target:"_blank"}},[i("span",{staticClass:"underlined"},[e._v(" "+e._s(t.text)+" ")])]):e._e()],1)}))},staticRenderFns:[]};var n=i("VU/8")({name:"animated_list",props:["items","itemClass","isActive","itemClick"]},a,!1,function(e){i("sVSl")},null,null).exports,r={name:"Sidebar",components:{animated_list:n},props:["navItems","onLoad","beforeClose","onClose"],data:function(){return{isActive:!1,isOpen:!1,width:this.getWidth(),height:this.getHeight()}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.onResize),this.getWidth(),this.getHeight()})},methods:{beforeLoad:function(e,t){TweenMax.set(e,{x:100-this.width})},loadAnimation:function(e,t){TweenMax.fromTo(e.querySelector("#sidebar-line"),2.5,{y:-this.height},{delay:.5,ease:Expo.easeInOut,y:0,onComplete:t,clearProps:"all"}),TweenMax.fromTo([e.querySelector("#sticky-logo"),e.querySelector("#sticky-burger")],1.5,{opacity:0,y:30},{delay:2,ease:Expo.easeOut,opacity:1,y:0,clearProps:"all",onComplete:t})},burgerClickHandler:function(e,t){this.isOpen?(this.isOpen=!1,this.close(e,t)):(this.isOpen=!0,this.open(e,t))},open:function(e,t){TweenMax.to(this.$el,1,{x:0,ease:Expo.easeInOut})},close:function(e,t){this.beforeClose(),TweenMax.killTweensOf(this.$el),TweenMax.to(this.$el,1,{x:100-this.width,ease:Expo.easeInOut,onComplete:this.onClose})},getWidth:function(){return document.documentElement.clientWidth},getHeight:function(){return document.documentElement.clientHeight},setActive:function(e,t){this.isActive=!0,"function"==typeof this.onLoad&&this.onLoad()},onResize:function(){this.width=this.getWidth(),this.height=this.getHeight(),this.isOpen||TweenMax.set(this.$el,{x:100-this.width})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{appear:""},on:{"before-appear":e.beforeLoad,appear:e.loadAnimation,"after-appear":e.setActive}},[i("div",{staticClass:"site-sidebar",attrs:{id:"site-sidebar"}},[i("div",{staticClass:"sidebar-line",attrs:{id:"sidebar-line"}}),e._v(" "),i("div",{staticClass:"sidebar-extend",attrs:{id:"sidebar-extend"}},[i("div",{staticClass:"sidebar-top-el extend-title",attrs:{id:"extend-title"}},[i("div",{staticClass:"title",attrs:{id:"title"}},[i("router-link",{attrs:{to:"/"}},[i("span",[e._v("Pachinko Bot")])])],1)]),e._v(" "),i("div",{staticClass:"sidebar-mid-el sidebar-nav",attrs:{id:"sidebar-nav"}},[i("animated_list",{staticClass:"nav-list",attrs:{items:e.navItems,"item-class":"nav-item","is-active":e.isOpen,"item-click":e.burgerClickHandler,id:"nav-list"}})],1)]),e._v(" "),i("div",{staticClass:"sidebar-sticky",attrs:{id:"sidebar-sticky"}},[i("div",{staticClass:"sidebar-top-el sticky-logo",attrs:{id:"sticky-logo"}},[i("div",{staticClass:"logo",attrs:{id:"logo"}},[i("svg",{attrs:{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"}},[i("circle",{attrs:{cx:"100",cy:"100",r:"100",fill:"white"}})])])]),e._v(" "),i("div",{staticClass:"sidebar-mid-el sticky-burger",class:{active:e.isActive,open:e.isOpen},attrs:{id:"sticky-burger"},on:{click:e.burgerClickHandler}},[i("div",{staticClass:"patty"}),e._v(" "),i("div",{staticClass:"patty"}),e._v(" "),i("div",{staticClass:"patty"})])])])])},staticRenderFns:[]};var l=i("VU/8")(r,o,!1,function(e){i("4ELh")},null,null).exports,c={name:"App",components:{Sidebar:l},data:function(){return{pages:[{text:"Mission",id:"mission-nav",to:"/"},{text:"Journal",id:"journal-nav",to:"journal"},{text:"Team",id:"team-nav",to:"team"}],loaded:!1}},methods:{setLoaded:function(){this.loaded=!0},setUnloaded:function(){this.loaded=!1}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Sidebar",{attrs:{navItems:this.pages,onLoad:this.setLoaded,beforeClose:this.setUnloaded,onClose:this.setLoaded}}),this._v(" "),this.loaded?t("router-view"):this._e()],1)},staticRenderFns:[]};var u=i("VU/8")(c,m,!1,function(e){i("nzgx")},null,null).exports,d=i("/ocq"),p={name:"MemberPage",props:["member","onClose"],components:{animated_list:n},data:function(){return{isOpen:!1,width:this.getWidth(),height:this.getHeight()}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.onResize),this.onResize()})},methods:{close:function(e,t){TweenMax.killTweensOf(this.$el),TweenMax.to(this.$el,1,{x:-this.width,ease:Expo.easeInOut,onComplete:this.setClose,onCompleteParams:[e,t]})},open:function(){this.isOpen=!0,TweenMax.to(this.$el,1,{x:0,ease:Expo.easeInOut})},getWidth:function(){return.5*document.documentElement.clientWidth},getHeight:function(){return.5*document.documentElement.clientHeight},onResize:function(){this.width=this.getWidth(),this.height=this.getHeight(),this.isOpen||TweenMax.set(this.$el,{x:-this.width})},setClose:function(e,t){this.isOpen=!1,"function"==typeof e?e(t):"function"==typeof this.onClose&&this.onClose()},itemClick:function(){return 2}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-page",class:{active:e.isOpen},attrs:{id:"members-page"}},[i("div",{staticClass:"page-wrapper"},[i("div",{staticClass:"page-line"}),e._v(" "),e.member?i("div",{staticClass:"member-about"},[i("div",{staticClass:"member-header"},[i("div",{staticClass:"member-title"},[i("div",{staticClass:"member-name"},[i("span",[e._v(e._s(e.member.name))])]),e._v(" "),i("div",{staticClass:"member-position"},[i("span",[e._v(e._s(e.member.position))])])]),e._v(" "),i("div",{staticClass:"member-links"},[i("animated_list",{staticClass:"nav-list",attrs:{items:e.member.social,"item-class":"member-link","is-active":!0,"item-click":e.itemClick,id:"nav-list"}})],1)]),e._v(" "),i("div",{staticClass:"member-description"},[i("span",[e._v(e._s(e.member.description))])])]):e._e(),e._v(" "),i("div",{staticClass:"cross",on:{click:e.close}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20"}},[i("path",{attrs:{d:" M 0,18.5 L 18.5, 0, L 20, 1.5, L 1.5, 20 Z m0-17 L 1.5, 0, L 20, 18.5, L 18.5, 20 Z"}})])])])])},staticRenderFns:[]};var v=i("VU/8")(p,h,!1,function(e){i("PxFB")},null,null).exports,g={name:"animated_image",props:["imageSrc","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-block"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.to(e,2.5,{delay:t,width:0,ease:Power4.easeOut})}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-image"},[t("img",{attrs:{src:this.imageSrc}}),this._v(" "),t("div",{staticClass:"animated-block",attrs:{id:"animated-block"}})])])},staticRenderFns:[]};var b=i("VU/8")(g,f,!1,function(e){i("rpNr")},null,null).exports,_={name:"animated_title",props:["titleText","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-title"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.fromTo(e,2,{opacity:0,yPercent:25},{delay:t,yPercent:0,opacity:1,ease:Power4.easeOut,clearProps:"all"})}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-title-container",attrs:{id:"animated-title-container"}},[t("h1",{staticClass:"animated-title",attrs:{id:"animated-title"}},[t("span",[this._v(this._s(this.titleText))])])])])},staticRenderFns:[]};var w=i("VU/8")(_,x,!1,function(e){i("uhg0")},null,null).exports,C={name:"animated_par",props:["parText","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-par"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.fromTo(e,2,{opacity:0,yPercent:25},{delay:t,opacity:1,yPercent:0,ease:Power4.easeOut,clearProps:"all"})}}},q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-par-container"},[t("p",{staticClass:"animated-par",attrs:{id:"animated-par"}},[t("span",[this._v(this._s(this.parText))])])])])},staticRenderFns:[]};var y={name:"Team",components:{MemberPage:v,animated_image:b,animated_title:w,animated_par:i("VU/8")(C,q,!1,function(e){i("wplO")},null,null).exports},data:function(){return{team_members:[{name:"Gurkiran Dhaliwal",id:"gurkiran",image:"static/images/temp-prof.jpg",position:"Web Lackey",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]},{name:"Stephanie Djadjadi",id:"stephanie",image:"static/images/temp-prof.jpg",position:"Finance Minister",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]},{name:"Michael Lee",id:"michael",image:"static/images/temp-prof.jpg",position:"Social Media Rep",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]},{name:"Lavanya Mittal",id:"lavanya",image:"static/images/temp-prof.jpg",position:"Publicity Chair",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]},{name:"Will Tai",id:"will",image:"static/images/temp-prof.jpg",position:"Team Leader",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]}],isActive:!1,activeMember:null,isLocked:!1}},methods:{beforeEnter:function(e,t){},enterAnimation:function(e,t){t()},setActive:function(e,t){this.isActive=!0},isEven:function(e){return!1},isMid:function(e){return e%3==1},isLast:function(e){return e%3==2},memberClick:function(e){if(this.$refs.memberPage.isOpen){var t=this.newMember.bind(this);this.$refs.memberPage.close(t,e)}else this.newMember(e)},newMember:function(e){this.activeMember=e,this.$refs.memberPage.open(),this.isLocked=!0},setUnlocked:function(){console.log("HELLO"),this.isLocked=!1}}},A={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{on:{"before-enter":e.beforeEnter,enter:e.enterAnimation,"after-enter":e.setActive}},[i("section",{staticClass:"team-page",attrs:{id:"team-page"}},[i("div",{staticClass:"page-wrapper",class:{locked:e.isLocked}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],class:"page-title page-section",attrs:{id:"page-title",titleText:"Team"}}),e._v(" "),i("div",{staticClass:"team-about page-section",attrs:{id:"team-about"}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{titleText:"We are a team of blah blah blah working on Lorem I mean its not ibsen...",delay:.5}}),e._v(" "),i("animated_par",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{parText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",delay:1}})],1),e._v(" "),i("animated_image",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],class:"team-image page-section",attrs:{id:"team-image",imageSrc:"static/images/team.jpg",delay:1}}),e._v(" "),i("div",{staticClass:"members-about page-section",attrs:{id:"members-description"}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{titleText:"Meet our memebrs",delay:2}}),e._v(" "),i("animated_par",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{parText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.",delay:2.5}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"team-members page-section",attrs:{id:"team-members"}},[i("ul",{staticClass:"member-list",attrs:{id:"member-list"}},e._l(e.team_members,function(t,s){return i("li",{key:t.id,staticClass:"team-member",class:{mid:e.isMid(s),right:e.isEven(s),last:e.isLast(s)},attrs:{id:t.id},on:{click:function(i){e.memberClick(t)}}},[i("div",{staticClass:"member-image"},[i("img",{attrs:{src:t.image}})]),e._v(" "),i("div",{staticClass:"member-title"},[i("div",{staticClass:"member-name"},[i("span",{staticClass:"underlined"},[e._v(e._s(t.name))])]),e._v(" "),i("div",{staticClass:"member-position"},[i("span",[e._v(e._s(t.position))])])])])}))]),e._v(" "),i("MemberPage",{ref:"memberPage",attrs:{member:e.activeMember,onClose:e.setUnlocked}})],1)])])},staticRenderFns:[]};var k=i("VU/8")(y,A,!1,function(e){i("Y7eA")},null,null).exports,M={name:"Mission",components:{animated_title:w},data:function(){return{isActive:!1}},methods:{beforeEnter:function(e,t){},enterAnimation:function(e,t){t()},setActive:function(e,t){this.isActive=!0}}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation,"after-enter":this.setActive}},[t("section",{staticClass:"mission-page",attrs:{id:"mission-page"}},[t("animated_title",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],class:"page-title",attrs:{id:"page-title",titleText:"Pachinko Bot"}})],1)])},staticRenderFns:[]};var P=i("VU/8")(M,L,!1,function(e){i("rp8O")},null,null).exports;s.a.use(d.a);var T=new d.a({routes:[{path:"/",name:"Mission",component:P},{path:"/team",name:"Team",component:k}]});i("+Uzz");s.a.config.productionTip=!1,s.a.component("site-sidebar",l),new s.a({el:"#app",router:T,components:{App:u},template:"<App/>"})},PxFB:function(e,t){},Y7eA:function(e,t){},nzgx:function(e,t){},rp8O:function(e,t){},rpNr:function(e,t){},sVSl:function(e,t){},uhg0:function(e,t){},wplO:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.37fcd56cb76b47c530cf.js.map