import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { Title } from '@angular/platform-browser';
import { TitleComponent } from './component/title/title.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {
    path: 'presentation',
    component : PresentationComponent,
  },
  {
    path: 'exp',
    component : TitleComponent,
  }, 
  {
    path: 'skils',
    component : CardComponent,
  },
  {
    path:'', redirectTo: 'presentation', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'presentation'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
