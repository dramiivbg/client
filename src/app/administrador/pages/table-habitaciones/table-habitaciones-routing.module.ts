import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableHabitacionesPage } from './table-habitaciones.page';

const routes: Routes = [
  {
    path: '',
    component: TableHabitacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableHabitacionesPageRoutingModule {}
