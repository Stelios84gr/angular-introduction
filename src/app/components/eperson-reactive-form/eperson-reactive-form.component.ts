import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';

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
  @Output() person = new EventEmitter<EPerson>()

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

  // OR

  // form = new FormGroup<{
  //   givenName: FormControl<string>,
  //   surName:FormControl<string>,
  //   email:FormControl<string>,
  //   age:FormControl<number>,
  //   education:FormControl<string>
  // }>({
  //   givenName: new FormControl('',{nonNullable:true, validators: Validators.required}),
  //   surName: new FormControl('',{nonNullable:true, validators: Validators.required}),
  //   age: new FormControl(18, { 
  //     nonNullable:true, 
  //     validators:[
  //       Validators.required, 
  //       Validators.min(18),
  //       Validators.max(100)
  //     ]}),
  //    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email]}),
  //    education: new FormControl('', {nonNullable: true, validators: Validators.required})
  // })

  // επιλέγουμε όποια υλοποίηση απ' τις δύο θέλουμε, στη δεύτερη δηλώνουμε τους τύπους δεδομένων και στους validators, ότι δεν μπορεί να είναι null

  onSubmit() {
    if (this.form.valid) {
      //  console.log(this.form.value);
       
       const person: EPerson = {
        givenName: this.form.value.givenName ?? '', // ??: αν είναι undefined, εκχωρείται κενό string
        surName: this.form.value.surName ?? '',
        age: String(this.form.value.age) ?? '', // γιατί στους validators είναι δηλωμένω ως number
        email: this.form.value.email ?? '',
        education: this.form.value.education ?? '',
       }
       this.person.emit(person);  // this.person.emit(person as: EPerson) αν δεν είχε παραπάνω const person: EPerson
       this.form.reset();
    }
    // console.log("Data", data);
    // console.log(this.form);
    // console.log("givenName>>", this.form.controls['givenName'].value);
    // this.form.controls["surName"].setValue("Papakis");  // "setter"
    // console.log(this.form.value);
  }

  onSetValue() {
    this.form.setValue({
      givenName: "Kostas",
      surName: "Lalakis",
      age: "39",
      email: "kostas@aueb.gr",
      education: "Bachelor's degree"
    })
  }
}
