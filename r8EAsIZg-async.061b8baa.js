(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["r8EAsIZg"],{r8EAsIZg:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"texts",{enumerable:!0,get:function(){return o;}}),a("lVN1wajB");let o=[{value:"message.success",paraId:0},{value:" \u7528\u7684\u597D\u597D\u7684\u4E3A\u4EC0\u4E48\u8981 warning \u6211\u53BB\u7528 hooks\uFF1Fantd \u8D8A\u505A\u8D8A\u5783\u573E\uFF0C\u8D70\u597D\u4E0D\u9001\uFF01",paraId:0},{value:"\u6211\u4EEC\u5728\u793E\u4EA4\u6E20\u9053\u542C\u5230\u4E86\u4E0D\u5C11\u5173\u4E8E\u9759\u6001\u65B9\u6CD5\u8F6C hooks \u7684\u8D28\u7591\u3002\u6211\u4EEC\u6DF1\u77E5\u8FD9\u975E\u5E38\u75DB\u82E6\uFF0C\u4F46\u662F\u5728\u7ECF\u8FC7\u591A\u5E74\u7684\u8003\u8651\u540E\uFF0C\u6211\u4EEC\u8FD8\u662F\u51B3\u5B9A\u5728 v5 \u505A\u4E00\u6B21\u5207\u5272\uFF08\u662F\u7684\uFF0C\u8FD9\u4E2A\u8BA8\u8BBA\u751A\u81F3\u6BD4 hooks \u5B58\u5728\u8FD8\u4E45\u8FDC\uFF0C\u4F46\u662F\u5728 hooks \u4E4B\u524D\u4E00\u76F4\u6CA1\u6709\u7B80\u5355\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u6211\u4EEC\u4E5F\u5C31\u4E00\u76F4\u5C06\u5176\u6401\u7F6E\u5728\u4E00\u8FB9\uFF09\u3002",paraId:1},{value:"\u5728 JS \u4E4B\u521D\uFF0C\u5C31\u5B58\u5728\u4E00\u4E2A\u7B80\u5355\u597D\u7528\u7684 API ",paraId:2,tocIndex:0},{value:"alert",paraId:2,tocIndex:0},{value:"\u3002\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u3001\u4EFB\u4F55\u5730\u65B9\u8C03\u7528\u5B83\u3002\u800C\u5230\u4E86\u6846\u67B6\u5C42\u9762\uFF0C\u8FD9\u79CD\u4FBF\u6377\u540C\u6837\u4EE4\u4EBA\u5FC3\u9A70\u795E\u5F80\u3002\u4E00\u4E2A\u5E38\u89C1\u7684\u4F8B\u5B50\u5C31\u662F\u6211\u5728 Redux \u4E2D\uFF0Cajax \u83B7\u53D6\u6570\u636E\u5931\u8D25\u5C31\u8C03\u7528\u4E00\u4E0B ",paraId:2,tocIndex:0},{value:"message.error",paraId:2,tocIndex:0},{value:" \u5728\u5C4F\u5E55\u4E0A\u5C55\u793A\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\uFF1A",paraId:2,tocIndex:0},{value:"\u7136\u800C\u4ECE\u6570\u636E\u6D41\u89D2\u5EA6\u770B\uFF0C\u8FD9\u5176\u5B9E\u8026\u5408\u4E86 UI \u548C \u6570\u636E\u5C42\u3002\u53EA\u662F\u56E0\u4E3A\u5176\u770B\u8D77\u6765\u8C03\u7528\u65F6\u5E76\u4E0D\u76F4\u63A5\u4F9D\u8D56 UI \u4E0A\u4E0B\u6587\uFF0C\u6240\u4EE5\u5B83\u770B\u8D77\u6765\u662F\u65E0\u5BB3\u7684\u800C\u5DF2\u3002\u4ECE\u6D4B\u8BD5\u89D2\u5EA6\u770B\uFF0C\u8FD9\u79CD\u8026\u5408\u4E5F\u4F1A\u8BA9\u6D4B\u8BD5\u53D8\u5F97\u590D\u6742\u3002",paraId:3,tocIndex:0},{value:"\u5728\u51FD\u6570\u4E2D\u8C03\u7528\u9759\u6001\u65B9\u6CD5\uFF0C\u867D\u7136\u770B\u8D77\u6765\u5B58\u5728\u4E0A\u4E0B\u6587\u3002\u4F46\u662F\u5B9E\u9645\u4E0A\u9759\u6001\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u6D88\u8D39\u4E0A\u4E0B\u6587\uFF0C\u5B83\u4F1A\u72EC\u7ACB\u4E8E\u5F53\u524D React \u751F\u547D\u5468\u671F\uFF0C\u56E0\u800C\u901A\u8FC7 Context \u83B7\u53D6\u7684\u5185\u5BB9\u5176\u5B9E\u4EC0\u4E48\u90FD\u5F97\u4E0D\u5230\uFF1A",paraId:4,tocIndex:1},{value:"const Context = React.createContext('default');\n\nconst MyContent = () => React.useContext(Context);\n\nconst Wrapper = () => {\n  React.useEffect(() => {\n    // Static function is out of context.\n    // We can only get `default` instead of `Hello World`.\n    message.success(<MyContent />);\n  }, []);\n\n  return null;\n};\n\nconst Demo = () => (\n  <Context.Provider value=\"Hello World\">\n    <Wrapper />\n  </Context.Provider>\n);\n",paraId:5,tocIndex:1},{value:"\u9759\u6001\u65B9\u6CD5\u5B9E\u73B0\u5176\u5B9E\u662F\u901A\u8FC7\u72EC\u7ACB\u7684 ",paraId:6,tocIndex:1},{value:"ReactDOM.render",paraId:6,tocIndex:1},{value:" \u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 React \u5B9E\u4F8B\uFF0C\u5728\u53EF\u4EE5\u83B7\u5F97\u4EFB\u610F\u573A\u666F\u8C03\u7528\u7684\u540C\u65F6\u4E5F\u548C\u5F53\u524D\u8C03\u7528\u8005\u4E0A\u4E0B\u6587\u5B8C\u5168\u65E0\u5173\u3002\u6240\u4EE5\u4F60\u5F88\u5BB9\u6613\u5C31\u60F3\u5230\uFF0C\u5982\u679C\u6211\u914D\u7F6E\u4E86\u4E3B\u9898\u3001\u56FD\u9645\u5316\u3001\u5168\u5C40\u914D\u7F6E\u7B49\u7B49\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u914D\u7F6E\u90FD\u4E0D\u4F1A\u751F\u6548\u3002",paraId:6,tocIndex:1},{value:"\u5728\u6211\u8BF4\u5230\u8FD9\u91CC\u7684\u540C\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u53CD\u5E94\u5230\uFF1A\u201C\u7B49\u7B49\uFF01antd \u7684\u9759\u6001\u65B9\u6CD5\u56FD\u9645\u5316\u662F\u751F\u6548\u7684\u5440\uFF01\u201D",paraId:7,tocIndex:1},{value:"\u6CA1\u9519\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u771F\u6B63\u7684\u6D88\u8D39\u4E86 Context\uFF0C\u800C\u662F\u6211\u4EEC\u505A\u4E86\u4E00\u4E2A\u975E\u5E38 Hack \u7684\u5B9E\u73B0\u3002\u5F53\u7528\u6237\u901A\u8FC7 ConfigProvider \u63D0\u4F9B ",paraId:8,tocIndex:1},{value:"locale",paraId:8,tocIndex:1},{value:" \u5C5E\u6027\u65F6\uFF0C\u6211\u4EEC\u4F1A\u4E34\u65F6\u5C06\u5176\u5B58\u5230\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u800C\u5F53\u9759\u6001\u65B9\u6CD5\u8C03\u7528\u65F6\uFF0C\u5219\u4F7F\u7528\u5176\u8FDB\u884C\u586B\u5145\uFF1A",paraId:8,tocIndex:1},{value:"// Sample. Not real world code.\nlet globalLocale = null;\n\nconst ConfigProvider = (props) => {\n  if (props.locale) {\n    globalLocale = props.locale;\n  }\n\n  // ...\n};\n\nModal.confirm = (props) => {\n  // ...\n\n  ReactDOM.render(\n    <ConfigProvider locale={globalLocale}>\n      <Modal {...modalProps} />\n    </ConfigProvider>,\n  );\n};\n",paraId:9,tocIndex:1},{value:"\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u770B\u51FA\u6765\uFF0C\u8FD9\u4E2A\u4EE3\u7801\u975E\u5E38\u4E0D\u5065\u58EE\u3002\u9759\u6001\u65B9\u6CD5\u5176\u5B9E\u6839\u672C\u4E0D\u77E5\u9053\u8C03\u7528\u5C42\u7EA7\u662F\u4EC0\u4E48\uFF0C\u5B83\u53EF\u80FD\u662F\u5728 ConfigProvider \u4E4B\u5185\u8C03\u7528\uFF0C\u4E5F\u53EF\u80FD\u662F\u5728\u4E4B\u5916\u8C03\u7528\u3002\u751A\u81F3\u53EF\u80FD\u540C\u65F6\u5B58\u5728\u914D\u7F6E\u4E86\u591A\u4E2A ConfigProvider \u7684\u60C5\u51B5\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4E5F\u4E0D\u53EF\u80FD\u4FDD\u8BC1\u9759\u6001\u65B9\u6CD5\u80FD\u591F\u6B63\u786E\u7684\u83B7\u53D6\u5230\u5F53\u524D\u7684\u914D\u7F6E\u3002",paraId:10,tocIndex:1},{value:"\u800C\u5F53\u6211\u4EEC\u5F00\u59CB\u652F\u6301\u52A8\u6001\u4E3B\u9898\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5C31\u4F1A\u53D8\u5F97\u66F4\u52A0\u660E\u663E\u3002\u5728\u4E3B\u9898\u4E2D\uFF0C\u5F88\u5BB9\u6613\u9047\u5230\u6DF7\u5408\u4E3B\u9898\u7684\u60C5\u51B5\u3002\u5F00\u53D1\u8005\u5728\u4E0D\u540C\u5C42\u7EA7\u8C03\u7528 Modal\u3001message\u3001notification \u5B83\u4EEC\u7684\u6837\u5F0F\u53EF\u80FD\u5B8C\u5168\u4E0D\u540C\u3002",paraId:11,tocIndex:1},{value:"\u5C31\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u4E3A\u4E86\u6D88\u8D39 Context\u3002\u6211\u4EEC\u8C03\u7528\u65B9\u6CD5\u65F6\u9700\u8981\u77E5\u9053\u5F53\u524D\u7684\u8282\u70B9\u4F4D\u7F6E\uFF0C\u56E0\u800C\u5728 v4 \u4E2D\u4E3A\u9759\u6001\u65B9\u6CD5\u5F15\u5165\u4E86\u5BF9\u5E94\u7684 Hooks \u65B9\u6CD5\uFF1A",paraId:12,tocIndex:2},{value:"const Demo = () => {\n  const [messageApi, contextHolder] = message.useMessage();\n\n  const info = () => {\n    messageApi.info('Hello, Ant Design!');\n  };\n\n  return (\n    <>\n      {/* Different insert holder position will get different context */}\n      {contextHolder}\n      <Button type=\"primary\" onClick={info}>\n        Display normal message\n      </Button>\n    </>\n  );\n};\n",paraId:13,tocIndex:2},{value:"\u4F60\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8FD9\u5176\u5B9E\u4E0D\u592A\u65B9\u4FBF\u3002\u5BF9\u4E8E\u5F00\u53D1\u8005\u800C\u8A00\uFF0C\u6BCF\u4E2A\u4F7F\u7528\u7684\u5730\u65B9\u90FD\u4ECE\u8FC7\u53BB\u76F4\u63A5\u8C03\u7528\uFF0C\u53D8\u6210\u4E86\u9700\u8981\u989D\u5916\u8BBE\u7F6E\u6CE8\u5165 Context \u8282\u70B9\u3002\u800C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FC7\u53BB\u9759\u6001\u65B9\u6CD5\u7684 Context \u5F80\u5F80\u53EA\u9700\u8981\u5173\u6CE8\u56FD\u9645\u5316\u3001\u4E3B\u9898\u7B49\u6BD4\u8F83\u7A33\u5B9A\u7684\u914D\u7F6E\u3002\u6240\u4EE5\u6211\u4EEC\u5982\u679C\u53EF\u4EE5\u6709\u4E00\u4E2A\u5730\u65B9\u653E\u7F6E Holder\uFF0C\u5176\u4ED6\u5730\u65B9\u76F4\u63A5\u590D\u7528\u90A3\u5C31\u66F4\u597D\u4E86\u3002",paraId:14,tocIndex:2},{value:"\u56E0\u800C\u5728 v5 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86 App \u7EC4\u4EF6\u3002\u8FD9\u4E2A\u7EC4\u4EF6\u672C\u8EAB\u5E26\u6709 DOM \u7ED3\u6784\uFF0C\u4F1A\u4E3A\u81EA\u8282\u70B9\u6DFB\u52A0\u4E00\u4E9B\u91CD\u7F6E\u6837\u5F0F\uFF08\u6BD4\u5982\u5728\u8FC7\u53BB\u7248\u672C\u88AB\u4EBA\u8BDF\u75C5\u7684\u5168\u5C40\u6837\u5F0F\u6C61\u67D3\uFF0C\u73B0\u5728\u53EA\u4F1A\u4F5C\u7528\u5230 App \u4E4B\u4E0B\uFF09\u3002\u540C\u65F6\u4E5F\u4E3A Modal\u3001message\u3001notification \u6DFB\u52A0\u4E86 ContextHolder\u3002\u8FD9\u6837\u5F00\u53D1\u8005\u5728\u5E94\u7528\u6700\u5916\u5C42\u6DFB\u52A0 App \u540E\uFF0C\u4EE3\u7801\u4E2D\u5C31\u53EF\u4EE5\u7B80\u5355\u7684\u4F7F\u7528\u5B83\u4EEC\u4E86\uFF1A",paraId:15,tocIndex:3},{value:"const Demo = () => {\n  const { message } = App.useApp();\n\n  React.useEffect(() => {\n    message.success('Hello World');\n  }, []);\n\n  // ...\n};\n",paraId:16,tocIndex:3},{value:"\u4ECE\u8BBE\u8BA1\u89D2\u5EA6\u6765\u8BF4\uFF0C\u9759\u6001\u65B9\u6CD5\u662F\u4E00\u4E2A\u975E\u5E38\u4E0D\u597D\u7684\u5B9E\u73B0\u3002\u4F46\u662F\u6211\u4EEC\u6DF1\u77E5\u5728\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u9759\u6001\u65B9\u6CD5\u662F\u5982\u6B64\u4FBF\u5229\u3001\u5982\u6B64\u597D\u7528\u3002\u5373\u4FBF\u5B83\u6709\u4E00\u4E9B\u201C\u65E0\u4F24\u5927\u96C5\u201D\u7684\u7F3A\u70B9\uFF0C\u4F46\u662F\u5B83\u4ECD\u7136\u5728\u5386\u53F2\u4E2D\u503C\u5F97\u6709\u4E00\u5E2D\u4E4B\u5730\u3002\u6240\u4EE5\u6211\u4EEC\u5728\u601D\u8003\uFF0C\u662F\u5426\u53EF\u4EE5\u6709\u5176\u4ED6\u7684\u65B9\u5F0F\u6765\u5C06\u8FD9\u4E9B\u526F\u4F5C\u7528\u4ECE\u7EC4\u4EF6\u5E93\u4E2D\u5265\u79BB\u4F46\u662F\u540C\u65F6\u53C8\u53EF\u4EE5\u670D\u52A1\u5F00\u53D1\u8005\u3002\u6BD4\u5982\u8BF4\u6539\u8FDB umi antd \u63D2\u4EF6\uFF0C\u5F53\u914D\u7F6E ",paraId:17,tocIndex:4},{value:"appData",paraId:17,tocIndex:4},{value:" \u65F6\uFF0C\u81EA\u52A8\u5C06\u9876\u5C42\u7684 App \u5B9E\u4F8B\u9759\u6001\u5316\u5230 antd \u4E2D\u3002\u5F53\u7136\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E9B\u60F3\u6CD5\u3002\u6211\u4EEC\u4F1A\u5728\u540E\u7EED\u7684\u7248\u672C\u4E2D\u7EE7\u7EED\u63A2\u7D22\u8FD9\u4E2A\u95EE\u9898\u3002",paraId:17,tocIndex:4}];}}]);
//# sourceMappingURL=r8EAsIZg-async.061b8baa.js.map