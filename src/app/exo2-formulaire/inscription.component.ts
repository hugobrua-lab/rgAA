import { Component } from '@angular/core';
import {
  FormControl, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms';

// EXERCICE 2 : étiquettes absentes (le placeholder n'en est pas une),
// erreur non reliée au champ, faux bouton de soumission.
@Component({
  selector: 'app-inscription',
  imports: [ReactiveFormsModule],
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent {
  form = new FormGroup({
    nom: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  envoyer(): void {
    if (this.form.valid) {
      alert('Inscription envoyée !');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
