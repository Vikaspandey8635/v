import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminRoutingModule } from './sub-admin-routing.module';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EditSubAdminComponent } from './edit-sub-admin/edit-sub-admin.component';

@NgModule({
  declarations: [
    SubAdminComponent,
    AddSubAdminComponent,
    EditSubAdminComponent,
  ],
  imports: [
    CommonModule,
    SubAdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
})
export class SubAdminModule {}
