(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ljYSs-06"],{"ljYSs-06":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"SandpackStatic",{enumerable:!0,get:function(){return d;}});var i=n("QF2SZ-5d"),o=n("t7sUgw_L"),r=n("CCKFhiaL"),s=n("udYfTw6D");n("WBDvJ6hg"),n("zHx8duZN");var a=function(e,t,n){var i=e.exec(t);if(i&&i.length>=1){var o=i.index+i[0].length;return t.substring(0,o)+n+t.substring(o);}},c=function(e){return"string"==typeof e?e:new TextDecoder().decode(e);},l=function(e){var t=c(e),n=new DOMParser().parseFromString(t,"text/html");n.documentElement.getAttribute("lang")||n.documentElement.setAttribute("lang","en");var i=n.documentElement.outerHTML;return"<!DOCTYPE html>\n".concat(i);},d=function(e){function t(t,n,i){void 0===i&&(i={});var s,a=e.call(this,t,n,i)||this;if(a.files=new Map,a.status="initializing",a.emitter=new r.E,a.previewController=new o.PreviewController({baseUrl:null!==(s=i.bundlerURL)&&void 0!==s?s:"https://preview.sandpack-static-server.codesandbox.io",getFileContent:function(e){var t=a.files.get(e);if(!t)throw Error("File not found");if(e.endsWith(".html")||e.endsWith(".htm"))try{t=l(t),t=a.injectProtocolScript(t),t=a.injectExternalResources(t,i.externalResources),t=a.injectScriptIntoHead(t,{script:r.c,scope:{channelId:(0,r.g)()}});}catch(e){console.error("Runtime injection failed",e);}return t;}}),"string"==typeof t){a.selector=t;var c=document.querySelector(t);a.element=c,a.iframe=document.createElement("iframe");}else a.element=t,a.iframe=t;return a.iframe.getAttribute("sandbox")||(a.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"),a.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),a.eventListener=a.eventListener.bind(a),"undefined"!=typeof window&&window.addEventListener("message",a.eventListener),a.updateSandbox(),a;}return(0,i.g)(t,e),t.prototype.injectContentIntoHead=function(e,t){var n;return e=null!==(n=a(/<head[^<>]*>/g,e=c(e),"\n"+t))&&void 0!==n?n:t+"\n"+e;},t.prototype.injectProtocolScript=function(e){return this.injectContentIntoHead(e,'<script>\n  window.addEventListener("message", (message) => {\n    if(message.data.type === "refresh") {\n      window.location.reload();\n    }\n  })\n</script>');},t.prototype.injectExternalResources=function(e,t){void 0===t&&(t=[]);var n=t.map(function(e){var t=e.match(/\.([^.]*)$/),n=null==t?void 0:t[1];if("css"===n||e.includes("fonts.googleapis"))return'<link rel="stylesheet" href="'.concat(e,'">');if("js"===n)return'<script src="'.concat(e,'"></script>');throw Error("Unable to determine file type for external resource: ".concat(e));}).join("\n");return this.injectContentIntoHead(e,n);},t.prototype.injectScriptIntoHead=function(e,t){var n=t.script,i=t.scope,o="\n    <script>\n      const scope = ".concat(JSON.stringify(void 0===i?{}:i),";\n      ").concat(n,"\n    </script>\n    ").trim();return this.injectContentIntoHead(e,o);},t.prototype.updateSandbox=function(e,t){void 0===e&&(e=this.sandboxSetup);var n=(0,r.f)(e.files);this.dispatch({codesandbox:!0,modules:n,template:e.template,type:"compile"});},t.prototype.compile=function(e){return(0,i._)(this,void 0,void 0,function(){var t;return(0,i.a)(this,function(n){switch(n.label){case 0:return this.files=new Map(Object.entries(e)),[4,this.previewController.initPreview()];case 1:return t=n.sent(),this.iframe.setAttribute("src",t),this.status="done",this.dispatch({type:"done",compilatonError:!1}),this.dispatch({type:"urlchange",url:t,back:!1,forward:!1}),[2];}});});},t.prototype.eventListener=function(e){if(e.source===this.iframe.contentWindow){var t=e.data;t.codesandbox&&this.dispatch(t);}},t.prototype.dispatch=function(e){var t;"compile"===e.type?this.compile(e.modules):(null===(t=this.iframe.contentWindow)||void 0===t||t.postMessage(e,"*"),this.emitter.dispatch(e));},t.prototype.listen=function(e){return this.emitter.listener(e);},t.prototype.destroy=function(){this.emitter.cleanup(),"undefined"!=typeof window&&window.removeEventListener("message",this.eventListener);},t;}(s.S);}}]);
//# sourceMappingURL=ljYSs-06-async.bead4308.js.map