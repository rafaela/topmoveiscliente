import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IonicSlides, LoadingController, PopoverController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverComponent } from '../components/popover/popover.component';
import { CepService } from '../services/cep.service';
import Swiper from 'swiper';
register()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  categories: any = [];
  highligths: any = [];
  products: any = [];
  name: string = "Nome";
  cart: any = [];
  amountProducts = 0;
  popover: any;
  client: any = {};
  busca: string = '';

  public swiper: any;
  swiperModule = [IonicSlides]

  data: any = {
    data: {
      name: '',
      inactive: false,
      FeaturedProduct: false,

    },
    skip: 0,
    take: 0,
  };

  constructor(public api: ApiService, private loadingCtrl: LoadingController, private router: Router, 
      private activatedRoute: ActivatedRoute, public popoverController: PopoverController, public cep: CepService) {
    
  }

  
  ngOnInit(): void {
    setTimeout(() => {
      this.getDataCategories();
      this.cart = JSON.parse(localStorage.getItem("cart"));
      if(this.cart){
        this.cart.forEach((element: any)  => {
          this.amountProducts += element.amount;
        });
      }
      this.client =  JSON.parse(localStorage.getItem("cliente"));
      this.name = this.client != null && this.client.name != null ? this.client.name : '';
    }, 500)
    
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async buscaProdutos(){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    if(this.data.data.Name){
      
      this.api.getProductsSearch(this.data).subscribe(data => {
        loading.dismiss();
        this.products = data.data;
      })
    }
    else{
      this.api.getProductsFeatured().subscribe(data => {
        loading.dismiss();
        this.products = data.data;
      });
    }
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

    this.api.getProductsFeatured().subscribe(data => {
      this.products = data.data;
    });

    this.api.getHighlights().subscribe(data => {
      loading.dismiss();
      this.highligths = data.data;
    });

    
  }

  openProduct(id: any){
    this.router.navigateByUrl('detalhe/' + id, { replaceUrl: true })
  }

  home(){
    this.router.navigateByUrl('home', { replaceUrl: true })
  }

  customer(id: any){
    if(this.client)
      this.router.navigateByUrl('cliente',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "cliente")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
  }

  viewCart(){
    if(this.client)
      this.router.navigateByUrl('carrinho',  { replaceUrl: true })
    else{
      localStorage.setItem("tela", "carrinho")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
  }

  login(){
    this.router.navigateByUrl('login',  { replaceUrl: true })
  }

  myAccount(){
    
  }

  async presentPopover(e: Event) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await this.popover.present();
  }

}
