"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6722],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,p=a.parentName,l=i(a,["components","mdxType","originalType","parentName"]),c=o(t),d=s,N=c["".concat(p,".").concat(d)]||c[d]||h[d]||m;return t?n.createElement(N,r(r({ref:e},l),{},{components:t})):n.createElement(N,r({ref:e},l))}));function d(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i.mdxType="string"==typeof a?a:s,r[1]=i;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4816:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return h}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"},p="1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",o={unversionedId:"1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",id:"1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",source:"@site/solutions/1300-1399/1334-find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",permalink:"/leetcode-the-hard-way/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1300-1399/1334-find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:1334,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"},sidebar:"tutorialSidebar",previous:{title:"1328 - Break a Palindrome (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/break-a-palindrome-medium"},next:{title:"1337 - The K Weakest Rows in a Matrix (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy"}},l={},h=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Floyd Warshall Algorithm",id:"approach-1-floyd-warshall-algorithm",level:2},{value:"Approach 2: Dijkstra&#39;s Algorithm",id:"approach-2-dijkstras-algorithm",level:2}],c={toc:h};function d(a){var e=a.components,t=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"1334---find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"},"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"There are ",(0,m.kt)("inlineCode",{parentName:"p"},"n")," cities numbered from ",(0,m.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,m.kt)("inlineCode",{parentName:"p"},"n-1"),". Given the array ",(0,m.kt)("inlineCode",{parentName:"p"},"edges")," where ",(0,m.kt)("inlineCode",{parentName:"p"},"edges[i] = [fromi, toi, weighti]")," represents a bidirectional and weighted edge between cities ",(0,m.kt)("inlineCode",{parentName:"p"},"fromi")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"toi"),", and given the integer ",(0,m.kt)("inlineCode",{parentName:"p"},"distanceThreshold"),"."),(0,m.kt)("p",null,"Return the city with the smallest number of cities that are reachable through some path and whose distance is ",(0,m.kt)("strong",{parentName:"p"},"at most")," ",(0,m.kt)("inlineCode",{parentName:"p"},"distanceThreshold"),", If there are multiple such cities, return the city with the greatest number."),(0,m.kt)("p",null,"Notice that the distance of a path connecting cities ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"i"))," and ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"j"))," is equal to the sum of the edges' weights along that path."," "),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/16/find_the_city_01.png",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4\nOutput: 3\nExplanation: The figure above describes the graph. \nThe neighboring cities at a distanceThreshold = 4 for each city are:\nCity 0 -> [City 1, City 2] \nCity 1 -> [City 0, City 2, City 3] \nCity 2 -> [City 0, City 1, City 3] \nCity 3 -> [City 1, City 2] \nCities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/16/find_the_city_02.png",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2\nOutput: 0\nExplanation: The figure above describes the graph. \nThe neighboring cities at a distanceThreshold = 2 for each city are:\nCity 0 -> [City 1] \nCity 1 -> [City 0, City 4] \nCity 2 -> [City 3, City 4] \nCity 3 -> [City 2, City 4]\nCity 4 -> [City 1, City 2, City 3] \nThe city 0 has 1 neighboring city at a distanceThreshold = 2. \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"2 <= n <= 100")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= edges.length <= n * (n - 1) / 2")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"edges[i].length == 3")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"0 <= fromi < toi < n")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= weighti, distanceThreshold <= 10^4")),(0,m.kt)("li",{parentName:"ul"},"All pairs ",(0,m.kt)("inlineCode",{parentName:"li"},"(fromi, toi)")," are distinct.")),(0,m.kt)("h2",{id:"approach-1-floyd-warshall-algorithm"},"Approach 1: Floyd Warshall Algorithm"),(0,m.kt)("p",null,"Since ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is small, we can use Floyd Warshall Algorithm to calculate the distances between each node. Let ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dist[i][j]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the distance beween node ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"i")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and node ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),". Once we know all the distances, we can iterate each node ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"i")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),", and check each node ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," to see if the distance is less than / equal to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"distanceThreshold")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"res"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". If so, we count it and check the minimal value."," "),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {\n        // ----------- Floyd Warshall ---------------/\n        vector<vector<int>> dist(n, vector<int>(n, 1e9));\n        for (int i = 0; i < n; i++) dist[i][i] = 0;\n        for (auto x : edges) {\n            dist[x[0]][x[1]] = x[2];\n            dist[x[1]][x[0]] = x[2];\n        }\n        for (int k = 0; k < n; k++) {\n            for (int i = 0; i < n; i++) {\n                for (int j = 0; j < n; j++) {\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);\n                }\n            }\n        }\n        // ----------- Floyd Warshall ---------------/\n        int ans = 0, mi = n;\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // check each node to see \n            // if the distance is at most distanceThreshold\n            int cnt = 0;\n            for (int j = 0; j < n; j++) {\n                cnt += dist[i][j] <= distanceThreshold;\n            }\n            // use <= instead of <  \n            // because we need to return the city with the greatest number\n            if (cnt <= mi) {\n                mi = cnt;\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n")),(0,m.kt)("h2",{id:"approach-2-dijkstras-algorithm"},"Approach 2: Dijkstra's Algorithm"),(0,m.kt)("p",null,"We can perform Dijkstra's algorithm on each node to calculate the distances between that node and other nodes. Iterate them and check if the distance is at most ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"distanceThreshold")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"res"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". If so, update the minimum counter and the answer."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    template<typename T_pair, typename T_vector>\n        void dijkstra(T_pair &g, T_vector &dist, int start) {\n          priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n          dist[start] = 0;\n          pq.push({start, 0});\n          while (!pq.empty()) {\n            auto [u_node, u_cost] = pq.top(); pq.pop();\n            if (u_cost > dist[u_node]) continue;\n            for (auto [v_node, v_cost] : g[u_node]) {\n              if (dist[v_node] > dist[u_node] + v_cost) {\n                dist[v_node] = dist[u_node] + v_cost;\n                pq.push({v_node, dist[v_node]});\n              }\n            }\n          }\n        }\n\n    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {\n        int ans = 0, mi_cnt = 1e9;\n        vector<vector<pair<int, int>>> g(n);\n        for (auto x : edges) {\n            // x[0] -> x[1] with cost x[2]\n            g[x[0]].push_back({x[1], x[2]});\n            // x[1] -> x[0] with cost x[2]\n            g[x[1]].push_back({x[0], x[2]});\n        }\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // perform dijkstra\n            vector<int> dist(n, 1e9);\n            dijkstra(g, dist, i);\n            int cnt = 0;\n            // iterate each node\n            for (int j = 0; j < n; j++) {\n                // bypass the same node\n                if (i == j) continue;\n                // if reachable, count if the distance is at most distanceThreshold\n                cnt += dist[j] <= distanceThreshold;\n            }\n            // update mi_cnt and ans\n            if (cnt <= mi_cnt) mi_cnt = cnt, ans = i;\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);