import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearUserPageRoutingModule } from './crear-user-routing.module';

import { CrearUserPage } from './crear-user.page';
import { FormUserComponent } from '../../components/form-user/form-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearUserPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CrearUserPage, FormUserComponent]
})
export class CrearUserPageModule {}
