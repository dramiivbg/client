import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPageRoutingModule } from './verify-routing.module';

import { VerifyPage } from './verify.page';

import { FormVerifyComponent } from '../../components/form-verify/form-verify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPageRoutingModule, ReactiveFormsModule,
    FormsModule
  ],
  declarations: [VerifyPage, FormVerifyComponent]
})
export class VerifyPageModule {}
