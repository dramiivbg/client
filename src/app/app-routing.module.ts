import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'habitaciones',
    loadChildren: () => import('./habitaciones/habitaciones.module').then( m => m.HabitacionesPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./home/login/login-routing.module').then( m => m.LoginPageRoutingModule)
  },
  
  {
    path: 'calificacion',
    loadChildren: () => import('./habitaciones/calificar/calificar-routing.module').then( m => m.CalificarPageRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
