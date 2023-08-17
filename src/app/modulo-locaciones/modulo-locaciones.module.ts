import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ListaLocacionesComponent } from './lista-locaciones/lista-locaciones.component';
import { CardLocComponent } from './lista-locaciones/card-loc/card-loc.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocacionesDetailsComponent } from './locaciones-details/locaciones-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    ListaLocacionesComponent,
    CardLocComponent,
    LocacionesDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatTreeModule,
    MatListModule
  ]
})
export class ModuloLocacionesModule { }
