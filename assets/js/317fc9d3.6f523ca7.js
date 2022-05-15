"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5887],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={description:"Author: @TBC | https://leetcode.com/problems/clone-graph/"},p="0133 - Clone Graph (Medium)",s={unversionedId:"0100-0199/clone-graph-medium",id:"0100-0199/clone-graph-medium",title:"0133 - Clone Graph (Medium)",description:"Author: @TBC | https://leetcode.com/problems/clone-graph/",source:"@site/solutions/0100-0199/0133-clone-graph-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/clone-graph-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/clone-graph-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0133-clone-graph-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:133,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/clone-graph/"},sidebar:"tutorialSidebar",previous:{title:"0127 - Word Ladder (Hard)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/word-ladder-hard"},next:{title:"0136 - Single Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/single-number-easy"}},d={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0133---clone-graph-medium"},"0133 - Clone Graph (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a reference of a node in a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph"},(0,o.kt)("strong",{parentName:"a"},"connected"))," undirected graph."),(0,o.kt)("p",null,"Return a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy"},(0,o.kt)("strong",{parentName:"a"},"deep copy"))," (clone) of the graph."),(0,o.kt)("p",null,"Each node in the graph contains a value (",(0,o.kt)("inlineCode",{parentName:"p"},"int"),") and a list (",(0,o.kt)("inlineCode",{parentName:"p"},"List[Node]"),") of its neighbors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class Node {\n    public int val;\n    public List<Node> neighbors;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Test case format:")),(0,o.kt)("p",null,"For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with ",(0,o.kt)("inlineCode",{parentName:"p"},"val == 1"),", the second node with ",(0,o.kt)("inlineCode",{parentName:"p"},"val == 2"),", and so on. The graph is represented in the test case using an adjacency list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"An adjacency list")," is a collection of unordered ",(0,o.kt)("strong",{parentName:"p"},"lists")," used to represent a finite graph. Each list describes the set of neighbors of a node in the graph."),(0,o.kt)("p",null,"The given node will always be the first node with ",(0,o.kt)("inlineCode",{parentName:"p"},"val = 1"),". You must return the ",(0,o.kt)("strong",{parentName:"p"},"copy of the given node")," as a reference to the cloned graph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: adjList = [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]\nExplanation: There are 4 nodes in the graph.\n1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/07/graph.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: adjList = [[]]\nOutput: [[]]\nExplanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: adjList = []\nOutput: []\nExplanation: This an empty graph, it does not have any nodes.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the graph is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 100]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= Node.val <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node.val")," is unique for each node."),(0,o.kt)("li",{parentName:"ul"},"There are no repeated edges and no self-loops in the graph."),(0,o.kt)("li",{parentName:"ul"},"The Graph is connected and all nodes can be visited starting from the given node.")),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}h.isMDXComponent=!0}}]);