import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsSubmenuComponent } from './analytics-submenu/analytics-submenu.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [AnalyticsSubmenuComponent],
  imports: [CommonModule, AnalyticsRoutingModule, NgxEchartsModule],
})
export class AnalyticsModule {}
