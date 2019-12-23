import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { SocialPage } from '../social/social';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FormularioPage;
  tab5Root = SocialPage;
  constructor() {

  }
}
