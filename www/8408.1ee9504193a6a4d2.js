"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8408],{8408:(w,m,c)=>{c.r(m),c.d(m,{MyRequestPageModule:()=>R});var g=c(6814),d=c(95),r=c(6728),u=c(4248),p=c(5861),_=c(2322),t=c(6242),f=c(4800),h=c(4414),y=c(2301);function v(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"ion-icon",18),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().index,s=t.oxw();return t.KtG(s.menuItemHandler(n))}),t.qZA()}}function Z(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"ion-item",21),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,s=t.oxw(3);return t.KtG(s.produtosSubcategoria(n))}),t._uU(1),t.qZA()}if(2&e){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.name,"")}}function x(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Z,2,1,"ion-item",20),t.qZA()),2&e){const o=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",o.show)}}function q(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,x,2,1,"div",19),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",o.subcategories)}}function T(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"ion-list",15)(1,"ion-item")(2,"span",1),t.NdJ("click",function(){const s=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.produtosCategoria(s))}),t._uU(3),t.qZA(),t.YNc(4,v,1,0,"ion-icon",16),t.qZA(),t.YNc(5,q,2,1,"div",17),t.qZA()}if(2&e){const o=a.$implicit;t.xp6(3),t.Oqu(o.name),t.xp6(1),t.Q6J("ngIf",o.subcategories.length>0),t.xp6(1),t.Q6J("ngIf",o.show)}}function M(e,a){if(1&e&&(t.TgZ(0,"ion-badge",22),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.amountProducts)}}function U(e,a){if(1&e&&(t.TgZ(0,"ion-row",29)(1,"ion-col",30),t._UZ(2,"img",31),t.qZA(),t.TgZ(3,"ion-col",32)(4,"p",33),t._uU(5),t.qZA(),t.TgZ(6,"p",34),t._uU(7,"Valor unit\xe1rio: "),t.TgZ(8,"span",25),t._uU(9),t.ALo(10,"formatNumber"),t.qZA()(),t.TgZ(11,"p",33),t._uU(12),t.qZA()()()),2&e){const o=a.$implicit;t.xp6(2),t.s9C("src",o.photos[0].urlImage,t.LSH),t.xp6(3),t.Oqu(o.name),t.xp6(4),t.Oqu(t.xi3(10,4,o.value,"currency")),t.xp6(3),t.hij("Quantidade: ",o.amount,"")}}function P(e,a){if(1&e&&(t.TgZ(0,"div",23)(1,"ion-row")(2,"ion-col")(3,"p",24),t._uU(4,"Pedido: "),t.TgZ(5,"span",25),t._uU(6),t.qZA()()(),t.TgZ(7,"ion-col")(8,"p",26),t._uU(9,"Status da entrega: "),t.TgZ(10,"span",25),t._uU(11),t.qZA()()()(),t.TgZ(12,"ion-row")(13,"ion-col")(14,"p",27),t._uU(15,"Data da compra: "),t.TgZ(16,"span",25),t._uU(17),t.qZA()()(),t.TgZ(18,"ion-col")(19,"p",27),t._uU(20,"Valor total: "),t.TgZ(21,"span",25),t._uU(22),t.ALo(23,"formatNumber"),t.qZA()()(),t.TgZ(24,"ion-col")(25,"p",27),t._uU(26,"Status de pagamento: "),t.TgZ(27,"span",25),t._uU(28),t.qZA()()()(),t.YNc(29,U,13,7,"ion-row",28),t.qZA()),2&e){const o=a.$implicit;t.xp6(6),t.Oqu(o.name),t.xp6(5),t.Oqu(o.deliveryStatus),t.xp6(6),t.Oqu(o.dateSale),t.xp6(5),t.Oqu(t.xi3(23,6,o.valorTotal,"currency")),t.xp6(6),t.Oqu(o.paymentStatus),t.xp6(1),t.Q6J("ngForOf",o.products)}}const C=[{path:"",component:(()=>{var e;class a{constructor(i,n,s,l,O){this.api=i,this.loadingCtrl=n,this.router=s,this.activatedRoute=l,this.popoverController=O,this.categories=[],this.client={},this.amountProducts=0,this.cart=[],this.name="Nome",this.sales=[]}ngOnInit(){this.getDataCategories(),this.cart=JSON.parse(localStorage.getItem("cart")),this.cart&&this.cart.forEach(i=>{this.amountProducts+=i.amount}),this.client=JSON.parse(localStorage.getItem("cliente")),this.idCliente=this.client.id,this.name=null!=this.client&&null!=this.client.name?this.client.name:"",this.getDataSale()}menuItemHandler(i){this.categories[i].show=!this.categories[i].show}produtosCategoria(i){this.router.navigateByUrl("categoria/"+i.id,{replaceUrl:!0})}produtosSubcategoria(i){this.router.navigateByUrl("subcategoria/"+i.id,{replaceUrl:!0})}getDataSale(){var i=this;return(0,p.Z)(function*(){const n=yield i.loadingCtrl.create({message:"Aguarde..."});n.present(),i.api.getDataSale(i.idCliente).subscribe(s=>{n.dismiss(),i.sales=s.data})})()}getDataCategories(){var i=this;return(0,p.Z)(function*(){const n=yield i.loadingCtrl.create({message:"Aguarde..."});n.present(),i.api.getCategories().subscribe(s=>{n.dismiss(),i.categories=s.data,i.categories.forEach(l=>{l.show=!1})})})()}presentPopover(i){var n=this;return(0,p.Z)(function*(){n.popover=yield n.popoverController.create({component:_.U,event:i}),yield n.popover.present()})()}home(){this.router.navigateByUrl("home",{replaceUrl:!0})}customer(i){this.client?this.router.navigateByUrl("cliente",{replaceUrl:!0}):(localStorage.setItem("tela","cliente"),this.router.navigateByUrl("login",{replaceUrl:!0}))}viewCart(){this.client?this.router.navigateByUrl("carrinho",{replaceUrl:!0}):(localStorage.setItem("tela","carrinho"),this.router.navigateByUrl("login",{replaceUrl:!0}))}login(){this.router.navigateByUrl("login",{replaceUrl:!0})}myAccount(){}}return(e=a).\u0275fac=function(i){return new(i||e)(t.Y36(f.s),t.Y36(h.HT),t.Y36(u.F0),t.Y36(u.gz),t.Y36(r.Dh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-my-request"]],decls:29,vars:4,consts:[["contentId","main-content"],[3,"click"],[1,"ion-padding"],["class","list","id","sidenav",4,"ngFor","ngForOf"],["id","main-content",1,"ion-page"],["slot","start"],["slot","secondary"],["slot","icon-only","name","person-circle",1,"icon-navbar"],[2,"margin-right","15px",3,"click"],["slot","icon-only","name","cart-outline",1,"icon-navbar"],["color","primary",4,"ngIf"],[2,"cursor","pointer",3,"click"],["src","../../../assets/images/logo.png",2,"width","125px"],[1,"description","font"],["style","margin-bottom: 20px !important;","class","lineCart",4,"ngFor","ngForOf"],["id","sidenav",1,"list"],["name","chevron-down-outline","class","right",3,"click",4,"ngIf"],[4,"ngIf"],["name","chevron-down-outline",1,"right",3,"click"],[4,"ngFor","ngForOf"],["submenu-item","",3,"click",4,"ngIf"],["submenu-item","",3,"click"],["color","primary"],[1,"lineCart",2,"margin-bottom","20px !important"],[1,"font","pedido",2,"margin-bottom","1px"],[1,"valueCart","font"],[1,"font",2,"margin-bottom","1px","text-align","end","margin-right","20px"],[1,"font",2,"margin-bottom","1px"],["style","margin-bottom: 0px !important;",4,"ngFor","ngForOf"],[2,"margin-bottom","0px !important"],["size","1",1,"colImage"],["alt","",1,"imageCart",3,"src"],["size","5"],[1,"font"],[2,"margin-bottom","1px"]],template:function(i,n){1&i&&(t.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",1),t.NdJ("click",function(){return n.customer(0)}),t._uU(4),t.qZA()()(),t.TgZ(5,"ion-content",2),t.YNc(6,T,6,3,"ion-list",3),t.qZA()(),t.TgZ(7,"div",4)(8,"ion-header")(9,"ion-toolbar")(10,"ion-buttons",5),t._UZ(11,"ion-menu-button"),t.qZA(),t.TgZ(12,"ion-buttons",6)(13,"ion-row")(14,"ion-col")(15,"ion-button",1),t.NdJ("click",function(l){return n.presentPopover(l)}),t._UZ(16,"ion-icon",7),t.qZA()(),t.TgZ(17,"ion-col")(18,"ion-button",8),t.NdJ("click",function(){return n.viewCart()}),t._UZ(19,"ion-icon",9),t.YNc(20,M,2,1,"ion-badge",10),t.qZA()()()(),t.TgZ(21,"ion-title",11),t.NdJ("click",function(){return n.home()}),t._UZ(22,"img",12),t.qZA()()(),t.TgZ(23,"ion-content",2)(24,"ion-row")(25,"ion-col")(26,"p",13),t._uU(27,"Meus pedidos"),t.qZA()()(),t.YNc(28,P,30,9,"div",14),t.qZA()()),2&i&&(t.xp6(4),t.Oqu(n.name),t.xp6(2),t.Q6J("ngForOf",n.categories),t.xp6(14),t.Q6J("ngIf",n.amountProducts>0),t.xp6(8),t.Q6J("ngForOf",n.sales))},dependencies:[g.sg,g.O5,r.yp,r.YG,r.Sm,r.wI,r.W2,r.Gu,r.gu,r.Ie,r.q_,r.z0,r.fG,r.Nd,r.wd,r.sr,y.w],styles:[".description[_ngcontent-%COMP%]{color:var(--primary);font-size:22px;font-family:Lato,sans-serif}.lineCart[_ngcontent-%COMP%]{box-shadow:2px 2px 2px #e0e0e0}.colImage[_ngcontent-%COMP%]{margin-top:20px}.imageCart[_ngcontent-%COMP%]{width:100px;border-radius:100px}.pedido[_ngcontent-%COMP%]{color:var(--primary)}"]}),a})()}];let A=(()=>{var e;class a{}return(e=a).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(C),u.Bz]}),a})();var b=c(8764);let R=(()=>{var e;class a{}return(e=a).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,d.u5,r.Pc,A,b.h]}),a})()}}]);