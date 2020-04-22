import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.sass']
})
export class TournamentDetailsComponent implements OnInit {
  tournamentObservable;
  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tournamentObservable = this.tournamentService.getTournament(this.route.snapshot.paramMap.get('tournamentId'));
  }

}
