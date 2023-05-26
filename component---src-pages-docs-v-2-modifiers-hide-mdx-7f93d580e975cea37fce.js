(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{DoZK:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return l}));var n=t("k1TG"),c=t("8o2o"),s=(t("FdF9"),t("7ljp")),o=t("7oih"),p=t("KK5/"),r={},b={_frontmatter:r},i=o.b;function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(i,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"hide",style:{position:"relative"}},Object(s.b)("a",{parentName:"h1",href:"#hide","aria-label":"hide permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Hide"),Object(s.b)("p",null,"The ",Object(s.b)("code",{parentName:"p",className:"language-text"},"hide")," modifier lets you hide the popper if it appears to be detached from\nits reference element, or attached to nothing at all. This can occur when the\nreference element is inside a scrolling container and the popper is in a\ndifferent context."),Object(s.b)("x-ad",null),Object(s.b)("p",null,"It adds attributes to ",Object(s.b)("code",{parentName:"p",className:"language-text"},"state.attributes"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"data-popper-reference-hidden"),": This attribute gets applied to the popper when\nthe reference element is fully clipped and hidden from view, which causes the\npopper to appear to be attached to nothing."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"data-popper-escaped"),": This attribute gets applied when the popper escapes the\nreference element's boundary (and so it appears detached).")),Object(s.b)("p",null,"To hide the popper, apply some CSS:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"css"},Object(s.b)("pre",{parentName:"div",className:"language-css"},Object(s.b)("code",{parentName:"pre",className:"language-css"},Object(s.b)("span",{parentName:"code",className:"token comment"},"/* Hide the popper when the reference is hidden */"),"\n",Object(s.b)("span",{parentName:"code",className:"token selector"},"#popper[data-popper-reference-hidden]")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token property"},"visibility"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},":")," hidden",Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token property"},"pointer-events"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},":")," none",Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Note:")," avoid using properties like ",Object(s.b)("code",{parentName:"p",className:"language-text"},"display: none"),". This doesn't allow\nPopper to read its dimensions which can cause jitter issues.")),Object(s.b)("h2",{id:"demo",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Demo"),Object(s.b)("p",null,"The popper turns partially transparent when the popper escapes the reference's\nclipping container. It then becomes invisible when the reference is hidden\nentirely."),Object(s.b)(p.c,{mdxType:"HideDemo"}),Object(s.b)("h2",{id:"phase",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Phase"),Object(s.b)("p",null,Object(s.b)("code",{parentName:"p",className:"language-text"},"main")),Object(s.b)("h2",{id:"options",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Options"),Object(s.b)("p",null,"This modifier currently has no options."),Object(s.b)("h2",{id:"data",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Data"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(s.b)("pre",{parentName:"div",className:"language-flow"},Object(s.b)("code",{parentName:"pre",className:"language-flow"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"type")," Data ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  isReferenceHidden",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"boolean"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  hasPopperEscaped",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"boolean"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  referenceClippingOffsets",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," Offsets",Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  popperEscapeOffsets",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," Offsets",Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token comment"},"// A positive number indicates it's overflowing on that side"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"type")," Offsets ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  top",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"number"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  right",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"number"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  bottom",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"number"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  left",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token type tag"},"number"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-modifiers-hide-mdx-7f93d580e975cea37fce.js.map