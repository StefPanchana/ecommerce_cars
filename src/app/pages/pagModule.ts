import { NgModule } from "@angular/core";
import { PagCarListComponent } from "./pagCarList/pagCarList.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilsModule } from "../utils/utilsModule";
import { PagCarComponent } from "./pagCar/pagCar.component";
import { RouterModule } from "@angular/router";
import { PagCarRegisterComponent } from "./pagCarRegister/pagCarRegister.component";

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
    PagCarRegisterComponent
],
  exports: [
    PagCarListComponent,
    PagCarComponent,
    PagCarRegisterComponent
]  
})
export class pagModule{

}