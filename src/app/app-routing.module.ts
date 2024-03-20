import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Assurez-vous d'importer correctement HomeComponent
import { SpecialiteComponent } from './components/specialite/specialite.component'; // Assurez-vous d'importer correctement SpecialiteComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route vers HomeComponent pour la page d'accueil
  { path: 'specialites', component: SpecialiteComponent }, // Route vers SpecialiteComponent
  // Vous pouvez ajouter d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
