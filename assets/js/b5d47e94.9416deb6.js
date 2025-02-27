"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Interstitial",sidebar_label:"Interstitial",description:"",sidebar_position:1},s=void 0,c={unversionedId:"hc-integration/iv",id:"version-3.0.0/hc-integration/iv",title:"Interstitial",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.0/hc-integration/iv.md",sourceDirName:"hc-integration",slug:"/hc-integration/iv",permalink:"/hachi-doc/hc-integration/iv",tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{title:"Interstitial",sidebar_label:"Interstitial",description:"",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK Integration",permalink:"/hachi-doc/integration"},next:{title:"Rewarded",permalink:"/hachi-doc/hc-integration/rv"}},u={},p=[{value:"Interstitial Ad isReady",id:"interstitial-ad-isready",level:2},{value:"Showing an Interstitial Ad",id:"showing-an-interstitial-ad",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The SDK will handle the plug-in advertising loading logic, and the game side can call the display plug-in advertising method as needed."),(0,a.kt)("h2",{id:"interstitial-ad-isready"},"Interstitial Ad isReady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.IsInterstitialReady("IV_Unlock", HCIVADType.IV1)\n')),(0,a.kt)("h2",{id:"showing-an-interstitial-ad"},"Showing an Interstitial Ad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\n    /// <summary>\n    /// \n    /// </summary>\n    /// <param name="_adPos">interstitial pos</param>\n    /// <param name="_IvType">interstitial type</param>\n    /// <param name="_closeCallback">interstitial close callback</param>\n    HCSDKManager.Instance.ShowInterstitial("IV_Unlock", HCIVADType.IV1, Action _closeCallback);\n\n\n    e.g.\n    public enum HCIVPositionName\n    {\n        IV_Unlock,\n        IV_Auto\n    }\n\n    private void Button_ShowIV1()\n    {\n        \n        if(HCSDKManager.Instance.IsInterstitialReady(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1))\n        {\n            HCSDKManager.Instance.ShowInterstitial(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1, InterAdCloseCallback);\n        }\n    }\n\n\n    private void InterAdCloseCallback(bool result)\n    {\n        if(result)\n        {\n           HCDebugger.LogDebug("close interstitial");\n        }\n        else\n        {\n            HCDebugger.LogDebug("The interstitial ad is not ready or failed to display due to certain conditions");\n        }\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," _adPos "),"\uff1aInsert advertising spot name, insert advertising spot name in ","[product requirements document]",". You are advised to customize the enumeration according to the required document or download the file to a customized directory.",(0,a.kt)("a",{parentName:"p",href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/SDKPositionName.cs"},"(SDKPositionName.cs)"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"}," _IvType "),"\uff1aType of frequency control Default set IV1. IV2 can be used if required.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"}," _closeCallback "),"\uff1aInterstitial close callback; true: returned when the interstitial is closed, false: returned when the interstitial is not ready or fails to display due to certain conditions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," _adPos enumeration definition example:"),(0,a.kt)("br",null)),(0,a.kt)("p",null,"For example, the requirements document is as follows:"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"../../img/HCSDK/image59.png",width:"80%",height:"80%"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," e.g\uff1a"),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'public enum HCIVPositionName\n{\n    IV_Unlock,\n    IV_Auto\n}\n\n\nHCSDKManager.Instance.ShowInterstitial(HCIVPositionName.IV_Unlock.ToString(), HCIVADType.IV1,(result)=> \n{\n    if(result)\n    {\n       HCDebugger.LogDebug("close interstitial");\n    }\n    else\n    {\n        HCDebugger.LogDebug("The interstitial ad is not ready or failed to display due to certain conditions");\n    }\n});\n')))}m.isMDXComponent=!0}}]);