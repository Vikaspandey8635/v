import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { EditLevelComponent } from './edit-level/edit-level.component';
const routes: Routes = [
  { path: '', component: LevelsComponent },
  { path: 'addlevel', component: AddLevelComponent },
  { path: 'editlevel', component: EditLevelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageLevelRoutingModule {}
