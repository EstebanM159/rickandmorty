import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './lista-personajes/card/card.component';
import { PersonajeDetailsComponent } from './personaje-details/personaje-details.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    ListaPersonajesComponent,
    CardComponent,
    PersonajeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,MatPaginatorModule
  ],
  exports:[ListaPersonajesComponent]
})
export class PersonajesModule { }
