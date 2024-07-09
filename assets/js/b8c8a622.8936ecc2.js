"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),v=a,f=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Native",sidebar_label:"Native",description:"",sidebar_position:3},l=void 0,s={unversionedId:"hc-integration/nv",id:"version-3.0.0/hc-integration/nv",title:"Native",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.0/hc-integration/nv.md",sourceDirName:"hc-integration",slug:"/hc-integration/nv",permalink:"/hachi-doc/hc-integration/nv",tags:[],version:"3.0.0",sidebarPosition:3,frontMatter:{title:"Native",sidebar_label:"Native",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Banner",permalink:"/hachi-doc/hc-integration/bv"},next:{title:"Event Tracking",permalink:"/hachi-doc/events"}},u={},p=[{value:"Showing a Native Ad",id:"showing-a-native-ad",level:2},{value:"Removing a Native Ad",id:"removing-a-native-ad",level:2}],d={toc:p};function v(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SDK will handle the native AD loading logic internally, and the game side can call the display/hide native method as needed."),(0,i.kt)("h2",{id:"showing-a-native-ad"},"Showing a Native Ad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"public void Button_ShowNative()\n{\n    HCSDKManager.Instance.ShowNative(nativeImage.rectTransform);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'API:\nvoid ShowNative(RectTransform pRect, Camera pCam = null, string pAdPos = "");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," RectTransform "),"\uff1aNeed to display the RectTransform of the native AD Image.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"}," pCam "),"\uff1aIf the UI uses camera mode, you must use an orthogonal camera.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"}," pAdPos "),"\uff1aDisplay native ads in the location of the dot."),(0,i.kt)("p",null,"Native location explanation",(0,i.kt)("br",null)),(0,i.kt)("font",{color:"#ff0000"},"Set the transparency of nativeImage to 0. This is set to white just to show the size of the native AD.",(0,i.kt)("br",null)),"Need to show native location:",(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1774).Z,width:"2610",height:"1442"})),(0,i.kt)("h2",{id:"removing-a-native-ad"},"Removing a Native Ad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"public void Button_RemoveNative()\n{\n    HCSDKManager.Instance.RemoveNative();\n}\n")),(0,i.kt)("font",{color:"#ff0000"},"When there is a call to display Native advertising interface, be sure to call to remove Native advertising interface, otherwise there will be a blocking game problem.",(0,i.kt)("br",null)))}v.isMDXComponent=!0},1774:function(e,t,n){t.Z=n.p+"assets/images/image03-4586bbc323134bb02d07d64dad31272e.png"}}]);