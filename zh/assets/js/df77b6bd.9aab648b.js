"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[712],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2086:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"\u63d2\u5c4f\u5e7f\u544a",sidebar_label:"\u63d2\u5c4f\u5e7f\u544a",description:"",sidebar_position:1},l=void 0,s={unversionedId:"hc-integration/iv",id:"version-3.0.0/hc-integration/iv",title:"\u63d2\u5c4f\u5e7f\u544a",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.0/hc-integration/iv.md",sourceDirName:"hc-integration",slug:"/hc-integration/iv",permalink:"/hachi-doc/zh/hc-integration/iv",tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{title:"\u63d2\u5c4f\u5e7f\u544a",sidebar_label:"\u63d2\u5c4f\u5e7f\u544a",description:"",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK\u96c6\u6210",permalink:"/hachi-doc/zh/integration"},next:{title:"\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",permalink:"/hachi-doc/zh/hc-integration/rv"}},u={},p=[{value:"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u53ef\u7528",id:"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u53ef\u7528",level:2},{value:"\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a",id:"\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a",level:2}],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SDK\u5185\u90e8\u4f1a\u5904\u7406\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u903b\u8f91\uff0c\u6e38\u620f\u4fa7\u6839\u636e\u9700\u8981\u8c03\u7528\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u65b9\u6cd5\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u53ef\u7528"},"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u53ef\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.IsInterstitialReady("IV_Unlock", HCIVADType.IV1)\n')),(0,o.kt)("h2",{id:"\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a"},"\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'\n/// <summary>\n/// \u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\n/// </summary>\n/// <param name="_adPos">\u63d2\u5c4f\u70b9\u4f4d</param>\n/// <param name="_IvType">\u63d2\u5c4ftype</param>\n/// <param name="_closeCallback">\u63d2\u5c4f\u5173\u95ed\u56de\u8c03</param>\nHCSDKManager.Instance.ShowInterstitial("IV_Unlock", HCIVADType.IV1, Action _closeCallback);\n\n\ne.g.\npublic enum HCIVPositionName\n{\n    IV_Unlock,\n    IV_Auto\n}\n\nprivate void Button_ShowIV1()\n{\n    \n    if(HCSDKManager.Instance.IsInterstitialReady(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1))\n    {\n        HCSDKManager.Instance.ShowInterstitial(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1, InterAdCloseCallback);\n    }\n}\n\n\nprivate void InterAdCloseCallback(bool result)\n{\n    if(result)\n    {\n       HCDebugger.LogDebug("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed");\n    }\n    else\n    {\n        HCDebugger.LogDebug("\u63d2\u5c4f\u672a\u51c6\u5907\u597d\u6216\u56e0\u6761\u4ef6\u5bfc\u81f4\u672a\u5c55\u793a\u63d2\u5c4f");\n    }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," _adPos "),"\uff1a\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\uff0c\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u3002\u5efa\u8bae\u6839\u636e\u9700\u6c42\u6587\u6863\u81ea\u5b9a\u4e49\u679a\u4e3e\u6216\u8005\u53ef\u76f4\u63a5\u4e0b\u8f7d\u6b64\u6587\u4ef6\u653e\u5230\u81ea\u5b9a\u4e49\u76ee\u5f55\u8fdb\u884c\u4f7f\u7528\u3002",(0,o.kt)("a",{parentName:"p",href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/SDKPositionName.cs"},"(SDKPositionName.cs)"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"}," _IvType "),"\uff1a\u63d2\u5c4f\u9891\u6b21\u7c7b\u578b\u3002\u9ed8\u8ba4\u4f7f\u7528 IV1\u3002\u53ef\u7ed3\u5408\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u5982\u6709\u4e0d\u540c\u63d2\u5c4f\u9891\u6b21\u9700\u6c42\uff0c\u53ef\u914d\u5408 IV2 \u4f7f\u7528\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"}," _closeCallback "),"\uff1a\u63d2\u5c4f\u5173\u95ed\u56de\u8c03\uff1btrue\uff1a\u5173\u95ed\u63d2\u5c4f\u65f6\u8fd4\u56de\uff0cfalse:\u56e0\u63d2\u5c4f\u672a\u51c6\u5907\u597d\u6216\u56e0\u6761\u4ef6\u5bfc\u81f4\u672a\u5c55\u793a\u63d2\u5c4f\u65f6\u8fd4\u56de\n",(0,o.kt)("strong",{parentName:"p"}," _adPos\u679a\u4e3e\u5b9a\u4e49\u793a\u4f8b\uff1a"),(0,o.kt)("br",null)),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\u9700\u6c42\u6587\u6863\u5982\u4e0b",(0,o.kt)("br",null)),(0,o.kt)("center",null,(0,o.kt)("img",{src:"../../img/HCSDK/image59.png",width:"80%",height:"80%"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'public enum HCIVPositionName\n{\n    IV_Unlock,\n    IV_Auto\n}\n\nHCSDKManager.Instance.ShowInterstitial(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1,(result)=> \n{\n    if(result)\n    {\n       HCDebugger.LogDebug("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed");\n    }\n    else\n    {\n        HCDebugger.LogDebug("\u63d2\u5c4f\u672a\u51c6\u5907\u597d\u6216\u56e0\u6761\u4ef6\u5bfc\u81f4\u672a\u5c55\u793a\u63d2\u5c4f");\n    }\n});\n')))}g.isMDXComponent=!0}}]);