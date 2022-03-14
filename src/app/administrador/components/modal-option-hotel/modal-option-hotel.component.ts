import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { Hotel } from 'src/app/model/hotel';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { MessageService } from 'src/app/services/message.service';

import Swal from 'sweetalert2';
import { ModalUpdateHotelComponent } from '../modal-update-hotel/modal-update-hotel.component';

@Component({
  selector: 'app-modal-option-hotel',
  templateUrl: './modal-option-hotel.component.html',
  styleUrls: ['./modal-option-hotel.component.scss'],
})
export class ModalOptionHotelComponent implements OnInit {

 


  public hotel: Hotel;

  
  public calificacionSubscripcion = new Subscription();

  public HabitacionSubscripcion = new Subscription();

  constructor( public messageService: MessageService,  public modalController: ModalController, public router: Router,
     public habitacionService: HabitacionService, public calificacionService: CalificacionService, public hotelService: HotelService) { }

  ngOnInit() {

    this.hotel = new Hotel();


    this.hotel = this.messageService.getHotel();

    console.log(this.hotel);


  }


  delet(){

    Swal.fire({
      title: 'aceptas?',
      text: "para borrar la habitacion debemos borrar todas las calificaciones de las habitaciones y sus habitaciones",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {


this.HabitacionSubscripcion = this.habitacionService.get$().subscribe((res: Habitacion) => {


  this.calificacionService.get(res.id).subscribe();

 



        this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res2: Calificacion) => {

         
    
          this.calificacionService.delete(res2.id).subscribe();

          this.habitacionService.delete(res.id).subscribe();
        
        });


      });


    
        this.habitacionService.get(this.hotel.id).subscribe();



        
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {






this.hotelService.delete(this.hotel.id).subscribe( () => {

   
  Swal.fire(
    'Deleted!',
    'Your hotel has been deleted.',
    'success'


  ).then( () => 
{
 
 this.router.navigate(['/admin']);

}
  )


});







    
  }

    });












    
  }else if(result.isDismissed){

    return;

    
  }

    });


  }

 
async  update(){


  this.messageService.setHotel(this.hotel);

 
  const modal = await this.modalController.create({
    component: ModalUpdateHotelComponent,
    cssClass: 'my-custom-class',
   
  });
  return await modal.present();
  
  
  

}


}
