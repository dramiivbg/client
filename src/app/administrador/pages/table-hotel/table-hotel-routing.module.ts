import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableHotelPage } from './table-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: TableHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableHotelPageRoutingModule {}
