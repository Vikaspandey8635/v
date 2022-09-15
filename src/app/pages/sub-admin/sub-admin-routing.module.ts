import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { EditSubAdminComponent } from './edit-sub-admin/edit-sub-admin.component';

const routes: Routes = [
  { path: '', component: SubAdminComponent },
  { path: 'add-subadmin', component: AddSubAdminComponent },
  { path: 'edit-subadmin', component: EditSubAdminComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubAdminRoutingModule {}
