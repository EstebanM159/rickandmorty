import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ListaLocacionesComponent } from './lista-locaciones/lista-locaciones.component';
import { CardLocComponent } from './lista-locaciones/card-loc/card-loc.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListaLocacionesComponent,
    CardLocComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule
  ]
})
export class ModuloLocacionesModule { }
