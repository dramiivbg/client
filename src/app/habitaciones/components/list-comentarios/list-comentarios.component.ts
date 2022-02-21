import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';


@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.scss'],
})
export class ListComentariosComponent implements OnInit {

  @Input() calificacion: Calificacion;
  
  @Input() habitacion$: Habitacion;

  @Input() calificaciones: Calificacion[];

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

