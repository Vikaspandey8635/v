import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ManageLevelRoutingModule } from './manage-level-routing.module';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { EditLevelComponent } from './edit-level/edit-level.component';

@NgModule({
  declarations: [LevelsComponent, AddLevelComponent, EditLevelComponent],
  imports: [
    CommonModule,
    ManageLevelRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class ManageLevelModule {}
