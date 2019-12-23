import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import para usar DATA DRIVEN FORMS
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contacto = {
    nombre : "Oscar",
    apellido : "Melgar"
  }

  // Asociar el el formularion con FormGroup
  private miForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder : FormBuilder) {
  //Asociar el template del formulario con un grupo
    this.miForm = formBuilder.group({
            // ['ValorPorDefecto', Validaciones]
        nombre : ["", Validators.required],
        apellido : ["MELGAR", Validators.required],
      }
    )
  }

  enviarForm(miformulario){
        // console.log(this.contacto);
    console.log(miformulario);  // más información sobre las propiedades control->valid,invalid,dirty
    console.log(miformulario.value); // recuperar los datos del formulario
  }

  enviarform2(){
    console.log(this.miForm.value);

  }



}
