import { Component, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagCarRegister',
  templateUrl: './pagCarRegister.component.html',
  styleUrls: ['./pagCarRegister.component.css']
})
export class PagCarRegisterComponent implements OnInit {

  formCar: FormGroup;

  constructor(private carService: CarService,
    private formBuilder: FormBuilder) {
  
    this.formCar = this.formBuilder.group({
      "id": [],
      "brand": [],
      "model": [],
      "year": [],
      "colour": [],
      "price": [],
      "kilometers": [],
      "rating": [],
    });
   }

  ngOnInit() {
  }

  saveCar()
  {
    let car:Car = {...this.formCar.value};
    this.carService.addCar(car);

    console.log("Grabado con exito");
    console.log('formulario', this.formCar.value);
  }

}
