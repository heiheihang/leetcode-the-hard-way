"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[369],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/"},s="2110 - Number of Smooth Descent Periods of a Stock (Medium)",c={unversionedId:"2100-2199/number-of-smooth-descent-periods-of-a-stock-medium",id:"2100-2199/number-of-smooth-descent-periods-of-a-stock-medium",title:"2110 - Number of Smooth Descent Periods of a Stock (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/",source:"@site/solutions/2100-2199/2110-number-of-smooth-descent-periods-of-a-stock-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/number-of-smooth-descent-periods-of-a-stock-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/number-of-smooth-descent-periods-of-a-stock-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2110-number-of-smooth-descent-periods-of-a-stock-medium.md",tags:[],version:"current",sidebarPosition:2110,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/"},sidebar:"tutorialSidebar",previous:{title:"2109 - Adding Spaces to a String (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/adding-spaces-to-a-string-medium"},next:{title:"2111 - Minimum Operations to Make the Array K-Increasing (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-operations-to-make-the-array-k-increasing-hard"}},l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"C++",id:"c",level:3},{value:"Approach 2: Math",id:"approach-2-math",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2110---number-of-smooth-descent-periods-of-a-stock-medium"},"2110 - Number of Smooth Descent Periods of a Stock (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"prices")," representing the daily price history of a stock, where ",(0,i.kt)("inlineCode",{parentName:"p"},"prices[i]")," is the stock price on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," day."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"smooth descent period")," of a stock consists of ",(0,i.kt)("strong",{parentName:"p"},"one or more contiguous")," days such that the price on each day is ",(0,i.kt)("strong",{parentName:"p"},"lower")," than the price on the ",(0,i.kt)("strong",{parentName:"p"},"preceding day")," by ",(0,i.kt)("strong",{parentName:"p"},"exactly")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". The first day of the period is exempted from this rule."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the number of ",(0,i.kt)("strong",{parentName:"em"},"smooth descent periods")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: prices = [3,2,1,4]\nOutput: 7\nExplanation: There are 7 smooth descent periods:\n[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]\nNote that a period with one day is a smooth descent period by the definition.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: prices = [8,6,7,7]\nOutput: 4\nExplanation: There are 4 smooth descent periods: [8], [6], [7], and [7]\nNote that [8,6] is not a smooth descent period as 8 - 6 \u2260 1.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: prices = [1]\nOutput: 1\nExplanation: There is 1 smooth descent period: [1]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= prices.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= prices[i] <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,i.kt)("p",null,"Let ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i]")," be the number of smooth descent periods ended at day ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),". First we can initialise ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i] = 1")," for each ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),". This is true because the minimum smooth descent period is 1 which is itself. Then we can iterate ",(0,i.kt)("inlineCode",{parentName:"p"},"prices")," and check if the difference between previous price and current price is exactly 1 or not. If so, we can contribute ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i - 1]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i]"),"."),(0,i.kt)("h3",{id:"c"},"C++"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long getDescentPeriods(vector<int>& prices) {\n        int n = prices.size();\n        long long ans = 0;\n        vector<int> dp(n, 1);\n        for (int i = 0; i < n; i++) {\n            if (i > 0 && prices[i - 1] - prices[i] == 1) {\n                dp[i] += dp[i - 1];\n            }\n            ans += dp[i];\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-math"},"Approach 2: Math"),(0,i.kt)("p",null,"For a non-increasing contiguous segement with length ",(0,i.kt)("inlineCode",{parentName:"p"},"l"),", it contributes ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 2 + 3 + ... + l = (l + 1) * l / 2")," subarrays."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long getDescentPeriods(vector<int>& prices) {\n        int n = prices.size();\n        long long ans = 0, i = 0;\n        while (i < n) {\n            long long l = 1;\n            i++;\n            while (i < n && prices[i - 1] - prices[i] == 1) i++, l++;\n            ans += (l + 1) * l / 2;\n        }\n        return ans;\n    }\n};\n")))}u.isMDXComponent=!0}}]);