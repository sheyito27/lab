"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10492],{17440:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(51895),i=r(91025),a=r(96353),o=r(14041),l=r(54357),s=r(19189),c=r(86033),d=r(90028),u=r(33818),p=r(6061),h=r(44116),v=r(38827),x=r(72365),m=r(90076),f=r(8766),g=r(86310),b=r(18526);function w(e){return(0,b.Ay)("MuiCollapse",e)}(0,g.A)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var y=r(31085),R=e=>{var{orientation:t,classes:r}=e;return(0,d.A)({root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]},w,r)},k=(0,u.Ay)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{var{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})((0,h.A)(e=>{var{theme:t}=e;return{height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:e=>{var{ownerState:t}=e;return"exited"===t.state&&!t.in&&"0px"===t.collapsedSize},style:{visibility:"hidden"}}]}})),_=(0,u.Ay)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),j=(0,u.Ay)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),A=o.forwardRef(function(e,t){var r=(0,v.b)({props:e,name:"MuiCollapse"}),{addEndListener:d,children:u,className:h,collapsedSize:g="0px",component:b,easing:w,in:A,onEnter:S,onEntered:C,onEntering:E,onExit:T,onExited:N,onExiting:z,orientation:W="vertical",style:I,timeout:F=x.p0.standard,TransitionComponent:L=s.Ay}=r,M=(0,a._)(r,["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"]),D=(0,i._)((0,n._)({},r),{orientation:W,collapsedSize:g}),K=R(D),P=(0,p.A)(),B=(0,c.A)(),H=o.useRef(null),O=o.useRef(),V="number"==typeof g?"".concat(g,"px"):g,U="horizontal"===W,J=U?"width":"height",X=o.useRef(null),q=(0,f.A)(t,X),G=e=>t=>{if(e){var r=X.current;void 0===t?e(r):e(r,t)}},Z=()=>H.current?H.current[U?"clientWidth":"clientHeight"]:0,$=G((e,t)=>{H.current&&U&&(H.current.style.position="absolute"),e.style[J]=V,S&&S(e,t)}),Q=G((e,t)=>{var r=Z();H.current&&U&&(H.current.style.position="");var{duration:n,easing:i}=(0,m.c)({style:I,timeout:F,easing:w},{mode:"enter"});if("auto"===F){var a=P.transitions.getAutoHeightDuration(r);e.style.transitionDuration="".concat(a,"ms"),O.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style[J]="".concat(r,"px"),e.style.transitionTimingFunction=i,E&&E(e,t)}),Y=G((e,t)=>{e.style[J]="auto",C&&C(e,t)}),ee=G(e=>{e.style[J]="".concat(Z(),"px"),T&&T(e)}),et=G(N),er=G(e=>{var t=Z(),{duration:r,easing:n}=(0,m.c)({style:I,timeout:F,easing:w},{mode:"exit"});if("auto"===F){var i=P.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),O.current=i}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style[J]=V,e.style.transitionTimingFunction=n,z&&z(e)});return(0,y.jsx)(L,(0,i._)((0,n._)({in:A,onEnter:$,onEntered:Y,onEntering:Q,onExit:ee,onExited:et,onExiting:er,addEndListener:e=>{"auto"===F&&B.start(O.current||0,e),d&&d(X.current,e)},nodeRef:X,timeout:"auto"===F?null:F},M),{children:(e,t)=>(0,y.jsx)(k,(0,i._)((0,n._)({as:b,className:(0,l.A)(K.root,h,{entered:K.entered,exited:!A&&"0px"===V&&K.hidden}[e]),style:(0,n._)({[U?"minWidth":"minHeight"]:V},I),ref:q},t),{ownerState:(0,i._)((0,n._)({},D),{state:e}),children:(0,y.jsx)(_,{ownerState:(0,i._)((0,n._)({},D),{state:e}),className:K.wrapper,ref:H,children:(0,y.jsx)(j,{ownerState:(0,i._)((0,n._)({},D),{state:e}),className:K.wrapperInner,children:u})})}))}))});A&&(A.muiSupportAuto=!0);let S=A},15815:(e,t,r)=>{r.d(t,{J:()=>o});var n=r(51895),i=r(31085),a=(0,r(75531).A)((0,i.jsx)("path",{d:"M20.533 10.533l-1.867-1.867-8 8 8 8 1.867-1.867-6.133-6.133 6.133-6.133z"}),"ChevronLeft.svg"),o=e=>(0,i.jsx)(a,(0,n._)({viewBox:"0 0 32 32"},e))},69465:(e,t,r)=>{r.d(t,{k:()=>d});var n=r(31085),i=r(15501),a=r(86077),o=r(15815),l=r(54080),s=r(14041),c=(0,r(33497).n9)()((e,t)=>{var{border:r,palette:{background:n,buttons:i},tokens:{zIndex:o,size:l,spacing:s}}=e,{titleWidth:c}=t,d=(0,a.A)(l.density.high)-(0,a.A)(s.xxs);return{carousel:{position:"relative",width:"calc(100% - ".concat(c,"px)")},slider:{display:"flex",overflowX:"auto",margin:"0 auto",scrollBehavior:"smooth",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"}},navigation:{position:"absolute",top:s.s,zIndex:o["2"],margin:0,padding:0,backgroundColor:n.default,cursor:"pointer",border:0,borderRadius:r.width.m,textAlign:"center",boxSizing:"border-box",height:d,minWidth:d,"&:hover":{backgroundColor:i.appliedFilters.selected}},prev:{left:0},next:{right:0}}}),d=e=>{var{title:t,children:r,classProps:a}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(0),p=(0,s.useRef)(null),{clientWidth:h=0}=(null==p?void 0:p.current)||{},{classes:v,cx:x}=c({titleWidth:h}),[m,f]=(0,s.useState)(!1),[g,b]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(d.current){var{scrollWidth:e,offsetWidth:t}=d.current;u.current&&d.current.scrollTo(0,0),b(e>t)}},[d,r]);var w=()=>{if(d.current){var{scrollLeft:e,clientWidth:t,scrollWidth:r}=d.current;u.current=e,f(e>0),b(Math.ceil(e+t)<r)}};return(0,s.useEffect)(()=>(window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}),[]),(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)("span",{ref:p,children:t}),(0,n.jsxs)("div",{className:v.carousel,"data-automation":"related-carousel",children:[m&&(0,n.jsx)(i.A,{"aria-label":"prev",className:x(v.navigation,v.prev,null==a?void 0:a.navigation),onClick:()=>{if(d.current){var{offsetWidth:e}=d.current;u.current-e>=0?d.current.scrollTo(u.current-e,0):d.current.scrollTo(0,0)}},children:(0,n.jsx)(o.J,{})}),(0,n.jsx)("div",{id:"slider",ref:d,className:v.slider,onScroll:w,children:r}),g&&(0,n.jsx)(i.A,{"aria-label":"next",className:x(v.navigation,v.next,null==a?void 0:a.navigation),onClick:()=>{if(d.current){var{offsetWidth:e,scrollWidth:t}=d.current;u.current+e<=t?d.current.scrollTo(u.current+e,0):d.current.scrollTo(t,0)}},children:(0,n.jsx)(l.c,{})})]})]})}},23084:(e,t,r)=>{r.d(t,{r:()=>c});var n=r(51895),i=r(31085),a=r(27695),o=r(89522),l=r(14041),s=(0,r(33497).n9)()((e,t)=>{var{palette:r,tokens:{spacing:i},transitions:a,zIndex:o,breakpoints:l}=e,{stickyTopOffset:s,disableTopPadding:c,disableSpacing:d}=t;return{filterRow:(0,n._)({[l.up("md")]:{marginLeft:"-".concat(i.m),marginRight:"-".concat(i.m)},[l.down("md")]:{paddingLeft:0,paddingRight:0},background:r.background.default,display:"flex",flexDirection:"column",position:"sticky",top:s-1,zIndex:o.stickySearchbar,marginTop:i.xxs},!d&&{padding:"".concat(c?0:i.xxs," ").concat(i.m," ").concat(i.xs)}),scrollShadow:{boxShadow:"0 2px 2px 0 ".concat(r.border1Color),borderRadius:0,transition:"box-shadow ".concat(a.duration.standard,"ms ease")}}}),c=(0,l.forwardRef)(function(e,t){var{children:r,isStaticOverride:n,stickyTopOffset:c=0,disableTopPadding:d=!1,disableSpacing:u=!1}=e,{classes:p,cx:h}=s({stickyTopOffset:c,disableTopPadding:d,disableSpacing:u}),v=(0,l.useRef)(null),x=(0,l.useRef)(null);(0,l.useEffect)(()=>{var e;x.current=null==v?void 0:null===(e=v.current)||void 0===e?void 0:e.offsetTop},[]);var m=(0,a.A)({disableHysteresis:!0,threshold:null==x?void 0:x.current});return n?r:(0,i.jsx)(o.A,{ref:e=>{t&&("function"==typeof t?t(e):t.current=e),v.current=e},className:h(p.filterRow,{[p.scrollShadow]:m}),children:r})})},31141:(e,t,r)=>{r.r(t),r.d(t,{RelatedSearchesRow:()=>L});var n=r(31085),i=r(17440),a=r(23084),o=r(51895),l=r(64669),s=r(67734),c=r(3319),d=r(69465),u=r(65684),p=r(91025),h=r(71566),{thumbsRewriteHostname:v}=(0,r(37858).K)(),x=e=>{var t,r,n,i,{keywords:a=[],keywordsMetadata:l={}}=e;return(null===(t=l[null!==(n=null==a?void 0:a[0])&&void 0!==n?n:""])||void 0===t?void 0:t.selectedFrame)&&(null===(r=l[null!==(i=null==a?void 0:a[0])&&void 0!==i?i:""])||void 0===r?void 0:r.target)?{data:null==a?void 0:a.reduce((e,t)=>{var r=l[t];return(0,p._)((0,o._)({},e),{[t]:(0,p._)((0,o._)({},r),{thumbnailUrl:(null==r?void 0:r.thumbnail)?"https://".concat(v,"/shutterstock/videos/").concat(null==r?void 0:r.thumbnail,"/thumb/").concat(null==r?void 0:r.selectedFrame,".jpg"):""})})},{})}:{data:null==a?void 0:a.reduce((e,t)=>{var r,n=l[t];return(0,p._)((0,o._)({},e),{[t]:(0,p._)((0,o._)({},n),{thumbnailUrl:null!==(r=(0,h.EK)(null==n?void 0:n.thumbnail))&&void 0!==r?r:""})})},{})}},m=r(14041),f=e=>{var t=(0,m.useRef)(null),r=(0,m.useCallback)(e,[e]);return(0,m.useEffect)(()=>{if(t&&t.current){var{complete:r,naturalHeight:n}=t.current;r&&0===n&&e()}},[e]),{ref:t,onError:r}},g=r(52571),b=r(45182),w=r(74875),y=r(18923),R=r(5813),k=r(50896),_=r(33066),j=r(66042),A=r(89761),S=r(79487),C=r(12580),E=r(42432),T=r(80546),N=r(37333),z=(0,r(33497).n9)()((e,t)=>{var{breakpoints:r,palette:n,tokens:{border:i,fontWeight:a,spacing:l}}=e,{shouldShowThumbnail:s,onADP:c}=t,d=c?39:31,u=c?9:4;return{carouselWrapper:{display:"flex",alignItems:"center"},centerKeywords:{display:"flex",justifyContent:"center",flexWrap:"wrap"},link:{"&:focus-visible":{fontWeight:a.bold,outline:0}},searchIcon:{height:"".concat(16,"px"),width:"".concat(d,"px"),color:"".concat(n.text.secondary," !important")},standardKeyword:{padding:l.s,borderRadius:l.xs,border:"solid ".concat(i.width.s," ").concat(n.border1Color),display:"inline-block"},pillsTitle:{fontWeight:"bold",paddingRight:l.s,verticalAlign:"middle",alignContent:"center",textWrap:"nowrap"},pillRoot:(0,o._)({fontFamily:"Roboto,Roboto-fallback,Arial",borderRadius:l.s,marginRight:l.xs,marginTop:l.s,marginBottom:l.s,marginLeft:l.xs},s?{height:"38px",backgroundColor:n.background.default,fontSize:"15px"}:{},c?{height:"57px",margin:"0px 6px 6px 0px"}:{}),pillThumbnail:{height:"".concat(d+u,"px"),width:"".concat(d+u,"px"),objectPosition:"50% 75%",objectFit:"cover"},pillThumbnailWrapper:(0,o._)({height:"".concat(d,"px"),width:"".concat(d,"px"),overflow:"hidden",border:"solid ".concat(i.width.s," ").concat(n.border1Color)},c?{maxHeight:"85%",borderRadius:i.radius.l}:{borderRadius:"50%"}),title:{[r.down("md")]:{display:"none"}}}}),W=e=>{var{classesProps:t={},label:r,href:i,variant:a,shouldShowThumbnail:c=!1,thumb:d="",source:p="",index:h,onADP:v}=e,x=(0,j.a)(),b=(0,_.V)({originalUrl:i,newKey:w.V8,newValue:x}),[A,S]=(0,m.useState)(c),{classes:C,cx:W}=z({shouldShowThumbnail:c,onADP:v}),{classes:I}=(0,E.e)(),F={root:"".concat(W(I.chipFilter)," ").concat(W(C.pillRoot)),deleteIcon:I.chipFilterDeleteIcon},{locale:L}=(0,y.PZ)(),M=(0,T.BB)(r,L),D="".concat(g._cN,".").concat(g.Arh),K=(0,R.C)(),{setters:{setSearchComponent:P}}=(0,k.K6)(),B=(0,n.jsx)(N.Search,{className:C.searchIcon}),H=(0,n.jsx)("div",{className:W(C.pillThumbnailWrapper),children:(0,n.jsx)("img",(0,o._)({alt:"",src:d,className:C.pillThumbnail},f(()=>{S(!1)})))});return(0,n.jsx)(n.Fragment,{children:""===i?(0,n.jsx)(l.A,{className:W(C.standardKeyword),children:M}):(0,n.jsx)(u.N,{clickAnalyticsLabel:D,clickTrackOptions:{label:r,source:p,index:h},href:b,onClick:()=>{var e;(null==K?void 0:null===(e=K.current)||void 0===e?void 0:e.value)&&(K.current.value=r),P(w.Nh.RELATED)},className:W(C.link,t.keyItemLink),"data-automation":"RelatedSearch_".concat(r.split(" ").join("")),target:v?"_blank":"_self",children:(0,n.jsx)(s.A,{classes:F,label:M,variant:a,clickable:!0,tabIndex:-1,icon:A&&d?H:B,role:void 0})})})},I=e=>{var{classesProps:t,keywords:r,limit:i,getPathProps:a,variant:l,shouldShowThumbnail:s,keywordsMetadata:c,onADP:d=!1}=e,{assetType:u}=(0,C.BF)();return(0,m.useMemo)(()=>r&&[...new Set(r)].slice(0,i||r.length).filter(Boolean).map((e,r)=>{var i,p,[h]=a((0,o._)({term:e},[b.vo,b.$E,b.kc].includes(u)?{[w.x3]:u}:{}),u);return(0,n.jsx)(W,{classesProps:t,label:e,variant:l,href:h,shouldShowThumbnail:s,thumb:null==c?void 0:null===(i=c["".concat(e)])||void 0===i?void 0:i.thumbnailUrl,source:null==c?void 0:null===(p=c["".concat(e)])||void 0===p?void 0:p.source,index:r,onADP:d},e)}),[r,i,a,u,t,l,s,c,d])},F=e=>{var t,{classesProps:r,isCentered:i,keywords:a=[],getPathProps:o,limit:s,variant:u,shouldShowThumbnail:p,keywordsMetadata:h,isCarousel:v}=e,f=(null===(t=x({keywordsMetadata:h,keywords:a}))||void 0===t?void 0:t.data)||{},{labels:g}=(0,A.s)({namespace:c.JWG,translationKeys:{title:"image:related_searches"}}),{classes:b,cx:w}=z({shouldShowThumbnail:p}),y=(0,S.a)(),R=(0,m.useRef)(null),k=I({classesProps:r,keywords:a,isCentered:i,getPathProps:o,limit:s,variant:u,shouldShowThumbnail:p,keywordsMetadata:f}),_=v?d.k:m.Fragment;return k?(0,n.jsx)("div",{className:w({[b.centerKeywords]:i},{[b.carouselWrapper]:v}),"data-automation":"RelatedSearchesList",children:y?(0,n.jsx)("div",{ref:R,onClick:()=>{(null==R?void 0:R.current)&&R.current.scrollTo({left:0,behavior:"smooth"})},style:{display:"flex",overflowX:"scroll",marginRight:0},children:k}):(0,n.jsx)(_,{title:(0,n.jsx)(l.A,{component:"span",className:w(b.pillsTitle,b.title),children:g.title}),children:k})}):null},L=(0,m.forwardRef)(function(e,t){var{stickyTopOffset:r=0,keywords:o=[],getPathProps:l=()=>{},shouldShowThumbnail:s=!1,keywordsMetadata:c={},isCarousel:d=!1}=e,u=(0,m.useRef)();return(null==o?void 0:o.length)>0?(0,n.jsx)(a.r,{ref:t,isStaticOverride:void 0,stickyTopOffset:r,disableTopPadding:!0,children:(0,n.jsx)(i.A,{ref:u,in:!1,collapsedSize:48,children:(0,n.jsx)(F,{getPathProps:l,keywords:o,shouldShowThumbnail:s,keywordsMetadata:c,classesProps:{},variant:void 0,isCentered:!1,limit:null,isCarousel:d})})}):(0,n.jsx)(n.Fragment,{})})},33066:(e,t,r)=>{r.d(t,{V:()=>n});var n=e=>{var{originalUrl:t,newKey:r,newValue:n}=e;if(!r||!n)return t;var i=-1!==t.indexOf("?");return"".concat(t).concat(i?"&":"?").concat(r,"=").concat(n)}},66042:(e,t,r)=>{r.d(t,{a:()=>a});var n=r(74875),i=r(31242),a=()=>{var{query:{[n.V8]:e}}=(0,i.useRouter)();return e}}}]);
//# sourceMappingURL=RelatedSearchesRow.5eca0cc6b76b8b83.js.map