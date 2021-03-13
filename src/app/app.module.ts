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
import { AdvancedSearchComponentComponent } from './components/advanced-search-component/advanced-search-component.component';
import { IngredientSearchResultComponent } from './components/ingredient-search-result/ingredient-search-result.component';
import { IngredientResultScreenComponent } from './components/ingredient-search-result/ingredient-result-screen/ingredient-result-screen.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { DrinkImgPipe } from './pipes/drink-img.pipe';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NavbarComponent,
    ChipsSearchComponentComponent,
    AdvancedSearchComponentComponent,
    IngredientSearchResultComponent,
    IngredientResultScreenComponent,
    CocktailListComponent,
    DrinkImgPipe,
    IngredientSearchComponent,
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
