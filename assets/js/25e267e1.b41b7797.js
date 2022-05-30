"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57046:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={description:"Author: @TBC | https://leetcode.com/problems/contains-duplicate-ii/"},l="0219 - Contains Duplicate II (Easy)",u={unversionedId:"0200-0299/contains-duplicate-ii-easy",id:"0200-0299/contains-duplicate-ii-easy",title:"0219 - Contains Duplicate II (Easy)",description:"Author: @TBC | https://leetcode.com/problems/contains-duplicate-ii/",source:"@site/solutions/0200-0299/0219-contains-duplicate-ii-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/contains-duplicate-ii-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/contains-duplicate-ii-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0219-contains-duplicate-ii-easy.md",tags:[],version:"current",sidebarPosition:219,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/contains-duplicate-ii/"},sidebar:"tutorialSidebar",previous:{title:"0217 - Contains Duplicate (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/contains-duplicate-easy"},next:{title:"0225 - Implement Stack using Queues (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/implement-stack-using-queues-easy"}},c={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0219---contains-duplicate-ii-easy"},"0219 - Contains Duplicate II (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if there are two ",(0,i.kt)("strong",{parentName:"p"},"distinct indices")," ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," in the array such that ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i] == nums[j]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"abs(i - j) <= k"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1], k = 3\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,0,1,1], k = 1\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1,2,3], k = 2\nOutput: false\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= k <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);