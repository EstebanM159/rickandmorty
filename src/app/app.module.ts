import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedComponentsComponent } from './shared-components/shared-components.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { PersonajesModule } from './personajes/personajes.module';
import { EpisodiosModuleModule } from './episodes-module/episodes-module.module';
import { ModuloLocacionesModule } from './modulo-locaciones/modulo-locaciones.module';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SharedComponentsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonajesModule,
    BrowserAnimationsModule,
    EpisodiosModuleModule,
    ModuloLocacionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
