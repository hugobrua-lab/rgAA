export interface Produit {
  id: number;
  nom: string;
  prix: number;
  image: string;
}

export const PRODUITS: Produit[] = [
  { id: 1, nom: 'Casque audio', prix: 89.9, image: 'https://picsum.photos/seed/casque/400/260' },
  { id: 2, nom: 'Clavier mécanique', prix: 129, image: 'https://picsum.photos/seed/clavier/400/260' },
  { id: 3, nom: 'Souris ergonomique', prix: 59.5, image: 'https://picsum.photos/seed/souris/400/260' },
];
