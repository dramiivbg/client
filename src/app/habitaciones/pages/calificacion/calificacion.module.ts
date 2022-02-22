import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionPageRoutingModule } from './calificacion-routing.module';

import { CalificacionPage } from './calificacion.page';
import { CalificarComponent } from '../../components/calificar/calificar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CalificacionPage,CalificarComponent ]
})
export class CalificacionPageModule {}
