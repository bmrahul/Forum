import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  selectedUser: User = new User();
  constructor() { }
}
