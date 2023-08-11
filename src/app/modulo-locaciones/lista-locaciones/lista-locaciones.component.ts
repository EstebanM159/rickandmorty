import { Component } from '@angular/core';
import { LocacionesService } from '../locaciones.service';
import { ResultL } from 'src/app/models/locations';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-lista-locaciones',
  templateUrl: './lista-locaciones.component.html',
  styleUrls: ['./lista-locaciones.component.css']
})
export class ListaLocacionesComponent {
  constructor(private consulta:LocacionesService){}
listaLocaciones: ResultL[] = [];
  cantPaginas : number = 0;
  count:number=0;
  pagActual: number = 1;
  ngOnInit() {
    this.cargarUnaPagina();
  }

  cargarUnaPagina(){
    this.consulta.getLocationsByPage(this.pagActual).subscribe(info=>{
      this.count = info.info.count;
      this.cantPaginas = info.info.pages;
      this.listaLocaciones = info.results;
    })
  }
   cargarPagina(event: PageEvent) {
  this.pagActual = event.pageIndex + 1;
  this.cargarUnaPagina();
  }


}
