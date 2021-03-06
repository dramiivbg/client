import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearHotelPageRoutingModule } from './crear-hotel-routing.module';

import { CrearHotelPage } from './crear-hotel.page';
import { FormHotelComponent } from '../../components/form-hotel/form-hotel.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearHotelPageRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CrearHotelPage, FormHotelComponent]
})
export class CrearHotelPageModule {}
