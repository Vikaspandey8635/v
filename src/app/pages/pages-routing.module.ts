import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userList', component: AddUserComponent},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'manageShop',
    loadChildren: () =>
      import('./manage-shop/manage-shop.module').then(
        (m) => m.ManageShopModule
      ),
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./manage-cms/manage-cms.module').then((m) => m.ManageCmsModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./customer-support/customer-support.module').then(
        (m) => m.CustomerSupportModule
      ),
  },
  {
    path: 'sub-admin',
    loadChildren: () =>
      import('./sub-admin/sub-admin.module').then((m) => m.SubAdminModule),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./manage-leaderbaord/manage-leaderbaord.module').then(
        (m) => m.ManageLeaderbaordModule
      ),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./notification-management/notification-management.module').then(
        (m) => m.NotificationManagementModule
      ),
  },
  {
    path: 'level',
    loadChildren: () =>
      import('./manage-level/manage-level.module').then(
        (m) => m.ManageLevelModule
      ),
  },
  {
    path: 'Gameplay',
    loadChildren: () =>
      import('./game-environment/game-environment.module').then(
        (m) => m.GameEnvironmentModule
      ),
  },
  {
    path: 'Payment',
    loadChildren: () =>
      import('./payment-method/payment-method.module').then(
        (m) => m.PaymentMethodModule
      ),
  },
  {
    path: 'referrals',
    loadChildren: () =>
      import('./referrals/referrals.module').then((m) => m.ReferralsModule),
  },
  {
    path: 'manageAssets',
    loadChildren: () =>
      import('./manage-assets/manage-assets.module').then(
        (m) => m.ManageAssetsModule
      ),
  },
  {
    path: 'myprofile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'changePass',
    loadChildren: () =>
      import('./change-password/change-password.module').then(
        (m) => m.ChangePasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
