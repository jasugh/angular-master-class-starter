import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, switchMap} from 'rxjs/operators';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts$ = this.terms$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      startWith(''),
      switchMap(term => this.contactsService.getContacts(term))
    );
  }

  search(term: string) {
    this.contactsService.getContacts(term);
  }
}
