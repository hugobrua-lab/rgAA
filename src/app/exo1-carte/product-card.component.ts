import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Produit } from '../produit';

// EXERCICE 1 : ce composant est inutilisable au clavier et muet au lecteur
// d'écran. Corrigez le template SANS changer le rendu visuel.
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) produit!: Produit;

  constructor(private router: Router) {}

  ajouterAuPanier(): void {
    alert(`« ${this.produit.nom} » ajouté au panier.`);
  }

  voirDetails(): void {
    this.router.navigate(['/produits', this.produit.id]);
  }
}
