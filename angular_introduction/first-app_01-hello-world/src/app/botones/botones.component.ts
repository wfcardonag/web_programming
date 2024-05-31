import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'botoncitos',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: "./botones.component.html",
  styles: ``
})
export class BotonesComponent {
  active = 1;
}
