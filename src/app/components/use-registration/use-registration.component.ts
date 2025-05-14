import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-use-registration',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './use-registration.component.html',
  styleUrl: './use-registration.component.css'
})
export class UseRegistrationComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  },
  this.passwordConfirmValidator,
);

// AbstractControl: parent των FormGroup, FormControl, FormArray κτλ.
passwordConfirmValidator(control: AbstractControl): {[key: string]: boolean } | null {
  const form = control as FormGroup;  // με το που συμπληρώνω κάποιο πεδίο στη registration form δημιουργείται ένα formGroup με τα πεδία που έχουν συμπληρωθεί
  const password = form.get('password')?.value; // ελέγχει αν στην παραπάνω μεταβλητή υπάρχει password
  const confirmPassword = form.get('confirmPassword')?.value 

  if(password && confirmPassword && password!=confirmPassword) {
    form.get('confirmPassword')?.setErrors({passwordMismatch: true})
    return {passwordMismatch: true}
  }

  return null;
}

  onSubmit() {
    const data = this.form.value;
    console.log("FORM DATA>>>", data)
  }
}
