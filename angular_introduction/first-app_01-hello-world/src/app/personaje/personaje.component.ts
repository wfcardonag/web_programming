import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeFuturama } from '../personaje-futurama';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./personaje.component.html",
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {
  
  @Input() personajeFuturama: PersonajeFuturama = {
    id: 0,
    name: "",
    gender: "",
    status: "",
    species: "",
    createdAt: "",
    image: ""
  }
}
