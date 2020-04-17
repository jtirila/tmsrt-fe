import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.sass']
})
export class TournamentListComponent implements OnInit {
  tournaments; 
  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    // this.tournaments = 
  }

  getTournaments() {
    this.tournaments = this.tournamentService.getAll();
  }

}
