import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Result, Root } from '../models/characters';
@Injectable({
  providedIn: 'root'
})
export class ListaPersonajesService {

  constructor(private http:HttpClient) { }

  getCharacters():Observable<Root>{
   return this.http.get<Root>('https://rickandmortyapi.com/api/character');
  }
  getCharacterById():Observable<Result>{
    return this.http.get<Result>('https://rickandmortyapi.com/api/character/2')
  }
}
