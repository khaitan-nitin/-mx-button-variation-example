import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  name: string;
 
  constructor() { }

  ngOnInit(): void {
   this.name = "Nitin";
  }
}
