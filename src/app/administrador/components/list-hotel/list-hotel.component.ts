import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Hotel } from 'src/app/model/hotel';
import { MessageService } from 'src/app/services/message.service';
import { ModalOptionHotelComponent } from '../modal-option-hotel/modal-option-hotel.component';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss'],
})
export class ListHotelComponent implements OnInit {

  @Input() hotel$: Hotel;

  constructor(public modalController: ModalController, public messageService: MessageService) { }

  ngOnInit() {

    

  }


  
 async modal(hotel: Hotel){

  this.messageService.setHotel(hotel);


  const modal = await this.modalController.create({
component: ModalOptionHotelComponent,
cssClass: 'my-custom-class',

});
return await modal.present();
}


}
