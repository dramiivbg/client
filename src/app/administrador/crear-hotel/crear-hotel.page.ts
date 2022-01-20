import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.page.html',
  styleUrls: ['./crear-hotel.page.scss'],
})
export class CrearHotelPage implements OnInit {

  constructor() { }

  private image:any;
  ngOnInit() {
  }


  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    
    console.log(this.image);
  
  }

}
