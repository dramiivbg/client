import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-table-hotel',
  templateUrl: './table-hotel.page.html',
  styleUrls: ['./table-hotel.page.scss'],
})
export class TableHotelPage implements OnInit {

  public hoteles: Hotel[] = [];
  
  public id: string;
  public hotelSubscripcion = new  Subscription();

  constructor(public hotelService: HotelService) { }

  ngOnInit() {


    this.hotelSubscripcion = this.hotelService.get$().subscribe((res: Hotel) => {

      this.hoteles.push(res);


    });


    this.id = localStorage.getItem('id');


    this.hotelService.getAdmin(Number(this.id)).subscribe();

   
  }

}
