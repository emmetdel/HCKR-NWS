(this["webpackJsonphacker-news-clone"]=this["webpackJsonphacker-news-clone"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(17),i=n.n(s),o=(n(24),n(4)),l=(n(25),function(e){var t=e.story,n=e.openCallback;return Object(a.jsxs)("li",{"data-testid":"article-item",onClick:function(){return n?n():window.open(t.url,"_blank")},className:"article-item",children:[Object(a.jsxs)("div",{className:"article-item__top-row",children:[Object(a.jsx)("span",{"data-testid":"article-list-number",className:"article-item__top-row__list-number",children:t.displayNumber}),Object(a.jsx)("p",{"data-testid":"article-title",className:"article-item__top-row__title",children:t.title})]}),Object(a.jsxs)("div",{className:"article-item__bottom-row",children:[Object(a.jsxs)("p",{"data-testid":"article-by",className:"article-item__bottom-row__by",children:["by:\xa0",t.by]}),Object(a.jsxs)("p",{"data-testid":"article-score",className:"article-item__bottom-row__score",children:[t.score,"\xa0points."]})]})]})}),u=(n(26),function(e){var t=e.label,n=e.options,r=e.selectCallback,c=e.selectedOption;return Object(a.jsxs)("div",{className:"dropdown-container",children:[Object(a.jsx)("label",{className:"dropdown-container__label","data-testid":"dropdown-label",children:t}),Object(a.jsx)("select",{className:"dropdown-container__select","data-testid":"dropdown-select",onChange:function(e){return r(e.target.value)},defaultValue:c,children:n.map((function(e,t){return Object(a.jsx)("option",{className:"dropdown-container__select__option",value:e,children:e},t)}))})]})}),d=(n(27),function(e){var t=e.setStoryType,n=e.setPageSize,r=e.selectedPageSize,c=e.selectedStoryType;return Object(a.jsxs)("header",{"data-testid":"main-header",children:[Object(a.jsx)("h1",{id:"main-logo",children:"HCKR/NWS"}),Object(a.jsxs)("div",{id:"dropdown-container",children:[Object(a.jsx)(u,{label:"Story Type",options:["top","new"],selectCallback:t,selectedOption:c}),Object(a.jsx)(u,{label:"Page Size",options:[10,30,50,100,500],selectCallback:n,selectedOption:r})]})]})}),b=(n(28),function(e){var t=e.label,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=n.current,t=setTimeout((function(){e&&(e.textContent="Sorry this is taking so long...")}),2500),a=setTimeout((function(){e&&(e.textContent="Shouldn't be too long more...")}),5e3);return function(){clearTimeout(t),clearTimeout(a)}}),[]),Object(a.jsxs)("div",{className:"loader","data-testid":"loader",children:[Object(a.jsx)("div",{className:"loader__spinner"}),Object(a.jsx)("p",{ref:n,className:"loader__label",children:t})]})}),j=(n(29),function(e){var t=e.children;return e.loading?Object(a.jsx)("div",{"data-testid":"list-loader",className:"loading-container",children:Object(a.jsx)(b,{label:"Loading Posts..."})}):function(e){return e?Object(a.jsx)("ul",{"data-testid":"list-main-table",className:"main-table",children:e}):Object(a.jsx)("li",{children:"There is no data to display."})}(t)}),p=n(8),m=n(18),f=(n(30),function(e){var t=e.label,n=e.onClick,r=e.color,c=e.disabled,s=void 0!==c&&c,i=Object(m.a)(e,["label","onClick","color","disabled"]);return Object(a.jsx)("button",Object(p.a)(Object(p.a)({},i),{},{disabled:s,style:{backgroundColor:"".concat(s?"grey":r||"blue")},"data-testid":"button",onClick:function(){return n()},children:t}))}),O=(n(31),function(e){var t=e.pageNumber,n=e.setPageNumber,r=e.totalNumPages;return Object(a.jsxs)("div",{className:"paginator-container",children:[Object(a.jsx)(f,{className:"paginator-container__prev-btn",disabled:0===t,label:"Prev",onClick:function(){return n(t-1)},color:"#e91e63"}),Object(a.jsx)(f,{className:"paginator-container__next-btn",disabled:t===r,label:"Next",onClick:function(){return n(t+1)}}),Object(a.jsxs)("p",{"data-testid":"paginator-display",children:["Page ",t+1," of ",r]})]})}),h=n(3),x=n.n(h),v=n(5),g=n(7),_=n.n(g),y="https://hacker-news.firebaseio.com/v0",w="hacker-news-index-array",N="hacker-news-last-update",S=function(e){try{var t=Date.now()-6e5;return parseInt(e)>t}catch(n){return!1}},k=function(){var e=Object(v.a)(x.a.mark((function e(t){var n,a,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=sessionStorage.getItem(w),a=sessionStorage.getItem(N),n&&a&&S(a)){e.next=11;break}return e.next=6,_.a.get("".concat(y,"/").concat(t,"stories.json"));case 6:return r=e.sent,c=r.data,sessionStorage.setItem(JSON.stringify(w),c),sessionStorage.setItem(N,Date.now().toString()),e.abrupt("return",c);case 11:return e.abrupt("return",JSON.parse(n));case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(x.a.mark((function e(t,n,a){var r,c,s,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(a);case 2:return r=e.sent,e.prev=3,s=(c=t*n)+n,i=r.slice(c,s).map(function(){var e=Object(v.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(y,"/item/").concat(t,".json"));case 2:return(a=e.sent.data).displayNumber=c+n+1,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=9,Promise.all(i);case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n,a){return e.apply(this,arguments)}}(),P=function(e){return Math.ceil(500/e)};var T=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),i=Object(o.a)(s,2),u=i[0],b=i[1],p=Object(r.useState)(0),m=Object(o.a)(p,2),f=m[0],h=m[1],x=Object(r.useState)(30),v=Object(o.a)(x,2),g=v[0],_=v[1],y=Object(r.useState)("top"),w=Object(o.a)(y,2),N=w[0],S=w[1];return Object(r.useEffect)((function(){C(f,g,N).then((function(e){c(e),b(!1)}))}),[f,g,N]),Object(a.jsxs)("div",{id:"body-main","data-testid":"body-main",children:[Object(a.jsx)(d,{setStoryType:function(e){b(!0),S(e),h(0)},setPageSize:function(e){b(!0),_(e),h(0)},selectedStoryType:N,selectedPageSize:g}),Object(a.jsx)(j,{loading:u,children:n.map((function(e){return Object(a.jsx)(l,{story:e},e.id)}))}),Object(a.jsx)(O,{pageNumber:f,setPageNumber:function(e){b(!0),h(e)},totalNumPages:P(g)})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c8e4890c.chunk.js.map