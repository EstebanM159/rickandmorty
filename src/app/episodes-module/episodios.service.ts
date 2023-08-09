import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootE } from '../models/episodes';
import { Result } from '../models/characters';
@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private http:HttpClient) { }

  getCharacterByUrl(url:string):Observable<Result>{
    return this.http.get<Result>(`${url}`);
  }
  getEpisodeByPage(pag:number):Observable<RootE>{
    return this.http.get<RootE>(`https://rickandmortyapi.com/api/episode/?page=${pag}`);
  }


}
