import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [{
    "givenName": "Antonietta",
    "surName": "Cossins",
    "email": "acossins0@uiuc.edu",
    "age": 1,
    "address": "Suite 79"
  }, {
    "givenName": "Valera",
    "surName": "Meegan",
    "email": "vmeegan1@blogtalkradio.com",
    "age": 2,
    "address": "PO Box 75581"
  }, {
    "givenName": "Kiri",
    "surName": "Maccree",
    "email": "kmaccree2@goo.gl",
    "age": 3,
    "address": "Room 850"
  }, {
    "givenName": "Fabien",
    "surName": "Jordine",
    "email": "fjordine3@yahoo.com",
    "age": 4,
    "address": "20th Floor"
  }, {
    "givenName": "Consalve",
    "surName": "Morant",
    "email": "cmorant4@ihg.com",
    "age": 5,
    "address": "PO Box 65682"
  }, {
    "givenName": "Brandais",
    "surName": "Abercromby",
    "email": "babercromby5@noaa.gov",
    "age": 6,
    "address": "Room 647"
  }, {
    "givenName": "Issiah",
    "surName": "Kelk",
    "email": "ikelk6@gmpg.org",
    "age": 7,
    "address": "Suite 10"
  }, {
    "givenName": "Terrence",
    "surName": "Meritt",
    "email": "tmeritt7@zdnet.com",
    "age": 8,
    "address": "Apt 1583"
  }, {
    "givenName": "Alessandra",
    "surName": "Bonnavant",
    "email": "abonnavant8@fotki.com",
    "age": 9,
    "address": "Apt 641"
  }, {
    "givenName": "Reinold",
    "surName": "Polland",
    "email": "rpolland9@webeden.co.uk",
    "age": 10,
    "address": "5th Floor"
  }, {
    "givenName": "Tawnya",
    "surName": "Dreakin",
    "email": "tdreakina@ed.gov",
    "age": 11,
    "address": "Room 1524"
  }, {
    "givenName": "Avivah",
    "surName": "Pittem",
    "email": "apittemb@jigsy.com",
    "age": 12,
    "address": "20th Floor"
  }, {
    "givenName": "Thedric",
    "surName": "Vlach",
    "email": "tvlachc@creativecommons.org",
    "age": 13,
    "address": "Apt 1080"
  }, {
    "givenName": "Aldridge",
    "surName": "Chalfont",
    "email": "achalfontd@google.de",
    "age": 14,
    "address": "Room 652"
  }, {
    "givenName": "Rutherford",
    "surName": "Lechelle",
    "email": "rlechellee@amazon.de",
    "age": 15,
    "address": "Apt 146"
  }, {
    "givenName": "Kile",
    "surName": "Hearfield",
    "email": "khearfieldf@google.com.hk",
    "age": 16,
    "address": "PO Box 90265"
  }, {
    "givenName": "Rafa",
    "surName": "Rodenhurst",
    "email": "rrodenhurstg@stumbleupon.com",
    "age": 17,
    "address": "Room 1066"
  }, {
    "givenName": "Anstice",
    "surName": "Meneyer",
    "email": "ameneyerh@dell.com",
    "age": 18,
    "address": "Apt 1308"
  }, {
    "givenName": "Cathleen",
    "surName": "Leythley",
    "email": "cleythleyi@illinois.edu",
    "age": 19,
    "address": "PO Box 22074"
  }, {
    "givenName": "Ashleigh",
    "surName": "Patemore",
    "email": "apatemorej@indiegogo.com",
    "age": 20,
    "address": "Room 1249"
  }]
}
