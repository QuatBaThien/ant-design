(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["TZ8f00Do"],{TZ8f00Do:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("8Z0rk4BW");l("FhSzTP4a");var a=l("WyIMPUJp"),d=l("qdGieaVz");let r=(e,t)=>e.includes(t),i=(e=[],t=[])=>e.map(({children:e,...l})=>({...l,disabled:t.includes(l.key),children:i(e,t)})),s=({dataSource:e,targetKeys:t=[],...l})=>{let{token:a}=d.theme.useToken(),s=[];return!function e(t=[]){t.forEach(t=>{s.push(t),e(t.children);});}(e),(0,n.jsx)(d.Transfer,{...l,targetKeys:t,dataSource:s,className:"tree-transfer",render:e=>e.title,showSelectAll:!1,children:({direction:l,onItemSelect:s,selectedKeys:c})=>{if("left"===l){let l=[...c,...t];return(0,n.jsx)("div",{style:{padding:a.paddingXS},children:(0,n.jsx)(d.Tree,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:l,treeData:i(e,t),onCheck:(e,{node:{key:t}})=>{s(t,!r(l,t));},onSelect:(e,{node:{key:t}})=>{s(t,!r(l,t));}})});}}});},c=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}];var o=()=>{let[e,t]=(0,a.useState)([]);return(0,n.jsx)(s,{dataSource:c,targetKeys:e,onChange:e=>{t(e);}});};}}]);
//# sourceMappingURL=TZ8f00Do-async.4d0433aa.js.map