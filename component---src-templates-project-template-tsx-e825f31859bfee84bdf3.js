(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3xd2":function(e,t,n){"use strict";n("91GP");var r=n("q1tI"),c=n.n(r),o=n("mf32"),a=n("sK1y"),i=n("qWyU"),u=n("KEox"),l=n("pVnL"),s=n.n(l),f=n("8OQS"),p=n.n(f),b=n("qKvR"),y=(n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("lSNA")),O=n.n(y),m=n("8hg0"),d=n("CjxU");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){var t,n,r,c,o,a=e.variant,i=e.colorMode;switch(a){case"solid":return(t=e,n=t.theme.colors,r=t.color,c=n[r]&&n[r][500],o=Object(m.a)(c,.6),{light:{bg:Object(m.c)(r,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}})[i];case"subtle":return function(e){var t=e.theme.colors,n=e.color,r=t[n]&&t[n][200],c=Object(m.b)(r)[300];return{light:{bg:Object(m.c)(n,100),color:Object(m.c)(n,800)},dark:{bg:c,color:Object(m.c)(n,200)}}}(e)[i];case"outline":return function(e){var t=e.theme.colors,n=e.color,r=t[n]&&t[n][200],c=Object(m.a)(r,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(t[n]&&t[n][500]),color:Object(m.c)(n,500)},dark:{boxShadow:"inset 0 0 0px 1px "+c,color:c}}}(e)[i];default:return{}}},h=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{theme:Object(d.b)(),colorMode:Object(o.b)().colorMode});return g(t)},v=n("BMxC"),w=n("D7Da"),E=function(e){var t=e.variantColor,n=void 0===t?"gray":t,r=p()(e,["variantColor"]);Object(w.b)("Code",n);var c=h({variant:"subtle",color:n});return Object(b.d)(v.a,s()({as:"code",display:"inline-block",fontFamily:"mono",fontSize:"sm",px:"0.2em",rounded:"sm"},c,r))},x=n("pboS"),P=(n("bWfx"),n("w0db"),n("+Cyc")),S=Object(r.forwardRef)((function(e,t){var n=e.styleType,c=void 0===n?"none":n,o=e.stylePos,a=void 0===o?"inside":o,i=e.spacing,u=e.children,l=p()(e,["styleType","stylePos","spacing","children"]),f=Object(w.a)(u);return Object(b.d)(v.a,s()({ref:t,as:"ul",listStyleType:c,listStylePosition:a},l),f.map((function(e,t){return t+1===r.Children.count(u)?e:Object(r.cloneElement)(e,{spacing:i})})))}));S.displayName="List";var D=Object(r.forwardRef)((function(e,t){var n=e.spacing,r=p()(e,["spacing"]);return Object(b.d)(P.a,s()({ref:t,as:"li",mb:n},r))}));D.diplayName="ListItem";var R=S,M=n("bQFp"),k=n("wynG");n.d(t,"a",(function(){return q}));var q=function(){var e=Object(o.b)().colorMode;return{p:function(e){return c.a.createElement(a.a,Object.assign({mb:2},e))},h1:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h1",size:"2xl"},e))},h2:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h2",size:"xl"},e))},h3:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h3",size:"l"},e))},h4:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h4",size:"md"},e))},h5:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h5",size:"sm"},e))},h6:function(e){return c.a.createElement(i.a,Object.assign({my:4,as:"h6",size:"xs"},e))},thematicBreak:u.a,blockquote:function(e){return c.a.createElement(E,Object.assign({p:2},e))},pre:function(e){return c.a.createElement(a.a,Object.assign({as:"pre"},e))},em:function(e){return c.a.createElement(a.a,Object.assign({as:"em"},e))},strong:function(e){return c.a.createElement(a.a,Object.assign({as:"strong"},e))},delete:function(e){return c.a.createElement(a.a,Object.assign({as:"del"},e))},inlineCode:E,a:function(t){return c.a.createElement(x.a,Object.assign({color:Object(k.c)(e)},t,{isExternal:!0}))},code:function(e){return c.a.createElement("pre",null,c.a.createElement(E,Object.assign({p:2},e)))},ul:function(e){return c.a.createElement(R,Object.assign({pl:4,styleType:"disc"},e))},ol:function(e){return c.a.createElement(R,Object.assign({pl:4,as:"ol",styleType:"decimal"},e))},li:D,img:M.a}};t.b=q},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),c=n("Kuth"),o=n("2OiF"),a=n("y3w9"),i=n("0/R4"),u=n("eeVq"),l=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,f=u((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),p=!u((function(){s((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){o(e),a(t);var n=arguments.length<3?e:o(arguments[2]);if(p&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,b=c(i(u)?u:Object.prototype),y=Function.apply.call(e,b,t);return i(y)?y:b}})},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=n("q1tI"),f=n("7ljp"),p=f.useMDXComponents,b=f.mdx,y=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,o=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["scope","components","children"]),i=p(n),l=y(t),f=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:b},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return c(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,t]);return s.createElement(f,u({components:i},o))}},m4C8:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),c=n.n(r),o=n("qWyU"),a=n("sK1y"),i=n("KEox"),u=n("A2+M"),l=n("7ljp"),s=n("7cJT"),f=n("3xd2"),p="969482260";t.default=function(e){var t=e.data.mdx,n=t.frontmatter,r=n.title,p=n.date,b=n.description,y=t.body;return c.a.createElement(s.c,null,c.a.createElement(s.e,{title:r,description:b}),c.a.createElement(o.a,{size:"xl"},r),c.a.createElement(a.a,null,p),c.a.createElement(i.a,null),c.a.createElement(l.MDXProvider,{components:Object(f.b)()},c.a.createElement(u.MDXRenderer,null,y)))}}}]);
//# sourceMappingURL=component---src-templates-project-template-tsx-e825f31859bfee84bdf3.js.map