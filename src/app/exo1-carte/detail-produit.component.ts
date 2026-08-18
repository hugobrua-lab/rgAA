import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PRODUITS } from '../produit';

@Component({
  selector: 'app-detail-produit',
  imports: [RouterLink, CurrencyPipe],
  template: `
    @if (produit) {
      <h1>{{ produit.nom }}</h1>
      <p>Prix : {{ produit.prix | currency:'EUR' }}</p>
    } @else {
      <h1>Produit introuvable</h1>
    }
    <a routerLink="/produits">Retour aux produits</a>
  `,
})
export class DetailProduitComponent {
  private route = inject(ActivatedRoute);
  produit = PRODUITS.find(
    (p) => p.id === Number(this.route.snapshot.paramMap.get('id')),
  );
}
