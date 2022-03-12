import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map, catchError, finalize} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  public url = environment.url;
  public habitaciones$ = new Subject<Habitacion[]>();
  public habitacion$ = new Subject<Habitacion>();
  public habitaciones: Habitacion[] = [];
  public habitacion: Habitacion;

  private filePath: any;
   constructor(
     public http : HttpClient,  private storage: AngularFireStorage, public router: Router
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

         res['data'].forEach((item: any) => {
 
           this.habitacion = new Habitacion();
           this.habitacion.set(item);
           this.habitaciones.push(this.habitacion);
 
         });

        }   
 
         this.habitaciones$.next(this.habitaciones);
 
       }));
  }
 
  
  getH(id:any):Observable<any>{

    this.habitacion = new Habitacion();
   return this.http.get<Habitacion>(this.url + '/habitacion/'+ id)
    .pipe(
      map((res: any) => {

 
          this.habitacion = new Habitacion();


       
          this.habitacion.set(res['data']);
        
         
          

          this.habitacion$.next(this.habitacion);
          

  
        
      }));

  }
 
  get(id: any): Observable<any>{
 
   this.habitacion = new Habitacion();
   return this.http.get<Habitacion>(this.url + '/hotel/'+ id)
    .pipe(
      map((res: any) => {


        res['data']['habitaciones'].forEach((item: any) => {

        
          
 
          this.habitacion = new Habitacion();

          this.habitacion.set(item);
        
          

          this.habitacion$.next(this.habitacion);
          

  
        });
      }));
 }

 
 public preAddAndUpdate(habitacion: Habitacion, image:File){

  this.uploadImage(habitacion,image);
  }

  public preAddAndUpdate1(habitacion: Habitacion, image:File){

    if(image == undefined){
   
      this.update(habitacion)
    }else{

      this.uploadImage1(habitacion,image);
    }


    }


  private  uploadImage(habitacion:Habitacion,image:File){
    this.filePath = `images/${image.name}`;
     const fileRef = this.storage.ref(this.filePath);
     const task = this.storage.upload(this.filePath, image);
     task.snapshotChanges()
     .pipe(
       finalize(() =>{
         fileRef.getDownloadURL().subscribe( urlImage => {
         habitacion.img = urlImage;

        

          this.create(habitacion);
  
         //call addPost()
  
  
         });
       })
     ).subscribe();
    }



    private  uploadImage1(habitacion:Habitacion,image:File){
      this.filePath = `images/${image.name}`;
       const fileRef = this.storage.ref(this.filePath);
       const task = this.storage.upload(this.filePath, image);
       task.snapshotChanges()
       .pipe(
         finalize(() =>{
           fileRef.getDownloadURL().subscribe( urlImage => {
           habitacion.img = urlImage;
  
          
  
            this.update(habitacion);
    
           //call addPost()
    
    
           });
         })
       ).subscribe();
      }
  
  


 
 
 create(habitacion: Habitacion){
 
   
 
   
   return this.http.post<Habitacion>(this.url + '/habitacion',habitacion)
   .pipe(
     map((res: any) => {

      this.habitacion = new Habitacion();

      this.habitacion.set(res['data']);
      this.habitacion$.next(this.habitacion);

     })).subscribe(res => {
      Swal.fire({
        title: 'quieres crear otro?',
        text: "creado correctamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (!result.isConfirmed) {
        
          this.router.navigate(['/admin']);
        }
      })
      });
    
 }

 private update(habitacion: Habitacion){
 
   
 
   
  return this.http.put<Habitacion>(this.url + '/habitacion/'+ habitacion.id , habitacion)
   .pipe(
     map((res: any) => {

       

       
         this.habitacion = new Habitacion();

          

       
         this.habitacion.set(res['data']);


         this.habitacion$.next(this.habitacion);

       
     
     })).subscribe();
    
   
  
}






 delete(id: any){

  
  return this.http.delete<Habitacion>(this.url + '/habitacion/'+ id)
     .pipe(
       map((res: any) => {

         this.all();

       })
     )
}
}
