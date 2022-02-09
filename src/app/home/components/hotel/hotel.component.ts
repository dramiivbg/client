import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
 
  public hotel: Hotel;
  public hoteles: Hotel[] = [];
  public hotelSubscripcion = new Subscription();
  
  constructor(
    public hotelService: HotelService
  ) { }

  ngOnInit() {

    this.hotelSubscripcion = this.hotelService.all$().subscribe(res => {

      this.hoteles = res;
    });

    this.hotelService.all().subscribe(res => {

      console.log("listo");

    });
 
  }

}
