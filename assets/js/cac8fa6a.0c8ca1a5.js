"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9880],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=s(t),f=a,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return t?r.createElement(d,m(m({ref:n},l),{},{components:t})):r.createElement(d,m({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,m=new Array(i);m[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,m[1]=o;for(var s=2;s<i;s++)m[s]=t[s];return r.createElement.apply(null,m)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},63114:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),m=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-average-difference/"},p="2256 - Minimum Average Difference (Medium)",s={unversionedId:"2200-2299/minimum-average-difference-medium",id:"2200-2299/minimum-average-difference-medium",title:"2256 - Minimum Average Difference (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-average-difference/",source:"@site/solutions/2200-2299/2256-minimum-average-difference-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-average-difference-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-average-difference-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2256-minimum-average-difference-medium.md",tags:[],version:"current",sidebarPosition:2256,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-average-difference/"},sidebar:"tutorialSidebar",previous:{title:"2255 - Count Prefixes of a Given String (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-prefixes-of-a-given-string-easy"},next:{title:"2259 - Remove Digit From Number to Maximize Result (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/remove-digit-from-number-to-maximize-result-easy"}},l={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum",id:"approach-1-prefix-sum",level:2}],c={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2256---minimum-average-difference-medium"},"2256 - Minimum Average Difference (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"average difference")," of the index ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is the ",(0,i.kt)("strong",{parentName:"p"},"absolute")," ",(0,i.kt)("strong",{parentName:"p"},"difference")," between the average of the ",(0,i.kt)("strong",{parentName:"p"},"first")," ",(0,i.kt)("inlineCode",{parentName:"p"},"i + 1")," elements of ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and the average of the ",(0,i.kt)("strong",{parentName:"p"},"last")," ",(0,i.kt)("inlineCode",{parentName:"p"},"n - i - 1")," elements. Both averages should be ",(0,i.kt)("strong",{parentName:"p"},"rounded down")," to the nearest integer."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the index with the ",(0,i.kt)("strong",{parentName:"em"},"minimum average difference")),". If there are multiple such indices, return the ",(0,i.kt)("strong",{parentName:"p"},"smallest")," one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"absolute difference")," of two numbers is the absolute value of their difference."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"average")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," elements is the ",(0,i.kt)("strong",{parentName:"li"},"sum")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," elements divided (",(0,i.kt)("strong",{parentName:"li"},"integer division"),") by ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,i.kt)("li",{parentName:"ul"},"The average of ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," elements is considered to be ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,5,3,9,5,3]\nOutput: 3\nExplanation:\n- The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.\n- The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.\n- The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.\n- The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.\n- The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.\n- The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.\nThe average difference of index 3 is the minimum average difference so return 3.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: 0\nExplanation:\nThe only index is 0 so return 0.\nThe average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-prefix-sum"},"Approach 1: Prefix Sum"),(0,i.kt)("p",null,"For the example we can see that we need a range of sum of the input. Hence, we can calculate the prefix sum first. Then for each index, we split ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mi",{parentName:"mrow"},"u"),(0,i.kt)("mi",{parentName:"mrow"},"m"),(0,i.kt)("mi",{parentName:"mrow"},"s")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," into two parts and calculate the average difference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumAverageDifference(vector<int>& nums) {\n        int ans = 0, n = nums.size(), mi = INT_MAX;\n        // calculate prefix sum\n        vector<long long> prev(n + 1);\n        prev[0] = nums[0];\n        for (int i = 1; i < n; i++) prev[i] = prev[i - 1] + nums[i];\n        for (int i = 0; i < n; i++) {\n            // split into two parts\n            long long k = abs((prev[i] / (i + 1)) - \n                ((prev[n - 1] - prev[i]) / max(n - i - 1, 1)));\n            // track the min avg difference\n            if (k < mi) {\n                mi = k;\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0}}]);