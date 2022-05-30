"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3303],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/baseball-game/"},s="0682 - Baseball Game (Easy)",p={unversionedId:"0600-0699/baseball-game-easy",id:"0600-0699/baseball-game-easy",title:"0682 - Baseball Game (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/baseball-game/",source:"@site/solutions/0600-0699/0682-baseball-game-easy.md",sourceDirName:"0600-0699",slug:"/0600-0699/baseball-game-easy",permalink:"/leetcode-the-hard-way/solutions/0600-0699/baseball-game-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0600-0699/0682-baseball-game-easy.md",tags:[],version:"current",sidebarPosition:682,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/baseball-game/"},sidebar:"tutorialSidebar",previous:{title:"0680 - Valid Palindrome II (Easy)",permalink:"/leetcode-the-hard-way/solutions/0600-0699/valid-palindrome-ii-easy"},next:{title:"0700 - 0799",permalink:"/leetcode-the-hard-way/solutions/category/0700---0799"}},c={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0682---baseball-game-easy"},"0682 - Baseball Game (Easy)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores."),(0,a.kt)("p",null,"At the beginning of the game, you start with an empty record. You are given a list of strings ",(0,a.kt)("inlineCode",{parentName:"p"},"ops"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"ops[i]")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," operation you must apply to the record and is one of the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An integer ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," - Record a new score of ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"+"')," - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"D"')," - Record a new score that is double the previous score. It is guaranteed there will always be a previous score."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"C"')," - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the sum of all the scores on the record"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: ops = ["5","2","C","D","+"]\nOutput: 30\nExplanation:\n"5" - Add 5 to the record, record is now [5].\n"2" - Add 2 to the record, record is now [5, 2].\n"C" - Invalidate and remove the previous score, record is now [5].\n"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].\n"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].\nThe total sum is 5 + 10 + 15 = 30.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: ops = ["5","-2","4","C","D","9","+","+"]\nOutput: 27\nExplanation:\n"5" - Add 5 to the record, record is now [5].\n"-2" - Add -2 to the record, record is now [5, -2].\n"4" - Add 4 to the record, record is now [5, -2, 4].\n"C" - Invalidate and remove the previous score, record is now [5, -2].\n"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].\n"9" - Add 9 to the record, record is now [5, -2, -4, 9].\n"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].\n"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].\nThe total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: ops = ["1"]\nOutput: 1 \n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= ops.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ops[i]")," is ",(0,a.kt)("inlineCode",{parentName:"li"},'"C"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"D"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"+"'),", or a string representing an integer in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[-3 * 104, 3 * 104]"),"."),(0,a.kt)("li",{parentName:"ul"},"For operation ",(0,a.kt)("inlineCode",{parentName:"li"},'"+"'),", there will always be at least two previous scores on the record."),(0,a.kt)("li",{parentName:"ul"},"For operations ",(0,a.kt)("inlineCode",{parentName:"li"},'"C"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"D"'),", there will always be at least one previous score on the record.")),(0,a.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,a.kt)("p",null,"Just do what it says."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    int calPoints(vector<string>& ops) {\n        vector<int> s;\n        for (auto op: ops) {\n            int n = s.size();\n            // Record a new score that is the sum of the previous two scores. \n            // It is guaranteed there will always be two previous scores.\n            if (op == "+") s.push_back(s[n - 2] + s[n - 1]);\n            // Record a new score that is double the previous score. \n            // It is guaranteed there will always be a previous score.\n            else if (op == "D") s.push_back(2 * s[n - 1]);\n            // Invalidate the previous score, removing it from the record. \n            // It is guaranteed there will always be a previous score.\n            else if (op == "C") s.pop_back();\n            // An integer x - Record a new score of x.\n            else s.push_back(stoi(op));\n        }\n        // the sum of all the scores on the record\n        return accumulate(s.begin(), s.end(), 0);\n    }\n};\n')))}m.isMDXComponent=!0}}]);