import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { PasswordPageComponent } from './password-page/password-page.component';

@NgModule({
  declarations: [PasswordPageComponent],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ChangePasswordModule {}
