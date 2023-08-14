import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
import { ActivatedRoute } from '@angular/router';
import { ResultE } from 'src/app/models/episodes';
@Component({
  selector: 'app-episodio-details',
  templateUrl: './episodio-details.component.html',
  styleUrls: ['./episodio-details.component.css']
})
export class EpisodioDetailsComponent implements OnInit{
constructor(private consulta:EpisodiosService,  private rutaActiva:ActivatedRoute){}
id:number=0;
unEpisodio?:ResultE;
listaNombresPjs:string[]=[];
ngOnInit() {
  this.id = this.rutaActiva.snapshot.params['id'];
  this.extraerInfo();
  console.log(this.listaNombresPjs);
}

extraerInfo(){
  this.consulta.getEpisodeById(this.id).subscribe(data=>{
    this.unEpisodio=data;
    if(this.unEpisodio ){
      for (let i = 0; i < this.unEpisodio.characters.length; i++) {
        this.consulta.getCharacterByUrl(this.unEpisodio.characters[i]).subscribe(data=>{
          this.listaNombresPjs.push(data.name);
        })
      }
    }
    console.log(data);
  })
}

}
