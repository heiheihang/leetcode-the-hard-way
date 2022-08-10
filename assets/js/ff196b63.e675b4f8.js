"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4399],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(a),N=r,k=u["".concat(o,".").concat(N)]||u[N]||c[N]||s;return a?n.createElement(k,m(m({ref:t},l),{},{components:a})):n.createElement(k,m({ref:t},l))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71647:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},suggestedProblems:function(){return k},toc:function(){return N}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),m=a(78735),p=a(11182),o=["components"],i={title:"Sorting",description:"Sorting refers to rearranging elements in a specific order.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sorting","algorithm"]},l=void 0,c={unversionedId:"basic-topics/sorting",id:"basic-topics/sorting",title:"Sorting",description:"Sorting refers to rearranging elements in a specific order.",source:"@site/tutorials/basic-topics/sorting.md",sourceDirName:"basic-topics",slug:"/basic-topics/sorting",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sorting",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/sorting.md",tags:[],version:"current",frontMatter:{title:"Sorting",description:"Sorting refers to rearranging elements in a specific order.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sorting","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Sliding Window",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sliding-window"},next:{title:"Time Complexity",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/time-complexity"}},u={},N=[{value:"Overview",id:"overview",level:2}],k=[{problemName:"0921 - Sort an Array",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/distinct-numbers-in-each-subarray/",solutionLink:"../../solutions/0900-0999/sort-an-array-medium"}],h={toc:N,suggestedProblems:k};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m.Z,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Sorting refers to rearranging elements in a specific order. The most common order is either ascending or descending. There are a lot of algorithms to sort the array with different time complexity."),(0,s.kt)("p",null,"In C++, if define a static array of N elements of type int such as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a[4]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," you can sort like as below where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," is the number of elements to be sorted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a, a + N);\n")),(0,s.kt)("p",null,"If you want to sort for a specific range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),",  then use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a + x, a + y);\n")),(0,s.kt)("p",null,"For dynamic array, we do in such way"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end());\n")),(0,s.kt)("p",null,"If you want to sort for a specific range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),",  then use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin() + x, a.begin() + y);\n")),(0,s.kt)("p",null,"To sort in an decreasing order,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end(), greater<int>());\n")),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"sort()")," sorts the elements in the range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," into ascending order. If the container includes pairs, tuples or array\\<int, N>, it first sorts the first element, then the second element if there is a tie and so on. For example, the following comparator is same as ",(0,s.kt)("inlineCode",{parentName:"p"},"sort(a.begin(), a.end());"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end(), [&](const array<int, 3>& x, const array<int, 3>& y) {\n    return (\n        (x[0] < y[0]) || \n        (x[0] == y[0] && x[1] < y[1]) ||\n        (x[0] == y[0] && x[1] == y[1] || x[2] < y[2])\n    );\n});\n")),(0,s.kt)(p.Z,{title:"Suggested Problems",data:k,mdxType:"Table"}))}d.isMDXComponent=!0},11182:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294);function r(e){var t=e.names;if(!t)return null;var a=t.split(",");return n.createElement("div",{className:"tag-wrapper"},a.map((function(e,t){return n.createElement("span",{key:t,className:"topic-tag"},e)})))}function s(e){var t=e.title,a=e.collectionLink,s=e.isSorted,m=void 0===s||s,p=e.data,o=p.some((function(e){return e.tags})),i={Easy:0,Medium:1,Hard:2},l=(m?p.sort((function(e,t){return i[e.difficulty]-i[t.difficulty]})):p).map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",null,n.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),n.createElement("td",null,e.difficulty),n.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&n.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&n.createElement("span",null,"N/A")),o&&n.createElement("td",null,n.createElement(r,{names:e.tags})))}));return n.createElement(n.Fragment,null,n.createElement("h3",null,t),a&&n.createElement("h4",null,"Start Practicing: ",n.createElement("a",{href:a,target:"_blank"},a)),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Problem Name"),n.createElement("th",null,"Difficulty"),n.createElement("th",null,"Solution Link"),o&&n.createElement("th",null,"Topic"))),n.createElement("tbody",null,l)))}},78735:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.names.split(",");return n.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);