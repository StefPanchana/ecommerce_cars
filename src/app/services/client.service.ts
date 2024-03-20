import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Client } from '../dto/client';
import { ResponseForHttp } from '../utils/interfaces/ResponseForHttp';
import { Cliente } from '../dto/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

constructor(private http: HttpClient) {

}

insertClient(client: Client){
  let httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  let newClient: Cliente = {
    nombre: client.name,
    apellido: client.lastname,
    telefono: parseInt(client.phoneNumber),
    email: client.email
  };

  return this.http.post<ResponseForHttp>(this.baseUrl+"cliente/", newClient, httpOptions);
}

}
