import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';


@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  public url = environment.url;
  public habitaciones$ = new Subject<Habitacion[]>();
  public habitacion$ = new Subject<Habitacion>();
  public habitaciones: Habitacion[] = [];
  public habitacion: Habitacion;
   constructor(
     public http : HttpClient
   ) { }
 
   all$(): Observable<Habitacion[]>{
 
     return this.habitaciones$.asObservable();
 
   }
 
   get$(): Observable<Habitacion>{
 
     return this.habitacion$.asObservable();
 
   }
 
   all(): Observable<any>{
 
     this.habitaciones = [];
    return this.http.get<Habitacion[]>(this.url + '/habitacion')
     .pipe(
       map((res: any[]) => {
 
        if(res.length >0){

         res.forEach((item: any) => {
 
           this.habitacion = new Habitacion();
           this.habitacion.set(item);
           this.habitaciones.push(this.habitacion);
 
         });

        }   
 
         this.habitaciones$.next(this.habitaciones);
 
       }));
  }
 
 
  get(id: any): Observable<any>{
 
   this.habitacion = new Habitacion();
   return this.http.get<Habitacion[]>(this.url + '/habitacion/'+ id)
    .pipe(
      map((res: any[]) => {
 
 
        if(res.length >0){
        res.forEach((item: any) => {
 
          this.habitacion = new Habitacion();
          this.habitacion.set(item);
        
 
        });
 
    }
        this.habitacion$.next(this.habitacion);
 
      }));
 }

 
 
 create(habitacion: Habitacion){
 
   
 
   
   return this.http.post<Habitacion>(this.url + '/habitacion',habitacion);
    
 }
}
