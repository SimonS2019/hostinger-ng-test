import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteNotesComponent,
    DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
