(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["TGuivkTu"],{TGuivkTu:function(e,a,o){"use strict";o.d(a,"__esModule",{value:!0}),o.d(a,"texts",{enumerable:!0,get:function(){return t;}}),o("_6_bCDV-");let t=[{value:"In modern JS applications, unused module can be automatically removed by modular packaging tools. This process is called ",paraId:0},{value:"Tree Shaking",paraId:0},{value:". However, if you are already very familiar with it, you will find that it is not so perfect in reality. We still need some extra operations to achieve the best size optimization effect. Today, let's talk about a problem that ConfigProvider causes Tree Shaking to fail.",paraId:0},{value:"In daily maintenance, we encountered some problems that using ConfigProvider would cause bundle size to increase:",paraId:1,tocIndex:0},{value:"https://github.com/ant-design/ant-design/issues/41607",paraId:2,tocIndex:0},{value:"https://github.com/ant-design/ant-design/issues/43019",paraId:2,tocIndex:0},{value:"https://github.com/ant-design/ant-design/issues/42499",paraId:2,tocIndex:0},{value:"The community also found the package that was incorrectly packaged while giving feedback ",paraId:3,tocIndex:0},{value:"rc-field-form",paraId:3,tocIndex:0},{value:". Here we directly borrow the illustration in the issue:",paraId:3,tocIndex:0},{value:"ConfigProvider provides global configuration capabilities, which also includes the custom template configuration of Form component verification information:",paraId:4,tocIndex:0},{value:"<ConfigProvider form={{ validateMessages }} />\n",paraId:5,tocIndex:0},{value:"Since this feature dependents with the verification of the form, it is implemented by the FormProvider provided by the underlying ",paraId:6,tocIndex:0},{value:"rc-field-form",paraId:6,tocIndex:0},{value:". In antd, it will be aggregated with its own localized ",paraId:6,tocIndex:0},{value:"validateMessages",paraId:6,tocIndex:0},{value:":",paraId:6,tocIndex:0},{value:"// Sample only. Not real world code.\nimport { FormProvider } from 'rc-field-form';\n\nconst ConfigProvider = ({ validateMessages, children }) => {\n  const mergedValidateMessages = React.useMemo(\n    () => merge(antdDefaultValidateMessages, validateMessages),\n    [validateMessages],\n  );\n\n  return (\n    <FormProvider validateMessages={mergedValidateMessages}>\n      <SomeOtherProvider>{children}</SomeOtherProvider>\n    </FormProvider>\n  );\n};\n",paraId:7,tocIndex:0},{value:"Meanwhile, FormProvider itself encapsulates the FormContext of ",paraId:8,tocIndex:0},{value:"rc-field-form",paraId:8,tocIndex:0},{value:", which causes more content of ",paraId:8,tocIndex:0},{value:"rc-field-form",paraId:8,tocIndex:0},{value:" to be packaged after introducing FormProvider:",paraId:8,tocIndex:0},{value:"You may think, can we optimize it? If ",paraId:9,tocIndex:0},{value:"validateMessages",paraId:9,tocIndex:0},{value:" is not configured, we will not call this FormProvider?",paraId:9,tocIndex:0},{value:"// Sample only. Not real world code.\nimport { FormProvider } from 'rc-field-form';\n\nconst ConfigProvider = ({ validateMessages, children }) => {\n  let node = children;\n\n  if (validateMessages) {\n    node = <FormProvider validateMessages={merge(...)}>{node}</FormProvider>;\n  }\n\n  return node;\n};\n",paraId:10,tocIndex:0},{value:"Unfortunately, this is not possible. Tree Shaking is a static compilation process, and ",paraId:11,tocIndex:0},{value:"validateMessages",paraId:11,tocIndex:0},{value:" is a runtime configuration. So in the packaging process, we cannot know whether ",paraId:11,tocIndex:0},{value:"validateMessages",paraId:11,tocIndex:0},{value:" exists, so we cannot achieve this optimization.",paraId:11,tocIndex:0},{value:"We can adjust ",paraId:12,tocIndex:1},{value:"rc-field-form",paraId:12,tocIndex:1},{value:" dependencies, so that FormProvider can be decoupled. But obviously, we should not rely on the adjustment of third-party libraries though ",paraId:12,tocIndex:1},{value:"rc-field-form",paraId:12,tocIndex:1},{value:" is also maintained by us. We should solve this problem fundamentally, so that ConfigProvider no longer depends on FormProvider. The implementation is also very simple. Since this is unique to ",paraId:12,tocIndex:1},{value:"rc-field-form",paraId:12,tocIndex:1},{value:", we directly extract a Context, so that ConfigProvider no longer perceives FormProvider:",paraId:12,tocIndex:1},{value:"// Sample only. Not real world code.\nimport { ValidateMessageContext } from '../form/context.ts';\n\nconst ConfigProvider = ({ validateMessages, children }) => {\n  const mergedValidateMessages = ...\n\n  return (\n    // Just use the proxy context\n    <ValidateMessageContext value={mergedValidateMessages}>\n      <SomeOtherProvider>{children}</SomeOtherProvider>\n    </ValidateMessageContext>\n  );\n};\n",paraId:13,tocIndex:1},{value:"Form also consumes the proxy Context:",paraId:14,tocIndex:1},{value:"// Sample only. Not real world code.\nimport Form, { FormProvider } from 'rc-field-form';\n\nimport { ValidateMessageContext } from './context';\n\nexport default (props) => {\n  const validateMessages = React.useContext(ValidateMessageContext);\n\n  return (\n    <FormProvider validateMessages={validateMessages}>\n      <Form {...props} />\n    </FormProvider>\n  );\n};\n",paraId:15,tocIndex:1},{value:"Decomposing the dependencies in this way:",paraId:16,tocIndex:1},{value:"Tree Shaking provides an automated way to optimize bundle size, but we need to pay attention to some details. Otherwise, some dependencies may be incorrectly introduced. Thanks.",paraId:17,tocIndex:2}];}}]);
//# sourceMappingURL=TGuivkTu-async.693f8a28.js.map