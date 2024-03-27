import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../dto/client';
import Swal from "sweetalert2";

@Component({
  selector: 'app-pagClientList',
  templateUrl: './pagClientList.component.html',
  styleUrls: ['./pagClientList.component.css']
})
export class PagClientListComponent implements OnInit {

  clientList:Array<any> = [];
  pagesList:Array<any> = [];
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
    this.queryAllClients();
  }

  constructor(private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    this.queryAllClients();
  }

  queryAllClients() {
    // Para usar con data del API
    this.clientService.getAllClients(this.filter, this.rows, this.page).subscribe( data => {
      console.log(data);

      let listClient:Array<Client> = [];
      data.data.forEach(element => {
        listClient.push({
          id: element.id,
          name: element.nombre,
          password: '',
          lastname: element.apellido,
          email: element.email,
          phonenumber: element.telefono
        })
      });

      this.clientList = listClient;

      this.rows = data.rows;
      this.pages = data.pages;
      this.page = data.page;
      this.records = data.records;
      this.pagination(data.pages);
    })
  }

  editCarSelected(event, item) {
    this.router.navigate(['/client/'+item]);
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

        this.clientService.deleteClient(item).subscribe(info => {
          if (parseInt(info.codigo) === 1)
          {
            Swal.fire("Eliminado!", "", "success");
            this.queryAllClients();
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

  changePage(page: number) {
    this.page = page;
    this.queryAllClients();
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
      this.queryAllClients();
    }
  }

  previousPage() {
    if (this.page > 1)
    {
      this.page--;
      this.queryAllClients();
    }
  }
}
