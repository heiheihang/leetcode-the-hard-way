"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[699],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},problems:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=n(11182),a=["components"],c={title:"Heap (Priority Queue)",description:"Collections of Heap (Priority Queue) Problems",hide_table_of_contents:!0,keywords:["leetcode","collection","Heap","Priority Queue"]},u=void 0,s={unversionedId:"heap",id:"heap",title:"Heap (Priority Queue)",description:"Collections of Heap (Priority Queue) Problems",source:"@site/collections/heap.md",sourceDirName:".",slug:"/heap",permalink:"/leetcode-the-hard-way/collections/heap",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/collections/heap.md",tags:[],version:"current",frontMatter:{title:"Heap (Priority Queue)",description:"Collections of Heap (Priority Queue) Problems",hide_table_of_contents:!0,keywords:["leetcode","collection","Heap","Priority Queue"]},sidebar:"tutorialSidebar",previous:{title:"Dynamic Programming",permalink:"/leetcode-the-hard-way/collections/dynamic-programming"}},m={},p=[],d=[{problemName:"1046 - Last Stone Weight",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/last-stone-weight/",solutionLink:""},{problemName:"1337 - The K Weakest Rows in a Matrix",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",solutionLink:"../solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy"},{problemName:"0703 - Kth Largest Element in a Stream",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",solutionLink:"../solutions/0700-0799/kth-largest-element-in-a-stream-easy"},{problemName:"0347 - Top K Frequent Elements",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/top-k-frequent-elements/",solutionLink:"../solutions/0300-0399/top-k-frequent-elements-medium"},{problemName:"0378 - Kth Smallest Element in a Sorted Matrix",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",solutionLink:""},{problemName:"0215 - Kth Largest Element in an Array",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-an-array/",solutionLink:"../solutions/0200-0299/kth-largest-element-in-an-array-medium"},{problemName:"0973 - K Closest Points to Origin",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/k-closest-points-to-origin/",solutionLink:"../solutions/0900-0999/k-closest-points-to-origin-medium"},{problemName:"1642 - Furthest Building You Can Reach",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/furthest-building-you-can-reach/",solutionLink:""},{problemName:"0295 - Find Median from Data Stream",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/find-median-from-data-stream/",solutionLink:""},{problemName:"1167 - Minimum Cost to Connect Sticks",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/minimum-cost-to-connect-sticks/",solutionLink:""},{problemName:"0253 - Meeting Rooms II",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/meeting-rooms-ii/",solutionLink:""}],f={toc:p,problems:d};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"",data:d,collectionLink:"https://leetcode.com/list/ee1sb8l6",mdxType:"Table"}))}y.isMDXComponent=!0},11182:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function o(e){var t=e.names;if(!t)return null;var n=t.split(",");return r.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return r.createElement("span",{key:t,className:"topic-tag"},e)})))}function i(e){var t=e.title,n=e.collectionLink,i=e.isSorted,l=void 0===i||i,a=e.data,c=a.some((function(e){return e.tags})),u={Easy:0,Medium:1,Hard:2},s=(l?a.sort((function(e,t){return u[e.difficulty]-u[t.difficulty]})):a).map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),r.createElement("td",null,e.difficulty),r.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&r.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&r.createElement("span",null,"N/A")),c&&r.createElement("td",null,r.createElement(o,{names:e.tags})))}));return r.createElement(r.Fragment,null,r.createElement("h3",null,t),n&&r.createElement("h4",null,"Start Practicing: ",r.createElement("a",{href:n,target:"_blank"},n)),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Problem Name"),r.createElement("th",null,"Difficulty"),r.createElement("th",null,"Solution Link"),c&&r.createElement("th",null,"Topic"))),r.createElement("tbody",null,s)))}}}]);