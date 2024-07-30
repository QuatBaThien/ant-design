(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d8tBU_ci"],{d8tBU_ci:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"texts",{enumerable:!0,get:function(){return n;}}),a("2TZhOdCw");let n=[{value:"TypeScript \u7684\u7C7B\u578B\u5B9A\u4E49\u662F\u975E\u5E38\u5F3A\u5927\u7684\u5E2E\u624B\uFF0C\u5B83\u53EF\u4EE5\u89E3\u51B3\u5F88\u591A\u95EE\u9898\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u63D0\u524D\u53D1\u73B0\u7C7B\u578B\u9519\u8BEF\u4ECE\u800C\u907F\u514D\u5728\u8FD0\u884C\u65F6\u75DB\u82E6\u7684\u8C03\u8BD5\u3002\u5728 antd \u4E2D\uFF0C\u6211\u4EEC\u4E5F\u5C06\u7EC4\u4EF6\u7684\u57FA\u672C\u5B9A\u4E49\u90FD\u8FDB\u884C\u4E86\u5BFC\u51FA\uFF1A",paraId:0},{value:"import React from 'react';\nimport { Table, type TableColumnsType } from 'antd';\n\nconst columns: TableColumnsType = [\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n  },\n];\n\nexport default () => <Table columns={columns} />;\n",paraId:1},{value:"\u8FD9\u4E9B\u7C7B\u578B\u5B9A\u4E49\u6EE1\u8DB3\u4E86\u5927\u591A\u6570\u573A\u666F\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u5F00\u53D1\u8005\u5E0C\u671B\u83B7\u5F97\u66F4\u7CBE\u7EC6\u7684\u7C7B\u578B\u5B9A\u4E49\uFF0Cantd \u5E76\u4E0D\u4E00\u5B9A\u5C06\u5176\u5BFC\u51FA\u3002\u5728\u8FC7\u53BB\uFF0C\u6211\u4EEC\u63A8\u8350\u5F00\u53D1\u901A\u8FC7 TypeScript \u7684\u7C7B\u578B\u4F53\u64CD\u8FDB\u884C\u81EA\u884C\u62D3\u5C55\u6765\u6EE1\u8DB3\u9700\u6C42\uFF1A",paraId:2},{value:"import type { SelectProps } from 'antd';\n\ntype SelectOption<T> = NonNullable<SelectProps<T>['options']>[number];\n",paraId:3},{value:"\u8FD9\u5BF9\u4E8E TypeScript \u719F\u6089\u7684\u670B\u53CB\u800C\u8A00\uFF0C\u5E94\u8BE5\u4E0D\u662F\u4EC0\u4E48\u96BE\u4E8B\u3002\u4F46\u662F\u5BF9\u4E8E TypeScript \u521D\u5B66\u8005\u800C\u8A00\uFF0C\u8FD9\u53EF\u80FD\u662F\u4E00\u9053\u96BE\u9898\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u63A8\u51FA\u4E86\u4E00\u4E2A\u5DE5\u5177\u7C7B\u578B\u5E93\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7B80\u5316\u62BD\u53D6\u7C7B\u578B\u7684\u8FC7\u7A0B\u3002",paraId:4},{value:"\u73B0\u5728\u5728 antd \u4E2D\uFF0C\u6211\u4EEC\u989D\u5916\u63D0\u4F9B\u4E86 3 \u4E2A\u5DE5\u5177\u7C7B\u578B\uFF1A",paraId:5,tocIndex:0},{value:"GetProps<ComponentType>",paraId:6,tocIndex:0},{value:"GetProp<ComponentTypeOrComponentPropsType, PropName>",paraId:6,tocIndex:0},{value:"GetRef<ComponentType>",paraId:6,tocIndex:0},{value:"\u524D\u4E24\u8005\u7528\u6237\u5E2E\u52A9\u5F00\u53D1\u8005\u62BD\u53D6\u7EC4\u4EF6\u7684 props \u7C7B\u578B\uFF0C\u6700\u540E\u4E00\u4E2A\u7528\u4E8E\u62BD\u53D6\u7EC4\u4EF6\u7684 ref \u7C7B\u578B\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u4F8B\u5B50\u6765\u7406\u89E3\u8FD9\u4E9B\u7C7B\u578B\u7684\u7528\u6CD5\uFF1A",paraId:7,tocIndex:0},{value:"antd \u4E2D\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u5B9A\u4E49\u4E0D\u4E00\u5B9A\u88AB\u5BFC\u51FA\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 ",paraId:8,tocIndex:1},{value:"GetProps",paraId:8,tocIndex:1},{value:" \u6765\u83B7\u53D6\uFF1A",paraId:8,tocIndex:1},{value:"import type { Checkbox, GetProps } from 'antd';\n\ntype CheckboxGroupType = GetProps<typeof Checkbox.Group>;\n",paraId:9,tocIndex:1},{value:"\u5BF9\u4E8E\u7EC4\u4EF6\u7684\u5C5E\u6027\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:10,tocIndex:2},{value:"GetProp",paraId:10,tocIndex:2},{value:" \u6765\u83B7\u53D6\u3002\u5B83\u5DF2\u7ECF\u5C06 ",paraId:10,tocIndex:2},{value:"NonNullable",paraId:10,tocIndex:2},{value:" \u8FDB\u884C\u4E86\u5C01\u88C5\u3002\u6240\u4EE5\u4E0D\u7528\u518D\u8003\u8651\u4E3A\u7A7A\u7684\u60C5\u51B5\uFF1A",paraId:10,tocIndex:2},{value:"import type { GetProp, Select, SelectProps } from 'antd';\n\n// Both of this can work\ntype SelectOptionType1 = GetProp<SelectProps, 'options'>[number];\ntype SelectOptionType2 = GetProp<typeof Select, 'options'>[number];\n",paraId:11,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:12,tocIndex:3},{value:"GetRef",paraId:12,tocIndex:3},{value:"\uFF0C\u4F60\u4E0D\u7528\u518D\u8BB0\u5FC6\u7EC4\u4EF6\u7684 ref \u7C7B\u578B\u5230\u5E95\u662F HTMLElement \u6216\u8005\u4EC0\u4E48\u7279\u522B\u7684\u5B9A\u4E49\u3002\u76F4\u63A5\u7528\u5C31\u5B8C\u4E86\uFF1A",paraId:12,tocIndex:3},{value:"import React, { forwardRef } from 'react';\nimport type { GetRef, Select } from 'antd';\n\ntype SelectRefType = GetRef<typeof Select>; // BaseSelectRef\n\nconst Div = forwardRef<HTMLDivElement>((_, ref) => <div ref={ref} />);\ntype DomRefType = GetRef<typeof Div>; // HTMLDivElement\n",paraId:13,tocIndex:3},{value:"\u4EE5\u4E0A\u5C31\u662F\u6211\u4EEC\u63A8\u51FA\u7684\u5DE5\u5177\u7C7B\u578B\uFF0C\u5E0C\u671B\u80FD\u591F\u5E2E\u52A9\u5230\u5927\u5BB6\u3002\u5982\u679C\u4F60\u6709\u66F4\u597D\u7684\u60F3\u6CD5\uFF0C\u6B22\u8FCE\u5728 GitHub \u4E0A\u63D0\u51FA issue \u6216\u8005 PR\u3002",paraId:14,tocIndex:4}];}}]);
//# sourceMappingURL=d8tBU_ci-async.c9849ed4.js.map