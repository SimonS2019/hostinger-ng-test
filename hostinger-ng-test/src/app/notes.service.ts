import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { Note } from './models/note.model';

interface NotesDB extends DBSchema {
  notes: {
    key: number;
    value: Note;
  };
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private dbPromise: Promise<IDBPDatabase<NotesDB>>;

  constructor() {
    this.dbPromise = openDB<NotesDB>('notes-db', 1, {
      upgrade(db) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    });
  }

  async getNotes(): Promise<Note[]> {
    const db = await this.dbPromise;
    return await db.getAll('notes');
  }

  async addNote(note: Note): Promise<void> {
    const db = await this.dbPromise;
    await db.add('notes', note);
  }

  async removeNote(id: number): Promise<void> {
    const db = await this.dbPromise;
    await db.delete('notes', id);
  }
}