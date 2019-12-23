import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormularioPage } from '../pages/formulario/formulario';
import { SocialPage } from "../pages/social/social";
import { InfoPage } from "../pages/info/info";
import { DetallePage } from "../pages/detalle/detalle";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatosProvider } from '../providers/datos/datos';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from "../components/components.module";

// Geolocalizacion
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormularioPage,
    SocialPage,
    InfoPage,
    DetallePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Carga del Modulo de Http
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormularioPage,
    SocialPage,
    InfoPage,
    DetallePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosProvider
  ]
})
export class AppModule {}
