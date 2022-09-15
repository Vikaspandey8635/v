import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotificationComponent, AddNotificationComponent],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule,
    MaterialModule,
    MatTableModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    
  ],
})
export class NotificationManagementModule {}
