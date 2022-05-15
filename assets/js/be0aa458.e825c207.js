"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5139],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/"},s="2147 - Number of Ways to Divide a Long Corridor (Hard)",d={unversionedId:"2100-2199/number-of-ways-to-divide-a-long-corridor-hard",id:"2100-2199/number-of-ways-to-divide-a-long-corridor-hard",title:"2147 - Number of Ways to Divide a Long Corridor (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/",source:"@site/solutions/2100-2199/2147-number-of-ways-to-divide-a-long-corridor-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/number-of-ways-to-divide-a-long-corridor-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/number-of-ways-to-divide-a-long-corridor-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2147-number-of-ways-to-divide-a-long-corridor-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:2147,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/"},sidebar:"tutorialSidebar",previous:{title:"2146 - K Highest Ranked Items Within a Price Range (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/k-highest-ranked-items-within-a-price-range-medium"},next:{title:"2148 - Count Elements With Strictly Smaller and Greater Elements (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-elements-with-strictly-smaller-and-greater-elements-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2},{value:"C++",id:"c",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2147---number-of-ways-to-divide-a-long-corridor-hard"},"2147 - Number of Ways to Divide a Long Corridor (Hard)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Along a long library corridor, there is a line of seats and decorative plants. You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," string ",(0,o.kt)("inlineCode",{parentName:"p"},"corridor")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," consisting of letters ",(0,o.kt)("inlineCode",{parentName:"p"},"'S'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"'P'")," where each ",(0,o.kt)("inlineCode",{parentName:"p"},"'S'")," represents a seat and each ",(0,o.kt)("inlineCode",{parentName:"p"},"'P'")," represents a plant."),(0,o.kt)("p",null,"One room divider has ",(0,o.kt)("strong",{parentName:"p"},"already")," been installed to the left of index ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", and ",(0,o.kt)("strong",{parentName:"p"},"another")," to the right of index ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1"),". Additional room dividers can be installed. For each position between indices ",(0,o.kt)("inlineCode",{parentName:"p"},"i - 1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," (",(0,o.kt)("inlineCode",{parentName:"p"},"1 <= i <= n - 1"),"), at most one divider can be installed."),(0,o.kt)("p",null,"Divide the corridor into non-overlapping sections, where each section has ",(0,o.kt)("strong",{parentName:"p"},"exactly two seats")," with any number of plants. There may be multiple ways to perform the division. Two ways are ",(0,o.kt)("strong",{parentName:"p"},"different")," if there is a position with a room divider installed in the first way but not in the second way."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the number of ways to divide the corridor"),". Since the answer may be very large, return it ",(0,o.kt)("strong",{parentName:"p"},"modulo")," ",(0,o.kt)("inlineCode",{parentName:"p"},"109 + 7"),". If there is no way, return ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/04/1.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: corridor = "SSPPSPS"\nOutput: 3\nExplanation: There are 3 different ways to divide the corridor.\nThe black bars in the above image indicate the two room dividers already installed.\nNote that in each of the ways, each section has exactly two seats.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/04/2.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: corridor = "PPSPSP"\nOutput: 1\nExplanation: There is only 1 way to divide the corridor, by not installing any additional dividers.\nInstalling any would create some section that does not have exactly two seats.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/12/3.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: corridor = "S"\nOutput: 0\nExplanation: There is no way to divide the corridor because there will always be a section that does not have exactly two seats.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == corridor.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"corridor[i]")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"'S'")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"'P'"),".")),(0,o.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,o.kt)("p",null,"Count the number of seats. If there are two seats already and there are plants after them, count the plants. If it reaches the third seat, that means we can divide the corridor between the second seat and the third seat, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"plants + 1")," ways. We update answer and reset the counters. At the end, we need to check if the seat counter is 2 as we need 2 seats in the last block."),(0,o.kt)("h3",{id:"c"},"C++"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int numberOfWays(string corridor) {\n        long long M = 1e9 + 7, ans = 1, seats = 0, plants = 0;\n        for (auto x : corridor) {\n            if (x == 'S') {\n                if (seats == 2) {\n                    ans = ans * (plants + 1) % M;\n                    seats = plants = 0;\n                }\n                seats++;\n            } else if (seats == 2) {\n                plants++;\n            }\n        }\n        return seats == 2 ? ans : 0;\n    }\n};\n")))}m.isMDXComponent=!0}}]);