import { Component, Input } from '@angular/core';

@Component({
  selector: 'asepa-card-binding',
  imports: [],
  templateUrl: './card-binding.component.html',
  styleUrl: './card-binding.component.scss',
})
export class CardBindingComponent {
  @Input()
  title?: string;

  @Input()
  content?: string;
}
