"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[435],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(8539),l=["components"],c={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/"},s="1639 - Number of Ways to Form a Target String Given a Dictionary (Hard)",m={unversionedId:"1600-1699/number-of-ways-to-form-a-target-string-given-a-dictionary-hard",id:"1600-1699/number-of-ways-to-form-a-target-string-given-a-dictionary-hard",title:"1639 - Number of Ways to Form a Target String Given a Dictionary (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/",source:"@site/solutions/1600-1699/1639-number-of-ways-to-form-a-target-string-given-a-dictionary-hard.md",sourceDirName:"1600-1699",slug:"/1600-1699/number-of-ways-to-form-a-target-string-given-a-dictionary-hard",permalink:"/leetcode-the-hard-way/solutions/1600-1699/number-of-ways-to-form-a-target-string-given-a-dictionary-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1600-1699/1639-number-of-ways-to-form-a-target-string-given-a-dictionary-hard.md",tags:[],version:"current",sidebarPosition:1639,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/"},sidebar:"tutorialSidebar",previous:{title:"1633 - Smallest String With A Given Numeric Value (Medium)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/smallest-string-with-a-given-numeric-value-medium"},next:{title:"1672 - Richest Customer Wealth (Easy)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/richest-customer-wealth-easy"}},p={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],u={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1639---number-of-ways-to-form-a-target-string-given-a-dictionary-hard"},"1639 - Number of Ways to Form a Target String Given a Dictionary (Hard)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/"},"https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a list of strings of the ",(0,i.kt)("strong",{parentName:"p"},"same length")," ",(0,i.kt)("inlineCode",{parentName:"p"},"words")," and a string ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,i.kt)("p",null,"Your task is to form ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," using the given ",(0,i.kt)("inlineCode",{parentName:"p"},"words")," under the following rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target")," should be formed from left to right."),(0,i.kt)("li",{parentName:"ul"},"To form the ",(0,i.kt)("inlineCode",{parentName:"li"},"ith")," character (",(0,i.kt)("strong",{parentName:"li"},"0-indexed"),") of ",(0,i.kt)("inlineCode",{parentName:"li"},"target"),", you can choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"kth")," character of the ",(0,i.kt)("inlineCode",{parentName:"li"},"jth")," string in ",(0,i.kt)("inlineCode",{parentName:"li"},"words")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"target[i] = words[j][k]"),"."),(0,i.kt)("li",{parentName:"ul"},"Once you use the ",(0,i.kt)("inlineCode",{parentName:"li"},"kth")," character of the ",(0,i.kt)("inlineCode",{parentName:"li"},"jth")," string of ",(0,i.kt)("inlineCode",{parentName:"li"},"words"),", you ",(0,i.kt)("strong",{parentName:"li"},"can no longer")," use the ",(0,i.kt)("inlineCode",{parentName:"li"},"xth")," character of any string in ",(0,i.kt)("inlineCode",{parentName:"li"},"words")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"x <= k"),". In other words, all characters to the left of or at index ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," become unusuable for every string."),(0,i.kt)("li",{parentName:"ul"},"Repeat the process until you form the string ",(0,i.kt)("inlineCode",{parentName:"li"},"target"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notice")," that you can use ",(0,i.kt)("strong",{parentName:"p"},"multiple characters")," from the ",(0,i.kt)("strong",{parentName:"p"},"same string")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"words")," provided the conditions above are met."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the number of ways to form ",(0,i.kt)("inlineCode",{parentName:"em"},"target")," from ",(0,i.kt)("inlineCode",{parentName:"em"},"words")),". Since the answer may be too large, return it ",(0,i.kt)("strong",{parentName:"p"},"modulo")," ",(0,i.kt)("inlineCode",{parentName:"p"},"109 + 7"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: words = ["acca","bbbb","caca"], target = "aba"\nOutput: 6\nExplanation: There are 6 ways to form target.\n"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")\n"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")\n"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")\n"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")\n"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")\n"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: words = ["abba","baab"], target = "bab"\nOutput: 4\nExplanation: There are 4 ways to form target.\n"bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")\n"bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")\n"bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")\n"bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 1000")),(0,i.kt)("li",{parentName:"ul"},"All strings in ",(0,i.kt)("inlineCode",{parentName:"li"},"words")," have the same length."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= target.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"words[i]")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," contain only lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int numWays(vector<string>& words, string target) {\n        int M = 1e9 + 7, n = words[0].size(), m = target.size();\n        vector<vector<long long>> dp(n, vector<long long>(m, -1));\n        vector<vector<long long>> cnt(n, vector<long long>(26));\n        // count character frequency for each j-th column\n        for (int i = 0; i < words.size(); i++) {\n            for (int j = 0; j < n; j++) {\n                cnt[j][words[i][j] - 'a']++;\n            }\n        }\n        function<int(int,int)> dfs = [&](int i, int j) {\n            // reach end of target\n            if (j == m) return 1;\n            // reach end of words\n            if (i == n) return 0;\n            if (dp[i][j] != -1) return (int) dp[i][j];\n            // skip i-th character\n            int res = dfs(i + 1, j), c = target[j] - 'a';\n            if (cnt[i][c]) res = (res + cnt[i][c] * dfs(i + 1, j + 1)) % M;\n            // memoize the result\n            return (int) (dp[i][j] = res);\n        };\n        return dfs(0, 0);\n    }\n};\n")))}g.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);