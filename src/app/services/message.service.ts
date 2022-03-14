import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from '../model/habitacion';
import { Hotel } from '../model/hotel';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public user: User;

  public hotel: Hotel;

  public habitacion: Habitacion;

  constructor(private http: HttpClient) { }


  sendMessage(body: any){

    return this.http.post('http://localhost:2000/sendEmail',body);
  }


  setUser(user: User){

    this.user = new User();

    this.user.set(user);
  }

  getUser(){

    return this.user;
    
  }

  setHabitacion(habitacion: Habitacion){

    this.habitacion = habitacion;
  }

  getHabitacion(){

    return this.habitacion;

  }

  setHotel(hotel: Hotel){

    this.hotel = hotel;
  }

  getHotel(){

    return this.hotel;
    
  }
}
