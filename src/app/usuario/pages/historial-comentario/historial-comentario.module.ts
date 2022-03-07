import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialComentarioPageRoutingModule } from './historial-comentario-routing.module';

import { HistorialComentarioPage } from './historial-comentario.page';
import { ListHistorialComponent } from '../../components/list-historial/list-historial.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialComentarioPageRoutingModule,
    SharedModule
  ],
  declarations: [HistorialComentarioPage, ListHistorialComponent]
})
export class HistorialComentarioPageModule {}
