import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IntlMaskProperties } from '../directives/intl-mask/intl-mask.directive';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public intlMaskProps: IntlMaskProperties = { locales: 'pt-BR', options: { style: 'currency', currency: 'BRL' } };
  private apiUrl = '';
  private log: boolean = false;

  result: any;
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {
    var url = window.location;
    this.apiUrl = `${environment.ApiUrl}`
   }

  async login(login: any){
    this.result = await this.http.post(`${this.apiUrl}/login`, login).toPromise();
    if(this.result && this.result.sucess){
      window.localStorage.setItem('token', this.result.token);
      localStorage.setItem("cliente",JSON.stringify(this.result.data) )
      return true;
    }
    return false;
  }

  logout(){
    localStorage.clear();
  }

  //CRUD DE CATEGORIAS
  /*getCategoriesNameInactive(category) : Observable<any>{
    return this.http.get(this.apiUrl + '/buscas',category);
  }*/
  getCategories() : Observable<any>{
    return this.http.post(this.apiUrl + '/categorias', {});
  }

  
  getProducts() : Observable<any>{
    return this.http.get(this.apiUrl + '/produtos');
  }

  getProductsFeatured() : Observable<any>{
    return this.http.get(this.apiUrl + '/produtosdestaque');
  }

  
  getProductByID(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/produtos/' + id, id);
  }

  //CRUD de Clientes

  getClientByID(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/clientes/' + id, id);
  }

  createClient(client: any) :  Observable<any>{
    return this.http.post(this.apiUrl + '/clientes/0', client);
  }

  updateClient(id: any) :  Observable<any>{
    return this.http.put(this.apiUrl + '/clientes/' + id, id);
  }

  //CRUD de Endereços

  createAddress(address: any) :  Observable<any>{
    return this.http.post(this.apiUrl + '/enderecos/0', address);
  }

  updateAddress(id: any, address: any) :  Observable<any>{
    return this.http.put(this.apiUrl + '/enderecos/'+ id , address);
  }

  deleteAddress(id: any) :  Observable<any>{
    return this.http.delete(this.apiUrl + '/enderecos/' + id, id);
  }

  getAddressByID(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/enderecos/'+ id, id);
  }

  getAddresses(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/enderecoscliente/' + id, id);
  }


  //Imagens destaque
  getHighlights() : Observable<any>{
    return this.http.post(this.apiUrl + '/imagensdestaque', {});
  }


  //Formas de pagamento
  getPayments() : Observable<any>{
    return this.http.post(this.apiUrl + '/pagamentos', {});
  }

  getBySubcategory(id: any) : Observable<any>{
    return this.http.get(this.apiUrl + '/subcategoriaproduto/' + id, id);
  }

  GetByCategory(id: any) : Observable<any>{
    return this.http.get(this.apiUrl + '/categoriaproduto/' + id, id);
  }

  createSale(sale: any) :  Observable<any>{
    return this.http.post(this.apiUrl + '/vendas/0', sale);
  }

  getDataSale(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/meuspedidos/' + id, id);
  }

  updatePassword(id: any) :  Observable<any>{
    return this.http.put(this.apiUrl + '/atualizasenha', id);
  }

  getFreight(id: any) :  Observable<any>{
    return this.http.get(this.apiUrl + '/frete/0', id);
  }
  
  getProductsSearch(data: any) : Observable<any>{
    return this.http.post(this.apiUrl + '/produtos', data);
  }

}
