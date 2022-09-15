import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchModule } from 'src/app/shared/component/search/search.module';
import { PaginatorModule } from 'src/app/shared/component/paginator/paginator.module';

@NgModule({
  declarations: [UserListComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    PaginatorModule
  ],
})
export class UserModule {}
