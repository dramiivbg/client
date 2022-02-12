import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Calificacion } from 'src/app/model/calificacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  public url = environment.url;
  public calificaciones$ = new Subject<Calificacion[]>();
  public calificacion$ = new Subject<Calificacion>();
  public calificaciones: Calificacion[] = [];
  public calificacion: Calificacion;

  public califis: Calificacion[] = [];
   constructor(
     public http : HttpClient
   ) { }
 
   all$(): Observable<Calificacion[]>{
 
     return this.calificaciones$.asObservable();
 
   }
 
   get$(): Observable<Calificacion>{
 
     return this.calificacion$.asObservable();
 
   }
 
   all(): Observable<any>{
 
   
    return this.http.get<Calificacion[]>(this.url + '/calificacion')
     .pipe(
       map ((res: any[]) => {
 
        
       res['data'].forEach((item: any) => {
 
         this.calificacion = new Calificacion();
           this.calificacion.set(item);
           this.calificaciones.push(this.calificacion);
 
         });
       
         this.calificaciones$.next(this.calificaciones);
 
       }));
  }
 
  get(id: any): Observable<any>{
 
    this.calificacion = new Calificacion();
    return this.http.get<Calificacion>(this.url + '/habitacion/'+ id)
     .pipe(
       map((res: any) => {
 
 
         res['data']['calificaciones'].forEach((item: any) => {
 
         
           
  
           this.calificacion = new Calificacion();
 
           this.calificacion.set(item);
         
         
           this.calificacion$.next(this.calificacion);
         });
       }));
  }
 
 set(calificaciones: Calificacion[]){

  this.califis = calificaciones;
 }

 getCalifi(){

  return this.califis;
 }

 
 create(calificacion: Calificacion){
 

 
   
   return this.http.post<Calificacion>(this.url + '/calificacion',calificacion)
   .pipe(
     map ((res: any) => {

      res['data']

     }));
   
    
 }
 
}
