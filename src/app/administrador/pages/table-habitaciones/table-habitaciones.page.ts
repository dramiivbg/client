import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';
import { Hotel } from 'src/app/model/hotel';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-table-habitaciones',
  templateUrl: './table-habitaciones.page.html',
  styleUrls: ['./table-habitaciones.page.scss'],
})
export class TableHabitacionesPage implements OnInit {

  public id: string;
  public habitacionSubscripcion = new  Subscription();
  public hotelSubscripcion = new  Subscription();

  public habitaciones: Habitacion[] = [];

  constructor(public habitacionService:   HabitacionService, public hotelService: HotelService) { }

  ngOnInit() {


this.id = localStorage.getItem('id');


this.hotelSubscripcion = this.hotelService.get$().subscribe((res: Hotel) => {

  this.habitacionService.get(res.id).subscribe();

});

this.habitacionService.get$().subscribe((res: Habitacion) => {

  this.habitaciones.push(res);


});


this.hotelService.getAdmin(Number(this.id)).subscribe();


console.log(this.habitaciones);


  }

}
