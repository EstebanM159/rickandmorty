import { Component, OnInit } from '@angular/core';
import { ListaPersonajesService } from '../lista-personajes.service';
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit{
constructor(private consulta:ListaPersonajesService){}

ngOnInit() {
this.cargarPersonajes();
this.traerUnPj();
}

cargarPersonajes(){
  this.consulta.getCharacters().subscribe(info=>{
    console.log(info);
  })
}
traerUnPj(){
  this.consulta.getCharacterById().subscribe(ch=>{
    console.log(ch.name)
  })
}
}
