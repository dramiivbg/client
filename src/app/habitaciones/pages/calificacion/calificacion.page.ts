import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
})
export class CalificacionPage implements OnInit {

  public id: number;

  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    
  this.id =   this.router.snapshot.params.id;


  console.log(this.id);


  }

}
