"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[196],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(b,i(i({ref:r},s),{},{components:n})):t.createElement(b,i({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9726:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],d={title:"Rewarded Ads",sidebar_label:"Rewarded Ads",description:"",sidebar_position:2},l=void 0,c={unversionedId:"hc-integration/rv",id:"version-1.0.0/hc-integration/rv",title:"Rewarded Ads",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/hc-integration/rv.md",sourceDirName:"hc-integration",slug:"/hc-integration/rv",permalink:"/hachi-doc/hc-integration/rv",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"Rewarded Ads",sidebar_label:"Rewarded Ads",description:"",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interstitials",permalink:"/hachi-doc/hc-integration/iv"},next:{title:"Banner",permalink:"/hachi-doc/hc-integration/bv"}},s={},u=[{value:"Loading a Rewarded Ad",id:"loading-a-rewarded-ad",level:2},{value:"Showing a Rewarded Ad",id:"showing-a-rewarded-ad",level:2}],p={toc:u};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"loading-a-rewarded-ad"},"Loading a Rewarded Ad"),(0,o.kt)("p",null,"After calling SDK initialization, incentive video ads are automatically loaded inside the SDK."),(0,o.kt)("h2",{id:"showing-a-rewarded-ad"},"Showing a Rewarded Ad"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'public void Button_ShowRV()\n{\n    /// <summary>\n    /// Showing a Rewarded Ad\n    /// </summary>\n    /// <param name="_adPos">Rewarded pos</param>\n    /// <param name="_rewardCallback">Rewarded close callback</param>\n    /// <param name="_showFailedCallback">Rewarded show fail callback</param>\n    /// <param name="_useSDKToast">Whether to use SDK pop-up. Enabled by default</param>\n\n    bool _useSDKToast = false;\n    HCSDKManager.Instance.ShowRewardedAd(HCRVPositionName.GetDoubleCoin,RewardCallback,RewardShowFailCallback);\n}\n\nprivate void RewardShowFailCallback()\n{\n    // The reward video did not load properly or failed to play\n    HCDebugger.LogDebug("Failed to play the reward video");\n}\n\nprivate void RewardCallback(bool success)\n{\n    HCDebugger.LogDebug("RewardCallback result:"+success);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," HCRVPositionName "),"\uff1aReward video point name, please define the reward video advertising point name in the ","[Product Requirements document]"," first in HCAdPositionName.cs-HCRVPositionName.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"}," RewardCallback "),"\uff1aReward video close callback, (in this callback to handle the reward delivery, true: to the user to send a reward, false: incentive failure, can not send a reward)",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"}," RewardShowFailCallback "),"\uff1aReward video failed to play callback.\n",(0,o.kt)("strong",{parentName:"p"}," useSDKToast "),"\uff1a SDK Comes with pop-up prompt, enabled by default. The game can be more compatible with the game by using the game cartridge."))}m.isMDXComponent=!0}}]);