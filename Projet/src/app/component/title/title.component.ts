import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

exp:any = [
  {
    "title": "Développeur Web",
    "date": "2020 - 2021",
    "description": "Formation de 7 mois en développement web et mobile. Apprentissage des langages HTML, CSS, Javascript, PHP, SQL, TypeScript, Angular, Ionic, NodeJS, MongoDB, ...",
    "logo": "assets/img/logo-wf3.png"
  },
  {
    "title": "Développeur java",
    "date": "2019 - 2020",
    "description": "Formation de 4 mois en développement web et mobile. Apprentissage des langages HTML, CSS, Javascript, PHP, SQL, TypeScript, Angular, Ionic, NodeJS, MongoDB, ...",
    "logo": "assets/img/logo-wf3.png"
  },
]


}
