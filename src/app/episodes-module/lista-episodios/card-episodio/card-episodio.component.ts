import { Component, Input, OnInit } from '@angular/core';
import { ResultE } from 'src/app/models/episodes';
import { EpisodiosService } from '../../episodios.service';
import { Result } from 'src/app/models/characters';
@Component({
  selector: 'app-card-episodio',
  templateUrl: './card-episodio.component.html',
  styleUrls: ['./card-episodio.component.css']
})
export class CardEpisodioComponent {
  @Input() dataEpisodio?:ResultE ;

  cargado:boolean=false;
  constructor(private consulta:EpisodiosService){}



}
