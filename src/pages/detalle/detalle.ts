import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  item;

  modal: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    // la propiedad (data) recupera el objeto enviado
    this.item = navParams.data.datos;
    this.modal = navParams.data.modal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  cerrar(){
    // dismiss() -> Cerrar la página actual volviendo un paso atrás de la estructura de navegación
    this.viewController.dismiss();
  }


}
