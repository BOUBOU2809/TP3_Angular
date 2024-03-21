import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [
    {_nom: "RIVAY", _prenoms: "Claude", _rue: "24 rue de Montreuil", _cp: "75020", _ville: "Paris", _courriel: "no_adr1@vol.org", _genre: "Homme", _age: 20, _idCand: 10101 },
    {_nom: "BOUNAR", _prenoms: "Mehdi", _rue: "10 Bd. Voltaire", _cp: "75011", _ville: "Paris", _courriel: "no_adr2@vol.org", _genre: "Homme", _age: 25, _idCand: 10201 },
    {_nom:"RATTIER", _prenoms:"Liza", _rue: "44 rue de Montreuil", _cp: "75020", _ville: "Paris", _courriel: "no_adr10@vol.org", _genre:"Femme", _age: 19,_idCand: 11553},
    {_nom:"Edme",_prenoms:"Liza", _rue:"12 rue de Montreuil", _cp:"75020", _ville:"Paris", _courriel:"no_adr3@vol.org", _genre:"Femme", _age:21, _idCand: 12124}, 
    {_nom:"LEE",_prenoms:"Yan Fu", _rue:"113 Av. Gl De Gaule", _cp:"92000", _ville:"Nanterre", _courriel:"no_adr4@vol.org", _genre:"Homme", _age:22, _idCand: 21094},
    {_nom:"VERIN",_prenoms:"Eric", _rue:"10-Bis rue Saint Maur", _cp:"77000", _ville:"Melun", _courriel:"no_adr5@vol.org", _genre:"Homme", _age:33, _idCand:50001},
    {_nom:"LEROY",_prenoms:"Axelle", _rue:"11 Av. Gl De Gaule", _cp:"77100" , _ville: "Meaux" , _courriel: "no_adr6@vol.org" , _genre:"Femme", _age:40, _idCand:55001},
    {_nom:"FISCHER",_prenoms:"Morgane", _rue:"5 rue de la Pierre Levée", _cp:"94500", _ville:"Champigny\/Marne", _courriel:"no_adr7@vol.org", _genre:"Femme", _age:41, _idCand:65002},
    {_nom:"BENALI",_prenoms:"Mira", _rue:"21 rue de Valvin", _cp:"94300", _ville:"Vincennes", _courriel:"no_adr8@vol.org", _genre:"Femme", _age:19,_idCand:11576},
    {_nom:"CEZAIRE",_prenoms:"Joël", _rue:"56 rue de Liege", _cp:"77550", _ville:"Moissy", _courriel:"no_adr9@vol.org", _genre:"Homme", _age:33, _idCand:11131}
  ];

  constructor() { }

  getEtudiants(): Observable<Etudiant[]> {
    return of(this.etudiants);
  }
}
