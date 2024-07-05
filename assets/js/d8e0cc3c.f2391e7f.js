"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[762],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(b,o(o({ref:n},s),{},{components:t})):r.createElement(b,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"Banner",sidebar_label:"Banner",description:"",sidebar_position:3},l=void 0,u={unversionedId:"hc-integration/bv",id:"version-1.0.0/hc-integration/bv",title:"Banner",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/hc-integration/bv.md",sourceDirName:"hc-integration",slug:"/hc-integration/bv",permalink:"/hachi-doc/1.0.0/hc-integration/bv",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Banner",sidebar_label:"Banner",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Rewarded Ads",permalink:"/hachi-doc/1.0.0/hc-integration/rv"},next:{title:"Native",permalink:"/hachi-doc/1.0.0/hc-integration/nv"}},s={},p=[{value:"Loading a Banner",id:"loading-a-banner",level:2},{value:"Showing a Banner",id:"showing-a-banner",level:2},{value:"Hiding a Banner",id:"hiding-a-banner",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"loading-a-banner"},"Loading a Banner"),(0,i.kt)("p",null,"After calling the SDK initialization, the Banner advertisement is automatically loaded inside the SDK."),(0,i.kt)("h2",{id:"showing-a-banner"},"Showing a Banner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'public void Button_ShowBanner()\n{\n    /// <summary>\n    /// Display banner ads\n    /// </summary>\n    /// <param name="_pos">banner display location </param>\n    HCSDKManager.Instance.ShowBanner(MaxSdkBase.BannerPosition _pos);\n}\n')),(0,i.kt)("h2",{id:"hiding-a-banner"},"Hiding a Banner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"public void Button_HideBanner()\n{\n    HCSDKManager.Instance.HideBanner();\n}\n")))}f.isMDXComponent=!0}}]);