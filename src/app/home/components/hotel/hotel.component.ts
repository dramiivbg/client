import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { empty, Subscription } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  valoracion:number[] = [1,2,3,4,5];

 
  
  

 @Input() hotel: Hotel;
 @Input() loading: boolean;
  public hotelSubscripcion = new Subscription();
  
  constructor(
    public hotelService: HotelService
  ) { }

  ngOnInit() {
 
  }

}
