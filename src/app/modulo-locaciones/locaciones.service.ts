import { Injectable } from '@angular/core';
import { ResultL, RootL } from '../models/locations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/characters';
@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http:HttpClient) { }
    getLocationsByPage(pag:number):Observable<RootL>{
    return this.http.get<RootL>(`https://rickandmortyapi.com/api/location/?page=${pag}`);
  }
  getCharacterByUrl(url:string):Observable<Result>{
    return this.http.get<Result>(`${url}`);
  }
    getLocationById(id:number):Observable<ResultL>{
    return this.http.get<ResultL>(`https://rickandmortyapi.com/api/location/${id}`)
  }

}
