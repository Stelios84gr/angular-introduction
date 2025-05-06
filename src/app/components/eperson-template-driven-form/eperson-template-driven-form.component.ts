import { Component, EventEmitter, Output, ViewChild } from '@angular/core'; // ViewChild: αναγνωρίζει και παίρνει elements απ' τη φόρμα στο component για χρήση
import { CommonModule } from '@angular/common'; // αναγνωρίζει το json pipe στο template
import { FormsModule, NgForm } from '@angular/forms'; // NgForm: για να "μάθει" η κλάση τα data ενός πεδίου form
import { MatSelectModule } from '@angular/material/select'; // για μορφοποίηση πεδίων τύπου select
import { MatInputModule } from '@angular/material/input'; // για μορφοποίηση πεδίων τύπου input
import { MatFormFieldModule } from '@angular/material/form-field';  // για μορφοποίηση πεδίων τύπου field
import { MatButtonModule } from '@angular/material/button'; // για μορφοποίηση πεδίων τύπου button
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [ CommonModule, FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
// {static:false}: ψάχνει για το συγκεκριμένο DOM element (eForm) αφού ολοκληρωθεί το φόρτωμα του template
// form: Ngform | undefined: εκχωρεί το εν λόγω DOM element στο πεδίο form που είναι τύπου NgForm ή τίποτα
export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>()
  @ViewChild('eForm', {static:false}) form: NgForm | undefined;
  onSubmit(value: EPerson) {
    console.log(value);
    console.log(this.form);
    console.log(this.form?.form.get('givenName')?.value);
    // OR console.log(this.form?.controls['givenName'].value)
    this.person.emit(value);
  }

  onSetValue() {
      // εκχωρεί τιμές σε όλα τα πεδία της φόρμας
    this.form?.setValue({
      givenName:"John",
      surName: "Doe",
      age: 30,
      email: "john@aueb.gr",
      education: "Bachelor's degree"
    });

    // εκχωρεί τιμές σε ένα συγκεκριμένο πεδίο της φόρμας
    this.form?.controls['givenName'].setValue("aav");
  }
}
