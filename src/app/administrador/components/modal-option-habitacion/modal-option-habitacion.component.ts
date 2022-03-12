import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { User } from 'src/app/model/user';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';
import { ModalUpdateHabitacionComponent } from '../modal-update-habitacion/modal-update-habitacion.component';

@Component({
  selector: 'app-modal-option-habitacion',
  templateUrl: './modal-option-habitacion.component.html',
  styleUrls: ['./modal-option-habitacion.component.scss'],
})
export class ModalOptionHabitacionComponent implements OnInit {

  public habitacion: Habitacion;

  public calificacionSubscripcion = new Subscription();

  public HabitacionSubscripcion = new Subscription();


  constructor(public messageService: MessageService, public habitacionService: HabitacionService, public calificacionService: CalificacionService,
    public modalController: ModalController ) { }

  ngOnInit() {


    this.habitacion = new Habitacion();

    this.habitacion = this.messageService.getHabitacion();
    
    console.log(this.habitacion);


  }


  delet(){

    this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {

      this.calificacionService.delete(res.id).subscribe();
    
    });

    this.calificacionService.get(this.habitacion.id).subscribe();



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





this.habitacionService.delete(this.habitacion.id).subscribe( () => {

   
  Swal.fire(
    'Deleted!',
    'Your user has been deleted.',
    'success'
  );


});







    
  }

    });

  }


async  update(){


    this.messageService.setHabitacion(this.habitacion);

   
    const modal = await this.modalController.create({
      component: ModalUpdateHabitacionComponent,
      cssClass: 'my-custom-class',
     
    });
    return await modal.present();
    
    
    

  }

}
