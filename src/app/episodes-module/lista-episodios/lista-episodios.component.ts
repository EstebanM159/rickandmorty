import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit{
  ngOnInit(){
      this.cargarEpisodios();
  }

  cargarEpisodios(){

  }
}
