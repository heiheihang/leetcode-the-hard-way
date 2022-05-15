"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6077],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7103:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={description:"Author: @TBC | https://leetcode.com/problems/symmetric-tree/"},p="0101 - Symmetric Tree (Easy)",c={unversionedId:"0100-0199/symmetric-tree-easy",id:"0100-0199/symmetric-tree-easy",title:"0101 - Symmetric Tree (Easy)",description:"Author: @TBC | https://leetcode.com/problems/symmetric-tree/",source:"@site/solutions/0100-0199/0101-symmetric-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/symmetric-tree-easy",permalink:"/leetcode-the-hard-way/solutions/0100-0199/symmetric-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0101-symmetric-tree-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:101,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/symmetric-tree/"},sidebar:"tutorialSidebar",previous:{title:"0100 - 0199",permalink:"/leetcode-the-hard-way/solutions/0100-0199/"},next:{title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium"}},s={},u=[{value:"Problem Statement ",id:"problem-statement-",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0101---symmetric-tree-easy"},"0101 - Symmetric Tree (Easy)"),(0,a.kt)("h2",{id:"problem-statement-"},"Problem Statement"," "),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, ",(0,a.kt)("em",{parentName:"p"},"check whether it is a mirror of itself")," (i.e., symmetric around its center)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,3,4,4,3]\nOutput: true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,null,3,null,3]\nOutput: false\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Could you solve it both recursively and iteratively?"),(0,a.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);