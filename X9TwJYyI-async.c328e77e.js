(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["X9TwJYyI"],{X9TwJYyI:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return y;}});var l=n("8Z0rk4BW");n("eWS2W2k_");var s=n("IZDRJG-w"),i=n("qdGieaVz");let r=e=>{let{borderWidth:t}=getComputedStyle(e),n=parseInt(t,10),l=document.createElement("div");return l.style.position="absolute",l.style.inset=`-${n}px`,l.style.borderRadius="inherit",l.style.background="transparent",l.style.zIndex="999",l.style.pointerEvents="none",l.style.overflow="hidden",e.appendChild(l),l;},a=(e,t,n,l,s=0)=>{let i=document.createElement("div");return i.style.position="absolute",i.style.left=`${n}px`,i.style.top=`${l}px`,i.style.width=`${s}px`,i.style.height=`${s}px`,i.style.borderRadius="50%",i.style.background=t,i.style.transform="translate(-50%, -50%)",i.style.transition="all 1s ease-out",e.appendChild(i),i;},o=(e,{event:t,component:n})=>{if("Button"!==n)return;let l=r(e),s=l.getBoundingClientRect(),i=t.clientX-s.left,o=t.clientY-s.top,d=a(l,"rgba(255, 255, 255, 0.65)",i,o);requestAnimationFrame(()=>{d.ontransitionend=()=>{l.remove();},d.style.width="200px",d.style.height="200px",d.style.opacity="0";});},d=(e,{component:t})=>{if("Button"!==t)return;let n=[0,-15,15,-5,5,0],l=0;!function t(){cancelAnimationFrame(e.effectTimeout),e.effectTimeout=requestAnimationFrame(()=>{let s=Math.floor(l/10),i=n[s],r=n[s+1];if(!r){e.style.transform="",e.style.transition="";return;}let a=i+(r-i)/10*(l%10);e.style.transform=`rotate(${a}deg)`,e.style.transition="none",l+=1,t();});}();},u=({name:e,...t})=>(0,l.jsx)(i.ConfigProvider,{wave:t,children:(0,l.jsx)(i.Button,{type:"primary",children:e})});var y=()=>(0,l.jsxs)(i.Space,{style:{padding:24},size:"large",children:[(0,l.jsx)(u,{name:"Disabled",disabled:!0}),(0,l.jsx)(u,{name:"Default"}),(0,l.jsx)(u,{name:"Inset",showEffect:o}),(0,l.jsx)(u,{name:"Shake",showEffect:d}),(0,l.jsx)(s.HappyProvider,{children:(0,l.jsx)(i.Button,{type:"primary",children:"Happy Work"})})]});}}]);
//# sourceMappingURL=X9TwJYyI-async.c328e77e.js.map