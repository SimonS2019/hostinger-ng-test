import { Component } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.css']
})
export class WriteNotesComponent {
  newNote: string = '';

  constructor(private notesService: NotesService) {}

  addNote() {
    if (this.newNote.trim()) {
      this.notesService.addNote(this.newNote.trim());
      this.newNote = '';
    }
  }
}