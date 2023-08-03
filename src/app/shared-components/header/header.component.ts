import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 public activo:boolean=false;


  abrir(){
    this.activo=this.activo === true ? false : true;
  }

}
