import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Perfil } from '../model/perfil';
import { User } from '../model/user';
import { PerfilService } from '../services/perfil/perfil.service';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {


  
 
  public user: User;
  public active: boolean = false;

  public perfil: Perfil;

  public uid:string = '';

  public perfilSubscripcion = new Subscription();
  constructor(private perfilService: PerfilService,
    private router: Router){

   

 this.comprobarVendedor();

  }
  


comprobarVendedor(){

  


  if(localStorage.getItem('id')){
  
 
  this.perfilSubscripcion =   this.perfilService.get$().subscribe((res:Perfil) => {

   this.perfil = new Perfil();

   this.perfil.set(res);



   if(this.perfil.rol == 'user'){

    this.active = true;

   }else{
    this.router.navigate(['/admin']);
   }


    });

    this.uid = localStorage.getItem('id');

    this.perfilService.get(Number(this.uid)).subscribe(res => {
      console.log('listo');
    });

    this.uid = localStorage.getItem('id');

    this.perfilService.get(Number(this.uid)).subscribe(res => {
      console.log('listo');
    });

  }

  else{

    this.router.navigate(['/login']);
  }
  
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    

    return this.active;
  }
  
}
