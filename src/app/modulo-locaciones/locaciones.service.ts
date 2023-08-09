import { Injectable } from '@angular/core';
import { ResultL, RootL } from '../models/locations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http:HttpClient) { }
    getLocationsByPage(pag:number):Observable<RootL>{
    return this.http.get<RootL>(`https://rickandmortyapi.com/api/location/?page=${pag}`);
  }
  getCharacterByUrl(url:string):Observable<ResultL>{
    return this.http.get<ResultL>(`${url}`);
  }
}
