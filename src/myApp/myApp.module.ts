import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MyAppComponent } from './myApp.component';
import { NoteComponent } from './Note/note.component';
import { HeaderComponent } from './Menu/header.component';
import { NoteService } from './Service/note.service'

@NgModule({
  declarations: [
    MyAppComponent,
    NoteComponent,
    HeaderComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    NoteService
  ],
  bootstrap: [
    MyAppComponent
  ]
})
export class MyAppModule { }
