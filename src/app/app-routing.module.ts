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
    path: 'admin',
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
  },

  {

    path: 'habitaciones',
    loadChildren: () => import('./habitaciones/pages/habitacion/habitacion.module').then(m => m.HabitacionPageModule)
  },
  {
    path: 'calificacion',
    loadChildren: () => import('./habitaciones/pages/calificacion/calificacion.module').then( m => m.CalificacionPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./habitaciones/pages/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
