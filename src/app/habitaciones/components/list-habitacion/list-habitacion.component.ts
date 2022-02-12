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


  public loading = false;
  constructor(  public router: Router) { }

  ngOnInit() {

    
    
    if(!this.habitacion$){
      this.loading = true;
      }else{
    
        this.loading = false;
      }
    
 

  }


  comentario(){


    this.router.navigate(['/comentarios']);

  }

}
