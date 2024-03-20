import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import * as sweetalert2 from "sweetalert2";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {Client} from "../../dto/client";
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-pagNewClient',
  templateUrl: './pagNewClient.component.html',
  styleUrls: ['./pagNewClient.component.css']
})
export class PagNewClientComponent implements OnInit {

  formClient: FormGroup;
  titlePag = "Registro del Cliente";
  stateContact = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clientService: ClientService) {

    this.formClient = this.formBuilder.group({
      "name": ['', Validators.required],
      "lastname": ['', Validators.required],
      "password": [],
      "email": [],
      "phone": []
    });

  }

  ngOnInit() {

  }

  recordClient() {

    let client:Client = {...this.formClient.value};

    if (this.formClient.valid)
    {
      this.clientService.insertClient(client).subscribe(info => {

        if (parseInt(info.codigo) === 1)
          {
            Swal.fire({
              title: "Mensaje",
              text: "Se grabo nuevo cliente con exito",
              icon: 'info'
            })

            // Paso a la pagina principal luego de agregar item nuevo
            this.router.navigate(['/cars']);
          }
          else
          {
            Swal.fire({
              title: "Mensaje",
              text: "No se realizo correctamente el registro del nuevo cliente!" + info.mensaje,
              icon: 'error'
            })
          }
      });
    }
    else
    {
      Swal.fire({
        title: "Mensaje",
        text: "Ingrese todos los campos requeridos para continuar!",
        icon: 'error'
      })
    }
  }

  changeStateContact() {
    this.stateContact = !this.stateContact;
  }
}
