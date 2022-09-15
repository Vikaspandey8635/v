import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { EditSupportComponent } from './edit-support/edit-support.component';

const routes: Routes = [
  { path: '', component: SupportComponent },
  { path: 'editSupport', component: EditSupportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSupportRoutingModule {}
