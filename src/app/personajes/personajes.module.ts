import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  exports:[ListaPersonajesComponent]
})
export class PersonajesModule { }
