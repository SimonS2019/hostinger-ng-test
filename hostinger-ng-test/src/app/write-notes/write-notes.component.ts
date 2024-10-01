import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model'; // Import the Note interface

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.css']
})
export class WriteNotesComponent {
  newNote: Partial<Note> = {
    title: '',
    subtitle: '',
    date: new Date(),
    details: '',
    creator: ''
  };

  constructor(private notesService: NotesService) {}

  addNote() {
    if (this.newNote.title?.trim() && this.newNote.details?.trim()) {
      const note: Note = {
        title: this.newNote.title.trim(),
        subtitle: this.newNote.subtitle?.trim() || '',
        date: new Date(),
        details: this.newNote.details.trim(),
        creator: this.newNote.creator?.trim() || 'Unknown'
      };
      this.notesService.addNote(note);
      this.resetNewNote();
    }
  }

  private resetNewNote() {
    this.newNote = {
      title: '',
      subtitle: '',
      date: new Date(),
      details: '',
      creator: ''
    };
  }
}