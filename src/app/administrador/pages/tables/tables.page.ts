import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/model/perfil';
import { User } from 'src/app/model/user';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {

  public users: User[];
  
  public contador: number = 0;
  public userSubscripcion = new  Subscription();
  public perfilSubscripcion = new  Subscription();

  constructor(public userService: UserService, public perfilService: PerfilService) { }

  ngOnInit() {

 this.perfilSubscripcion = this.perfilService.get$().subscribe((res: Perfil) => {

      this.users[this.contador].rol = res.rol;

      this.contador++;
    
    });

this.userSubscripcion = this.userService.all$().subscribe((res: User[]) => {

  this.users = res;

  for (let index = 0; index < res.length; index++) {
    this.Perfil(res[index].id);
    
  }

  




  });

  this.userService.all().subscribe(res => {


  });



 

  }

  Perfil(id: number){

this.perfilService.get(id).subscribe(res => {


});



  }

}
