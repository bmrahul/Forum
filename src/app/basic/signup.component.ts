import { Component, OnInit } from '@angular/core';
import { NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupService } from '../Shared/signup.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Shared/user';
import { RcryptionService } from '../Shared/rcryption.service';

const now = new Date();

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
    `
    .profilePic {
      border: 1px solid #c2c2c2;
      position: absolute !important;
      width: 150px;
      height: 150px !important;
      cursor: pointer;
      border-radius: 50%;
    }

    .profileImg {
      position: absolute;
      width: 150px;
      height: 150px;
      cursor: pointer;
      border-radius: 50%;
    }

    .proPicErrorMsg {
      margin-top: 115px;
    }

    .fasPic {
      font-size: 60px;
      position: absolute;
      top: 42px;
      left: 46px;
      opacity: 0.4;
      cursor: pointer;
    }

    .btn-outline-primary:disabled {
      color: #007bff;
      background-color: transparent;
      cursor: not-allowed;
    }

    .proImage {
      max-height: 390px !important;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      .profilePic {
        right: 0px;
      }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      .profilePic {
        right: 0px;
      }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      .profilePic {
        right: 0px;
      }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      .profilePic {
        right: 104px;
      }
    }

    `
  ]
})
export class SignupComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;
  usersList: User[];
  model = {
    confPass: ''
  };

  constructor(
    private datepicker: NgbDatepickerConfig,
    private modalService: NgbModal,
    private signup: SignupService,
    private rcrypt: RcryptionService,
    private toastr: ToastrService
  ) {
    datepicker.minDate = {year: 1900, month: 1, day: 1};
    datepicker.maxDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    datepicker.outsideDays = 'hidden';
  }

  ngOnInit() {
    this.signup.getData('/User')
    .subscribe(response => {
      console.log(response);
      this.usersList = response;
    });
  }

  open(content) {
    this.imageChangedEvent = null;
    this.modalService.open(content, {backdrop: 'static'});
  }

  fileChangeEvent(event) {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.signup.selectedUser.profilePic = image;
    this.croppedImage = image;
  }
  imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed () {
    console.log('Load failed');
  }

  checkUsername(username: string) {
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].username === username) {
        this.signup.selectedUser.username = '';
        this.toastr.warning('Username already taken');
      }
    }
  }

  checkEmail(email: string) {
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].emailID === email) {
        this.signup.selectedUser.emailID = '';
        this.toastr.warning('Email ID already registered.');
      }
    }
  }

  onSubmit() {
    this.signup.selectedUser.password = this.rcrypt.encrypt(this.signup.selectedUser.password);
    console.log(this.signup.selectedUser);
    this.signup.insertUser(this.signup.selectedUser);
    this.croppedImage = '';
    this.toastr.success('Details saved successfully');
  }
}
