import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';
import {NavigationStart, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pagCar',
  templateUrl: './pagCar.component.html',
  styleUrls: ['./pagCar.component.css']
})
export class PagCarComponent implements OnInit {

  @Input() id?: string;

  car: any;

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    if (this.id)
    {
      // Busqueda de Auto por ID
      // this.car = this.carservice.getCarById(parseInt(this.id));

      // Busqueda de Auto por Codigo
      // this.car = this.carservice.findCar(this.id);

      this.carService.findCar(this.id).subscribe(info => {

        console.log(info.mensaje + info.data);
        let carFindout:Car;

        if (parseInt(info.codigo) === 1)
        {
          carFindout = {
            id: info.data.id,
            code: info.data.codigo,
            brand: info.data.marca,
            model: info.data.modelo,
            year: info.data.anio,
            colour: '',
            kilometers: info.data.kilometraje,
            price: info.data.precio,
            rating: info.data.calificacion,
            imgUrl: info.data.foto
          }
          this.car = carFindout;
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
}
