import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchResponse } from '../models/search-response.interface';
import response from './../mockups/response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public response: ISearchResponse = response;
  public myMethodSubject = new Subject<any>();

  saveInput(data: string): void {
    this.myMethodSubject.next(data);
  }
}
