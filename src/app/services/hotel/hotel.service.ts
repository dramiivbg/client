import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url = environment.url;
 public hoteles$ = new Subject<Hotel[]>();
 public hotel$ = new Subject<Hotel>();
 public hoteles: Hotel[] = [];
 public hotel: Hotel;
  constructor(
    public http : HttpClient
  ) { }

  all$(): Observable<Hotel[]>{

    return this.hoteles$.asObservable();

  }

  all(): Observable<any>{

   return this.http.get<Hotel[]>(this.url + '/hotel')
    .pipe(
      map((res: any[]) => {


        res.forEach((item: any) => {

          this.hotel = new Hotel();
          this.hotel.set(item);
          this.hoteles.push(this.hotel);

        });

        this.hoteles$.next(this.hoteles);

      }));
 }
}