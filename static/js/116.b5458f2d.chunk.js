"use strict";(self.webpackChunkdrink_master_front=self.webpackChunkdrink_master_front||[]).push([[116],{2216:function(e,n,t){t.d(n,{D8:function(){return d},ZE:function(){return l},fQ:function(){return _},jn:function(){return u},zW:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),s=t(1243),c=JSON.parse(localStorage.getItem("persist:auth")).token,o=JSON.parse(c);s.Z.defaults.baseURL="https://drink-master-back-end.onrender.com/",s.Z.defaults.headers.common.Authorization="Bearer ".concat(o);var u=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/api/recipes/category-list");case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/api/glasses");case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/api/ingredients/list");case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/api/own",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/api/recipes/main-page");case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},7003:function(e,n,t){t.d(n,{D:function(){return a},b:function(){return r}});var r=function(e,n){localStorage.setItem("".concat(e),JSON.stringify(n))},a=function(e){var n=localStorage.getItem("".concat(e));return JSON.parse(n)}},1202:function(e,n,t){var r=t(9439),a=t(2791);n.Z=function(e){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),i=t[0],s=t[1];(0,a.useEffect)((function(){var n=new IntersectionObserver((function(e){var n=(0,r.Z)(e,1)[0];s(n.isIntersecting)}),{threshold:.2});return n.observe(e.current),function(){return n.disconnect()}}),[i,e]),(0,a.useEffect)((function(){i&&(e.current.classList.add("active"),e.current.querySelector("img")&&e.current.querySelector("img").classList.add("active"))}),[i,e])}},7538:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5861),a=t(9439),i=t(4687),s=t.n(i),c=t(2791),o=t(5118),u=t(1087),l=t.p+"static/media/HeroGlassImage.8f480c571fce36a67c5e.png",d=t.p+"static/media/mobileHeroImage.d9b565ad37a697e26683.png",_=t(1202),p=t(3329),f=function(){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1],i=(0,c.useRef)(null);return(0,_.Z)(i),(0,c.useEffect)((function(){var e=function(){r(window.innerWidth<=767)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,p.jsxs)("section",{className:o.Z.hero_section,children:[(0,p.jsxs)("div",{"data-item":!0,ref:i,children:[(0,p.jsxs)("h1",{className:o.Z.hero_title,children:["Craft Your Perfect",(0,p.jsx)("br",{})," Drink with Drink Master"]}),(0,p.jsxs)("p",{className:o.Z.main_p,children:["Unlock your inner mixologist with Drink Master, your one-",(0,p.jsx)("br",{}),"stop destination for exploring, crafting, and mastering the",(0,p.jsx)("br",{})," world's finest beverages."]}),(0,p.jsx)(u.rU,{className:o.Z.hero_button,to:"/add",children:"Add recipe"})]}),t?(0,p.jsx)("img",{className:o.Z.hero_image,src:d,alt:"Hero Nice Glass"}):(0,p.jsx)("img",{className:o.Z.hero_image,src:l,alt:"Hero Nice Glass"})]})},m=function(e){var n=e.drink,t=e.drinkThumb,r=e.id,a=e.popup,i=(0,c.useRef)(null);(0,_.Z)(i);var s=a.map((function(e){return null!==e&&void 0!==e&&e.title?e.title:""})).toString().split(",").join(", ");return(0,p.jsx)("li",{className:"".concat(o.Z.mainPageList_item," ").concat(o.Z.card,"  skeleton "),title:s,ref:i,"data-item":!0,children:(0,p.jsxs)(u.rU,{to:"/recipe/".concat(r),children:[(0,p.jsx)("img",{src:t,alt:"drink",height:400,className:"".concat(o.Z.image," animate"),loading:"lazy"}),(0,p.jsxs)("div",{className:o.Z.card_text_wrapper,children:[(0,p.jsx)("p",{className:o.Z.card_name,children:n}),(0,p.jsx)("p",{className:o.Z.ingredients_text,children:"ingredients "})]})]})})};var g=function(e){var n=e.collection,t=e.title,r=(0,c.useRef)(null);return(0,_.Z)(r),(0,p.jsxs)("li",{ref:r,"data-item":!0,children:[(0,p.jsx)(u.rU,{to:"/drinks",state:{category:t},children:(0,p.jsx)("h2",{className:o.Z.category_title,children:t})}),(0,p.jsx)("ul",{className:o.Z.mainPageList,children:0!==n.length&&n.map((function(e){var n=e.drink,t=e.drinkThumb,r=e._id,a=e.ingredients;return(0,p.jsx)(m,{drink:n,drinkThumb:t,id:r,popup:a},r)}))})]})},h=t(2216),v=t(7003),x=t(6949),k=function(e){var n=e.children;return(0,p.jsx)(p.Fragment,{children:n})},Z=function(){var e=(0,c.useState)(null),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,c.useEffect)((function(){if((0,v.D)("main-page")){var e=(0,v.D)("main-page");e&&i(e)}else(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.zW)();case 2:(n=e.sent)&&(0,v.b)("main-page",n),n&&i(n);case 5:case"end":return e.stop()}}),e)})))();(0,v.D)("ingredients-names")||(0,v.D)("ingredients-list")||(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.D8)();case 2:n=e.sent,(0,v.b)("ingredients-list",n);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,p.jsxs)("div",{className:o.Z.main,children:[(0,p.jsx)(f,{}),(0,p.jsx)(k,{children:(0,p.jsxs)("section",{className:o.Z.drinks_section,children:[(0,p.jsx)("ul",{children:(0,p.jsx)(c.Suspense,{fallBack:(0,p.jsx)(x.Z,{}),children:t&&t.sort((function(e,n){return n.items.length-e.items.length})).slice(0,4).map((function(e){return e.items.length>0&&(0,p.jsx)(g,{title:e.category,collection:e.items},e._id)}))})}),t&&(0,p.jsx)(u.rU,{className:"".concat(o.Z.other_drinks_btn," ").concat(o.Z.other_drinks_btn),to:"/drinks",children:"Other drinks"})]})})]})}},5118:function(e,n){n.Z={mainPageList:"MainPage_mainPageList__ILvfc",image:"MainPage_image__8u-Jk",mainPageList_item:"MainPage_mainPageList_item__4l8cZ",card:"MainPage_card__4qTM6",hero_title:"MainPage_hero_title__8zPus",main_p:"MainPage_main_p__hjLn3",drinks_section:"MainPage_drinks_section__KWdPh",hero_section_wrapper:"MainPage_hero_section_wrapper__in5cU",hero_section:"MainPage_hero_section__uNAmo",hero_button:"MainPage_hero_button__rWCEs",other_drinks_btn:"MainPage_other_drinks_btn__4oIzj",category_title:"MainPage_category_title__aQKj2",card_name:"MainPage_card_name__xqAN-",ingredients_text:"MainPage_ingredients_text__zUAyx",card_link:"MainPage_card_link__beete",card_text_wrapper:"MainPage_card_text_wrapper__4i+lI",skeleton:"MainPage_skeleton__hqNoj"}}}]);
//# sourceMappingURL=116.b5458f2d.chunk.js.map