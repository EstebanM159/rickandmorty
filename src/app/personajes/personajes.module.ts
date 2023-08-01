import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './lista-personajes/card/card.component';



@NgModule({
  declarations: [
    ListaPersonajesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  exports:[ListaPersonajesComponent]
})
export class PersonajesModule { }
