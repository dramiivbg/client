import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-update-hotel',
  templateUrl: './modal-update-hotel.component.html',
  styleUrls: ['./modal-update-hotel.component.scss'],
})
export class ModalUpdateHotelComponent implements OnInit {

  public form: FormGroup;
  private image:any;

  public hotel: Hotel;

  public previsualizacion: string;
  constructor(private sanitizer: DomSanitizer, public hotelService: HotelService, public messageService: MessageService,
    public router: Router) { }

  ngOnInit() {

    this.hotel = new Hotel();


    this.hotel = this.messageService.getHotel();



    this.form = new FormGroup({

      img : new  FormControl(this.hotel.img, [Validators.required]),
      direccion : new  FormControl(this.hotel.direccion, [Validators.required, Validators.minLength(10)]),

      nombre : new  FormControl(this.hotel.nombre, [Validators.required, Validators.minLength(3)]),
      

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


  update(data: Hotel){



    console.log(data);
    
    Swal.fire({
      title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    
    if (result.isConfirmed) {

    
      data.id = this.hotel.id;
      data.id_admin = this.hotel.id_admin;


  

  this.hotelService.preAddAndUpdate1(data,this.image);
          
        Swal.fire('Saved!', '', 'success').then(() => {

          this.router.navigate(['/admin']);
        }
      
        )

          
    
    

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })





  }
}
