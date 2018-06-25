import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="text-center pt-5">
    <form #loginForm="ngForm" (ngSubmit)="loginUser()" class="form-signin">
      <img class="mb-4" src="../../assets/mobile_programming.jpg" alt="" width="300" height="170">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div>
        <label for="emailID" class="sr-only">Email ID</label>
        <input class="form-control" id="emailID" required pattern="[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,3}$" [ngClass]="{
                    'is-valid': emailID.valid && (emailID.dirty || emailID.touched),
                    'is-invalid': emailID.invalid && (emailID.dirty || emailID.touched)
                  }" [(ngModel)]="model.emailID" name="emailID" #emailID="ngModel" placeholder="Email Address">
        <div *ngIf="emailID.invalid && (emailID.dirty || emailID.touched)" style="position: relative; top: -3px;" class="invalid-tooltip">
          <div [hidden]="!emailID.errors.required">
            Email address is required!
          </div>
          <div [hidden]="!emailID.errors.pattern">
            Invalid email address
          </div>
        </div>
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input type="password" class="form-control" id="password" required [ngClass]="{
                        'is-valid': password.valid && (password.dirty || password.touched),
                        'is-invalid': password.invalid && (password.dirty || password.touched)
                      }" [(ngModel)]="model.password" name="password" #password="ngModel" placeholder="Password" style="top: -3px;">
        <div *ngIf="password.invalid && (password.dirty || password.touched)" style="position:relative; top:-13px;" class="invalid-tooltip">
          <div [hidden]="!password.errors.required">
            Password is required!
          </div>
        </div>
      </div>
      <div class="custom-control custom-checkbox mb-3 float-left">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Remember me</label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" *ngIf="loginForm.valid" type="submit">Sign in</button>
      <button class="btn btn-lg btn-outline-primary btn-block" *ngIf="loginForm.invalid"
      [disabled]="loginForm.invalid" type="submit">Sign in</button>
    </form>
  </div>
  `,
  styles: [
    `
      img {
        position: relative;
        right: 12px;
        top: 10px;
      }

      .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
      }
      .form-signin .checkbox {
        font-weight: 400;
      }
      .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
      }
      .form-signin .form-control:focus {
        z-index: 2;
      }
      .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      .btn-outline-primary:disabled {
        color: #007bff;
        background-color: transparent;
        cursor: not-allowed;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  model = {
    'emailID': '',
    'password': ''
  };
  constructor() { }

  ngOnInit() { }

  loginUser() {

  }
}
