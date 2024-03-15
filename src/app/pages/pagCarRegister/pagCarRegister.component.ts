import { Component, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      "id": ['', [Validators.required, ValidateIdCar()]],
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

    if (this.formCar.valid)
    {
      Swal.fire({
        title: "Mensaje",
        text: "Se grabo con exito",
        icon: 'info'
      })
    }
    
  }
}

export function ValidateIdCar(): ValidatorFn
{
  return (control: AbstractControl) : ValidationErrors | null => {
    const code = /^\d{4}$/;
    
    if (code.test(control.value))
    {
      return null;
    }
    
    return {'codeValidate': true};
  }
}
