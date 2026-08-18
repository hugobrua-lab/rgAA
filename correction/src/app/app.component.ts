import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { filter } from 'rxjs';

// CORRIGÉ EXERCICE 4 : focus replacé + page annoncée à chaque navigation
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
        annonceur.announce(titre.getTitle());
      });
  }
}
