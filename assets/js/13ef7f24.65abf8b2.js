"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),f=a,d=g["".concat(l,".").concat(f)]||g[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Other functions",sidebar_label:"Other functions",description:"",sidebar_position:3},l=void 0,c={unversionedId:"other",id:"version-1.0.0/other",title:"Other functions",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/other.md",sourceDirName:".",slug:"/other",permalink:"/hachi-doc/other",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Other functions",sidebar_label:"Other functions",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Account system",permalink:"/hachi-doc/login"},next:{title:"For iOS",permalink:"/hachi-doc/sdk-projectsettings/sdk-projectsettings-ios"}},u={},p=[{value:"The game loses/gains focus",id:"the-game-losesgains-focus",level:2},{value:"Review",id:"review",level:2},{value:"Vibration",id:"vibration",level:2},{value:"Gets the current user source",id:"gets-the-current-user-source",level:2},{value:"Firebase activates the callback",id:"firebase-activates-the-callback",level:2},{value:"Privacy protocol interface",id:"privacy-protocol-interface",level:2},{value:"Delete all SDK-related files",id:"delete-all-sdk-related-files",level:2},{value:"Sensitive word interface",id:"sensitive-word-interface",level:2}],g={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-game-losesgains-focus"},"The game loses/gains focus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,i.kt)("p",null,"Set the game to lose/gain focus callback, the SDK will give a callback every time triggered to the corresponding situation.",(0,i.kt)("br",null),"\nFor example, when a commercial starts playing, your game will lose focus. When the AD is over, return to the game and your game will gain focus."),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"HCSDKManager.Instance.Review();\n")),(0,i.kt)("p",null,"Call to pop-up Google/Apple system review box."),(0,i.kt)("h2",{id:"vibration"},"Vibration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// Vibration strength: 0: slight 1: moderate 2: severe\n// Vibration time: 0 ~ 1\nHCSDKManager.Instance.Shake(1,0.5f);\n")),(0,i.kt)("h2",{id:"gets-the-current-user-source"},"Gets the current user source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void Start()\n{\n    HCSDKManager.Instance.SetUserSourceListenerCallback(UserSourceListenerCallback);\n    \n}\n    \nprivate void UserSourceListenerCallback(bool isOrganic, string network)\n{\n    HCDebugger.LogDebug("SetUserSourceListenerCallback isOrganic:" + isOrganic + "network:" + network);\n}\n')),(0,i.kt)("p",null,"User source callback, bool: true natural user false unnatural user"),(0,i.kt)("h2",{id:"firebase-activates-the-callback"},"Firebase activates the callback"),(0,i.kt)("p",null,"Must be set before SDK initialization; In this callback, you can obtain the latest remote online parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.SetFirebaseFetchDataAsyncSuccess = (result)=> {\n    \n    // result = true The activation succeeds, false the activation fails\n    HCDebugger.LogDebug("Firebase fetch remote config result:"+result);\n    \n};\n')),(0,i.kt)("h2",{id:"privacy-protocol-interface"},"Privacy protocol interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"HCSDKManager.Instance.OpenPrivacy();\n\n")),(0,i.kt)("h2",{id:"delete-all-sdk-related-files"},"Delete all SDK-related files"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4684).Z,width:"954",height:"368"})),(0,i.kt)("p",null,"After clicking, all SDK files will be removed. If the following error occurs when you reimport SDK again, please restart unity",(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8367).Z,width:"2532",height:"424"})),(0,i.kt)("h2",{id:"sensitive-word-interface"},"Sensitive word interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\npublic enum SensitiveType\n{\n    //1:Nickname (Short text)\n    //2: Chat (long text)\n    NickName = 1,\n    Chat = 2\n}\n\npublic enum SensitiveAppType\n{\n    //0: Domestic app\n    //1: Wechat mini program\n    //2: Overseas app (default is 2)\n    app = 0,\n    wx_app = 1,\n    global = 2\n}\n\nHCSDKManager.Instance.CheckSensitiveWords("test title",HCSensitive.SensitiveType.Chat, (result, content) =>\n {\n\n     if (result)\n     {\n         // Does not contain sensitive words\n     }\n     else\n     {\n         // Contains sensitive words, content is the text after removing sensitive words, sensitive words will be replaced by the symbol *\n     }\n\n },HCSensitive.SensitiveAppType.global);\n\n')))}f.isMDXComponent=!0},4684:function(e,t,n){t.Z=n.p+"assets/images/image34-aa31226569dd2520e7593a1865e84a88.jpg"},8367:function(e,t,n){t.Z=n.p+"assets/images/image35-4871c7366f04129c248ea5abbe643c08.jpeg"}}]);