import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  usersList: AngularFireList<any>;
  selectedUser: User = new User();
  constructor(private ngFireDB: AngularFireDatabase) { }

  getData(path): Observable<any[]> {
    return this.ngFireDB.list(path).valueChanges();
  }

  insertUser(user: User) {
    const obj = this.ngFireDB.database.ref('/User');
    obj.push(user);
  }
}
