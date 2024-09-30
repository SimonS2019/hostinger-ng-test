import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  filteredNotes: string[] = [];

  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.filterNotes();
    });
  }

  filterNotes() {
    const allNotes = this.notesService.getNotes();
    this.filteredNotes = allNotes.filter(note => note.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}