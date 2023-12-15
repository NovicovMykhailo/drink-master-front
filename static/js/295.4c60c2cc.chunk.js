"use strict";(self.webpackChunkdrink_master_front=self.webpackChunkdrink_master_front||[]).push([[295],{5286:function(e,n,r){r.d(n,{U:function(){return i}});var a={mainTitle:"MainTitle_mainTitle__C85E1"},t=r(6949),s=r(3329);function i(e){var n=e.title,r=e.isLoading;return(0,s.jsxs)("span",{style:{display:"flex",alignItems:"baseline",flexWrap:"wrap",gap:"25px"},children:[(0,s.jsx)("h1",{className:a.mainTitle,children:n}),r&&(0,s.jsx)(t.Z,{styles:{margin:"0"}})]})}},2216:function(e,n,r){r.d(n,{D8:function(){return u},ZE:function(){return d},fQ:function(){return p},jn:function(){return o},zW:function(){return m}});var a=r(5861),t=r(4687),s=r.n(t),i=r(1243),l=JSON.parse(localStorage.getItem("persist:auth")).token,c=JSON.parse(l);i.Z.defaults.baseURL="https://drink-master-back-end.onrender.com/",i.Z.defaults.headers.common.Authorization="Bearer ".concat(c);var o=function(){var e=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/recipes/category-list");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/glasses");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/ingredients/list");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.post("/api/own",n);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/recipes/main-page");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},4295:function(e,n,r){r.r(n),r.d(n,{default:function(){return je}});var a=r(5286),t="FollowUs_followUs_title__Zd0t+",s="FollowUs_followUs_Container__l61Pu",i=r(3757),l=r(3329),c=function(){return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("h3",{className:t,children:"Follow Us"}),(0,l.jsx)(i.Z,{})]})},o=r(5861),d=r(9439),u=r(4687),p=r.n(u),m=r(2791),h=r(2216),x=r(7689),g=r(9655),b=(r(5462),"AddRecipeForm_add_btn__kPuxJ"),f="RecipeDescriptionFields_recipeDescriptionFields__7dchK",v="RecipeDescriptionFields_recipeDescription_showImgContainerActive__sFnnH",_="RecipeDescriptionFields_recipeDescription_showImg__fqKBQ",Z="RecipeDescriptionFields_recipeDescription_inputImg__XWEtN",F="RecipeDescriptionFields_recipeDescription_addImgIcon__-Aj3v",w="RecipeDescriptionFields_loadingIcon__CACqC",j="RecipeDescriptionFields_recipeDescription_addImgDescr__ffspJ",y="RecipeDescriptionFields_recipeDescription_labelImg__gaYZJ",k="RecipeDescriptionFields_recipeDescriptionFields_label__y5HfC",R="RecipeDescriptionFields_recipeDescriptionFields_input__B57l7",I="RecipeDescriptionFields_recipeDescriptionFields_labelContent__VJ8W2",N="RecipeDescriptionFields_recipeDescriptionSection__Pt2lz",C=r(3958),S=r(9126),D=r(9450),P=r(7003),z=r(1413),A="100%",E={singleValue:function(e){return(0,z.Z)((0,z.Z)({},e),{},{color:"#F3F3F3",transform:"translateY(-50%) translateX(0)"})},valueContainer:function(e){return(0,z.Z)((0,z.Z)({},e),{},{paddingLeft:0,margin:0,height:"41px"})},control:function(e){return(0,z.Z)((0,z.Z)({},e),{},{border:"none",outline:"none",boxShadow:"none",borderWidth:"1px",borderRadius:"60px",padding:0,width:A,backgroundColor:"transparent",color:"#F3F3F3"})},dropdownIndicator:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{color:r?"#F3F3F3":"rgba(243, 243, 243, 0.50)","&:hover":{color:"#F3F3F3"},transform:"translateY(-20%) translateX(0)"})},option:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{color:r?"#F3F3F3":"rgba(243, 243, 243, 0.40)",fontSize:"16px",backgroundColor:"transparent",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px",transition:"transform 200ms ease","&:hover":{backgroundColor:"transparent",boxShadow:"none",color:"#F3F3F3",transform:"scale(1.1) translateX(15px)"}})},menuList:function(e){return(0,z.Z)((0,z.Z)({},e),{},{width:A,marginBottom:"8px",backgroundColor:"rgba(22, 31, 55, 1)",borderRadius:"20px","::-webkit-scrollbar":{display:"none"},padding:"14px",margin:"-1px",boxSizing:"content-box"})},menu:function(e){return(0,z.Z)((0,z.Z)({},e),{},{borderRadius:"20px",width:A,bachgroundColor:"transparent"})},placeholder:function(e){return(0,z.Z)((0,z.Z)({},e),{},{transform:"translateY(-50%) translateX(0)",color:"#f3f3f380",fontSize:"16px"})}},T=function(e){var n=e.drinkThumb,r=e.cocktailImg,a=e.itemTitle,t=e.about,s=e.category,i=e.glass,c=(0,m.useState)([]),u=(0,d.Z)(c,2),x=u[0],g=u[1],b=(0,m.useState)([]),z=(0,d.Z)(b,2),A=z[0],T=z[1],L=(0,m.useState)(!0),B=(0,d.Z)(L,2),W=B[0],M=B[1],U=(0,m.useState)(!1),O=(0,d.Z)(U,2),H=O[0],J=O[1];(0,m.useEffect)((function(){if(!(0,P.D)("category-list")||(0,P.D)("glasses-list"))(0,o.Z)(p().mark((function e(){var n,r,a,t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.jn)();case 2:return n=e.sent,e.next=5,(0,h.ZE)();case 5:r=e.sent,a=n.map((function(e){var n=e.name;return{value:"".concat(n),label:"".concat(n),descr:"category"}})),t=r.map((function(e){var n=e.name;return{value:"".concat(n),label:"".concat(n),descr:"glasses"}})),(0,P.b)("category-list",a),(0,P.b)("glasses-list",t),a&&g(a),t&&T(t);case 12:case"end":return e.stop()}}),e)})))();else{var e=(0,P.D)("category-list"),n=(0,P.D)("glasses-list");e&&g(e),n&&T(n)}}),[]),(0,m.useEffect)((function(){""!==n?(M(!0),J(!1)):M(!1)}),[n]);var X=function(e){switch(e.descr){case"category":s(e.value);break;case"glasses":i(e.value)}},q=function(e){var n=e.currentTarget,s=n.name,i=n.value;switch(s){case"cocktailImg":r(i);break;case"itemTitle":a(i);break;case"about":t(i)}};return(0,l.jsxs)("div",{className:N,children:[(0,l.jsxs)("label",{className:y,children:[W?(0,l.jsx)("div",{className:v,children:(0,l.jsx)("img",{className:_,src:n,alt:"Cocktail"})}):(0,l.jsx)("div",{onClick:function(){setTimeout((function(){J(!0)}),500)},children:H?(0,l.jsx)("div",{className:w,children:(0,l.jsx)(D.Z,{})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S.iTs,{className:F})," ",(0,l.jsx)("p",{className:j,children:"Add image"})]})}),(0,l.jsx)("input",{required:!0,type:"file",className:Z,id:"cocktailImg",name:"cocktailImg",accept:"image/jpeg, image/png",multiple:!0,onChange:r})]}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsxs)("label",{className:k,children:[(0,l.jsx)("input",{placeholder:"",className:R,type:"text",name:"itemTitle",required:!0,autoComplete:"off",onChange:q}),(0,l.jsx)("div",{className:I,children:"Enter item title"})]}),(0,l.jsxs)("label",{className:k,children:[(0,l.jsx)("input",{placeholder:"",className:R,type:"text",name:"about",autoComplete:"off",onChange:q}),(0,l.jsx)("div",{className:I,children:"Enter about recipe"})]}),(0,l.jsx)("label",{className:k,children:(0,l.jsx)(C.ZP,{className:R,classNamePrefix:"select",isSearchable:!0,name:"category",placeholder:"Category",onChange:X,components:{IndicatorSeparator:function(){return null}},required:!0,options:x,styles:E})}),(0,l.jsx)("label",{className:k,children:(0,l.jsx)(C.ZP,{className:R,classNamePrefix:"select",isSearchable:!0,name:"glass",placeholder:"Glass",onChange:X,components:{IndicatorSeparator:function(){return null}},options:A,required:!0,styles:E})})]})]})},L="RecipeIngredientsFields_addIngredients_wrapper__CpWOh",B="RecipeIngredientsFields_recipeIngredients_title__si6pU",W="RecipeIngredientsFields_addIngredients_fields__JI-IA",M="RecipeIngredientsFields_addIngredients_box__C+Prk",U="RecipeIngredientsFields_addIngredients_titleBtnBox__dptOL",O="RecipeIngredientsFields_addIngredients_btnBox__BJpgr",H="RecipeIngredientsFields_addIngredients_btn__wyRO5",J="RecipeIngredientsFields_addIngredients_btnIcon__TLlZ3",X="RecipeIngredientsFields_addIngredients_btnDelete__BX0rY",q="RecipeIngredientsFields_addIngredients_btnDeleteIcon__COEOC",Q="RecipeIngredientsFields_errorIngredient__kbNsB",V="RecipeIngredientsFields_errorMeasure__c6xXH",Y="RecipeIngredientsFields_active__BWhcx",K=r(8820),G={singleValue:function(e){return(0,z.Z)((0,z.Z)({},e),{},{color:"#F3F3F3"})},valueContainer:function(e){return{padding:0,display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"18px"}},control:function(e){return(0,z.Z)((0,z.Z)({},e),{},{borderColor:"rgba(243, 243, 243, 0.50)",outline:"none",boxShadow:"none",borderWidth:"1px",borderRadius:"60px",transition:"0.2s",backgroundColor:"transparent",color:"#F3F3F3",height:"50px",width:"200px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"332px",height:"56px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"316",height:"56px"}),"&:hover":{borderColor:"inherit",boxShadow:"none"},"&:focus":{borderColor:"inherit",boxShadow:"none"}})},dropdownIndicator:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{color:r?"#F3F3F3":"rgba(243, 243, 243, 0.50)","&:hover":{color:"#F3F3F3"}})},option:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{color:r?"#F3F3F3":"rgba(243, 243, 243, 0.40)",fontSize:"14px",backgroundColor:"transparent",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px",transition:"all 200ms ease","&:hover":{backgroundColor:"transparent",boxShadow:"none",color:"#F3F3F3",transform:"scale(1.1) translateX(15px)"}})},menuList:function(e){return(0,z.Z)((0,z.Z)({},e),{},{height:"100%",marginBottom:"8px",backgroundColor:"rgba(22, 31, 55, 1)",borderRadius:"20px","::-webkit-scrollbar":{display:"none"},padding:"14px",margin:"-1px",boxSizing:"content-box",width:"172px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"304px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"295px"})})},menu:function(e){return(0,z.Z)((0,z.Z)({},e),{},{borderRadius:"20px",width:"172px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"304px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"295px"}),backgroundColor:"transparent"})}},$={singleValue:function(e){return(0,z.Z)((0,z.Z)({},e),{},{color:"#F3F3F3"})},control:function(e,n){return(0,z.Z)((0,z.Z)({},e),{},{outline:"none",borderColor:"rgba(243, 243, 243, 0.50)",boxShadow:"none",borderRadius:"60px",borderWidth:"1px",transition:"0.2s",paddingLeft:"8px",backgroundColor:"transparent",color:"#F3F3F3",width:"101px",height:"50px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"150px",height:"56px",paddingLeft:"24px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"150px",height:"56px"}),"&:hover":{borderColor:"#F3F3F3",boxShadow:"none"},"&:focus":{borderColor:"#F3F3F3",boxShadow:"none"}})},option:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{color:r?"#F3F3F3":"rgba(243, 243, 243, 0.40)",fontSize:"14px",backgroundColor:"transparent",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px",transition:"transform 200ms ease","&:hover":{backgroundColor:"transparent",boxShadow:"none",color:"#F3F3F3",transform:"scale(1.15) translateX(10px)"}})},dropdownIndicator:function(e,n){var r=n.isFocused;return(0,z.Z)((0,z.Z)({},e),{},{padding:0,marginRight:"8px",color:r?"#F3F3F3":"rgba(243, 243, 243, 0.50)","&:hover":{color:"#F3F3F3"}})},menuList:function(e){return(0,z.Z)((0,z.Z)({},e),{},{height:"100%",marginBottom:"8px",backgroundColor:"rgba(22, 31, 55, 1)",borderRadius:"20px","::-webkit-scrollbar":{display:"none"},padding:"14px",margin:"-1px",boxSizing:"content-box",width:"73px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"122px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"122px"})})},menu:function(e){return(0,z.Z)((0,z.Z)({},e),{},{borderRadius:"20px",bachgroundColor:"transparent",width:"73px","@media only screen and (min-width: 768px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 768px)"]),{},{width:"122px"}),"@media only screen and (min-width: 1440px)":(0,z.Z)((0,z.Z)({},e["@media only screen and (min-width: 1440px)"]),{},{width:"122px"})})},placeholder:function(e){return(0,z.Z)((0,z.Z)({},e),{},{color:"#ffffff"})}},ee=r(6856),ne=[{value:"entire",label:"entire",descr:"measure"},{value:"1 part",label:"1 part",descr:"measure"},{value:"1/2 part",label:"1/2 part",descr:"measure"},{value:"1/3 part",label:"1/3 part",descr:"measure"},{value:"3/4 part",label:"3/4 part",descr:"measure"},{value:"1 cup",label:"1 cup",descr:"measure"},{value:"1/2 cup",label:"1/2 cup",descr:"measure"},{value:"1/3 cup",label:"1/3 cup",descr:"measure"},{value:"3/4 cup",label:"3/4 cup",descr:"measure"},{value:"1 barspoon",label:"1 barspoon",descr:"measure"},{value:"1/2 barspoon",label:"1/2 barspoon",descr:"measure"},{value:"1/3 barspoon",label:"1/3 barspoon",descr:"measure"},{value:"3/4 barspoon",label:"3/4 barspoon",descr:"measure"},{value:"2 barspoon",label:"2 barspoon",descr:"measure"},{value:"1 tsp",label:"1 tsp",descr:"measure"},{value:"1/2 tsp",label:"1/2 tsp",descr:"measure"},{value:"1/3 tsp",label:"1/3 tsp",descr:"measure"},{value:"3/4 tsp",label:"3/4 tsp",descr:"measure"},{value:"2 tsp",label:"2 tsp",descr:"measure"},{value:"1 oz",label:"1 oz",descr:"measure"},{value:"1/2 oz",label:"1/2 oz",descr:"measure"},{value:"1/3 oz",label:"1/3 oz",descr:"measure"},{value:"3/4 oz",label:"3/4 oz",descr:"measure"},{value:"2 oz",label:"2 oz",descr:"measure"},{value:"10 ml",label:"10 ml",descr:"measure"},{value:"20 ml",label:"20 ml",descr:"measure"},{value:"30 ml",label:"30 ml",descr:"measure"},{value:"40 ml",label:"40 ml",descr:"measure"},{value:"50 ml",label:"50 ml",descr:"measure"},{value:"60 ml",label:"60 ml",descr:"measure"},{value:"70 ml",label:"70 ml",descr:"measure"},{value:"80 ml",label:"80 ml",descr:"measure"},{value:"90 ml",label:"90 ml",descr:"measure"},{value:"100 ml",label:"100 ml",descr:"measure"},{value:"120 ml",label:"120 ml",descr:"measure"},{value:"150 ml",label:"150 ml",descr:"measure"},{value:"200 ml",label:"200 ml",descr:"measure"},{value:"1 cl",label:"1 cl",descr:"measure"},{value:"2 cl",label:"2 cl",descr:"measure"},{value:"3 cl",label:"3 cl",descr:"measure"},{value:"4 cl",label:"4 cl",descr:"measure"},{value:"5 cl",label:"5 cl",descr:"measure"},{value:"6 cl",label:"6 cl",descr:"measure"},{value:"7 cl",label:"7 cl",descr:"measure"},{value:"8 cl",label:"8 cl",descr:"measure"},{value:"9 cl",label:"9 cl",descr:"measure"},{value:"10 cl",label:"10 cl",descr:"measure"},{value:"12 cl",label:"12 cl",descr:"measure"},{value:"15 cl",label:"15 cl",descr:"measure"},{value:"20 cl",label:"20 cl",descr:"measure"}],re=r(1184),ae=function(e){var n=e.clickHandlerMinus,r=e.isBtnDisabled,a=e.id,t=e.ingrediensName,s=e.allIngredientsList,i=e.getFromForm,c=(0,m.useState)({}),o=(0,d.Z)(c,2),u=o[0],p=o[1],h=(0,m.useState)(null),x=(0,d.Z)(h,2),g=x[0],b=x[1],f=(0,m.useState)(null),v=(0,d.Z)(f,2),_=v[0],Z=v[1],F=(0,re.Z)(g,1e3),w=(0,re.Z)(_,1e3);function j(e){var n=e.descr,r=e.value;if("ingredient"===n){var a=s.filter((function(e){return e.title===r}));p((function(e){return(0,z.Z)((0,z.Z)({},e),a[0])}))}"measure"===n&&p((function(e){return(0,z.Z)((0,z.Z)({},e),{},{measure:"".concat(r)})}))}return(0,m.useEffect)((function(){0!==Object.keys(u).length&&(u.measure?b(!1):b(!0),u._id?Z(!1):Z(!0),u.measure&&u._id&&i({id:a,ingredient:u}))}),[i,a,u]),(0,l.jsxs)("div",{className:M,children:[(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)(C.ZP,{isSearchable:!0,components:{IndicatorSeparator:function(){return null}},name:"ingredient",onChange:j,options:t,placeholder:"ingredient",defaultValue:"",styles:G}),_&&(0,l.jsx)("p",{className:"".concat(Q," ").concat(w&&Y),children:"please select value"})]}),(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)(C.ZP,{isSearchable:!0,name:"measure",placeholder:"ml",onChange:j,options:ne,styles:$,defaultValue:"",components:{IndicatorSeparator:function(){return null}}}),g&&(0,l.jsx)("p",{className:"".concat(V," ").concat(F&&Y),children:"please select value"})]}),(0,l.jsx)("button",{className:X,disabled:r,onClick:function(){return n(a)},type:"button",id:"buttonDeleteIng",children:(0,l.jsx)(ee.lTq,{className:q})})]},a)},te=function(e){var n=e.setIngredients,r=(0,m.useState)(1),a=(0,d.Z)(r,2),t=a[0],s=a[1],i=(0,m.useState)(!1),c=(0,d.Z)(i,2),u=c[0],x=c[1],g=(0,m.useState)([]),b=(0,d.Z)(g,2),f=b[0],v=b[1],_=(0,m.useState)([]),Z=(0,d.Z)(_,2),F=Z[0],w=Z[1];(0,m.useEffect)((function(){if((0,P.D)("ingredients-names")||(0,P.D)("ingredients-list")){var e=(0,P.D)("ingredients-names"),n=(0,P.D)("ingredients-list");e&&v(e),w(n)}else(0,o.Z)(p().mark((function e(){var n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.D8();case 3:n=e.sent,r=n.map((function(e){var n=e.title;return{value:"".concat(n),label:"".concat(n),descr:"ingredient"}})),(0,P.b)("ingredients-names",r),(0,P.b)("ingredients-list",n),v(r),w(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]),(0,m.useEffect)((function(){t<=1&&x(!0),t>1&&x(!1)}),[t]);var j=[];function y(e){j.splice(e-1,1),s(t-1)}var k=function(e){0!==Object.keys(null===e||void 0===e?void 0:e.ingredient).length&&(j[e.id-1]=e.ingredient,j.length>0&&n(j))};return(0,l.jsxs)("div",{className:L,children:[(0,l.jsxs)("div",{className:U,children:[(0,l.jsx)("h2",{className:B,children:"Ingredients"}),(0,l.jsxs)("div",{className:O,children:[(0,l.jsx)("button",{disabled:u,onClick:y,type:"button",id:"buttonCountMinus",className:H,children:(0,l.jsx)(K.ywL,{className:J})}),(0,l.jsx)("div",{id:"buttonCountNumber",children:t}),(0,l.jsx)("button",{onClick:function(){s(t+1)},type:"button",id:"buttonCountPlus",className:H,children:(0,l.jsx)(K.Lfi,{className:J})})]})]}),(0,l.jsx)("div",{className:W,children:function(){for(var e=[],n=0,r=0;r<t;r+=1)n+=1,e.push((0,l.jsx)(ae,{clickHandlerMinus:y,isBtnDisabled:u,id:n,ingrediensName:f,allIngredientsList:F,getFromForm:k},n));return e}()})]})},se="RecipePreparationFields_recipePreparation_section__6DyEN",ie="RecipePreparationFields_recipePreparation_title__Ikq1g",le="RecipePreparationFields_recipePreparation_textarea__HjQwC",ce=function(e){var n=e.textarea;return(0,l.jsxs)("div",{className:se,children:[(0,l.jsx)("h2",{className:ie,children:"Recipe Preparation"}),(0,l.jsx)("label",{children:(0,l.jsx)("textarea",{className:le,placeholder:"Enter the recipe",type:"text",onChange:function(e){var r=e.currentTarget.value;n(r)},name:"instructions",pattern:"^^[A-Za-z\\u0080-\\uFFFF ']+$",required:!0})})]})},oe=function(){var e,n=(0,x.s0)(),r=(0,m.useState)(""),a=(0,d.Z)(r,2),t=a[0],s=a[1],i=(0,m.useState)(null),c=(0,d.Z)(i,2),u=c[0],f=c[1],v=(0,m.useState)(null),_=(0,d.Z)(v,2),Z=_[0],F=_[1],w=(0,m.useState)(""),j=(0,d.Z)(w,2),y=j[0],k=j[1],R=(0,m.useState)(""),I=(0,d.Z)(R,2),N=I[0],C=I[1],S=(0,m.useState)(""),D=(0,d.Z)(S,2),P=D[0],z=D[1],A=(0,m.useState)(""),E=(0,d.Z)(A,2),L=E[0],B=E[1],W=(0,m.useState)(""),M=(0,d.Z)(W,2),U=M[0],O=M[1];(0,m.useEffect)((function(){u&&s(u)}),[t,u]);var H=function(){var r=(0,o.Z)(p().mark((function r(a){var t,s;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),(t=new FormData).append("recipeImg",Z),t.append("drink",y),t.append("category",P),t.append("glass",L),t.append("instructions","".concat(N,". ").concat(U)),t.append("ingredients",[JSON.stringify(e)]),r.next=10,(0,h.fQ)(t);case 10:s=r.sent,window.scrollTo({top:0,behavior:"smooth"}),201===(null===s||void 0===s?void 0:s.status)&&(g.Am.success("You add your recipe"),n("/my")),201!==(null===s||void 0===s?void 0:s.status)&&g.Am.error(s.response.data.message);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:H,children:[(0,l.jsx)(T,{drinkThumb:t,cocktailImg:function(e){var n=e.target.files[0];n&&(f(URL.createObjectURL(n)),s(n),F(n))},itemTitle:k,category:z,glass:B,about:C}),(0,l.jsx)(te,{setIngredients:function(n){e=n}}),(0,l.jsx)(ce,{textarea:O}),(0,l.jsx)("button",{type:"submit",className:b,children:"Add"})]})})},de="PolularRecipe_list__eRM+y",ue="PolularRecipe_listTitle__lsIWi",pe="PolularRecipe_listItem__26PJ8",me="PolularRecipe_listItem_image__MkRA4",he="PolularRecipe_textContainer__3iF-C",xe="PolularRecipe_listItem_image_container__pwAeH",ge="PolularRecipe_listItem_title__RwLMA",be="PolularRecipe_listItem_descrption__aMQxh",fe=r(1087),ve=function(e){var n=e.item,r=n.drinkThumb,a=n.drink,t=n.instructions,s=n._id;return(0,l.jsx)("li",{children:(0,l.jsxs)(fe.rU,{to:"/recipe/".concat(s),className:pe,children:[(0,l.jsx)("div",{className:xe,children:(0,l.jsx)("img",{src:r,alt:a,className:"".concat(me," animate"),loading:"lazy"})}),(0,l.jsxs)("div",{className:he,children:[(0,l.jsx)("p",{className:ge,children:a}),(0,l.jsx)("p",{className:be,children:t})]})]})})},_e=r(1211),Ze=r(1243),Fe=function(){var e=(0,_e.Z)().BackEndError,n=(0,m.useState)(null),r=(0,d.Z)(n,2),a=r[0],t=r[1],s=(0,m.useState)(null),i=(0,d.Z)(s,2),c=i[0],u=i[1];return(0,m.useEffect)((function(){(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://drink-master-back-end.onrender.com",e.next=4,Ze.Z.get("".concat("https://drink-master-back-end.onrender.com","/api/popular-recipes"));case 4:(n=e.sent)&&t(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[e]),(0,l.jsxs)("article",{children:[(0,l.jsx)("h3",{className:ue,children:"Popular recipe"}),(0,l.jsxs)("ul",{className:de,children:[" ",a&&a.map((function(e){return(0,l.jsx)(ve,{item:e},e._id)}))]}),c&&(0,l.jsx)("p",{children:"error"})]})},we={addRecipeForm_container:"AddRecipePage_addRecipeForm_container__y3KQn",addRecipePage_title:"AddRecipePage_addRecipePage_title__+AXeA",addRecipePage:"AddRecipePage_addRecipePage__Rf9cE"};function je(){return(0,l.jsxs)("section",{className:we.addRecipeForm_container,children:[(0,l.jsx)(a.U,{title:"Add recipe"}),(0,l.jsxs)("div",{className:we.addRecipePage,children:[(0,l.jsx)("div",{children:(0,l.jsx)(oe,{})}),(0,l.jsx)("div",{children:(0,l.jsxs)(m.Suspense,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(Fe,{})]})})]})]})}}}]);
//# sourceMappingURL=295.4c60c2cc.chunk.js.map