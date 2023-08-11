import { Component, OnInit } from '@angular/core';
import { ListaPersonajesService } from '../lista-personajes.service';
import { Result } from 'src/app/models/characters';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  constructor(private consulta: ListaPersonajesService) { }
  listaPersonajes: Result[] = [];
  cantPaginas : number = 0;
  count : number = 0;
  pagActual: number = 1;
  ngOnInit() {
    this.cargarUnaPagina();
  }

  cargarUnaPagina(){
    this.consulta.getCharactersByPage(this.pagActual).subscribe(info=>{
      this.count =info.info.count;
      this.cantPaginas = info.info.pages;
      this.listaPersonajes = info.results;
    })
  }
  cargarPagina(event: PageEvent) {
  this.pagActual = event.pageIndex + 1;
  this.cargarUnaPagina();
  }



}
