import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HotelComponent, MenuComponent],
  imports: [
   IonicModule, CommonModule, FormsModule,
   RouterModule
  ],
  exports:[HotelComponent, MenuComponent]
})
export class SharedModule { }
