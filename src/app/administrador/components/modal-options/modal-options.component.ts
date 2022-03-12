import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { Hotel } from 'src/app/model/hotel';
import { Perfil } from 'src/app/model/perfil';
import { User } from 'src/app/model/user';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { MessageService } from 'src/app/services/message.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss'],
})
export class ModalOptionsComponent implements OnInit {

  public user: User;

  public perfilSubscripcion = new Subscription();
  
  public calificacionSubscripcion = new Subscription();

  public HotelSubscripcion = new Subscription();
  public HabitacionSubscripcion = new Subscription();

  constructor(public messageService: MessageService, public perfilService: PerfilService, public userService: UserService,
    public calificacionService: CalificacionService, public router: Router, public hotelService: HotelService
    , public habitacionService: HabitacionService, public modalController: ModalController) { }

  ngOnInit() {

   

    this.user = new User();


    this.user =   this.messageService.getUser();
   
    console.log('user =>', this.user);

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


          

        });


        
        this.userService.delete(this.user.id).subscribe( res => {

          Swal.fire(
            'Deleted!',
            'Your user has been deleted.',
            'success'
          )

          this.router.navigate(['/tables']);
          

        });


    
        

        this.perfilService.getRol(this.user.id).subscribe(res => {

        });

        this.calificacionService.getCalificaciones(this.user.id).subscribe(res => {


        });

        break;

        
      
        case  'admin': 


     
        

        this.HotelSubscripcion = this.hotelService.get$().subscribe((res2: Hotel) => {


          this.habitacionService.get(res2.id).subscribe(res => { });

          this.HabitacionSubscripcion = this.habitacionService.get$().subscribe((res1: Habitacion) => {


            this.calificacionService.get(res1.id).subscribe(res => {});

            
        this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {

          if(res){

            this.calificacionService.delete(res.id).subscribe();

          }

         console.log('calificacion =>', res);

        });

        console.log('habitacion =>', res1);

        if(res1){

         this.habitacionService.delete(res1.id).subscribe();

        }

      
           });


           console.log('hotel =>', res2);

           if(res2){
           
             this.hotelService.delete(res2.id).subscribe();
      
           }     
   });

         
      
   this.hotelService.getAdmin(this.user.id).subscribe( res => {


  });

  this.perfilService.getRol(this.user.id).subscribe(res => {

  });
  
    


        this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {

          console.log('perfil =>', res);

          if(res){

          this.perfilService.delete(res.id).subscribe();

          }

          if(this.user){

             this.userService.delete(this.user.id).subscribe(res => {

            Swal.fire(
              'Deleted!',
              'Your user has been deleted.',
              'success'
            )
  
            this.router.navigate(['/tables']);
            
  
          });
        }

        });
      
      


     

      


       
       
        break;

      }

      }

    })

  }

 async update(){

   this.messageService.setUser(this.user);

   
const modal = await this.modalController.create({
  component: ModalUpdateComponent,
  cssClass: 'my-custom-class',
 
});
return await modal.present();




  }

}
