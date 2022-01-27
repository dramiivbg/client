import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.scss'],
})
export class FormHotelComponent implements OnInit {

  public form: FormGroup;
  private image:any;
  constructor() { }


  ngOnInit() {

    this.form = new FormGroup({

      imagen : new  FormControl('', [Validators.required]),
      direccion : new  FormControl('', [Validators.required, Validators.minLength(10)]),

      nombre : new  FormControl('', [Validators.required, Validators.minLength(3)]),
      

    });
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    
    console.log(this.image);
  
  }

}
