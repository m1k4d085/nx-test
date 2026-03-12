import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card.component';

@Component({
  selector: 'asepa-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
}
