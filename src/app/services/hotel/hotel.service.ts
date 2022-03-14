import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { environment } from 'src/environments/environment';
import {map, catchError, finalize} from 'rxjs/operators';
import { User } from 'src/app/model/user';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url = environment.url;
 public hoteles$ = new Subject<Hotel[]>();
 public hotel$ = new Subject<Hotel>();
 public hoteles: Hotel[] = [];
 public hotel: Hotel;

 private filePath: any;

 public usuario: User;
  constructor(
    public http : HttpClient,  private storage: AngularFireStorage, public router: Router
  ) { }

  all$(): Observable<Hotel[]>{

    return this.hoteles$.asObservable();

  }

  get$(): Observable<Hotel>{

    return this.hotel$.asObservable();

  }

  all(): Observable<any>{

  
   return this.http.get<Hotel[]>(this.url + '/hotel')
    .pipe(
      map ((res: any[]) => {

       
      res['data'].forEach((item: any) => {

        this.hotel = new Hotel();
          this.hotel.set(item);
          this.hoteles.push(this.hotel);

        });
      
        this.hoteles$.next(this.hoteles);

      }));
 }


 get(id: any): Observable<any>{

  this.hotel = new Hotel();
  return this.http.get<Hotel[]>(this.url + '/hotel/'+ id)
   .pipe(
     map((res: any[]) => {


      
       res['data'].forEach((item: any) => {

         this.hotel = new Hotel();
         this.hotel.set(item);
       

       });

       this.hotel$.next(this.hotel);

     }));
}





 
getAdmin(id: any): Observable<any>{
 
  this.usuario = new User();

  return this.http.get<User>(this.url + '/usuario/'+ id)
   .pipe(
     map((res: any) => {

      res['data']['hoteles'].forEach((item: any) => {

        
          
 
        this.hotel = new Hotel();

        this.hotel.set(item);
      
      
        this.hotel$.next(this.hotel);
      })   

   
    }));

    
    }


    
  public preAddAndUpdate(hotel: Hotel, image:File){

    this.uploadImage(hotel,image);
    }


    public preAddAndUpdate1(hotel: Hotel,image:File){

      if(image == undefined){
     
        this.update(hotel)
      }else{
  
        this.uploadImage1(hotel,image);
      }
  
  
      }


    private  uploadImage(hotel:Hotel,image:File){
      this.filePath = `images/${image.name}`;
       const fileRef = this.storage.ref(this.filePath);
       const task = this.storage.upload(this.filePath, image);
       task.snapshotChanges()
       .pipe(
         finalize(() =>{
           fileRef.getDownloadURL().subscribe( urlImage => {
           hotel.img = urlImage;

          

            this.create(hotel);
    
           //call addPost()
    
    
           });
         })
       ).subscribe();
      }




      
    private  uploadImage1(hotel:Hotel,image:File){
      this.filePath = `images/${image.name}`;
       const fileRef = this.storage.ref(this.filePath);
       const task = this.storage.upload(this.filePath, image);
       task.snapshotChanges()
       .pipe(
         finalize(() =>{
           fileRef.getDownloadURL().subscribe( urlImage => {
           hotel.img = urlImage;

          

            this.update(hotel);
    
           //call addPost()
    
    
           });
         })
       ).subscribe();
      }



 private update(hotel: Hotel){
 
   
 
   
  return this.http.put<Hotel>(this.url + '/hotel/'+ hotel.id , hotel)
   .pipe(
     map((res: any) => {

       

       
         this.hotel = new Hotel();

          

       
         this.hotel.set(res['data']);


         this.hotel$.next(this.hotel);

       
     
     })).subscribe();
    
   
  
}










 create(hotel: Hotel){


  

  
  return this.http.post<Hotel>(this.url + '/hotel',hotel)
  .pipe(
    map((res: any) => {


      this.hotel = new Hotel();

      this.hotel.set(res['data']);

      this.hotel$.next(this.hotel);

      this.router.navigate(['/crear-habitacion']);

    })).subscribe(res => { this.router.navigate(['/crear-habitacion']);
  });
   
}


delete(id: any){

  
  return this.http.delete<Hotel>(this.url + '/hotel/'+ id)
     .pipe(
       map((res: any) => {

         this.all();

       })
     )
}

}
