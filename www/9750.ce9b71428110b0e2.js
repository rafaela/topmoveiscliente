"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9750],{9750:(k,d,a)=>{a.r(d),a.d(d,{HomePageModule:()=>Y});var p=a(6814),s=a(6728),_=a(95),u=a(4248),g=a(5861),f=a(9257),v=a(2322),t=a(6242),P=a(4800),h=a(4414),C=a(9862);let x=(()=>{var e;class r{constructor(o,i){this.http=o,this.loadingCtrl=i}buscaCep(o){var i=this;return(0,g.Z)(function*(){const c=yield i.loadingCtrl.create({message:"Aguarde..."});c.present(),i.http.get("https://viacep.com.br/ws/"+o+"/json/").subscribe(m=>(c.dismiss(),m.erro?{}:m))})()}consultaRota(o,i,c){}}return(e=r).\u0275fac=function(o){return new(o||e)(t.LFG(C.eN),t.LFG(h.HT))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),r})(),Z=(()=>{var e;class r{constructor(o){this.router=o,this.nameProduct="Name Product",this.littleDescription="Little Description",this.valueProduct="Value Product",this.imageProduct="https://ionicframework.com/docs/img/demos/card-media.png"}ngOnInit(){}}return(e=r).\u0275fac=function(o){return new(o||e)(t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-product"]],inputs:{nameProduct:"nameProduct",littleDescription:"littleDescription",valueProduct:"valueProduct",imageProduct:"imageProduct"},decls:8,vars:4,consts:[[1,"images",3,"alt","src"],[1,"value"]],template:function(o,i){1&o&&(t.TgZ(0,"div")(1,"ion-card"),t._UZ(2,"img",0),t.TgZ(3,"ion-card-header")(4,"ion-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"ion-card-subtitle",1),t._uU(7),t.qZA()()()()),2&o&&(t.xp6(2),t.s9C("alt",i.nameProduct),t.s9C("src",i.imageProduct,t.LSH),t.xp6(3),t.Oqu(i.nameProduct),t.xp6(2),t.Oqu(i.valueProduct))},styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse;font-family:Lato,sans-serif}ion-card[_ngcontent-%COMP%]{width:250px;height:400px;display:inline-block;font-family:Lato,sans-serif}ion-card[_ngcontent-%COMP%]:hover{cursor:pointer}.value[_ngcontent-%COMP%]{color:var(--primary);font-weight:700;font-family:Lato,sans-serif}.images[_ngcontent-%COMP%]{width:250px}"]}),r})();var y=a(2301);function T(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"ion-icon",18),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().index,c=t.oxw();return t.KtG(c.menuItemHandler(i))}),t.qZA()}}function H(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"ion-item",20),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,c=t.oxw(3);return t.KtG(c.produtosSubcategoria(i))}),t._uU(1),t.qZA()}if(2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.name,"")}}function w(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,H,2,1,"ion-item",19),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",n.show)}}function U(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,w,2,1,"div",14),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.subcategories)}}function b(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"ion-list",15)(1,"ion-item")(2,"span",1),t.NdJ("click",function(){const c=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.produtosCategoria(c))}),t._uU(3),t.qZA(),t.YNc(4,T,1,0,"ion-icon",16),t.qZA(),t.YNc(5,U,2,1,"div",17),t.qZA()}if(2&e){const n=r.$implicit;t.xp6(3),t.Oqu(n.name),t.xp6(1),t.Q6J("ngIf",n.subcategories.length>0),t.xp6(1),t.Q6J("ngIf",n.show)}}function O(e,r){if(1&e&&(t.TgZ(0,"ion-badge",21),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.amountProducts)}}function A(e,r){if(1&e&&(t.TgZ(0,"swiper-slide"),t._UZ(1,"img",22),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.s9C("src",n.image,t.LSH),t.s9C("alt",n.name)}}function M(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"ion-col")(1,"app-card-product",23),t.NdJ("click",function(){const c=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.openProduct(c.id))}),t.ALo(2,"formatNumber"),t.qZA()()}if(2&e){const n=r.$implicit;t.xp6(1),t.s9C("imageProduct",n.photos[0].urlImage),t.s9C("nameProduct",n.name),t.s9C("valueProduct",t.xi3(2,3,n.value,"currency"))}}(0,f.z2)();const F=[{path:"",component:(()=>{var e;class r{constructor(o,i,c,l,m,S){this.api=o,this.loadingCtrl=i,this.router=c,this.activatedRoute=l,this.popoverController=m,this.cep=S,this.categories=[],this.highligths=[],this.products=[],this.name="Nome",this.cart=[],this.amountProducts=0,this.client={},this.buscaCep()}buscaCep(){return(0,g.Z)(function*(){})()}ngOnInit(){this.getDataCategories(),this.cart=JSON.parse(localStorage.getItem("cart")),this.cart&&this.cart.forEach(o=>{this.amountProducts+=o.amount}),this.client=JSON.parse(localStorage.getItem("cliente")),this.name=null!=this.client&&null!=this.client.name?this.client.name:""}menuItemHandler(o){this.categories[o].show=!this.categories[o].show}produtosCategoria(o){this.router.navigateByUrl("categoria/"+o.id,{replaceUrl:!0})}produtosSubcategoria(o){this.router.navigateByUrl("subcategoria/"+o.id,{replaceUrl:!0})}getDataCategories(){var o=this;return(0,g.Z)(function*(){const i=yield o.loadingCtrl.create({message:"Aguarde..."});i.present(),o.api.getCategories().subscribe(c=>{o.categories=c.data,o.categories.forEach(l=>{l.show=!1})}),o.api.getProductsFeatured().subscribe(c=>{o.products=c.data}),o.api.getHighlights().subscribe(c=>{i.dismiss(),o.highligths=c.data})})()}openProduct(o){this.router.navigateByUrl("detalhe/"+o,{replaceUrl:!0})}home(){this.router.navigateByUrl("home",{replaceUrl:!0})}customer(o){this.client?this.router.navigateByUrl("cliente",{replaceUrl:!0}):(localStorage.setItem("tela","cliente"),this.router.navigateByUrl("login",{replaceUrl:!0}))}viewCart(){this.client?this.router.navigateByUrl("carrinho",{replaceUrl:!0}):(localStorage.setItem("tela","carrinho"),this.router.navigateByUrl("login",{replaceUrl:!0}))}login(){this.router.navigateByUrl("login",{replaceUrl:!0})}myAccount(){}presentPopover(o){var i=this;return(0,g.Z)(function*(){i.popover=yield i.popoverController.create({component:v.U,event:o}),yield i.popover.present()})()}}return(e=r).\u0275fac=function(o){return new(o||e)(t.Y36(P.s),t.Y36(h.HT),t.Y36(u.F0),t.Y36(u.gz),t.Y36(s.Dh),t.Y36(x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:29,vars:7,consts:[["contentId","main-content"],[3,"click"],[1,"ion-padding"],["class","list","id","sidenav",4,"ngFor","ngForOf"],["id","main-content",1,"ion-page"],["slot","start"],["slot","secondary"],["slot","icon-only","name","person-circle",1,"icon-navbar"],[2,"margin-right","15px",3,"click"],["slot","icon-only","name","cart-outline",1,"icon-navbar"],["color","primary",4,"ngIf"],[2,"cursor","pointer"],["src","../../../assets/images/logo.png",2,"width","125px"],["wiper-container","",3,"loop","pagination"],[4,"ngFor","ngForOf"],["id","sidenav",1,"list"],["name","chevron-down-outline","class","right",3,"click",4,"ngIf"],[4,"ngIf"],["name","chevron-down-outline",1,"right",3,"click"],["submenu-item","",3,"click",4,"ngIf"],["submenu-item","",3,"click"],["color","primary"],[3,"src","alt"],[3,"imageProduct","nameProduct","valueProduct","click"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",1),t.NdJ("click",function(){return i.customer(0)}),t._uU(4),t.qZA()()(),t.TgZ(5,"ion-content",2),t.YNc(6,b,6,3,"ion-list",3),t.qZA()(),t.TgZ(7,"div",4)(8,"ion-header")(9,"ion-toolbar")(10,"ion-buttons",5),t._UZ(11,"ion-menu-button"),t.qZA(),t.TgZ(12,"ion-buttons",6)(13,"ion-row")(14,"ion-col")(15,"ion-button",1),t.NdJ("click",function(l){return i.presentPopover(l)}),t._UZ(16,"ion-icon",7),t.qZA()(),t.TgZ(17,"ion-col")(18,"ion-button",8),t.NdJ("click",function(){return i.viewCart()}),t._UZ(19,"ion-icon",9),t.YNc(20,O,2,1,"ion-badge",10),t.qZA()()()(),t.TgZ(21,"ion-title",11),t._UZ(22,"img",12),t.qZA()()(),t.TgZ(23,"ion-content",2)(24,"ion-content")(25,"swiper-container",13),t.YNc(26,A,2,2,"swiper-slide",14),t.qZA()(),t.TgZ(27,"ion-row"),t.YNc(28,M,3,6,"ion-col",14),t.qZA()()()),2&o&&(t.xp6(4),t.Oqu(i.name),t.xp6(2),t.Q6J("ngForOf",i.categories),t.xp6(14),t.Q6J("ngIf",i.amountProducts>0),t.xp6(5),t.Q6J("loop",!0)("pagination",!0),t.xp6(1),t.Q6J("ngForOf",i.highligths),t.xp6(2),t.Q6J("ngForOf",i.products))},dependencies:[p.sg,p.O5,s.yp,s.YG,s.Sm,s.wI,s.W2,s.Gu,s.gu,s.Ie,s.q_,s.z0,s.fG,s.Nd,s.wd,s.sr,Z,y.w],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}swiper-container[_ngcontent-%COMP%]{width:100%;height:80%;border:1px solid #8c8c8c;color:var(--primary)}swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"]}),r})()}];let N=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(F),u.Bz]}),r})();var I=a(822),J=a(8764);let Y=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,_.u5,s.Pc,N,I.D,J.h]}),r})()}}]);