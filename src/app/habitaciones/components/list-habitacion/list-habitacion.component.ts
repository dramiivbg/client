import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';

@Component({
  selector: 'app-list-habitacion',
  templateUrl: './list-habitacion.component.html',
  styleUrls: ['./list-habitacion.component.scss'],
})
export class ListHabitacionComponent implements OnInit {

   @Input() habitacion$: Habitacion;
  public habitacion: Habitacion;
  public habitaciones: Habitacion[] = [];
  public habitacionSubscripcion = new Subscription();
  constructor( public habitacionService: HabitacionService, public router: Router) { }

  ngOnInit() {

  
 

  }


  comentario(){


    this.router.navigate(['/comentarios']);

  }

}
