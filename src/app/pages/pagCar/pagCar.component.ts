import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../dto/car';
import { CarService } from '../../services/car.service';

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
      this.car = this.carservice.getCarById(parseInt(this.id));
    }
    
  }

}
