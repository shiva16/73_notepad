(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(197)),i={id:"suckless",title:"Suckless"},c={id:"linux/suckless",title:"Suckless",description:"Patching suckless tools",source:"@site/docs/linux/suckless.md",permalink:"/docs/linux/suckless",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/linux/suckless.md",sidebar:"notes",previous:{title:"Linux",permalink:"/docs/linux/linux"},next:{title:"Setting up a New Machine",permalink:"/docs/linux/setting-up"}},l=[{value:"Patching suckless tools",id:"patching-suckless-tools",children:[]},{value:"sent",id:"sent",children:[]},{value:"dmenu",id:"dmenu",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"patching-suckless-tools"},"Patching suckless tools"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For tarballs\n",Object(o.b)("inlineCode",{parentName:"p"},"patch -p1 < path/to/patch.diff"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For git repos\n",Object(o.b)("inlineCode",{parentName:"p"},"git apply path/to/patch.diff")))),Object(o.b)("h2",{id:"sent"},"sent"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make sure to install ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.suckless.org/farbfeld/"}),Object(o.b)("inlineCode",{parentName:"a"},"farbfeld"))," to\nhave images show up on slides.")),Object(o.b)("h2",{id:"dmenu"},"dmenu"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Had problems with dmenu-4.9 tarball installation. Seems to be related to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://git.suckless.org/dmenu/commit/db6093f6ec1bb884f7540f2512935b5254750b30.html"}),"this commit"),". Run the latest git to fix this.")))}u.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);