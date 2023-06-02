"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2],{360:(T,p,s)=>{s.d(p,{H:()=>o});var m=s(1135),g=s(4650);let o=(()=>{class u{constructor(){this.imageQrSource=new m.X(null),this.currentQrImage=this.imageQrSource.asObservable()}changeQrImage(h){this.imageQrSource.next(h)}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2:(T,p,s)=>{s.r(p),s.d(p,{QrGeneratorPageModule:()=>L});var m=s(6895),g=s(433),o=s(2078),u=s(2435),Q=s(655),h=s(5698),v=s(100);const f={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let C;const Z=new Uint8Array(16);function y(){if(!C&&(C=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!C))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(Z)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));const b=function S(t,i,n){if(f.randomUUID&&!i&&!t)return f.randomUUID();const r=(t=t||{}).random||(t.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,i){n=n||0;for(let a=0;a<16;++a)i[n+a]=r[a];return i}return function _(t,i=0){return(l[t[i+0]]+l[t[i+1]]+l[t[i+2]]+l[t[i+3]]+"-"+l[t[i+4]]+l[t[i+5]]+"-"+l[t[i+6]]+l[t[i+7]]+"-"+l[t[i+8]]+l[t[i+9]]+"-"+l[t[i+10]]+l[t[i+11]]+l[t[i+12]]+l[t[i+13]]+l[t[i+14]]+l[t[i+15]]).toLowerCase()}(r)};var G=s(4953),e=s(4650),U=s(5197),M=s(7935),D=s(360);function A(t,i){if(1&t&&e._UZ(0,"qrcode",17),2&t){const n=e.oxw();e.Q6J("qrdata",n.qrData)("width",n.width)("errorCorrectionLevel",n.errorCorrectionLevel)}}let I=(()=>{class t{constructor(n,r,a,d,c,q,Y){this.router=n,this.modalCtrl=r,this.renderer=a,this.db=d,this.qrgeneratorService=c,this.loaderCtrl=q,this.imageQrService=Y,this.uuid=b(),this.isGenerated=!0}ngOnInit(){}onCloseModal(){this.modalCtrl.dismiss(null,"cancel")}storeData(n){this.loaderCtrl.create({message:"Storing data....."}).then(r=>{r.present(),this.db.list("qrcodes").push({qruuid:this.uuid,title:this.qrTitle,data:this.qrData,width:this.width,errorCorrectionLevel:this.errorCorrectionLevel}).then(()=>{const a=new G.F(this.uuid,Math.random().toString(),this.qrTitle,this.qrData,this.width,this.errorCorrectionLevel,this.qrgeneratorService.authService.userId);this.qrgeneratorService.addingQrCode(a),r.dismiss(),n.reset(),this.modalCtrl.dismiss(null,"cancel")})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(o.IN),e.Y36(e.Qsj),e.Y36(U.KQ),e.Y36(M.w),e.Y36(o.HT),e.Y36(D.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-qrcode"]],viewQuery:function(n,r){if(1&n&&e.Gf(v.V,5),2&n){let a;e.iGM(a=e.CRH())&&(r.qrCode=a.first)}},decls:39,vars:6,consts:[["slot","start"],["size","large",3,"click"],["name","close-circle-outline"],["slot","end"],["size","large",3,"disabled","click"],["name","save-outline"],["form","ngForm"],["position","floating"],["type","text","name","qrTitle","type","text","required","",3,"ngModel","ngModelChange"],["type","text","name","qrData","type","text","required","",3,"ngModel","ngModelChange"],["type","number","name","width","type","number","required","",3,"ngModel","ngModelChange"],["name","errorCorrectionLevel","required","",3,"ngModel","ngModelChange"],["value","L"],["value","M"],["value","Q"],["value","H"],[3,"qrdata","width","errorCorrectionLevel",4,"ngIf"],[3,"qrdata","width","errorCorrectionLevel"]],template:function(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Create a New QR Code "),e.qZA(),e.TgZ(4,"ion-buttons",0)(5,"ion-button",1),e.NdJ("click",function(){return r.onCloseModal()}),e._UZ(6,"ion-icon",2),e.qZA()(),e.TgZ(7,"ion-buttons",3)(8,"ion-button",4),e.NdJ("click",function(){e.CHM(a);const c=e.MAs(12);return e.KtG(r.storeData(c))}),e._UZ(9,"ion-icon",5),e.qZA()()()(),e.TgZ(10,"ion-content")(11,"form",null,6)(13,"ion-list")(14,"ion-item")(15,"ion-label",7),e._uU(16,"Title"),e.qZA(),e.TgZ(17,"ion-input",8),e.NdJ("ngModelChange",function(c){return r.qrTitle=c}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label",7),e._uU(20,"QR Code Data"),e.qZA(),e.TgZ(21,"ion-input",9),e.NdJ("ngModelChange",function(c){return r.qrData=c}),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-label",7),e._uU(24,"Width"),e.qZA(),e.TgZ(25,"ion-input",10),e.NdJ("ngModelChange",function(c){return r.width=c}),e.qZA()(),e.TgZ(26,"ion-item")(27,"ion-label",7),e._uU(28,"Error Correction Level"),e.qZA(),e.TgZ(29,"ion-select",11),e.NdJ("ngModelChange",function(c){return r.errorCorrectionLevel=c}),e.TgZ(30,"ion-select-option",12),e._uU(31,"L (Low)"),e.qZA(),e.TgZ(32,"ion-select-option",13),e._uU(33,"M (Medium)"),e.qZA(),e.TgZ(34,"ion-select-option",14),e._uU(35,"Q (Quartile)"),e.qZA(),e.TgZ(36,"ion-select-option",15),e._uU(37,"H (High)"),e.qZA()()()()(),e.YNc(38,A,1,3,"qrcode",16),e.qZA()}if(2&n){const a=e.MAs(12);e.xp6(8),e.Q6J("disabled",!a.valid),e.xp6(9),e.Q6J("ngModel",r.qrTitle),e.xp6(4),e.Q6J("ngModel",r.qrData),e.xp6(4),e.Q6J("ngModel",r.width),e.xp6(4),e.Q6J("ngModel",r.errorCorrectionLevel),e.xp6(9),e.Q6J("ngIf",a.valid)}},dependencies:[m.O5,g._Y,g.JJ,g.JL,g.Q7,g.On,g.F,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.t9,o.n0,o.wd,o.sr,o.as,o.QI,o.j9,v.V]}),t})();const w=function(t){return["/","qr-generator",t]};function J(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item-sliding",null,5)(2,"ion-item",6)(3,"ion-label")(4,"h2"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-item-options")(7,"ion-item-option",7),e.NdJ("click",function(){const d=e.CHM(n).$implicit,c=e.MAs(1),q=e.oxw();return e.KtG(q.onCancelQrCode(d.qruuid,c))}),e._UZ(8,"ion-icon",8),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(2,w,n.qid)),e.xp6(3),e.Oqu(n.qrTitle)}}const P=[{path:"",component:(()=>{class t{constructor(n,r,a,d){this.qrGeneratorService=n,this.cd=r,this.loadingCtrl=a,this.modalCtrl=d}fetchQRCodes(){this.qrGeneratorService.fetchDatafromDb().subscribe(n=>{this.loadedQr=n,console.log(this.loadedQr)})}ngOnInit(){return(0,Q.mG)(this,void 0,void 0,function*(){this.fetchQRCodes();const n=yield this.qrGeneratorService.fetchDatafromDb().pipe((0,h.q)(1)).toPromise();this.qrGeneratorService._qrcodes.next(n),this.loadedQr=n,this.qrcodesSub=this.qrGeneratorService.qrcodes.subscribe(r=>{this.loadedQr=r}),this.deletedQrCodeSub=this.qrGeneratorService.qrCodeDeleted$.subscribe(r=>{console.log("Deleted ID:",r),r&&(this.loadedQr=[...this.loadedQr.filter(a=>a.qid!==r)],this.cd.detectChanges())})})}ngOnDestroy(){this.qrcodesSub&&this.qrcodesSub.unsubscribe(),this.deletedQrCodeSub&&this.deletedQrCodeSub.unsubscribe()}onCreateNewQrCode(){console.log("Openning Modal"),this.modalCtrl.create({component:I}).then(n=>{n.present()})}onCancelQrCode(n,r){console.log("from pagets",n),r.close(),this.loadingCtrl.create({message:"Deleting Qrcode ...."}).then(a=>{a.present(),console.log("from pagets",n),this.qrGeneratorService.cancelQrcode(n).subscribe(()=>{this.loadedQr=this.loadedQr.filter(d=>d.qruuid!==n),a.dismiss().then(()=>{})})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(M.w),e.Y36(e.sBO),e.Y36(o.HT),e.Y36(o.IN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-qr-generator"]],decls:13,vars:1,consts:[["slot","end"],["size","large",3,"click"],["name","add-circle-outline"],["size","12","size-sm","8","offset-sm","2","text-center",""],[4,"ngFor","ngForOf"],["slidingQrCode",""],[3,"routerLink"],["color","danger",3,"click"],["name","trash","slot","icon-only"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3," QR Code Generator "),e.qZA(),e.TgZ(4,"ion-buttons",0)(5,"ion-button",1),e.NdJ("click",function(){return r.onCreateNewQrCode()}),e._UZ(6,"ion-icon",2),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"ion-grid")(9,"ion-row")(10,"ion-col",3)(11,"ion-list"),e.YNc(12,J,9,4,"ion-item-sliding",4),e.qZA()()()()()),2&n&&(e.xp6(12),e.Q6J("ngForOf",r.loadedQr))},dependencies:[m.sg,o.YG,o.Sm,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Ie,o.u8,o.IK,o.td,o.Q$,o.q_,o.Nd,o.wd,o.sr,o.YI,u.rH]}),t})()},{path:":qrcodeId",loadChildren:()=>s.e(4682).then(s.bind(s,4682)).then(t=>t.QrcodeDetailPageModule)}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(P),u.Bz]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,g.u5,o.Pc,x,v.N]}),t})()}}]);