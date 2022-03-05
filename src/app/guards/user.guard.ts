import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Perfil } from '../model/perfil';
import { User } from '../model/user';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {


  
  public user: User;
  public active: boolean = false;

  public perfil: Perfil;

  public uid:string = '';

  public userSubscripcion = new Subscription();

  constructor(private userSvc: UserService,
    private router: Router){

   

  this.comprobarVendedor();

  }
  


comprobarVendedor(){

  if(localStorage.getItem('id') != null){
  
  this.userSubscripcion =   this.userSvc.get$().subscribe((res:User) => {

   this.perfil = new Perfil();

   this.perfil.set(res['perfil']);



   

    switch(this.perfil.rol){

      case 'admin': this.router.navigate(['/admin']); break;

      case 'user' :  this.active = true; break;

      default: this.router.navigate(['/login']); break;


      
    }


    });

    this.uid = localStorage.getItem('id');

  this.userSvc.get(Number(this.uid)).subscribe(res => {
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
