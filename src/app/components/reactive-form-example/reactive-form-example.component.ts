import { Component, inject } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-reactive-form-example',
  imports: [PersonTableComponent, SimpleDatatableComponent, EpersonReactiveFormComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  // personService = inject(PersonService);
  currentPerson: EPerson | undefined;
  persons: EPerson[] = [];

  onPerson(data: EPerson) {
    // console.log("Father>>>", data);
    this.currentPerson = data;
    // this.persons.push(data); // το Angular δεν καταλαβαίνει ό,τι γίνονται αλλαγές
    this.persons = [...this.persons, data]  // καινούργιο array που περιέχει ό,τι και το this.persons συν data
    // this.personService.modifiedDataTable.set(true); // αλλάζω τη μεταβλητή modifiedDataTable από false σε true
    // console.log("Father", this.persons);
  }
}
