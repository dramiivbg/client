import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearHotelPageRoutingModule } from './crear-hotel-routing.module';

import { CrearHotelPage } from './crear-hotel.page';
import { FormHotelComponent } from '../form-hotel/form-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearHotelPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CrearHotelPage, FormHotelComponent]
})
export class CrearHotelPageModule {}
