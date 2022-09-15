import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './page-layout/auth/auth.component';
import { MainComponent } from './page-layout/main/main.component';
import { AuthGaurd } from './shared/services/gaurds/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
