import { Component } from '@angular/core';
import {
  FormControl, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms';

// CORRIGÉ EXERCICE 2 (avec le bonus : focus sur le premier champ en erreur)
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

  get nomInvalide(): boolean {
    const c = this.form.controls.nom;
    return c.invalid && c.touched;
  }

  get emailInvalide(): boolean {
    const c = this.form.controls.email;
    return c.invalid && c.touched;
  }

  envoyer(): void {
    if (this.form.valid) {
      alert('Inscription envoyée !');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
      // Bonus : replacer le focus sur le premier champ en erreur
      document.querySelector<HTMLElement>('input.ng-invalid')?.focus();
    }
  }
}
