import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactsMaterialModule} from './contacts-material.module';

import {ContactsAppComponent} from './app.component';
import {ContactsService} from './contacts.service';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactDetailComponent,
    ContactsEditorComponent],
  providers: [
    ContactsService
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}
