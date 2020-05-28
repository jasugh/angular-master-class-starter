import {Routes } from '@angular/router'
import { ContactsListComponent} from './contacts-list/contacts-list.component';
import { ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';

export const APP_ROUTES: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component:  ContactDetailComponent},
  {path: 'contact/:id/edit', component:  ContactsEditorComponent}
  ];
