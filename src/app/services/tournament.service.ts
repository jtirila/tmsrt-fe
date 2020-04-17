import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) { }
  getAll() {
     // FIXME:
     // - Change hard coded local dev url to something env specific, configurable
     // - Maybe use a Tournament model instead of just returning plain object?
     return this.http.get<Object[]>('http://127.0.0.1:5000/tournaments')
  }
}
