"use strict";(self.webpackChunkdrink_master_front=self.webpackChunkdrink_master_front||[]).push([[455],{5286:function(n,e,t){t.d(e,{U:function(){return o}});var i={mainTitle:"MainTitle_mainTitle__C85E1"},r=t(6949),a=t(3329);function o(n){var e=n.title,t=n.isLoading;return(0,a.jsxs)("span",{style:{display:"flex",alignItems:"baseline",flexWrap:"wrap",gap:"25px"},children:[(0,a.jsx)("h1",{className:i.mainTitle,children:e}),t&&(0,a.jsx)(r.Z,{styles:{margin:"0"}})]})}},6307:function(n,e,t){t.d(e,{D:function(){return p}});var i=t(9434),r=t(7425),a="Paginator_paginatorContainer__bXu4O",o="Paginator_pagesList__fIvLN",s="Paginator_button__TBgKi",c="Paginator_buttonIcon__PM4WD",d="Paginator_pageButton__HtTvm",u="Paginator_active__HwRvN",l="Paginator_dots__fLpfi",g=function(n,e,t){var i=function(n){var e=3;return n>=768&&t<1440?e=5:n>=1440&&(e=7),e}(t);var r,a,o,s=(a=n,o=i,1===(r=e)||r<=Math.floor(o/2)||a<=o?1:r===a||r>a-o?a-o:r-Math.floor(o/2));var c=function(n,e,t){return n<e||n===e?n-1:1===t?e:t+e>=n||t===n?n-1:t+e}(n,i,s);var d=function(n,e){for(var t=[],i=n;i<e;i++)t.push(i+1);return t}(s,c);var u=function(n,e,t,i){var r=!1,a=!1;return 3===n&&(r=e>=Math.floor(n/2)+1,a=i<t-Math.floor(n/2)-1),5===n&&(r=e>=Math.floor(n/2),a=i<t-Math.floor(n/2)),7===n&&(r=e>=Math.floor(n/2)-1,a=i<=t-Math.floor(n/2)),{shouldRenderLeftDots:r,shouldRenderRightDots:a}}(i,s,n,c);return{numbers:d,DOTS:"...",shouldRenderLeftDots:u.shouldRenderLeftDots,shouldRenderRightDots:u.shouldRenderRightDots}},_=t(1761),h=t(3329),p=function(n){var e=n.page,t=n.totalPages,p=n.onChangePage,f=(0,i.I0)(),x=(0,_.Z)().width,m=t,k=g(t,e,x),b=k.numbers,v=k.DOTS,j=k.shouldRenderLeftDots,Z=k.shouldRenderRightDots,C=e===m,P=1===e,y=function(){window.scrollTo({top:0,behavior:"smooth"})};return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("button",{type:"button",onClick:function(){f(p(e-1)),y()},className:s,disabled:P,children:(0,h.jsx)(r.jW7,{className:c})}),(0,h.jsxs)("ul",{className:o,children:[(0,h.jsx)("li",{children:(0,h.jsx)("button",{type:"button",onClick:function(){f(p(1)),y()},className:"".concat(d," ").concat(1===e&&u),children:1})},1),j&&(0,h.jsx)("li",{className:l,children:v},"leftDots"),b.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)("button",{type:"button",onClick:function(){f(p(n)),y()},className:"".concat(d," ").concat(e===n&&u),children:n})},n)})),Z&&(0,h.jsx)("li",{className:l,children:v},"rightDOTS"),(0,h.jsx)("li",{children:(0,h.jsx)("button",{type:"button",onClick:function(){return f(p(m))},className:"".concat(d," ").concat(e===m&&u),children:m})},m)]}),(0,h.jsx)("button",{type:"button",onClick:function(){return f(p(e+1))},className:s,disabled:C,children:(0,h.jsx)(r.jfD,{className:c})})]})}},1202:function(n,e,t){var i=t(9439),r=t(2791);e.Z=function(n){var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),a=t[0],o=t[1];(0,r.useEffect)((function(){var e=new IntersectionObserver((function(n){var e=(0,i.Z)(n,1)[0];o(e.isIntersecting)}),{threshold:.2});return e.observe(n.current),function(){return e.disconnect()}}),[a,n]),(0,r.useEffect)((function(){a&&(n.current.classList.add("active"),n.current.querySelector("img")&&n.current.querySelector("img").classList.add("active"))}),[a,n])}},2923:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i=t(1413),r=t(9439),a=t(2791),o=t(9434),s=t(1087),c=t(7689),d=t(3958),u=t(6307),l=(t(5118),"DrinksSearch_noDrinksContainer__VQ-Dh"),g="DrinksSearch_drinkCardContainer__l3KRE",_="DrinksSearch_inputDrinks__iyuzk",h="DrinksSearch_drinkRequestForm__nJ4TD",p="DrinksSearch_inputContainer__dJ8JW",f="DrinksSearch_searchSvg__iSpyk",x=t(3329),m=function(n){var e=n.className;return(0,x.jsxs)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[(0,x.jsx)("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,x.jsx)("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},k={image:"DrinkItemCard_image__Bpn4m",animate:"DrinkItemCard_animate__+XbSA",card:"DrinkItemCard_card__xI6wZ",card_name:"DrinkItemCard_card_name__oWqAi",ingredients_text:"DrinkItemCard_ingredients_text__ABjjo",card_link:"DrinkItemCard_card_link__NSEtd",card_text_wrapper:"DrinkItemCard_card_text_wrapper__DQrNO",skeleton:"DrinkItemCard_skeleton__+j9c+"},b=t(1202),v=function(n){var e=n.drink,t=n.drinkThumb,i=n.id,r=n.popup,o=(0,a.useRef)(null);(0,b.Z)(o);var c=r.map((function(n){return null!==n&&void 0!==n&&n.title?n.title:""})).toString().split(",").join(", ");return(0,x.jsx)("li",{className:"".concat(k.mainPageList_item," ").concat(k.card),title:c,"data-item":!0,ref:o,children:(0,x.jsxs)(s.rU,{to:"/recipe/".concat(i),children:[(0,x.jsx)("img",{src:t,alt:"drink",height:400,className:k.image,loading:"lazy"}),(0,x.jsxs)("div",{className:k.card_text_wrapper,children:[(0,x.jsx)("p",{className:k.card_name,children:e}),(0,x.jsx)("p",{className:k.ingredients_text,children:"Ingredients "})]})]})})};var j=t(2277),Z=t(355),C=t(9183),P=t(2910),y=t(7003),D=function(n){return n.drinks.categoryList},L=function(n){return n.drinks.ingredientList},w=function(n){return n.drinks.isLoading},N=function(n){return n.drinks.entities},S=function(n){return n.drinks.page},M=function(n){return n.drinks.totalPages},F=function(){return{categoryList:(0,o.v9)(D),ingredientList:(0,o.v9)(L),isLoading:(0,o.v9)(w),entities:(0,o.v9)(N),currentPage:(0,o.v9)(S),totalPages:(0,o.v9)(M)}},R=t(1761),E={singleValue:function(n){return(0,i.Z)((0,i.Z)({},n),{},{color:"#F3F3F3"})},control:function(n,e){var t=e.isSelected;return(0,i.Z)((0,i.Z)({},n),{},{display:"flex",color:t?"#F3F3F3":"rgba(243, 243, 243, 0.40)",backgroundColor:"#161f37",width:"100%",outline:"none",borderWidth:"1px",borderRadius:"60px",paddingLeft:"24px",paddingRight:"24px",fontSize:"17px",fontWeight:"400",height:"54px",border:"none",boxShadow:"none","@media only screen and (min-width: 768px)":(0,i.Z)((0,i.Z)({},n["@media only screen and (min-width: 768px)"]),{},{width:"199px",height:"56px"})})},option:function(n,e){var t=e.isFocused;return(0,i.Z)((0,i.Z)({},n),{},{backgroundColor:"#161f37",color:t?"#F3F3F3":"rgba(243, 243, 243, 0.40)",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px"})},menu:function(n){return(0,i.Z)((0,i.Z)({},n),{},{paddingBottom:"14px",paddingLeft:"23px",paddingRight:"8px",paddingTop:"14px",borderRadius:"20px",backgroundColor:"#161F37"})},menuList:function(n){return(0,i.Z)((0,i.Z)({},n),{},{"&::-webkit-scrollbar":{display:"none"},boxSizing:"content-box"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(n){return(0,i.Z)((0,i.Z)({},n),{},{padding:0})}},I={singleValue:function(n){return(0,i.Z)((0,i.Z)({},n),{},{color:"#F3F3F3"})},control:function(n,e){var t=e.isSelected;return(0,i.Z)((0,i.Z)({},n),{},{display:"flex",color:t?"#F3F3F3":"rgba(243, 243, 243, 0.40)",backgroundColor:"#161f37",width:"100%",outline:"none",borderWidth:"1px",borderRadius:"60px",paddingLeft:"24px",paddingRight:"24px",fontSize:"17px",fontWeight:"400",height:"54px",border:"none",boxShadow:"none","@media only screen and (min-width: 768px)":(0,i.Z)((0,i.Z)({},n["@media only screen and (min-width: 768px)"]),{},{width:"199px",height:"56px"})})},option:function(n,e){var t=e.isFocused;return(0,i.Z)((0,i.Z)({},n),{},{backgroundColor:"#161f37",color:t?"#F3F3F3":"rgba(243, 243, 243, 0.40)",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px"})},menu:function(n){return(0,i.Z)((0,i.Z)({},n),{},{paddingBottom:"14px",paddingLeft:"23px",paddingRight:"8px",paddingTop:"14px",borderRadius:"20px",backgroundColor:"#161F37"})},menuList:function(n){return(0,i.Z)((0,i.Z)({},n),{},{boxSizing:"content-box","&::-webkit-scrollbar":{width:"8px",height:"110px",position:"relative",right:"8px",top:0},"&::-webkit-scrollbar-thumb":{borderRadius:"20px",background:"#434D67"}})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(n){return(0,i.Z)((0,i.Z)({},n),{},{padding:0})}},T=function(n){var e=n.search,t=n.updateState,k=(0,o.I0)(),b=(0,a.useRef)(!1),D=(0,a.useRef)(!1);console.log("search",e);var L=F(),w=L.categoryList,N=L.ingredientList,S=L.isLoading,M=L.entities,T=L.totalPages,W=L.currentPage,q=(0,s.lr)(),z=(0,r.Z)(q,2),O=z[0],A=z[1],B=(0,a.useState)(e||null),U=(0,r.Z)(B,2),H=U[0],J=U[1],K=(0,a.useState)(""),Q=(0,r.Z)(K,2),V=Q[0],X=Q[1],G=(0,a.useState)(""),Y=(0,r.Z)(G,2),$=Y[0],nn=Y[1],en=(0,a.useState)(""),tn=(0,r.Z)(en,2),rn=tn[0],an=tn[1],on=(0,a.useState)({isExists:!1,data:null}),sn=(0,r.Z)(on,2),cn=sn[0],dn=sn[1],un=(0,c.TH)().state,ln=(0,R.Z)().width;(0,a.useEffect)((function(){return H?(dn({isExists:!1,data:null}),(0,y.b)("cache",{isExists:!1,data:null}),D.current=!0,A(H),H.category&&X((0,P.b5)(H.category,(0,P.OI)(w)).value||""),H.ingredient&&nn((0,P.b5)(H.ingredient,(0,P.Uo)(N)).value||""),H.q&&an(H.q||""),H.page&&k((0,C.C)(Number(H.page))),k((0,Z.zW)({category:V,page:W,q:rn,ingredient:$})),D.current=!1):null!==un&&void 0!==un&&un.category?(dn({isExists:!1,data:null}),(0,y.b)("cache",{isExists:!1,data:null}),X(un.category),O.set("category",V),A(O),k((0,Z.zW)({category:V,page:W,q:rn,ingredient:$}))):k((0,Z.zW)({category:V,page:W,q:rn,ingredient:$})),0===w.length&&k((0,Z.pE)()),0===N.length&&k((0,Z.D8)()),function(){J({}),k((0,C.C)(1)),k((0,Z.zW)({category:V,page:W,q:rn,ingredient:$})),(0,y.b)("cache",{isExists:!0,data:M}),t("")}}),[]),(0,a.useEffect)((function(){if((0,y.D)("cache")&&(null===cn||void 0===cn||!cn.isExists)){var n=(0,y.D)("cache"),e=n.isExists,t=n.data;dn({isExists:e,data:t})}}),[]),(0,a.useEffect)((function(){if(b.current){var n=(0,P.qd)(O),e={page:W,ingredient:$,q:rn,category:V};A((0,P.P1)((0,i.Z)((0,i.Z)({},n),e))),k((0,Z.zW)({category:V,page:W,q:rn,ingredient:$})),(0,y.b)("cache",{isExists:!1,data:null}),dn({isExists:!1,data:null})}b.current=!0}),[k,V,rn,$,W]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("form",{className:h,children:[(0,x.jsxs)("label",{className:p,children:[(0,x.jsx)("input",{value:rn,id:"inputSearch",onChange:function(n){return function(n){k((0,C.C)(1)),an(n.target.value),A({q:n.target.value})}(n)},className:_,disabled:S,placeholder:"Enter the text"}),ln>=768&&(0,x.jsx)(m,{className:f})]}),(0,x.jsx)(d.ZP,{value:V,disabled:S,placeholder:V||"All categories",options:(0,P.OI)(w),styles:E,onChange:function(n){return function(n){k((0,C.C)(1)),A({category:n.value}),X(n.value)}(n)},maxMenuHeight:405}),(0,x.jsx)(d.ZP,{value:$,disabled:S,placeholder:$||"Ingredients",options:(0,P.Uo)(N),styles:I,onChange:function(n){return function(n){k((0,C.C)(1)),A({ingredient:n.value}),nn(n.value)}(n)}})]}),(null===M||void 0===M?void 0:M.length)>0&&!S&&!D.current&&!(null!==cn&&void 0!==cn&&cn.isExists)&&(0,x.jsx)("ul",{className:g,children:M.map((function(n){var e=n._id,t=n.drink,i=n.drinkThumb,r=n.ingredients;return(0,x.jsx)(v,{drink:t,drinkThumb:i,id:e,popup:r},e)}))}),0===(null===M||void 0===M?void 0:M.length)&&!S&&(0,x.jsx)("div",{className:l,children:(0,x.jsx)(j.j,{title:"No results"})}),(null===cn||void 0===cn?void 0:cn.isExists)&&(0,x.jsx)("ul",{className:g,children:cn.data.map((function(n){var e=n._id,t=n.drink,i=n.drinkThumb,r=n.ingredients;return(0,x.jsx)(v,{drink:t,drinkThumb:i,id:e,popup:r},e)}))}),T>1&&!S&&(0,x.jsx)(u.D,{page:W,totalPages:T,onChangePage:C.C})]})},W=t(5286),q={drinksContainer:"DrinksPage_drinksContainer__ePLbp"};function z(n){var e,t=n.param,i=n.updateState,r=F().isLoading;(0,y.D)("cache")&&(e=(0,y.D)("cache"));return(0,x.jsxs)("section",{className:q.drinksContainer,children:[(0,x.jsx)(W.U,{title:"Drinks",isLoading:r&&!e.isExists}),(0,x.jsx)(T,{search:t,updateState:function(n){i(n)}})]})}},5118:function(n,e){e.Z={mainPageList:"MainPage_mainPageList__ILvfc",image:"MainPage_image__8u-Jk",mainPageList_item:"MainPage_mainPageList_item__4l8cZ",card:"MainPage_card__4qTM6",hero_title:"MainPage_hero_title__8zPus",main_p:"MainPage_main_p__hjLn3",drinks_section:"MainPage_drinks_section__KWdPh",hero_section_wrapper:"MainPage_hero_section_wrapper__in5cU",hero_section:"MainPage_hero_section__uNAmo",hero_button:"MainPage_hero_button__rWCEs",other_drinks_btn:"MainPage_other_drinks_btn__4oIzj",category_title:"MainPage_category_title__aQKj2",card_name:"MainPage_card_name__xqAN-",ingredients_text:"MainPage_ingredients_text__zUAyx",card_link:"MainPage_card_link__beete",card_text_wrapper:"MainPage_card_text_wrapper__4i+lI",skeleton:"MainPage_skeleton__hqNoj"}}}]);
//# sourceMappingURL=455.a5132c07.chunk.js.map