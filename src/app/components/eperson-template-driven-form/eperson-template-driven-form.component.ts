import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // NgForm: για να "μάθει" η κλάση τα data ενός πεδίου form
import { MatSelectModule } from '@angular/material/select'; // για μορφοποίηση πεδίων τύπου select
import { MatInputModule } from '@angular/material/input'; // για μορφοποίηση πεδίων τύπου input
import { MatFormFieldModule } from '@angular/material/form-field';  // για μορφοποίηση πεδίων τύπου field
import { MatButtonModule } from '@angular/material/button'; // για μορφοποίηση πεδίων τύπου button

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [ FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {

}
