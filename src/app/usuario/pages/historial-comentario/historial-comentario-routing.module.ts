import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialComentarioPage } from './historial-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialComentarioPageRoutingModule {}
