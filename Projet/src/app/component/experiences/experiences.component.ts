import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  @Input() title:any 
  @Input() date:any
  @Input() description:any

}
