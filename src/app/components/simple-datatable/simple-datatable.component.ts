import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined; // δέχεται data από parent component
  @Output() personClicked = new EventEmitter<EPerson>() // στέλνει data με δομή EPerson σε parent component

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson): void {
    console.log(sortKey);
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key!==sortKey) {  // αν το εκάστοτε key του sortOrder δεν είναι το sortKey, παίρνει τιμή 'none'
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }

    console.log(this.sortOrder);
  }

  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey] === 'asc') return '\u2191'
    else if (this.sortOrder[sortKey] === 'desc') return '\u2193'
    else return '';
  }

  onPersonClicked(person: EPerson) {
    console.log("Person>>", person)
    this.personClicked.emit(person);  // ενεργοποιώντας το event personClicked στέλνει person
  }
}