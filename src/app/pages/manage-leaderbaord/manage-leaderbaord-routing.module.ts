import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderbaordComponent } from './leaderbaord/leaderbaord.component';
const routes: Routes = [{ path: '', component: LeaderbaordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageLeaderbaordRoutingModule {}
