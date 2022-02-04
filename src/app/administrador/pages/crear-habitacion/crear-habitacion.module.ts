import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearHabitacionPageRoutingModule } from './crear-habitacion-routing.module';

import { CrearHabitacionPage } from './crear-habitacion.page';
import { FormHabitacionComponent } from '../../components/form-habitacion/form-habitacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearHabitacionPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CrearHabitacionPage, FormHabitacionComponent]
})
export class CrearHabitacionPageModule {}
