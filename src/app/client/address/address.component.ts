import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { cepValidation, cnpjValidation, cpfValidation, emailValidation, telefoneVadation } from 'src/app/directives/ion-mask/ion-mask-default-masks';
import { maskRawValue } from 'src/app/directives/ion-mask/ion-mask.directive';
import { ApiService } from 'src/app/services/api.service';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-address',
  templateUrl: 'address.component.html',
})
export class AddressComponent {
  name: string;
  address: any = {};
  id: any;
  dado: any;
  success = false;
  buscaCEP: boolean = false;

  readonly inputMasks = {
    cpfMask: cpfValidation.mask,
    cnpjValidation: cnpjValidation.mask,
    telefoneMask: telefoneVadation.mask,
    email: emailValidation.pattern,
    cep: cepValidation.mask
  };

  constructor(private modalCtrl: ModalController, public navParams: NavParams, public loadingCtrl: LoadingController,
        public api: ApiService, private alertController: AlertController, private http: HttpClient,) {

    if(navParams.get("id")){
      this.id = navParams.get("id");
      this.searchAddress();
    }
      

    if(navParams.get("dado"))
      this.dado = navParams.get("dado");
  
  }

  async searchAddress(){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    this.api.getAddressByID(this.id).subscribe(data => {
      loading.dismiss();
      if(data.sucess == null){
      }
      else{
        this.address = data.data
        this.address.cep = maskRawValue(this.address.cep, cepValidation.mask).conformedValue;

      }
      
    });
  }

  async validaCep(cep: string){

    if(cep.length < 8){
      this.alert('CEP incorreto','O CEP possui 8 dígitos')
      cep = '';
    }
    else{
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      let url = 'https://viacep.com.br/ws/' + cep + '/json/'
      this.http.get(url).subscribe((result: any) => {
          loading.dismiss();
          if(result.erro){
            this.alert("CEP", "CEP não encontrado")
            this.buscaCEP = false;
          }
          else{
            this.buscaCEP = true;
            this.address.street = result.logradouro;
            this.address.neighborhood = result.bairro;
            this.address.city = result.localidade;
            this.address.state = result.uf;
          }
      });
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
    if(this.dado != null){
      this.address.clientId = this.dado;
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();
      this.api.createAddress(this.address).subscribe(data => {
        loading.dismiss();

        if(data.sucess == null){
          this.confirm()
        }
        else{
          this.address = data.data
          this.success = true;
          this.confirm()
        }
        
      });
    }
    else{
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
      });
      loading.present();

      this.api.updateAddress(this.id, this.address).subscribe(data => {
        loading.dismiss();

        if(data.sucess == null){
          this.confirm()
        }
        else{
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