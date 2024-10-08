import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteNotesComponent,
    DisplayNotesComponent,
    SearchResultsComponent,
    GalleryComponent,
    VideoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
