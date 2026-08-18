# TP RGAA — Consignes des exercices

Règle générale : le rendu visuel ne doit pas changer, on corrige la structure.
Validez chaque exercice au clavier seul + scan axe DevTools (aperçu ouvert
dans un onglet dédié), et si possible au lecteur d'écran.

---

## Exercice 0 — Audit express (10 min)

Sur ce site (ou votre application) :
1. **Passe clavier** : parcourez tout avec Tab, Maj+Tab, Entrée, Espace, Échap.
   Le focus est-il visible ? L'ordre logique ? Tout est-il atteignable ?
2. **Passe axe DevTools** : lancez un scan, classez les violations par
   thématique RGAA (images, couleurs, formulaires, structuration...).

Gardez la liste : en fin de TP, vous devez savoir corriger l'essentiel.

---

## Exercice 1 — La carte produit (15 min)
Fichier : `src/app/exo1-carte/product-card.component.html`
Thématiques RGAA : 1 (images), 6 (liens), 7 (scripts), 9 (structuration)

1. Testez au clavier : constatez qu'aucune action n'est atteignable.
2. Remplacez chaque élément par la balise correspondant à son rôle réel
   (action, navigation, titre, prix).
3. Donnez une alternative textuelle pertinente à l'image.
4. « Voir le détail » est identique sur toutes les cartes : faites en sorte
   qu'un lecteur d'écran sache de quel produit il s'agit, sans changer le
   visuel (une classe `.sr-only` est fournie dans `styles.css`).

Validation : Tab atteint bouton et lien, Entrée les déclenche ; axe ne
remonte plus « image-alt ».

---

## Exercice 2 — Le formulaire accessible (20 min)
Fichier : `src/app/exo2-formulaire/inscription.component.html`
Thématique RGAA : 11 (formulaires)

1. Associez chaque champ à une vraie étiquette (`label` + `for`/`id`).
   Le placeholder n'est pas une étiquette : il disparaît à la saisie.
2. Indiquez les champs obligatoires dans l'étiquette (+ `required`).
3. Reliez le message d'erreur au champ avec `aria-describedby`, et pilotez
   `aria-invalid` depuis l'état du contrôle.
4. Remplacez le faux bouton par un vrai bouton de soumission.
5. Bonus : à la soumission d'un formulaire invalide, déplacez le focus sur
   le premier champ en erreur.

Validation : au lecteur d'écran, l'arrivée sur le champ e-mail annonce son
étiquette, son caractère obligatoire et l'erreur si elle est présente.

---

## Exercice 3 — La modale de confirmation (15 min)
Fichiers : `src/app/exo3-modale/compte.component.*`
Thématiques RGAA : 7 (scripts), 12 (navigation)

1. Constatez au clavier : le focus reste derrière la modale.
2. Donnez son rôle à la modale : `role="dialog"`, `aria-modal="true"`,
   nom via `aria-labelledby` pointant sur le titre.
3. Piégez le focus avec le CDK (déjà installé) : importez `A11yModule`
   depuis `@angular/cdk/a11y`, utilisez `cdkTrapFocus` /
   `cdkTrapFocusAutoCapture`.
4. Échap doit fermer la modale.
5. À la fermeture, le focus revient sur le bouton déclencheur
   (`@ViewChild` + `focus()`).

Validation : modale ouverte, Tab boucle dans ses seuls éléments ; Échap
ferme ; le focus revient sur « Supprimer le compte ».

---

## Exercice 4 — SPA : routes, titres et annonces (15 min)
Fichiers : `src/app/app.routes.ts`, `src/app/app.component.*`
Thématiques RGAA : 8 (éléments obligatoires), 12 (navigation)

1. Donnez un titre unique à chaque route (propriété `title` des Routes).
2. Rendez le conteneur principal focusable :
   `<main id="contenu" tabindex="-1">`.
3. Abonnez-vous aux `NavigationEnd` du Router : à chaque navigation,
   replacez le focus sur ce conteneur.
4. Annoncez la nouvelle page avec `LiveAnnouncer` (CDK), en lisant le
   titre courant via le service `Title`.
5. Bonus : lien d'évitement « Aller au contenu » en premier élément
   focusable de la page.

Validation : à chaque changement de route, le titre d'onglet change, le
lecteur d'écran annonce la page, Tab repart du contenu.

---

## Exercice 5 (bonus) — La chasse aux critères oubliés

Rien à corriger cette fois : ajoutez du contenu conforme du premier coup.

1. **Langue (8.7)** : dans le pied de page, ajoutez « Made with Angular »
   balisé pour être prononcé en anglais par le lecteur d'écran.
2. **Tableau (thématique 5)** : sur Mon compte, ajoutez un tableau
   « Dernières commandes » (date, produit, montant) avec titre de tableau
   et en-têtes de colonnes correctement déclarés.
3. **Nouvelle fenêtre (13.2)** : dans le pied de page, un lien vers le
   référentiel RGAA ouvert dans un nouvel onglet, annoncé aux lecteurs
   d'écran (`.sr-only`).
4. **Animations (13.8)** : une animation CSS (ex. pulsation du bouton
   « Supprimer le compte ») désactivée sous `prefers-reduced-motion`.

Validation : changement de voix sur la phrase anglaise ; tableau navigable
cellule par cellule avec annonce des en-têtes ; « nouvelle fenêtre »
annoncé ; animation coupée quand « Réduire les animations » est activé.

---

## Aparté — acronymes & prononciation (démo, rien à coder)

Sur le sigle « RGAA », essayez VO + W (deux pressions : épellation).
La prononciation appartient au lecteur d'écran et à son utilisateur :
côté code, on écrit le sigle proprement, on donne sa signification en
toutes lettres à la première occurrence (éventuellement `<abbr>`), et
c'est tout. Jamais de `aria-label="R G A A"` ni de « R.G.A.A. » : ça
casse le braille, la recherche et les autres lecteurs d'écran.
