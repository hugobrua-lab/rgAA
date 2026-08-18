# Dossier CORRECTION — réservé au formateur

Fichiers corrigés du TP, en miroir de l'arborescence du starter.
Pour voir une solution en action : copiez le fichier corrigé par-dessus
son équivalent dans le projet (même chemin sous `src/`).

| Exercice | Fichiers corrigés |
|---|---|
| 1 — Carte produit | `src/app/exo1-carte/product-card.component.{ts,html}` |
| 2 — Formulaire | `src/app/exo2-formulaire/inscription.component.{ts,html}` |
| 3 — Modale | `src/app/exo3-modale/compte.component.{ts,html}` |
| 4 — Routes & layout | `src/app/app.routes.ts`, `src/app/app.component.{ts,html}` |
| 0 & 4 | `src/styles.css` (lien d'évitement + contraste du footer) |

Astuce : gardez ce dossier hors du dépôt partagé aux stagiaires, ou
mettez-le sur une branche `correction` de votre repo.

Piège à mentionner (exercice 2) : un `@` littéral dans un template Angular
moderne doit s'écrire `&#64;` (sinon il est interprété comme un bloc `@if`).
