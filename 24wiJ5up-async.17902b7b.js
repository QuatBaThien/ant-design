(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["24wiJ5up"],{"24wiJ5up":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return c;}});var n=o("d3__vuQ2"),a=o("8Z0rk4BW");o("j3X9BMRJ");var l=n._(o("WyIMPUJp")),d=o("qdGieaVz");function i(e,t){let o=document.createElement("a");o.download=t,o.href=e,document.body.appendChild(o),o.click(),document.body.removeChild(o);}let r=()=>{var e;let t=null===(e=document.getElementById("myqrcode"))||void 0===e?void 0:e.querySelector("canvas");if(t){let e=t.toDataURL();i(e,"QRCode.png");}},s=()=>{var e;let t=null===(e=document.getElementById("myqrcode"))||void 0===e?void 0:e.querySelector("svg"),o=new XMLSerializer().serializeToString(t),n=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);i(a,"QRCode.svg");};var c=()=>{let[e,t]=l.default.useState("canvas");return(0,a.jsxs)(d.Space,{id:"myqrcode",direction:"vertical",children:[(0,a.jsx)(d.Segmented,{options:["canvas","svg"],onChange:e=>t(e)}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.QRCode,{type:e,value:"https://ant.design/",bgColor:"#fff",style:{marginBottom:16},icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),(0,a.jsx)(d.Button,{type:"primary",onClick:"canvas"===e?r:s,children:"Download"})]})]});};}}]);
//# sourceMappingURL=24wiJ5up-async.17902b7b.js.map