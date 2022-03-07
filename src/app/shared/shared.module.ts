import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListHabitacionComponent } from './list-habitacion/list-habitacion.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [HotelComponent, ListHabitacionComponent, NavbarComponent],
  imports: [
   IonicModule, CommonModule, FormsModule,
   RouterModule
  ],
  exports:[HotelComponent, ListHabitacionComponent, NavbarComponent]
})
export class SharedModule { }
