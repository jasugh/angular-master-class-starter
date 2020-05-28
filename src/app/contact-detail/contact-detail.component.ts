import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs';

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact$ = this.contactsService.getContactById(+id);
  }
}
