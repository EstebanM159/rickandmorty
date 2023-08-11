import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';
import { CardEpisodioComponent } from './lista-episodios/card-episodio/card-episodio.component';
import { AppRoutingModule } from '../app-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ListaEpisodiosComponent,
    CardEpisodioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule
  ]
})
export class EpisodiosModuleModule { }
