import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GameEnvironmentRoutingModule } from './game-environment-routing.module';
import { GamePlayEnComponent } from './game-play-en/game-play-en.component';
import { AddGamePlayComponent } from './add-game-play/add-game-play.component';
import { EditGamePlayComponent } from './edit-game-play/edit-game-play.component';

@NgModule({
  declarations: [GamePlayEnComponent, AddGamePlayComponent, EditGamePlayComponent],
  imports: [
    CommonModule,
    GameEnvironmentRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,
  ],
})
export class GameEnvironmentModule {}
