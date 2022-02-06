import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

  public form: FormGroup;
  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({

      user : new  FormControl('', [Validators.required, Validators.email]),
      password : new  FormControl('', [Validators.required]),

      
      

    });
  }


  create(data: User){

    // data.img = this.previsualizacion;
     
 
   
 
    
     
   }

}
