import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './exo1-carte/produits.component';
import { DetailProduitComponent } from './exo1-carte/detail-produit.component';
import { InscriptionComponent } from './exo2-formulaire/inscription.component';
import { CompteComponent } from './exo3-modale/compte.component';

// CORRIGÉ EXERCICE 4 : un titre unique par route
export const routes: Routes = [
  { path: '', component: AccueilComponent, title: 'Accueil — TP RGAA' },
  { path: 'produits', component: ProduitsComponent, title: 'Produits — TP RGAA' },
  { path: 'produits/:id', component: DetailProduitComponent, title: 'Détail produit — TP RGAA' },
  { path: 'inscription', component: InscriptionComponent, title: 'Inscription — TP RGAA' },
  { path: 'compte', component: CompteComponent, title: 'Mon compte — TP RGAA' },
];
