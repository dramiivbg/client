import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListHabitacionComponent } from './list-habitacion/list-habitacion.component';



@NgModule({
  declarations: [HotelComponent, ListHabitacionComponent],
  imports: [
   IonicModule, CommonModule, FormsModule,
   RouterModule
  ],
  exports:[HotelComponent, ListHabitacionComponent]
})
export class SharedModule { }
