import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Importar le provider
import { DatosProvider } from '../../providers/datos/datos';
import { DetallePage } from "../detalle/detalle";
// modal
import { ModalController } from 'ionic-angular';
// Geoolocalizacion
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista:Array<any> = [
    {titulo: "Primer elemento", id: 1, descripcion:"is simply dummy text of the printing and typesetting industry. "},
    {titulo: "segundo elemento", id: 2, descripcion:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "},
    {titulo: "tercer elemento", id: 3, descripcion:" a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},
    {titulo: "cuarto elemento", id: 4, descripcion:"but also the leap into electronic typesetting, remaining essentially unchanged. "},
    {titulo: "quinto elemento", id: 5, descripcion:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"},
    {titulo: "sexto elemento", id: 6, descripcion:"recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {titulo: "septimo elemento", id: 7, descripcion:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. T"},
  ];

  listaNombres = [];
                                            // Inyeccion InstanciaDeClase: CLASE
  constructor(public navCtrl: NavController, public datosProvider:DatosProvider, public modalController: ModalController, public geo: Geolocation) {

    // datosProvider.getData()
    // Premise retorna los datos y tiene dos métodos .then(data) permite recuperar los datos de la peticion
    // y .catch(err) recibe el error de la solicitud
    //   .then(data => {
    //     console.log(data);
    //     this.listaNombres = data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    this.loadData();

    let  watch = this.geo.watchPosition();
    watch.subscribe((data) => {
      console.log("Longitud: "+ data.coords.latitude + " - Longitud: " + + data.coords.longitude);
    });

    }

    loadData(){
      this.datosProvider.getData()
        .then(data => {
          console.log(data);
          this.listaNombres = this.listaNombres.concat(data);
        })
        .catch( err => {
          console.log(err);
        })
    }

  doInfinite($event){
    setTimeout(()=>{
      this.loadData();
      $event.complete(); // Eliminar la carga usando el evento
    }, 500)
  }

  irDetalle(item){
    this.navCtrl.push(DetallePage, { datos : item });
  }

  abreModal(item){
    // solo retorna una instancia, no renderiza nada
      let modal = this.modalController.create( DetallePage, { datos : item, modal: true});
      // mostrar la página
      modal.present();
  }

  getPos(){
      this.geo.getCurrentPosition()
        .then( (data) => {
          console.log("Longitud: "+ data.coords.latitude + " - Longitud: " + + data.coords.longitude);
        })
        .catch( (err) =>{
            console.log(err);
        })
  }


}
