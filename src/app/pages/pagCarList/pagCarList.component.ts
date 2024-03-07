import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-pagCarList',
  templateUrl: './pagCarList.component.html',
  styleUrls: ['./pagCarList.component.css']
})
export class PagCarListComponent implements OnInit {

  showImage: boolean = true;
  filter: string = "";

  imageWidth = 120;
  imageHeight = 80;
  imageMargin = 3;

  @Input() value: string = '';
  carList:Array<any> = [];
  
  constructor(private carservice: CarService) { 
    
  }

  ngOnInit() {
    this.carList = this.carservice.getCars();
  }

  showImageFunction(){
    this.showImage = !this.showImage;
  }

  receive(valueEmit: number){
    console.log("Valor del pulso: ", valueEmit);
  }
}
