import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../produit';

// CORRIGÉ EXERCICE 1
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) produit!: Produit;

  ajouterAuPanier(): void {
    alert(`« ${this.produit.nom} » ajouté au panier.`);
  }
}
