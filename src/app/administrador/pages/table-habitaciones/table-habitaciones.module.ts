import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableHabitacionesPageRoutingModule } from './table-habitaciones-routing.module';

import { TableHabitacionesPage } from './table-habitaciones.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHabitacionesComponent } from '../../components/list-habitaciones/list-habitaciones.component';
import { ModalOptionHabitacionComponent } from '../../components/modal-option-habitacion/modal-option-habitacion.component';
import { ModalUpdateHabitacionComponent } from '../../components/modal-update-habitacion/modal-update-habitacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableHabitacionesPageRoutingModule,
  SharedModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [TableHabitacionesPage, ListHabitacionesComponent, ModalOptionHabitacionComponent, ModalUpdateHabitacionComponent]
})
export class TableHabitacionesPageModule {}
