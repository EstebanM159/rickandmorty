import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Result, Root } from '../models/characters';
@Injectable({
  providedIn: 'root'
})
export class ListaPersonajesService {

  constructor(private http:HttpClient) { }
  getCharactersByPage(pag:number):Observable<Root>{
    return this.http.get<Root>(`https://rickandmortyapi.com/api/character/?page=${pag}`);
  }
  getCharacterById(id:number):Observable<Result>{
    return this.http.get<Result>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
