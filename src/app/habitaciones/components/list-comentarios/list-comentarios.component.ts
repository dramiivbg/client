import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.scss'],
})
export class ListComentariosComponent implements OnInit {

  @Input() calificacion: Calificacion;
  @Input() user: User;

  public loading = false;
  
  constructor() { }

  ngOnInit() {

     
    if(!this.calificacion){
      this.loading = true;
      }else{
    
        this.loading = false;
      }


  }
  
  }

