_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{29:function(e,t,n){n("j36g"),e.exports=n("u6Hu")},O2ls:function(e,t,n){"use strict";n.r(t);var a=n("ODXe"),r=n("q1tI"),i=n.n(r),o=n("g4pe"),c=n.n(o),u=n("uD2q"),s=n("20a2"),l=n("xWvD"),d=n("F1wk"),h=n("NO2j"),f=n("j0xL"),p=n("o0o1"),m=n.n(p),b=n("HaE+"),g=n("MHX4"),w=n("E+oP"),y=n.n(w),v=n("vOnD"),k=n("YFqc"),N=n.n(k),j=n("lp3x"),O=n("J/SO"),E=n("Zn9y"),_=n("Q25a"),I=i.a.createElement,P=v.default.p.withConfig({displayName:"LoginForm__Error",componentId:"bl9169-0"})(["margin:5px 0 0;font-size:1.4rem;"]),A=v.default.div.withConfig({displayName:"LoginForm__Socials",componentId:"bl9169-1"})([".social:hover{background-color:#00ffa9;}display:grid;justify-content:center;grid-auto-flow:column;grid-column-gap:5px;.loginIcon{font-size:35px;}> button{justify-self:center;}"]),S=function(){var e=Object(_.c)().setUserData,t=Object(r.useState)(!1),n=t[0],a=t[1],i=Object(r.useState)(!1),o=i[0],c=i[1],u=Object(r.useState)(null),d=u[0],f=u[1],p=Object(g.a)(),w=p.register,v=p.handleSubmit,k=p.watch,S=p.setError,W=p.errors,x=Object(r.useState)(!1),C=x[0],R=x[1],H=Object(r.useRef)(),T=Object(s.useRouter)(),q=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.a.auth().currentUser,(n=new l.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/userinfo.email"),a=l.a.auth().signInWithRedirect(n),t&&t.isAnonymous&&a.then((function(e){var n=e.credential;try{t.linkWithCredential(n).catch((function(e){}))}catch(a){}}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.a.auth().currentUser,n=new l.a.auth.GithubAuthProvider,a=l.a.auth().signInWithRedirect(n),t&&t.isAnonymous&&a.then((function(e){var n=e.credential;try{t.linkWithCredential(n).catch((function(e){}))}catch(a){}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.a.auth().currentUser,n=new l.a.auth.FacebookAuthProvider,a=l.a.auth().signInWithRedirect(n),t&&t.isAnonymous&&a.then((function(e){var n=e.credential;try{t.linkWithCredential(n).catch((function(e){}))}catch(a){}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.a.auth().currentUser,n=new l.a.auth.TwitterAuthProvider,a=l.a.auth().signInWithRedirect(n),t&&t.isAnonymous&&a.then((function(e){var n=e.credential;try{t.linkWithCredential(n).catch((function(e){}))}catch(a){}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=k("email");Object(r.useEffect)((function(){H.current.focus()}),[H]);return C?I("h3",null,"To reset your password, click the link in the email we just sent you."):o?I(h.a,null,I(O.a,{color:"info"},"Redirecting...")):I("div",null,I("h2",{className:!y()(W)||d?"denied":void 0},"Log in to Hacker Noon"),I(j.b,{onSubmit:v((function(t,n){var r=t.email,i=t.password;a(!0);var o=l.a.auth().currentUser;l.a.auth().signInWithEmailAndPassword(r,i).then((function(t){if(o&&o.isAnonymous)try{o.linkWithCredential(t.credential).catch((function(e){}))}catch(r){}var n;n=t.user,e(n),c(!0),T.back(),a(!1)})).catch((function(e){f(e.message),n.target.reset(),a(!1)}))}))},I("fieldset",null,I("div",{className:"mt-2 shadow-sm"},I("input",{tabIndex:0,id:"email",name:"email",type:"email",placeholder:"Email",ref:function(e){w(e,{required:!0}),H.current=e}})),W.email&&I(P,null,"An email address is required.")),I("fieldset",null,I("div",null,I("input",{id:"password",name:"password",type:"password",placeholder:"Password",ref:w({required:!0})}))),I("footer",null,I(E.a,{small:!0,type:"button",onClick:function(){D?l.a.auth().sendPasswordResetEmail(D).then((function(){R(!0)})).catch((function(e){console.log("Error sending password reset",e)})):S([{name:"email",message:"Please enter your email address"}])}},"Forgot password"),I(E.b,{type:"submit",disabled:n,loading:n.toString(),className:n&&"loading"},n&&I("i",{className:"far fa-spinner-third fa-spin"})," ",I("span",null,"Log in"))),I("div",{className:"button-row--google"},I(A,null,I(E.b,{className:"social",type:"button",disabled:n,onClick:q},I("i",{className:"fab fa-google loginIcon"})),I(E.b,{className:"social",type:"button",disabled:n,onClick:F},I("i",{className:"fab fa-github loginIcon"})),I(E.b,{className:"social",type:"button",disabled:n,onClick:L},I("i",{className:"fab fa-facebook loginIcon"})),I(E.b,{className:"social",type:"button",disabled:n,onClick:U},I("i",{className:"fab fa-twitter loginIcon"})))),I(N.a,{href:"/signup"},I(E.a,{small:"true",type:"button"},"I don't have a Hacker Noon account yet")),d&&I(O.a,null,d)))},W=i.a.createElement;t.default=function(){var e=Object(s.useRouter)(),t=Object(r.useState)(!1),n=t[0],i=t[1],o=Object(u.a)("Welcome back, Hackolyte."),p=Object(a.a)(o,1)[0];return Object(r.useEffect)((function(){l.a.auth().getRedirectResult().then((function(t){if(t.credential&&e.asPath.includes("redirect")){i(!0);var n=e.query.redirect;if(!n)return;e.push({pathname:n})}})).catch((function(e){console.error(e)}))}),[e.query.redirect]),W(d.a,null,W(c.a,null,W("title",null,"Log in to Hacker Noon | Hacker Noon")),W(f.b,null,W(f.a,{invert:!0},W("header",null,W("h1",null,p),W("p",null,"With your free Hacker Noon account you have access to:")),W("ul",null,W("li",null,W("h2",null,"The Tech Brief"),W("p",null,"A weekly newsletter curated by you and your personal interests")),W("li",null,W("h2",null,"The Story Submission Portal"),W("p",null,"The best place for technologists to publish (with free, professional, editorial support)")),W("li",null,W("h2",null,"The Brand-as-Author Program"),W("p",null,"Get one free credit to publish branded content when you complete your profile for business")))),W(h.b,{redirecting:n},W(S,null))))}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])}},[[29,1,2,4,7,0,3,5,6,8,9,29]]]);
//# sourceMappingURL=login-bf88a689a468c735b5ef.js.map