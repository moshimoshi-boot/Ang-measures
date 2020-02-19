import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MyAppComponent } from './myApp.component';
import { HeaderComponent } from './Menu/header.componemt';
import { HeaderService } from './Service/note.service'

@NgModule({
  declarations: [
    MyAppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [
    MyAppComponent
  ]
})
export class MyAppModule { }
