import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { UserInfoComponent } from './header/user-info/user-info.component';
import { CardComponent } from './search-results-block/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBlockComponent,
    SearchResultsBlockComponent,
    SearchInputComponent,
    UserInfoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
