import { Component, OnInit } from '@angular/core';
import { ListaPersonajesService } from '../lista-personajes.service';
import { Result } from 'src/app/models/characters';
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  constructor(private consulta: ListaPersonajesService) { }
  listaPersonajes: Result[] = [];
  cantPaginas : number = 0;
  pagActual: number = 1;
  ngOnInit() {
    this.cargarUnaPagina();
  }
  aumentar(num:number){
      if(this.pagActual<this.cantPaginas){
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
    this.consulta.getCharactersByPage(this.pagActual).subscribe(info=>{
      this.cantPaginas = info.info.pages;
      this.listaPersonajes = info.results;
    })
  }



}
