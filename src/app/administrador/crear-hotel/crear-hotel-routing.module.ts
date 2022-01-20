import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearHotelPage } from './crear-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: CrearHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearHotelPageRoutingModule {}
