import {Component, Input, input, OnInit} from '@angular/core';
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

  @Input() id?: string;

  formCar: FormGroup;
  title: string = '';

  constructor(private carService: CarService,
    private formBuilder: FormBuilder) {

    this.formCar = this.formBuilder.group({
      "code": ['', []],
      "brand": [],
      "model": [],
      "year": [],
      "price": [],
      "kilometers": [],
      "rating": [],
      "imgurl": []
    });
   }

  ngOnInit() {
    console.log(typeof(this.id));


    if (this.id === undefined)
      this.title = 'Registro de Auto Nuevo';
    else
    {
      this.title = "Actualizar Registro de Auto";

      console.log(this.id + JSON.stringify(this.id));

      this.carService.findCar(this.id).subscribe(info => {

        console.log(info.mensaje + info.data);

        if (parseInt(info.codigo) === 1)
        {
          this.formCar.patchValue({
            code: info.data.codigo,
          });

          // this.formCar.controls['code'].setValue(info.data.codigo);
          // brand: info.data.marca,
          // model: info.data.modelo,
          // year: info.data.anio,
          // colour: '',
          // kilometers: info.data.kilometraje,
          // price: info.data.precio,
          // rating: info.data.calificacion,
          // imgUrl: info.data.foto
        }
        else if (parseInt(info.codigo) !== 1){
          Swal.fire({
            title: "Mensaje",
            text: "No existe el registro consultado",
            icon: 'error'
          })
        }

      });
    }
  }

  saveCar()
  {
    let car:Car = {...this.formCar.value};

    if (this.formCar.valid)
    {
      // Guardar remotamente data
      this.carService.insertCar(car).subscribe(info => {

        console.log(info.mensaje + info.data);

        if (parseInt(info.codigo) === 1)
        {
          Swal.fire({
            title: "Mensaje",
            text: "Se grabo con exito",
            icon: 'info'
          })
        }
        else if (parseInt(info.codigo) !== 1){
          Swal.fire({
            title: "Mensaje",
            text: "No se ha realizado correctamente el ingreso",
            icon: 'error'
          })
        }
      });

      // Guardar locamente data
      // this.carService.addCar(car);
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
