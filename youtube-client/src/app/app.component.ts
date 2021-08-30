import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  public loadedResults = false;

  onDisplayResults(answer: boolean): void {
    this.loadedResults = answer;
  }
}
