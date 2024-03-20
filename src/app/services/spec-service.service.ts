import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Specialite } from '../models/specialite'; // Assurez-vous d'importer la classe Specialite

@Injectable({
  providedIn: 'root'
})
export class SpecService {
  private specialites: Specialite[] = [
    { _libelle: "DEV APP", _idSpec: 1 },
    { _libelle: "ING RESEAUX", _idSpec: 2 },
    { _libelle: "INTEGRATEUR", _idSpec: 3 },
    { _libelle: "CHEF DE PROJET", _idSpec: 4 },
    { _libelle: "INFORGRAPHISTE", _idSpec: 5 },
    { _libelle: "UX DESIGENR", _idSpec: 6 },
    { _libelle: "DEVELOPPEUR MOBILE", _idSpec: 7 },
  ];

  constructor() { }

  getSpecialites(): Observable<Specialite[]> {
    return of(this.specialites);
  }
}
