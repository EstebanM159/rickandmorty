import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
import {  ResultE } from 'src/app/models/episodes';
@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit{
  constructor (private consulta:EpisodiosService){}
  listaEpisodios ?: ResultE[]=[];
  cantPaginas : number = 0;
  pagActual: number = 1;
  ngOnInit(){
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
    this.consulta.getEpisodeByPage(this.pagActual).subscribe(info=>{
      console.log(info);
      this.cantPaginas = info.info.pages;
      this.listaEpisodios = info.results;
    })
  }
}
