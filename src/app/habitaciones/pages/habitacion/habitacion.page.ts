import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { EMPTY, Subscription } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {

  public id: number;

  public habitaciones: Habitacion[] = [];

  public loading = false;
  public habitacionSuscripcion = new Subscription();
  constructor(public route: ActivatedRoute, public habitacionService: HabitacionService) { }

  ngOnInit() {

   
 this.id =    this.route.snapshot.params.id;

 this.habitacionSuscripcion = this.habitacionService.get$().subscribe((res: Habitacion) => {



   this.habitaciones.push(res);

 






 });

 
 this.habitacionService.get(this.id).subscribe( res => {

  console.log('listo');



 });


  }

}
