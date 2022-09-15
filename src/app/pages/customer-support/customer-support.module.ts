import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { SupportComponent } from './support/support.component';
import { EditSupportComponent } from './edit-support/edit-support.component';

@NgModule({
  declarations: [SupportComponent, EditSupportComponent],
  imports: [
    CommonModule,
    CustomerSupportRoutingModule,
    MaterialModule,
    MatTableModule,
    MatTableModule,
  ],
})
export class CustomerSupportModule {}
