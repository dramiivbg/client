import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel/hotel.service';


@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.scss'],
})
export class FormHotelComponent implements OnInit {

  public form: FormGroup;
  private image:any;
  public previsualizacion: string;
  
  
  constructor(private sanitizer: DomSanitizer, public hotelService: HotelService, public router:Router ) { }


  ngOnInit() {

    this.form = new FormGroup({

      img : new  FormControl('', [Validators.required]),
      direccion : new  FormControl('', [Validators.required, Validators.minLength(10)]),

      nombre : new  FormControl('', [Validators.required, Validators.minLength(3)]),
      

    });
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    this.extraerBase64(this.image).then((imagen: any) => {
      this.previsualizacion = imagen.base;

     // console.log(imagen)
    })
   
  
  }

  
  extraerBase64 = async ($event:any) => new Promise((resolve, reject) =>  {
    

    try {
      
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
         
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (error) {
      return null;
    }


  }); 





  create(data: Hotel){

    
  

  
    data.id_admin = 37;

    


    this.hotelService.preAddAndUpdate(data, this.image);
    
  
  }


}
