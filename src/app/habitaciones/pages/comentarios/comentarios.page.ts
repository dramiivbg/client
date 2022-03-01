import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { User } from 'src/app/model/user';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  public id: number;
  public calificacionSubscripcion = new Subscription;
  public calificaciones: Calificacion[] = [];

 
  public index: number = 0;
  public userSubscripcion = new Subscription;
  public users$: User[] = [];

  public habitacion: Habitacion;

  public habitacionSubscripcion = new Subscription();

  constructor(public router: ActivatedRoute, public calificacionService: CalificacionService,public userService: UserService,
     public habitacionService: HabitacionService ) { }

  ngOnInit() {

    this.id = 0;

  this.id =   this.router.snapshot.params.id;

  
  this.habitacionSubscripcion =  this.habitacionService.get$().subscribe((res: Habitacion) => {



  this.habitacion = new Habitacion();
  
  this.habitacion.set(res);

  


  });

  this.habitacionService.getH(this.id).subscribe(res => {

    console.log('lsto');

  });

  
  this.userSubscripcion =   this.userService.get$().subscribe((res:User) => {

      

    this.calificaciones[this.index].nombres = res.nombres+' '+res.apellidos;
  
    this.index++;
    
    });

    
  this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {


     this.calificaciones.push(res);


    this.users(res);

   
 });

 

 /*
 console.log('calificaciones => ', this.calificaciones);
 console.log('users => ', this.users$);

 */

  this.calificacionService.get(this.id).subscribe(res => {

    console.log('listo');

    

  });


  
// this.users(this.calificaciones);

  }


  users(calificacion:Calificacion){

    
  
  


this.userService.get(calificacion.id_user).subscribe(res => {

  console.log('listo');
})


    


  
  
    
  
  }
  
  

  
}




  