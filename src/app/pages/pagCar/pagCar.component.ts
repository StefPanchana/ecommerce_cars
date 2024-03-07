import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-pagCar',
  templateUrl: './pagCar.component.html',
  styleUrls: ['./pagCar.component.css']
})
export class PagCarComponent implements OnInit {

  @Input() id: number = 0;

  car: Car | undefined;

  constructor(private carservice: CarService) { 
    
  }

  ngOnInit() {
    this.car = this.carservice.getCarById(this.id);
  }

}
