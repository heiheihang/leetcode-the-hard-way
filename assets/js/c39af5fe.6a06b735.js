"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8833],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86382:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(8539),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",tags:["Hash Map"]},s="2351 - First Letter to Appear Twice (Easy)",c={unversionedId:"2300-2399/first-letter-to-appear-twice-easy",id:"2300-2399/first-letter-to-appear-twice-easy",title:"2351 - First Letter to Appear Twice (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",source:"@site/solutions/2300-2399/2351-first-letter-to-appear-twice-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/first-letter-to-appear-twice-easy",permalink:"/leetcode-the-hard-way/solutions/2300-2399/first-letter-to-appear-twice-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2300-2399/2351-first-letter-to-appear-twice-easy.md",tags:[{label:"Hash Map",permalink:"/leetcode-the-hard-way/solutions/tags/hash-map"}],version:"current",sidebarPosition:2351,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2331 - Evaluate Boolean Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/evaluate-boolean-binary-tree-easy"},next:{title:"2352 - Equal Row and Column Pairs (Medium)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/equal-row-and-column-pairs-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],d={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2351---first-letter-to-appear-twice-easy"},"2351 - First Letter to Appear Twice (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-letter-to-appear-twice"},"https://leetcode.com/problems/first-letter-to-appear-twice")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," consisting of lowercase English letters, return ",(0,o.kt)("em",{parentName:"p"},"the first letter to appear ",(0,o.kt)("strong",{parentName:"em"},"twice")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A letter ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," appears twice before another letter ",(0,o.kt)("inlineCode",{parentName:"li"},"b")," if the ",(0,o.kt)("strong",{parentName:"li"},"second")," occurrence of ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," is before the ",(0,o.kt)("strong",{parentName:"li"},"second")," occurrence of ",(0,o.kt)("inlineCode",{parentName:"li"},"b"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," will contain at least one letter that appears twice."," ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: s = \"abccbaacz\"\nOutput: \"c\"\nExplanation:\nThe letter 'a' appears on the indexes 0, 5 and 6.\nThe letter 'b' appears on the indexes 1 and 4.\nThe letter 'c' appears on the indexes 2, 3 and 7.\nThe letter 'z' appears on the index 8.\nThe letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: s = \"abcdd\"\nOutput: \"d\"\nExplanation:\nThe only letter that appears twice is 'd' so we return 'd'.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= s.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of lowercase English letters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," has at least one repeated letter.")),(0,o.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char repeatedCharacter(string s) {\n      // store the frequency of each character\n      // alternatively, we can use int cnt[26];\n      unordered_map<char, int> m;\n      // for each character, check the frequency\n      // if it appears twice, return that character\n      for (auto& c: s) if (++m[c] == 2) return c;\n      // return the last one\n      return s.back();\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);