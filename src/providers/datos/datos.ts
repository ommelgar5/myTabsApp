import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatosProvider Provider');
  }

  // promesa
 public getData(){
    return new Promise(
      // metodo resolve pasado como parametro a una función anónima
      resolve => {
        this.http.get("http://www.apiionic.com:8000/api/all")
          // para retornar la promesa hay que suscribirse
          .subscribe(data => {
            // metodo resolve retorna la data
            resolve(data);
            }
          )
      }
    )
 }

}
