import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';



@NgModule({
  declarations: [
    ListaEpisodiosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class EpisodiosModuleModule { }
