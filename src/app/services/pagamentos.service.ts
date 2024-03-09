import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  token: any = 'M2Q1ZDQyZjYtYjMyYy00Zjk0LThiMDAtMzZlMDYyNzk3YmE0OmJMemZyOWtTTC9ONmdaWkYxZlFEaEoyUFNrR1lTWklyQ3UrcXhnZEI2NWs9';
  access_token: any;

  constructor(private http: HttpClient, private router: Router) { }

  obtendoAccessToken(){
    /*let httpHeader = {
      headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Basic ' + this.token,  
          'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    this.access_token = this.http.post('https://cieloecommerce.cielo.com.br/api/public/v2/token', {}, httpHeader).toPromise();

    console.log(this.access_token)
    this.access_token.subscribe((data: any) => {
      console.log(data);
    })*/

    const headers = new HttpHeaders()
                                  .set('Access-Control-Allow-Origin', '*')
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
                                  .set('responseType', 'text')
                                  .set('Authorization',  'Bearer ' + this.token);

    this.http.post("https://cieloecommerce.cielo.com.br/api/public/v2/token", {}, { headers: headers })
      .subscribe(data => {
        console.log(data)
    });
    
  }
}
