import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/write-notes', pathMatch: 'full' },
  { path: 'write-notes', component: WriteNotesComponent },
  { path: 'display-notes', component: DisplayNotesComponent },
  { path: 'search', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }