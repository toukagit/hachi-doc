"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[541],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"In-app purchase",sidebar_label:"In-app purchase",description:"",sidebar_position:3},c="In-app purchase",l={unversionedId:"IAP",id:"version-3.0.0/IAP",title:"In-app purchase",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.0/IAP.md",sourceDirName:".",slug:"/IAP",permalink:"/hachi-doc/IAP",tags:[],version:"3.0.0",sidebarPosition:3,frontMatter:{title:"In-app purchase",sidebar_label:"In-app purchase",description:"",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Remote Config",permalink:"/hachi-doc/remoteConfig"},next:{title:"Account system",permalink:"/hachi-doc/login"}},d={},u=[{value:"In-app purchase access method",id:"in-app-purchase-access-method",level:2},{value:"1\u3001Import IAP plug-in",id:"1import-iap-plug-in",level:3},{value:"2\u3001Add macro definition",id:"2add-macro-definition",level:3},{value:"3\u3001Add in-store items",id:"3add-in-store-items",level:3},{value:"4\u3001Buy listening callback",id:"4buy-listening-callback",level:3},{value:"5\u3001Purchase interface",id:"5purchase-interface",level:3},{value:"6\u3001Restore purchase (iOS Only)",id:"6restore-purchase-ios-only",level:3},{value:"7\u3001Reward issuance report(Must join)",id:"7reward-issuance-reportmust-join",level:3},{value:"8\u3001replenishment",id:"8replenishment",level:3},{value:"9\u3001Gets the localized price string interface",id:"9gets-the-localized-price-string-interface",level:3},{value:"10\u3001Continue to renew products",id:"10continue-to-renew-products",level:3},{value:"11\u3001Get all product information",id:"11get-all-product-information",level:3},{value:"12\u3001Get product information based on product ID",id:"12get-product-information-based-on-product-id",level:3},{value:"13\u3001The in-app purchase is abnormal",id:"13the-in-app-purchase-is-abnormal",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"in-app-purchase"},"In-app purchase"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," Need to add USE_IAP macro definition "),"   "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," ",(0,i.kt)("a",{parentName:"strong",href:"https://docs.unity3d.com/Packages/com.unity.purchasing@4.9/manual/StoresSupported.html"},"Unity In App Purchasing plugin version 4.12.0 or higher")," (UnityEditor 2020.3+) ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," Must achieve ",(0,i.kt)("a",{parentName:"strong",href:"#7reward-issuance-reportmust-join"}," \u30107\u3001reward issuance reporting(Must join)\u3011 ")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," SDK will automatically check whether the local contains unverified orders after successful purchase and failed purchase, and it is recommended that developers take the initiative to request a replacement order when entering the main interface. ",(0,i.kt)("a",{parentName:"strong",href:"#8replenishment"},"[8\u3001 replenishment]"),"  ")," ")))),(0,i.kt)("h2",{id:"in-app-purchase-access-method"},"In-app purchase access method"),(0,i.kt)("h3",{id:"1import-iap-plug-in"},"1\u3001Import IAP plug-in"),(0,i.kt)("p",null,"Import the Unity In App Purchasing plug-in.",(0,i.kt)("br",{parentName:"p"}),"\n","Unity menu -> Window -> Package Manager -> In App Purchasing -> Install\u3002"),(0,i.kt)("p",null,"If the version of the plug-in In App Purchasing is not 4.12.0, follow these steps to add it:"),(0,i.kt)("center",null,(0,i.kt)("img",{src:"../img/HCSDK/image37.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"input\uff1acom.unity.purchasing")," "),(0,i.kt)("h3",{id:"2add-macro-definition"},"2\u3001Add macro definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"USE_IAP \n")),(0,i.kt)("h3",{id:"3add-in-store-items"},"3\u3001Add in-store items"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  Two adding methods are supported:",(0,i.kt)("br",{parentName:"p"}),"\n","",(0,i.kt)("strong",{parentName:"p"},"a. Adding an item through the AddProductsStatic interface (called before initializing the SDK interface)"),"\n",(0,i.kt)("strong",{parentName:"p"},"b. Add the product ID through the AddProducts interface")),"  ",(0,i.kt)("font",{color:"ff0000"}," Note: The added product type must be the same as the background application type, otherwise the corresponding product information may not be requested.")," ",(0,i.kt)("br",null),"ProductType.NonConsumable  It can only be purchased once. Good for one-time purchases, such as extra levels",(0,i.kt)("br",null),"ProductType.Consumable     Can be purchased repeatedly. Suitable for consumable goods such as virtual currency",(0,i.kt)("br",null),"ProductType.Subscription   Can be purchased and restored repeatedly. Durable goods, but for a limited period",(0,i.kt)("br",null)," (subscription)")),(0,i.kt)("p",null,"a. By ",(0,i.kt)("strong",{parentName:"p"}," HCSDKManager. Instance. AddProductsStatic add commodity ID ")," interface "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    { "com.tkkk.unitysdk.demo.1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a12",ProductType.Consumable}\n};\n\nHCSDKManager.Instance.AddProductsStatic(ProductDic);\n')),(0,i.kt)("p",null,"note\uff1a",(0,i.kt)("br",null),"\nThis method needs to be called before initializing the SDK, that is, set the product information before initializing the SDK. ",(0,i.kt)("br",null),"\nThis method, which has the same result as a, is used to prevent the replacement of the HCPurchaseProducts.cs file when updating the SDK from causing the set item information to reset."),(0,i.kt)("p",null,"b. By ",(0,i.kt)("strong",{parentName:"p"}," HCSDKManager. Instance. AddProducts add commodity ID ")," interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    { "com.tkkk.unitysdk.demo.1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a12",ProductType.Consumable}\n};\n\nHCSDKManager.Instance.AddProducts(ProductDic);\n')),(0,i.kt)("h3",{id:"4buy-listening-callback"},"4\u3001Buy listening callback"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment callbacks must be set before SDK initialization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The payment callback is an asynchronous callback, and when the callback is returned, ensure that the game reward is issued normally. It is suggested that the game side can add a mask to shield user actions during the payment process"),"   ")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void Start()\n{\n    // Set the purchase listening callback\n    HCSDKManager.Instance.SetOnPurchaseDone(PurchaseCallback);\n}\n\n/// Apple/Google Pay order number\n/// Custom product name on the game side\n/// The product ID of the payment\n/// Successful payment or not\n/// Game extension field\nprivate void PurchaseCallback(string orderID, string productName, string productID, bool purchaseResult, string gameExtra)\n{\n    if (purchaseResult)\n    {\n        //Successful purchase\n    }\n    else\n    {\n        //Restore purchase\n        if(orderAlreadyExists){\n        \n            //Restore purchase success\n        \n        }else{\n        \n           // Purchase fail\n        \n        }\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Description: ")," ",(0,i.kt)("br",null)),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Items are normally delivered from purchaseResult or orderAlreadyExists that is true. The game side should handle the reward itself according to the demand, and the reward can not be issued repeatedly for non-consumable items. (If the de-advertising package contains de-advertising +500 diamonds, uninstall and reinstall to resume the purchase, only need to re-reward the de-advertising, and 500 diamonds have been issued before without being issued again. ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"The purchaseResult and orderAlreadyExists fields are not both true.")),(0,i.kt)("h3",{id:"5purchase-interface"},"5\u3001Purchase interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'public void BuyProduct()\n{\n    string productID = "com.tkkk.unitysdk.demo.a1";\n    string productName = "a1";\n    string gameExtra = "a1GameExtraParam";\n    HCSDKManager.Instance.BuyProductByID(productID,productName,gameExtra);\n}\n')),(0,i.kt)("h3",{id:"6restore-purchase-ios-only"},"6\u3001Restore purchase (iOS Only)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"HCSDKManager.Instance.RestorePurchases();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Description: "),(0,i.kt)("br",null),"\n1.for iOS products, Apple requires that if the in-purchase item contains non-consumable items, there must be a recovery purchase function. ",(0,i.kt)("br",null),"\n2.Restore the purchase function, please add according to the requirement document. The general logic is to add a restore purchase button on the setup screen. After uninstallation and reinstallation, click the Restore purchase button to restore purchased non-consumables. ",(0,i.kt)("br",null),"\n3.when there is a recoverable item, it will eventually be called to the successful purchase callback (point 4), and the game needs to ensure that the reward can be issued normally. ",(0,i.kt)("br",null),"\n4.Example: ",(0,i.kt)("br",null),"\nIf an item is a non-consumable item, the reward is: remove AD and 100 gold. When resuming the purchase, only the remove AD is restored, and 100 gold coins are not restored. ",(0,i.kt)("br",null),"\nEach time the recovery purchase method is called, the successful purchase will be called back, and the game needs to add logic to judge not to repeat or hide the recovery purchase button. ",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"7reward-issuance-reportmust-join"},"7\u3001Reward issuance report(Must join)"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," The game must implement this interface to complete the closed loop of internal purchase events.",(0,i.kt)("br",null),"\nThis interface is invoked when one of purchaseResult or orderAlreadyExists is true from Purchaseresult."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/// <summary>\n/// IAP games report rewards after delivery\n/// </summary>\n/// <param name="productName">Trade name</param>\n/// <param name="productID">Product SKU ID</param>\n/// <param name="orderID">Order ID</param>\n/// <param name="gameExtra01">Game Expansion field - Number of items purchased</param>\n/// <param name="gameExtra02">Game expansion field</param>\npublic void LogCheckingOrder(string productName, string productID, string orderID, string gameExtra01, string gameExtra02);\n\ne.g:\nprivate void PurchaseCallback(string orderID, string productName, string productID, bool purchaseResult,\n        string gameExtra, bool orderAlreadyExists)\n{\n    if (purchaseResult || orderAlreadyExists)\n    {\n        mPurchaseBtn.text = "Successful purchase";\n        HCSDKManager.Instance.LogCheckingOrder(productName,productID,orderID,"gameExtra01","gameExtra02");\n    }\n    else\n    {\n        mPurchaseBtn.text = "Purchase failure";\n    }\n\n    HCDebugger.LogDebug("PurchaseCallback orderID:" + orderID + " productName:" + productName + " productID" +\n                        productID + " purResult" + purchaseResult + " gameExtra:" + gameExtra +\n                        " orderAlreadyExists:" + orderAlreadyExists);\n}\n')),(0,i.kt)("h3",{id:"8replenishment"},"8\u3001replenishment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"HCSDKManager.Instance.ReadFailOrderId();\n")),(0,i.kt)("p",null,"The SDK will proactively check whether the local contains unverified orders after the purchase success and purchase failure. After the unverified order verification is successful, it will trigger ",(0,i.kt)("a",{parentName:"p",href:"#4buy-listening-callback"},"\u30104\u3001Buy listening callback\u3011"),". The developer can also actively call the replenishment interface for replenishment logic according to the actual situation."),(0,i.kt)("h3",{id:"9gets-the-localized-price-string-interface"},"9\u3001Gets the localized price string interface"),(0,i.kt)("p",null,"Returns a price string with a currency symbol, such as '$1.99' '\uffe56.99'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"public void GetPriceByID()\n{\n    string productID = \"com.tkkk.unitysdk.demo.a1\";\n   \n    // Returns a price string with a currency symbol, such as '$1.99' '\uffe56.99'.\n    string price = HCSDKManager.Instance.GetPriceByID(productID);\n}\n")),(0,i.kt)("h3",{id:"10continue-to-renew-products"},"10\u3001Continue to renew products"),(0,i.kt)("p",null,"When the iap plug-in initializes successfully, it checks for the existence of a continuous subscription product. Please register the callback before initializing the SDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'HCSDKManager.Instance.SetOnCheckSubscribeValidity((productId,validity)=>{\n\n    HCDebugger.LogDebug("OnCheckSubscribeValidity productId:"+productId+ " validity"+ validity);\n    if (validity)\n    {\n        // The goods are within the validity period\n    }\n    else\n    {\n        // Goods have expired\n    }\n});\n')),(0,i.kt)("p",null,"Note: The SDK validates all subscription orders, so the callback is executed multiple times. validity returns false in the callback when the expired order is executed. validity returns true when the latest subscription order is executed if the user did not unorder the item."),(0,i.kt)("h3",{id:"11get-all-product-information"},"11\u3001Get all product information"),(0,i.kt)("p",null,"Return all configured items on AppStore/Google Play."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void Start()\n{\n    HCSDKManager.Instance.OnGetProductsInfo(OnProductInfoCallback);\n}\n\n public void OnProductInfoCallback(Product[] products)\n {\n    /// ex:\n    ///     products[0].metadata.localizedTitle\n    ///     products[0].metadata.localizedPriceString\n    ///     products[0].metadata.localizedDescription\n    ///     products[0].metadata.isoCurrencyCode\n } \n")),(0,i.kt)("h3",{id:"12get-product-information-based-on-product-id"},"12\u3001Get product information based on product ID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'string productID = "com.tkkk.unitysdk.demo.a1";\n\nProduct prodyct = HCSDKManager.Instance.GetProductInfoByID(productID);\n')),(0,i.kt)("h3",{id:"13the-in-app-purchase-is-abnormal"},"13\u3001The in-app purchase is abnormal"),(0,i.kt)("p",null,"In case of payment failure, please confirm the following issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Payment callbacks must be set before SDK initialization"),(0,i.kt)("li",{parentName:"ul"},"All product categories must be consistent with the background configuration, consumables, non-consumables or subscription products"),(0,i.kt)("li",{parentName:"ul"},"GooglePlay China account cannot be adjusted to pay, you need to switch regions or use another region account"),(0,i.kt)("li",{parentName:"ul"},"Attempts to switch between different vpn nodes due to network reasons")))}m.isMDXComponent=!0}}]);