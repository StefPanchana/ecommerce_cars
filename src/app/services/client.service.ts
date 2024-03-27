import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Client } from '../dto/client';
import { ResponseForHttp } from '../utils/interfaces/ResponseForHttp';
import { Cliente } from '../dto/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

constructor(private http: HttpClient) {

}

getAllClients(filter?: string, rows?: number, page?:number):Observable<ResponseForHttp> {

  let body = new HttpParams();
  body = filter ? body.set('filtro', filter): body;
  body = rows ? body.set('rows', rows): body;
  body = page ? body.set('page', page): body;

  return this.http.get<ResponseForHttp>(this.baseUrl+"clientes/", {params: body});
}

insertClient(client: Client){
  let httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  let newClient: Cliente = {
    nombre: client.name,
    apellido: client.lastname,
    telefono: client.phonenumber,
    email: client.email,
    password: client.password
  };

  return this.http.post<ResponseForHttp>(this.baseUrl+"cliente/", newClient, httpOptions);
}

findClient(id: string){
  return this.http.get<ResponseForHttp>(this.baseUrl+"cliente/"+id);
}

updateClient(id: string|undefined, client: Client){
    let data : Cliente = {
      id: parseInt(client.id),
      nombre: client.name,
      apellido: client.lastname,
      telefono: client.phonenumber,
      email: client.email,
      password: client.password
    }
    return this.http.put<ResponseForHttp>(this.baseUrl+"cliente/"+id, data);
  }

  deleteClient(id: string){
    return this.http.delete<ResponseForHttp>(this.baseUrl+"cliente/"+id);
  }
}
