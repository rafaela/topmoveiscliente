import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id: any;
  categories: any = [];
  cart: any = [];
  amountProducts = 0;
  login = {
    email: '',
    passwordHash: ''
  }
  erro: boolean = false;

  constructor(public api: ApiService, private loadingCtrl: LoadingController, 
        private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController,
        private toastController: ToastController) {
  }

  ngOnInit() {
    
  }


  home(){
    this.router.navigateByUrl('home', { replaceUrl: true })
  }

  viewCart(){
    this.router.navigateByUrl('carrinho',  { replaceUrl: true })
  }

  async entrar(){

    if(this.login.email == ''){
      const toast = await this.toastController.create({
        message: 'Informe o email',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
    }
    if(this.login.passwordHash == ''){
      const toast = await this.toastController.create({
        message: 'Informe a senha',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
    }
    else{
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      let resultado = await this.api.login(this.login);
      if(resultado){
        loading.dismiss();
        if(localStorage.getItem("tela") == "cliente"){
          this.router.navigateByUrl('cliente',  { replaceUrl: true })
        }
        else if(localStorage.getItem("tela") == "carrinho"){
          this.router.navigateByUrl('carrinho',  { replaceUrl: true })
        }
        else{
          this.router.navigateByUrl('meuspedidos',  { replaceUrl: true })
        }
      }
      else{
        loading.dismiss();
        this.erro = true;
      }
        
    }
  }

  criarConta(){
    this.router.navigateByUrl('cliente',  { replaceUrl: true })
  }
}
