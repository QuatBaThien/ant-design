(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["OoSA9A4u"],{OoSA9A4u:function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return h;}});var t=n("d3__vuQ2"),o=n("8Z0rk4BW");n("4OLIJWAC");var s=t._(n("WyIMPUJp")),d=n("4i_r4BgY"),r=n("qdGieaVz");let a=[],i=(e,l="0",n=a)=>{let t=[];for(let e=0;e<3;e++){let s=`${l}-${e}`;n.push({title:s,key:s,icon:(0,o.jsx)(d.CarryOutOutlined,{})}),e<2&&t.push(s);}if(e<0)return n;let s=e-1;t.forEach((e,l)=>(n[l].children=[],i(s,e,n[l].children)));};i(1);var h=()=>{let[e,l]=s.default.useState(a),[n,t]=s.default.useState(!0),[d,i]=s.default.useState(!0),[h,c]=s.default.useState(!0),[u,f]=s.default.useState(["0-0","0-0-0","0-0-0-0"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{marginBottom:16},children:["showLine: ",(0,o.jsx)(r.Switch,{checked:n,onChange:e=>{e?h?t({showLeafIcon:!0}):t(!0):t(!1);}}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"showIcon: ",(0,o.jsx)(r.Switch,{checked:d,onChange:()=>i(d)}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"showLeafIcon: ",(0,o.jsx)(r.Switch,{checked:h,onChange:e=>{c(e),t({showLeafIcon:e});}})]}),(0,o.jsx)(r.Tree,{showLine:n,showIcon:d,className:"draggable-tree",defaultExpandedKeys:u,draggable:!0,blockNode:!0,onDragEnter:e=>{console.log(e),f(e.expandedKeys);},onDrop:n=>{let t;console.log(n);let o=n.node.key,s=n.dragNode.key,d=n.node.pos.split("-"),r=n.dropPosition-Number(d[d.length-1]),a=(e,l,n)=>{for(let t=0;t<e.length;t++){if(e[t].key===l)return n(e[t],t,e);e[t].children&&a(e[t].children,l,n);}},i=[...e];if(a(i,s,(e,l,n)=>{n.splice(l,1),t=e;}),n.dropToGap){if((n.node.props.children||[]).length>0&&n.node.props.expanded&&1===r)a(i,o,e=>{e.children=e.children||[],e.children.unshift(t);});else{let e,l;a(i,o,(n,t,o)=>{e=o,l=t;}),-1===r?e.splice(l,0,t):e.splice(l+1,0,t);}}else a(i,o,e=>{e.children=e.children||[],e.children.push(t);});l(i);},treeData:e})]});};}}]);
//# sourceMappingURL=OoSA9A4u-async.160340dc.js.map