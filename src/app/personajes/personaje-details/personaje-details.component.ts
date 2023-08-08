import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListaPersonajesService } from '../lista-personajes.service';
import { Result,Location ,Origin } from 'src/app/models/characters';
@Component({
  selector: 'app-personaje-details',
  templateUrl: './personaje-details.component.html',
  styleUrls: ['./personaje-details.component.css']
})
export class PersonajeDetailsComponent implements OnInit{
constructor(private consulta:ListaPersonajesService, private rutaActiva:ActivatedRoute){}
id:number=0;
location?:Location;
origen?:Origin;
infoPj?:Result;
ngOnInit() {
   this.id = this.rutaActiva.snapshot.params['id'];
   this.extraerInfo();
}
extraerInfo(){
  this.consulta.getCharacterById(this.id).subscribe(data=>{
    this.infoPj=data;
    this.origen=data.origin;
    this.location=data.location;
  })
}
color(status?:string):string{
  let clase:string="";
    switch (status) {
      case 'Alive':
        clase = 'verde';
      break;
      case 'Dead':
        clase = 'rojo';
        break;
         case 'unknown':
        clase = 'gris';
        break;
    }
return clase;
}
}
