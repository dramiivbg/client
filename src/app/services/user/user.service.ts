import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.url;
  public usuarios$ = new Subject<User[]>();
  public usuario$ = new Subject<User>();
  public usuarios: User[] = [];
  public usuario: User;

  public users: User[] = [];
   constructor(
     public http : HttpClient
   ) { }
 
   all$(): Observable<User[]>{
 
     return this.usuarios$.asObservable();
 
   }
 
   get$(): Observable<User>{
 
     return this.usuario$.asObservable();
 
   }

  
 
   all(): Observable<any>{
 
     this.usuarios = [];
    return this.http.get<User[]>(this.url + '/usuario')
     .pipe(
       map((res: any[]) => {
 
 
         res['data'].forEach((item: any) => {
 
           this.usuario = new User();
           this.usuario.set(item);
           this.usuarios.push(this.usuario);
 
         });
 
         this.usuarios$.next(this.usuarios);
 
       }));
  }
 

  
 
  get(id: any): Observable<any>{
 
   this.usuario = new User();

   return this.http.get<User>(this.url + '/usuario/'+ id)
    .pipe(
      map((res: any) => {
 
 
      
      
 
          this.usuario = new User();
          this.usuario.set(res['data']);
        
         

       
    this.usuario$.next(this.usuario);

 
    } )
    
    
    );

    
 
 }




 
 
 create(user: User){
 
   
 
   
   return this.http.post<User>(this.url + '/usuario',user)
    .pipe(
      map((res: any) => {

        
 
        
          this.usuario = new User();

           

        
          this.usuario.set(res['data']);


          this.usuario$.next(this.usuario);

        
      
      }));

   
 }

 update(user: User){
 
   
 
   
  return this.http.put<User>(this.url + '/usuario/'+ user.id , user)
   .pipe(
     map((res: any) => {

       

       
         this.usuario = new User();

          

       
         this.usuario.set(res['data']);


         this.usuario$.next(this.usuario);

       
     
     }));

  
}





 delete(id: any){

  return this.http.delete<User>(this.url + '/usuario/'+id)
     .pipe(
       map((res: any) => {

         this.all();

       })
     )
}
 
}
