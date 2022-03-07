import { Component, Input, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/model/calificacion';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.scss'],
})
export class ListHistorialComponent implements OnInit {

  @Input() calificaciones$: Calificacion[];

  constructor() { }

  ngOnInit() {

  
  }

}
