(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"FE-knowledgebase"}}}}')},JZGV:function(e,t,a){},L12J:function(e,t,a){"use strict";var n=a("IRj2"),l=a("q1tI"),r=a.n(l),i=(a("pIFo"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("SRMJ")),c=a("Wbzz"),s=function(e){var t=e.tag;return r.a.createElement(c.StaticQuery,{query:"995650421",render:function(e){var a=[];return Object.keys(e.allStrapiRecipe.edges).forEach((function(n){e.allStrapiRecipe.edges[n].node.Tags===t&&a.push(r.a.createElement("h3",null,r.a.createElement(c.Link,{to:"/recipes/"+e.allStrapiRecipe.edges[n].node.Title.replace(/\s+/g,"-").toLowerCase()},e.allStrapiRecipe.edges[n].node.Title)))})),a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Related Recipes"),a):""},data:i})},d=(a("JZGV"),function(e){var t=e.siteTitle;return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"site-header__inner"},r.a.createElement("h1",null,r.a.createElement(c.Link,{to:"/"},t))))});d.defaultProps={siteTitle:""};var o=d,u=function(e){var t=e.children,a=e.tag,l=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:l.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),a?r.a.createElement("aside",null,r.a.createElement(s,{tag:a})):"",r.a.createElement("footer",null,"©"," ",(new Date).getFullYear(),","," ","Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))};u.defaultProps={tag:!1};t.a=u},SRMJ:function(e){e.exports=JSON.parse('{"data":{"allStrapiRecipe":{"edges":[{"node":{"Title":"First Test Recipe","id":"Recipe_1","Tags":"drupal"}},{"node":{"Title":"Dark Chocolate Brownies","id":"Recipe_2","Tags":"accessibility"}},{"node":{"Title":"Props and PropTypes in React","id":"Recipe_3","Tags":"accessibility"}},{"node":{"Title":"Demystifying the A11Y Audit","id":"Recipe_4","Tags":null}},{"node":{"Title":"Installing Node PatternLab from scratch","id":"Recipe_5","Tags":"styleguides"}}]}}}')},"r/XA":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("pIFo");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("L12J");t.default=function(e){var t=e.data;return l.a.createElement(i.a,null,l.a.createElement("h1",null,"Recipes and Shared Learnings"),l.a.createElement("p",null,"Placeholder description"),l.a.createElement("h2",null,"All Recipes"),l.a.createElement("ul",null,t.allStrapiRecipe.edges.map((function(e){return l.a.createElement("li",{key:e.node.id},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:"/recipes/"+e.node.Title.replace(/\s+/g,"-").toLowerCase()},e.node.Title)),l.a.createElement("p",null,e.node.Summary))}))))};var c="1612825517"}}]);
//# sourceMappingURL=component---src-pages-recipes-index-jsx-07fbaa6f0567d2c3c674.js.map