import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from './shared/material.module';
import { PhoneBookService } from './services/phone-book-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AddItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
