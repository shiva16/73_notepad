(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),i=(n(0),n(197)),o={id:"misc",title:"Miscellaneous"},c={id:"miscellaneous/misc",title:"Miscellaneous",description:"Publish Docusaurus(v1) site:",source:"@site/docs/miscellaneous/misc.md",permalink:"/docs/miscellaneous/misc",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/miscellaneous/misc.md",sidebar:"notes",previous:{title:"Quotes",permalink:"/docs/miscellaneous/quotes"},next:{title:"Table of Contents",permalink:"/docs/books/python_tricks_dan_bader/toc"}},s=[{value:"Publish Docusaurus(v1) site:",id:"publish-docusaurusv1-site",children:[]},{value:"Publish Docusaurus(v2) site:",id:"publish-docusaurusv2-site",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"publish-docusaurusv1-site"},"Publish Docusaurus(v1) site:"),Object(i.b)("p",null,"From ",Object(i.b)("inlineCode",{parentName:"p"},"website/")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"GIT_USER=USERNAME CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages # SSH\n# or\nGIT_USER=USERNAME CURRENT_BRANCH=master npm run publish-gh-pages # HTTPS\n")),Object(i.b)("h2",{id:"publish-docusaurusv2-site"},"Publish Docusaurus(v2) site:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"GIT_USER=USERNAME CURRENT_BRANCH=master USE_SSH=true yarn deploy # SSH\n# or\nGIT_USER=USERNAME CURRENT_BRANCH=master yarn deploy # HTTPS\n")),Object(i.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"pCloud WebDAV: ",Object(i.b)("inlineCode",{parentName:"li"},"https://webdav.pcloud.com")),Object(i.b)("li",{parentName:"ul"},"ProtonMail aliases: ",Object(i.b)("inlineCode",{parentName:"li"},"username+anything@protonmail.com")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Fully_qualified_domain_name"}),"Fully Qualifed Domain Name"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.dns-sd.org/TrailingDotsInDomainNames.html"}),"dns-sd.org"))))}l.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);