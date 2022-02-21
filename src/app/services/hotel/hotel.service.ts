import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
import { User } from 'src/app/model/user';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url = environment.url;
 public hoteles$ = new Subject<Hotel[]>();
 public hotel$ = new Subject<Hotel>();
 public hoteles: Hotel[] = [];
 public hotel: Hotel;

 public usuario: User;
  constructor(
    public http : HttpClient
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


create(hotel: Hotel){

 

  
  return this.http.post<Hotel>(this.url + '/hotel',hotel)
  .pipe(
    map((res: any) => {

      this.hotel = new Hotel();

      this.hotel.set(res['data']);

      this.hotel$.next(this.hotel);

    }));
   
}



}
