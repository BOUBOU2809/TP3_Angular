import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etutiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getEtudiants()
      .subscribe(etudiants => this.etudiants = etudiants);
  }
}
