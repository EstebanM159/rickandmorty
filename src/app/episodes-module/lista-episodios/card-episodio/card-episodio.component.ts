import { Component, Input, OnInit } from '@angular/core';
import { ResultE } from 'src/app/models/episodes';
import { EpisodiosService } from '../../episodios.service';
@Component({
  selector: 'app-card-episodio',
  templateUrl: './card-episodio.component.html',
  styleUrls: ['./card-episodio.component.css']
})
export class CardEpisodioComponent implements OnInit{
  @Input() dataEpisodio?:ResultE ;
  personajesEpisodio:string[]=[];
  personajesDelEpisodio:string[]=[];
  constructor(private consulta:EpisodiosService){}
  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes(){
    if(this.dataEpisodio){
      this.personajesEpisodio = this.dataEpisodio.characters
    }
    for (let i = 0; i < this.personajesEpisodio.length; i++) {
      this.consulta.getCharacterByUrl(this.personajesEpisodio[i]).subscribe(data=>{
        this.personajesDelEpisodio.push(data.name);
      })

    }
  }


}
