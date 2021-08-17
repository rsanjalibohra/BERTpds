
(function() {
  !function(){"use strict";function e(){return window&&window.performance&&window.performance.mark&&window.performance.measure&&window.performance.getEntriesByName}function t(...e){return window.performance.getEntriesByName(...e)}function n(...e){return window.performance.mark(...e)}function i(...e){return window.performance.measure(...e)}function r(){return window.performance.now()}var o={t:e,i:t,o:n,s:i,u:r};let s={};function a(e){return s[e]}function c(e,t){Object.assign(s,{[e]:t})}function u(){s={}}var d={get:a,set:c,reset:u};const l=(e,t)=>{for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)},h=e=>"function"==typeof e,_=e=>!!e&&"object"==typeof e,f=e=>"string"==typeof e,p=e=>void 0===e,m=e=>Array.isArray(e);let w=0;const g=()=>w++;function v(e){let t=document.createElement("a");return t.href=e,t}var b={l:e=>{var t=document.createElement("script");t.type="text/javascript",t.src=e;var n=document.querySelector("head");n.insertBefore(t,n.firstChild)},h:e=>{var t=document.createElement("link");t.href=e,t.as="script",t.rel="preload";var n=document.querySelector("head");n.insertBefore(t,n.firstChild)},_:e=>Array.prototype.slice.call(e.querySelectorAll("*")),p:h,m:_,g:f,k:m,A:p,O:l,I:()=>{w=0},T:g};function y(){O("debug",[].slice.call(arguments))}function E(){O("info",[].slice.call(arguments))}function k(){O("warn",[].slice.call(arguments))}function A(){O("error",[].slice.call(arguments))}const O=(e,t)=>{var n,i=console;switch(e){case"debug":n=i.debug;break;case"warn":n=i.warn;break;case"error":n=i.error;break;default:n=i.log,e="info"}n.apply(console,T(t))};function I(){if(!o.t())return null;let e=d.get("timeOrigin");if(!b.A(e))return e;const t=o.i("edge-begin")[0],n=t?t.startTime:null;return d.set("timeOrigin",n),n}function T(e){const t=I();return t?[`${("     "+Math.round(o.u()-t)).slice(-6)}| Optly-μ / ${e[0]}`].concat(e.slice(1)):[`Optly-μ / ${e[0]}`].concat(e.slice(1))}var C={C:y,D:A,S:E,P:k};function D(e){window.optimizely.push({type:"clientMetadata",clientName:"edge",clientVersion:"____v1_34_0",forceVariationIds:e.forceVariationIds})}function S(e){window.optimizely.push({type:"event",eventType:"click",eventData:{id:e.id,apiName:e.apiName,eventFilter:{selector:e.selector}}})}var P={R:D,j:e=>{var t=window.optimizely.push.bind(window.optimizely);e.errorData&&t({type:"microsnippetError",engine:"microsnippet",errorData:e.errorData}),e.logLevel&&t({type:"log",level:e.logLevel}),e.visitorId&&t({type:"user",visitorId:e.visitorId,IP:e.visitorIp,location:e.location,queryParams:e.queryParams,url:e.targetPageURL}),e.priorRedirectCookie&&t({type:"priorRedirectString",value:e.priorRedirectCookie}),e.decisions&&e.decisions.forEach(e=>{t({type:"event",eventType:"decision",eventData:{layerId:e.layerId,isLayerHoldback:e.isLayerHoldback||!1,experimentId:e.experimentId,variationId:e.variationId}})}),e.activeViews&&e.activeViews.forEach(e=>{t({type:"event",eventType:"pageview",eventData:{id:e.id,apiName:e.apiName}})}),e.viewStates&&0!==Object.keys(e.viewStates).length&&t({type:"initialViewStates",states:e.viewStates})}};function R(e,{message:t,err:n=null,args:i=[]},r=!0){let o=t,s=[o].concat(i);if(n&&(s=s.concat(n)),C.D.apply(this,s),r&&!d.get("disableTracking")){const e={errorData:{code:o,metadata:{},msVersion:d.get("msVersion"),requestId:d.get("requestId"),projectId:d.get("projectId")}};n&&(e.errorData.metadata.err=n),i.length&&(e.errorData.args=i),P.j(e)}}var j={N:{M:1e3,$:10},L:{U:"after",F:"append",V:"before",G:"prepend"},B:{H:"afterbegin",J:"afterend",W:"beforebegin",q:"beforeend"},X:"optly_change_",K:{attributes:!0,childList:!0,subtree:!0,characterData:!0},Y:{Z:"class",ee:"href",te:"html",ne:"src",ie:"style",re:"text",oe:"remove",se:"hide"}};const N="Observe Selector",M=document;let $,x;const L=()=>{$={},x=new MutationObserver(function(){this.disconnect(),Object.keys($).forEach(V),this.observe(M,j.K)})},U=()=>{x.observe(M,j.K)},F=(e,t)=>{x||L();const n=g();return $[n]={selector:e,callback:t},setTimeout(V.bind(null,n),0),U(),()=>{delete $[n],0===Object.keys($).length&&x.disconnect()}},V=e=>{let t;try{if(!(t=$[e])||!t.selector)return void delete $[e];let i=[];i=document.querySelectorAll(t.selector),Array.prototype.forEach.call(i,n=>{n.optimizelyEdgeObserveSelectorIds&&n.optimizelyEdgeObserveSelectorIds[e]||(n.optimizelyEdgeObserveSelectorIds=n.optimizelyEdgeObserveSelectorIds||{},n.optimizelyEdgeObserveSelectorIds[e]=!0,t.callback(n))})}catch(n){R(N,{err:n,message:"3.0: Error using selector:",args:[t.selector]}),delete $[e]}};var z={ae:()=>{x&&($=null,x.disconnect(),x=null)},ce:L,ue:F};const G=20,B=e=>new Promise(function(t){F(e,t)});const H={utils:{observeSelector:F,waitUntil:e=>new Promise(function(t){if(e())return void t();const n=setInterval(function(){e()&&(clearInterval(n),t())},G)}),waitForElement:B},state:{getActiveExperiments:()=>{let e,t;return window.optimizely.get?(e=window.optimizely.get("state").getExperimentStates({isActive:!0}),e=Object.keys(e).filter(t=>!e[t].isInExperimentHoldback).map(t=>e[t]),t=(e=>({id:e.id,name:e.experimentName,variation:{id:e.variation.id,name:e.variation.name}}))):(e=d.get("data").decisions.filter(e=>e.variationId),t=(e=>({id:e.experimentId,name:e.experimentName,variation:{id:e.variationId,name:e.variationName}}))),e.reduce((e,n)=>{const i=t(n);return e[i.id]=i,e},{})},getActivePages:()=>{let e;return window.optimizely.get?(e=window.optimizely.get("state").getPageStates({isActive:!0}),e=Object.keys(e).map(t=>e[t])):e=d.get("data").activeViews,e.reduce((e,t)=>(e[t.id]={id:t.id,apiName:t.apiName},e),{})},getRedirectInfo:()=>d.get("data").redirectInfo||null}};function J(e){if(e in H)return H[e]}function W(e){window.optimizely.push(e)}var q={de:()=>{window.optimizely&&(C.P("DEPRECATION: window.optimizely is defined, but it ought not be used on pages running Performance Edge. window.optimizelyEdge is the object hosting the Performance Edge API; any push API calls should be made to it instead."),d.set("unsafeTrackingGlobalPushUsed",!0)),window.optimizely instanceof Array||(window.optimizely=[]),window.optimizelyEdge instanceof Array&&(window.optimizely=window.optimizely.concat(window.optimizelyEdge)),window.optimizelyEdge={get:J,push:W,le:!0}}};const X="ProjectJS";var K={he:e=>{try{h(e)?e():R(X,{message:"2.0: ProjectJS is not a function"})}catch(t){R(X,{message:"2.1: Error executing ProjectJS:",err:t},!1)}}};function Y(){let e,t,n=new Promise(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,Array.from(arguments)),n},n.reject=function(){return t.apply(null,Array.from(arguments)),n},n}const Q="optimizelyChangeData";function Z(e,t){return e[Q]&&e[Q][t]?e[Q][t]:null}function ee(e,t){e[Q]&&delete e[Q][t]}function te(e,t,n){if("object"!=typeof n)throw new Error("setData expects an object");e[Q]||(e[Q]={}),e[Q][t]=n}var ne={_e:Z,fe:ee,pe:te};function ie(){return window.location.hostname}function re(e,t){return window.setTimeout(function(){try{e()}catch(t){C.P("Deferred function threw error:",t)}},t)}var oe={me:ie,we:re};function se(e){this.ge=e,this.ve=0,this.be={},this.ye=!1}se.prototype.Ee=function(){this.ye||(this.ye=!0,this.ke(),oe.we(()=>{this.ye=!1},0))},se.prototype.ke=function(){this.ve+=1;const e=this.be[String(this.ve)];e&&e.forEach(e=>{e()}),oe.we(()=>{this.Ae()},this.ge)},se.prototype.Ae=function(){this.ve-=1,this.ve<0&&(C.P("Decremented down to negative count: ",this.ve),this.ve=0)},se.prototype.Oe=function(e,t){this.be[e]||(this.be[e]=[]),this.be[e].push(t)};const ae="Append Change Applier";function ce(e){this.Ie=e,this.Te=new se(j.N.M),this.Te.Oe(j.N.$,()=>{C.P(`${ae} / Change has overheated and will no longer apply or reapply`,this),this.Ce()})}function ue(e){const t=document.createElement("div");return t.innerHTML=e,t.childNodes.length}function de(e,t,n){let i=e;const r=[];for(let o=0;o<t;o++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r}function le(e){let t=e.parentNode;for(;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}function he(e,t,n){const i=ne._e(n,e)||[];Array.prototype.forEach.call(i,e=>{e.parentNode.removeChild(e)}),n.removeAttribute(t),ne.fe(n,e),b._(n).forEach(e=>{e.removeAttribute(t)})}ce.prototype.he=function(){return this.De=Y(),this.Se=b.T(),this.Pe=z.ue(this.Ie.selector,this.Re.bind(this,this.Ie,this.Se)),this.De},ce.prototype.Re=function(e,t,n){const i=j.X+t;n.hasAttribute(i)?this.De.resolve():(this.Te.Ee(),this.je(e,t,n,i),this.De.resolve())},ce.prototype.je=function(e,t,n,i){let r;switch(e.operator){case j.L.U:r=j.B.J;break;case j.L.F:r=j.B.q;break;case j.L.V:r=j.B.W;break;case j.L.G:r=j.B.H;break;default:r=j.B.q}n.insertAdjacentHTML(r,e.value);const o=ue(e.value)-1;let s,a;r===j.B.q?a=de(s=n.lastChild,o,!1):r===j.B.H?a=de(s=n.firstChild,o,!0):r===j.B.W?a=de(s=n.previousSibling,o,!1):r===j.B.J&&(a=de(s=n.nextSibling,o,!0)),a.unshift(s),Array.prototype.forEach.call(a,e=>{const n=e.nodeType===Node.ELEMENT_NODE?e:le(e);n.setAttribute(i,"");const r=ne._e(n,t)||[];r.push(e),ne.pe(n,t,r),b._(n).forEach(e=>{e.setAttribute(i,"")})})},ce.prototype.Ce=function(){this.Pe&&this.Pe()},ce.prototype.Ne=function(){const e=j.X+this.Se,t=document.querySelectorAll("["+e+"]");Array.prototype.forEach.call(t,he.bind(null,this.Se,e))};const _e=(e,t)=>{if(0===Object.keys(t.css))return t.attributes.style;var n="",i=t.attributes&&t.attributes.style||"";return l(t.css,(e,t)=>{new RegExp(t+"\\s?:").test(i)||(n+=t+":"+e+";")}),p(t.attributes.style)?(e||"")+n:n+i};var fe={Me:e=>new MutationObserver(e),$e:(e,t)=>{e.observe(t,j.K)}};const pe="Attribute Change Applier";function me(e){this.Ie=e,this.xe=[],this.Te=new se(j.N.M),this.Te.Oe(j.N.$,()=>{C.P(`${pe} / Change has overheated and will no longer apply or reapply`,this),this.Ce()}),this.Le=!1}function we(e,t){const n=ne._e(t,e);n&&b.O(n,function(e,n){switch(n){case j.Y.Z:t.className=e;break;case j.Y.ee:t.href=e;break;case j.Y.te:t.innerHTML=e;break;case j.Y.ne:t.src=e;break;case j.Y.ie:t.style.cssText=e;break;case j.Y.re:t.textContent=e;break;default:throw new Error("Unrecognized attribute: "+n)}}),t.removeAttribute(j.X+e),ne.fe(t,e)}me.prototype.he=function(){this.Se=b.T(),this.De=Y();const e=this.Re.bind(this,this.Ie,this.Se);this.Pe=z.ue(this.Ie.selector,e);const t=document.querySelectorAll(this.Ie.selector);return t?Array.prototype.forEach.call(t,e):this.De.resolve(`${pe} / AttributeChange not being applied. Element does not exist in DOM`),this.De},me.prototype.Re=function(e,t,n){const i=j.X+t;if(n.hasAttribute(i))return void this.De.resolve();this.Te.Ee();const r=this.je.bind(this,n,e,t,i);if(r(),d.get("dynamicWebsiteSupport")){const e=()=>{oe.we(()=>{this.Le||fe.$e(t,n)})},t=fe.Me(()=>{this.Te.Ee(),t.disconnect(),r(),e()});e(),this.xe.push(t.disconnect.bind(t))}this.De.resolve()},me.prototype.je=function(e,t,n,i){const r={};b.O(t.attributes,(t,n)=>{switch(n){case j.Y.Z:b.A(e.className)||(r[j.Y.Z]=e.className,e.className=t);break;case j.Y.ee:b.A(e.href)||(r[j.Y.ee]=e.href,e.href=t);break;case j.Y.te:b.A(e.innerHTML)||(r[j.Y.te]=e.innerHTML,e.innerHTML=t,b._(e).forEach(e=>{e.setAttribute(i,"")}));break;case j.Y.ne:b.A(e.src)||(r[j.Y.ne]=e.src,e.src=t);break;case j.Y.ie:break;case j.Y.re:b.A(e.textContent)||(r[j.Y.re]=e.textContent,e.textContent=t);break;default:R(pe,{message:"1.1: Unrecognized attribute:",args:[n]})}});const o=_e(e.style.cssText,t);b.g(o)&&(r[j.Y.ie]=e.style.cssText,e.style.cssText=o),e.setAttribute(i,""),ne.pe(e,n,r)},me.prototype.Ce=function(){this.Pe&&this.Pe(),this.xe.forEach(e=>{try{e()}catch(t){}}),this.Le=!0},me.prototype.Ne=function(){const e=document.querySelectorAll("["+j.X+this.Se+"]");Array.prototype.forEach.call(e,we.bind(null,this.Se))};const ge="Custom Code Change Applier";function ve(e){this.Ie=e}function be(e){this.Ie=e}function ye(e,t){const n=ne._e(t,e),i=n.element.parentNode.removeChild(n.element),r=n.undoElement,o=r.parentNode;let s;switch(n.undoType){case j.L.U:o.insertBefore(i,r.nextSibling);break;case j.L.G:s=r.firstChild,r.insertBefore(i,s)}t.removeAttribute(j.X+e),ne.fe(t,e)}function Ee(e){if(!e)return null;const t=document.createElement("a");return t.href=e,t}ve.prototype.he=function(){try{this.Ie.value()}catch(e){R(ge,{message:"1.2: Apply Custom JS Error",err:e},!1)}},be.prototype.he=function(){this.Se=b.T(),Promise.all([new Promise(e=>{this.Pe=z.ue(this.Ie.selector,e)}),new Promise(e=>{this.Ue=z.ue(this.Ie.insertSelector,e)})]).then(this.Re.bind(this,this.Ie))},be.prototype.Re=function(e){const t=document.querySelectorAll(e.selector);Array.prototype.forEach.call(t,t=>{const n={undoElement:t.previousSibling,undoType:j.L.U};t.parentNode.firstChild===t&&(n.undoElement=t.parentNode,n.undoType=j.L.G);const i=t.parentNode.removeChild(t),r=document.querySelector(e.insertSelector),o=r.parentNode;let s;switch(n.element=i,e.operator){case j.L.V:o.insertBefore(i,r);break;case j.L.U:o.insertBefore(i,r.nextSibling);break;case j.L.G:s=r.firstChild,r.insertBefore(i,s);break;case j.L.F:r.appendChild(i)}i.setAttribute(j.X+this.Se,""),ne.pe(i,this.Se,n)})},be.prototype.Ce=function(){this.Pe&&this.Pe(),this.Ue&&this.Ue()},be.prototype.Ne=function(){const e=document.querySelectorAll("["+j.X+this.Se+"]");Array.prototype.forEach.call(e,ye.bind(null,this.Se))};const ke="Redirect Change Applier";function Ae(e){this.Ie=e}Ae.prototype.he=function(){const e=this.Ie;h(e.dest)&&(e.dest=e.dest()),f(e.dest)?(document.cookie=e.cookie.replace(/(^|&)t=(&|$)/,`$1t=${Date.now()}$2`).replace(/(^|&)r=(&|$)/,`$1r=${encodeURIComponent(document.referrer)}$2`),this.Fe(e,this.Ve(e))):R(ke,{message:"1.3.1 Redirect destination function did not evaluate to a string",args:[String(e.dest)]})},Ae.prototype.Ve=function(e){const t=Ee(e.dest);if(e.preserveParameters){const e=this.ze();e&&(t.search?t.search+="&"+e.substr(1):t.search=e)}return t.toString()},Ae.prototype.Fe=function(e,t){(!e.hasOwnProperty("hidePage")||e.hidePage)&&this.Ge(),this.Be(t)},Ae.prototype.Ge=function(){const e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="body{display:none;visibility:hidden;}",document.head.appendChild(e)},Ae.prototype.Be=function(e){window.location.replace(e)},Ae.prototype.ze=function(){return window.location.search};const Oe="Change Applier";function Ie(e){const t=new Ce(e);return t.he(),t}function Te(e){window.optimizely.push({type:"addListener",filter:{type:"lifecycle",name:"pageDeactivated"},handler:function(t){const n=t.data.page,i=e[n.id];i&&n.deactivationEnabled&&(i.forEach(e=>e.Ce()),n.undoOnDeactivation&&i.forEach(e=>e.Ne())),delete e[n.id]}})}function Ce(e){this.He=[],e.forEach(e=>{let t;switch(e.type){case"attribute":t=new me(e);break;case"append":t=new ce(e);break;case"custom_code":t=new ve(e);break;case"rearrange":t=new be(e);break;case"redirect":t=new Ae(e);break;default:R(Oe,{message:"1.0: Unknown change type:",args:[e.type]})}t&&this.He.push(t)})}Ce.prototype.he=function(){this.He.forEach(e=>e.he())},Ce.prototype.Ce=function(){this.He.forEach(e=>{e.Ce&&e.Ce()})},Ce.prototype.Ne=function(){this.He.forEach(e=>{e.Ne&&e.Ne()})};var De={Je:Ie,We:Ce,qe:Te};let Se;const Pe="Click Tracking";function Re(){Se||(Se=new $e(function(e){S(e)}))}function je(e){Se||Re(),Se.Xe()||Se.Ke(),Se.Ye(e)}function Ne(e){Se.Qe(e),Se.Xe()||Se.Ze()}function Me(e){window.optimizely.push({type:"addListener",filter:{type:"lifecycle",name:"pageDeactivated"},handler:function(t){const n=t.data.page.id;e[n]&&e[n].forEach(Ne)}})}class $e{constructor(e){this.et=e,this.tt=[],this.nt=null,this.it=function(e){this.tt.forEach(function(t){try{var n=t.selector;xe(e,n)&&this.et(t)}catch(i){R(Pe,{message:"Click handler error:",err:i},!1)}}.bind(this))}.bind(this)}Ke(){this.nt=document.addEventListener("click",this.it,!0)}Ze(){this.nt&&(this.nt(),this.nt=null)}Xe(){return this.tt.length>0}Ye(e){this.tt.push(e)}Qe(e){this.tt=this.tt.filter(function(t){return t.apiName!==e.apiName})}}function xe(e,t){for(var n=e.target;n;){var i;try{i=n.matches(t)}catch(r){return!1}if(i)return!0;n=n.parentElement}return!1}var Le={rt:je,ot:Re,st:Me};var Ue={at:function(e,t,n,i){var r={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:n||"",actions:[]}]}],integrationStringVersion:1};return i&&Object.assign(r,{pageIds:[i]}),r},ct:function(e,t,n,i){return{campaignId:e,decision:{campaignId:e,experimentId:t,variationId:n,isCampaignHoldback:i||!1},decisionTicket:{audienceIds:[]}}}};const Fe={LIFECYCLE:"lifecycle"},Ve={CAMPAIGN_DECIDED:"campaignDecided"};var ze={ut:function(e){var t=Ue.at(e.layerId,e.experimentId,e.variationId,e.viewId),n=Ue.ct(e.layerId,e.experimentId,e.variationId,e.isLayerHoldback);return{type:Fe.LIFECYCLE,name:Ve.CAMPAIGN_DECIDED,data:{campaign:t,decisionTicket:n.decisionTicket,decision:n.decision}}}};const Ge="Side Emitter";function Be(e){return _(e)&&e.type&&"addListener"===e.type&&e.filter&&_(e.filter)&&h(e.handler)}function He(e){var t=[];return m(window.optimizely)&&window.optimizely.forEach(n=>{Be(n)&&n.filter.type===e.type&&n.filter.name===e.name&&t.push(n.handler)}),t}function Je(e){He(e).forEach(t=>{try{t.call(void 0,e)}catch(n){R(Ge,{message:"4.0: Error in listener handler for event:",err:n,args:[e]})}})}var We={dt:e=>{e.decisions&&e.decisions.forEach(e=>{Je(ze.ut(e))})}};function qe(){return document.currentScript}function Xe(e){document.cookie=e}var Ke={lt:qe,ht:Xe};function Ye(e){Ke.ht(e)}function Qe(e,t="/"){const n=oe.me().split(".");for(;n.length>0;)this._t(`${e}=;expires=${new Date(0)};path=${t};domain=.${n.join(".")}`),n.shift()}var Ze={_t:Ye,ft:Qe};const et="Main",tt="optimizelyOptOut",nt=()=>window&&document&&window.MutationObserver,it=()=>window&&window.optlyDesktop&&void 0!==window.optlyDesktop.p13nInner;var rt=(e,t=null)=>{if(q.de(),it())return void C.S(`${et} /  Disabling because of desktop app.`);if(!b.m(e))return void R(et,{message:"0.1: Not a valid input"});const n=e.snippetURL;if(n){let t,i,r;const o=()=>b.l(n),s=e.experimental&&e.experimental.features.tracking_snippet_install;if(s){s.enabled&&(({install_mode:t,delay:i,preload:r}=s),t=t.toLowerCase());const e=i>=0?()=>setTimeout(o,i):o;"load"===t?window.onload=e:"domcontentloaded"===t?window.addEventListener("DOMContentLoaded",e):(t&&C.P(`Ignoring unknown install mode: ${t}`),e()),r&&b.h(n)}else e.trackingSnippetOnload?window.onload=o:o()}if(nt()){if(e.optIn&&(C.S(`${et} / Processing opt in`),Ze.ft(tt)),e.visitorIdCookie&&Ze._t(e.visitorIdCookie),"projectJS"in e&&K.he(e.projectJS),e.disableTracking||(P.R(e),P.j(e)),e.disableTracking||We.dt(e),"changeSets"in e){const t=e.changeSets.reduce((e,t)=>{const{changes:n,viewId:i}=t;return e[i]||(e[i]=[]),e[i].push(De.Je(n)),e},{});Object.keys(t).length&&De.qe(t)}if("activeClickEvents"in e&&!e.disableTracking){const t=Object.keys(e.activeClickEvents);t.length&&(Le.ot(),t.forEach(t=>e.activeClickEvents[t].forEach(Le.rt)),Le.st(e.activeClickEvents))}}else R(et,{message:"0.2: Not a supported environment"})};const ot="https://rum.optimizely.com/rum";function st(e,t){const{accountId:n,dynamicWebsiteSupport:i,experimental:r,projectId:o,revision:s,rum:a}=e,{id:c,inRumSample:u,sampleRate:d}=a;if(!u)return window.optimizely.push({type:"rum",eventData:{inRumSample:u}}),Promise.resolve();const l={sampleRate:d,extras:{edge:Object.assign(at(),{microsnippetTimestamp:t,spa:i||!1}),experimental:r}};window.optimizely.push({type:"rum",eventData:{id:c,inRumSample:u,data:l}});const h=Object.assign({id:c,v:"1.0",account:n,project:o,revision:s,clientVersion:"____v1_34_0"},l),_=(e,t)=>Object.assign({},e,{extras:Object.assign({},e.extras,{[t]:!0,beacon:{microsnippet:!0}})});return"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(ot,JSON.stringify(_(h,"sendBeacon"))),fetch(ot,{method:"POST",credentials:"include",body:JSON.stringify(_(h,"fetch")),headers:{"Content-Type":"text/plain;charset=UTF-8"}})}function at(){const{async:e}=Ke.lt(),{defer:t,src:n}=Ke.lt();return{async:e,defer:t,performanceMeasures:ut(),subresource:ct(n),unsafeTrackingGlobalPushUsed:d.get("unsafeTrackingGlobalPushUsed")||!1}}function ct(e){if(!e)return;const t=v(e),n=o.t()?o.i(e)[0].toJSON():null;return{scheme:t.protocol.slice(0,-1),host:t.host,path:t.pathname,resourceTiming:n}}function ut(){if(!o.t())return;const e={"time-to-edge-complete":[void 0,"edge-end"],"edge-execution":["edge-begin","edge-end"]};return Object.keys(e).reduce((t,n)=>{o.s(n,e[n][0],e[n][1]);const{startTime:i,duration:r}=o.i(n)[0];return t[n]={startTime:i,duration:r},t},{})}var dt="Index";try{lt()}catch(ht){try{R(dt,{message:"0.0: Main: Unhandled error",err:ht})}catch(_t){console.warn(ht)}}function lt(){if(window.optimizelyEdge&&window.optimizelyEdge.le||window.optimizely&&window.optimizely.initialized)console.warn("Disabling this snippet because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else{o.t()&&o.o("edge-begin");var e={"accountId":"148927072","activeClickEvents":{},"activeViews":[],"changeSets":[],"decisions":[],"dynamicWebsiteSupport":true,"forceVariationIds":[],"projectId":"17796810052","queryParams":[],"requestId":"67f1c454dadbe730","revision":"7307","rum":{"inRumSample":false,"sampleRate":0.003},"snippetURL":"https://cdn.optimizely.com/public/148927072/17796810052/7307_c06c8aa4204c1ce48f612d0930b642462f87e831da7d77bd15e2ceb36b03e69d_edge_helper.js","targetPageURL":"https://searchenterpriseai.techtarget.com/","trackingSnippetOnload":false,"viewStates":{"20093665037":false,"20236180999":false},"visitorId":"oeu1629023087261r0.8495841349782567","visitorIdCookie":"optimizelyEndUserId=oeu1629023087261r0.8495841349782567; Max-Age=15552000; Domain=techtarget.com; Path=/","visitorIp":"112.196.188.27"},t=null;d.set("msVersion","____v1_34_0"),d.set("requestId",e.requestId),d.set("projectId",e.projectId),d.set("data",e),d.set("disableTracking",e.disableTracking),d.set("dynamicWebsiteSupport",e.dynamicWebsiteSupport),rt(e,t),o.t()&&(o.o("edge-end"),o.s("edgeExecution","edge-end","edge-begin")),"rum"in e&&st(e,Date.now()).then(e=>{e&&e.status&&C.S(`${dt} / Tracked RUM: ${e.status}`)},e=>{R(dt,{message:"0.3: RUM Error",err:e})})}}}();

})()