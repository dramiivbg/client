import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';
import * as crypto from 'crypto-js'; 
import { Perfil } from 'src/app/model/perfil';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {


  
  public users: User[];
  public form: FormGroup;
 public perfil: Perfil;
  public contador:number = 0;

  public passwd: string;
  public userSubscripcion = new Subscription();
  public perfilSubscripcion = new Subscription();
  constructor(public userService: UserService, public router: Router, public perfilService: PerfilService) { }

  ngOnInit() {



    this.form = new FormGroup({

      email : new  FormControl('', [Validators.required, Validators.email]),
      password : new  FormControl('', [Validators.required]),

      
      

    });
  }


  create(data: User){

    

  
    

  this.userSubscripcion =   this.userService.all$().subscribe((res:User[]) => {



   

       for (let index = 0; index < res.length; index++) {

    

        if(res[index].email == data.email &&  data.password == crypto.AES.decrypt( res[index].password,'salt').toString(crypto.enc.Utf8)){


          localStorage.setItem('id', String(res[index].id));


          

      

    this.perfilSubscripcion =   this.perfilService.get$().subscribe((res: Perfil) => {

      this.perfil = new Perfil();
      
      this.perfil.set(res);
     
      if(res.rol == 'user'){


        this.router.navigate(['/home']); 

       }else{

         this.router.navigate(['/admin']); 

       }

      });


      this.perfilService.get(res[index].id).subscribe(res => {

      });

       
      
   
        return;


      

   

      

         
        }else{

          Swal.fire({
            title: 'credenciales incorrectas',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
         
        }
      
         
       }

     

    });

 
     

    this.userService.all().subscribe(res => {

      console.log('listo');
    })
 
   
 
    
     
   }
}
