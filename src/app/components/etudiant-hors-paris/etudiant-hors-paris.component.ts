import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etutiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiantHorsParis: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantHorsParis = this.etudiantService.getEtudiantsHorsParis();
  }
}
