"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4627],{4627:(K,x,c)=>{c.r(x),c.d(x,{CartPageModule:()=>$});var m=c(6814),f=c(95),s=c(6728),u=c(4248),d=c(5861),v=c(2322),p=c(5208),h=c(5960),e=c(6242),w=c(4800),Z=c(4414),T=c(2301);function P(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-icon",19),e.NdJ("click",function(){e.CHM(a);const o=e.oxw().index,r=e.oxw();return e.KtG(r.menuItemHandler(o))}),e.qZA()}}function y(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-item",21),e.NdJ("click",function(){e.CHM(a);const o=e.oxw().$implicit,r=e.oxw(3);return e.KtG(r.produtosSubcategoria(o))}),e._uU(1),e.qZA()}if(2&i){const a=e.oxw().$implicit;e.xp6(1),e.hij(" ",a.name,"")}}function A(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,y,2,1,"ion-item",20),e.qZA()),2&i){const a=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",a.show)}}function M(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,A,2,1,"div",16),e.qZA()),2&i){const a=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",a.subcategories)}}function U(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-list",17)(1,"ion-item")(2,"span",1),e.NdJ("click",function(){const r=e.CHM(a).$implicit,l=e.oxw();return e.KtG(l.produtosCategoria(r))}),e._uU(3),e.qZA(),e.YNc(4,P,1,0,"ion-icon",18),e.qZA(),e.YNc(5,M,2,1,"div",13),e.qZA()}if(2&i){const a=n.$implicit;e.xp6(3),e.Oqu(a.name),e.xp6(1),e.Q6J("ngIf",a.subcategories.length>0),e.xp6(1),e.Q6J("ngIf",a.show)}}function q(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-row",22)(1,"ion-col",23),e._UZ(2,"img",24),e.qZA(),e.TgZ(3,"ion-col",25)(4,"p",26),e._uU(5),e.qZA(),e.TgZ(6,"p",27),e._uU(7,"Valor unit\xe1rio: "),e.TgZ(8,"span",28),e._uU(9),e.ALo(10,"formatNumber"),e.qZA()(),e.TgZ(11,"ion-input",29),e.NdJ("ngModelChange",function(o){const l=e.CHM(a).$implicit;return e.KtG(l.amount=o)})("ngModelChange",function(){e.CHM(a);const o=e.oxw();return e.KtG(o.calculaValorCompra())}),e.qZA()(),e.TgZ(12,"ion-col",30)(13,"ion-icon",31),e.NdJ("click",function(){const o=e.CHM(a),r=o.$implicit,l=o.index,g=e.oxw();return e.KtG(g.removerItem(r,l))}),e.qZA()()()}if(2&i){const a=n.$implicit;e.xp6(2),e.s9C("src",a.photo.urlImage,e.LSH),e.xp6(3),e.Oqu(a.name),e.xp6(4),e.Oqu(e.xi3(10,4,a.value,"currency")),e.xp6(2),e.Q6J("ngModel",a.amount)}}function b(i,n){1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"p",26),e._uU(3,"Carrinho vazio"),e.qZA()()())}function I(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-card")(1,"ion-checkbox",32),e.NdJ("ngModelChange",function(o){const l=e.CHM(a).$implicit;return e.KtG(l.enderecoSelecionado=o)})("ngModelChange",function(){const r=e.CHM(a).$implicit,l=e.oxw();return e.KtG(l.mudaEndereco(r))}),e._uU(2,"Endere\xe7o para entrega"),e.qZA(),e.TgZ(3,"ion-row")(4,"ion-col")(5,"p",15),e._uU(6),e.qZA()()(),e.TgZ(7,"ion-row")(8,"ion-col")(9,"p",15),e._uU(10),e.qZA()()(),e.TgZ(11,"ion-row")(12,"ion-col")(13,"p",15),e._uU(14),e.qZA()()(),e.TgZ(15,"ion-row")(16,"ion-col")(17,"p",15),e._uU(18),e.qZA()()(),e.TgZ(19,"ion-row")(20,"ion-col")(21,"p",15),e._uU(22),e.qZA()()()()}if(2&i){const a=n.$implicit;e.xp6(1),e.Q6J("ngModel",a.enderecoSelecionado),e.xp6(5),e.hij("Rua: ",a.street,""),e.xp6(4),e.AsE("N\xfamero: ",a.number,". Complemento: ",a.complement,""),e.xp6(4),e.hij("Bairro: ",a.neighborhood,""),e.xp6(4),e.AsE("Cidade: ",a.city,". CEP: ",a.cep,""),e.xp6(4),e.hij("Estado: ",a.state,"")}}function J(i,n){1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"p",33),e._uU(3,"Entrega n\xe3o dispon\xedvel para o local informado"),e.qZA()()())}function N(i,n){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"p",33),e._uU(3,"O prazo para a entrega \xe9 de "),e.TgZ(4,"span",34),e._uU(5),e.qZA(),e._uU(6," dias \xfateis."),e.qZA()()()),2&i){const a=e.oxw();e.xp6(5),e.Oqu(a.diasEntrega)}}function O(i,n){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"p",33),e._uU(3,"Valor do frete: "),e.TgZ(4,"span",34),e._uU(5),e.ALo(6,"formatNumber"),e.qZA()()()()),2&i){const a=e.oxw();e.xp6(5),e.Oqu(e.xi3(6,1,a.frete,"currency"))}}function F(i,n){1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"p",11),e._uU(3,"Forma de Pagamento"),e.qZA()()())}function k(i,n){if(1&i&&(e.TgZ(0,"ion-radio",37),e._uU(1),e.qZA()),2&i){const a=n.$implicit;e.s9C("value",a.methods),e.xp6(1),e.Oqu(a.name)}}function E(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-radio-group",35),e.NdJ("ngModelChange",function(o){e.CHM(a);const r=e.oxw();return e.KtG(r.payment=o)})("ngModelChange",function(){e.CHM(a);const o=e.oxw();return e.KtG(o.calculaValorFinal(o.payment))}),e.YNc(3,k,2,2,"ion-radio",36),e._UZ(4,"br"),e.qZA()()()}if(2&i){const a=e.oxw();e.xp6(2),e.Q6J("allowEmptySelection",!0)("ngModel",a.payment),e.xp6(1),e.Q6J("ngForOf",a.payments)}}function Q(i,n){if(1&i&&(e.TgZ(0,"ion-select-option",41),e._uU(1),e.qZA()),2&i){const a=n.$implicit;e.s9C("value",a.ID),e.xp6(1),e.Oqu(a.Name)}}function S(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col",38)(2,"ion-select",39),e.NdJ("ngModelChange",function(o){e.CHM(a);const r=e.oxw();return e.KtG(r.quantidadeParcelas=o)}),e.YNc(3,Q,2,2,"ion-select-option",40),e.qZA()()()}if(2&i){const a=e.oxw();e.xp6(2),e.Q6J("ngModel",a.quantidadeParcelas),e.xp6(1),e.Q6J("ngForOf",a.listaParcelas)}}function V(i,n){if(1&i&&(e.TgZ(0,"p",33),e._uU(1,"Valor total da compra: "),e.TgZ(2,"span",34),e._uU(3),e.ALo(4,"formatNumber"),e.qZA()()),2&i){const a=e.oxw(2);e.xp6(3),e.Oqu(e.xi3(4,1,a.valor,"currency"))}}function z(i,n){if(1&i&&(e.TgZ(0,"p",33),e._uU(1,"Valor total da compra: "),e.TgZ(2,"span",34),e._uU(3),e.ALo(4,"formatNumber"),e.qZA(),e._uU(5),e.TgZ(6,"span",34),e._uU(7),e.ALo(8,"formatNumber"),e.qZA(),e._uU(9," cada. "),e.qZA()),2&i){const a=e.oxw(2);e.xp6(3),e.Oqu(e.xi3(4,3,a.valor,"currency")),e.xp6(2),e.hij(" divido em ",a.quantidadeParcelas," parcelas de "),e.xp6(2),e.Oqu(e.xi3(8,6,a.valor/a.quantidadeParcelas,"currency"))}}function Y(i,n){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col"),e.YNc(2,V,5,4,"p",42)(3,z,10,9,"p",42),e.qZA()()),2&i){const a=e.oxw();e.xp6(2),e.Q6J("ngIf",5!=a.payment),e.xp6(1),e.Q6J("ngIf",a.payment&&5==a.payment&&a.quantidadeParcelas)}}function G(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col",43)(2,"ion-button",44),e.NdJ("click",function(){e.CHM(a);const o=e.oxw();return e.KtG(o.finalizarCompra())}),e._UZ(3,"ion-icon",45),e._uU(4," Finalizar compra"),e.qZA()()()}}const H=[{path:"",component:(()=>{var i;class n{constructor(t,o,r,l,g,_,C){this.api=t,this.loadingCtrl=o,this.activatedRoute=r,this.router=l,this.alertController=g,this.popoverController=_,this.toastController=C,this.inputMasks={cpfMask:p.tM.mask,cnpjValidation:p.s2.mask,telefoneMask:p.s4.mask,email:p.D6.pattern,cep:p.Ux.mask},this.id="",this.categories=[],this.cart=[],this.valor=0,this.isOpen=!1,this.client={login:{passwordHash:"",login:""}},this.name="",this.addresses=[],this.payments=[],this.listaParcelas=[],this.frete=0,this.sale={},this.dadosfrete={},this.diasEntrega=0,this.cepSelecionado={},this.freteGratis=!1,this.cepNaoCadastrado=!1}ngOnInit(){setTimeout(()=>{this.cart=JSON.parse(localStorage.getItem("cart")),this.client=JSON.parse(localStorage.getItem("cliente")),this.name=null!=this.client&&null!=this.client.name?this.client.name:"",this.id=this.client.id,this.filtrar()},500)}filtrar(){var t=this;return(0,d.Z)(function*(){t.calculaValorCompra(),t.getDataCategories(),t.getData()})()}menuItemHandler(t){this.categories[t].show=!this.categories[t].show}produtosCategoria(t){this.router.navigateByUrl("categoria/"+t.id,{replaceUrl:!0})}produtosSubcategoria(t){this.router.navigateByUrl("subcategoria/"+t.id,{replaceUrl:!0})}getDataCategories(){var t=this;return(0,d.Z)(function*(){const o=yield t.loadingCtrl.create({message:"Aguarde..."});o.present(),t.api.getCategories().subscribe(r=>{t.categories=r.data,t.categories.forEach(l=>{l.show=!1})}),t.api.getPayments().subscribe(r=>{o.dismiss(),t.payments=r.data})})()}home(){this.router.navigateByUrl("home",{replaceUrl:!0})}calculaValorFinal(t){this.payments.forEach(o=>{o.methods==t&&(3==t||4==t?o.discount?(this.calculaValorCompra(),this.valor=this.valor-this.valor*o.discount/100,this.valor+=this.frete):(this.calculaValorCompra(),this.valor+=this.frete):5==t?(this.totalParcelas=o.quantityInstallments,this.preparaQuantidadeParcelas(),o.fees?(this.calculaValorCompra(),this.valor=this.valor+this.valor*o.fees/100,this.valor+=this.frete):(this.calculaValorCompra(),this.valor+=this.frete)):(this.calculaValorCompra(),this.valor+=this.frete))})}preparaQuantidadeParcelas(){for(let t=1;t<=this.totalParcelas;t++)this.listaParcelas.push({ID:t,Name:t})}login(){}customer(t){this.client?this.router.navigateByUrl("cliente",{replaceUrl:!0}):(localStorage.setItem("tela","cliente"),this.router.navigateByUrl("login",{replaceUrl:!0}))}presentPopover(t){var o=this;return(0,d.Z)(function*(){o.popover=yield o.popoverController.create({component:v.U,event:t}),yield o.popover.present()})()}removerItem(t,o){t.amount>1?t.amount--:this.cart.splice(o,1),localStorage.setItem("cart",JSON.stringify(this.cart)),this.calculaValorCompra()}calculaValorCompra(){this.valor=0,this.cart&&this.cart.forEach(t=>{this.valor+=t.value*t.amount}),this.payment||(this.valor+=this.frete)}getData(){var t=this;return(0,d.Z)(function*(){if(""!=t.id||null!=t.id){const o=yield t.loadingCtrl.create({message:"Aguarde..."});o.present(),t.api.getClientByID(t.id).subscribe(r=>{o.dismiss(),t.client=r.data,t.client.birthDate=t.client.birthDate.split("T")[0],t.client.cpf=(0,h.p)(t.client.cpf,p.tM.mask).conformedValue,t.client.phone=(0,h.p)(t.client.phone,p.s4.mask).conformedValue,t.searchAddresses()})}})()}searchAddresses(){var t=this;return(0,d.Z)(function*(){const o=yield t.loadingCtrl.create({message:"Aguarde..."});o.present(),t.api.getAddresses(t.id).subscribe(r=>{o.dismiss(),t.addresses=r.data,t.addresses.forEach(l=>{l.cep=(0,h.p)(l.cep,p.Ux.mask).conformedValue,l.enderecoSelecionado=!1})})})()}mudaEndereco(t){this.addresses.forEach(o=>{o.id!=t.id&&(o.enderecoSelecionado=!1)}),this.calculaValorFrete(t)}calculaValorFrete(t){var o=this;return(0,d.Z)(function*(){o.enderecoId=t.id;let r=t.cep.split("-")[0];const l=yield o.loadingCtrl.create({message:"Aguarde..."});l.present(),o.api.getFreight(o.id).subscribe(g=>{if(l.dismiss(),g.sucess){if(o.dadosfrete=g.data,o.diasEntrega=o.dadosfrete.timeDeliveryDays,o.valor>=o.dadosfrete.valuePriceFreeShipping)o.frete=0,o.calculaValorCompra();else{let _=o.dadosfrete.cities.findIndex(C=>C.cep.includes(r));_<0?o.cepNaoCadastrado=!0:(o.cepNaoCadastrado=!1,o.frete=o.dadosfrete.cities[_].value,o.calculaValorCompra())}o.calculaValorCompra()}})})()}finalizarCompra(){var t=this;return(0,d.Z)(function*(){if(null==t.payment)yield(yield t.toastController.create({message:"Selecione a forma de pagamento",duration:1500,position:"bottom"})).present();else if(t.cepNaoCadastrado)yield(yield t.toastController.create({message:"Informe um endere\xe7o v\xe1lido",duration:1500,position:"bottom"})).present();else{t.sale.ClientId=t.id,t.sale.ProductsSale=t.cart,t.sale.ValorTotal=t.valor,t.sale.PaymentMethod=parseInt(t.payment),t.sale.AddressId=t.enderecoId;const o=yield t.loadingCtrl.create({message:"Aguarde..."});o.present(),t.api.createSale(t.sale).subscribe(r=>{o.dismiss(),r.sucess&&(localStorage.setItem("cart",null),t.router.navigateByUrl("vendafinalizada/"+r.data.id,{replaceUrl:!0}))})}})()}}return(i=n).\u0275fac=function(t){return new(t||i)(e.Y36(w.s),e.Y36(Z.HT),e.Y36(u.gz),e.Y36(u.F0),e.Y36(Z.Br),e.Y36(s.Dh),e.Y36(s.yF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-cart"]],decls:58,vars:17,consts:[["contentId","main-content"],[3,"click"],[1,"ion-padding"],["class","list","id","sidenav",4,"ngFor","ngForOf"],["id","main-content",1,"ion-page",2,"margin-bottom","15px"],["slot","start"],[2,"cursor","pointer",3,"click"],["src","../../../assets/images/logo.png",2,"width","125px"],["slot","secondary"],["slot","icon-only","name","person-circle",1,"icon-navbar"],[1,"descricao"],[1,"description","font"],["style","margin-bottom: 20px !important;","class","lineCart",4,"ngFor","ngForOf"],[4,"ngIf"],[1,""],[1,"font","margin"],[4,"ngFor","ngForOf"],["id","sidenav",1,"list"],["name","chevron-down-outline","class","right",3,"click",4,"ngIf"],["name","chevron-down-outline",1,"right",3,"click"],["submenu-item","",3,"click",4,"ngIf"],["submenu-item","",3,"click"],[1,"lineCart",2,"margin-bottom","20px !important"],["size","2",1,"colImage"],["alt","",1,"imageCart",3,"src"],["size","9"],[1,"font"],[2,"margin-bottom","1px"],[1,"valueCart","font"],["label","Quantidade:","max","99","min","0","type","number","placeholder","000",1,"inputNumber","font",2,"width","150px",3,"ngModel","ngModelChange"],["size","1"],["name","trash-outline",1,"btn-trash",3,"click"],["labelPlacement","end",3,"ngModel","ngModelChange"],[1,"font",2,"font-size","20px"],[1,"font",2,"color","var(--primary)","font-size","20px"],["value","turtles",3,"allowEmptySelection","ngModel","ngModelChange"],["style","margin-left: 20px;",3,"value",4,"ngFor","ngForOf"],[2,"margin-left","20px",3,"value"],["col-3",""],["label","Quantidade de Parcelas","label-placement","floating",1,"font",2,"width","190px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","font","style"," font-size: 20px;",4,"ngIf"],["sizeLg","6","sizeMd","6","sizeXs","12"],["expand","block","shape","round",1,"font",3,"click"],["name","checkmark-outline",2,"margin-right","5px"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",1),e.NdJ("click",function(){return o.customer(0)}),e._uU(4),e.qZA()()(),e.TgZ(5,"ion-content",2),e.YNc(6,U,6,3,"ion-list",3),e.qZA()(),e.TgZ(7,"div",4)(8,"ion-header")(9,"ion-toolbar")(10,"ion-buttons",5),e._UZ(11,"ion-menu-button"),e.qZA(),e.TgZ(12,"ion-title",6),e.NdJ("click",function(){return o.home()}),e._UZ(13,"img",7),e.qZA(),e.TgZ(14,"ion-buttons",8)(15,"ion-row")(16,"ion-col")(17,"ion-button",1),e.NdJ("click",function(l){return o.presentPopover(l)}),e._UZ(18,"ion-icon",9),e.qZA()()()()()(),e.TgZ(19,"ion-content",2)(20,"ion-row")(21,"ion-col")(22,"ion-row")(23,"ion-col",10)(24,"p",11),e._uU(25,"Carrinho de compras"),e.qZA()()(),e.YNc(26,q,14,7,"ion-row",12)(27,b,4,0,"ion-row",13),e.qZA(),e.TgZ(28,"ion-col")(29,"ion-row")(30,"ion-col",10)(31,"p",11),e._uU(32,"Dados do Cliente"),e.qZA()()(),e.TgZ(33,"ion-row",14)(34,"ion-col")(35,"p",15),e._uU(36),e.qZA()()(),e.TgZ(37,"ion-row",14)(38,"ion-col")(39,"p",15),e._uU(40),e.qZA()()(),e.TgZ(41,"ion-row",14)(42,"ion-col")(43,"p",15),e._uU(44),e.qZA()()(),e.TgZ(45,"ion-row",14)(46,"ion-col")(47,"p",15),e._uU(48),e.qZA()()(),e.YNc(49,I,23,8,"ion-card",16),e.qZA()(),e.YNc(50,J,4,0,"ion-row",13)(51,N,7,1,"ion-row",13)(52,O,7,4,"ion-row",13)(53,F,4,0,"ion-row",13)(54,E,5,3,"ion-row",13)(55,S,4,2,"ion-row",13)(56,Y,4,2,"ion-row",13)(57,G,5,0,"ion-row",13),e.qZA()()),2&t&&(e.xp6(4),e.Oqu(o.name),e.xp6(2),e.Q6J("ngForOf",o.categories),e.xp6(20),e.Q6J("ngForOf",o.cart),e.xp6(1),e.Q6J("ngIf",!o.cart),e.xp6(9),e.Oqu(o.client.name),e.xp6(4),e.Oqu(o.client.phone),e.xp6(4),e.Oqu(o.client.email),e.xp6(4),e.Oqu(o.client.cpf),e.xp6(1),e.Q6J("ngForOf",o.addresses),e.xp6(1),e.Q6J("ngIf",o.cart&&o.cepNaoCadastrado),e.xp6(1),e.Q6J("ngIf",o.cart&&!o.cepNaoCadastrado&&o.diasEntrega>0),e.xp6(1),e.Q6J("ngIf",o.cart&&!o.cepNaoCadastrado),e.xp6(1),e.Q6J("ngIf",o.cart),e.xp6(1),e.Q6J("ngIf",o.cart),e.xp6(1),e.Q6J("ngIf",o.cart&&5==o.payment),e.xp6(1),e.Q6J("ngIf",o.cart),e.xp6(1),e.Q6J("ngIf",o.cart))},dependencies:[m.sg,m.O5,f.JJ,f.On,s.YG,s.Sm,s.PM,s.nz,s.wI,s.W2,s.Gu,s.gu,s.pK,s.Ie,s.q_,s.z0,s.fG,s.B7,s.se,s.Nd,s.t9,s.n0,s.wd,s.sr,s.w,s.as,s.U5,s.QI,s.yf,s.Uj,T.w],styles:[".description[_ngcontent-%COMP%]{color:var(--primary);font-size:22px;font-family:Lato,sans-serif}.listProducts[_ngcontent-%COMP%]{width:50%}.valueCart[_ngcontent-%COMP%]{color:var(--primary);font-size:16px}.imageCart[_ngcontent-%COMP%]{width:100px;border-radius:100px}.lineCart[_ngcontent-%COMP%]{box-shadow:2px 2px 2px #e0e0e0}.colImage[_ngcontent-%COMP%]{margin-top:20px}.margin[_ngcontent-%COMP%]{margin:0}@media (max-width: 767px){.listProducts[_ngcontent-%COMP%]{width:100%}}"]}),n})()}];let D=(()=>{var i;class n{}return(i=n).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(H),u.Bz]}),n})();var B=c(8764);let $=(()=>{var i;class n{}return(i=n).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,f.u5,s.Pc,D,B.h]}),n})()}}]);