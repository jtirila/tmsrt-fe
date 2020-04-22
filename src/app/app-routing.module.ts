import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';

const routes: Routes = [
  { path: 'tournaments', component: TournamentListComponent },
  { path: 'tournaments/:tournamentId', component: TournamentDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
