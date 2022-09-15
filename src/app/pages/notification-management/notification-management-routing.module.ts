import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';

const routes: Routes = [
  { path: '', component: NotificationComponent },
  { path: 'addnotification', component: AddNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationManagementRoutingModule {}
