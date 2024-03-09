import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.page.html',
  styleUrls: ['./my-request.page.scss'],
})
export class MyRequestPage implements OnInit {

  categories: any = [];
  popover: any;
  client: any = {};
  amountProducts = 0;
  cart: any = [];
  name: string = "Nome";
  idCliente: any;
  sales: any = [];

  constructor(public api: ApiService, private loadingCtrl: LoadingController, private router: Router, 
    private activatedRoute: ActivatedRoute, public popoverController: PopoverController,) { }

  ngOnInit() {
    this.getDataCategories();
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if(this.cart){
      this.cart.forEach((element: any)  => {
        this.amountProducts += element.amount;
      });
    }
    this.client =  JSON.parse(localStorage.getItem("cliente"));
    this.idCliente = this.client.id;
    this.name = this.client != null && this.client.name != null ? this.client.name : '';
    this.getDataSale();
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

  async getDataSale(){

    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getDataSale(this.idCliente).subscribe(data => {
      loading.dismiss();
      this.sales = data.data;
    });
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

  async presentPopover(e: Event) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await this.popover.present();
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

}
