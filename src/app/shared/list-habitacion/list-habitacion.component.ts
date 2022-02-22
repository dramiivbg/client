import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';

@Component({
  selector: 'app-list-habitacion',
  templateUrl: './list-habitacion.component.html',
  styleUrls: ['./list-habitacion.component.scss'],
})
export class ListHabitacionComponent implements OnInit {

   @Input() habitacion$: Habitacion;
   @Input() calificaciones$: Calificacion[];

 public cantidad:number[];



  constructor(  ) { }

  ngOnInit() {

  

  
      






}


 

}
