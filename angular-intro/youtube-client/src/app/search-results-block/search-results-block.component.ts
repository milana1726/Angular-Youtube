import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/header/search-input/video.interface';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.css']
})
export class SearchResultsBlockComponent implements OnInit {

    videos: Video[] = [];

  constructor() {
    //do nothing
  }

  ngOnInit(): void {
    //do nothing
  }

}
