import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, LoadingController, PopoverController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverComponent } from '../components/popover/popover.component';
import { cepValidation, cnpjValidation, cpfValidation, emailValidation, telefoneVadation } from '../directives/ion-mask/ion-mask-default-masks';
import { maskRawValue } from '../directives/ion-mask/ion-mask.directive';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})


export class CartPage implements OnInit {

  readonly inputMasks = {
    cpfMask: cpfValidation.mask,
    cnpjValidation: cnpjValidation.mask,
    telefoneMask: telefoneVadation.mask,
    email: emailValidation.pattern,
    cep: cepValidation.mask
  };

  id: string = ''
  categories: any = [];
  cart: any = [];
  valor: number = 0;
  popover: any;
  isOpen = false;
  public client: any = { login: {passwordHash: '', login: ''}};
  name: string = '';
  public addresses: any = [];
  public payments: any = [];
  public payment: any;
  public quantidadeParcelas: any;
  public totalParcelas: any;
  public listaParcelas: any = [];
  public frete: number = 0;
  public sale: any = {};
  public dadosfrete: any = {};
  public diasEntrega: number = 0;
  public cepSelecionado: any = {};
  public freteGratis: boolean = false;
  public cepNaoCadastrado: boolean = false;
  public enderecoId: any;


  constructor(public api: ApiService, private loadingCtrl: LoadingController, 
    private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController,
    public popoverController: PopoverController, private toastController: ToastController) { }

  ngOnInit() {

    setTimeout(() => {
      /*this.activatedRoute.params.subscribe((params: any) => {
        this.id = params["id"];
      })*/
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.client =  JSON.parse(localStorage.getItem("cliente"));
        this.name = this.client != null && this.client.name != null ? this.client.name : '';
        this.id = this.client.id;
      
      this.filtrar();
    }, 500);

    
  }

  /**
   * Existe em todas as telas
   */

  async filtrar(){
    this.calculaValorCompra();
    this.getDataCategories();
    this.getData();
    this.buscaFrete();
  }

  menuItemHandler(show: any): void {
    this.categories[show].show = !this.categories[show].show; 
  }

  produtosCategoria(category: any){
    this.router.navigateByUrl('categoria/' + category.id, { replaceUrl: true })
  }

  produtosSubcategoria(category: any){
    this.router.navigateByUrl('subcategoria/' + category.id, { replaceUrl: true })
  }

  async getDataCategories(){

    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getCategories().subscribe(data => {
      this.categories = data.data;
      this.categories.forEach((element: any) => {
        element.show = false;
      });
    });

    this.api.getPayments().subscribe(data => {
      loading.dismiss();
      this.payments = data.data;
    });

  }

  home(){
    this.router.navigateByUrl('home', { replaceUrl: true })
  }

  calculaValorFinal(pay: any){
    this.payments.forEach((element: any) => {
      if(element.methods == pay){
        if(pay == 3 || pay == 4){
          if(element.discount){
            this.calculaValorCompra();
            this.valor = this.valor - (this.valor * element.discount/100)
            this.valor += this.frete;
          }
          else{
            this.calculaValorCompra();
            this.valor += this.frete;
          }
        }
        else if(pay == 5){
          this.totalParcelas = element. quantityInstallments;
          this.preparaQuantidadeParcelas();
          if(element.fees){
            this.calculaValorCompra();
            this.valor = this.valor + (this.valor * element.fees/100)
            this.valor += this.frete;
          }
          else{
            this.calculaValorCompra();
            this.valor += this.frete;
          }
        }
        else{
          this.calculaValorCompra();
          this.valor += this.frete;
        }
      }
    });
  }

  preparaQuantidadeParcelas(){
    for(let i = 1; i <= this.totalParcelas; i++){
      this.listaParcelas.push({ID: i, Name: i});
    }
  }

  login(){
    //this.router.navigateByUrl('login',  { replaceUrl: true })
  }

  customer(id: any){
    if(this.client)
      this.router.navigateByUrl('cliente',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "cliente")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
  }

  async presentPopover(e: Event) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await this.popover.present();
  }

  removerItem(item: any, index: any){
    if(item.amount > 1){
      item.amount--;
    }
    else{
      this.cart.splice(index, 1);
    }
    localStorage.setItem("cart",  JSON.stringify(this.cart));
    this.calculaValorCompra()
  }

  calculaValorCompra(){
    this.valor = 0;
    if(this.cart){
      this.cart.forEach((element: any) => {
        this.valor += element.value * element.amount;
      });
    }

    
  }

  async getData() {
    if(this.id != '' || this.id != null){
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      
      this.api.getClientByID(this.id).subscribe(data => {
        loading.dismiss();
        this.client = data.data
        this.client.birthDate = this.client.birthDate.split("T")[0];
  
        this.client.cpf = maskRawValue(this.client.cpf, cpfValidation.mask).conformedValue;
        this.client.phone = maskRawValue(this.client.phone, telefoneVadation.mask).conformedValue;

        this.searchAddresses();
      });  
    }
  }

  async searchAddresses(){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getAddresses(this.id).subscribe(data => {
      loading.dismiss();
      this.addresses = data.data;
      this.addresses.forEach((element: any) => {

        element.cep = maskRawValue(element.cep, cepValidation.mask).conformedValue
        element.enderecoSelecionado = false
      });
    });
  }

  mudaEndereco(item: any){
    if(item.enderecoSelecionado){
      this.enderecoId = item.id;
      this.calculaValorFrete(item);
    }
    else{
      this.enderecoId = null;
      this.frete = 0;
      this.calculaValorFrete(item);
    }
    this.addresses.forEach((element: any) => {
      if(element.id != item.id){
        element.enderecoSelecionado = false;

      }
    });
    
  }

  async buscaFrete(){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getFreight(this.id).subscribe(data => {
      loading.dismiss();
      if(data.sucess){
        this.dadosfrete = data.data;
      }
    });
      
  }

  async calculaValorFrete(item: any){
    if(this.enderecoId == null){
      this.valor -= this.frete;
      this.calculaValorCompra();
    }
    else{
      this.cepNaoCadastrado = false;
      this.calculaValorCompra();
      let cep = item.cep.split("-")[0];
      
      this.diasEntrega = this.dadosfrete.timeDeliveryDays;
      if(this.dadosfrete.valuePriceFreeShipping != '' && this.dadosfrete.valuePriceFreeShipping > 0){
        if(this.valor >= this.dadosfrete.valuePriceFreeShipping){
          this.frete = 0;
          
          let index = this.dadosfrete.cities.findIndex((val: any) => val.cep.includes(cep));
          if(index < 0){
            this.cepNaoCadastrado = true;
          }
        }
        else{
          let index = this.dadosfrete.cities.findIndex((val: any) => val.cep.includes(cep));
          if(index < 0){
            this.cepNaoCadastrado = true;
          }
          else{
            this.cepNaoCadastrado = false;
            this.frete = this.dadosfrete.cities[index].value;
            
          }
        }
      }
      else{
        let index = this.dadosfrete.cities.findIndex((val: any) => val.cep.includes(cep));
        if(index < 0){
          this.cepNaoCadastrado = true;
        }
        else{
          this.cepNaoCadastrado = false;
          this.frete = this.dadosfrete.cities[index].value;
          
        }
      }
      this.valor += this.frete;
    }
    
  }

  async finalizarCompra(){
    if(this.payment == null){
      const toast = await this.toastController.create({
        message: 'Selecione a forma de pagamento',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
    }
    else if(this.cepNaoCadastrado){
      const toast = await this.toastController.create({
        message: 'Informe um endereço válido',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
      
    }
    else if(this.addresses.length == 0){
      const toast = await this.toastController.create({
        message: 'Informe um endereço. Você será direcionado para o cadastro',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
      this.router.navigateByUrl('cliente',  { replaceUrl: true })

    }
    else if(this.enderecoId == null){
      const toast = await this.toastController.create({
        message: 'Selecione um endereço',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();

    }
    else{
      this.sale.ClientId = this.id;
      this.sale.ProductsSale = this.cart;
      this.sale.ValorTotal = this.valor;
      this.sale.PaymentMethod = parseInt(this.payment);
      this.sale.AddressId = this.enderecoId;
      const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
      });
      loading.present();
      this.api.createSale(this.sale).subscribe(data => {
        loading.dismiss();
        if(data.sucess){
          localStorage.setItem("cart",  null);
          this.router.navigateByUrl('vendafinalizada/' + data.data.id , { replaceUrl: true })
        }
      });
    }
    
  }
  

}
