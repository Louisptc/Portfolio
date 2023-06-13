import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  title = 'Projet';


  skils:any = [
    {
      "title": "HTML",
      "level": "90%",
      "description": "Langage de balisage utilisé pour la création de pages web.",
      "accessible": true
    },
    {
      "title": "CSS",
      "level": "80%",
      "description": "Langage de style utilisé pour la mise en forme de pages web.",
      "accessible": true
    },
    {
      "title": "Javascript",
      "level": "70%",
      "description": "Langage de programmation utilisé pour la création de pages web dynamiques.",
      "accessible": true
    
    },
    {
      "title": "PHP",
      "level": "60%",
      "description": "Langage de programmation utilisé pour la création de pages web dynamiques.",
      "accessible": true
    },
  ]

 
}
