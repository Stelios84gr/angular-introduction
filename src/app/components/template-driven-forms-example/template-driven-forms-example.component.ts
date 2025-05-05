import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-template-driven-forms-example',
  imports: [EpersonTemplateDrivenFormComponent, SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './template-driven-forms-example.component.html',
  styleUrl: './template-driven-forms-example.component.css'
})
export class TemplateDrivenFormsExampleComponent {

}
