import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { HabitacionPageRoutingModule } from './habitacion-routing.module';

import { HabitacionPage } from './habitacion.page';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionPageRoutingModule,
    SharedModule,
    ReactiveFormsModule, FormsModule
  ],
  declarations: [HabitacionPage, NavbarComponent]
})
export class HabitacionPageModule {}
