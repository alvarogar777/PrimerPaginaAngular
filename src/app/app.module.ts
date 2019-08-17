import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//servicios

import { ModulosService } from './services/modulos.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { CardModuloComponent } from './components/card-modulo/card-modulo.component';
import { ModuloComponent } from './components/modulo/modulo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModulosComponent,
    AboutComponent,
    FooterComponent,
    CardModuloComponent,
    ModuloComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ModulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
