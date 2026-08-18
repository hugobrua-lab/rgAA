import { Component } from '@angular/core';

// EXERCICE 3 : modale ouverte = le focus reste derrière, Tab se promène
// dans toute la page, Échap ne ferme rien, le focus est perdu à la fermeture.
// Pistes : role="dialog", aria-modal, aria-labelledby,
// A11yModule (@angular/cdk/a11y) avec cdkTrapFocus, ViewChild + focus().
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
})
export class CompteComponent {
  modaleOuverte = false;

  confirmer(): void {
    alert('Compte supprimé (pour de faux).');
    this.modaleOuverte = false;
  }
}
