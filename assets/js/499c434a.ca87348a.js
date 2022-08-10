"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},suggestedProblems:function(){return k},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(78735),l=n(11182),c=["components"],s={title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},u=void 0,p={unversionedId:"basic-topics/backtracking",id:"basic-topics/backtracking",title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",source:"@site/tutorials/basic-topics/backtracking.md",sourceDirName:"basic-topics",slug:"/basic-topics/backtracking",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/backtracking",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/backtracking.md",tags:[],version:"current",frontMatter:{title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/arrays"},next:{title:"Binary Search",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/binary-search"}},m={},d=[{value:"Overview",id:"overview",level:2}],k=[{problemName:"0039 - Combination Sum",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/running-sum-of-1d-array/",solutionLink:"../../solutions/1400-1499/running-sum-of-1d-array-easy"},{problemName:"0040 - Combination Sum II",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/combination-sum-ii/",solutionLink:"../../solutions/0000-0099/combination-sum-ii-medium"},{problemName:"0046 - Permutations",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/permutations/",solutionLink:"../../solutions/0000-0099/permutations-medium"},{problemName:"0078 - Subsets",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/subsets/",solutionLink:"../../solutions/0000-0099/subsets-medium"}],f={toc:d,suggestedProblems:k};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one. Let's take ",(0,i.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/permutations-medium"},"0046 - Permutations (Medium)")," as an example, if we have an array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," of distinct integers, what are all the possible permutations? If the input is ",(0,i.kt)("inlineCode",{parentName:"p"},"[1,2,3]"),", then the permutations would be ",(0,i.kt)("inlineCode",{parentName:"p"},"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"),". In C++, it is easy to solve this problem by using the built-in STL ",(0,i.kt)("inlineCode",{parentName:"p"},"next_permutation"),". However, we can also solve it using backtracking."),(0,i.kt)("p",null,"The general steps are as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sort the input array if necessary. However, in this example, sorting is not necessary.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(nums.begin(), nums.end());\n")),(0,i.kt)("p",null,"2","."," Define ",(0,i.kt)("inlineCode",{parentName:"p"},"ans")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"ans")," is the array storing all final permutations and ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," is used to store possible permutations at some point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<vector<int>> ans;\nvector<int> tmp;\n")),(0,i.kt)("p",null,"3","."," Call ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," function in main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"backtrack(nums, ans, tmp);\n")),(0,i.kt)("p",null,"4","."," Let's add logic in ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," function. First we need to define the exit criteria. When should we push ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ans"),"? If ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," already got enough candidates, then we can push ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"if ((int) tmp.size() == (int) nums.size()) {\n    ans.push_back(tmp);\n    return;\n}\n")),(0,i.kt)("p",null,"5","."," Iterate each number, check If the candidate has been used or not, skip it if it is already in ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp"),". Otherwise, push it to ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," and call ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," again. After that, remove the previous candidate from ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," and move to the next candidate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto x : nums) {\n    if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;\n    tmp.push_back(x);\n    backtrack(nums, ans, tmp);\n    tmp.pop_back();   \n}\n")),(0,i.kt)(l.Z,{title:"Suggested Problems",data:k,mdxType:"Table"}))}b.isMDXComponent=!0},11182:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function r(e){var t=e.names;if(!t)return null;var n=t.split(",");return a.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return a.createElement("span",{key:t,className:"topic-tag"},e)})))}function i(e){var t=e.title,n=e.collectionLink,i=e.isSorted,o=void 0===i||i,l=e.data,c=l.some((function(e){return e.tags})),s={Easy:0,Medium:1,Hard:2},u=(o?l.sort((function(e,t){return s[e.difficulty]-s[t.difficulty]})):l).map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),a.createElement("td",null,e.difficulty),a.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&a.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&a.createElement("span",null,"N/A")),c&&a.createElement("td",null,a.createElement(r,{names:e.tags})))}));return a.createElement(a.Fragment,null,a.createElement("h3",null,t),n&&a.createElement("h4",null,"Start Practicing: ",a.createElement("a",{href:n,target:"_blank"},n)),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Problem Name"),a.createElement("th",null,"Difficulty"),a.createElement("th",null,"Solution Link"),c&&a.createElement("th",null,"Topic"))),a.createElement("tbody",null,u)))}},78735:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.names.split(",");return a.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return a.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);