import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';

import { HotelComponent } from 'src/app/shared/hotel/hotel.component';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage,NavbarComponent]
})
export class HomePageModule {}
