import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagereferralpopupComponent } from './managereferralpopup/managereferralpopup.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ManagereferralpopupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
})
export class ModalsModule {}
