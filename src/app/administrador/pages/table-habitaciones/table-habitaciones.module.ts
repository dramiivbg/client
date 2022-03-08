import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableHabitacionesPageRoutingModule } from './table-habitaciones-routing.module';

import { TableHabitacionesPage } from './table-habitaciones.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHabitacionesComponent } from '../../components/list-habitaciones/list-habitaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableHabitacionesPageRoutingModule,
  SharedModule
  ],
  declarations: [TableHabitacionesPage, ListHabitacionesComponent]
})
export class TableHabitacionesPageModule {}
