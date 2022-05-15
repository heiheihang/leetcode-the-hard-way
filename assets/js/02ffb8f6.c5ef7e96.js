"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5267],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1213:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/"},p="2251 - Number of Flowers in Full Bloom (Hard)",s={unversionedId:"2200-2299/number-of-flowers-in-full-bloom-hard",id:"2200-2299/number-of-flowers-in-full-bloom-hard",title:"2251 - Number of Flowers in Full Bloom (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/",source:"@site/solutions/2200-2299/2251-number-of-flowers-in-full-bloom-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/number-of-flowers-in-full-bloom-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/number-of-flowers-in-full-bloom-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2251-number-of-flowers-in-full-bloom-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:2251,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/"},sidebar:"tutorialSidebar",previous:{title:"2250 - Count Number of Rectangles Containing Each Point (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-number-of-rectangles-containing-each-point-medium"},next:{title:"2255 - Count Prefixes of a Given String (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-prefixes-of-a-given-string-easy"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Line Sweep",id:"approach-1-line-sweep",level:2}],c={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2251---number-of-flowers-in-full-bloom-hard"},"2251 - Number of Flowers in Full Bloom (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"flowers"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"flowers[i] = [starti, endi]")," means the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," flower will be in ",(0,a.kt)("strong",{parentName:"p"},"full bloom")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"starti")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"endi")," (",(0,a.kt)("strong",{parentName:"p"},"inclusive"),"). You are also given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"persons")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"persons[i]")," is the time that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," person will arrive to see the flowers."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"an integer array")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,a.kt)("em",{parentName:"p"},"of size")," ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),(0,a.kt)("em",{parentName:"p"},", where")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer[i]")," ",(0,a.kt)("em",{parentName:"p"},"is the ",(0,a.kt)("strong",{parentName:"em"},"number")," of flowers that are in full bloom when the")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," ",(0,a.kt)("em",{parentName:"p"},"person arrives.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: flowers = [[1,6],[3,7],[9,12],[4,13]], persons = [2,3,7,11]\nOutput: [1,2,2,2]\nExplanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.\nFor each person, we return the number of flowers in full bloom during their arrival.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: flowers = [[1,10],[3,3]], persons = [3,3,2]\nOutput: [2,2,1]\nExplanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.\nFor each person, we return the number of flowers in full bloom during their arrival.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= flowers.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flowers[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= starti <= endi <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= persons.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= persons[i] <= 10^9"))),(0,a.kt)("h2",{id:"approach-1-line-sweep"},"Approach 1: Line Sweep"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& persons) {\n        int n = persons.size();\n        vector<int> ans(n);\n        vector<array<int, 3>> v; // {time, idx, val}\n        for (auto& flower : flowers) {\n            // in\n            v.push_back({flower[0], -1, 1});\n            // out\n            v.push_back({flower[1] + 1, -1, -1});\n        }\n        // include persons\n        for (int i = 0; i < n; i++) v.push_back({persons[i], i, 0});\n        // sort in ascending\n        sort(v.begin(), v.end());\n        int sum = 0;\n        for (auto& [time, idx, val] : v) {\n            // calculate the prefix sum\n            sum += val;\n            // idx is not -1, set the answer for person[idx]\n            if (idx != -1) {\n                ans[idx] = sum;\n            }\n        }\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0}}]);