import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { filter } from 'rxjs';

// CORRIGÉ EXERCICE 4 : focus replacé + page annoncée à chaque navigation.
//
// Piège découvert au test : si announce() part en même temps que focus(),
// le lecteur d'écran priorise la parole liée au focus et jette le message
// de la région live. On diffère donc l'annonce de ~150 ms.
// (Le changement de document.title seul n'est jamais lu dans une SPA :
// il n'est prononcé qu'au chargement réel d'une page.)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(router: Router, titre: Title, annonceur: LiveAnnouncer) {
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        document.getElementById('contenu')?.focus();
        setTimeout(() => annonceur.announce(titre.getTitle()), 150);
      });
  }
}
