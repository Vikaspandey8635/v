import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCmsRoutingModule } from './manage-cms-routing.module';
import { CmsComponent } from './cms/cms.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/Material/material.module';


@NgModule({
  declarations: [
    CmsComponent
  ],
  imports: [
    CommonModule,
    ManageCmsRoutingModule,
    CommonModule,
    MaterialModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageCmsModule { }
