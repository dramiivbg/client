import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.scss'],
})
export class CalificarComponent implements OnInit {
  
  public form: FormGroup;

  public id: number;

  public calificacionSubscripcion = new Subscription();

  constructor(public router: ActivatedRoute, public calificacionService: CalificacionService, public route: Router) { }

  ngOnInit() {

    this.id =   this.router.snapshot.params.id;


    this.form = new FormGroup({

      calificacion : new  FormControl('', [Validators.required]),
      comentario : new  FormControl('', [Validators.required, Validators.minLength(10)]),
   
    });

  }

  create(data: Calificacion){

  data.id_habitacion = this.id;

  data.id_user = 27;
  

  this.calificacionSubscripcion =  this.calificacionService.get$().subscribe((res: Calificacion) => {

    if(res){

      this.route.navigate(['/home'])

    }
    
  });

  this.calificacionService.create(data).subscribe(res => {

    console.log('listo');

  });


  
 

}

}
