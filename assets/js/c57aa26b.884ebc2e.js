"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4090],{3905:function(a,e,n){n.d(e,{Zo:function(){return o},kt:function(){return h}});var t=n(67294);function m(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function s(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,m=function(a,e){if(null==a)return{};var n,t,m={},s=Object.keys(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||(m[n]=a[n]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(m[n]=a[n])}return m}var i=t.createContext({}),l=function(a){var e=t.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},o=function(a){var e=l(a.components);return t.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},N=t.forwardRef((function(a,e){var n=a.components,m=a.mdxType,s=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(n),h=m,k=N["".concat(i,".").concat(h)]||N[h]||c[h]||s;return n?t.createElement(k,r(r({ref:e},o),{},{components:n})):t.createElement(k,r({ref:e},o))}));function h(a,e){var n=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=n.length,r=new Array(s);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var l=2;l<s;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},71374:function(a,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return N}});var t=n(87462),m=n(63366),s=(n(67294),n(3905)),r=n(8539),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/"},l="2155 - All Divisions With the Highest Score of a Binary Array (Medium)",o={unversionedId:"2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium",id:"2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium",title:"2155 - All Divisions With the Highest Score of a Binary Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/",source:"@site/solutions/2100-2199/2155-all-divisions-with-the-highest-score-of-a-binary-array-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2155-all-divisions-with-the-highest-score-of-a-binary-array-medium.md",tags:[],version:"current",sidebarPosition:2155,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/"},sidebar:"tutorialSidebar",previous:{title:"2154 - Keep Multiplying Found Values by Two (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/keep-multiplying-found-values-by-two-easy"},next:{title:"2156 - Find Substring With Given Hash Value (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-substring-with-given-hash-value-medium"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum + Suffix Sum",id:"approach-1-prefix-sum--suffix-sum",level:2},{value:"Approach 2: Prefix Sum",id:"approach-2-prefix-sum",level:2},{value:"Approach 3: Counting ones and zeros",id:"approach-3-counting-ones-and-zeros",level:2},{value:"Approach 4: Counting ones",id:"approach-4-counting-ones",level:2}],h={toc:N};function k(a){var e=a.components,n=(0,m.Z)(a,p);return(0,s.kt)("wrapper",(0,t.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2155---all-divisions-with-the-highest-score-of-a-binary-array-medium"},"2155 - All Divisions With the Highest Score of a Binary Array (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/"},"https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a ",(0,s.kt)("strong",{parentName:"p"},"0-indexed")," binary array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," can be divided at index ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," (where ",(0,s.kt)("inlineCode",{parentName:"p"},"0 <= i <= n)")," into two arrays (possibly empty) ",(0,s.kt)("inlineCode",{parentName:"p"},"nums_left")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"nums_right"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"numsleft")," has all the elements of ",(0,s.kt)("inlineCode",{parentName:"li"},"nums")," between index ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"i - 1")," ",(0,s.kt)("strong",{parentName:"li"},"(inclusive)"),", while ",(0,s.kt)("inlineCode",{parentName:"li"},"numsright")," has all the elements of nums between index ",(0,s.kt)("inlineCode",{parentName:"li"},"i")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"n - 1")," ",(0,s.kt)("strong",{parentName:"li"},"(inclusive)"),"."),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"i == 0"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"nums_left")," is ",(0,s.kt)("strong",{parentName:"li"},"empty"),", while ",(0,s.kt)("inlineCode",{parentName:"li"},"nums_right")," has all the elements of ",(0,s.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"i == n"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"nums_left")," has all the elements of nums, while ",(0,s.kt)("inlineCode",{parentName:"li"},"nums_right")," is ",(0,s.kt)("strong",{parentName:"li"},"empty"),".")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"division score")," of an index ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," is the ",(0,s.kt)("strong",{parentName:"p"},"sum")," of the number of ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"'s in ",(0,s.kt)("inlineCode",{parentName:"p"},"nums_left")," and the number of ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"'s in ",(0,s.kt)("inlineCode",{parentName:"p"},"nums_right"),"."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"all distinct indices")," that have the ",(0,s.kt)("strong",{parentName:"em"},"highest")," possible ",(0,s.kt)("strong",{parentName:"em"},"division score")),". You may return the answer in ",(0,s.kt)("strong",{parentName:"p"},"any order"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [0,0,1,0]\nOutput: [2,4]\nExplanation: Division at index\n- 0: numsleft is []. numsright is [0,0,1,0]. The score is 0 + 1 = 1.\n- 1: numsleft is [0]. numsright is [0,1,0]. The score is 1 + 1 = 2.\n- 2: numsleft is [0,0]. numsright is [1,0]. The score is 2 + 1 = 3.\n- 3: numsleft is [0,0,1]. numsright is [0]. The score is 2 + 0 = 2.\n- 4: numsleft is [0,0,1,0]. numsright is []. The score is 3 + 0 = 3.\nIndices 2 and 4 both have the highest possible division score 3.\nNote the answer [4,2] would also be accepted.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [0,0,0]\nOutput: [3]\nExplanation: Division at index\n- 0: numsleft is []. numsright is [0,0,0]. The score is 0 + 0 = 0.\n- 1: numsleft is [0]. numsright is [0,0]. The score is 1 + 0 = 1.\n- 2: numsleft is [0,0]. numsright is [0]. The score is 2 + 0 = 2.\n- 3: numsleft is [0,0,0]. numsright is []. The score is 3 + 0 = 3.\nOnly index 3 has the highest possible division score 3.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,1]\nOutput: [0]\nExplanation: Division at index\n- 0: numsleft is []. numsright is [1,1]. The score is 0 + 2 = 2.\n- 1: numsleft is [1]. numsright is [1]. The score is 0 + 1 = 1.\n- 2: numsleft is [1,1]. numsright is []. The score is 0 + 0 = 0.\nOnly index 0 has the highest possible division score 2.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nums[i]")," is either ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,s.kt)("h2",{id:"approach-1-prefix-sum--suffix-sum"},"Approach 1: Prefix Sum + Suffix Sum"),(0,s.kt)("p",null,"Calculate the prefix sum and suffix sum first. Then construct the score (",(0,s.kt)("inlineCode",{parentName:"p"},"left[i] + right[i]"),") at each index. Find the maximum value and push all indices with such value into the final array. "),(0,s.kt)(r.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> maxScoreIndices(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> left(n + 1), right(n + 1), score(n + 1), ans;\n        for (int i = 1; i <= n; i++) left[i] = left[i - 1] + (nums[i - 1] == 0);\n        for (int i = n; i > 0; i--) right[i - 1] = right[i] + (nums[i - 1] == 1);\n        for (int i = 0; i <= n; i++) score[i] = left[i] + right[i];\n        int mx = *max_element(score.begin(), score.end());\n        for (int i = 0; i <= n; i++) if (score[i] == mx) ans.push_back(i);\n        return ans;\n    }\n};\n")),(0,s.kt)("h2",{id:"approach-2-prefix-sum"},"Approach 2: Prefix Sum"),(0,s.kt)("p",null,"We don't actually need to calculate suffix sum. Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"left[i + 1]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[0] + nums[1] + ... + nums[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". For each index, there are ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i - left[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," zeros in the left and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"left[n] - left[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," ones in the right. Therefore, we can come up with this formula: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"score[i] = i - left[i] + left[n] - left[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"score"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,s.kt)(r.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> maxScoreIndices(vector<int>& nums) {\n        int n = nums.size(), mx = 0;\n        vector<int> left(n + 1), ans;\n        for (int i = 0; i < n; i++) left[i + 1] = left[i] + nums[i];\n        for (int i = 0; i <= n; i++) {\n            int score = i - left[i] + left[n] - left[i];\n            if (score == mx) {\n                ans.push_back(i);\n            } else if (score > mx) {\n                mx = score;\n                ans.clear();\n                ans.push_back(i);\n            }\n        }\n        return ans;\n    }\n};\n")),(0,s.kt)("h2",{id:"approach-3-counting-ones-and-zeros"},"Approach 3: Counting ones and zeros"),(0,s.kt)("p",null,"If we look at the last index, we have ",(0,s.kt)("inlineCode",{parentName:"p"},"accumulate(nums.begin(), nums.end(), 0)")," ones and 0 zeros at the beginning. If we move from the right to the left, we can update ",(0,s.kt)("inlineCode",{parentName:"p"},"zero")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"one")," on the fly."),(0,s.kt)(r.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> maxScoreIndices(vector<int>& nums) {\n        int n = nums.size(), mx = 0;\n        int one = accumulate(nums.begin(), nums.end(), 0), zero = 0;\n        vector<int> ans;\n        for (int i = 0; i <= n; i++) {\n            int score = zero + one;\n            if (score == mx) {\n                ans.push_back(i);\n            } else if (score > mx) {\n                mx = score;\n                ans.clear();\n                ans.push_back(i);\n            }\n            if (i < n) {\n                one -= nums[i] == 1;\n                zero += nums[i] == 0;\n            }\n        }\n        return ans;\n    }\n};\n")),(0,s.kt)("h2",{id:"approach-4-counting-ones"},"Approach 4: Counting ones"),(0,s.kt)("p",null,"We can just use one variable instead of two shown in Approach 3."),(0,s.kt)(r.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> maxScoreIndices(vector<int>& nums) {\n        int n = nums.size();\n        int one = accumulate(nums.begin(), nums.end(), 0), mx = one;\n        vector<int> ans;\n        ans.push_back(0);\n        for (int i = 0; i < n; i++) {\n            one += (nums[i] == 0) - nums[i];\n            if (one == mx) {\n                ans.push_back(i + 1);\n            } else if (one > mx) {\n                mx = one;\n                ans.clear();\n                ans.push_back(i + 1);\n            }\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0},8539:function(a,e,n){n.d(e,{Z:function(){return m}});var t=n(67294);function m(a){var e=a.name;return t.createElement("div",{className:"solution-author-wrapper"},t.createElement("span",null,"This solution is written by ",e))}}}]);