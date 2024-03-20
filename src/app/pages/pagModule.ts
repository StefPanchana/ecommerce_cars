import { NgModule } from "@angular/core";
import { PagCarListComponent } from "./pagCarList/pagCarList.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilsModule } from "../utils/utilsModule";
import { PagCarComponent } from "./pagCar/pagCar.component";
import { RouterModule } from "@angular/router";
import { PagCarRegisterComponent } from "./pagCarRegister/pagCarRegister.component";
import {PagNewClientComponent} from "./pagNewClient/pagNewClient.component";
import { PagClientListComponent } from "./pagClientList/pagClientList.component";
import {PagClientComponent} from "./pagClient/pagClient.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule,
    RouterModule,
    ReactiveFormsModule,
],
  declarations:[
    PagCarListComponent,
    PagCarComponent,
    PagCarRegisterComponent,
    PagNewClientComponent,
    PagClientListComponent,
    PagClientComponent
],
  exports: [
    PagCarListComponent,
    PagCarComponent,
    PagCarRegisterComponent,
    PagNewClientComponent,
    PagClientListComponent,
    PagClientComponent
]
})
export class pagModule{

}
