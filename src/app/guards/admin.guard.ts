import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


/*
  public active: boolean = false;

  uid = '';


  constructor(private userSvc: UserService,
    private router: Router){

   

  this.comprobarVendedor();

  }
  


comprobarVendedor(){

  this.userSvc.(res => {

 
  

    if(res.uid == 'Dik2UyFl6wQ0EamZoHrDIKGQj1e2'){

      this.active = true;
     
      
    }else{

      this.active = false;

      Swal.fire('Acceso no permitido').then(() => {

        this.router.navigate(['/home']);
      });
    }

  });

  return this.active;
    
  
}

*/  


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
