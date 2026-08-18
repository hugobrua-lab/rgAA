import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// EXERCICE 4 : à chaque changement de route, rien n'est annoncé et le focus
// reste où il était. Pistes : Router.events (NavigationEnd), service Title,
// LiveAnnouncer (@angular/cdk/a11y), lien d'évitement, <main tabindex="-1">.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {}
