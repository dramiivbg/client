import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url = environment.url;
 
  constructor(
    public http : HttpClient
  ) { }


  all(){

    this.http.get(this.url + '/hotel').subscribe(res =>{ 
     
     console.log(res);

    });
 }
}
