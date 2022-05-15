"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={description:"Author: @TBC | https://leetcode.com/problems/minimize-deviation-in-array/"},p="1675 - Minimize Deviation in Array (Hard)",m={unversionedId:"1600-1699/minimize-deviation-in-array-hard",id:"1600-1699/minimize-deviation-in-array-hard",title:"1675 - Minimize Deviation in Array (Hard)",description:"Author: @TBC | https://leetcode.com/problems/minimize-deviation-in-array/",source:"@site/solutions/1600-1699/1675-minimize-deviation-in-array-hard.md",sourceDirName:"1600-1699",slug:"/1600-1699/minimize-deviation-in-array-hard",permalink:"/leetcode-the-hard-way/solutions/1600-1699/minimize-deviation-in-array-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1600-1699/1675-minimize-deviation-in-array-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:1675,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/minimize-deviation-in-array/"},sidebar:"tutorialSidebar",previous:{title:"1672 - Richest Customer Wealth (Easy)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/richest-customer-wealth-easy"},next:{title:"1679 - Max Number of K-Sum Pairs (Medium)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/max-number-of-k-sum-pairs-medium"}},u={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1675---minimize-deviation-in-array-hard"},"1675 - Minimize Deviation in Array (Hard)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," positive integers."),(0,i.kt)("p",null,"You can perform two types of operations on any element of the array any number of times:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the element is ",(0,i.kt)("strong",{parentName:"li"},"even"),", ",(0,i.kt)("strong",{parentName:"li"},"divide")," it by ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, if the array is ",(0,i.kt)("inlineCode",{parentName:"li"},"[1,2,3,4]"),", then you can do this operation on the last element, and the array will be ",(0,i.kt)("inlineCode",{parentName:"li"},"[1,2,3,2].")))),(0,i.kt)("li",{parentName:"ul"},"If the element is ",(0,i.kt)("strong",{parentName:"li"},"odd"),", ",(0,i.kt)("strong",{parentName:"li"},"multiply")," it by ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, if the array is ",(0,i.kt)("inlineCode",{parentName:"li"},"[1,2,3,4]"),", then you can do this operation on the first element, and the array will be ",(0,i.kt)("inlineCode",{parentName:"li"},"[2,2,3,4]."))))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"deviation")," of the array is the ",(0,i.kt)("strong",{parentName:"p"},"maximum difference")," between any two elements in the array."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"minimum deviation")," the array can have after performing some number of operations.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4]\nOutput: 1\nExplanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [4,1,5,20,3]\nOutput: 3\nExplanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,10,8]\nOutput: 3\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= n <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^9"))),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);