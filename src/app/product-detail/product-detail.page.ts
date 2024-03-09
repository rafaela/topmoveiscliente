import { register } from 'swiper/element/bundle';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverComponent } from '../components/popover/popover.component';
register();

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: any;
  payments: any = [];
  id: any;
  categories: any = [];
  achou: boolean = false;
  cart: any = [];
  amountProducts = 0;
  popover: any;
  client: any = {};
  name: string = "Nome";


  constructor(public api: ApiService, private loadingCtrl: LoadingController, 
        private activatedRoute: ActivatedRoute, private router: Router, 
        private alertController: AlertController, public popoverController: PopoverController) {
  }

  

  ngOnInit() {

    //localStorage.clear()
    setTimeout(() => {
      this.activatedRoute.params.subscribe((params: any) => {
        this.id = params["id"];
      })
      this.filtrar();
    }, 500);
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if(this.cart){
      this.cart.forEach((element: any)  => {
        this.amountProducts += element.amount;
      });
    }
    this.client =  JSON.parse(localStorage.getItem("cliente"));
    this.name = this.client != null && this.client.name != null ? this.client.name : '';
    
  }

  async filtrar(){
    this.getDataCategories();

    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getProductByID(this.id).subscribe(data => {
      this.product = data.data;
    });

    this.api.getPayments().subscribe(data => {
      loading.dismiss();
      this.payments = data.data;

      
    });
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

  customer(id: any){
    if(this.client)
      this.router.navigateByUrl('cliente',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "cliente")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
  }

  async getDataCategories(){

    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getCategories().subscribe(data => {
      loading.dismiss();
      this.categories = data.data;
      this.categories.forEach((element: any) => {
        element.show = false;
      });
    });

  }

  home(){
    this.router.navigateByUrl('home', { replaceUrl: true })
  }

  async presentAlert(message: string, title: string,) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: '',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  adicionarCarrinho(product: any){
    if(product.amount == 0){
      this.presentAlert("Produto indisponível", product.name);
    }
    else{
      if(this.cart == null){
        this.cart = [];
      }
      if(this.cart.length == 0){
        this.cart.push({
          productId: product.id,
          amount: 1,
          value: product.value,
          photo: product.photos[0],
          name: product.name
        })
        this.amountProducts++;
      }
      else{
        this.cart.find( (a: any)  => {
          if(a.productId == product.id){
            a.amount += 1;
            this.achou = true;
            this.amountProducts++;
          }
        })
        if(!this.achou){
          this.cart.push({
            productId: product.id,
            amount: 1,
            value: product.value,
            photo: product.photos[0],
            name: product.name
          })
          this.amountProducts++;
        }
      }
    }
    this.achou = false;
    localStorage.setItem("cart",  JSON.stringify(this.cart));
  }

  comprarAgora(product: any){
    this.adicionarCarrinho(product);
    
    if(this.name != '')
      this.router.navigateByUrl('carrinho',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "carrinho")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
      
  }

  viewCart(){
    if(this.name != '')
      this.router.navigateByUrl('carrinho',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "carrinho")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
  }

  login(){
    this.router.navigateByUrl('login',  { replaceUrl: true })
  }

  async presentPopover(e: Event) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await this.popover.present();
  }

}
