import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';
import { ResultL } from 'src/app/models/locations';
import { ActivatedRoute } from '@angular/router';
import { LocacionesService } from '../locaciones.service';
@Component({
  selector: 'app-locaciones-details',
  templateUrl: './locaciones-details.component.html',
  styleUrls: ['./locaciones-details.component.css']
})
export class LocacionesDetailsComponent implements OnInit{
  constructor(private consulta:LocacionesService,  private rutaActiva:ActivatedRoute){}
id:number=0;
unaLocacion?:ResultL;
listaPjs:Result[]=[];
claseH:boolean=false;
ngOnInit() {
  this.id = this.rutaActiva.snapshot.params['id'];
  this.extraerInfo();
}

extraerInfo(){
  this.consulta.getLocationById(this.id).subscribe(data=>{
    this.claseH = false;
    this.unaLocacion=data;
    if(this.unaLocacion){
      for (let i = 0; i < this.unaLocacion.residents.length; i++) {
        this.consulta.getCharacterByUrl(this.unaLocacion.residents[i]).subscribe(info=>{
          this.listaPjs[i] = info;
           if(this.listaPjs.length>6){
               this.claseH=true;
             }

        }
          )

        }
    }

  })
}
}
