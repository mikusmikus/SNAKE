(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{11:function(e,t,n){e.exports={animationWrapper:"startAnimation_animationWrapper__hstpp",animation:"startAnimation_animation__1gQOd",gogogo:"startAnimation_gogogo__1yxvF"}},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,r,i,o=n(0),s=n(2),c=n.n(s),l=n(12),u=n.n(l),m=n(1),b=n(5),p=n(6),j=(n(21),n(22),n(13)),d=function(e,t,n){var a=Object(j.a)(n);return a[e.y][e.x].cell=t,a},h=n(8),x=n.n(h),O=function(e){var t=e.startGame;return Object(o.jsxs)("button",{type:"button",className:x.a.button,onClick:t,children:[" ","start",Object(o.jsx)("div",{className:x.a.line,children:" "}),Object(o.jsxs)("span",{className:x.a.food,children:[Object(o.jsx)("img",{className:x.a.pizza,src:"https://image.similarpng.com/very-thumbnail/2020/06/Cartoon-funny-pizza-royalty-free-PNG.png",alt:"pizza"})," "]})]})},f=n(3),g=n.n(f),_=function(e){var t=e.headerScore,n=e.showGameOptions,a=e.isGameStarted,r=e.stopGame;return Object(o.jsx)("div",{className:g.a.buttonWrapper,children:Object(o.jsxs)("div",{className:g.a.header,children:[Object(o.jsx)("img",{src:"https://www.iconarchive.com/download/i24292/martin-berube/animal/snake.ico",alt:"image1",className:g.a.image}),a?Object(o.jsxs)("h1",{className:g.a.heading,children:[" ",t>0&&Object(o.jsxs)("span",{className:g.a.score,children:[t,1===t?" point":" points"]})]}):Object(o.jsx)("h1",{className:g.a.heading,children:" THIS IS SNAKE GAME !"}),Object(o.jsx)("div",{className:g.a.buttonWrapper,children:a?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{type:"button",onClick:r,className:g.a.button,children:"end game"})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{type:"button",onClick:n,className:g.a.button,children:"options"})})})]})})},y=n(4),v=n.n(y),w=[{name:"small",size:10},{name:"medium",size:15},{name:"large",size:22},{name:"extra large",size:30}],N=[{name:"slow",time:350},{name:"medium",time:250},{name:"fast",time:180},{name:"extra fast",time:120}],A=function(e){var t=e.handleOptions,n=e.cancelOption,a=e.gameGridSize,r=e.gameMoveTime,i=Object(s.useState)(r),c=Object(b.a)(i,2),l=c[0],u=c[1],m=Object(s.useState)(a),p=Object(b.a)(m,2),j=p[0],d=p[1];return Object(o.jsx)("div",{className:v.a.OptionsWrapper,children:Object(o.jsxs)("form",{className:v.a.options,action:"submit",onSubmit:function(e){return t(e,j,l)},children:[Object(o.jsxs)("label",{htmlFor:"gridSize",className:v.a.label,children:["Select grid size",Object(o.jsx)("select",{className:v.a.dropDownList,id:"gridSize",name:"gridSize",value:j,onChange:function(e){return d(parseInt(e.target.value,10))},children:w.map((function(e){return Object(o.jsx)("option",{value:e.size,children:e.name},e.name)}))})]}),Object(o.jsxs)("label",{htmlFor:"gridSize",className:v.a.label,children:["Select game speed",Object(o.jsx)("select",{className:v.a.dropDownList,name:"speedLevel",value:l,onChange:function(e){return u(parseInt(e.target.value,10))},children:N.map((function(e){return Object(o.jsx)("option",{value:e.time,children:e.name},e.name)}))})]}),Object(o.jsxs)("div",{className:v.a.buttonWrapper,children:[Object(o.jsxs)("button",{type:"submit",className:v.a.button,children:[" ","SAVE"]}),Object(o.jsx)("button",{type:"button",className:v.a.button,onClick:n,children:"CANCEL"})]})]})})},S=n(11),z=n.n(S),k=function(){return Object(o.jsx)("div",{className:z.a.animationWrapper,children:Object(o.jsxs)("span",{className:z.a.animation,children:[Object(o.jsx)("span",{style:{color:"pink"},children:"Let's"}),Object(o.jsx)("span",{style:{color:"red"},children:"GO!!!"})]})})},E=["ArrowUp","ArrowRight","ArrowLeft","ArrowDown"],C=[],L=["ArrowRight"],W=0,G=250,D=function(){var e=Object(s.useState)(22),t=Object(b.a)(e,2),n=t[0],c=t[1],l=Object(s.useState)(!0),u=Object(b.a)(l,2),j=u[0],h=u[1],x=Object(s.useState)({start:!1,gameOver:!1,levelUpAnimation:!1,introAnimation:!1,options:!1,startAnimation:!1}),f=Object(b.a)(x,2),g=f[0],y=f[1];Object(s.useEffect)((function(){document.body.addEventListener("keydown",(function(e){w(e.key)}))}),[]),Object(s.useEffect)((function(){if(g.start){v(),N(),z(),S(L[0]);var e=setInterval((function(){h(!j)}),G);return function(){return clearInterval(e)}}}),[j]);var v=function(){L.length>1&&L.splice(0,1)},w=function(e){E.forEach((function(t){if(e===t){if("ArrowLeft"===e&&"ArrowRight"===L[0])return;if("ArrowRight"===e&&"ArrowLeft"===L[0])return;if("ArrowDown"===e&&"ArrowUp"===L[0])return;if("ArrowUp"===e&&"ArrowDown"===L[0])return;L.push(e)}}))},N=function(){C.forEach((function(e){e.x===r.x&&e.y===r.y&&y(Object(m.a)(Object(m.a)({},g),{},{start:!1,gameOver:!0}))}))},S=function(e){switch(e){case"ArrowRight":r=r.x===n-1?{x:0,y:r.y}:{x:r.x+1,y:r.y},d({x:r.x,y:r.y},"snake",a);break;case"ArrowDown":r=r.y===n-1?{x:r.x,y:0}:{x:r.x,y:r.y+1},d({x:r.x,y:r.y},"snake",a);break;case"ArrowLeft":r=0===r.x?{x:n-1,y:r.y}:{x:r.x-1,y:r.y},d({x:r.x,y:r.y},"snake",a);break;case"ArrowUp":r=0===r.y?{x:r.x,y:n-1}:{x:r.x,y:r.y-1},d({x:r.x,y:r.y},"snake",a)}},z=function(){C.push({x:r.x,y:r.y}),d(C[0],"empty",a),D(),C.forEach((function(e){return d(e,"tail",a)}))},D=function(){r.x===i.x&&r.y===i.y?(W%10===0&&G>50&&(G-=5),W+=1,i={x:p.random(n-1),y:p.random(n-1)},d(i,"food",a),F()):C.shift(),C.forEach((function(e){e.x===i.x&&e.y===i.y&&(i={x:p.random(n-1),y:p.random(n-1)},d(i,"food",a))}))},F=function(){0===W||W%10||(y(Object(m.a)(Object(m.a)({},g),{},{levelUpAnimation:!0})),setTimeout((function(){y(Object(m.a)(Object(m.a)({},g),{},{levelUpAnimation:!1}))}),4e3))},U=function(){y(Object(m.a)(Object(m.a)({},g),{},{start:!1,gameOver:!1})),W=0,L.splice(0,L.length)};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container center-xs",children:[Object(o.jsx)(_,{stopGame:function(){return U()},headerScore:W,isGameStarted:g.start,showGameOptions:function(){return y(Object(m.a)(Object(m.a)({},g),{},{options:!0}))}}),Object(o.jsx)("div",{className:"row center-xs",children:Object(o.jsx)("div",{className:"col-xs-12",children:Object(o.jsxs)("div",{className:"game",children:[g.options&&Object(o.jsx)(A,{gameMoveTime:G,gameGridSize:n,handleOptions:function(e,t,n){e.preventDefault(),c(t),G=n,y(Object(m.a)(Object(m.a)({},g),{},{options:!1}))},cancelOption:function(){return y(Object(m.a)(Object(m.a)({},g),{},{options:!1}))}}),g.start?Object(o.jsxs)(o.Fragment,{children:[g.levelUpAnimation&&Object(o.jsxs)("div",{className:"animation",children:[Object(o.jsx)("h1",{children:"LEVEL UP"}),Object(o.jsx)("h1",{children:"SPEED +10"})]}),g.startAnimation&&Object(o.jsx)(k,{}),a&&a.map((function(e){return e.map((function(e){return Object(o.jsx)("span",{className:e.cell,style:{width:"".concat(800/n,"px"),height:"".concat(800/n,"px")}},e.id)}))}))]}):Object(o.jsx)(O,{startGame:function(){return y(Object(m.a)(Object(m.a)({},g),{},{startAnimation:!0,start:!0})),a=function(e){for(var t=[],n=[],a=1,r=0;r<e;r++){for(var i=0;i<e;i++)t.push({id:a,cell:"empty"}),a+=1;n.push(t),t=[]}return n}(n),void setTimeout((function(){y(Object(m.a)(Object(m.a)({},g),{},{startAnimation:!1,start:!0})),r={x:2,y:0},C.splice(0,C.length),C.push({x:0,y:0}),C.push({x:1,y:0}),i={x:p.random(n-1),y:p.random(n-1)},d(r,"snake",a),C.forEach((function(e){return d(e,"tail",a)})),d(i,"food",a),L.push("ArrowRight"),h(!j)}),3e3)}}),g.gameOver&&Object(o.jsxs)("button",{type:"button",className:"button button--gameOver",onClick:function(){return U()},children:[" ",Object(o.jsxs)("span",{className:"score",children:[" Congratz, you got ",W," points! "]}),"Play Again!"]})]})})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),F()},3:function(e,t,n){e.exports={headerWrapper:"header_headerWrapper__ICvco",header:"header_header__3Vlc7",image:"header_image__1Cakm",buttonWrapper:"header_buttonWrapper__20iO5",heading:"header_heading__C-U5B",score:"header_score__3vZfW",button:"header_button__1MuEN"}},4:function(e,t,n){e.exports={OptionsWrapper:"options_OptionsWrapper__2PsF9",options:"options_options__nr3ev",label:"options_label__1SrfS",dropDownList:"options_dropDownList__log8M",buttonWrapper:"options_buttonWrapper__3xNVZ",button:"options_button__3uHSc"}},8:function(e,t,n){e.exports={intro:"intro_intro__3YOy4",button:"intro_button__1PKgd",line:"intro_line__3SoZ_",snake:"intro_snake__2zjXx",ayes:"intro_ayes__3-uH2",pizza:"intro_pizza__3e0vr"}}},[[23,1,2]]]);
//# sourceMappingURL=main.5a7420e0.chunk.js.map