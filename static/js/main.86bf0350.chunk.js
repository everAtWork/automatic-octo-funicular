(this.webpackJsonpthreecubesreact4ever=this.webpackJsonpthreecubesreact4ever||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var o=a(19),c=a(1),n=a.n(c),s=a(28),i=a.n(s),r=(a(68),a(10)),j=(a(69),a(8)),h=a(44),b=a(49);Object(h.c)();var p=function(e){var t=e.position,a=e.args,n=e.color,s=(e.speed,Object(c.useRef)(null));Object(j.f)((function(){return s.current.rotation.x=s.current.rotation.y+=.01}));var i=Object(c.useState)(!1),p=Object(r.a)(i,2),d=p[0],l=p[1],u=Object(b.b)({scale:d?[1.4,1.4,1.4]:[1,1,1]});return Object(o.jsxs)(b.a.mesh,{onClick:function(){return l(!d)},scale:u.scale,castShadow:!0,position:t,ref:s,children:[Object(o.jsx)("boxBufferGeometry",{attach:"geometry",args:a}),Object(o.jsx)(h.a,{speed:1,factor:.4,attach:"material",color:n})]})};var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.a,{shadowMap:!0,colorManagement:!0,camera:{position:[-15,2,10],fov:70},children:[Object(o.jsx)("ambientLight",{intensity:.3}),Object(o.jsx)("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.15,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(o.jsx)("pointLight",{position:[-10,0,-20],intensity:.5}),Object(o.jsx)("pointLight",{position:[0,-10,0],intensity:.5}),Object(o.jsx)("group",{children:Object(o.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-3,0],children:[Object(o.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(o.jsx)("shadowMaterial",{attach:"material",opacity:.4})]})}),Object(o.jsx)(p,{speed:4,position:[3,2,2],args:[2,2,1],color:"orange"}),Object(o.jsx)(p,{speed:6,position:[5,6,-3],args:[4,2,1],color:"lightblue"}),Object(o.jsx)(p,{speed:2,position:[7,6,7],args:[2,4,1],color:"pink"}),Object(o.jsx)(h.b,{})]})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,o=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),o(e),c(e),n(e),s(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()}},[[84,1,2]]]);
//# sourceMappingURL=main.86bf0350.chunk.js.map