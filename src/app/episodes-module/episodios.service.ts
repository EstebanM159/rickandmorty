import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootE } from '../models/episodes';
@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private http:HttpClient) { }

  getAllEpisodes():Observable<RootE>{
    return this.http.get<RootE>("https://rickandmortyapi.com/api/episode");
  }

}
