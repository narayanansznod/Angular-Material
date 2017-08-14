// greeter.component.ts
import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'isg-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  user: User = {
    name: '',
    quote: ''
  };

}
