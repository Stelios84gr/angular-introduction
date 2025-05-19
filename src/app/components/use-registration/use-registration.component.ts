import { Component, inject, signal } from '@angular/core';
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

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

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
  userService = inject(UserService);

  emailErrorMessage = signal('');

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
    // const data = this.form.value as User;  // αυτό φέρνει και το confirmPassword
    // OR
    const data: User = {
      'username': this.form.get('username')?.value || '', // αν είναι κενό, ''
      'password': this.form.get('password')?.value || '',
      'name': this.form.get('name')?.value || '',
      'surname': this.form.get('surname')?.value || '',
      'email': this.form.get('email')?.value || '',
      'address': {
        'area': this.form.get('area')?.value || '',
        'road': this.form.get('road')?.value || '',
      }
    }
    console.log("FORM DATA>>>", data)
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User Saved", response);
        },
        error: (response) => {
          console.log("User not saved", response);
        }
      })
  }

  check_duplicate_email() {
    const email = this.form.get("email")?.value;

    if(this.form.controls.email.hasError('required')) {
      this.emailErrorMessage.set('Email is required')
    } else if (this.form.controls.email.hasError('email')) {
      this.emailErrorMessage.set('Email not valid');
    }

    if(email) {
      this.userService.check_duplicate_email(email)
        .subscribe({
          next: (response) => { // θα τρέξει όταν το result έχει status 200
            console.log(response);
            this.form.get('email')?.setErrors(null);
          },
          error: (response) => {  // θα τρέξει όταν το result έχει status 400
            console.log(response);
            const message = response.data;
            console.log(message);
            this.form.get('email')?.setErrors({duplicateEmail: true});  // δημιουργία validator με τιμή true
          }
        })
    }
  }
}