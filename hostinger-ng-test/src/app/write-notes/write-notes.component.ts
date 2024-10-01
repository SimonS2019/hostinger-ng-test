import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.css']
})
export class WriteNotesComponent {
  newNote: Note = {
    title: '',
    subtitle: '',
    date: new Date(),
    details: '',
    creator: ''
  };
  noteAddedSuccess: boolean = false; // Property to track success state

  constructor(private notesService: NotesService) {}

  addNote() {
    this.notesService.addNote(this.newNote);
    this.noteAddedSuccess = true; // Set success state to true
    this.resetNewNote();

    // Hide the success message after 3 seconds
    setTimeout(() => {
      this.noteAddedSuccess = false;
    }, 3000);
  }

  resetNewNote() {
    this.newNote = {
      title: '',
      subtitle: '',
      date: new Date(),
      details: '',
      creator: ''
    };
  }
}