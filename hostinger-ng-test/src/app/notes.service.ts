import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: string[] = [];

  constructor() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  getNotes(): string[] {
    return this.notes;
  }

  addNote(note: string): void {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}