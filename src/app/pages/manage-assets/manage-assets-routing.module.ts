import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
const routes: Routes = [
  { path: '', component: AssetsComponent },
  { path: 'addAssets', component: AddAssetsComponent },
  { path: 'editAssets', component: EditAssetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageAssetsRoutingModule {}
