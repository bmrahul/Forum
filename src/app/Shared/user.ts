export class User {
  $key: string;
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  password: string;
  emailID: string;
  mobileNo: number;
  profilePic: string;
  address: string;
  birthday: {
     day: number,
      month: number,
      year: number,
  };
}
