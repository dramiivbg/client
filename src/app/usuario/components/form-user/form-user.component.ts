import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import * as crypto from 'crypto-js'; 
import { UserService } from 'src/app/services/user/user.service';

import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {


  public form: FormGroup;


  public passwd: string;

  public perfil: Perfil;


  public key: any;
  public iv: any;

  public post: string;
  public phone: string;

  public hotelSubscripcion = new Subscription();
 
  public telefono: string;
  public user: User;
  public postal: string;
  constructor( public UserService: UserService, public perfilService: PerfilService, public router: Router) { }

  ngOnInit() {



    this.form = new FormGroup({

      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      postal: new FormControl('', [Validators.required]),
      rol : new FormControl('',[Validators.required]),
      email : new  FormControl('', [Validators.required, Validators.email]),
      password : new  FormControl('', [Validators.required]),

      
      

    });

  
  }


  create(){

this.user = new User();

    

  this.post =   this.form.get('postal').value;
  
  this.phone = this.form.get('telefono').value;

  this.telefono = this.post+' '+this.phone;
   
this.user.apellidos = this.form.get('apellidos').value;
this.user.nombres = this.form.get('nombres').value;
this.user.telefono = this.telefono;
this.user.email = this.form.get('email').value;

this.key = this.form.get('password').value;

this.user.password =  crypto.SHA512(this.key).toString();





 this.UserService.create(this.user).subscribe(res => {

  console.log('creado usuario exitosamente');

 });

 this.UserService.get$().subscribe((res: User) => {

  console.log(res.id);

  this.perfil = new Perfil();

  this.perfil.id_user = res.id;
  this.perfil.rol = this.form.get('rol').value;

  this.perfilService.create(this.perfil).subscribe(res =>{

   console.log('creado perfil exitosamente');

  });



 });
  
  





  



   }



        
}
