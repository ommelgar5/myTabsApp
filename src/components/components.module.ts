import { NgModule } from '@angular/core';
// Usar las etiquetas de ionic dentro de los componentes personalizados (Agregar dentro de imports)
import { IonicModule } from "ionic-angular";

import { HeaderComponent } from './header/header';

@NgModule({
	declarations: [
	  HeaderComponent
  ],
  imports: [
    IonicModule
  ],
	exports: [
	  HeaderComponent
  ]
})

export class ComponentsModule {}
