import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {ValidateIdCar} from "../pagCarRegister/pagCarRegister.component";
import * as sweetalert2 from "sweetalert2";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {Client} from "../../dto/client";

@Component({
  selector: 'app-pagNewClient',
  templateUrl: './pagNewClient.component.html',
  styleUrls: ['./pagNewClient.component.css']
})
export class PagNewClientComponent implements OnInit {

  formClient: FormGroup;
  titlePag = "Registro del Cliente";
  stateContact = false;

  Client;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {

    this.formClient = this.formBuilder.group({
      "id": [],
      "name": [],
      "password": [],
      "email": [],
      "phone": []
    });

  }

  ngOnInit() {

  }

  recordClient() {
    // Swal.fire({
    //   title: "Mensaje",
    //   text: "Se grabo con exito",
    //   icon: 'info'
    // })

    alert("Cliente grabado con éxito");

    // Activar ruta del listado de autos
    this.router.navigate(['/cars']);
  }

  changeStateContact() {
    this.stateContact = !this.stateContact;
  }
}
