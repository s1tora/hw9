import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-why-card',
  templateUrl: './why-card.component.html',
  styleUrls: ['./why-card.component.scss']
})
export class WhyCardComponent {
  @Input() card: Card | any;
  
}
