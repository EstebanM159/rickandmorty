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
  listaNombresPjs:string[]=[];
  constructor(private consulta:EpisodiosService){}
  cargarPersonajes(){
    if(this.dataEpisodio ){
      for (let i = 0; i < this.dataEpisodio.characters.length; i++) {
        this.consulta.getCharacterByUrl(this.dataEpisodio.characters[i]).subscribe(data=>{
          this.listaNombresPjs.push(data.name);
        })
      }
    }
  }

}
