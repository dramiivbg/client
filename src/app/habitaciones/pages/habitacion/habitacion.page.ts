import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { EMPTY, Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {

  public index: number = 0;
  public suma: number = 0;
  public id: number;
  public habitaciones: Habitacion[] = [];
  public cantidad: number = 0;
  public loading = false;
  public habitacionSuscripcion = new Subscription();

  public calificaciones: Calificacion[] = [];

  public calificacionSubscripcion = new Subscription();
  constructor(public route: ActivatedRoute,public calificacionService: CalificacionService, public habitacionService: HabitacionService) { }

  ngOnInit() {

   
 this.id =    this.route.snapshot.params.id;

 this.calificacionSubscripcion =  this.calificacionService.get$().subscribe((res: Calificacion) => {


  if(this.habitaciones[this.index].id == res.id_habitacion){

  this.suma+= res.calificacion;

  this.cantidad++;

  }

  this.habitaciones[this.index].calificacion = this.suma/this.cantidad;

 

});

this.index++;


 this.calificacionSubscripcion =  this.calificacionService.get$().subscribe((res: Calificacion) => {


  if(this.habitaciones[this.index].id == res.id_habitacion){

  this.suma+= res.calificacion;

  this.cantidad++;

  }

  this.habitaciones[this.index].calificacion = this.suma/this.cantidad;

  

 

});

console.log('calificaciones', this.habitaciones);



 this.habitacionSuscripcion = this.habitacionService.get$().subscribe((res: Habitacion) => {



   this.habitaciones.push(res);

   this.getCalificaciones(res);
    





 });

 
 this.habitacionService.get(this.id).subscribe( res => {

  console.log('listo');



 });


  }

  getCalificaciones(habitacion:Habitacion){


    
this.calificacionService.get(habitacion.id).subscribe(res => {

  console.log('listo');

});





  }

}
