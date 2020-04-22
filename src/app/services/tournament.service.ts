import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) { }
  getAll() {
     /* FIXME:
        - Change hard coded local dev url to something env specific,
          configurable
        - Maybe use a Tournament model instead of just returning an
	  array of plain objects? */
    return this.http.get('http://127.0.0.1:5000/tournaments/');
  }

  getTournament(tournamentId) {
    /* Probably need to check the contents of tournamentId, at least make sure it
       cannot be used to access some other resource instead.

       Also, see notes about URL above. */
    return this.http.get(`http://127.0.0.1:5000/tournaments/${tournamentId}`);
  }
}
