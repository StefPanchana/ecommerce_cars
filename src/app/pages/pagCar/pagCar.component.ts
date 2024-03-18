import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-pagCar',
  templateUrl: './pagCar.component.html',
  styleUrls: ['./pagCar.component.css']
})
export class PagCarComponent implements OnInit {

  @Input() id?: string;

  car: any;

  constructor(private carservice: CarService) {

  }

  ngOnInit() {
    if (this.id)
    {
      // Busqueda de Auto por ID
      // this.car = this.carservice.getCarById(parseInt(this.id));

      // Busqueda de Auto por Codigo
      this.car = this.carservice.getCarByCode(this.id);
    }
  }
}
