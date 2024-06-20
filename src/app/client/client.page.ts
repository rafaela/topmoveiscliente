import { Component, OnInit, ViewChild } from '@angular/core';
import { cepValidation, cnpjValidation, cpfValidation, emailValidation, telefoneVadation } from '../directives/ion-mask/ion-mask-default-masks';
import { IonModal, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AddressComponent } from './address/address.component';
import { Utils } from '../common';
import { maskRawValue } from '../directives/ion-mask/ion-mask.directive';
import { PasswordComponent } from './password/password.component';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  readonly inputMasks = {
    cpfMask: cpfValidation.mask,
    cnpjValidation: cnpjValidation.mask,
    telefoneMask: telefoneVadation.mask,
    email: emailValidation.pattern,
    cep: cepValidation.mask
  };

  public client: any = { 
    name: '',
    cpf: '',
    phone: '',
    birthDate: '',
    email: '',
    login: {passwordHash: '', login: ''}
  };
  public addresses: any = [];
  categories: any = [];
  name: string = ''
  error: string = '';
  isToastOpen = false;
  id: string = ''//'3BF04AB9-CC4A-4E6C-531B-08DBF0394A90'
  isEdit = false;
  cart: any = [];
  amountProducts = 0;
  popover: any;

  constructor(public router: Router, public api: ApiService, public loadingCtrl: LoadingController,
     public modalCtrl: ModalController, public popoverController: PopoverController) { }

  ngOnInit() {
    this.getDataCategories();
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if(JSON.parse(localStorage.getItem("cliente"))){
      this.client = JSON.parse(localStorage.getItem("cliente"))
      this.name = (this.client.name != null) ? this.client.name : '';
      this.id = (this.client.name != null) ? this.client.id : '';
      this.getData();
    }
    if(this.cart){
      this.cart.forEach((element: any)  => {
        this.amountProducts += element.amount;
      });
    }
    if(this.id){
      this.isEdit = true;
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

  async getData() {
    //this.id = localStorage.getItem("cliente");
    if(this.id != '' || this.id != null){
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      
      this.api.getClientByID(this.id).subscribe(data => {
        loading.dismiss();
        this.client = data.data;
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
      });
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

  customer(id: any) {
    this.router.navigateByUrl('cliente', { replaceUrl: true });
  }

  home() {
    this.router.navigateByUrl('home', { replaceUrl: true });
  }

  cancelar(){
    if(!this.isEdit){
      this.router.navigateByUrl('login', { replaceUrl: true });
    }
    else{
      if(localStorage.getItem("tela") == "cliente"){
        this.router.navigateByUrl('home',  { replaceUrl: true })
      }
      else if(localStorage.getItem("tela") == "carrinho"){
        this.router.navigateByUrl('carrinho',  { replaceUrl: true })
      }
      else if(localStorage.getItem("tela") == "meuspedidos"){
        this.router.navigateByUrl('meuspedidos',  { replaceUrl: true })
      }
      else{
        this.router.navigateByUrl('home',  { replaceUrl: true })
      }
    }
    
  }

  validar(){
    let save = false;
    if(!this.client.name){
      this.error = 'Informe o nome completo';
      this.isToastOpen = true;
      save = false;
    }
    else if(!this.client.cpf || this.client.cpf.length < 11){
      this.error = 'Informe um CPF válido';
      this.isToastOpen = true;
      save = false;
    }
    else if(!this.client.phone || this.client.phone < 11){
      this.error = 'Informe um telefone válido';
      this.isToastOpen = true;
      save = false;
    }

    else if(!this.client.birthDate || this.client.phone < 8){
      this.error = 'Informe uma data de aniversário válida';
      this.isToastOpen = true;
      save = false;
    }
    else if(!this.client.email || !this.client.email.match('@')){
      this.error = 'Informe um email válido';
      this.isToastOpen = true;
      save = false;
    }
    else if(!this.client.login.passwordHash || this.client.login.passwordHash < 6){
      this.error = 'Informe uma senha de pelo menos 8 caracteres';
      this.isToastOpen = true;
      save = false;
    }
    else{
      this.isToastOpen = false;
      save = true;
    }
    return save;

  }

  async openModalPassword(){
    const modal = await this.modalCtrl.create({
      component: PasswordComponent, componentProps: {id: this.client.login} 
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    this.getData();

    
  }

  async remove(id: any){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.deleteAddress(id).subscribe(data => {
      if(data.sucess){
        this.error = 'Endereço removido'
        
      }
    });

    this.searchAddresses();
  }

  async editAddreess(id: any){

    const modal = await this.modalCtrl.create({
      component: AddressComponent, componentProps: {id: id} 
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      
      if(data){
        this.searchAddresses();
      }
    }

  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async salvar(){

    if(this.validar()){
      this.client.login.email = this.client.email;
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      this.api.createClient(this.client).subscribe(data => {
        loading.dismiss();

        if(data.sucess == null){
          this.message = data.message;
        }
        else{
          this.client = data.data
          if(!this.isEdit){
            this.isEdit = true;
            this.openModal()
          }

          if(localStorage.getItem("tela") == "cliente"){
            this.router.navigateByUrl('home',  { replaceUrl: true })
          }
          else if(localStorage.getItem("tela") == "carrinho"){
            this.router.navigateByUrl('carrinho',  { replaceUrl: true })
          }
          else if(localStorage.getItem("tela") == "meuspedidos"){
            this.router.navigateByUrl('meuspedidos',  { replaceUrl: true })
          }
          else{
            this.router.navigateByUrl('home',  { replaceUrl: true })
          }
        }
      });
      
    }
  }

  async openModal() {

    const modal = await this.modalCtrl.create({
      component: AddressComponent, componentProps: {dado: this.id} 
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      
      if(data){
        this.searchAddresses();
      }
    }
  }

  viewCart(){
    this.router.navigateByUrl('carrinho',  { replaceUrl: true })
  }

  login(){
    this.router.navigateByUrl('login',  { replaceUrl: true })
  }

  myAccount(){
    
  }

  logout(){
    this.api.logout();
  }


  async presentPopover(e: Event) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await this.popover.present();
  }


}
