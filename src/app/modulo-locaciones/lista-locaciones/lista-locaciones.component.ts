import { Component } from '@angular/core';
import { LocacionesService } from '../locaciones.service';
import { ResultL } from 'src/app/models/locations';
@Component({
  selector: 'app-lista-locaciones',
  templateUrl: './lista-locaciones.component.html',
  styleUrls: ['./lista-locaciones.component.css']
})
export class ListaLocacionesComponent {
  constructor(private consulta:LocacionesService){}
listaLocaciones: ResultL[] = [];
  cantPaginas : number = 0;
  pagActual: number = 1;
  ngOnInit() {
    this.cargarUnaPagina();
  }
  aumentar(num:number){
      if(this.pagActual<this.cantPaginas){
        console.log(this.pagActual);
        this.pagActual=this.pagActual + num;
        this.cargarUnaPagina();
      }
    }
    restar(num:number){
      if(this.pagActual>1){
        this.pagActual= this.pagActual - num;
      this.cargarUnaPagina();
    }
  }
  cargarUnaPagina(){
    this.consulta.getLocationsByPage(this.pagActual).subscribe(info=>{
      this.cantPaginas = info.info.pages;
      this.listaLocaciones = info.results;
    })
  }

}
