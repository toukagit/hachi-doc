"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[841],{1110:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),i=n(2600),o=n(2263),s=n(9960),d=n(4996),c=["3.0.0","1.0.0"],r=JSON.parse('[{"sdk_version":"3.0.8","update_time":"2024-09-26","update_content":{"zh":"1\u3001\u4fee\u590d Unity Editor \u767b\u5f55\u62a5\u9519\u95ee\u9898 \\n 2\u3001\u65b0\u589e Admob \u6298\u53e0 Banner","en":"1. Fix Unity Editor login failure \\n 2. Add Admob fold banner"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.8/HachiSDK_3.0.8_99cc063.unitypackage"},{"sdk_version":"3.0.7","update_time":"2024-09-10","update_content":{"zh":"1\u3001\u4fee\u590d\u65ad\u7f51\u91cd\u8fde\u540e\u540c\u4e00\u4e2a\u5546\u54c1\u65e0\u6cd5\u518d\u6b21\u8d2d\u4e70\u95ee\u9898","en":"1. Fixed the problem that the same item cannot be purchased again after the network is disconnected"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.7/HachiSDK_3.0.7_f7ddd75.unitypackage"},{"sdk_version":"3.0.6","update_time":"2024-09-06","update_content":{"zh":"1\u3001\u6dfb\u52a0IAP\u521d\u59cb\u5316\u56de\u8c03 \\n 2\u3001\u8d2d\u4e70\u56de\u8c03\u6dfb\u52a0\u8d2d\u4e70\u72b6\u6001\u7801 \\n 3\u3001\u4f18\u5316H5 Ads\u57cb\u70b9","en":"1. Add IAP initialization callback \\n 2. Purchase callback add purchase status code \\n 3. Optimize the H5 Ads burial point"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.6/HachiSDK_3.0.6_930e44e.unitypackage"},{"sdk_version":"3.0.5","update_time":"2024-07-29","update_content":{"zh":"1\u3001\u4fee\u590dUnity Iap\u63d2\u4ef6\u65b0\u7248\u672c\u6253\u5305\u5931\u8d25\u95ee\u9898","en":"1.Fix for Unity Iap plugin new version packaging failure"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.5/HachiSDK_3.0.5_210b7ff.unitypackage"},{"sdk_version":"3.0.4","update_time":"2024-07-18","update_content":{"zh":"1\u3001\u4fee\u590dH5\u5e7f\u544a\u5c55\u793a\u65f6\u5207\u540e\u53f0\u56de\u6765\u4e0d\u7ed9\u56de\u8c03\u95ee\u9898 \\n 2\u3001\u6253\u5f00\u8d26\u53f7\u767b\u5f55\u754c\u9762\u767b\u5f55\u7c7b\u578b\u517c\u5bb9auto","en":"1.Fixed H5 AD display when the background cut back does not give callback issue.\\n 2.Open the account login page Login type compatible with auto."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.4/HachiSDK_3.0.4_864ce9b.unitypackage"},{"sdk_version":"3.0.3","update_time":"2024-07-16","update_content":{"zh":"1\u3001\u4fee\u590d\u5728\u521d\u59cb\u5316SDK\u540e\u7acb\u5373\u8c03\u7528\u767b\u5f55\u63a5\u53e3\u62a5\u9519\u95ee\u9898","en":"1.Fixed an error when calling the login interface after initializing the SDK."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.3/HachiSDK_3.0.3_a01fbba.unitypackage"},{"sdk_version":"3.0.2","update_time":"2024-07-12","update_content":{"zh":"1\u3001\u4fee\u590d\u65ad\u7f51\u767b\u5f55\u5931\u8d25\u6e05\u7a7a\u672c\u5730userID\u95ee\u9898","en":"1.Fixed the problem that the local userID failed to be cleared."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.2/HachiSDK_3.0.2_71c583e.unitypackage"},{"sdk_version":"3.0.1","update_time":"2024-07-10","update_content":{"zh":"1\u3001\u65b0\u589e\u767b\u5f55\u8d26\u53f7\u4fe1\u606f\u754c\u9762","en":"1.Added the login account information page"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.1/HachiSDK_3.0.1_5764f64.unitypackage"},{"sdk_version":"3.0.0","update_time":"2024-07-05","update_content":{"zh":"1\u3001\u63a8\u9001\u6743\u9650\u6539\u4e3a\u4e3b\u52a8\u83b7\u53d6 \\n 2\u3001\u66f4\u65b0 Max/Topon \u4e09\u65b9\u5e7f\u544a\u6e90 \\n 3\u3001IAP\u542f\u52a8\u8865\u5355\u903b\u8f91\u6539\u4e3a\u4e3b\u52a8\u8c03\u7528 \\n4\u3001\u652f\u6301Unity2022.3\u53ca\u4ee5\u524d\u7248\u672c\u51faAndroid34\u5305 \\n5\u3001\u79fb\u9664 HCIVPositionName/HCRVPositionName\u63a5\u53e3\uff0c\u53ea\u652f\u6301\u4f20string\uff0c\u5f00\u53d1\u8005\u9700\u81ea\u5b9a\u4e49\u679a\u4e3e\u8f6cstring\u4f20\u5165","en":"1.Push permission changed to active access \\n 2.Update Max/Topon tripartite AD feed \\n3.IAP start replenishment logic is changed to active call \\n4.Support for Unity2022.3 and earlier versions of Android34 package \\n5.Remove HCIVPositionName/HCRVPositionName interface, only support string, developers need to turn the string into a custom enumeration"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/3.0.0/HCSDK_3.0.0_18ea0d0.unitypackage"},{"sdk_version":"2.3.5","update_time":"2024-06-26","update_content":{"zh":"1\u3001\u65b0\u589e\u63a8\u9001\u529f\u80fd \\n 2\u3001Android\u5e73\u53f0\u4fee\u590dReviewException\u8f6c\u6362\u5f02\u5e38\u5d29\u6e83\u95ee\u9898","en":"1.new push notification function \\n 2.Android platform to fix the ReviewException conversion exception crash problem"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.5/HCSDK_2.3.5_57a32d5.unitypackage"},{"sdk_version":"2.3.4","update_time":"2024-06-20","update_content":{"zh":"1\u3001\u79fb\u9664Adjust imei\u6587\u4ef6","en":"1.Remove the Adjust imei file"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.4/HCSDK_2.3.4_8773ad0.unitypackage"},{"sdk_version":"2.3.3","update_time":"2024-06-19","update_content":{"zh":"1\u3001\u4fee\u590dAndroid\u6253\u5305\u62a5\u9519\u95ee\u9898","en":"1.Fixed Android packaging error"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.3/HCSDK_2.3.3_bf14994.unitypackage"},{"sdk_version":"2.3.2","update_time":"2024-06-16","update_content":{"zh":"1\u3001\u65b0\u589esmaato/moloco/verve/bigo\u5e7f\u544a\u6e90 \\n2\u3001\u65b0\u589eAdjust SDK \u7b7e\u540d\u529f\u80fd\\n3\u3001\u65b0\u589eAdjust/Firebase \u6536\u76ca\u4e0a\u62a5\u5206\u79bb \\n4\u3001\u65b0\u589e\u654f\u611f\u8bcd\u63a5\u53e3\\n 5\u3001\u4f18\u5316H5\u5e7f\u544a","en":"1.Added smaato/moloco/verve/bigo AD feed \\n2.Added the Adjust SDK signing function \\n3.New Adjust/Firebase revenue reporting separation \\n4.Added sensitive word interfaces \\n5.Optimize H5 advertising"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.2/HCSDK_2.3.2_6e83983.unitypackage"},{"sdk_version":"2.3.1","update_time":"2024-06-07","update_content":{"zh":"1\u3001\u4fee\u590dunity2021.3.28+ SDK\u7248\u672cAndroid\u6253\u5305\u5931\u8d25 \\n2\u3001Google\u767b\u5f55\u65e0Google\u6846\u67b6\u65f6\u4f7f\u7528\u6e38\u5ba2\u767b\u5f55\\n3\u3001\u65b0\u589eiOS/Android\u5185\u8d2d\u8fde\u7eed\u7eed\u8ba2\u529f\u80fd \\n4\u3001\u66f4\u65b0Adjust/\u6570\u6570/Firebase SDK\\n 5\u3001\u5347\u7ea7Unity IAP \u63d2\u4ef64.9.4->4.12.0","en":"1.Fixed unity2021.3.28+ SDK version android packaging failure \\n2.Google Login Use Visitor login when there is no Google framework \\n3.Added continuous renewal function for iOS/Android in-app purchases \\n4.Update the Adjust/TD/Firebase SDK \\n5.Upgrade Unity IAP plugin 4.9.4->4.11.0"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.1/HCSDK_2.3.1_40b0d93.unitypackage"},{"sdk_version":"2.3.0","update_time":"2024-05-31","update_content":{"zh":"1\u3001\u65b0\u589eH5\u5e7f\u544a \\n2\u3001\u4f18\u5316iOS Google \u7ed1\u5b9a\u63a5\u53e3\\n3\u3001\u79fb\u9664 Facebook \u9ed8\u8ba4\u76f8\u5173ID \\n4\u3001\u589e\u52a0\u9690\u79c1\u8df3\u8f6cweb\u63a5\u53e3\\n5\u3001\u4f18\u5316iOS native \u5e03\u5c40\\n 6\u3001\u65b0\u589e\u5220\u9664\u5168\u90e8SDK\u6587\u4ef6\u529f\u80fd","en":"1.add H5 ads \\n2.optimize iOS Google bidding interface \\n3.remove Facebook default related ID \\n4.add privacy jump web interface \\n5.optimize iOS native layout \\n6.add delete all SDK file function"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.3.0/HCSDK_2.3.0_4ea9e85.unitypackage"},{"sdk_version":"2.2.9","update_time":"2024-05-27","update_content":{"zh":"1\u3001\u66f4\u65b0 Max/Facebook SDK \\n2\u3001iOS\u5e73\u53f0\u589e\u52a0 GameCenter \u767b\u5f55\\n3\u3001\u65b0\u589eDebug\u9762\u677f","en":"1.Update Max/Facebook SDK. \\n2.Added GameCenter login for iOS. \\n3. Add debug menu."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.9/HCSDK_2.2.9_ee23e96.unitypackage"},{"sdk_version":"2.2.8","update_time":"2024-05-09","update_content":{"zh":"1\u3001\u4fee\u590d\u63d2\u5c4f\u4e0e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u65f6\u95f4\u95f4\u9694\u4e0d\u751f\u6548\u95ee\u9898 \\n2\u3001\u5b89\u5353\u5e73\u53f0\u589e\u52a0 Google Play Games Services \u767b\u5f55","en":"1.Fixed an issue where the interstitial and rewardVideo AD intervals did not take effect \\n2.Added Google Play Games Services login for Android"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.8/HCSDK_2.2.8_989fdee.unitypackage"},{"sdk_version":"2.2.7","update_time":"2024-04-24","update_content":{"zh":"1\u3001\u652f\u6301TopOn/Max\u53cc\u805a\u5408 \\n2\u3001\u652f\u6301Firebase ABTest\\n3\u3001\u652f\u6301Google DMA \u8bb8\u53ef\u7b56\u7565 \\n4\u3001\u66f4\u65b0 Adjust/Facebook SDK","en":"1.Supports TopOn/Max dual aggregation \\n2.Firebase ABTest is supported. \\n3.Support for Google DMA licensing policies. \\n 4. Update Adjust/Facebook SDK."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.7/HCSDK_2.2.7_b640b3a.unitypackage"},{"sdk_version":"2.2.6","update_time":"2024-04-10","update_content":{"zh":"1\u3001\u6fc0\u52b1\u89c6\u9891\u6ca1\u51c6\u5907\u597d\u65f6\u5141\u8bb8\u6e38\u620f\u4f20\u5165\u63d0\u793a\u6587\u5b57 \\n2\u3001\u7f51\u7edc\u65ad\u5f00\u65f6\u8865\u5355\u903b\u8f91\u4f18\u5316\\n3\u3001\u65b0\u589e\u6fc0\u52b1\u89c6\u9891/\u63d2\u5c4f\u5c55\u793a\u63a5\u53e3\uff0c\u5141\u8bb8\u4f20string \u8868\u793a\u70b9\u4f4d","en":"1.The reward video is not ready to allow the game to pass prompt text. \\n2.Optimization of internal purchase replenishment logic when the network is disconnected. \\n3.The new reward video/interstitial show interface, allowing string to represent the pos."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.6/HCSDK_2.2.6_6fda461.unitypackage"},{"sdk_version":"2.2.5","update_time":"2024-04-02","update_content":{"zh":"1\u3001\u4f18\u5316Admob\uff08Android)\u521d\u59cb\u5316/\u8bf7\u6c42","en":"1.Optimize Admob (Android) initialization/request."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.5/HCSDK_2.2.5_6b34e92.unitypackage"},{"sdk_version":"2.2.4","update_time":"2024-03-25","update_content":{"zh":"1\u3001\u65e5\u5fd7\u5f00\u5173\u901a\u8fc7\u5728\u7ebf\u53c2\u6570\u63a7\u5236\\n2\u3001\u4fee\u590djson\u5e8f\u5217\u5316\u95ee\u9898\\n3\u3001\u65b0\u589e\u6570\u6570\u4e0a\u62a5\u53c2\u6570","en":"1.Log switch controls \\n2.through online parameters, fixes json serialization problems \\n3.adds ThinkingData reporting parameters."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.4/HCSDK_2.2.4_7ef2c52.unitypackage"},{"sdk_version":"2.2.3","update_time":"2024-03-19","update_content":{"zh":"1\u3001\u4f18\u5316\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\uff0c\u65e0\u6fc0\u52b1\u89c6\u9891\u65f6\u7531\u63d2\u5c4f\u5e7f\u544a\u66ff\u8865","en":"1.Optimize reward video ads, and replace them with interstitials when there is no reward video."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.3/HCSDK_2.2.3_cbe60c5.unitypackage"},{"sdk_version":"2.2.2","update_time":"2024-03-11","update_content":{"zh":"1\u3001\u4fee\u590d\u63d2\u5c4f\u95f4\u9694\u95ee\u9898","en":"1.Fixed the interstitial ad spacing issue."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.2/HCSDK_2.2.2_87deecd.unitypackage"},{"sdk_version":"2.2.1","update_time":"2024-03-11","update_content":{"zh":"1\u3001\u6dfb\u52a0\u5173\u5361\u76f8\u5173\u4e8b\u4ef6","en":"1.Add level related events."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.1/HCSDK_2.2.1_169fb08.unitypackage"},{"sdk_version":"2.2.0","update_time":"2024-02-29","update_content":{"zh":"1\u3001\u4f18\u5316adjust\u521d\u59cb\u5316\u65f6\u673a\\n2\u3001\u65b0\u589efirebase\u5d29\u6e83\u5206\u6790\\n3\u3001\u4fee\u590dbug","en":"1. Optimize the adjust initialization time.\\n2. Added firebase crash analysis.\\n3. Fix the bug."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.2.0/HCSDK_2.2.0_ef0772a.unitypackage"},{"sdk_version":"2.1.0","update_time":"2024-02-07","update_content":{"zh":"1\u3001\u4fee\u590dbug","en":"1. fix bugs."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.1.0/HCSDK_2.1.0_f0ea0b4.unitypackage"},{"sdk_version":"2.0.0","update_time":"2024-01-05","update_content":{"zh":"1\u3001\u6240\u6709\u9700\u8981\u586b\u5199\u7684ID\u5747\u6539\u4e3a\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6","en":"1. All ids to be filled in are read from the configuration file."},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/2.0.0/HCSDK_2.0.0_32a0ea8.unitypackage"},{"sdk_version":"1.1.2","update_time":"2023-11-09","update_content":{"zh":"1\u3001\u5c55\u793a\u6fc0\u52b1\u89c6\u9891\u63a5\u53e3\u65b0\u589e toast \u5f39\u6846\u53c2\u6570\uff0c\u9ed8\u8ba4\u5f00\u542f","en":"1. Add the toast pop-up parameter to the display incentive video interface, which is enabled by default"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/1.1.2/HCSDK_1.1.2_47527f7.unitypackage"},{"sdk_version":"1.0.0","update_time":"2023-10-26","update_content":{"zh":"1\u3001\u521d\u59cb\u7248\u672c","en":"1\u3001Initial release"},"download":"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Hachi%20SDK/Unity/1.0.0/HCSDK_1.0.0_dc754a8.unitypackage"}]');function l(e){return new URL(e).pathname.split("/").pop()}var u=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e,n=c[0];if(c.filter((function(e){return e!==n})),t.organizationName,t.projectName,r.length<1)return a.createElement(i.Z,{permalink:"/versions",description:"single-spa Versions page listing all documented site versions"},a.createElement("div",null,"\u6ca1\u6709\u914d\u7f6esdk,\u8bf7\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\u5148\u914d\u7f6e hachi_sdk_versions.json"));var u=r[0];return a.createElement(i.Z,{permalink:"/versions",description:"single-spa Versions page listing all documented site versions"},a.createElement("div",{className:"container margin-vert--xl"},a.createElement("h1",null,"Hachi SDK Release note"),a.createElement("div",{className:"margin-bottom--lg"},a.createElement("h2",null,"Latest version"),a.createElement("b",null,a.createElement(s.Z,{to:(0,d.Z)("/download")},a.createElement("font",{size:"5"},"HachiSDK v",u.sdk_version))," ")," ",a.createElement("br",null),a.createElement("table",{border:"0",width:"80%",align:"left"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{style:{width:"15%"}},"SDK Name"),a.createElement("td",{style:{width:"15%"}},"SDK Version"),a.createElement("td",{style:{width:"15%"}},"Update Time"),a.createElement("td",{style:{width:"40%"}},"Update Content"),a.createElement("td",{style:{width:"25%"}},"Download"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{style:{width:"15%"}},"HachiSDK"),a.createElement("td",{style:{width:"15%"}},u.sdk_version),a.createElement("td",{style:{width:"15%"}},u.update_time),a.createElement("td",{style:{width:"40%"}},u.update_content.en.split("\n").map((function(e,t){return a.createElement(a.Fragment,{key:t},e,a.createElement("br",null))}))),a.createElement("td",{style:{width:"25%"}},a.createElement("a",{href:u.download},l(u.download)),a.createElement("br",null))))),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null)),r.length>1?a.createElement("div",{className:"margin-bottom--lg"},a.createElement("h3",{id:"archive"},"Historical version"),a.createElement("hr",null),r.map((function(e,t){return 0!==t&&a.createElement("div",{key:t},a.createElement("div",null,a.createElement("b",null,a.createElement("font",{size:"4"},"HachiSDK v",e.sdk_version))),a.createElement("div",null,a.createElement("table",{border:"0",width:"80%"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{style:{width:"15%"}},"SDK Name"),a.createElement("td",{style:{width:"15%"}},"SDK Version"),a.createElement("td",{style:{width:"15%"}},"Update Time"),a.createElement("td",{style:{width:"40%"}},"Update Content"),a.createElement("td",{style:{width:"25%"}},"Download"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{style:{width:"15%"}},"HaChiSDK"),a.createElement("td",{style:{width:"15%"}},e.sdk_version),a.createElement("td",{style:{width:"15%"}},e.update_time),a.createElement("td",{style:{width:"40%"}},e.update_content.en.split("\n").map((function(e,t){return a.createElement(a.Fragment,{key:t},e,a.createElement("br",null))}))),a.createElement("td",{style:{width:"25%"}},a.createElement("a",{href:e.download},l(e.download)),a.createElement("br",null)))))))}))):a.createElement("div",null)))}}}]);