export class Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  foto: string;
  anio: number;
  kilometraje: number;
  precio: number;
  calificacion: number;

  constructor(codigo: string, marca: string, modelo: string, foto: string, anio: number, kilometraje: number, precio: number, calificacion: number) {
    this.codigo = codigo;
    this.marca = marca;
    this.modelo = modelo;
    this.foto = foto;
    this.anio = anio;
    this.kilometraje = kilometraje;
    this.precio = precio;
    this.calificacion = calificacion;
  }
}
