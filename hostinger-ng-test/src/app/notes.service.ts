import { Injectable } from '@angular/core';
import { Note } from './models/note.model';

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

  removeNote(index: number): void {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  downloadNotes(): void {
    const notes = this.getNotes();
    const notesJson = JSON.stringify(notes, null, 2);
    const blob = new Blob([notesJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}