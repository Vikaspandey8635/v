import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReferralsRoutingModule } from './referrals-routing.module';
import { ReferralsPageComponent } from './referrals-page/referrals-page.component';
import { AddreferralsComponent } from './addreferrals/addreferrals.component';
import { EditrefComponent } from './editref/editref.component';

@NgModule({
  declarations: [ReferralsPageComponent, AddreferralsComponent, EditrefComponent],
  imports: [
    CommonModule,
    ReferralsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,
  ],
})
export class ReferralsModule {}
