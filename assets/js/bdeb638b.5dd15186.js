"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3953],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,h=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},98075:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(8539),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",tags:["Hash Map"]},u="2352 - Equal Row and Column Pairs (Medium)",m={unversionedId:"2300-2399/equal-row-and-column-pairs-medium",id:"2300-2399/equal-row-and-column-pairs-medium",title:"2352 - Equal Row and Column Pairs (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",source:"@site/solutions/2300-2399/2352-equal-row-and-column-pairs-medium.md",sourceDirName:"2300-2399",slug:"/2300-2399/equal-row-and-column-pairs-medium",permalink:"/leetcode-the-hard-way/solutions/2300-2399/equal-row-and-column-pairs-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2300-2399/2352-equal-row-and-column-pairs-medium.md",tags:[{label:"Hash Map",permalink:"/leetcode-the-hard-way/solutions/tags/hash-map"}],version:"current",sidebarPosition:2352,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2351 - First Letter to Appear Twice (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/first-letter-to-appear-twice-easy"},next:{title:"2354 - Number of Excellent Pairs (Hard)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/number-of-excellent-pairs-hard"}},c={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],d={toc:s};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2352---equal-row-and-column-pairs-medium"},"2352 - Equal Row and Column Pairs (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/equal-row-and-column-pairs"},"https://leetcode.com/problems/equal-row-and-column-pairs")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," ",(0,o.kt)("inlineCode",{parentName:"p"},"n x n")," integer matrix ",(0,o.kt)("inlineCode",{parentName:"p"},"grid"),", ",(0,o.kt)("em",{parentName:"p"},"return the number of pairs")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(Ri, Cj)")," ",(0,o.kt)("em",{parentName:"p"},"such that row")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Ri")," ",(0,o.kt)("em",{parentName:"p"},"and column")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Cj")," ",(0,o.kt)("em",{parentName:"p"},"are equal"),"."),(0,o.kt)("p",null,"A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: grid = [[3,2,1],[1,7,6],[2,7,7]]\nOutput: 1\nExplanation: There is 1 equal row and column pair:\n- (Row 2, Column 1): [2,7,7]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]\nOutput: 3\nExplanation: There are 3 equal row and column pairs:\n- (Row 0, Column 0): [3,1,2,2]\n- (Row 2, Column 2): [2,4,2,2]\n- (Row 3, Column 2): [2,4,2,2]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == grid.length == grid[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 200")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= grid[i][j] <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int equalPairs(vector<vector<int>>& g) {\n        int n = g.size(), ans = 0;\n        // count the frequency of a vector\n        map<vector<int>, int> m;\n        // check all rows\n        for (int i = 0; i < n; i++) {\n            vector<int> tmp;\n            for (int j = 0; j < n; j++) tmp.push_back(g[i][j]);\n            // in example 1, we got {3,2,1}, {1,7,6}, {2,7,7}\n            m[tmp] += 1;\n        }\n        // check all cols\n        for (int j = 0; j < n; j++) {\n            vector<int> tmp;\n            for (int i = 0; i < n; i++) tmp.push_back(g[i][j]);\n            // in example 1, we got {3,1,2}, {2,7,7}, {1,6,7}\n            // since {2,7,7} has frequency of 1, we add it to answer \n            // otherwise, it would be adding 0\n            ans += m[tmp];\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);