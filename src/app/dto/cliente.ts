export class Cliente {
    id?: number;
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;

    constructor(id: number, nombre: string, apellido: string, telefono: number, email: string) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.email = email;
    }
  }
