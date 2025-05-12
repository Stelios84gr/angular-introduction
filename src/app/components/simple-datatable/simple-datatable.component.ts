import { Component, EventEmitter, Input, Output, SimpleChanges, effect, inject } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es';
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css',
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined; // δέχεται data από parent component
  @Output() personClicked = new EventEmitter<EPerson>(); // στέλνει data με δομή EPerson σε parent component

  // personService = inject(PersonService);

  epersonsData: EPerson[] = []; // δεν χρειάζεται | undefined λόγω της if παρακάτω

  // χρησιμοποιείται όταν έχουμε @Input για να δείξει πως έχουν γίνει αλλαγές στο data και να γίνουν κάποιες διαδικασίες - changes: SimpleChanges: όταν γίνονται αλλαγές στο data, να γίνει το περιεχόμενο της μεθόδου
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.epersonsData = this.data;
    }
  }

  // constructor(){
  //   effect(() => {
  //     if(this.personService.modifiedDataTable()) {
  //       console.log("SIGNAL>>>", this.data);
  //       this.epersonsData = this.data;
  //     }
  //     this.personService.modifiedDataTable.set(false);
  //   })
  // }

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  };

  sortData(sortKey: keyof EPerson): void {
    // console.log(sortKey);'

    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.epersonsData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.epersonsData = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        // αν το εκάστοτε key του sortOrder δεν είναι το sortKey, παίρνει τιμή 'none'
        this.sortOrder[key as keyof EPerson] = 'none';
      }
    }

    console.log('Simple DataaTable', this.data);
  }

  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey] === 'asc') return '\u2191';
    else if (this.sortOrder[sortKey] === 'desc') return '\u2193';
    else return '';
  }

  onPersonClicked(person: EPerson) {
    console.log('Person>>', person);
    this.personClicked.emit(person); // ενεργοποιώντας το event personClicked στέλνει person
  }
}