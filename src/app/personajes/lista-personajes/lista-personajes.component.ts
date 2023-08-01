import { Component, OnInit } from '@angular/core';
import { ListaPersonajesService } from '../lista-personajes.service';
import { Result } from 'src/app/models/characters';
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  constructor(private consulta: ListaPersonajesService) { }
  listaPersonajes: Result[] = [];
  ngOnInit() {
    this.cargarPersonajes();
    this.traerUnPj();
  }

  cargarPersonajes() {
    this.consulta.getCharacters().subscribe(info => {
      this.listaPersonajes = info.results;
    })
  }
  traerUnPj() {
    this.consulta.getCharacterById().subscribe(ch => {
      console.log(ch.name)
    })
  }
}
