import {Component, OnInit } from '@angular/core';
import {Specialite} from '../../models/specialite';
import {SpecService} from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  specialites: Specialite[] = [];

  constructor(private SpecService: SpecService) { }

  ngOnInit(): void {
    this.getSpecialites();
  }

  getSpecialites(): void {
    this.SpecService.getSpecialites()
      .subscribe(Specialite => this.specialites = Specialite);
  }
}