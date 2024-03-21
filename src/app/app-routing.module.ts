import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiants/etudiants.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'etudiants', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'formEtudiant', component: FormEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
