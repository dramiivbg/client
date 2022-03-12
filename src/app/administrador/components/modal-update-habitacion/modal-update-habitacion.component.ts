import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Habitacion } from 'src/app/model/habitacion';
import { HabitacionService } from 'src/app/services/habitacion/habitacion.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-update-habitacion',
  templateUrl: './modal-update-habitacion.component.html',
  styleUrls: ['./modal-update-habitacion.component.scss'],
})
export class ModalUpdateHabitacionComponent implements OnInit {

  public form: FormGroup;
  private image:any;
  public previsualizacion: string;

  public habitacion: Habitacion;

  public habitacionSubscripcion = new Subscription();


  constructor(private sanitizer: DomSanitizer, public habitacionService: HabitacionService,
     public messageService: MessageService, public router: Router) { }

  ngOnInit() {


    this.habitacion = new Habitacion();

    this.habitacion = this.messageService.getHabitacion();

    

    this.form = new FormGroup({

      img : new  FormControl(this.habitacion.img, [Validators.required]),
      valor : new  FormControl(this.habitacion.valor, [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      descripcion: new FormControl(this.habitacion.descripcion, [Validators.required, Validators.minLength(50)]),
      nombre : new  FormControl(this.habitacion.nombre, [Validators.required, Validators.minLength(3)]),
     

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



  update(data: Habitacion){


    Swal.fire({
      title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

    
      data.id_hotel = this.habitacion.id_hotel;
      data.id = this.habitacion.id;


      this.habitacionSubscripcion = this.habitacionService.get$().subscribe((res: Habitacion) => {


        console.log(res);
        
      });

  this.habitacionService.preAddAndUpdate1(data,this.image);
          
        Swal.fire('Saved!', '', 'success').then(() => {

          this.router.navigate(['/tables']);
        }
      
        )

      
    
        
    
    

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })




  }


}
