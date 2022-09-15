import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ManageShopRoutingModule } from './manage-shop-routing.module';
import { UsershopComponent } from './usershop/usershop.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsershopComponent, AddShopComponent, EditShopComponent],
  imports: [
    CommonModule,
    ManageShopRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,ReactiveFormsModule
  ],
})
export class ManageShopModule {}
