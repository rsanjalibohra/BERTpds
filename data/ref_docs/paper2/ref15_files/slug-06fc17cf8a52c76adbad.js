_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{41:function(e,t,n){n("j36g"),e.exports=n("o96c")},QOXl:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _}));var o=n("q1tI"),a=n.n(o),r=n("20a2"),c=n("g4pe"),i=n.n(c),s=n("EyDb"),p=n.n(s),u=n("Qyje"),g=n.n(u),l=n("eLAd"),d=n.n(l),m=n("F1wk"),h=n("Q3MV"),f=n("uNx/"),y=a.a.createElement,k=p()("MO7DWH9Y8C","e0088941fa8f9754226b97fa87a7c340");var w=function(e){if(!e.query&&1===e.page&&e.menu&&!e.menu.tags)return"";var t=e.menu.tags?"".concat(e.menu.tags.split(" ").map(encodeURIComponent).join("+"),"/"):"",n={};e.query&&(n.query=encodeURIComponent(e.query)),1!==e.page&&(n.page=e.page);var o=g.a.stringify(n,{addQueryPrefix:!0,arrayFormat:"repeat"});return"/tagged/".concat(t).concat(o)},b=function(e){var t=e&&e.match(/tagged\/(.*?)\/?$/),n=t[1].replace("/",""),o=(t&&(e.includes("?")?n.substring(0,n.indexOf("?")):n)||"").split("+").map(decodeURIComponent).join(" "),a=e&&e.includes("?")?g.a.parse(e.substring(e.indexOf("?")+1)):{},r=a.query,c=void 0===r?"":r,i=a.page,s=void 0===i?1:i;return{refinementList:{tags:[decodeURIComponent(o)]},page:s,query:decodeURIComponent(c),menu:{tags:decodeURIComponent(o)}}},_=!0;t.default=function(e){var t=e.data,n=e.error,a=e.headerData,c=Object(r.useRouter)(),s=Object(o.useState)(b(c.asPath)),p=s[0],u=s[1],g=Object(o.useState)(null),l=g[0],_=g[1];Object(o.useEffect)((function(){t&&t.slug!==p.menu.tags&&N(b(c.asPath))}),[c]);var N=function(e){clearTimeout(l),_(setTimeout((function(){c.push("/tagged/[slug]",function(e){return e?w(e):""}(e),{shallow:!0}).then((function(){return window.scrollTo(0,0)}))}),400)),u(e)};if(n)return y(m.a,null,y(i.a,null,y("meta",{key:"robots",name:"robots",content:"noindex, nofollow"})),y(f.default,n));if(c.isFallback)return y(m.a,{loading:!0},y(h.a,{loading:!0}));var v="https://og-image.hackernoon.vercel.app/**".concat(t.slug,"**").concat(t.description?"<br>".concat(d()(t.description,{length:100})):"",".png?theme=light&md=1&fontSize=").concat(!t.description||t.description.length<50?"72px":"48px","&images=https%3A%2F%2Fhackernoon.com%2Fhn-icon.png");return y(m.a,{headerData:a},y(i.a,null,y("title",null,"#".concat(t.slug," stories ").concat(1!==p.page?"- page ".concat(p.page):"")," | Hacker Noon"),y("meta",{key:"description",name:"description",content:t.description||"Read the latest ".concat(t.slug," stories on Hacker Noon, where 10k+ technologists publish stories for 4M+ monthly readers.")}),y("meta",{key:"monetization",name:"monetization",content:"$ilp.uphold.com/z7rXWqEwUBrf"}),y("meta",{key:"ogTitle",property:"og:title",content:"#".concat(t.slug," stories ").concat(1!==p.page?"- page ".concat(p.page):""," | Hacker Noon")}),y("meta",{key:"ogDescription",property:"og:description",content:t.description||"Read the latest ".concat(t.slug," stories on Hacker Noon, where 10k+ technologists publish stories for 4M+ monthly readers.")}),y("meta",{key:"ogImage",property:"og:image",content:v}),y("meta",{key:"ogUrl",property:"og:url",content:"https://hackernoon.com/".concat(t.slug)}),y("meta",{key:"twitterTitle",property:"twitter:title",content:"#".concat(t.slug," stories ").concat(1!==p.page?"- page ".concat(p.page):""," | Hacker Noon")}),y("meta",{key:"twitterDescription",property:"twitter:description",content:t.description||"Read the latest ".concat(t.slug," stories on Hacker Noon, where 10k+ technologists publish stories for 4M+ monthly readers.")}),y("meta",{key:"twitterImage",property:"twitter:image",content:v}),y("meta",{key:"twitterCard",name:"twitter:card",content:"summary_large_image"}),y("meta",{key:"twitterSite",name:"twitter:site",content:"@hackernoon"})),t&&y(h.a,{data:t,searchClient:k,onSearchStateChange:N,searchState:p,createURL:w}))}},o96c:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tagged/[slug]",function(){return n("QOXl")}])}},[[41,1,2,4,7,0,3,5,6,8,9,10,11,12,13,14,17,20,23]]]);
//# sourceMappingURL=[slug]-06fc17cf8a52c76adbad.js.map