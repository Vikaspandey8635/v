import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsSubmenuComponent } from './analytics-submenu/analytics-submenu.component';

const routes: Routes = [{ path: '', component: AnalyticsSubmenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
