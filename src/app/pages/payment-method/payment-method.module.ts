import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { PaymentMethodRoutingModule } from './payment-method-routing.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class PaymentMethodModule {}
