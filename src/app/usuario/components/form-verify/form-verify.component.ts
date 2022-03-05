import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-verify',
  templateUrl: './form-verify.component.html',
  styleUrls: ['./form-verify.component.scss'],
})
export class FormVerifyComponent implements OnInit {

  public form: FormGroup;

  public email: string;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({

    
      email : new  FormControl('', [Validators.required, Validators.email]),
    

      
      

    });
  }

  send(){

this.email = this.form.get('email').value;

console.log(this.email);


  }

}
