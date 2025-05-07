import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// FormControl: δήλωση στη φόρμα ποια είναι αυτή
// FormGroup: δήλωση ομάδων πεδίων που το υλοποιούν
// ReactiveFormsModule: αναγνώριση λέξεων-κλειδιών στο template

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),  // σαν το "required" element attribute
    surName: new FormControl('', Validators.required),
    age: new FormControl('18', [   // πολλαπλοί validators, επομένως σε array
      Validators.required,
      Validators.pattern('[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    education: new FormControl('', Validators.required)
  });
}
