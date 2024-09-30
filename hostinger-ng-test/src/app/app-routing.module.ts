import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';

const routes: Routes = [
  { path: '', redirectTo: '/write-notes', pathMatch: 'full' },
  { path: 'write-notes', component: WriteNotesComponent },
  { path: 'display-notes', component: DisplayNotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }