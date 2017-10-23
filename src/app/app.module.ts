import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import {RemoteCallService} from "./services/remote-call.service";
import { ShowItemsComponent } from './components/show-items/show-items.component';
import {ItemsService} from "./services/items.service";
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowItemsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule
  ],
  providers: [
    RemoteCallService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
