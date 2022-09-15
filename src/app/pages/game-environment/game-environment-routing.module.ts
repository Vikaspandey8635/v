import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePlayEnComponent } from './game-play-en/game-play-en.component';
import { AddGamePlayComponent } from './add-game-play/add-game-play.component';
import { EditGamePlayComponent } from './edit-game-play/edit-game-play.component';

const routes: Routes = [
  { path: '', component: GamePlayEnComponent },
  { path: 'addGame', component: AddGamePlayComponent },
  { path: 'editGame', component: EditGamePlayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameEnvironmentRoutingModule {}
