import { Component, Input, OnInit } from '@angular/core';
import { ResultE } from 'src/app/models/episodes';
import { EpisodiosService } from '../../episodios.service';
@Component({
  selector: 'app-card-episodio',
  templateUrl: './card-episodio.component.html',
  styleUrls: ['./card-episodio.component.css']
})
export class CardEpisodioComponent implements OnInit{
  @Input() dataEpisodio?:ResultE;
  personajesEpisodio:string[]=[];
  constructor(private consulta:EpisodiosService){}
  ngOnInit() {

  }

}
