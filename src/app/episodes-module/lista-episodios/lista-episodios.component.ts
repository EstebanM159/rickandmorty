import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
import {  ResultE } from 'src/app/models/episodes';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit{
  constructor (private consulta:EpisodiosService){}
  listaEpisodios ?: ResultE[]=[];
  cantPaginas : number = 0;
  count:number=0;
  pagActual: number = 1;
  ngOnInit(){
      this.cargarUnaPagina();
  }

  cargarUnaPagina(){
    this.consulta.getEpisodeByPage(this.pagActual).subscribe(info=>{
      this.count=info.info.count;
      this.cantPaginas = info.info.pages;
      this.listaEpisodios = info.results;
    })
  }
    cargarPagina(event: PageEvent) {
  this.pagActual = event.pageIndex + 1;
  this.cargarUnaPagina();
  }

}
