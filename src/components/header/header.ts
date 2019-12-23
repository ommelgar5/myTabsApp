import { Component, Input } from '@angular/core';
// permite la navegacion entre paginas, es un array de navegacion
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from "../../pages/info/info";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  // text: string;
@Input()
  titulo : string = "";


  constructor(public  navCtrl: NavController, public navParams : NavParams) {
    // console.log('Hello HeaderComponent Component');
    // this.text = 'Hello World';
  }

  irInfo(){
    // ir a la pagina Info, se le pasa como parametro la clase declada
    this.navCtrl.push(InfoPage);
  }


}
