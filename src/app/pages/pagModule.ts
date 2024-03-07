import { NgModule } from "@angular/core";
import { PagCarListComponent } from "./pagCarList/pagCarList.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "../utils/utilsModule";
import { PagCarComponent } from "./pagCar/pagCar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule
],
  declarations:[
    PagCarListComponent,
    PagCarComponent
],
  exports: [
    PagCarListComponent
]  
})
export class pagModule{

}