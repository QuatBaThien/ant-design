(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["AtpSx-5w"],{"AtpSx-5w":function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return t;}}),n("eHdr-SDw");let t=[{value:"Ant Design React \u81F4\u529B\u4E8E\u63D0\u4F9B\u7ED9\u7A0B\u5E8F\u5458",paraId:0},{value:"\u6109\u60A6",paraId:0},{value:"\u7684\u5F00\u53D1\u4F53\u9A8C\u3002",paraId:0},{value:"\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u63A8\u8350\u5148\u5B66\u4E60 ",paraId:1},{value:"React",paraId:1},{value:"\uFF0C\u5E76\u6B63\u786E\u5B89\u88C5\u548C\u914D\u7F6E\u4E86 ",paraId:1},{value:"Node.js",paraId:1},{value:" v16 \u6216\u4EE5\u4E0A\u3002\u5B98\u65B9\u6307\u5357\u5047\u8BBE\u4F60\u5DF2\u4E86\u89E3\u5173\u4E8E HTML\u3001CSS \u548C JavaScript \u7684\u4E2D\u7EA7\u77E5\u8BC6\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u5B8C\u5168\u638C\u63E1\u4E86 React \u5168\u5BB6\u6876\u7684\u6B63\u786E\u5F00\u53D1\u65B9\u5F0F\u3002\u5982\u679C\u4F60\u521A\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF\u6216\u8005 React\uFF0C\u5C06 UI \u6846\u67B6\u4F5C\u4E3A\u4F60\u7684\u7B2C\u4E00\u6B65\u53EF\u80FD\u4E0D\u662F\u6700\u597D\u7684\u4E3B\u610F\u3002",paraId:1},{value:"\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Ant Design \u7EC4\u4EF6\u7684\u5728\u7EBF codesandbox \u6F14\u793A\u3002",paraId:2,tocIndex:0},{value:"const sandpackConfig = {\n  autorun: true,\n};\n\nimport React from 'react';\nimport { Button, Space, DatePicker, version } from 'antd';\n\nconst App = () => (\n  <div style={{ padding: '0 24px' }}>\n    <h1>antd version: {version}</h1>\n    <Space>\n      <DatePicker />\n      <Button type=\"primary\">Primary Button</Button>\n    </Space>\n  </div>\n);\n\nexport default App;\n",paraId:3,tocIndex:0},{value:"\u8BBF\u95EE ",paraId:4,tocIndex:1},{value:"https://u.ant.design/codesandbox-repro",paraId:4,tocIndex:1},{value:" \u521B\u5EFA\u4E00\u4E2A codesandbox \u7684\u5728\u7EBF\u793A\u4F8B\uFF0C\u522B\u5FD8\u4E86\u4FDD\u5B58\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u3002",paraId:4,tocIndex:1},{value:"\u76F4\u63A5\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u66FF\u6362 ",paraId:5,tocIndex:2},{value:"index.js",paraId:5,tocIndex:2},{value:" \u7684\u5185\u5BB9\uFF0C\u7528 React \u7684\u65B9\u5F0F\u76F4\u63A5\u4F7F\u7528 antd \u7EC4\u4EF6\u3002",paraId:5,tocIndex:2},{value:"import React, { useState } from 'react';\nimport { ConfigProvider, DatePicker, message } from 'antd';\n// \u7531\u4E8E antd \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\u4E3A\u4E2D\u6587\nimport dayjs from 'dayjs';\nimport { createRoot } from 'react-dom/client';\n\nimport 'dayjs/locale/zh-cn';\n\nimport zhCN from 'antd/locale/zh_CN';\n\nimport './index.css';\n\ndayjs.locale('zh-cn');\n\nconst App = () => {\n  const [date, setDate] = useState(null);\n  const [messageApi, contextHolder] = message.useMessage();\n  const handleChange = (value) => {\n    messageApi.info(`\u60A8\u9009\u62E9\u7684\u65E5\u671F\u662F: ${value ? value.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'}`);\n    setDate(value);\n  };\n  return (\n    <ConfigProvider locale={zhCN}>\n      <div style={{ width: 400, margin: '100px auto' }}>\n        <DatePicker onChange={handleChange} />\n        <div style={{ marginTop: 16 }}>\n          \u5F53\u524D\u65E5\u671F\uFF1A{date ? date.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'}\n        </div>\n      </div>\n      {contextHolder}\n    </ConfigProvider>\n  );\n};\n\ncreateRoot(document.getElementById('root')).render(<App />);\n",paraId:6,tocIndex:2},{value:"\u4F60\u53EF\u4EE5\u5728\u7EC4\u4EF6\u9875\u9762\u7684\u5DE6\u4FA7\u83DC\u5355\u67E5\u770B\u7EC4\u4EF6\u5217\u8868\uFF0C\u6BD4\u5982 ",paraId:7,tocIndex:3},{value:"Alert",paraId:8,tocIndex:3},{value:" \u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u6587\u6863\u4E2D\u63D0\u4F9B\u4E86\u5404\u7C7B\u6F14\u793A\uFF0C\u6700\u4E0B\u65B9\u6709\u7EC4\u4EF6 API \u6587\u6863\u53EF\u4EE5\u67E5\u9605\u3002\u5728\u4EE3\u7801\u6F14\u793A\u90E8\u5206\u627E\u5230\u7B2C\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u70B9\u51FB\u53F3\u4E0B\u89D2\u7684\u56FE\u6807\u5C55\u5F00\u4EE3\u7801\u3002",paraId:7,tocIndex:3},{value:"\u7136\u540E\u4F9D\u7167\u6F14\u793A\u4EE3\u7801\u7684\u5199\u6CD5\uFF0C\u5728\u4E4B\u524D\u7684 codesandbox \u91CC\u4FEE\u6539 ",paraId:9,tocIndex:3},{value:"index.js",paraId:9,tocIndex:3},{value:"\uFF0C\u9996\u5148\u5728 ",paraId:9,tocIndex:3},{value:"import",paraId:9,tocIndex:3},{value:" \u5185\u5F15\u5165 Alert \u7EC4\u4EF6\uFF1A",paraId:9,tocIndex:3},{value:"- import { ConfigProvider, DatePicker, message } from 'antd';\n+ import { ConfigProvider, DatePicker, message, Alert } from 'antd';\n",paraId:10,tocIndex:3},{value:"\u7136\u540E\u5728 ",paraId:11,tocIndex:3},{value:"render",paraId:11,tocIndex:3},{value:" \u5185\u6DFB\u52A0\u76F8\u5E94\u7684 jsx \u4EE3\u7801\uFF1A",paraId:11,tocIndex:3},{value:"  <DatePicker onChange={value => this.handleChange(value)} />\n  <div style={{ marginTop: 16 }}>\n-   \u5F53\u524D\u65E5\u671F\uFF1A{date ? date.format('YYYY-MM-DD') : '\u672A\u9009\u62E9'}\n+   <Alert message=\"\u5F53\u524D\u65E5\u671F\" description={date ? date.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'} />\n  </div>\n",paraId:12,tocIndex:3},{value:"\u9009\u62E9\u4E00\u4E2A\u65E5\u671F\uFF0C\u5728\u53F3\u4FA7\u9884\u89C8\u533A\u5C31\u53EF\u4EE5\u770B\u5230\u5982\u56FE\u7684\u6548\u679C\u3002",paraId:13,tocIndex:3},{value:"\u597D\u7684\uFF0C\u73B0\u5728\u4F60\u5DF2\u7ECF\u4F1A\u4F7F\u7528\u57FA\u672C\u7684 antd \u7EC4\u4EF6\u4E86\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7EE7\u7EED\u63A2\u7D22\u5176\u4ED6\u7EC4\u4EF6\u7684\u7528\u6CD5\u3002\u5982\u679C\u4F60\u9047\u5230\u7EC4\u4EF6\u7684 bug\uFF0C\u4E5F\u63A8\u8350\u5EFA\u4E00\u4E2A\u53EF\u91CD\u73B0\u7684 codesandbox \u6765\u62A5\u544A bug\u3002",paraId:14,tocIndex:3},{value:"\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4F60\u4F1A\u9047\u5230\u6784\u5EFA\u3001\u8C03\u8BD5\u3001\u4EE3\u7406\u3001\u6253\u5305\u90E8\u7F72\u7B49\u4E00\u7CFB\u5217\u5DE5\u7A0B\u5316\u7684\u9700\u6C42\u3002\u4F60\u53EF\u4EE5\u9605\u8BFB\u540E\u9762\u7684\u6587\u6863\u6216\u8005\u4F7F\u7528\u4EE5\u4E0B\u811A\u624B\u67B6\u548C\u8303\u4F8B\uFF1A",paraId:15,tocIndex:4},{value:"Ant Design Pro",paraId:16,tocIndex:4},{value:"create-next-app",paraId:16,tocIndex:4},{value:"\u66F4\u591A\u811A\u624B\u67B6\u53EF\u4EE5\u67E5\u770B ",paraId:16,tocIndex:4},{value:"\u811A\u624B\u67B6\u5E02\u573A",paraId:16,tocIndex:4},{value:"antd",paraId:17,tocIndex:5},{value:" \u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 tree shaking\uFF0C\u76F4\u63A5\u5F15\u5165 ",paraId:17,tocIndex:5},{value:"import { Button } from 'antd';",paraId:17,tocIndex:5},{value:" \u5C31\u4F1A\u6709\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C\u3002",paraId:17,tocIndex:5},{value:"\u5982\u679C\u60F3\u81EA\u5DF1\u7EF4\u62A4\u5DE5\u4F5C\u6D41\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",paraId:18,tocIndex:6},{value:"webpack",paraId:18,tocIndex:6},{value:" \u6216\u8005 ",paraId:18,tocIndex:6},{value:"vite",paraId:18,tocIndex:6},{value:" \u8FDB\u884C\u6784\u5EFA\u548C\u8C03\u8BD5\uFF0C\u53EF\u4EE5\u4F7F\u7528 React \u751F\u6001\u5708\u4E2D\u7684 ",paraId:18,tocIndex:6},{value:"\u5404\u79CD\u811A\u624B\u67B6",paraId:18,tocIndex:6},{value:" \u8FDB\u884C\u5F00\u53D1\u3002",paraId:18,tocIndex:6},{value:"\u76EE\u524D\u793E\u533A\u4E5F\u6709\u5F88\u591A\u57FA\u4E8E antd \u5B9A\u5236\u7684 ",paraId:19,tocIndex:6},{value:"React \u811A\u624B\u67B6",paraId:19,tocIndex:6},{value:"\uFF0C\u6B22\u8FCE\u8FDB\u884C\u8BD5\u7528\u548C\u8D21\u732E\u3002",paraId:19,tocIndex:6}];}}]);
//# sourceMappingURL=AtpSx-5w-async.380c404a.js.map