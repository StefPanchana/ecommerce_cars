export class Client {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;

  constructor(id: string, name: string, lastname: string, email: string, password: string, phonenumber: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phonenumber = phonenumber;
  }
}
