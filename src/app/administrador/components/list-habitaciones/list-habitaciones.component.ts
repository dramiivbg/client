import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Habitacion } from 'src/app/model/habitacion';
import { MessageService } from 'src/app/services/message.service';
import { ModalOptionHabitacionComponent } from '../modal-option-habitacion/modal-option-habitacion.component';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.scss'],
})
export class ListHabitacionesComponent implements OnInit {

  @Input() habitacion: Habitacion;


  constructor(public modalController: ModalController, public messageService: MessageService) { }

  ngOnInit() {

    
  }


 async modal(habitacion: Habitacion){

    this.messageService.setHabitacion(habitacion);


    const modal = await this.modalController.create({
  component: ModalOptionHabitacionComponent,
  cssClass: 'my-custom-class',
 
});
return await modal.present();
  }
}
