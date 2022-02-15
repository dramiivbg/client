import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { User } from 'src/app/model/user';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  public hoteles: Hotel[] = [];
  public loading = true;
   public userSubscripcion = new Subscription();
   
  
   constructor(public hotelService: HotelService) {
     
   }
 
   ngOnInit() {
       
     
     this.userSubscripcion = this.hotelService.get$().subscribe((res: Hotel) => {
 
      
       if(!res){
         this.loading = true;
         }else{
 
           this.loading = false;
         }
       this.hoteles.push(res);
 
     });
 
    
 
     
     
    
       
     
     this.hotelService.getAdmin(20).subscribe(res => {
 
       console.log('listo');
 
     });
 
     
 
   }
 
}
