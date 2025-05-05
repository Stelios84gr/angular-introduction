import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined; // θα εισαχθεί κάτι που θα εκχωρηθεί στη μεταβλητή "personInput" και θα είναι είτε τύπου Person είτε EPerson είτε undefined
  name = "Thanassis"

  person = {
    givenName: 'Thanassis',
    surName: 'Androutsos',
    age: 58,
    email: 'athanasis@aueb.gr'
  }
}