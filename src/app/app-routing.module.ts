import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagHomeComponent } from './pages/pagHome/pagHome.component';
import { PagCarListComponent } from './pages/pagCarList/pagCarList.component';
import { PagNotFoundComponent } from './pages/pagNotFound/pagNotFound.component';
import { PagCarComponent } from './pages/pagCar/pagCar.component';

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
    path: "cars/:id",
    component: PagCarComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
