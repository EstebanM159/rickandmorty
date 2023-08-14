import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';
import { CardEpisodioComponent } from './lista-episodios/card-episodio/card-episodio.component';
import { AppRoutingModule } from '../app-routing.module';
import { EpisodioDetailsComponent } from './episodio-details/episodio-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ListaEpisodiosComponent,
    CardEpisodioComponent, EpisodioDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatTreeModule
  ]
})
export class EpisodiosModuleModule { }
