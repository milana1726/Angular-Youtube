import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logoImagePath = '../../assets/logo.png';
  public loginImagePath = '../../assets/login.png';
  public isFilterOn = false;

  @Output() public showResults = new EventEmitter<boolean>();
  public searchInput!: string;

  public constructor(private youtubeService: YoutubeService) {
    this.youtubeService.saveInput(this.searchInput);
  }

  ngOnInit(): void {
    //ngOnInit
  }

  onFilterToggle(): void {
    this.isFilterOn = !this.isFilterOn;
  }

  onShowingResults(answer: boolean): void {
    this.showResults.emit(answer);
  }
}
