import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { PRODUITS } from '../produit';

@Component({
  selector: 'app-produits',
  imports: [ProductCardComponent],
  template: `
    <h1>Nos produits</h1>
    <div class="grille">
      @for (p of produits; track p.id) {
        <app-product-card [produit]="p" />
      }
    </div>
  `,
})
export class ProduitsComponent {
  produits = PRODUITS;
}
