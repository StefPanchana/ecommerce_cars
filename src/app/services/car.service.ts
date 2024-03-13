import { Injectable } from '@angular/core';
import { Car } from '../dto/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

constructor() { }

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

addCar(car: Car){
  this.carList.push(car);
}

private carList: Array<Car> = [
  {id: 1, brand: "kia", model: "stonic", year: 2023, colour: "azul", price: 20000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/stonic.webp" },
  {id: 2, brand: "suzuki", model: "scross", year: 2023, colour: "azul", price: 25000, kilometers: 15000, rating: 4, imgUrl: "assets/carsImages/scross.jpg" },
  {id: 3, brand: "opel", model: "corsa", year: 2023, colour: "azul", price: 19000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/corsa.jpg" },
  {id: 4, brand: "toyota", model: "cross", year: 2023, colour: "azul", price: 29000, kilometers: 10000, rating: 5, imgUrl: "assets/carsImages/cross.webp" },
  {id: 5, brand: "kia", model: "niro", year: 2023, colour: "azul", price: 30000, kilometers: 8000, rating: 4, imgUrl: "assets/carsImages/niro.jpg" }
]

}
