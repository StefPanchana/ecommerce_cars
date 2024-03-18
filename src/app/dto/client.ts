export class Client {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;

  constructor(id: string, name: string, email: string, password: string, phoneNumber: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
}
