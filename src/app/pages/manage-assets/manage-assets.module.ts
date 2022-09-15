import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ManageAssetsRoutingModule } from './manage-assets-routing.module';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';

@NgModule({
  declarations: [AssetsComponent, AddAssetsComponent, EditAssetsComponent],
  imports: [
    CommonModule,
    ManageAssetsRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class ManageAssetsModule {}
