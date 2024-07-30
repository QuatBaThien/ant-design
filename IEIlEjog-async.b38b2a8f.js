(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["IEIlEjog"],{IEIlEjog:function(a,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return o;}}),t("VHsuzA_G");let o=[{value:"Rsbuild",paraId:0},{value:" is a build tool driven by Rspack. This article will try to use ",paraId:0},{value:"Rsbuild",paraId:0},{value:" to create a project and import antd.",paraId:0},{value:"Before all start, you may need install ",paraId:1,tocIndex:0},{value:"yarn",paraId:1,tocIndex:0},{value:" or ",paraId:1,tocIndex:0},{value:"pnpm",paraId:1,tocIndex:0},{value:" or ",paraId:1,tocIndex:0},{value:"bun",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"During the initialization process, ",paraId:2},{value:"create-rsbuild",paraId:2},{value:" provides a series of templates for us to choose, We need choose the ",paraId:2},{value:"React",paraId:2},{value:" template.",paraId:2},{value:"The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it.",paraId:3},{value:"Then we go inside project and start it.",paraId:4},{value:"$ cd demo\n$ npm run dev\n",paraId:5},{value:"Open the browser at ",paraId:6},{value:"http://localhost:3000",paraId:6},{value:". It renders a title saying ",paraId:6},{value:"Rsbuild with React",paraId:6},{value:" on the page, which is considered successful.",paraId:6},{value:"Now we install ",paraId:7,tocIndex:1},{value:"antd",paraId:7,tocIndex:1},{value:" from yarn or npm or pnpm or bun.",paraId:7,tocIndex:1},{value:"Modify ",paraId:8},{value:"src/App.tsx",paraId:8},{value:", import Button component from ",paraId:8},{value:"antd",paraId:8},{value:".",paraId:8},{value:"import React from 'react';\nimport { Button } from 'antd';\n\nconst App: React.FC = () => (\n  <div className=\"App\">\n    <Button type=\"primary\">Button</Button>\n  </div>\n);\n\nexport default App;\n",paraId:9},{value:"OK, you should now see a blue primary button displayed on the page. Next you can choose any components of ",paraId:10},{value:"antd",paraId:10},{value:" to develop your application. Visit other workflows of ",paraId:10},{value:"Rsbuild",paraId:10},{value:" at its ",paraId:10},{value:"Official documentation",paraId:10},{value:".",paraId:10},{value:"Ref to the ",paraId:11,tocIndex:2},{value:"Customize Theme documentation",paraId:12,tocIndex:2},{value:". Modify theme with ConfigProvider:",paraId:11,tocIndex:2},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>\n    <MyApp />\n  </ConfigProvider>\n);\n\nexport default App;\n",paraId:13,tocIndex:2},{value:"We are successfully running the antd components using Rsbuild now, let\u2019s start build your own application!",paraId:14,tocIndex:2}];}}]);
//# sourceMappingURL=IEIlEjog-async.b38b2a8f.js.map