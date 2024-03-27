export class Cliente {
    id?: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    password: string;

    constructor(id: number, nombre: string, apellido: string, telefono: string, email: string, password: string) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.email = email;
      this.password = password;
    }
  }
