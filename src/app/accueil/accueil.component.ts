import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <h1>TP Accessibilité RGAA</h1>
    <p>Chaque page de ce mini-site correspond à un exercice du TP :</p>
    <ul>
      <li><strong>Produits</strong> — exercice 1 : la carte produit (sémantique)</li>
      <li><strong>Inscription</strong> — exercice 2 : le formulaire accessible</li>
      <li><strong>Mon compte</strong> — exercice 3 : la modale de confirmation</li>
      <li><strong>Toutes les pages</strong> — exercice 4 : routes, titres et annonces</li>
    </ul>
    <p>
      Commencez par l'exercice 0 : parcourez ce site au clavier seul,
      puis lancez un scan axe DevTools (ouvrez l'aperçu dans un onglet dédié).
    </p>
  `,
})
export class AccueilComponent {}
