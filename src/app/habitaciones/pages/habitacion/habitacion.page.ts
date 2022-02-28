import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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

 
  public index: number ;
  public suma: number;
  public id: number;

  public global:number;

  public len: number;

  public pos: number;
  public habitaciones: Habitacion[] = [];
  public calificacion: Calificacion;
  public habitacion: Habitacion;
  public cantidad: number = 0;
  public loading = false;
  public habitacionSuscripcion = new Subscription();

  public entrada: string;


  public calificaciones: Calificacion[] = [];

  

  public calificacionSubscripcion = new Subscription();
  constructor(public route: ActivatedRoute,public calificacionService: CalificacionService, public habitacionService: HabitacionService) { }

  ngOnInit() {




this.habitacion = new Habitacion();

this.habitacion.cantidad = 0;
this.index = 0;

this.suma = 0;


this.calificacion = new Calificacion();

this.calificacion.cantidad = 0;

this.len = 0;

this.global = 0;

this.pos = 0;

this.id =    this.route.snapshot.params.id;

 this.calificacionSubscripcion =  this.calificacionService.get$().subscribe((res: Calificacion) => {




this.calificaciones.push(res);

this.index++;

this.calificacion.cantidad += this.index;




});

console.log(this.calificaciones.length);




/*

for (let index = 0; index < this.habitacion.cantidad; index++) {
  

   for (let pos = 0; pos < this.calificacion.cantidad; pos++) {
 
    if (this.habitaciones[index].id ==  this.calificaciones[pos].id_habitacion) {
    
       this.len++;
      this.habitacion.calificacion += this.calificaciones[pos].calificacion;

      this.calificacion.cantidad = this.len;



    }

    this.habitaciones[index].calificacion = this.habitacion.calificacion/this.calificacion.cantidad;


    console.log('habitaciones =>',this.habitaciones[index]);



   }

  
}

*/

 this.habitacionSuscripcion = this.habitacionService.get$().subscribe((res: Habitacion) => {

   this.pos++;

   this.habitacion.cantidad+= this.pos;

  
   this.habitaciones.push(res);

   this.getCalificaciones(res);
    





 });

 //console.log(this.habitacion);

//console.log(this.calificacion);

 
 this.habitacionService.get(this.id).subscribe( res => {

  console.log('listo');



 });


  }

  getCalificaciones(habitacion:Habitacion){


    
this.calificacionService.get(habitacion.id).subscribe(res => {

  console.log('listo');

});





  }



  event(entrada: any){


    console.log(entrada);

  }

}
