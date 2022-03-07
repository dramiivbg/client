import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';

@Component({
  selector: 'app-historial-comentario',
  templateUrl: './historial-comentario.page.html',
  styleUrls: ['./historial-comentario.page.scss'],
})
export class HistorialComentarioPage implements OnInit {

  public calificaciones : Calificacion[] = [];

  public id: string;
  public calificacionSubscripcion = new Subscription();

  constructor(public calificacionService: CalificacionService) { }

  ngOnInit() {


    this.calificacionSubscripcion = this.calificacionService.get$().subscribe((res: Calificacion) => {

      this.calificaciones.push(res);


    });

    

    this.id = localStorage.getItem('id');

    this.calificacionService.getCalificaciones(Number(this.id)).subscribe(res => {

    });



  }

}
