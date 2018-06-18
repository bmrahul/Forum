import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Shared/user';
import { NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupService } from '../Shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(
    private datepicker: NgbDatepickerConfig,
    private modalService: NgbModal,
    private signup: SignupService
  ) { }

  ngOnInit() {
  }

  onSubmit(userDetails: User) {

  }
}
