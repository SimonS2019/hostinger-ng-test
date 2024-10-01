import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model'; // Import the Note interface

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  filteredNotes: Note[] = []; // Ensure filteredNotes is typed as an array of Note

  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.filterNotes();
    });
  }

  filterNotes() {
    const allNotes = this.notesService.getNotes();
    this.filteredNotes = allNotes.filter(note => 
      note.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      note.subtitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      note.details.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      note.creator.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}