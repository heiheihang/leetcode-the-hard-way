"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5622],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return h}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),h=s,k=N["".concat(l,".").concat(h)]||N[h]||c[h]||r;return t?n.createElement(k,m(m({ref:e},o),{},{components:t})):n.createElement(k,m({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},73656:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/find-the-difference/"},l="0389 - Find the Difference (Easy)",i={unversionedId:"0300-0399/find-the-difference-easy",id:"0300-0399/find-the-difference-easy",title:"0389 - Find the Difference (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-the-difference/",source:"@site/solutions/0300-0399/0389-find-the-difference-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/find-the-difference-easy",permalink:"/leetcode-the-hard-way/solutions/0300-0399/find-the-difference-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0389-find-the-difference-easy.md",tags:[],version:"current",sidebarPosition:389,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-the-difference/"},sidebar:"tutorialSidebar",previous:{title:"0374 - Guess Number Higher or Lower (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/guess-number-higher-or-lower-easy"},next:{title:"0392 - Is Subsequence (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/is-subsequence-easy"}},o={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Manipulation",id:"approach-1-bit-manipulation",level:2},{value:"Approach 2: Hash Map",id:"approach-2-hash-map",level:2},{value:"Approach 3: Sorting",id:"approach-3-sorting",level:2}],N={toc:c};function h(a){var e=a.components,t=(0,s.Z)(a,m);return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0389---find-the-difference-easy"},"0389 - Find the Difference (Easy)"),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given two strings ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,r.kt)("p",null,"String ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," is generated by random shuffling string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and then add one more letter at a random position."),(0,r.kt)("p",null,"Return the letter that was added to ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "abcd", t = "abcde"\nOutput: "e"\nExplanation: \'e\' is the letter that was added.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "", t = "y"\nOutput: "y" \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"t.length == s.length + 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"t")," consist of lowercase English letters.")),(0,r.kt)("h2",{id:"approach-1-bit-manipulation"},"Approach 1: Bit Manipulation"),(0,r.kt)("p",null,"Same idea as ",(0,r.kt)("a",{parentName:"p",href:"../0100-0199/single-number-easy"},"0136 - Single Number (Easy)"),"."),(0,r.kt)("p",null,"Prerequisite:  You should understand properties of XOR."),(0,r.kt)("p",null,"Let's have a quick review."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we take XOR of a number and a zero, the result will be that number, i.e. ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus 0 = a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),"."),(0,r.kt)("li",{parentName:"ul"},"If we take XOR of two same numbers, it will return 0, i.e. ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus a = 0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,r.kt)("li",{parentName:"ul"},"If we take XOR of multiple numbers, the order doesn't affect the result, i.e. ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus b \\oplus c = a \\oplus c \\oplus b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),".")),(0,r.kt)("p",null,"Therefore, we apply XOR on each character. The same characters will cancel out each other. What's left is the answer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        char ans = 0;\n        // take XOR for each character: ans = ans ^ x \n        for (auto x : s) ans ^= x;\n        for (auto x : t) ans ^= x;\n        return ans;\n    }\n};\n")),(0,r.kt)("h2",{id:"approach-2-hash-map"},"Approach 2: Hash Map"),(0,r.kt)("p",null,"We can store the occurrence for each character. As ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," has one more character, we can count ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," first, iterate ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to subtract the occurrences. The answer will be the one which has one occurrence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        unordered_map<char, int> m;\n        // count the occurrence for t\n        for (auto x : t) m[x]++;\n        // instead of using an extra hash map, \n        // we decrease the occurrence\n        for (auto x : s) m[x]--;\n        for (auto x : m) {\n            // the answer will be the one with occurrence = 1\n            if (x.second == 1) {\n                return x.first;\n            }\n        }\n        // returning any character would work as it never reaches here\n        return 'a';\n    }\n};\n")),(0,r.kt)("h2",{id:"approach-3-sorting"},"Approach 3: Sorting"),(0,r.kt)("p",null,"We can sort both input and compare each character one by one. If there is a difference, then return  ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Otherwise, return the last character of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," as the first ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"len(s)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"characters are same."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        // sort s in ascending order\n        sort(s.begin(), s.end());\n        // sort t in ascending order\n        sort(t.begin(), t.end());\n        for (int i = 0; i < s.size(); i++) {\n            // s = "abcde"\n            // t = "abcdde"\n            // "e" is not same as "d" at position 4 (0-base)\n            // hence, return t[i], i.e. "d"\n            if (s[i] != t[i]) {\n                return t[i];\n            }\n        }\n        // for the case like\n        // s = "abcd"\n        // t = "abcde"\n        return t.back();\n    }\n};\n')))}h.isMDXComponent=!0}}]);