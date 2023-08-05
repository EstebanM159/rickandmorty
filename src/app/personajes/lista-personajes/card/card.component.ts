import { Component, Input,OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input() dataPj?: Result;
  // public id:number=0;
  // ngOnInit(): void {
  //   this.extraerId();
  // }
  // extraerId(){
  //   if(this.dataPj){
  //     this.id = this.dataPj.id
  //   }
  // }
}

