import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagHomeComponent } from './pages/pagHome/pagHome.component';
import { PagCarListComponent } from './pages/pagCarList/pagCarList.component';
import { PagNotFoundComponent } from './pages/pagNotFound/pagNotFound.component';
import { PagCarComponent } from './pages/pagCar/pagCar.component';
import { PagCarRegisterComponent } from './pages/pagCarRegister/pagCarRegister.component';
import {PagNewClientComponent} from "./pages/pagNewClient/pagNewClient.component";
import { PagClientListComponent } from './pages/pagClientList/pagClientList.component';
import {PagClientComponent} from "./pages/pagClient/pagClient.component";

const routes: Routes = [
  {
    path: "home",
    component: PagHomeComponent
  },
  {
    path: "cars",
    component: PagCarListComponent
  },
  {
    path: "car",
    component: PagCarRegisterComponent
  },
  {
    path: "car/:id",
    component: PagCarRegisterComponent
  },
  {
    path: "cars/:id",
    component: PagCarComponent
  },
  {
    path: "clients",
    component: PagNewClientComponent
  },
  {
    path: "adminclients",
    component: PagClientListComponent
  },
  {
    path: "client/:id",
    component: PagClientComponent
  },
  {
    path: "",
    component: PagHomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {bindToComponentInputs: true}
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
