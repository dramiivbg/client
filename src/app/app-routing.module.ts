import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  canActivate: [UserGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./administrador/pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'crear-hotel',
    loadChildren: () => import('./administrador/pages/crear-hotel/crear-hotel.module').then( m => m.CrearHotelPageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'crear-habitacion',
    loadChildren: () => import('./administrador/pages/crear-habitacion/crear-habitacion.module').then( m => m.CrearHabitacionPageModule),
    canActivate:[AdminGuard]
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

    path: 'habitaciones/:id',
    loadChildren: () => import('./habitaciones/pages/habitacion/habitacion.module').then(m => m.HabitacionPageModule)
  },
  {
    path: 'calificacion/:id',
    loadChildren: () => import('./habitaciones/pages/calificacion/calificacion.module').then( m => m.CalificacionPageModule)
  },
  {
    path: 'comentarios/:id',
    loadChildren: () => import('./habitaciones/pages/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./usuario/pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'historial-comentario',
    loadChildren: () => import('./usuario/pages/historial-comentario/historial-comentario.module').then( m => m.HistorialComentarioPageModule),
    canActivate:[UserGuard]
  },
  {
    path: 'verify',
    loadChildren: () => import('./usuario/pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./usuario/pages/send/send.module').then( m => m.SendPageModule)
  },

  {
    path: 'tables',
    loadChildren: () => import('./administrador/pages/tables/tables.module').then( m => m.TablesPageModule)
  },
  {
    path: 'table-hotel',
    loadChildren: () => import('./administrador/pages/table-hotel/table-hotel.module').then( m => m.TableHotelPageModule)
  },
  {
    path: 'table-habitaciones',
    loadChildren: () => import('./administrador/pages/table-habitaciones/table-habitaciones.module').then( m => m.TableHabitacionesPageModule)
  },
  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
