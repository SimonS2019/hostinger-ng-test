import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model'; // Import the Note interface

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes: Note[] = []; // Ensure notes is typed as an array of Note

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }

  removeNote(index: number) {
    this.notesService.removeNote(index);
    this.notes = this.notesService.getNotes(); // Update the view
  }
}