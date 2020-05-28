import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.scss']
})
export class ContactsEditorComponent implements OnInit {
  contact$: Observable<Contact>;
contact: Contact
  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.contactsService.getContactById(+id).subscribe(contact =>
      this.contact = contact);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goBack());
  }

  cancel() {
    this.goBack();
  }

  private goBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
