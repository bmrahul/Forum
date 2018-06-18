import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { SignupComponent } from './signup.component';

const APP_ROUTES: Routes = [
  { path: '/signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  ]
})
export class RoutingModule { }
