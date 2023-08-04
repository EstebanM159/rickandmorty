import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private http:HttpClient) { }

  getAllEpisodes(){
    return this.http.get("https://rickandmortyapi.com/api/episode");
  }

}
