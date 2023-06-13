import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {

  flipCard(index: number) {
    const card = document.getElementsByClassName('card')[index];
    card.classList.add('is-flipped');
  }
  
  unflipCard(index: number) {
    const card = document.getElementsByClassName('card')[index];
    card.classList.remove('is-flipped');
  }

  infos:any = [
    {
      "title": "Carte interactive",
      "description": "Projet réalisé dans le cadre de la formation Développeur informatique, renseignant les présidents de chaque régions de la SNIPF.",
      "link": "https://www.snipf.org/nos-regions",
      "hasLink": true,
      "image": "./assets/images/snipf.png"
    },
    {
      "title": "Capteurs de température",
      "description": "Projet réalisé dans le cadre de la formation Développeur informatique, permettant de récupérer les données de capteurs de température et de les afficher sur un site web.",
      "link": "#",
      "hasLink": false,
      "image": "./assets/images/nuage.jpg"
    },
  ]

}

