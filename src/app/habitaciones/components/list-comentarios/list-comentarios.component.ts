import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { Habitacion } from 'src/app/model/habitacion';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil/perfil.service';


@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.scss'],
})
export class ListComentariosComponent implements OnInit {

  
  public bolean: boolean = true;

  @Input() habitacion$: Habitacion ;

  @Input() calificaciones: Calificacion[] = [];

  public estrellas: number[];

  public loading = false;
  
  public id: string;

  public user = false;

  public perfilSubscripcion = new Subscription();

  constructor(public perfilService: PerfilService) { }

  ngOnInit() {

    
    
  this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {

    if(res.rol == 'user'){

      this.user = true;
    }else{

      this.user = false;
    }

  });  

  this.id = localStorage.getItem('id');

  this.perfilService.get(Number(this.id)).subscribe(res => {});

    console.log(this.calificaciones);

    this.habitacion$ = new Habitacion();

 

   if(this.habitacion$ == undefined){

    this.bolean = false;
   }
   else{

    this.bolean = true;
   }
    

 
    

  }
  
  }

