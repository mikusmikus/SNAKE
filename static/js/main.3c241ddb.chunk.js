(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r,c,o,a=n(0),s=n(1),i=n.n(s),u=n(6),x=n.n(u),f=n(5),l=n(3),y=n(2),h=(n(14),n(15),22),j=function(t,e){r[t.y][t.x].cell=e},b=["ArrowUp","ArrowRight","ArrowLeft","ArrowDown"],d=[],m=["ArrowRight"],O="",p=0,g=function(){var t=Object(s.useState)(210),e=Object(l.a)(t,2),n=e[0],i=e[1],u=Object(s.useState)(!0),x=Object(l.a)(u,2),g=x[0],w=x[1],v=Object(s.useState)(!1),A=Object(l.a)(v,2),k=A[0],E=A[1],N=Object(s.useState)({start:!1,gameOver:!1}),L=Object(l.a)(N,2),S=L[0],C=L[1];Object(s.useEffect)((function(){document.body.addEventListener("keydown",(function(t){console.log(m),D(t.key)}))}),[]),Object(s.useEffect)((function(){if(S.start){R(),P(),F(O);var t=setInterval((function(){w(!g)}),n);return function(){return clearInterval(t)}}}),[g]);var D=function(t){b.forEach((function(e){if(t===e){if("ArrowLeft"===t&&"ArrowRight"===O)return;if("ArrowRight"===t&&"ArrowLeft"===O)return;if("ArrowDown"===t&&"ArrowUp"===O)return;if("ArrowUp"===t&&"ArrowDown"===O)return;O=t}}))},R=function(){d.forEach((function(t){t.x===c.x&&t.y===c.y&&C({start:!1,gameOver:!0})}))},F=function(t){switch(t){case"ArrowRight":c=21===c.x?{x:0,y:c.y}:{x:c.x+1,y:c.y},j({x:c.x,y:c.y},"snake");break;case"ArrowDown":c=21===c.y?{x:c.x,y:0}:{x:c.x,y:c.y+1},j({x:c.x,y:c.y},"snake");break;case"ArrowLeft":c=0===c.x?{x:21,y:c.y}:{x:c.x-1,y:c.y},j({x:c.x,y:c.y},"snake");break;case"ArrowUp":c=0===c.y?{x:c.x,y:21}:{x:c.x,y:c.y-1},j({x:c.x,y:c.y},"snake")}},P=function(){d.push({x:c.x,y:c.y}),j(d[0],"empty"),U(),d.forEach((function(t){return j(t,"tail")}))},U=function(){c.x===o.x&&c.y===o.y?(p%5===0&&n>20&&i(n-10),p+=1,o={x:y.random(21),y:y.random(21)},j(o,"food"),I()):d.shift(),d.forEach((function(t){t.x===o.x&&t.y===o.y&&(o={x:y.random(21),y:y.random(21)},j(o,"food"))}))},I=function(){0===p||p%5||(E(!0),setTimeout((function(){E(!1)}),4e3))};return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container center-xs",children:[Object(a.jsxs)("h1",{className:"heading",children:[" ",p>0&&Object(a.jsxs)("span",{className:"score",children:[p,1===p?" point":" points"]})]}),Object(a.jsx)("div",{className:"row center-xs game-wrapper",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsxs)("div",{className:"game",children:[S.start?Object(a.jsxs)(a.Fragment,{children:[k&&Object(a.jsxs)("div",{className:"animation",children:[Object(a.jsx)("h1",{children:"LEVEL UP"}),Object(a.jsx)("h1",{children:"SPEED +10"})]}),r&&r.map((function(t){return t.map((function(t){return Object(a.jsx)("span",{className:t.cell,style:{width:"".concat(800/h,"px"),height:"".concat(800/h,"px")}},t.id)}))}))]}):Object(a.jsxs)("button",{type:"button",className:"button",onClick:function(){return C(Object(f.a)(Object(f.a)({},S),{},{start:!0})),r=function(t){for(var e=[],n=[],r=1,c=0;c<t;c++){for(var o=0;o<t;o++)e.push({id:r,cell:"empty"}),r+=1;n.push(e),e=[]}return n}(h),O="ArrowRight",c={x:2,y:0},d.splice(0,d.length),d.push({x:0,y:0}),d.push({x:1,y:0}),o={x:y.random(21),y:y.random(21)},j(c,"snake"),d.forEach((function(t){return j(t,"tail")})),j(o,"food"),void w(!g)},children:[" ","start"]}),S.gameOver&&Object(a.jsxs)("button",{type:"button",className:"button button--gameOver",onClick:function(){C({start:!1,gameOver:!1}),p=0},children:[" ",Object(a.jsxs)("span",{className:"score",children:[" Congratz, you got ",p," points! "]}),"Play Again!"]})]})})})]})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),o(t),a(t)}))};x.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.3c241ddb.chunk.js.map