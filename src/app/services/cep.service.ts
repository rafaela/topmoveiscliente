import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  //strKey = credencial['credenciais'][0]['GoogleAPI_strKey']
  constructor(private http: HttpClient, private loadingCtrl: LoadingController) { }

  //Valida se o cep informado existe na base de dados do site https://viacep.com.br/
  async buscaCep(cep: any){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
    });
    loading.present();
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    this.http.get(url).subscribe((result: any) => {
        loading.dismiss();
        if(result.erro){
          return {};
        }
        else{
          return result;
        }
    });
  }

  consultaRota(origem: any, destino: any, rota: any){

  }
}













/**AIzaSyA7hHbSxUkWUeoJ88ZxEQnG9xlrNZSa_gI*/