import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.interface';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

    @Input() result!: ISearchItem;
    public publicationDate = '';

  ngOnInit(): void {
    this.publicationDate = this.result.snippet.publishedAt;
  }
}
