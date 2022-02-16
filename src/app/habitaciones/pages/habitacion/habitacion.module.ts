import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { HabitacionPageRoutingModule } from './habitacion-routing.module';

import { HabitacionPage } from './habitacion.page';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';
import { ListHabitacionComponent } from '../../../shared/list-habitacion/list-habitacion.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionPageRoutingModule,
    SharedModule
  ],
  declarations: [HabitacionPage, NavbarComponent, ListHabitacionComponent]
})
export class HabitacionPageModule {}
