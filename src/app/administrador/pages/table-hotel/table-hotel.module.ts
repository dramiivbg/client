import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableHotelPageRoutingModule } from './table-hotel-routing.module';

import { TableHotelPage } from './table-hotel.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHotelComponent } from '../../components/list-hotel/list-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableHotelPageRoutingModule,
    SharedModule
  ],
  declarations: [TableHotelPage, ListHotelComponent]
})
export class TableHotelPageModule {}
