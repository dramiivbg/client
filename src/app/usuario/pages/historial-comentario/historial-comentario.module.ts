import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialComentarioPageRoutingModule } from './historial-comentario-routing.module';

import { HistorialComentarioPage } from './historial-comentario.page';
import { ListHistorialComponent } from '../../components/list-historial/list-historial.component';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialComentarioPageRoutingModule
  ],
  declarations: [HistorialComentarioPage, ListHistorialComponent, NavbarComponent]
})
export class HistorialComentarioPageModule {}
