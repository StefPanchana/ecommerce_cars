import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagCarList',
  templateUrl: './pagCarList.component.html',
  styleUrls: ['./pagCarList.component.css']
})
export class PagCarListComponent implements OnInit {

  showImage: boolean = true;
  private _filter: string = "";


  get filter(){
    return this._filter;
  }

  set filter(value: string){
    this._filter = value;
    this.queryCars();
  }

  imageWidth = 120;
  imageHeight = 80;
  imageMargin = 3;

  @Input() value: string = '';
  carList:Array<any> = [];

  constructor(private carservice: CarService) {

  }

  ngOnInit() {

    // Para usar con data del API
    this.carservice.getAllCars().subscribe( data => {
      console.log(data);
      this.carList = data;
    })

    // Para usar con data local del proyecto
    // this.queryCars();
  }

  showImageFunction(){
    this.showImage = !this.showImage;
  }

  queryCars(){
    this.carservice.getCars(this.filter).subscribe(data => {
      this.carList = data;
    });
  }

  receive(valueEmit: number){
    console.log("Valor del pulso: ", valueEmit);
  }

  deleteCarSelected() {
  }
  
  editCarSelected() {
  }
    
}
