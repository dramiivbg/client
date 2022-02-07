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
    path: 'calificacion',
    loadChildren: () => import('./habitaciones/calificar/calificar-routing.module').then( m => m.CalificarPageRoutingModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./administrador/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crear-hotel',
    loadChildren: () => import('./administrador/pages/crear-hotel/crear-hotel.module').then( m => m.CrearHotelPageModule)
  },
  {
    path: 'crear-habitacion',
    loadChildren: () => import('./administrador/pages/crear-habitacion/crear-habitacion.module').then( m => m.CrearHabitacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crear-user',
    loadChildren: () => import('./usuario/pages/crear-user/crear-user.module').then( m => m.CrearUserPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
