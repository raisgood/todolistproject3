(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),a=n.n(i),s=n(6),o=n.n(s),l=(n(13),n(7)),r=n(2);n(14),n(15);function u(t){return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=document.querySelector(".js-todolist-item").value,c=document.querySelector(".js-time").value;document.querySelector(".js-todolist-item").value="",document.querySelector(".js-time").value="",t.handleAdd(n,c)},children:[Object(c.jsx)("label",{className:"label1",children:Object(c.jsx)("strong",{children:'List Your "To Do" List Activity Here:'})}),Object(c.jsx)("input",{type:"text",ClassName:"todolist-item",className:"js-todolist-item",placeholder:"List Activity"}),Object(c.jsx)("label",{className:"label2",children:Object(c.jsx)("strong",{children:'List the Time and "Press Add":'})}),Object(c.jsx)("input",{type:"text",className:"js-time",placeholder:"List Time"}),Object(c.jsx)("button",{type:"submit",children:"Add"}),Object(c.jsx)("button",{onClick:t.handleClear,children:"Clear"})]})}n(16);var d=n.p+"static/media/edit-solid.4ffe848a.svg";function j(t){var e=a.a.useState(!0),n=Object(r.a)(e,2),i=n[0],s=n[1],o=a.a.useState(t.todolist),l=Object(r.a)(o,2),u=l[0],j=l[1],b=a.a.useState(t.time),m=Object(r.a)(b,2),h=m[0],p=m[1],f=null,O=null;return i?(f=u,O="(".concat(h,")")):(f=Object(c.jsx)("input",{type:"text",value:u,onChange:function(e){j(e.currentTarget.value),t.handleUpdate(t.index,e.currentTarget.value,h)}}),O=Object(c.jsx)("input",{type:"text",value:h,onChange:function(e){p(e.currentTarget.value),t.handleUpdate(t.index,u,e.currentTarget.value)}})),Object(c.jsxs)("div",{className:"todo-item",children:[f," ",O,Object(c.jsx)("img",{src:d,alt:"Edit todolist",className:"edit-todolist",onClick:function(){s((function(t){return!t}))}})]})}n(17);function b(t){var e=t.items,n=t.handleUpdate,i=e.map((function(t){return Object(c.jsx)(j,{index:t.key,todolist:t.todolist,time:t.time,handleUpdate:n},t.key)}));return Object(c.jsx)("div",{className:"todolist-list-container",children:i})}var m=function(){var t=Object(i.useState)(0),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)([]),o=Object(r.a)(s,2),d=o[0],j=o[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h2",{children:" To Do List "})}),Object(c.jsx)(u,{handleClear:function(t){t.preventDefault(),j([])},handleAdd:function(t,e){var c=n;a(n+1),j((function(n){return[].concat(Object(l.a)(n),[{todolist:t,time:e,key:c}])}))}}),Object(c.jsx)(b,{items:d,handleUpdate:function(t,e,n){j((function(c){return c.map((function(c){return t===c.key?{todolist:e,time:n,key:t}:c}))}))}})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.c23d52c6.chunk.js.map