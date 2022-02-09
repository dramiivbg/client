import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perfil } from 'src/app/model/perfil';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public url = environment.url;
  public perfiles$ = new Subject<Perfil[]>();
  public perfil$ = new Subject<Perfil>();
  public perfiles: Perfil[] = [];
  public perfil: Perfil;
   constructor(
     public http : HttpClient
   ) { }
 
   all$(): Observable<Perfil[]>{
 
     return this.perfiles$.asObservable();
 
   }
 
   get$(): Observable<Perfil>{
 
     return this.perfil$.asObservable();
 
   }
 
   all(): Observable<any>{
 
     this.perfiles = [];
    return this.http.get<Perfil[]>(this.url + '/perfil')
     .pipe(
       map((res: any[]) => {
 
        if(res.length >0){

         res.forEach((item: any) => {
 
           this.perfil = new Perfil();
           this.perfil.set(item);
           this.perfiles.push(this.perfil);
 
         });

        }   
 
         this.perfiles$.next(this.perfiles);
 
       }));
  }
 
 
  get(id: any): Observable<any>{
 
   this.perfil = new Perfil();
   return this.http.get<Perfil[]>(this.url + '/perfil/'+ id)
    .pipe(
      map((res: any[]) => {
 
 
        if(res.length >0){
        res.forEach((item: any) => {
 
          this.perfil = new Perfil();
          this.perfil.set(item);
        
 
        });
 
    }
        this.perfil$.next(this.perfil);
 
      }));
 }

 
 
 create(perfil: Perfil){
 
   
 
   
   return this.http.post<Perfil>(this.url + '/perfil',perfil)
    .pipe(
      map((res: any) => {
 
          this.perfil = new Perfil();
          this.perfil.set(res);
        
          this.perfil$.next(this.perfil);
 
      }));
 }
}
