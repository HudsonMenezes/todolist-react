(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),r=a.n(c),i=a(2),o=a(4),m=a(3),s=a(9),u=a(10),d=a(6);a(20),a(22),a(24);var f=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),f=Object(m.a)(r,2),E=f[0],v=f[1];return l.a.createElement("div",{className:"app"},l.a.createElement(d.a,null),l.a.createElement("div",{className:"todo"},l.a.createElement("header",null,l.a.createElement("input",{type:"text",placeholder:"Adicione uma tarefa",value:a,onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{onClick:function(){if(""===a)d.b.error("Adicione uma tarefa!");else{var e={id:(t=9e6,Math.floor(Math.random()*t)),title:a,isComplete:!1};v([].concat(Object(o.a)(E),[e])),c("")}var t}},l.a.createElement(s.a,null))),E.map(function(e){return l.a.createElement("div",{key:e.id,className:e.isComplete?"task-container completed":"task-container"},l.a.createElement("div",{className:"check-and-title"},l.a.createElement("label",{className:"checkbox-container"},l.a.createElement("input",{type:"checkbox",onClick:function(){return function(e){var t=E.map(function(t){return t.id===e?Object(i.a)({},t,{isComplete:!t.isComplete}):t});v(t)}(e.id)}}),l.a.createElement("span",{className:"checkmark"})),l.a.createElement("p",null,e.title)),l.a.createElement("div",null,l.a.createElement(u.a,{onClick:function(){return t=e.id,void v(E.filter(function(e){return e.id!==t}));var t}})))})))};a(26);var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"header"},l.a.createElement("div",{class:"inner-header flex"},l.a.createElement("g",null,l.a.createElement("path",{fill:"#fff",d:"M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4\r\nC499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1\r\nc-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7\t\tc35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2\tc9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"}))),l.a.createElement("div",null,l.a.createElement("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"},l.a.createElement("defs",null,l.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l.a.createElement("g",{class:"parallax"},l.a.createElement("use",{href:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),l.a.createElement("use",{href:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),l.a.createElement("use",{href:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),l.a.createElement("use",{href:"#gentle-wave",x:"48",y:"7",fill:"#fff"}))))),l.a.createElement("div",{class:"content flex"},l.a.createElement("p",{class:"credits"},"By.Goodkatz |\xa0Free to use ")))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null),l.a.createElement(E,null)))}},[[11,2,1]]]);
//# sourceMappingURL=main.f5feed77.chunk.js.map