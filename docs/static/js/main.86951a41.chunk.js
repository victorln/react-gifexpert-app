(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c]})),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})},j=n(7),d=n(4),o=n.n(d),l=n(6),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=aIy5lDZ3l5zCWJPJhZBKmdvb0tuRVnj4"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.id;var t=e.title,n=e.url;return Object(s.jsx)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("img",{src:n,alt:t}),Object(s.jsx)("p",{children:t})]})})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:Object(s.jsx)("b",{className:"animate__animated animate__fadeIn",children:t})}),c&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(s.jsx)("div",{className:"cardGrid",children:r.map((function(e){return Object(s.jsx)(m,Object(j.a)({},e),e.id)}))})]})},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(f,{category:e},e)}))})]})};n(14);c.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.86951a41.chunk.js.map