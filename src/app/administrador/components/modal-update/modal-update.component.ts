import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/model/perfil';
import { User } from 'src/app/model/user';
import { MessageService } from 'src/app/services/message.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnInit {

  
  public form: FormGroup;

  public user: User;

  public perfilSubscripcion = new Subscription();

  
  public userSubscripcion = new Subscription();
  constructor(public messageService: MessageService, public perfilService: PerfilService, public userService: UserService,
    public router: Router) { }

  ngOnInit() {

    this.user = new User();

    this.user = this.messageService.getUser();

    
    this.perfilService.getRol(this.user.id).subscribe();

    this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {
 
     this.user.rol = res.rol;
 
    });

    this.form = new FormGroup({

      nombres: new FormControl(this.user.nombres, [Validators.required]),
      apellidos: new FormControl(this.user.apellidos, [Validators.required]),
      telefono: new FormControl(this.user.telefono, [Validators.required, Validators.minLength(10)]),
      
      rol : new FormControl(this.user.rol,[Validators.required]),
      email : new  FormControl(this.user.email, [Validators.required, Validators.email]),


      
      

    });
  }

  update(user: User){

      Swal.fire({
        title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        user.password = this.user.password;

    
        this.userSubscripcion =   this.userService.get$().subscribe((res: User) => {
      
          console.log(user);
      
          });
      
          user.id = this.user.id;
      
      
          this.userService.update(user).subscribe(res => {
      
            
          Swal.fire('Saved!', '', 'success').then(() => {

            this.router.navigate(['/tables']);
          }
        
          )

        
      
          });
      
      

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

    }
}
