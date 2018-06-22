import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ImageCropperModule } from 'ngx-image-cropper';

import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { SignupComponent } from './signup.component';
import { TestComponent } from './test.component';

const APP_ROUTES: Routes = [
  { path: '/signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TestComponent,
  ]
})
export class RoutingModule { }
