"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1133],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(8539),["components"]),l={description:"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/"},c="0465 - Optimal Account Balancing (Hard)",p={unversionedId:"0400-0499/optimal-account-balancing-hard",id:"0400-0499/optimal-account-balancing-hard",title:"0465 - Optimal Account Balancing (Hard)",description:"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/",source:"@site/solutions/0400-0499/0465-optimal-account-balancing-hard.md",sourceDirName:"0400-0499",slug:"/0400-0499/optimal-account-balancing-hard",permalink:"/leetcode-the-hard-way/solutions/0400-0499/optimal-account-balancing-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0400-0499/0465-optimal-account-balancing-hard.md",tags:[],version:"current",sidebarPosition:465,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/"},sidebar:"tutorialSidebar",previous:{title:"0452 - Minimum Number of Arrows to Burst Balloons (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/minimum-number-of-arrows-to-burst-balloons-medium"},next:{title:"0469 - Next Greater Element I (Easy)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/next-greater-element-i-easy"}},u={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0465---optimal-account-balancing-hard"},"0465 - Optimal Account Balancing (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/optimal-account-balancing/"},"https://leetcode.com/problems/optimal-account-balancing/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an array of transactions ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions[i] = [fromi, toi, amounti]")," indicates that the person with ",(0,o.kt)("inlineCode",{parentName:"p"},"ID = fromi")," gave ",(0,o.kt)("inlineCode",{parentName:"p"},"amounti $")," to the person with ",(0,o.kt)("inlineCode",{parentName:"p"},"ID = toi"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the minimum number of transactions required to settle the debt"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: transactions = [[0,1,10],[2,0,5]]\nOutput: 2\nExplanation:\nPerson #0 gave person #1 $10.\nPerson #2 gave person #0 $5.\nTwo transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]\nOutput: 1\nExplanation:\nPerson #0 gave person #1 $10.\nPerson #1 gave person #0 $1.\nPerson #1 gave person #2 $5.\nPerson #2 gave person #0 $5.\nTherefore, person #1 only need to give person #0 $4, and all debt is settled.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= transactions.length <= 8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transactions[i].length == 3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= fromi, toi < 12")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fromi != toi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= amounti <= 100"))),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);