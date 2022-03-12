import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { User } from 'src/app/model/user';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.page.html',
  styleUrls: ['./crear-habitacion.page.scss'],
})
export class CrearHabitacionPage implements OnInit {

  public hoteles: Hotel[] = [];

  public id: string;
  public hotelSubcripcion = new Subscription();

  constructor(public hotelService: HotelService) { }

  ngOnInit() {

  this.hotelSubcripcion =   this.hotelService.get$().subscribe((res:Hotel) => {

      this.hoteles.push(res);

    });

    this.id = localStorage.getItem('id');

    this.hotelService.getAdmin(Number(this.id)).subscribe(res => {

      console.log('listo');

    });



  }

}
