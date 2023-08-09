import { Component, Input,OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input() dataPj?: Result;
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

