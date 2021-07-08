(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(10),s=n.n(l),i=(n(16),n(5)),r=n(2),j=n.p+"static/media/logo.6ce24c58.svg",o=(n(8),n(17),n(0));var d=function(e){var t="cards "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})};var u=function(){return Object(o.jsxs)(d,{className:"row header",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("h5",{children:"Date"})}),Object(o.jsx)("div",{className:"col-8",children:Object(o.jsx)("h5",{children:"Title"})}),Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("h5",{children:"Expense"})})]})},b=(n(19),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterChange(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})});var x=function(e){var t=e.date.toLocaleString("default",{month:"long"}),n=e.date.getDate(),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"col-2 date expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("h5",{className:"expense-date__day",children:n})]})};var h=function(e){return Object(o.jsxs)(d,{className:"row items",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsx)("div",{className:"col-8 title",children:Object(o.jsx)("h5",{children:e.title})}),Object(o.jsx)("div",{className:"col-2 expense-item__price",children:Object(o.jsxs)("h5",{children:["$",e.expense]})})]})};var v=function(e){return 0===e.items.length?Object(o.jsx)("p",{children:"No items Found!"}):e.items.map((function(e){return Object(o.jsx)(h,{title:e.title,date:e.date,expense:e.amount},e.id)}))},O=n(11);n(9);var m=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%",console.log(t)),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})};var p=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})};var f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sept",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(p,{dataPoints:n})};var g=function(e){var t=Object(a.useState)("2020"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selected:c,onFilterChange:function(e){l(e)}}),Object(o.jsx)(f,{expenses:s}),Object(o.jsx)(v,{items:s})]})},N=n(7);n(20),n(21);var _=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],d=i[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),x=b[0],h=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+j,date:new window.Date(x)};e.onSubmitExpenseData(n),l(""),d(""),h("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){d(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-10-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};var w=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!c&&Object(o.jsx)("button",{onClick:function(){l(!0)},children:" Add Expense"}),c&&Object(o.jsx)(_,{onSubmitExpenseData:function(t){var n=Object(N.a)(Object(N.a)({},t),{},{id:Math.floor(1e4*Math.random()).toString()});e.onAddExpense(n)},onCancel:function(){l(!1)}})]})},y=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var C=function(){var e=Object(a.useState)(y),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(o.jsx)(u,{})]}),Object(o.jsx)(g,{items:n}),Object(o.jsx)("div",{className:"App-body",children:Object(o.jsx)(w,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}],[[22,1,2]]]);
//# sourceMappingURL=main.2edce79a.chunk.js.map