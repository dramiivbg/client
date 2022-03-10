import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Perfil } from 'src/app/model/perfil';
import { User } from 'src/app/model/user';
import { MessageService } from 'src/app/services/message.service';
import { ModalOptionsComponent } from '../modal-options/modal-options.component';


@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent implements OnInit {

  @Input() user: User;
   @Input() perfil: Perfil;

   public user$: User;

  constructor(public modalController: ModalController, public messageService: MessageService) { }

  ngOnInit() {

    

  }

 


  async  modal(user: User){

    this.user$ = new User();

this.user$.set(user);
this.messageService.setUser(this.user$);

const modal = await this.modalController.create({
  component: ModalOptionsComponent,
  cssClass: 'my-custom-class',
 
});
return await modal.present();








  }

  

}
