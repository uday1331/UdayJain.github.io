(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8utx":function(e,t,a){"use strict";a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return b})),a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return p}));var n=a("uDP2"),r=a.n(n),i=a("j8BX"),l=a.n(i),c=a("q1tI"),o=a.n(c),u=a("w0db"),d=a("sK1y"),m=a("BMxC"),s=a("Weur"),f=Object(c.forwardRef)((function(e,t){return o.a.createElement(d.a,l()({ref:t,fontWeight:"medium",fontSize:"sm"},e))}));f.displayName="StatLabel";var p=Object(c.forwardRef)((function(e,t){return o.a.createElement(d.a,l()({ref:t,fontSize:"sm",opacity:"0.8",mb:2},e))}));p.displayName="StatHelpText";var b=function(e){return o.a.createElement(d.a,l()({fontSize:"2xl",verticalAlign:"baseline",fontWeight:"semibold"},e))},E={increase:{name:"triangle-up",color:"green.400"},decrease:{name:"triangle-down",color:"red.400"}};Object(c.forwardRef)((function(e,t){var a=e.type,n=void 0===a?"increase":a,i=e["aria-label"],c=r()(e,["type","aria-label"]);return o.a.createElement(u.a,l()({ref:t,mr:1,size:"14px",verticalAlign:"middle","aria-label":i},E[n],c))})).displayName="StatArrow";var v=Object(c.forwardRef)((function(e,t){return o.a.createElement(m.a,l()({ref:t,flex:"1",pr:4,position:"relative"},e))}));v.displayName="Stat",Object(c.forwardRef)((function(e,t){return o.a.createElement(s.a,l()({ref:t,flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"},e))})).displayName="StatGroup"},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("ma3e"),l=a("7cJT"),c=a("8utx"),o=a("pboS"),u=a("Weur"),d=a("BMxC"),m=a("sK1y"),s=a("Yn+B"),f=a("KEox"),p=a("Wbzz"),b=function(e){var t=e.attribute,a=e.detail,n=e.additionalInfo;return r.a.createElement(c.a,null,r.a.createElement(c.c,null,t),r.a.createElement(c.d,null,a),n&&r.a.createElement(c.b,null,n))},E=function(e){var t=e.text,a=e.url,n=e.icon;return r.a.createElement(o.a,{href:a,paddingRight:2},r.a.createElement(u.a,{align:"center"},r.a.createElement(d.a,{as:n,size:"15px",marginRight:1}),r.a.createElement(m.a,null,t)))};t.default=function(){var e=Object(p.useStaticQuery)("3544004261").site.siteMetadata,t=e.linkedin,a=e.github,n=e.email,c=e.twitter;return r.a.createElement(l.c,null,r.a.createElement(l.e,{title:"Home"}),r.a.createElement(s.a,{shouldWrapChildren:!0},r.a.createElement(b,{attribute:"Currently",detail:"KM.ON",additionalInfo:"Software Engineer Intern"}),r.a.createElement(f.a,null),r.a.createElement(b,{attribute:"Alma Mater",detail:"University of Hong Kong",additionalInfo:"Class of 2022"})),r.a.createElement(f.a,null),r.a.createElement(m.a,{fontSize:"sm",fontWeight:"medium",marginY:2},"Get In Touch"),r.a.createElement(u.a,{justify:"space-between",wrap:"wrap"},r.a.createElement(E,{url:"mailto:"+n,text:"Email",icon:i.a}),r.a.createElement(E,{url:"https://linkedin.com/in/"+t,text:"LinkedIn",icon:i.c}),r.a.createElement(E,{url:"https://github.com/"+a,text:"GitHub",icon:i.b}),r.a.createElement(E,{url:"https://twitter.com/"+c,text:"Twitter",icon:i.d})))}},"Yn+B":function(e,t,a){"use strict";var n=a("j8BX"),r=a.n(n),i=a("uDP2"),l=a.n(i),c=a("qKvR"),o=a("q1tI"),u=a("Weur"),d=a("BMxC");t.a=function(e){var t,a=e.direction,n=e.isInline,i=void 0!==n&&n,m=e.isReversed,s=void 0!==m&&m,f=e.children,p=e.align,b=e.justify,E=e.spacing,v=void 0===E?2:E,g=e.shouldWrapChildren,w=l()(e,["direction","isInline","isReversed","children","align","justify","spacing","shouldWrapChildren"]),h=s||a&&a.endsWith("reverse"),y=i||a&&a.startsWith("row");y&&(t="row"),h&&(t=i?"row-reverse":"column-reverse"),a&&(t=a),y||h||a||(t="column");var x=o.Children.toArray(f).filter(o.isValidElement);return Object(c.d)(u.a,r()({align:p,justify:b,direction:t},w),x.map((function(e,t){var a,n,i=x.length===t+1,l=y?((a={})[h?"ml":"mr"]=i?null:v,a):((n={})[h?"mt":"mb"]=i?null:v,n);return g?Object(c.d)(d.a,r()({d:"inline-block"},l,{key:"stack-box-wrapper-"+t}),e):Object(o.cloneElement)(e,l)})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4f29dfc1f9fabb1e5072.js.map