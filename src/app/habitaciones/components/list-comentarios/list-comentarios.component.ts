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

  
  public bolean: boolean = true;

  @Input() habitacion$: Habitacion ;

  @Input() calificaciones: Calificacion[] = [];

  public loading = false;
  
  constructor() { }

  ngOnInit() {

    

    console.log(this.calificaciones);

    this.habitacion$ = new Habitacion();

 

   if(this.habitacion$ == undefined){

    this.bolean = false;
   }
   else{

    this.bolean = true;
   }
    
    

  }
  
  }

