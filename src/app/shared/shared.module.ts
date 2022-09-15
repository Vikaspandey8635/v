import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { GraphComponent } from './component/graph/graph.component';
import { MaterialModule } from './Material/material.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatExpansionModule,
    RouterModule
  ] ,
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
