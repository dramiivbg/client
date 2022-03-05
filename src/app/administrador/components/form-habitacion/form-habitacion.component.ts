import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Habitacion } from 'src/app/model/habitacion';
import { Hotel } from 'src/app/model/hotel';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.scss'],
})
export class FormHabitacionComponent implements OnInit {
  public form: FormGroup;
  private image:any;
  public previsualizacion: string;

  @Input() hoteles$: Hotel[];
 
  constructor(private sanitizer: DomSanitizer, public habitacionService: HabitacionService) { }


  ngOnInit() {

    this.form = new FormGroup({

      img : new  FormControl('', [Validators.required]),
      valor : new  FormControl(0, [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(50)]),
      nombre : new  FormControl('', [Validators.required, Validators.minLength(3)]),
      id_hotel: new FormControl(0, [Validators.required] )

    });
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    this.extraerBase64(this.image).then((imagen: any) => {
      this.previsualizacion = imagen.base;

     // console.log(imagen)
    })
    //this.archivos.push(this.image);
   // console.log(this.archivos);
  
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



  create(data: Habitacion){


 


  this.habitacionService.preAddAndUpdate(data, this.image);


  }


}


