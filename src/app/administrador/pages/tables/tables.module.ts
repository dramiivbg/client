import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablesPageRoutingModule } from './tables-routing.module';

import { TablesPage } from './tables.page';
import { ListTableComponent } from '../../components/list-table/list-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalOptionsComponent } from '../../components/modal-options/modal-options.component';
import { ModalUpdateComponent } from '../../components/modal-update/modal-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablesPageRoutingModule,
    SharedModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [TablesPage, ListTableComponent, ModalOptionsComponent, ModalUpdateComponent],
  
})
export class TablesPageModule {}
