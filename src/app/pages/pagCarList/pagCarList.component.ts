import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {Car} from "../../dto/car";

@Component({
  selector: 'app-pagCarList',
  templateUrl: './pagCarList.component.html',
  styleUrls: ['./pagCarList.component.css']
})
export class PagCarListComponent implements OnInit {

  showImage: boolean = false;
  private _filter: string = "";
  public rows: number = 0;
  public pages: number = 0;
  public page: number = 0;
  public records: number = 0;

  get filter(){
    return this._filter;
  }

  set filter(value: string){
    this._filter = value;
    this.queryAllCars();
  }

  imageWidth = 120;
  imageHeight = 80;
  imageMargin = 3;

  @Input() value: string = '';
  carList:Array<any> = [];
  pagesList:Array<any> = [];

  constructor(private carservice: CarService,
              private router: Router) {

  }

  ngOnInit() {

    this.queryAllCars();

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

  queryAllCars(){
    // Para usar con data del API
    this.carservice.getAllCars(this.filter, this.rows, this.page).subscribe( data => {
      console.log(data);

      let listCar:Array<Car> = [];
      data.data.forEach(element => {
        listCar.push({
          id: element.id,
          code: element.codigo,
          brand: element.marca,
          model: element.modelo,
          year: element.anio,
          colour: '',
          kilometers: element.kilometraje,
          price: element.precio,
          rating: element.calificacion,
          imgUrl: element.foto
        })
      });

      this.carList = listCar;

      this.rows = data.rows;
      this.pages = data.pages;
      this.page = data.page;
      this.records = data.records;
      this.pagination(data.pages);
    })
  }

  receive(valueEmit: number){
    console.log("Valor del pulso: ", valueEmit);
  }

  deleteCarSelected(event, item) {
    Swal.fire({
      title: "Esta seguro de eliminar el registro?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.carservice.deleteCar(item).subscribe(info => {
          if (parseInt(info.codigo) === 1)
          {
            Swal.fire("Eliminado!", "", "success");
            this.queryAllCars();
          }
          else
          {
            Swal.fire("No se pudo completar la acción! - " + info.mensaje, "", "error");
          }
        });

      } else if (result.isDenied) {

        Swal.fire("No se ha eliminado el registro", "", "info");

      }
    });
  }

  editCarSelected(event, item) {
    // Activar ruta del listado de autos
    this.router.navigate(['/car/', { id: item }]);
  }

  changePage(page: number) {
    this.page = page;
    this.queryAllCars();
  }

  pagination(pages: number){
    this.pagesList = [];
    for (let i = 1; i <= pages; i++) {
      this.pagesList.push(i);
    }
  }

  nextPage() {
    if (this.page < this.pages)
    {
      this.page++;
      this.queryAllCars();
    }
  }

  previousPage() {
    if (this.page > 1)
    {
      this.page--;
      this.queryAllCars();
    }
  }
}
