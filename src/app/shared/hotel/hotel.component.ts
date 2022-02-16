import { Component, Input, OnInit } from '@angular/core';

import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  valoracion:number[] = [1,2,3,4,5];

 
  
  

 @Input() hotel: Hotel;
 @Input() loading: boolean;
 
  
  constructor(
    
  ) { }

  ngOnInit() {
 
  }

}
