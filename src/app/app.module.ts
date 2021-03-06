import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChipsSearchComponentComponent } from './components/chips-search-component/chips-search-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NavbarComponent,
    ChipsSearchComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
