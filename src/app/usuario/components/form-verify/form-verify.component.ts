import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Verify } from 'crypto';
import { Verifi } from 'src/app/model/verify';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-form-verify',
  templateUrl: './form-verify.component.html',
  styleUrls: ['./form-verify.component.scss'],
})
export class FormVerifyComponent implements OnInit {

  public form: FormGroup;

  public verify: Verifi;

  constructor(public messageService: MessageService) { }

  ngOnInit() {

    this.form = new FormGroup({

    
      email : new  FormControl('', [Validators.required, Validators.email]),
    

      
      

    });
  }

  send(){

    this.verify = new Verifi();

this.verify.gmail = this.form.get('email').value;

this.verify.codigo = Math.floor(Math.random() * 100000);

  

this.messageService.sendMessage(this.verify).subscribe(res => {

  console.log(res);
  
})


  }

}
