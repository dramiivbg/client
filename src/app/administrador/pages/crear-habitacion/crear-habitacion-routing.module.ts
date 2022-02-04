import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearHabitacionPage } from './crear-habitacion.page';

const routes: Routes = [
  {
    path: '',
    component: CrearHabitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearHabitacionPageRoutingModule {}
