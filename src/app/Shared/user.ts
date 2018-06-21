export class User {
  constructor(
    public $key: string = '',
    public firstName: string = '',
    public middleName: string = '',
    public lastName: string = '',
    public username: string = '',
    public password: string = '',
    public emailID: string = '',
    public mobileNo: number = null,
    public profilePic: string = '',
    public address: string = '',
    public birthday: {
      day: number = null,
      month: number = null,
      year: number = null,
    },
  ) { }
}
