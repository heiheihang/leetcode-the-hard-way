"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3891],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return k}});var n=t(67294);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),N=o(t),k=m,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(h,s(s({ref:a},i),{},{components:t})):n.createElement(h,s({ref:a},i))}));function k(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var r=t.length,s=new Array(r);s[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:m,s[1]=p;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},56519:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return N}});var n=t(87462),m=t(63366),r=(t(67294),t(3905)),s=t(92194),p=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/rotate-list/"},o="0061 - Rotate List (Medium)",i={unversionedId:"0000-0099/rotate-list-medium",id:"0000-0099/rotate-list-medium",title:"0061 - Rotate List (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/rotate-list/",source:"@site/solutions/0000-0099/0061-rotate-list-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/rotate-list-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/rotate-list-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0061-rotate-list-medium.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/rotate-list/"},sidebar:"tutorialSidebar",previous:{title:"0050 - Pow(x, n) (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/pow-x-n-medium"},next:{title:"0062 - Unique Paths (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/unique-paths-medium"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Connect and Cut",id:"approach-1-connect-and-cut",level:2}],k={toc:N};function h(e){var a=e.components,t=(0,m.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0061---rotate-list-medium"},"0061 - Rotate List (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-list/"},"https://leetcode.com/problems/rotate-list/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, rotate the list to the right by ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," places."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: head = [1,2,3,4,5], k = 2\nOutput: [4,5,1,2,3]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: head = [0,1,2], k = 4\nOutput: [2,0,1]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 500]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= k <= 2 * 10^9"))),(0,r.kt)("h2",{id:"approach-1-connect-and-cut"},"Approach 1: Connect and Cut"),(0,r.kt)("p",null,"First we iterate each node till the end and connect the tail to the head. At the same time we calculate how many nodes there, says ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". After that, we find a point to cut the list. The point to cut is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mspace",{parentName:"mrow"}),(0,r.kt)("mspace",{parentName:"mrow",width:"0.6667em"}),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n - k \\mod n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.6667em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". As ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," can be greater or equal to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", so the new head will be located at ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mspace",{parentName:"mrow"}),(0,r.kt)("mspace",{parentName:"mrow",width:"0.6667em"}),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n - k \\mod n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.6667em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". Then we link the new tail->next to null and return the new head."),(0,r.kt)(s.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        if (!head) return NULL;\n        ListNode *p = head;\n        int n = 1;\n        while (p->next) {\n            p = p->next;\n            n++;\n        }\n        // connect tail to head - like a ring\n        p->next = head;\n        // find the location to cut\n        k = len - k % len;\n        // move to that location\n        while (k--) p = p->next;\n        // p->next is the new head\n        head = p->next;\n        // make it as the new tail\n        p->next = NULL;\n        // return the new head\n        return head;\n    }\n};\n")))}h.isMDXComponent=!0},92194:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(67294);function m(e){var a=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},a.length>1?"Authors":"Author",":",a.map((function(e,a){return n.createElement("span",{key:a,className:"author-tag"},e)})))}}}]);