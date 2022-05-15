"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5001],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return h}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),N=l(t),h=s,k=N["".concat(i,".").concat(h)]||N[h]||c[h]||m;return t?n.createElement(k,p(p({ref:e},o),{},{components:t})):n.createElement(k,p({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},90:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),p=["components"],r={description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"},i="2250 - Count Number of Rectangles Containing Each Point (Medium)",l={unversionedId:"2200-2299/count-number-of-rectangles-containing-each-point-medium",id:"2200-2299/count-number-of-rectangles-containing-each-point-medium",title:"2250 - Count Number of Rectangles Containing Each Point (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",source:"@site/solutions/2200-2299/2250-count-number-of-rectangles-containing-each-point-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-number-of-rectangles-containing-each-point-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-number-of-rectangles-containing-each-point-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2250-count-number-of-rectangles-containing-each-point-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652613881,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:2250,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"},sidebar:"tutorialSidebar",previous:{title:"2249 - Count Lattice Points Inside a Circle (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-lattice-points-inside-a-circle-medium"},next:{title:"2251 - Number of Flowers in Full Bloom (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/number-of-flowers-in-full-bloom-hard"}},o={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Lower Bound",id:"approach-1-lower-bound",level:2}],N={toc:c};function h(a){var e=a.components,t=(0,s.Z)(a,p);return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2250---count-number-of-rectangles-containing-each-point-medium"},"2250 - Count Number of Rectangles Containing Each Point (Medium)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given a 2D integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"rectangles")," where ",(0,m.kt)("inlineCode",{parentName:"p"},"rectangles[i] = [li, hi]")," indicates that ",(0,m.kt)("inlineCode",{parentName:"p"},"ith")," rectangle has a length of ",(0,m.kt)("inlineCode",{parentName:"p"},"li")," and a height of ",(0,m.kt)("inlineCode",{parentName:"p"},"hi"),". You are also given a 2D integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"points")," where ",(0,m.kt)("inlineCode",{parentName:"p"},"points[j] = [xj, yj]")," is a point with coordinates ",(0,m.kt)("inlineCode",{parentName:"p"},"(xj, yj)"),"."),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"ith")," rectangle has its ",(0,m.kt)("strong",{parentName:"p"},"bottom-left corner")," point at the coordinates ",(0,m.kt)("inlineCode",{parentName:"p"},"(0, 0)")," and its ",(0,m.kt)("strong",{parentName:"p"},"top-right corner")," point at ",(0,m.kt)("inlineCode",{parentName:"p"},"(li, hi)"),"."),(0,m.kt)("p",null,"Return ",(0,m.kt)("em",{parentName:"p"},"an integer array")," ",(0,m.kt)("inlineCode",{parentName:"p"},"count")," ",(0,m.kt)("em",{parentName:"p"},"of length")," ",(0,m.kt)("inlineCode",{parentName:"p"},"points.length")," ",(0,m.kt)("em",{parentName:"p"},"where")," ",(0,m.kt)("inlineCode",{parentName:"p"},"count[j]")," ",(0,m.kt)("em",{parentName:"p"},"is the number of rectangles that ",(0,m.kt)("strong",{parentName:"em"},"contain")," the")," ",(0,m.kt)("inlineCode",{parentName:"p"},"jth")," ",(0,m.kt)("em",{parentName:"p"},"point.")),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"ith")," rectangle ",(0,m.kt)("strong",{parentName:"p"},"contains")," the ",(0,m.kt)("inlineCode",{parentName:"p"},"jth")," point if ",(0,m.kt)("inlineCode",{parentName:"p"},"0 <= xj <= li")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"0 <= yj <= hi"),". Note that points that lie on the ",(0,m.kt)("strong",{parentName:"p"},"edges")," of a rectangle are also considered to be contained by that rectangle."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/example1.png",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]\nOutput: [2,1]\nExplanation: \nThe first rectangle contains no points.\nThe second rectangle contains only the point (2, 1).\nThe third rectangle contains the points (2, 1) and (1, 4).\nThe number of rectangles that contain the point (2, 1) is 2.\nThe number of rectangles that contain the point (1, 4) is 1.\nTherefore, we return [2, 1].\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/example2.png",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]\nOutput: [1,3]\nExplanation:\nThe first rectangle contains only the point (1, 1).\nThe second rectangle contains only the point (1, 1).\nThe third rectangle contains the points (1, 3) and (1, 1).\nThe number of rectangles that contain the point (1, 3) is 1.\nThe number of rectangles that contain the point (1, 1) is 3.\nTherefore, we return [1, 3].\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= rectangles.length, points.length <= 5 * 104")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"rectangles[i].length == points[j].length == 2")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= li, xj <= 10^9")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= hi, yj <= 100")),(0,m.kt)("li",{parentName:"ul"},"All the ",(0,m.kt)("inlineCode",{parentName:"li"},"rectangles")," are ",(0,m.kt)("strong",{parentName:"li"},"unique"),"."),(0,m.kt)("li",{parentName:"ul"},"All the ",(0,m.kt)("inlineCode",{parentName:"li"},"points")," are ",(0,m.kt)("strong",{parentName:"li"},"unique"),".")),(0,m.kt)("h2",{id:"approach-1-lower-bound"},"Approach 1: Lower Bound"),(0,m.kt)("p",null,"Observation: The max ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," is only ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"100")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"100")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"100"))))),", while the max ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"is ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mn",{parentName:"msup"},"9"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))),"."),(0,m.kt)("p",null,"For each ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),", we push the corresponding ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and then we sort all the ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"s for each ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"."," "),(0,m.kt)("p",null,"Then iterate each point, and iterate from ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"p"),(0,m.kt)("mi",{parentName:"msub"},"y"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p_y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"}))))))))))," to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"y"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"max_y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"})))))))))),"to check how many points are greater than ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"p"),(0,m.kt)("mi",{parentName:"msub"},"x"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p_x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))))),"."," "),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> countRectangles(vector<vector<int>>& rectangles, vector<vector<int>>& points) {\n        int mxY = 101;\n        vector<int> ans;\n        vector<vector<int>> m(mxY);\n        // use y as a key\n        for (auto& r : rectangles) m[r[1]].push_back(r[0]);\n        // sort m[i]\n        for (int i = 0; i < mxY; i++) sort(m[i].begin(), m[i].end());\n        // iterate each point\n        for (auto& p : points) {\n            int cnt = 0;\n            // iterate from p[1] to mxY \n            // as these points are covering p[1]\n            for (int y = p[1]; y < mxY; y++) {\n                // find the first position that p[0] can fit into\n                // elements behind this position can form rectangles \n                // covering (p[0], p[1])\n                cnt += m[y].end() - lower_bound(m[y].begin(), m[y].end(), p[0]);\n            }\n            // push the result to ans\n            ans.push_back(cnt);\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);