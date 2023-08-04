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
  ngOnInit(){
      this.cargarEpisodios();
  }

  cargarEpisodios(){
    this.consulta.getAllEpisodes().subscribe(data=>{
      this.listaEpisodios = data.results;
    })
  }
}
