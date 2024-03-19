import { Injectable } from '@angular/core';
import { Car } from '../dto/car';
import {Observable, map, pipe} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Vehiculo} from "../dto/vehiculo";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class CarService {

baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

constructor(private http: HttpClient) {

}

getAllCars():Observable<Car[]> {
  return this.http.get<ResponseForHttp>(this.baseUrl+"vehiculos/").pipe(map(datatry => {
    console.log(datatry.data);

    let listCar:Array<Car> = [];
    datatry.data.forEach(element => {
      listCar.push({
        id: element.id,
        code: element.codigo,
        brand: element.marca,
        model: element.modelo,
        year: element.anio,
        colour: '',
        kilometers: element.kilometraje,
        price: element.precio,
        rating: element.calificacion,
        imgUrl: element.foto
      })
    });

    // Actualizo la informacion de la lista de autos
    this.carList = listCar;

    // Retorno la lista de autos actualizada
    return this.carList;
  }));
}

getCars(filter: any): Observable<Array<Car>>{
  const listener: Observable<Array<Car>> = new Observable(listening => {
    setTimeout(() => {
      let car = this.carList.filter(r => r.brand.toLocaleLowerCase().includes(filter));
      listening.next(car);
    }, 100);
  });
  return listener;
}

getCarById(id:number){
  return this.carList.find(idcar => idcar.id === id);
}

getCarByCode(code: string)
{
  return this.carList.find(
    codeCar => codeCar.code === code
  );
}

addCar(car: Car){
  this.carList.push(car);
}

insertCar(car: Car){
  let httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  let newCar: Vehiculo = {
    codigo: car.code,
    marca: car.brand,
    modelo: car.model,
    foto: car.imgUrl,
    anio: car.year,
    precio: car.price,
    calificacion: car.rating,
    kilometraje: car.kilometers,
  };

  return this.http.post<ResponseForHttp>(this.baseUrl+"vehiculo/", newCar, httpOptions);
}

findCar(id: string)
{
  return this.http.get<ResponseForHttp>(this.baseUrl+"vehiculo/"+id);
}

deleteCar(id: string)
{
  return this.http.delete<ResponseForHttp>(this.baseUrl+"vehiculo/"+id);
}

private carList: Array<Car> = [
  {id: 1, code: "AAA001", brand: "kia", model: "stonic", year: 2023, colour: "azul", price: 20000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/stonic.webp" },
  {id: 2, code: "AAA002", brand: "suzuki", model: "scross", year: 2023, colour: "azul", price: 25000, kilometers: 15000, rating: 4, imgUrl: "assets/carsImages/scross.jpg" },
  {id: 3, code: "AAA003", brand: "opel", model: "corsa", year: 2023, colour: "azul", price: 19000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/corsa.jpg" },
  {id: 4, code: "AAA004", brand: "toyota", model: "cross", year: 2023, colour: "azul", price: 29000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/cross.webp" },
  {id: 5, code: "AAA005", brand: "kia", model: "niro", year: 2023, colour: "azul", price: 30000, kilometers: 8000, rating: 4, imgUrl: "assets/carsImages/niro.jpg" }
]
}

export interface ResponseForHttp {
  codigo: string;
  mensaje: string;
  data: any;
}
