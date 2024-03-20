import {Component, Input, input, OnInit} from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder,
    private route: Router) {

    this.formCar = this.formBuilder.group({
      "code": ['', Validators.required],
      "brand": ['', Validators.required],
      "model": ['', Validators.required],
      "year": ['', Validators.required],
      "price": ['', Validators.required],
      "kilometers": ['', Validators.required],
      "rating": ['', Validators.required],
      "imgUrl": []
    });
   }

  ngOnInit() {
    if (this.id === undefined)
      this.title = 'Registro de Auto Nuevo';
    else
    {
      this.title = "Actualizar Registro de Auto";

      this.carService.findCar(this.id).subscribe(info => {

        console.log(info.mensaje + info.data);

        if (parseInt(info.codigo) === 1)
        {
          this.formCar.patchValue({
            code: info.data.codigo,
            brand: info.data.marca,
            model: info.data.modelo,
            year: info.data.anio,
            kilometers: info.data.kilometraje,
            price: info.data.precio,
            rating: info.data.calificacion,
            imgUrl: info.data.foto
          });
        }
        else if (parseInt(info.codigo) !== 1){
          Swal.fire({
            title: "Mensaje",
            text: "No existe el registro consultado",
            icon: 'error'
          })
        }

      });

      this.formCar.controls['code'].disable();
    }
  }

  saveCar()
  {
    let car:Car = {...this.formCar.value};

    if (this.formCar.valid)
    {
      if (this.id === undefined)
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

            // Paso a la pagina principal luego de agregar item nuevo
            this.route.navigate(['/cars']);
          }
          else if (parseInt(info.codigo) !== 1){
            Swal.fire({
              title: "Mensaje",
              text: "No se ha realizado correctamente el ingreso",
              icon: 'error'
            })
          }
        });
      }
      else
      {
        // Guardar remotamente data
        this.carService.updateCar(this.id, car).subscribe(info => {

          console.log(info.mensaje + info.data);

          if (parseInt(info.codigo) === 1)
          {
            Swal.fire({
              title: "Mensaje",
              text: "Se actualizo el registro con exito",
              icon: 'info'
            })
          }
          else if (parseInt(info.codigo) !== 1){
            Swal.fire({
              title: "Mensaje",
              text: "No se ha realizado correctamente la actualizacion del registro",
              icon: 'error'
            })
          }
        });
      }

      // Guardar locamente data
      // this.carService.addCar(car);
    }
    else
    {
      Swal.fire({
        title: "Mensaje",
        text: "Ingrese todos los campos requeridos para continuar!",
        icon: 'error'
      })
    }
  }
}

// export function ValidateIdCar(): ValidatorFn
// {
//   return (control: AbstractControl) : ValidationErrors | null => {
//     const code = /^\d{4}$/;
//
//     if (code.test(control.value))
//     {
//       return null;
//     }
//
//     return {'codeValidate': true};
//   }
// }
