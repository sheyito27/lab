"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49867],{39203:(i,e,l)=>{l.d(e,{u:()=>f});var d=l(31085),n=l(94869),r=l(87669),t=l(91758),o=l(33497),s=l(22869),a=l(97532),v=l(87295),u=l(86203),h=l(48983),c=l(14041),m=i=>"string"==typeof i,g=i=>{var{src:e,id:l,onLoadHandler:d,onErrorHandler:n,defaults:r={displaySkeleton:!1,isImageLoaded:!1}}=i,t=(0,c.useRef)(),[o,s]=(0,c.useState)(r.isImageLoaded),[a,v]=(0,c.useState)(!1),u=a||!e&&m(e),h=!o&&!u&&r.displaySkeleton;return(0,c.useEffect)(()=>{var i;(null===(i=t.current)||void 0===i?void 0:i.complete)&&!o&&e&&s(!0)},[o,e]),(0,c.useEffect)(()=>{d&&d(!h)},[h,d]),(0,c.useEffect)(()=>{u&&n&&n(l)},[u,n,l]),(0,c.useEffect)(()=>{e&&t.current&&t.current.src!==e&&s(!1)},[e]),{imgRef:t,setIsImageLoaded:s,setImageError:v,showBrokenImage:u,displaySkeleton:h}},p=i=>{var e,l,{src:n,alt:r,title:t,id:o,onLoadHandler:c=null,onErrorHandler:p,imgClassName:w=null,withLoadingSkeletons:f=!1,style:x,assetType:y,width:E=0,height:I=0,highQualitySrc:j,asset:S,loading:k="eager",showExperimentSEO1801:U}=i,{imgRef:b,setIsImageLoaded:L,setImageError:N,showBrokenImage:C,displaySkeleton:H}=g({src:n,id:o,onLoadHandler:c,onErrorHandler:p,defaults:{displaySkeleton:!s.DT.ENABLED,isImageLoaded:s.DT.ENABLED}}),R=!n&&!m(n);return C?(0,d.jsx)(a.o,{assetType:y,isMissing:R}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("picture",{children:[(0,u.OK)(S)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("source",{srcSet:n,media:"(min-width: 600px)"}),(0,d.jsx)("source",{srcSet:null==S?void 0:null===(l=S.displays)||void 0===l?void 0:null===(e=l["260Nw"])||void 0===e?void 0:e.src,media:"(max-width: 599.95px)"})]}),j&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("source",{srcSet:j,media:"(min-width: ".concat(v.s,"px)")}),(0,d.jsx)("source",{srcSet:n,media:"(max-width: ".concat(v.s,"px)")})]}),(0,d.jsx)("img",{ref:b,className:w,src:!U&&j||n,alt:r,"data-automation":"asset-thumbnail",title:t,onLoad:()=>L(!0),onError:()=>N(!0),style:x,width:E,height:I,loading:k})]}),f&&H&&(0,d.jsx)(h.m,{})]})},w=(0,o.n9)()({thumbnail:{width:"100.5%",height:"auto"}}),f=i=>{var e,l,{withSsr:o,asset:s,onLoadHandler:a,onErrorHandler:v,withLoadingSkeletons:u,imgClassName:h,style:c,useCssGrid:m,showExperimentSEO1801:g,loading:f,withHighResPreview:x}=i,{classes:y}=w(),E=(0,t.yQ)(s,void 0,x),{id:I,title:j,description:S}=s,k=j||S,U=h||y.thumbnail,b=(0,r.f0)(s),{width:L,height:N}=(0,t.Kq)(s),C=m&&(null==s?void 0:s.newWatermark)&&(null==s?void 0:null===(l=s.displays)||void 0===l?void 0:null===(e=l[n.pI])||void 0===e?void 0:e.src);return o&&!u?(0,d.jsx)("img",{className:U,src:E,alt:"",title:k,style:c,width:L,height:N,loading:f}):(0,d.jsx)(p,{id:I,alt:"",title:k,src:E,assetType:b,onLoadHandler:a,onErrorHandler:v,imgClassName:U,style:c,withLoadingSkeletons:u,width:L,height:N,highQualitySrc:C,showExperimentSEO1801:g,asset:s,loading:f})}},17745:(i,e,l)=>{l.r(e),l.d(e,{ImageGridItem:()=>t});var d=l(31085),n=l(80352),r=l(39203),t=i=>{var{asset:e,imgClassName:l=null,onLoadHandler:t=null,onErrorHandler:o=null,withSsr:s=!1,withLoadingSkeletons:a=!1,useCssGrid:v=!1,loading:u,showExperimentSEO1801:h,withHighResPreview:c}=i,m=(0,n.gG)(e);return(0,d.jsx)(r.u,{asset:m,onLoadHandler:t,onErrorHandler:o,imgClassName:l,withSsr:s,withLoadingSkeletons:a,useCssGrid:v,loading:u,showExperimentSEO1801:h,withHighResPreview:c})}},97532:(i,e,l)=>{l.d(e,{o:()=>n});var d=l(83894),n=l.n(d)()(()=>l.e(25261).then(l.bind(l,73623)).then(i=>({default:i.BrokenImg})),{loadableGenerated:{webpack:()=>[73623]},ssr:!1})},91758:(i,e,l)=>{l.d(e,{Kq:()=>g,XO:()=>h,c0:()=>c,gB:()=>m,nS:()=>s,oz:()=>a,vj:()=>u,yQ:()=>v});var d=l(94869),n=l(45182),r=l(87669),t=l(50799),o=[n.G_],s=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;if(!t.R6||"string"!=typeof i||i.includes("ip=x".concat(e)))return i;try{var l=new URL(i);return l.searchParams.set("ip","x".concat(e)),l.href}catch(e){return i}},a=i=>{var e,l,d;return(null==i?void 0:i.mediaItem)?{previewImageUrl:null===(l=i.mediaItem)||void 0===l?void 0:l.previewImageUrl,previewVideoUrls:null===(d=i.mediaItem)||void 0===d?void 0:d.previewVideoUrls}:{previewImageUrl:(null==i?void 0:i.thumbImageUrl)||(null==i?void 0:null===(e=i.image)||void 0===e?void 0:e.url)||(null==i?void 0:i.previewImageUrl),previewVideoUrls:null==i?void 0:i.previewVideoUrls}},v=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!(0,r.aH)(i)){var n,t,o,v=i.src||(null===(n=i.image)||void 0===n?void 0:n.url);return l&&(null==i?void 0:null===(o=i.displays)||void 0===o?void 0:null===(t=o[d.nQ])||void 0===t?void 0:t.src)||v}var{previewImageUrl:u}=a(i);return s(u,e)},u=i=>{var{assetType:e}=i;return e===n.G_?"mp4":null},h=i=>{var{asset:e}=i;return o.includes((0,r.f0)(e))&&!(0,r.Kx)(e)},c=function(){var i,e,l,n,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,r.lF)(null==o?void 0:o.type))return(null==o?void 0:o.width)>1e3?"".concat(null==o?void 0:o.previewUrls[0],"?width=1000"):null==o?void 0:o.previewUrls[0];var s=(0,r.$9)(o)?d.pI:d.jx,a=(null==o?void 0:null===(e=o.displays)||void 0===e?void 0:null===(i=e[s])||void 0===i?void 0:i.src)||(null==o?void 0:null===(t=o.image)||void 0===t?void 0:null===(n=t.displays)||void 0===n?void 0:null===(l=n[s])||void 0===l?void 0:l.src);return(0,r.R1)(o)&&o.angle?a.replace(/\/([A-Z]\d\d)./,"/".concat(o.angle,".")):a},m=function(){var i,e,l,t,o,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,r.f0)(s);return a===n.W1||a===n.wt||a===n._g?(null==s?void 0:null===(e=s.displays)||void 0===e?void 0:null===(i=e[d.pI])||void 0===i?void 0:i.src)||(null==s?void 0:s.src):a===n.o9?null==s?void 0:null===(l=s.imageVariants)||void 0===l?void 0:l["1500"]:a===n.on||a===n.M9?null==s?void 0:s.previewMp3:a===n.nE?null==s?void 0:s.previewUrls[0]:a===n.gv?null===(o=s.cmsEntry)||void 0===o?void 0:null===(t=o.image)||void 0===t?void 0:t.url:null},g=function(){var i,e,l,d,n,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={width:null!==(d=null!==(l=o.width)&&void 0!==l?l:null===(i=o.mediaItem)||void 0===i?void 0:i.width)&&void 0!==d?d:0,height:null!==(t=null!==(n=o.height)&&void 0!==n?n:null===(e=o.mediaItem)||void 0===e?void 0:e.height)&&void 0!==t?t:0};if((0,r.aH)(o)&&(!a.width||!a.height)&&o.sizes){var v=Object.keys(o.sizes).find(i=>o.sizes[i]);a.width=v&&o.sizes[v].width||0,a.height=v&&o.sizes[v].height||0}if(s&&(!a.width||!a.height)&&o.aspectRatioCommon){var[u,h]=o.aspectRatioCommon.split(":");a.width=Number(u),a.height=Number(h)}return a}}}]);
//# sourceMappingURL=ImageGridItem.0ce19fd72fdb9717.js.map