"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[529],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/optimize-water-distribution-in-a-village/"},l="1168 - Optimize Water Distribution in a Village (Hard)",p={unversionedId:"1100-1199/optimize-water-distribution-in-a-village-hard",id:"1100-1199/optimize-water-distribution-in-a-village-hard",title:"1168 - Optimize Water Distribution in a Village (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/optimize-water-distribution-in-a-village/",source:"@site/solutions/1100-1199/1168-optimize-water-distribution-in-a-village-hard.md",sourceDirName:"1100-1199",slug:"/1100-1199/optimize-water-distribution-in-a-village-hard",permalink:"/leetcode-the-hard-way/solutions/1100-1199/optimize-water-distribution-in-a-village-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1100-1199/1168-optimize-water-distribution-in-a-village-hard.md",tags:[],version:"current",sidebarPosition:1168,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/optimize-water-distribution-in-a-village/"},sidebar:"tutorialSidebar",previous:{title:"1162 -  As Far from Land as Possible (Medium)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/as-far-from-land-as-possible-medium"},next:{title:"1200 - 1299",permalink:"/leetcode-the-hard-way/solutions/category/1200---1299"}},m={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: <strong>Kruskal&#39;s Algorithm</strong>",id:"approach-1-kruskals-algorithm",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1168---optimize-water-distribution-in-a-village-hard"},"1168 - Optimize Water Distribution in a Village (Hard)"),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," houses in a village. We want to supply water for all the houses by building wells and laying pipes."),(0,r.kt)("p",null,"For each house ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", we can either build a well inside it directly with cost ",(0,r.kt)("inlineCode",{parentName:"p"},"wells[i - 1]")," (note the ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," due to ",(0,r.kt)("strong",{parentName:"p"},"0-indexing"),"), or pipe in water from another well to it. The costs to lay pipes between houses are given by the array ",(0,r.kt)("inlineCode",{parentName:"p"},"pipes")," where each ",(0,r.kt)("inlineCode",{parentName:"p"},"pipes[j] = [house1j, house2j, costj]")," represents the cost to connect ",(0,r.kt)("inlineCode",{parentName:"p"},"house1j")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"house2j")," together using a pipe. Connections are bidirectional, and there could be multiple valid connections between the same two houses with different costs."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the minimum total cost to supply water to all houses"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/05/22/1359_ex1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]\nOutput: 3\nExplanation: The image shows the costs of connecting houses using pipes.\nThe best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 2, wells = [1,1], pipes = [[1,2,1],[1,2,2]]\nOutput: 2\nExplanation: We can supply water with cost two using one of the three options:\nOption 1:\n  - Build a well inside house 1 with cost 1.\n  - Build a well inside house 2 with cost 1.\nThe total cost will be 2.\nOption 2:\n  - Build a well inside house 1 with cost 1.\n  - Connect house 2 with house 1 with cost 1.\nThe total cost will be 2.\nOption 3:\n  - Build a well inside house 2 with cost 1.\n  - Connect house 1 with house 2 with cost 1.\nThe total cost will be 2.\nNote that we can connect houses 1 and 2 with cost 1 or with cost 2 but we will always choose the cheapest option. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= n <= 104")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wells.length == n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= wells[i] <= 105")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= pipes.length <= 104")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pipes[j].length == 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= house1j, house2j <= n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= costj <= 105")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"house1j != house2j"))),(0,r.kt)("h2",{id:"approach-1-kruskals-algorithm"},"Approach 1: ",(0,r.kt)("strong",{parentName:"h2"},"Kruskal's Algorithm")),(0,r.kt)("p",null,"If we add a new house, says house 0, and connect it to each houses with weight ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"wells[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"ll"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Then this problem is actually same as finding Minimum Spanning Tree. Hence, we can use Kruskal's Algorithm with DSU to solve it."),(0,r.kt)("p",null,"In order to get the MST, we sort the edges based on the weights in an increasing order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    int minCostToSupplyWater(int n, vector<int>& wells, vector<vector<int>>& pipes) {\n        vector<array<int, 3>> edges;\n        for (int i = 0; i < wells.size(); i++) edges.push_back({wells[i], 0, i + 1});\n        for (auto x : pipes) edges.push_back({x[2], x[0], x[1]});\n        sort(edges.begin(), edges.end());\n        dsu d(n + 1);\n        int ans = 0;\n        for (auto x : edges) {\n            if (d.unite(x[1], x[2])) {\n                ans += x[0];\n            }\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);