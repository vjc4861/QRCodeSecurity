"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7859],{7859:(_,g,l)=>{l.r(g),l.d(g,{AuthPageModule:()=>Z});var d=l(6895),s=l(433),i=l(2078),c=l(2435),t=l(4650),m=l(384);function h(n,u){1&n&&(t.TgZ(0,"ion-item",13)(1,"p"),t._uU(2,"Please enter a vaid email address "),t.qZA()())}function p(n,u){1&n&&(t.TgZ(0,"ion-item",13)(1,"p"),t._uU(2,"Please enter a vaid password with min. 8 characters"),t.qZA()())}function f(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onLogin())}),t._uU(1,"Login"),t.qZA()}if(2&n){t.oxw();const e=t.MAs(8);t.Q6J("disabled",!e.valid)}}const A=[{path:"",component:(()=>{class n{constructor(e,o,a){this.authService=e,this.router=o,this.loadingCtrl=a,this.isLoading=!1,this.isLogin=!0}ngOnInit(){}onLogin(){this.isLoading=!0,this.authService.login(),this.loadingCtrl.create({keyboardClose:!0,message:"Logging in...."}).then(e=>{e.present(),setTimeout(()=>{this.isLoading=!1,e.dismiss(),this.router.navigateByUrl("/profile")},1500)})}onChangeAuthMode(){this.isLogin=!this.isLogin}onSubmit(e){e.valid&&console.log(e.value.email,e.value.pwd)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.e),t.Y36(c.F0),t.Y36(i.HT))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:30,vars:5,consts:[["defaultHref","/tabs/home"],["padding",""],[3,"ngSubmit"],["authForm","ngForm"],["size-sm","6","offset-sm","3"],["position","floating"],["type","email","ngModel","","name","email","required","","email",""],["emailCtrl","ngModel"],["lines","none",4,"ngIf"],["type","password","ngModel","","name","password","required","","minlength","8"],["pwdCtrl","ngModel"],["type","button","color","primary","fill","clear","expand","block",3,"click"],["type","submit","color","primary","expand","block",3,"disabled","click",4,"ngIf"],["lines","none"],["type","submit","color","primary","expand","block",3,"disabled","click"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons"),t._UZ(3,"ion-back-button",0),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()()(),t.TgZ(6,"ion-content",1)(7,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(a);const P=t.MAs(8);return t.KtG(o.onSubmit(P))}),t.TgZ(9,"ion-grid")(10,"ion-row")(11,"ion-col",4)(12,"ion-list")(13,"ion-item")(14,"ion-label",5),t._uU(15,"Email"),t.qZA(),t._UZ(16,"ion-input",6,7),t.qZA(),t.YNc(18,h,3,0,"ion-item",8),t.TgZ(19,"ion-item")(20,"ion-label",5),t._uU(21,"Password"),t.qZA(),t._UZ(22,"ion-input",9,10),t.qZA(),t.YNc(24,p,3,0,"ion-item",8),t.qZA()()(),t.TgZ(25,"ion-row")(26,"ion-col",4)(27,"ion-button",11),t.NdJ("click",function(){return o.onChangeAuthMode()}),t._uU(28),t.qZA(),t.YNc(29,f,2,1,"ion-button",12),t.qZA()()()()()}if(2&e){const a=t.MAs(17),r=t.MAs(23);t.xp6(5),t.Oqu(o.isLogin?"Login":"Register"),t.xp6(13),t.Q6J("ngIf",!a.valid&&a.touched),t.xp6(6),t.Q6J("ngIf",!r.valid&&r.touched),t.xp6(4),t.hij(" Click here to ",o.isLogin?"Register":"Login",""),t.xp6(1),t.Q6J("ngIf",!o.isLoading)}},dependencies:[d.O5,s._Y,s.JJ,s.JL,s.Q7,s.wO,s.on,s.On,s.F,i.oU,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.pK,i.Ie,i.Q$,i.q_,i.Nd,i.wd,i.sr,i.j9,i.cs]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(A),c.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,s.u5,i.Pc,b]}),n})()}}]);