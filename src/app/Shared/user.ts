export class User {
  $key: string;
  firstName: string;
  lastName: string;
  emailID: string;
  mobileNo: number;
  profilePic: string;
  address: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
}
