import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { md5 } from 'js-md5';

@Component({
  selector: 'app-password',
  templateUrl: 'password.component.html',
})
export class PasswordComponent {
  senhaAntiga: string = '';
  senhaNova: string = '';
  confirmarSenha: string = '';
  login: any;
  success = false;
  podeSalvar: boolean = true;

  message: string = '';
  

  constructor(private modalCtrl: ModalController, public navParams: NavParams, public loadingCtrl: LoadingController,
        public api: ApiService, private alertController: AlertController) {

    if(navParams.get("id")){
      this.login = navParams.get("id");
    }

  }


  verificaSenhas(){
    if(this.senhaAntiga){
      let hash = md5(this.senhaAntiga).toUpperCase();
      if(hash !== this.login.passwordHash){
        this.message = 'A senha antiga informada é diferente da senha cadastrada.';
        this.alert('Mudança de senha', this.message);
        this.podeSalvar = false;
        return;
      }
      
    }

    if(this.senhaNova !== this.confirmarSenha){
      this.message = 'A senha nova e a confirmação são diferentes';
      this.alert('Mudança de senha', this.message);
      this.podeSalvar = false;
    }
    else if(this.senhaNova === this.senhaAntiga){
      this.message = 'A nova senha que está cadastrando é igual a antiga';
      this.alert('Mudança de senha', this.message);
      this.podeSalvar = false;
    }
    else{
      this.podeSalvar = true;
    }
    
  }

  async alert(titulo: string, message: string){
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: '',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async salvar(){
    this.verificaSenhas();
    if(this.podeSalvar && this.senhaNova && this.senhaAntiga && this.confirmarSenha){
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      let user = {
        email: this.login.email,
        userName: this.login.email,
        PasswordHash: this.senhaNova
      }
      this.api.updatePassword(user).subscribe(data => {
        loading.dismiss();
  
        if(data.sucess == null){
          this.confirm()
        }
        else{
          //this.address = data.data
          this.success = true;
          this.confirm()
        }
      });
    }
    
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.success, 'confirm');
  }
}