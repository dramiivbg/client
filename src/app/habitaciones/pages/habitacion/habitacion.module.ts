import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { HabitacionPageRoutingModule } from './habitacion-routing.module';

import { HabitacionPage } from './habitacion.page';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';
import { ListHabitacionComponent } from '../../components/list-habitacion/list-habitacion.component';
import { MenuComponent } from 'src/app/administrador/components/menu/menu/menu.component';
import { HotelComponent } from 'src/app/home/components/hotel/hotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionPageRoutingModule
  ],
  declarations: [HabitacionPage, NavbarComponent, ListHabitacionComponent, MenuComponent, HotelComponent]
})
export class HabitacionPageModule {}
