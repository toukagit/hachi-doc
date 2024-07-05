"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(g,a(a({ref:t},f),{},{components:n})):r.createElement(g,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Remote Config",sidebar_label:"Remote Config",description:"",sidebar_position:3},u=void 0,l={unversionedId:"remoteConfig",id:"version-1.0.0/remoteConfig",title:"Remote Config",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/remoteConfig.md",sourceDirName:".",slug:"/remoteConfig",permalink:"/hachi-doc/1.0.0/remoteConfig",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Remote Config",sidebar_label:"Remote Config",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Event Tracking",permalink:"/hachi-doc/1.0.0/events"},next:{title:"In-app purchase",permalink:"/hachi-doc/1.0.0/IAP"}},f={},s=[{value:"Get remote config",id:"get-remote-config",level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-remote-config"},"Get remote config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/// <summary>\n/// \n/// </summary>\n/// <param name="_key">remote config key</param>\n/// <param name="_defaultValue">remote config default value</param>\n/// <returns>string/int/bool</returns>\n\nstring Strvalue = HCSDKManager.Instance.GetRemoteConfigStr("TestKey01","defaultStringValue");\n\nint intValue = HCSDKManager.Instance.GetRemoteConfigInt("TestKey01", 0);\n\nbool boolValue = HCSDKManager.Instance.GetRemoteConfigBool("TestKey01", false);\n')),(0,i.kt)("p",null,"Default value are returned after Firebase activation fails."))}m.isMDXComponent=!0}}]);