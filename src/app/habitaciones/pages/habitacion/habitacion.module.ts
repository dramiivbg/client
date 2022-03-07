import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { HabitacionPageRoutingModule } from './habitacion-routing.module';

import { HabitacionPage } from './habitacion.page';


import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionPageRoutingModule,
    SharedModule,
    ReactiveFormsModule, FormsModule,
    SharedModule
  ],
  declarations: [HabitacionPage]
})
export class HabitacionPageModule {}
