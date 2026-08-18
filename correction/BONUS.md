# Corrigé — Exercice 5 (bonus) : critères oubliés

## 1. Langue (8.7)
```html
<footer class="pied">
  TP RGAA — <span lang="en">Made with Angular</span>
</footer>
```

## 2. Tableau de données (thématique 5)
```html
<table>
  <caption>Dernières commandes</caption>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Produit</th>
      <th scope="col">Montant</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>12/08</td><td>Casque audio</td><td>89,90 €</td></tr>
    <tr><td>02/08</td><td>Clavier mécanique</td><td>129,00 €</td></tr>
  </tbody>
</table>
```

## 3. Nouvelle fenêtre (13.2)
```html
<a href="https://accessibilite.numerique.gouv.fr"
   target="_blank" rel="noopener">
  Référentiel RGAA
  <span class="sr-only">(nouvelle fenêtre)</span>
</a>
```
`rel="noopener"` accompagne toujours `target="_blank"` (sécurité).

## 4. Animations (13.8)
```css
.btn--danger { animation: pulse 1.5s infinite; }

@keyframes pulse {
  50% { transform: scale(1.05); }
}

@media (prefers-reduced-motion: reduce) {
  .btn--danger { animation: none; }
}
```
Variante : couper toutes les animations globalement sous ce media query.
