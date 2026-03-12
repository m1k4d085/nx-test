import { Component } from '@angular/core';
import { CardBindingComponent } from '../../card-binding-component/card-binding.component';

@Component({
  selector: 'asepa-profile',
  imports: [CardBindingComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  title = "Profile";
  cardContent = "Mirko Abbrescia";
}
