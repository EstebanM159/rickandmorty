import { Component ,Input} from '@angular/core';
import { ResultL } from 'src/app/models/locations';
import { LocacionesService } from '../../locaciones.service';
@Component({
  selector: 'app-card-loc',
  templateUrl: './card-loc.component.html',
  styleUrls: ['./card-loc.component.css']
})
export class CardLocComponent {
  @Input() dataLocacion?:ResultL;
  listaNombresPjs:string[]=[];
  cargado:boolean=false;
  constructor(private consulta:LocacionesService){}
  validarCarga(){
    if(!this.cargado){
      this.cargarPersonajes();
    }
  }
  cargarPersonajes(){
    if(this.dataLocacion){
      for (let i = 0; i < this.dataLocacion.residents.length; i++) {
        this.consulta.getCharacterByUrl(this.dataLocacion.residents[i]).subscribe(data=>{
          this.listaNombresPjs.push(data.name);
        })
      }
      this.cargado=true;
    }
  }
}
