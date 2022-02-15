import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from '../model/hotel';
import { HotelService } from '../services/hotel/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  
 public hoteles: Hotel[];
 public loading = true;
  public hotelSubscripcion = new Subscription();
  
 
  constructor(public hotelService: HotelService) {
    
  }

  ngOnInit() {
      
    
    this.hotelSubscripcion = this.hotelService.all$().subscribe((res: Hotel[]) => {

     
      if(res.length == 0 ){
        this.loading = true;
        }else{

          this.loading = false;
        }
      this.hoteles = res;

    });

   

    
    
   
      
    
    this.hotelService.all().subscribe(res => {

      console.log('listo');

    });

    

  }

 
}
