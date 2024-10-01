import { Injectable } from '@angular/core';
import { Note } from './models/note.model'; // Update the import path

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[] = [];

  constructor() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}