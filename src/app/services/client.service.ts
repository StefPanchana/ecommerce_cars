import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

constructor(private http: HttpClient) {


}
}
