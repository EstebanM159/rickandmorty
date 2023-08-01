import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() dataPj?: Result;
}
