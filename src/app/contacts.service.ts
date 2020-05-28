import {Contact} from './models/contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

interface ContactsListResponse {
  items: Contact[];
}

interface ContactResponse {
  item: Contact;
}

@Injectable()
export class ContactsService {
  contacts: Contact[];

  constructor(private http: HttpClient) {
  }

  getContacts(term: string): Observable<Contact[]> {
    const url = 'http://localhost:4201/api/contacts';
    return this.http.get<ContactsListResponse>(url).pipe(map(data => data.items));
  }

  getContactById(id: number) {
    const url = `http://localhost:4201/api/contacts/${id}`;
    return this.http.get<ContactResponse>(url).pipe(map(data => data.item));
  }

  updateContact(contact: Contact) {
    const url = `http://localhost:4201/api/contacts/${contact.id}`;
    return this.http.put(url, contact);
    // return this.http.get<ContactResponse>(url).pipe(map(data => data.item));
  }

}
