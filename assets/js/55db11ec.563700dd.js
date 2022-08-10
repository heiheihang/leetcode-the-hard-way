"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3429],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=o(a),u=r,d=h["".concat(i,".").concat(u)]||h[u]||c[u]||s;return a?n.createElement(d,m(m({ref:t},l),{},{components:a})):n.createElement(d,m({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var o=2;o<s;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},40866:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},suggestedProblems:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),m=a(78735),p=a(11182),i=["components"],o={title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","dijkstra","algorithm"]},l=void 0,c={unversionedId:"graph-theory/dijkstra",id:"graph-theory/dijkstra",title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",source:"@site/tutorials/graph-theory/dijkstra.md",sourceDirName:"graph-theory",slug:"/graph-theory/dijkstra",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/dijkstra",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/graph-theory/dijkstra.md",tags:[],version:"current",frontMatter:{title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","dijkstra","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Depth First Search (DFS)",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/depth-first-search"},next:{title:"Disjoint Set Union (DSU)",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union"}},h={},u=[{value:"Overview",id:"overview",level:2}],d=[{problemName:"0743 - Network Delay Time",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/network-delay-time/",solutionLink:"../../solutions/0700-0799/network-delay-time-medium"},{problemName:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",solutionLink:"../../solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"}],N={toc:u,suggestedProblems:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m.Z,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph. It can only be used when the graphs have non-negative weights for all edges."),(0,s.kt)("p",null,"Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dist[u]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the distance / cost / weight to reach node ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"u")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"))))),". Initially, we use a priority queue to maintain the pair ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p.first")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"rs"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," is the node and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p.second")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"seco"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," is the cost. We set the distance from source to source is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," cost and push the starting point to the priority queue."),(0,s.kt)("p",null,"The first run, the vertex is the source node. We remove it and check its neighbors. If the distance to the neighbor is greater than the current distance plus the cost, then it means a shorter path is found. Hence, we update it and push it to the priority queue for further process."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_pair, typename T_vector>\nvoid dijkstra(T_pair &g, T_vector &dist, int start) {\n  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n  dist[start] = 0;\n  pq.push({start, 0});\n  while (!pq.empty()) {\n    auto [u_node, u_cost] = pq.top(); pq.pop();\n    if (u_cost > dist[u_node]) continue;\n    for (auto [v_node, v_cost] : g[u_node]) {\n      if (dist[v_node] > dist[u_node] + v_cost) {\n        dist[v_node] = dist[u_node] + v_cost;\n        pq.push({v_node, dist[v_node]});\n      }\n    }\n  }\n}\n")),(0,s.kt)(p.Z,{title:"Suggested Problems",data:d,mdxType:"Table"}))}k.isMDXComponent=!0},11182:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294);function r(e){var t=e.names;if(!t)return null;var a=t.split(",");return n.createElement("div",{className:"tag-wrapper"},a.map((function(e,t){return n.createElement("span",{key:t,className:"topic-tag"},e)})))}function s(e){var t=e.title,a=e.collectionLink,s=e.isSorted,m=void 0===s||s,p=e.data,i=p.some((function(e){return e.tags})),o={Easy:0,Medium:1,Hard:2},l=(m?p.sort((function(e,t){return o[e.difficulty]-o[t.difficulty]})):p).map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",null,n.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),n.createElement("td",null,e.difficulty),n.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&n.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&n.createElement("span",null,"N/A")),i&&n.createElement("td",null,n.createElement(r,{names:e.tags})))}));return n.createElement(n.Fragment,null,n.createElement("h3",null,t),a&&n.createElement("h4",null,"Start Practicing: ",n.createElement("a",{href:a,target:"_blank"},a)),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Problem Name"),n.createElement("th",null,"Difficulty"),n.createElement("th",null,"Solution Link"),i&&n.createElement("th",null,"Topic"))),n.createElement("tbody",null,l)))}},78735:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.names.split(",");return n.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);