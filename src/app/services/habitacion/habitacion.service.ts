import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  public url = environment.url;
  public http : HttpClient;
  constructor() { }

  all(){

     this.http.get(this.url + '/habitacion').subscribe(res => 
      
      console.log(res)

      );
  }
}
