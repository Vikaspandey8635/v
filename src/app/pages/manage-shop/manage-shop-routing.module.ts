import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsershopComponent } from './usershop/usershop.component';
import { AddShopComponent } from './add-shop/add-shop.component';
 
const routes: Routes = [
  { path: '', component: UsershopComponent },
  { path: 'shop/:type', component: AddShopComponent },
  { path: 'shop/:type/:id', component: AddShopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageShopRoutingModule {}
