"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6019],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return k}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,m=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(a),k=s,h=u["".concat(o,".").concat(k)]||u[k]||c[k]||m;return a?n.createElement(h,r(r({ref:t},i),{},{components:a})):n.createElement(h,r({ref:t},i))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var m=a.length,r=new Array(m);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var l=2;l<m;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99613:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var n=a(87462),s=a(63366),m=(a(67294),a(3905)),r=a(92194),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/"},l="2244 - Minimum Rounds to Complete All Tasks (Medium)",i={unversionedId:"2200-2299/minimum-rounds-to-complete-all-tasks-medium",id:"2200-2299/minimum-rounds-to-complete-all-tasks-medium",title:"2244 - Minimum Rounds to Complete All Tasks (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/",source:"@site/solutions/2200-2299/2244-minimum-rounds-to-complete-all-tasks-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-rounds-to-complete-all-tasks-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-rounds-to-complete-all-tasks-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2244-minimum-rounds-to-complete-all-tasks-medium.md",tags:[],version:"current",sidebarPosition:2244,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/"},sidebar:"tutorialSidebar",previous:{title:"2243 - Calculate Digit Sum of a String (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/calculate-digit-sum-of-a-string-easy"},next:{title:"2246 - Longest Path With Different Adjacent Characters (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/longest-path-with-different-adjacent-characters-hard"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2}],k={toc:u};function h(e){var t=e.components,a=(0,s.Z)(e,p);return(0,m.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2244---minimum-rounds-to-complete-all-tasks-medium"},"2244 - Minimum Rounds to Complete All Tasks (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/"},"https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given a ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"tasks"),", where ",(0,m.kt)("inlineCode",{parentName:"p"},"tasks[i]")," represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the ",(0,m.kt)("strong",{parentName:"p"},"same difficulty level"),"."),(0,m.kt)("p",null,"Return ",(0,m.kt)("em",{parentName:"p"},"the ",(0,m.kt)("strong",{parentName:"em"},"minimum")," rounds required to complete all the tasks, or")," ",(0,m.kt)("inlineCode",{parentName:"p"},"-1")," ",(0,m.kt)("em",{parentName:"p"},"if it is not possible to complete all the tasks.")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: tasks = [2,2,3,3,2,4,4,4,4,4]\nOutput: 4\nExplanation: To complete all the tasks, a possible plan is:\n- In the first round, you complete 3 tasks of difficulty level 2. \n- In the second round, you complete 2 tasks of difficulty level 3. \n- In the third round, you complete 3 tasks of difficulty level 4. \n- In the fourth round, you complete 2 tasks of difficulty level 4.  \nIt can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: tasks = [2,3,3]\nOutput: -1\nExplanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= tasks.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= tasks[i] <= 10^9"))),(0,m.kt)("h2",{id:"approach-1-math"},"Approach 1: Math"),(0,m.kt)("p",null,"Count the frequency of each level. If the frequency is ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),", then return ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),". Otherwise, we must complete them in some rounds. We first finish ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"3")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3")))))," tasks multiple times and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2")))))," tasks at most ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2")))))," times. Either way, we could finish it in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"q"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ceil(freq / 3)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/3"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," rounds."),(0,m.kt)(r.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumRounds(vector<int>& tasks) {\n        unordered_map<int, int> m;\n        int ans = 0;\n        for (auto x : tasks) m[x]++;\n        for (auto x : m) {\n            if (x.second == 1) return -1;\n            // ceil(a / b) = (a + b - 1) / b\n            ans += (x.second + 2) / 3;\n            // or\n            // ans += (x.second / 3) + ((x.second % 3) != 0);\n            // ans += ceil(x.second / 3.0);\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0},92194:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294);function s(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);