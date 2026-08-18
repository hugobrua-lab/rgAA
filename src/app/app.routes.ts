import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './exo1-carte/produits.component';
import { DetailProduitComponent } from './exo1-carte/detail-produit.component';
import { InscriptionComponent } from './exo2-formulaire/inscription.component';
import { CompteComponent } from './exo3-modale/compte.component';

// EXERCICE 4 : aucune route n'a de titre. À vous de jouer (propriété `title`).
export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'produits/:id', component: DetailProduitComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'compte', component: CompteComponent },
];
