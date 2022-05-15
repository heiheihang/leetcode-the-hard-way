"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9129],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,f=d["".concat(u,".").concat(c)]||d[c]||s[c]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={description:"Author: @TBC | https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/"},u="2216 - Minimum Deletions to Make Array Beautiful (Medium)",m={unversionedId:"2100-2199/minimum-deletions-to-make-array-beautiful-medium",id:"2100-2199/minimum-deletions-to-make-array-beautiful-medium",title:"2216 - Minimum Deletions to Make Array Beautiful (Medium)",description:"Author: @TBC | https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/",source:"@site/solutions/2100-2199/2216-minimum-deletions-to-make-array-beautiful-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-deletions-to-make-array-beautiful-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-deletions-to-make-array-beautiful-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2216-minimum-deletions-to-make-array-beautiful-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:2216,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/"},sidebar:"tutorialSidebar",previous:{title:"2215 - Find the Difference of Two Arrays (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-the-difference-of-two-arrays-easy"},next:{title:"2217 - Find Palindrome With Fixed Length (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-palindrome-with-fixed-length-medium"}},p={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2216---minimum-deletions-to-make-array-beautiful-medium"},"2216 - Minimum Deletions to Make Array Beautiful (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),". The array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," is ",(0,i.kt)("strong",{parentName:"p"},"beautiful")," if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums.length")," is even."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums[i] != nums[i + 1]")," for all ",(0,i.kt)("inlineCode",{parentName:"li"},"i % 2 == 0"),".")),(0,i.kt)("p",null,"Note that an empty array is considered beautiful."),(0,i.kt)("p",null,"You can delete any number of elements from ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),". When you delete an element, all the elements to the right of the deleted element will be ",(0,i.kt)("strong",{parentName:"p"},"shifted one unit to the left")," to fill the gap created and all the elements to the left of the deleted element will remain ",(0,i.kt)("strong",{parentName:"p"},"unchanged"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"minimum")," number of elements to delete from")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,i.kt)("em",{parentName:"p"},"to make it beautiful.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,1,2,3,5]\nOutput: 1\nExplanation: You can delete either nums[0] or nums[1] to make nums = [1,2,3,5] which is beautiful. It can be proven you need at least 1 deletion to make nums beautiful.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,1,2,2,3,3]\nOutput: 2\nExplanation: You can delete nums[0] and nums[5] to make nums = [1,2,2,3] which is beautiful. It can be proven you need at least 2 deletions to make nums beautiful.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}c.isMDXComponent=!0}}]);