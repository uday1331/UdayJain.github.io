(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"blogsQuery",(function(){return m}));n("91GP");var r=n("q1tI"),a=n.n(r),i=n("7cJT"),l=n("BMxC"),c=n("qWyU"),o=n("sK1y"),s=n("Yn+B"),u=n("+Cyc"),d=function(e){var t=e.title,n=e.path,r=e.excerpt,s=e.date;return a.a.createElement(l.a,null,a.a.createElement(i.b,{to:n},a.a.createElement(c.a,{size:"md",marginBottom:1},t)),a.a.createElement(o.a,{fontSize:"xs",fontWeight:"light"},s),a.a.createElement(o.a,{fontSize:"sm",fontWeight:"light"},r))},m="166880357";t.default=function(e){var t=e.data.allMdx.edges.map((function(e){return e.node.frontmatter}));return a.a.createElement(i.c,null,a.a.createElement(i.e,{title:"Projects"}),a.a.createElement(s.a,{spacing:3},t.map((function(e,t){return a.a.createElement(u.a,{marginBottom:4},a.a.createElement(d,Object.assign({key:t},e)))}))))}},"Yn+B":function(e,t,n){"use strict";n("bWfx"),n("0l/t"),n("9VmF"),n("rvZc");var r=n("pVnL"),a=n.n(r),i=n("8OQS"),l=n.n(i),c=n("qKvR"),o=n("q1tI"),s=n("Weur"),u=n("BMxC");t.a=function(e){var t,n=e.direction,r=e.isInline,i=void 0!==r&&r,d=e.isReversed,m=void 0!==d&&d,f=e.children,p=e.align,v=e.justify,g=e.spacing,h=void 0===g?2:g,b=e.shouldWrapChildren,E=l()(e,["direction","isInline","isReversed","children","align","justify","spacing","shouldWrapChildren"]),w=m||n&&n.endsWith("reverse"),y=i||n&&n.startsWith("row");y&&(t="row"),w&&(t=i?"row-reverse":"column-reverse"),n&&(t=n),y||w||n||(t="column");var W=o.Children.toArray(f).filter(o.isValidElement);return Object(c.d)(s.a,a()({align:p,justify:v,direction:t},E),W.map((function(e,t){var n,r,i=W.length===t+1,l=y?((n={})[w?"ml":"mr"]=i?null:h,n):((r={})[w?"mt":"mb"]=i?null:h,r);return b?Object(c.d)(u.a,a()({d:"inline-block"},l,{key:"stack-box-wrapper-"+t}),e):Object(o.cloneElement)(e,l)})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-d449838ab1f623f46577.js.map