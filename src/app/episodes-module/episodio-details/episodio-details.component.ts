import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
import { ActivatedRoute } from '@angular/router';
import { ResultE } from 'src/app/models/episodes';
import { Result } from 'src/app/models/characters';


@Component({
  selector: 'app-episodio-details',
  templateUrl: './episodio-details.component.html',
  styleUrls: ['./episodio-details.component.css']
})
export class EpisodioDetailsComponent implements OnInit{
constructor(private consulta:EpisodiosService,  private rutaActiva:ActivatedRoute){}
id:number=0;
unEpisodio?:ResultE;
listaPjs:Result[]=[];
ngOnInit() {
  this.id = this.rutaActiva.snapshot.params['id'];
  this.extraerInfo();
}

extraerInfo(){
  this.consulta.getEpisodeById(this.id).subscribe(data=>{
    this.unEpisodio=data;
    if(this.unEpisodio ){
      for (let i = 0; i < this.unEpisodio.characters.length; i++) {
        this.consulta.getCharacterByUrl(this.unEpisodio.characters[i]).subscribe(info=>{
          this.listaPjs[i] = info;
        })

      }
    }
  })
}}
