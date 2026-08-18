# TP Accessibilité RGAA — starter Angular

Mini-site volontairement **non conforme**, support des exercices du TP.
Le CDK Angular (`@angular/cdk`) est déjà dans les dépendances.

## Lancer le projet

### Sur StackBlitz (recommandé en formation)
1. Poussez ce dossier sur un dépôt GitHub, puis ouvrez
   `https://stackblitz.com/github/<votre-compte>/<votre-repo>`
   — ou créez un projet « Angular » vierge sur stackblitz.com et
   copiez-y le contenu de `src/` + `package.json`.
2. **Important : ouvrez l'aperçu dans un onglet dédié** (« Open in new tab »).
   axe DevTools, le lecteur d'écran et le test clavier ne sont fiables
   que hors iframe.

### En local
```bash
npm install
npm start   # http://localhost:4200
```

## Correspondance exercices → fichiers

| Exercice | Fichiers |
|---|---|
| 0 — Audit express | tout le site (clavier + axe DevTools) |
| 1 — La carte produit | `src/app/exo1-carte/product-card.component.html` |
| 2 — Le formulaire | `src/app/exo2-formulaire/inscription.component.html` |
| 3 — La modale | `src/app/exo3-modale/compte.component.*` |
| 4 — Routes, titres, annonces | `src/app/app.routes.ts`, `src/app/app.component.*` |

Chaque fichier contient un commentaire `EXERCICE n` rappelant la consigne.
Une classe utilitaire `.sr-only` est fournie dans `src/styles.css`.

Énoncés, critères RGAA visés et corrigés : voir le document
`TP_RGAA_Exercices_Angular.docx`.
