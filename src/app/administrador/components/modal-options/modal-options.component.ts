import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Perfil } from 'src/app/model/perfil';
import { User } from 'src/app/model/user';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { MessageService } from 'src/app/services/message.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss'],
})
export class ModalOptionsComponent implements OnInit {

  public user: User;

  public perfilSubscripcion = new Subscription();
  
  public calificacionSubscripcion = new Subscription();
  constructor(public messageService: MessageService, public perfilService: PerfilService, public userService: UserService,
    public calificacionService: CalificacionService, public router: Router) { }

  ngOnInit() {

    this.user = new User();


    this.user =   this.messageService.getUser();
  
   this.perfilService.getRol(this.user.id).subscribe();

   this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {

    this.user.rol = res.rol;

   });


  }

  delet(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

      switch(this.user.rol){

        case 'user':

        this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {

          


          this.perfilService.delete(res.id).subscribe();

  this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {


    this.calificacionService.delete(res.id).subscribe();



  });


          this.userService.delete(this.user.id).subscribe( res => {

            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

            this.router.navigate(['/tables']);
            

          })

          

        });



    
        

        this.perfilService.getRol(this.user.id).subscribe(res => {

        });

        this.calificacionService.getCalificaciones(this.user.id).subscribe(res => {


        });

        break;

        
      
        case  'admin': 




      }

      }

    })

  }

  update(){

   

  }

}
