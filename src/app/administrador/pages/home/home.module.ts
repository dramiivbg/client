import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';

import { HotelComponent } from 'src/app/home/components/hotel/hotel.component';
import { MenuComponent } from '../../components/menu/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,NavbarComponent, HotelComponent, MenuComponent]
})
export class HomePageModule {}
