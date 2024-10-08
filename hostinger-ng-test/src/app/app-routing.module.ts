import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/write-notes', pathMatch: 'full' },
  { path: 'write-notes', component: WriteNotesComponent },
  { path: 'display-notes', component: DisplayNotesComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'video-gallery', component: VideoGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
