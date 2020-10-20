(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(139)),o={id:"ubuntu",title:"Ubuntu 18.04"},c={unversionedId:"installation/ubuntu",id:"installation/ubuntu",isDocsHomePage:!1,title:"Ubuntu 18.04",description:"Server Installation",source:"@site/docs/installation/ubuntu.mdx",slug:"/installation/ubuntu",permalink:"/installation/ubuntu",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/ubuntu.mdx",version:"current",lastUpdatedBy:"davidkartuzinski",lastUpdatedAt:1603230690,sidebar:"docs",previous:{title:"Table of Contents",permalink:"/overview/table-of-contents"},next:{title:"CE Quick Start Installation",permalink:"/installation/ubuntu-quickstart"}},s=[{value:"Server Installation",id:"server-installation",children:[{value:"Minimum required server resources",id:"minimum-required-server-resources",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"server-installation"},"Server Installation"),Object(i.b)("p",null,"erxes gives you several guides and options for installing the erxes platform."),Object(i.b)("p",null,"The first guide is the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/installation/ubuntu-quickstart"}),"Community Edition Quick Start")," installation guide where we provide a script that automates most of the installation process. The second guide is a comprehensive, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/installation/ubuntu-step-by-step"}),"Community Edition Step by Step")," installation guide where developers can see exactly what is being installed and how."),Object(i.b)("p",null,"Most users will find the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/installation/ubuntu-quickstart"}),"Community Edition Quick Start")," installation to be more than sufficient. You can always upgrade at any time."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Ubuntu 18.04")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"These two installation guides are for installing erxes on ",Object(i.b)("strong",{parentName:"p"},"Ubuntu 18.04"),". They should work on any hosting provider that allows you to install Ubuntu 18.04."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Ubuntu 18.04")," is currently the only officially supported ",Object(i.b)("strong",{parentName:"p"},"Linux distro"),". Other distros such as ",Object(i.b)("em",{parentName:"p"},"Centos and Debian are not specifically supported"),", but some users are able to adapt the below commands to make ",Object(i.b)("strong",{parentName:"p"},"erxes")," work on them."))),Object(i.b)("h3",{id:"minimum-required-server-resources"},"Minimum required server resources"),Object(i.b)("p",null,"Each hosting company has slightly different server configurations and set-ups. Hosting companies such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linode.com/"}),"Linode.com"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://digitalocean.com"}),"Digital Ocean")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ec2"}),"AWS EC2")," offer many different server specifications and configuration options."),Object(i.b)("p",null,"To install and properly run your ",Object(i.b)("strong",{parentName:"p"},"erxes")," installation, you must meet these minimum requirements:"),Object(i.b)("h4",{id:"minimum-requirements-for-the-community-edition-quick-start-guide"},"Minimum requirements for the ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"/installation/ubuntu-quickstart"}),"Community Edition Quick Start")," guide"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ubuntu 18.04 installed and running"),Object(i.b)("li",{parentName:"ul"},"1 CPU"),Object(i.b)("li",{parentName:"ul"},"1GB RAM"),Object(i.b)("li",{parentName:"ul"},"ability to to SSH into the server")),Object(i.b)("h4",{id:"minimum-requirements-for-the-community-enterprise-edition-guide"},"Minimum requirements for the ",Object(i.b)("strong",{parentName:"h4"},"Community Enterprise Edition")," guide"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ubuntu 18.04 installed and running"),Object(i.b)("li",{parentName:"ul"},"2 CPUs"),Object(i.b)("li",{parentName:"ul"},"4GB RAM"),Object(i.b)("li",{parentName:"ul"},"ability to to SSH into the server")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use one-click installs")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.digitalocean.com/apps/erxes"}),"Digital Ocean Marketplace")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/marketplace/pp/B086MZ9FVS?qid=1594055516154&sr=0-1&ref_=srh_res_product_title"}),"AWS Marketplace")," for an even easier set-up experience."))),Object(i.b)("p",null,"Please install ",Object(i.b)("strong",{parentName:"p"},"erxes")," with either the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/installation/ubuntu-quickstart"}),"Community Edition Quick Start")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/installation/ubuntu-step-by-step"}),"Community Edition Step by Step")," instruction guides."))}l.isMDXComponent=!0}}]);