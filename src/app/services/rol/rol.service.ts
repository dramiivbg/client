import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rol } from 'src/app/model/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public url = environment.url;
  public roles$ = new Subject<Rol[]>();
  public rol$ = new Subject<Rol>();
  public roles: Rol[] = [];
  public rol: Rol;
   constructor(
     public http : HttpClient
   ) { }
 
   all$(): Observable<Rol[]>{
 
     return this.roles$.asObservable();
 
   }
 
   get$(): Observable<Rol>{
 
     return this.rol$.asObservable();
 
   }
 
   all(): Observable<any>{
 
     this.roles = [];
    return this.http.get<Rol[]>(this.url + '/rol')
     .pipe(
       map((res: any[]) => {
        res.forEach((item: any) => {
           this.rol = new Rol();
           this.rol.set(item);
           this.roles.push(this.rol);
 
         });
 
         this.roles$.next(this.roles);
 
       }));
  }
 
 
  get(id: any): Observable<any>{
 
   this.rol = new Rol();
   return this.http.get<Rol[]>(this.url + '/rol/'+ id)
    .pipe(
      map((res: any[]) => {
 
 
       
        res.forEach((item: any) => {
 
          this.rol = new Rol();
          this.rol.set(item);
        
 
        });
 
        this.rol$.next(this.rol);
 
      }));
 }
 
 
 create(rol: Rol){
 

 
   
   return this.http.post<Rol>(this.url + '/rol',rol)
    .pipe(
      map((res: any) => {
 
          this.rol = new Rol();
          this.rol.set(res);
        
          this.rol$.next(this.rol);
 
      }));
 }
 
}
