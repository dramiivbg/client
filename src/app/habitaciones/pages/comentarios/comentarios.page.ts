import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { User } from 'src/app/model/user';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
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

  
  public userSubscripcion = new Subscription;
  public user: User[] = [];


  constructor(public router: ActivatedRoute, public calificacionService: CalificacionService,public userService: UserService ) { }

  ngOnInit() {

  this.id =   this.router.snapshot.params.id;

  

  this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {


    this.calificaciones.push(res);

   

      });

  this.calificacionService.get(this.id).subscribe(res => {

    console.log('listo');

    

  });


  
this.users(this.calificaciones);

  }


  users(calificacion:Calificacion[]){

    
  
    this.userSubscripcion =   this.userService.get$().subscribe((res:User) => {


      this.user.push(res);
  
    });

    
console.log(calificacion);

  calificacion.forEach((res:any) => {

    console.log(res);

  });
    
   
  
  
    
  
  }
  
  

  
}




  