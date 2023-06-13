import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  
  details:any = [
    {
      "title": "Nom, Prénom",
      "description": "Patachon Louis",
    },
    {
      "title": "Age",
      "description": "18 ans",
    },
    {
      "title": "Diplôme",
      "description": "Baccalauréat STI2D",
    },
    {
      "title": "Hobbies",
      "description": "Jeux vidéos, programmation, musique, cinéma, séries, basket",
    },
  ]
  
  text: any = {
    "title": "Présentation",
    "fr": {
        "text": "Je m'appelle Louis Patachon, j'ai 18 ans et je suis actuellement en première année de formation au CESI de Bordeaux en alternance développeur informatique. Je suis passionné par l'informatique depuis mon plus jeune âge et je souhaite en faire mon métier. Je suis quelqu'un de très curieux et j'aime apprendre de nouvelles choses. Je suis également quelqu'un de très sociable et j'aime travailler en équipe."
    },
    "en": {
        "text": "My name is Louis Patachon, I'm 18 years old and I'm currently in my first year of training at CESI Bordeaux as a computer developer. I have been passionate about computers since I was a child and I want to make it my job. I am someone who is very curious and I like to learn new things. I am also someone who is very sociable and I like to work in a team."
    }
};

currentLanguage: string = 'fr';
languageButton: string = 'en';

toggleLanguage() {
    if (this.currentLanguage === 'fr') {
        this.currentLanguage = 'en';
        this.languageButton = 'fr';
    } else {
        this.currentLanguage = 'fr';
        this.languageButton = 'en';
    }
}
}