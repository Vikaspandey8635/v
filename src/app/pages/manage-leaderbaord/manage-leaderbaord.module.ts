import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { ManageLeaderbaordRoutingModule } from './manage-leaderbaord-routing.module';
import { LeaderbaordComponent } from './leaderbaord/leaderbaord.component';

@NgModule({
  declarations: [LeaderbaordComponent],
  imports: [
    CommonModule,
    ManageLeaderbaordRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ManageLeaderbaordModule {}
