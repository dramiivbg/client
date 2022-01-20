import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearHotelPageRoutingModule } from './crear-hotel-routing.module';

import { CrearHotelPage } from './crear-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearHotelPageRoutingModule
  ],
  declarations: [CrearHotelPage]
})
export class CrearHotelPageModule {}
