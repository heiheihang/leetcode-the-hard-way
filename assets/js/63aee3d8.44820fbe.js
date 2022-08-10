"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[651],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return h}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=l(t),h=s,u=k["".concat(i,".").concat(h)]||k[h]||c[h]||r;return t?n.createElement(u,m(m({ref:a},o),{},{components:t})):n.createElement(u,m({ref:a},o))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},39119:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return k}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=t(8539),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/smallest-sufficient-team/"},l="1125 - Smallest Sufficient Team (Hard)",o={unversionedId:"1100-1199/smallest-sufficient-team-hard",id:"1100-1199/smallest-sufficient-team-hard",title:"1125 - Smallest Sufficient Team (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/smallest-sufficient-team/",source:"@site/solutions/1100-1199/1125-smallest-sufficient-team-hard.md",sourceDirName:"1100-1199",slug:"/1100-1199/smallest-sufficient-team-hard",permalink:"/leetcode-the-hard-way/solutions/1100-1199/smallest-sufficient-team-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1100-1199/1125-smallest-sufficient-team-hard.md",tags:[],version:"current",sidebarPosition:1125,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/smallest-sufficient-team/"},sidebar:"tutorialSidebar",previous:{title:"1100 - 1199",permalink:"/leetcode-the-hard-way/solutions/category/1100---1199"},next:{title:"1135 - Connecting Cities With Minimum Cost (Medium)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/connecting-cities-with-minimum-cost-medium"}},c={},k=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP Bit Masking",id:"approach-1-dp-bit-masking",level:2}],h={toc:k};function u(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1125---smallest-sufficient-team-hard"},"1125 - Smallest Sufficient Team (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/smallest-sufficient-team/"},"https://leetcode.com/problems/smallest-sufficient-team/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"In a project, you have a list of required skills ",(0,r.kt)("inlineCode",{parentName:"p"},"req_skills"),", and a list of people. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," person ",(0,r.kt)("inlineCode",{parentName:"p"},"people[i]")," contains a list of skills that the person has."),(0,r.kt)("p",null,"Consider a sufficient team: a set of people such that for every required skill in ",(0,r.kt)("inlineCode",{parentName:"p"},"req_skills"),", there is at least one person in the team who has that skill. We can represent these teams by the index of each person."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"team = [0, 1, 3]")," represents the people with skills ",(0,r.kt)("inlineCode",{parentName:"li"},"people[0]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"people[1]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"people[3]"),".")),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"any sufficient team of the smallest possible size, represented by the index of each person"),". You may return the answer in ",(0,r.kt)("strong",{parentName:"p"},"any order"),"."),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"guaranteed")," an answer exists."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]\nOutput: [0,2]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]\nOutput: [1,2]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= req_skills.length <= 16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= req_skills[i].length <= 16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req_skills[i]")," consists of lowercase English letters."),(0,r.kt)("li",{parentName:"ul"},"All the strings of ",(0,r.kt)("inlineCode",{parentName:"li"},"req_skills")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= people.length <= 60")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= people[i].length <= 16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= people[i][j].length <= 16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"people[i][j]")," consists of lowercase English letters."),(0,r.kt)("li",{parentName:"ul"},"All the strings of ",(0,r.kt)("inlineCode",{parentName:"li"},"people[i]")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),"."),(0,r.kt)("li",{parentName:"ul"},"Every skill in ",(0,r.kt)("inlineCode",{parentName:"li"},"people[i]")," is a skill in ",(0,r.kt)("inlineCode",{parentName:"li"},"req_skills"),"."),(0,r.kt)("li",{parentName:"ul"},"It is guaranteed a sufficient team exists.")),(0,r.kt)("h2",{id:"approach-1-dp-bit-masking"},"Approach 1: DP Bit Masking"),(0,r.kt)("p",null,"Since the skills are strings, we need to digitise them first. For example, given req","_","skills = ","[",'"java","nodejs","reactjs"], we can turn it to ',"[","0, 1, 2] where each number map the corresponding skill. Let ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the number of people for the mask ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans[j]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the list of people chosen for mask ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"j")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),". We iterate each people to calculate its skills and iterate each mask to see if adding this person to the team from the old mask could have a smaller team size for the new mask. If so, update ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," and add this person to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),"."),(0,r.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {\n        int n = req_skills.size(), m = people.size();\n        // digitize skills\n        unordered_map<string, int> skills;\n        for (int i = 0; i < n; i++) skills[req_skills[i]] = i;\n        // dp[mask] : number of people for mask\n        vector<int> dp(1 << n, 1e9);\n        // ans[mask] : the list of people for mask\n        vector<vector<int>> ans(1 << n);\n        dp[0] = 0;\n        // iterate people\n        for (int i = 0; i < m; i++) {\n            // skills for the i-th person\n            int p_skill = 0;\n            for (auto s : people[i]) p_skill |= (1 << skills[s]);\n            // compute with previous masks\n            for (int mask = 0; mask < (1 << n); mask++) {\n                // create a new mask\n                int new_mask = mask | p_skill;\n                // check if there is a smaller team for the new_mask\n                if (dp[mask] + 1 < dp[new_mask]) {\n                    dp[new_mask] = dp[mask] + 1;\n                    // take the people from mask\n                    ans[new_mask] = ans[mask];    \n                    // and add the i-th person\n                    ans[new_mask].push_back(i);\n                }\n            }\n        } \n        return ans[(1 << n) - 1];\n    }\n};\n")))}u.isMDXComponent=!0},8539:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(67294);function s(e){var a=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",a))}}}]);