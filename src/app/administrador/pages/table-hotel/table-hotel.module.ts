import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableHotelPageRoutingModule } from './table-hotel-routing.module';

import { TableHotelPage } from './table-hotel.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHotelComponent } from '../../components/list-hotel/list-hotel.component';
import { ModalOptionHotelComponent } from '../../components/modal-option-hotel/modal-option-hotel.component';
import { ModalUpdateHotelComponent } from '../../components/modal-update-hotel/modal-update-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableHotelPageRoutingModule,
    SharedModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [TableHotelPage, ListHotelComponent, ModalOptionHotelComponent, ModalUpdateHotelComponent]
})
export class TableHotelPageModule {}
