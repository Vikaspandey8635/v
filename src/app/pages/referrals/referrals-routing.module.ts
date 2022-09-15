import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralsPageComponent } from './referrals-page/referrals-page.component';
import { AddreferralsComponent } from './addreferrals/addreferrals.component';
import { EditrefComponent } from './editref/editref.component';
const routes: Routes = [
  { path: '', component: ReferralsPageComponent },
  { path: 'addref', component: AddreferralsComponent },
  { path: 'editref', component: EditrefComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralsRoutingModule {}
