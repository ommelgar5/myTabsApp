import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  seleccion:string = "grupo1";

  constructor(public navCtrl: NavController, public alerController: AlertController) {

  }

  showAlert(){
    // Crea un componente nuevo, al que se le pasan parametros
     let alerta =  this.alerController.create({
            title : "Información",
            subTitle : "Esto es una alerta de sistema",
            message : "Este es el cuerpo del mensaje",
            inputs : [{
                name: "nombre",
                placeholder : "Tu nombre",
              }],
            buttons : [
              {
                text : "Guardar",
                // Manejador de los datos ingresados al prompt
                handler: data => {
                  console.log("Enviar -> " + data.nombre);
                }
              },
              {
                 text: "Cancelar",
                  handler: data => {
                   console.log("Cancelar");
                  }

              }
            ]
      });

     alerta.present();
  }

}
