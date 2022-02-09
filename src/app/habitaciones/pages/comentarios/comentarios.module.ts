import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosPageRoutingModule } from './comentarios-routing.module';

import { ComentariosPage } from './comentarios.page';
import { ListComentariosComponent } from '../../components/list-comentarios/list-comentarios.component';
import { NavbarComponent } from 'src/app/home/components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosPageRoutingModule
  ],
  declarations: [ComentariosPage, ListComentariosComponent, NavbarComponent]
})
export class ComentariosPageModule {}
