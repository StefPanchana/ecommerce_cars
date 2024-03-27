import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import Swal from "sweetalert2";
import {Client} from "../../dto/client";

@Component({
  selector: 'app-pagClient',
  templateUrl: './pagClient.component.html',
  styleUrls: ['./pagClient.component.css']
})
export class PagClientComponent implements OnInit {

  @Input() id?: string;
  title = 'Actualizar Cliente';
  formClient: FormGroup;

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              private route: Router) {

    this.formClient = this.formBuilder.group({
      "name": ['', Validators.required],
      "lastname": ['', Validators.required],
      "phonenumber": [],
      "email": [],
      "password": []
    });
  }

  ngOnInit() {
    this.clientService.findClient(<string>this.id).subscribe(info => {

      console.log(info.mensaje + info.data);

      if (parseInt(info.codigo) === 1)
      {
        this.formClient.patchValue({
          name: info.data.nombre,
          lastname: info.data.apellido,
          phonenumber: info.data.telefono,
          email: info.data.email,
          password: info.data.password
        });
      }
      else if (parseInt(info.codigo) !== 1){
        Swal.fire({
          title: "Mensaje",
          text: "No existe el registro consultado",
          icon: 'error'
        })
      }

    });
  }

  saveClient() {
    let client:Client = {...this.formClient.value};

    if (this.formClient.valid)
    {
        // Guardar remotamente data
        this.clientService.updateClient(this.id, client).subscribe(info => {

          console.log(info.mensaje + info.data);

          if (parseInt(info.codigo) === 1)
          {
            Swal.fire({
              title: "Mensaje",
              text: "Se actualizo el registro con exito",
              icon: 'info'
            })
          }
          else if (parseInt(info.codigo) !== 1){
            Swal.fire({
              title: "Mensaje",
              text: "No se ha realizado correctamente la actualizacion del registro",
              icon: 'error'
            })
          }
        });
    }
    else {
      Swal.fire({
        title: "Mensaje",
        text: "Ingrese todos los campos requeridos para continuar!",
        icon: 'error'
      })
    }
  }

}
