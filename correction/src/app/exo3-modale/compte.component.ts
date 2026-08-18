import { Component, ElementRef, ViewChild } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

// CORRIGÉ EXERCICE 3
@Component({
  selector: 'app-compte',
  imports: [A11yModule],
  templateUrl: './compte.component.html',
})
export class CompteComponent {
  modaleOuverte = false;

  @ViewChild('declencheur')
  declencheur!: ElementRef<HTMLButtonElement>;

  fermer(): void {
    this.modaleOuverte = false;
    // Le focus revient sur le bouton qui a ouvert la modale
    this.declencheur.nativeElement.focus();
  }

  confirmer(): void {
    alert('Compte supprimé (pour de faux).');
    this.fermer();
  }
}
