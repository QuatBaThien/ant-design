(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["TGiK17Yk"],{TGiK17Yk:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return f;}});var n=l("d3__vuQ2"),s=l("8Z0rk4BW");l("k8Re89Zk");var a=l("WyIMPUJp"),o=l("qdGieaVz"),i=n._(l("3j7xhDU2"));let d=({leftColumns:e,rightColumns:t,...l})=>(0,s.jsx)(o.Transfer,{...l,children:({direction:l,filteredItems:n,onItemSelectAll:a,onItemSelect:d,selectedKeys:r,disabled:c})=>(0,s.jsx)(o.Table,{rowSelection:{getCheckboxProps:e=>({disabled:c||e.disabled}),onSelectAll(e,t){let l=t.filter(e=>!e.disabled).map(({key:e})=>e),n=e?(0,i.default)(l,r):(0,i.default)(r,l);a(n,e);},onSelect({key:e},t){d(e,t);},selectedRowKeys:r},columns:"left"===l?e:t,dataSource:n,size:"small",style:{pointerEvents:c?"none":void 0},onRow:({key:e,disabled:t})=>({onClick:()=>{t||c||d(e,!r.includes(e));}})})}),r=["cat","dog","bird"],c=Array.from({length:20}).map((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,disabled:t%4==0,tag:r[t%3]})),h=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:e=>(0,s.jsx)(o.Tag,{children:e})},{dataIndex:"description",title:"Description"}],g=[{dataIndex:"title",title:"Name"}],u=c.filter(e=>Number(e.key)>10).map(e=>e.key);var f=()=>{let[e,t]=(0,a.useState)(u),[l,n]=(0,a.useState)([]),[i,r]=(0,a.useState)(!1),[f,S]=(0,a.useState)(!1);return(0,s.jsxs)(o.ConfigProvider,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,s.jsx)(o.Transfer,{dataSource:c,titles:["Source","Target"],targetKeys:e,selectedKeys:l,onChange:(e,l,n)=>{console.log("targetKeys:",e),console.log("direction:",l),console.log("moveKeys:",n),t(e);},onSelectChange:(e,t)=>{console.log("sourceSelectedKeys:",e),console.log("targetSelectedKeys:",t),n([...e,...t]);},onScroll:(e,t)=>{console.log("direction:",e),console.log("target:",t.target);},render:e=>e.title}),(0,s.jsx)(o.Transfer,{status:"error"}),(0,s.jsx)(o.Transfer,{status:"warning",showSearch:!0}),(0,s.jsx)(d,{dataSource:c,targetKeys:e,disabled:i,showSearch:f,onChange:e=>{t(e);},filterOption:(e,t)=>-1!==t.title.indexOf(e)||-1!==t.tag.indexOf(e),leftColumns:h,rightColumns:g}),(0,s.jsxs)(o.Space,{style:{marginTop:16},children:[(0,s.jsx)(o.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:i,onChange:e=>{r(e);}}),(0,s.jsx)(o.Switch,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:f,onChange:e=>{S(e);}})]})]});};}}]);
//# sourceMappingURL=TGiK17Yk-async.da3f4912.js.map