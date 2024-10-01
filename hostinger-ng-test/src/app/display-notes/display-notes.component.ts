import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model'; // Import the Note interface

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
})
export class DisplayNotesComponent implements OnInit {
  notes: Note[] = []; // Ensure notes is typed as an array of Note

  constructor(private notesService: NotesService) {}

  async ngOnInit() {
    this.notes = await this.notesService.getNotes();
  }

  async removeNote(id: number) {
    await this.notesService.removeNote(id);
    this.notes = await this.notesService.getNotes(); // Update the view
  }

  async downloadNotes() {
    await this.notesService.downloadNotes();
  }
}
