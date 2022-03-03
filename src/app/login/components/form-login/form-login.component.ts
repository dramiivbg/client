import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';
import * as crypto from 'crypto-js'; 
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {



  public users: User[];
  public form: FormGroup;

  public contador:number = 0;
  public userSubscripcion = new Subscription();
  constructor(public userService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({

      email : new  FormControl('', [Validators.required, Validators.email]),
      password : new  FormControl('', [Validators.required]),

      
      

    });
  }


  create(data: User){


  

  this.userSubscripcion =   this.userService.all$().subscribe((res:User[]) => {

      

       for (let index = 0; index < res.length; index++) {

        if(res[index].email == data.email &&  res[index].password == crypto.SHA512(data.password).toString()){


          localStorage.setItem('id', String(res[index].id));
          
          console.log('login exitosamente');

          
        }else{

          console.log('login fallido');
        }
        
         
       }

     

    });

 
     

    this.userService.all().subscribe(res => {

      console.log('listo');
    })
 
   
 
    
     
   }
}
