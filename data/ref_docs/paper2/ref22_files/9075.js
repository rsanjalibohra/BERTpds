(self.webpackChunklite=self.webpackChunklite||[]).push([[9075],{43915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{d:"M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z",fillRule:"evenodd"});const l=function(e){return r.createElement("svg",o({width:25,height:25},e),i)}},55459:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{d:"M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z"});const l=function(e){return r.createElement("svg",o({width:29,height:29},e),i)}},14345:(e,t,n)=>{"use strict";n.d(t,{A:()=>$,r:()=>Y});var r=n(28655),o=n.n(r),i=n(71439),l=n(67294),a=n(67154),s=n.n(a),c=n(63038),u=n.n(c),d=n(12291),p=n(93653),f=n(35848),v=n(53962),m=n(63564),b=n(71245),h=n(965),E=n(78820),C=n(73232),S=n(76532),w=n(1932),P=n(32262),y=n(57469),g=n(7157),T=n(29169),I=n(92528),k=n(80362),O=n(82318),x=n(12861),R=n(98024),D=n(6688),j=n(14391),F=n(65347),V=n(67297),L=n(93394),_=n(39171),A=n(51064),U=n(55573),M=n(27952);function H(){var e=o()(["\n  fragment TruncatedPostCardEditorWriterButton_post on Post {\n    id\n    collection {\n      id\n      name\n      slug # Needed for rejectPostFromPub (not currently exposed as a reusable fragment)\n    }\n    allowResponses\n    clapCount\n    visibility\n    mediumUrl\n    responseDistribution\n    ...useIsPinnedInContext_post\n    ...CopyFriendLinkMenuItem_post\n    ...ClapMutation_post\n  }\n  ","\n  ","\n  ","\n"]);return H=function(){return e},e}var B=function(e){return{fill:e.baseColor.fill.normal,":hover":{fill:e.baseColor.fill.darker},":focus":{fill:e.baseColor.fill.darker}}},N=function(e){var t=e.post,n=e.publisherContext,r=e.isEditor,o=e.isWriter,i=e.creator,a=(0,D.I)(),c=(0,V.v9)((function(e){return e.config.authDomain})),H=t.id,N=t.collection,K=t.responseDistribution,q=t.visibility,z=t.mediumUrl,Q=t.allowResponses,W=(0,S.H)().value,J=null==W?void 0:W.id,Z=null==i?void 0:i.id,G=(0,w.Tf)(t).viewerEdge,$=N||{id:"",name:""},Y=$.id,X=$.name,ee=(0,A.O)(!1),te=u()(ee,3),ne=te[0],re=te[1],oe=te[2],ie=(0,E.n_)(t,n),le=u()(ie,2),ae=le[0],se=le[1],ce=l.useState(""),ue=u()(ce,2),de=ue[0],pe=ue[1],fe=l.useCallback((function(){oe(),se().then((function(e){var t=e.errors;t&&t.length&&t[0].message?pe(t[0].message):window.location.reload()}))}),[oe,se,pe]),ve=(0,b.yb)(t),me=(0,A.O)(!1),be=u()(me,3),he=be[0],Ee=be[1],Ce=be[2],Se=l.useCallback((function(){ve(N).then((function(){return window.location.reload()}))}),[Y,ve]),we=(0,p.j)(H),Pe=u()(we,1)[0],ye=(0,A.O)(!1),ge=u()(ye,3),Te=ge[0],Ie=ge[1],ke=ge[2],Oe=l.useCallback((function(){Pe().then((function(){return window.location.reload()}))}),[Pe]),xe=K===j.Et.DISTRIBUTED,Re=(0,A.O)(!1),De=u()(Re,3),je=De[0],Fe=De[1],Ve=De[2],Le={buttonStyle:"ERROR",cancelText:"Cancel"},_e="truncatedPostCardEditorWriterMenu",Ae="Delete story".concat(xe?" and response":""),Ue=xe?C.Q:"Are you sure you want to delete this story?",Me="LOCKED"===q,He="User"===n&&o||"Collection"===n&&r,Be=(0,d.I0)(),Ne=l.useCallback((function(e){return Be((0,F.at)(e))}),[Be]),Ke=(0,V.b$)((function(e){return e.multiVote.clapsPerPost})),qe=(0,U.l)(Ke,t,G),ze=qe.clapCount,Qe=qe.viewerClapCount,We=(0,h.CP)();return l.createElement(l.Fragment,null,l.createElement(I.Q,s()({},Le,{isVisible:he,onConfirm:Se,hide:Ce,titleText:"Remove story",confirmText:"Remove",isDestructiveAction:!0}),"Are you sure you want to remove this story from ",X,"?"),l.createElement(I.Q,s()({},Le,{isVisible:Te,onConfirm:Oe,hide:ke,titleText:Ae,confirmText:"Delete",isDestructiveAction:!0}),Ue),l.createElement(I.Q,{buttonStyle:"STRONG",cancelText:"Cancel",isVisible:je,onConfirm:function(){var e=(0,M.d0A)(c,H);window.location.replace(e)},hide:Ve,titleText:"Edit story and response",confirmText:"Continue",isDestructiveAction:!1},C.t),l.createElement(k.J,{ariaId:_e,hide:oe,isVisible:ne,popoverRenderFn:function(){return l.createElement(P.mX,null,l.createElement(P.Sl,null,xe?l.createElement(O.r,{linkStyle:"SUBTLE",onClick:(0,_.B)(oe,Fe)},"Edit story"):l.createElement(O.r,{linkStyle:"SUBTLE",href:(0,M.d0A)(c,H)},"Edit story")),(r||o&&"User"===n)&&l.createElement(P.Sl,null,l.createElement(O.r,{onClick:fe},ae?"Unpin":"Pin"," story")),l.createElement(P.oK,null),l.createElement(P.Sl,null,l.createElement(O.r,{href:(0,M.KIb)(c,H)},"Story settings")),l.createElement(P.Sl,null,l.createElement(O.r,{href:(0,M.T0G)(c,H)},"Story stats")),Me&&z&&(null==G?void 0:G.shareKey)&&l.createElement(v.$,{post:t,shareKey:null==G?void 0:G.shareKey}),l.createElement(P.oK,null),He?l.createElement(m.r,{hidePopover:oe,postId:t.id,allowResponses:Q}):null,Y&&l.createElement(P.Sl,null,l.createElement(O.r,{onClick:Ee},"Remove story from publication")),o&&l.createElement(P.Sl,null,l.createElement(O.r,{onClick:(0,_.B)(oe,Ie)},"Delete story")),r&&!o&&l.createElement(l.Fragment,null,l.createElement(P.oK,null),J&&ze&&Qe&&Qe>0?l.createElement(P.Sl,null,l.createElement(O.r,{onClick:function(){return We(t,(null==W?void 0:W.id)||"",-Qe,G),Ne({postId:t.id,clapCount:ze-Qe,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),void oe()}},"Undo applause for this post")):null,l.createElement(T.z,{targetUserId:Z,postId:t.id,hidePopover:oe,viewerId:J}),l.createElement(f.qT,{hidePopover:oe,creator:i}),l.createElement(y.F,{hidePopover:oe,creator:i,viewer:W}),l.createElement(g.j,{hidePopover:oe,creator:i,viewer:W})))}},l.createElement(O.r,{ariaControls:_e,ariaExpanded:ne?"true":"false",ariaLabel:"More options",onClick:re},l.createElement(L.Z,{className:a(B)}))),l.createElement(x.F,{isVisible:!!de,hide:function(){return pe("")},duration:5e3},l.createElement(R.F,{scale:"M"},de)))},K=(0,i.Ps)(H(),E.xt,v.g,h.JP),q=n(36511);function z(){var e=o()(["\n  fragment TruncatedPostCardReaderButton_post on Post {\n    id\n    collection {\n      id\n    }\n    creator {\n      id\n    }\n    clapCount\n    ...ClapMutation_post\n  }\n  ","\n"]);return z=function(){return e},e}var Q=function(e){return{fill:e.baseColor.fill.normal,":hover":{fill:e.baseColor.fill.darker},":focus":{fill:e.baseColor.fill.darker}}},W=function(e){var t=e.post,n=e.viewer,r=(0,D.I)(),o=t.creator,i=null==o?void 0:o.id,a=(0,A.O)(!1),s=u()(a,3),c=s[0],p=s[1],v=s[2],m="truncatedPostCardReaderMenu",b=(0,q.r)().viewerId,E=(0,w.Tf)(t).viewerEdge,C=(0,d.I0)(),S=l.useCallback((function(e){return C((0,F.at)(e))}),[C]),I=(0,V.b$)((function(e){return e.multiVote.clapsPerPost})),x=(0,U.l)(I,t,E),R=x.clapCount,j=x.viewerClapCount,_=(0,h.CP)();if(!i)return null;var M=b&&R&&j&&j>0;return l.createElement(k.J,{ariaId:m,hide:v,isVisible:c,popoverRenderFn:function(){return l.createElement(P.mX,null,!!M&&l.createElement(P.Sl,null,l.createElement(O.r,{onClick:function(){return _(t,(null==n?void 0:n.id)||"",-j,E),S({postId:t.id,clapCount:R-j,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),void v()}},"Undo applause for this post")),l.createElement(T.z,{targetUserId:i,postId:t.id,hidePopover:v,viewerId:b}),l.createElement(f.qT,{hidePopover:v,creator:o}),l.createElement(y.F,{hidePopover:v,creator:o,viewer:n}),l.createElement(g.j,{hidePopover:v,creator:o,viewer:n}))}},l.createElement(O.r,{ariaControls:m,ariaExpanded:c?"true":"false",ariaLabel:"More options",onClick:p},l.createElement(L.Z,{className:r(Q)})))},J=(0,i.Ps)(z(),h.JP),Z=n(73891);function G(){var e=o()(["\n  fragment TruncatedPostCardOverflowButton_post on Post {\n    creator {\n      id\n    }\n    ...TruncatedPostCardEditorWriterButton_post\n    ...TruncatedPostCardReaderButton_post\n  }\n  ","\n  ","\n"]);return G=function(){return e},e}var $=function(e){var t=e.post,n=e.publisherContext,r=(0,S.H)().value,o=(0,Z.gY)(t.collection).viewerEdge,i=!(null==o||!o.isEditor),a=t.creator,s=(null==r?void 0:r.id)===(null==a?void 0:a.id);return r?i||s?l.createElement(N,{post:t,isEditor:i,isWriter:s,publisherContext:n,creator:a}):l.createElement(W,{post:t,viewer:r}):null},Y=(0,i.Ps)(G(),K,J)},40917:(e,t,n)=>{"use strict";n.d(t,{e:()=>p});var r=n(59713),o=n.n(r),i=n(4743),l=n(14391),a=n(43198);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e,t){var n;return t?c(c({},e),{},{markups:[{anchorType:l.yG.LINK,type:l.Jh.A,start:0,end:(null==e||null===(n=e.text)||void 0===n?void 0:n.length)||0,href:t,userId:null,linkMetadata:null}]}):e},d=function(e,t){return t?c(c({},e),{},{href:t}):e},p=function(e,t){var n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=null!==(n=(0,i.LI)(e).titleIndex)&&void 0!==n?n:(0,a.s)(e,a.j);return e.map((function(e,n){return r&&e.type===l.NJ.IMG?d(e,t):n===o?u(e,t):e}))}},30570:(e,t,n)=>{"use strict";n.d(t,{sK:()=>v,L0:()=>m,q9:()=>b});var r=n(28655),o=n.n(r),i=n(63038),l=n.n(i),a=n(71439),s=n(67294),c=n(73788),u=n(53976),d=n(85526);function p(){var e=o()(["\n  fragment InlineExpansionContext_post on Post {\n    id\n    creator {\n      id\n      customStyleSheet {\n        id\n        blogroll {\n          visibility\n        }\n      }\n      isAuroraVisible\n      followedCollections\n      socialStats {\n        followingCount\n        collectionFollowingCount\n      }\n      ...UserSubscribeButton_user\n    }\n    collection {\n      id\n      canToggleEmail\n      description\n      isAuroraEligible\n      isAuroraVisible\n      viewerEdge {\n        id\n        isEditor\n      }\n      tagline\n    }\n    customStyleSheet {\n      id\n      blogroll {\n        visibility\n      }\n    }\n  }\n  ","\n"]);return p=function(){return e},e}var f=s.createContext({expandedPostId:null,setExpandedPostId:function(){},postInView:!1,setPostInView:function(){},expandedPost:null,setExpandedPost:function(){}}),v=function(){return s.useContext(f)},m=function(e){var t=e.children,n=s.useState(null),r=l()(n,2),o=r[0],i=r[1],a=s.useState(!1),d=l()(a,2),p=d[0],v=d[1],m=s.useState(null),b=l()(m,2),h=b[0],E=b[1],C=(0,u.VB)({name:"enable_inline_expansion",placeholder:null});return s.createElement(f.Provider,{value:{expandedPostId:o,setExpandedPostId:i,postInView:p,setPostInView:v,expandedPost:h,setExpandedPost:E}},s.createElement(c.k,{post:h,preload:!!C},t))},b=(0,a.Ps)(p(),d.w)},21356:(e,t,n)=>{"use strict";n.d(t,{x:()=>D,S:()=>j});var r=n(28655),o=n.n(r),i=n(71439),l=n(67294),a=n(12291),s=n(42631),c=n(89970),u=n(17920),d=n(60002),p=n(41236),f=n(86654),v=n(88817),m=n(70162),b=n(3369),h=n(965),E=n(58006),C=n(76532),S=n(1932),w=n(324),P=n(62181),y=n(95760),g=n(51512),T=n(65347),I=n(67297),k=n(55573),O=n(27952);function x(){var e=o()(["\n  fragment MultiVote_post on Post {\n    id\n    clapCount\n    creator {\n      id\n      ...SusiClickable_user\n    }\n    isPublished\n    ...SusiClickable_post\n    collection {\n      id\n      slug\n    }\n    isLimitedState\n    ...MultiVoteCount_post\n  }\n  ","\n  ","\n  ","\n"]);return x=function(){return e},e}var R=function(e){var t,n=e.post,r=e.buttonStyle,o=e.hasDialog,i=e.shouldShowResponsiveLabelText,x=void 0!==i&&i,R=e.shouldHideClapsText,D=void 0!==R&&R,j=e.shouldHideClapsCount,F=void 0!==j&&j,V=e.susiEntry,L=e.verticalClapsText,_=void 0!==L&&L,A=(0,h.CP)(),U=(0,C.H)().value,M=null!==(t=null==U?void 0:U.id)&&void 0!==t?t:"",H=(0,S.Tf)(n).viewerEdge,B=(0,I.v9)((function(e){return e.config.authDomain})),N=(0,I.b$)((function(e){return e.multiVote.clapsPerPost})),K=(0,a.I0)(),q=function(e){return K((0,T.at)(e))},z=(0,y.Av)(),Q=(0,g.pK)(),W=(0,k.l)(N,n,H),J=W.clapCount,Z=W.viewerClapCount,G=W.viewerHasClappedSinceFetch,$=l.useCallback((function(){if(Z&&Z>=m.S2)return"Viewer exceeded authorized claps limit.";q({postId:n.id,clapCount:J+1,viewerClapCount:Z+1,viewerHasClappedSinceFetch:!0})}),[Z,n.id,J]),Y=l.useCallback((function(){if(!Z)return"Viewer did not clap.";A(n,M,-Z,H),q({postId:n.id,clapCount:J-Z,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),z.event("post.clientUnvote",{postId:n.id,postIds:[n.id],unvoteCount:Z,source:Q})}),[Z,n.id,J,M,H,Q]),X=l.useCallback((function(e){A(n,M,e,H),z.event("post.clientUpvote",{postId:n.id,postIds:[n.id],voteCount:e,source:Q})}),[n.id,M,H,Q]),ee=(0,b.m)({onIncrementClaps:$,onUndoClaps:Y,onSubmitClapsAccumulated:X}),te=ee.clappedAt,ne=ee.onFloatEnd,re=ee.removeBurst,oe=ee.clap,ie=ee.undoClaps,le=ee.isPopping,ae=ee.isShowingViewerClapCount,se=ee.burstOffsets,ce=ee.onPopEnd;l.useEffect((function(){return function(){var e;e={postId:n.id},K((0,T.HQ)(e))}}),[]);var ue,de=n.collection,pe=n.creator,fe=n.id,ve=n.isPublished,me=n.isLimitedState,be=(ue=!(!pe||pe.id!==M),me?"This feature is temporarily disabled":ve?ue?"You cannot applaud your own story":void 0:"You cannot applaud a draft"),he=(0,m.wH)(r,x),Ee=he.isObvious,Ce=he.isSubtleForDesktop,Se=he.alwaysShowClapsLabel,we=he.hasClapsLabel,Pe=he.buttonScale,ye=!!(Z&&Z>0),ge=!!(J&&J>0),Te=de&&de.slug?(0,O.JLP)(B,de.slug,fe):(0,O.kIi)(B,fe);return l.createElement(u.l,{isSubtleForDesktop:Ce,verticalClapsText:_},l.createElement(p.$,{isObvious:Ee,buttonStyle:r,isSubtleForDesktop:Ce,disableReason:be},M||be?l.createElement(l.Fragment,null,ae&&l.createElement(w.N8,null,l.createElement(d.q,{count:Z,clappedAt:te,placement:Ee?"FAR":"NEAR",onFloatEnd:ne})),l.createElement(v.v,{isPopping:le,onPopEnd:ce},l.createElement(c.d,{scale:Pe,canUndo:ye,isCircle:Ee,isFilled:ye,isUndoSuppressed:se.length>0,disableReason:be,onClickAndHold:oe,onUndo:ie,shouldHideClapsText:D})),se.map((function(e){return l.createElement(s.P,{key:e,isLarge:Ee,offset:e,onBurstEnd:re})}))):l.createElement(P.R9,{operation:"register",post:n,user:n.creator,actionUrl:Te,susiEntry:V},l.createElement(c.d,{isCircle:Ee,scale:Pe}))),ge&&!F&&(!ae||Se)&&l.createElement(f.W,{buttonStyle:r,isSubtleForDesktop:Ce},l.createElement(E._,{shouldShowNetwork:Ee,post:n,clapCount:J,showFullNumber:G,hasLabel:we,hasDialog:o,shouldShowResponsiveLabelText:Ce||x,shouldHideClapsText:D})))},D=(0,i.Ps)(x(),P.qU,P.Vm,E.U),j=function(e){var t;return l.createElement(g.cW,{source:{postId:null===(t=e.post)||void 0===t?void 0:t.id},extendSource:!0},l.createElement(R,e))}},33819:(e,t,n)=>{"use strict";n.d(t,{h:()=>b});var r=n(59713),o=n.n(r),i=n(67294),l=n(42933),a=n(33914),s=n(98024),c=n(95760),u=n(51512),d=n(6688),p=n(43915),f=n(55459);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.allowResponses,n=e.responsesCount,r=e.handleClick,o=e.trackingData,v=e.isLimitedState,b=e.iconStylesOverride,h=e.countStylesOverride,E=e.svgSize,C=void 0===E?"L":E,S=e.responsesCountColor,w=void 0===S?"LIGHTER":S,P=e.disabledTooltipText,y=void 0===P?"":P,g=(0,d.I)(),T=(0,c.Av)(),I=(0,u.pK)();if(!t)return null;var k=function(e){return{fill:e.baseColor.fill.light,opacity:v?.4:1,cursor:v?"not-allowed":"pointer",":hover":{fill:v?void 0:e.baseColor.fill.lighter}}},O={opacity:v?.4:1},x="S"===C?i.createElement(p.Z,{"aria-label":"responses",className:g([k,b])}):i.createElement(f.Z,{"aria-label":"responses",className:g([k,b])}),R=i.createElement("button",{onClick:v?void 0:function(e){r(e),T.event("responses.viewAllClicked",m(m({},o),{},{source:I}))},className:g({cursor:"pointer",border:0,padding:0})},i.createElement(l.x,{display:"flex",flexDirection:"row",alignItems:"center"},i.createElement(l.x,{display:"flex",alignItems:"center"},x,!!n&&i.createElement(s.F,{tag:"p",scale:"M",color:w},i.createElement("span",{className:g([h,O])},n))))),D=i.createElement(a._,{tooltipText:y||"This feature is temporarily disabled.",targetDistance:15},R);return i.createElement(i.Fragment,null,v?D:R)}},29577:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var r=n(68356),o=n.n(r),i=n(19725),l=o()({loader:function(){return Promise.all([n.e(8342),n.e(3930),n.e(8698),n.e(9590),n.e(9845),n.e(7417)]).then(n.bind(n,5758))},modules:["src/components/responses/post/ThreadedResponsesSidebar"],webpack:function(){return[5758]},loading:function(){return null},render:(0,i.n)("ThreadedResponsesSidebar")})},73788:(e,t,n)=>{"use strict";n.d(t,{k:()=>u});var r=n(63038),o=n.n(r),i=n(67294),l=n(49486),a=n(29577),s=n(70586),c=n(92214),u=function(e){var t=e.children,n=e.post,r=e.preload,u=void 0===r||r,d=i.useState(void 0),p=o()(d,2),f=p[0],v=p[1],m=i.useCallback((function(e){return function(t){v(t),e()}}),[]);return i.createElement(s.E,{preload:u},(function(e){var r=e.showPreviousSidebar,o=e.hasLoaded,s=e.initialSidebarRender,u=e.isVisible,d=e.continueThisThreadPosts,p=e.openSidebar,b=e.cleanupSidebar;return i.createElement(l.Q.Provider,{value:{openSidebarToRespondToHighlight:m(p)}},!!n&&o&&i.createElement(a.L,{isResponsesSidebarVisible:u&&0===d.length,parentPost:n,inResponseToQuote:f,setInResponseToQuote:v,showPreviousSidebar:r,cleanupSidebar:b,initialSidebarRender:!!s.current}),!!n&&o&&d.map((function(e,t,o){var l=(0,c.iI)(t);return i.createElement(a.L,{key:n.id,isResponsesSidebarVisible:u&&t===o.length-1,parentPost:n,inResponseToQuote:f,setInResponseToQuote:v,continueThisThreadPost:e,continueThisThreadPostDepth:l,showPreviousSidebar:r,cleanupSidebar:b,initialSidebarRender:!!s.current})})),t)}))}},72393:(e,t,n)=>{"use strict";n.d(t,{f:()=>r});var r=n(67294).createContext({addContinueThisThreadSidebar:function(){return null},openSidebar:function(){return null},closeSidebar:function(){return null}})},70586:(e,t,n)=>{"use strict";n.d(t,{E:()=>m});var r=n(319),o=n.n(r),i=n(63038),l=n.n(i),a=n(38125),s=n.n(a),c=n(67294),u=n(29577),d=n(72393),p=n(77180),f=n(27108),v=n(8403),m=function(e){var t=e.preload,n=e.children,r=c.useState(!1),i=l()(r,2),a=i[0],m=i[1],b=(0,p.F)(),h=!!(0,v.Wd)("responsesOpen"),E=c.useState(!1),C=l()(E,2),S=C[0],w=C[1],P=c.useRef(!0),y=c.useRef(0),g=c.useState(!1),T=l()(g,2),I=T[0],k=T[1],O=c.useCallback((function(){return w(!0)}),[]),x=c.useState([]),R=l()(x,2),D=R[0],j=R[1],F=c.useCallback((function(e){P.current=!1,j([].concat(o()(D),[e]))}),[D]),V=c.useCallback((function(){j(s()(D))}),[D]),L=c.useCallback((function(){w(!1),j([]),P.current=!0}),[]);c.useEffect((function(){k(!0),w(h)}),[h]);var _=function(){window.innerWidth<b.breakpoints.md&&m(!0)};return c.useEffect((function(){return _(),f.V6.on("resize",_),function(){return f.V6.off("resize",_)}}),[]),c.useEffect((function(){var e,t,n=null===(e=window)||void 0===e||null===(t=e.document)||void 0===t?void 0:t.documentElement;return a&&null!=n&&n.style&&(S?(n.style.top="-".concat(y.current,"px"),y.current=n.scrollTop,n.style.overflow="hidden",n.style.position="fixed"):(n.style.overflow="",n.style.position="",n.style.top="",n.scrollTop=y.current)),function(){a&&null!=n&&n.style&&(n.style.overflow="",n.style.position="",n.style.top="",n.scrollTop=y.current)}}),[S]),c.useEffect((function(){t&&u.L.preload()}),[t]),c.createElement(d.f.Provider,{value:{addContinueThisThreadSidebar:F,openSidebar:O,closeSidebar:L}},n({showPreviousSidebar:V,hasLoaded:I,initialSidebarRender:P,isVisible:S,continueThisThreadPosts:D,openSidebar:O,cleanupSidebar:L}))}},66210:(e,t,n)=>{"use strict";n.d(t,{V:()=>m,k:()=>b});var r=n(28655),o=n.n(r),i=n(23493),l=n.n(i),a=n(71439),s=n(67294),c=n(95760),u=n(51512),d=n(27108),p=n(8403),f=n(21146);function v(){var e=o()(["\n  fragment PostScrollTracker_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);return v=function(){return e},e}function m(e,t,n,r){var o=(0,c.Av)(),i=(0,u.pK)(),a=(0,p.he)(),v=(0,u.Qi)(),m=Date.now(),b=null,h=s.useCallback(l()((function(){if(e.current){var r=(0,f.L6)(e.current);if((0,f.pn)(r)){var l=Date.now(),s=(0,f.tM)(r),c=(0,f.UO)(),u=(0,f.t_)(),d=Math.round(s.top),p=Math.round(s.top+s.height),h=c.top,E=c.top+u.height,C=c.height,S={postIds:[t.id],collectionIds:[t.collection?t.collection.id:""],sequenceIds:[t.sequence?t.sequence.sequenceId:""],sources:n?["post_page"]:[v],tops:[d],bottoms:[p],areFullPosts:[!0],loggedAt:l,timeDiff:null!==b?Math.round(l-b):0,scrollTop:h,scrollBottom:E,scrollableHeight:C,viewStartedAt:m},w={referrer:a,referrerSource:i};n?o.event("post.streamScrolled",S,w):o.event("post.streamScrolled",S),b=l}}}),1e3),[t,n]);s.useEffect((function(){h();var e=null!=r&&r.current?(0,d.jC)(null==r?void 0:r.current):d.V6;return e.on("scroll_end",h),function(){e.off("scroll_end",h)}}),[h])}var b=(0,a.Ps)(v())},32261:(e,t,n)=>{"use strict";n.d(t,{O1:()=>i}),n(59713);var r=n(67294),o=r.createContext(null),i=function(e){var t=e.event,n=e.children;return r.createElement(o.Provider,{value:{event:t}},n)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9075.f4843679.chunk.js.map