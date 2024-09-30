import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes: string[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }
}