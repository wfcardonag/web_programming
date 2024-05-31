import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import {FormsModule} from '@angular/forms';
import { BotonesComponent } from './botones/botones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonajeComponent, FormsModule, BotonesComponent],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
  isListaEnabled = true;
  nombrePersonaje = "Fray";

  listaEjemploFor = [
    1, 
    2,
    3,
    4,
    5
  ]

  listaPersonajes = {
    "items": [
      {
        "id": 1,
        "name": "Philip J. Fry",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
      },
      {
        "id": 2,
        "name": "Morgan Proctor",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/morgan-proctor.webp"
      },
      {
        "id": 3,
        "name": "Mugger",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/mugger.webp"
      },
      {
        "id": 4,
        "name": "Ned Farnsworth",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/ned-farnsworth.webp"
      },
      {
        "id": 5,
        "name": "Nina",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/nina.webp"
      },
      {
        "id": 6,
        "name": "Nichelle Nichols (character)",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/nichelle-nichols-_character_.webp"
      },
      {
        "id": 7,
        "name": "Mr. Panucci",
        "gender": "MALE",
        "status": "DEAD",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/mr_-panucci.webp"
      },
      {
        "id": 8,
        "name": "Number 9 man",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/number-9-man.webp"
      },
      {
        "id": 9,
        "name": "NjÃ¶rd",
        "gender": "FEMALE",
        "status": "DEAD",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/nj_rd.webp"
      },
      {
        "id": 10,
        "name": "Mildred Fry",
        "gender": "FEMALE",
        "status": "DEAD",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/mildred-fry.webp"
      },
      {
        "id": 11,
        "name": "Minx",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/minx.webp"
      },
      {
        "id": 12,
        "name": "Michelle Jenkins",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/michelle-jenkins.webp"
      },
      {
        "id": 13,
        "name": "Marianne",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/marianne.webp"
      },
      {
        "id": 14,
        "name": "Lou",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/lou.webp"
      },
      {
        "id": 15,
        "name": "The Little Prince",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/the-little-prince.webp"
      },
      {
        "id": 16,
        "name": "Bender Bending RodrÃ­guez",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "ROBOT",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/robot/bender-bending-rodr_guez.webp"
      },
      {
        "id": 17,
        "name": "Tritonian Yeti",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "MONSTER",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/monster/tritonian-yeti.webp"
      },
      {
        "id": 18,
        "name": "Yanos",
        "gender": "UNKNOWN",
        "status": "UNKNOWN",
        "species": "UNKNOWN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/unknown/yanos.webp"
      },
      {
        "id": 19,
        "name": "Bigfoot",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "MONSTER",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/monster/bigfoot.webp"
      },
      {
        "id": 20,
        "name": "Loch Ness Monster",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "MONSTER",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/monster/loch-ness-monster.webp"
      },
      {
        "id": 21,
        "name": "Pazuzu",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "MONSTER",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/monster/pazuzu.webp"
      },
      {
        "id": 22,
        "name": "Walter Koenig",
        "gender": "UNKNOWN",
        "status": "UNKNOWN",
        "species": "UNKNOWN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/unknown/walter-koenig.webp"
      },
      {
        "id": 23,
        "name": "Walter Mondale's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/walter-mondale_s-head.webp"
      },
      {
        "id": 24,
        "name": "Mom",
        "gender": "FEMALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/mom.webp"
      },
      {
        "id": 25,
        "name": "Tom Cruise's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 26,
        "name": "Tim Allen's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 27,
        "name": "Stephen Hawking",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "UNKNOWN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/unknown/stephen-hawking.webp"
      },
      {
        "id": 28,
        "name": "Sharon Stone's head",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 29,
        "name": "El chupanibre",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "MUTANT",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/mutant/el-chupanibre.webp"
      },
      {
        "id": 30,
        "name": "Sarah Michelle Gellar's head",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 31,
        "name": "William Shatner's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/william-shatner_s-head.webp"
      },
      {
        "id": 32,
        "name": "Robert Wagner's head",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/robert-wagner_s-head.webp"
      },
      {
        "id": 33,
        "name": "William Howard Taft's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/william-howard-taft_s-head.webp"
      },
      {
        "id": 34,
        "name": "Ross Perot's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/ross-perot_s-head.webp"
      },
      {
        "id": 35,
        "name": "Warren G. Harding's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 36,
        "name": "Ronald Reagan's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/ronald-reagan_s-head.webp"
      },
      {
        "id": 37,
        "name": "Traci Lords' head",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/traci-lords_-head.webp"
      },
      {
        "id": 38,
        "name": "Thomas Jefferson's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/thomas-jefferson_s-head.webp"
      },
      {
        "id": 39,
        "name": "Theodore Roosevelt's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/theodore-roosevelt_s-head.webp"
      },
      {
        "id": 40,
        "name": "Sylvester Stalone's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 41,
        "name": "Rob Reiner's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/rob-reiner_s-head.webp"
      },
      {
        "id": 42,
        "name": "Snoop Dogg's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/snoop-dogg_s-head.webp"
      },
      {
        "id": 43,
        "name": "Sergio AragonÃ©s' head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/sergio-aragon_s_-head.webp"
      },
      {
        "id": 44,
        "name": "Rich Little's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/rich-little_s-head.webp"
      },
      {
        "id": 45,
        "name": "Rebecca Romijn's head",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/rebecca-romijn_s-head.webp"
      },
      {
        "id": 46,
        "name": "Samuel Genital's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/samuel-genital_s-head.webp"
      },
      {
        "id": 47,
        "name": "Mimi Rogers' head",
        "gender": "FEMALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 48,
        "name": "Michael Dukakis' head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      },
      {
        "id": 49,
        "name": "Matt Groening's head",
        "gender": "MALE",
        "status": "ALIVE",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": "https://futuramaapi.com/static/img/human/matt-groening_s-head.webp"
      },
      {
        "id": 50,
        "name": "Martin Lawrence's head",
        "gender": "MALE",
        "status": "UNKNOWN",
        "species": "HUMAN",
        "createdAt": "2023-12-02T18:32:33.122015Z",
        "image": null
      }
    ],
    "total": 427,
    "page": 1,
    "size": 50,
    "pages": 9
  }; 
}
