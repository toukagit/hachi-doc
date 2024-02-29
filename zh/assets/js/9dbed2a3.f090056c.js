"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[368],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd",description:"",sidebar_position:3},l=void 0,s={unversionedId:"other",id:"version-1.0.0/other",title:"\u5176\u4ed6\u529f\u80fd",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.0.0/other.md",sourceDirName:".",slug:"/other",permalink:"/hachi-doc/zh/other",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u53f7\u7cfb\u7edf",permalink:"/hachi-doc/zh/login"},next:{title:"\u6784\u5efaiOS\u5e73\u53f0",permalink:"/hachi-doc/zh/sdk-projectsettings/sdk-projectsettings-ios"}},u={},p=[{value:"\u4e00\u3001\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",id:"\u4e00\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9",level:2},{value:"\u4e8c\u3001\u8bc4\u4ef7",id:"\u4e8c\u8bc4\u4ef7",level:2},{value:"\u4e09\u3001\u9707\u52a8",id:"\u4e09\u9707\u52a8",level:2},{value:"\u56db\u3001\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",id:"\u56db\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",level:2},{value:"\u4e94\u3001Firebase \u6fc0\u6d3b\u56de\u8c03",id:"\u4e94firebase-\u6fc0\u6d3b\u56de\u8c03",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9"},"\u4e00\u3001\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9\u56de\u8c03\uff0cSDK\u6bcf\u6b21\u89e6\u53d1\u5230\u5bf9\u5e94\u60c5\u5883\u4f1a\u7ed9\u56de\u6765\u56de\u8c03\u3002",(0,o.kt)("br",null),"\n\u4f8b\u5982\u5f53\u5e7f\u544a\u5f00\u59cb\u64ad\u653e\u7684\u65f6\u5019\uff0c\u4f60\u7684\u6e38\u620f\u5c06\u4f1a\u5931\u53bb\u7126\u70b9\u3002\u5e7f\u544a\u64ad\u653e\u7ed3\u675f\uff0c\u8fd4\u56de\u6e38\u620f\uff0c\u4f60\u7684\u6e38\u620f\u4f1a\u83b7\u5f97\u7126\u70b9\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u8bc4\u4ef7"},"\u4e8c\u3001\u8bc4\u4ef7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"HCSDKManager.Instance.Review();\n")),(0,o.kt)("p",null,"\u8c03\u7528\u53ef\u5f39\u51fa\u8c37\u6b4c/\u82f9\u679c\u7cfb\u7edf\u8bc4\u4ef7\u5f39\u6846\u3002"),(0,o.kt)("h2",{id:"\u4e09\u9707\u52a8"},"\u4e09\u3001\u9707\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"// \u9707\u52a8\u5f3a\u5f31\uff1a0:\u8f7b\u5fae 1:\u4e2d\u5ea6 2:\u91cd\u5ea6\n// \u9707\u52a8\u65f6\u95f4: 0 ~ 1\nHCSDKManager.Instance.Shake(1,0.5f);\n")),(0,o.kt)("h2",{id:"\u56db\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"},"\u56db\u3001\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'void Start()\n{\n    HCSDKManager.Instance.SetUserSourceListenerCallback(UserSourceListenerCallback);\n    \n}\n    \nprivate void UserSourceListenerCallback(bool isOrganic, string network)\n{\n    HCDebugger.LogDebug("SetUserSourceListenerCallback isOrganic:" + isOrganic + "network:" + network);\n}\n')),(0,o.kt)("p",null,"\u7528\u6237\u6765\u6e90\u56de\u8c03\uff0cbool: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237"),(0,o.kt)("h2",{id:"\u4e94firebase-\u6fc0\u6d3b\u56de\u8c03"},"\u4e94\u3001Firebase \u6fc0\u6d3b\u56de\u8c03"),(0,o.kt)("p",null,"\u9700\u5728SDK\u521d\u59cb\u5316\u524d\u8bbe\u7f6e\uff1b\u5728\u6b64\u56de\u8c03\u4e2d\u53ef\u4ee5\u83b7\u53d6\u6700\u65b0\u8fdc\u7aef\u5728\u7ebf\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.SetFirebaseFetchDataAsyncSuccess = (result)=> {\n    \n    // result = true \u6fc0\u6d3b\u6210\u529f\uff0cfalse \u6fc0\u6d3b\u5931\u8d25\n    HCDebugger.LogDebug("Firebase fetch remote config result:"+result);\n    \n};\n')))}d.isMDXComponent=!0}}]);