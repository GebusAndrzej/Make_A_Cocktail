import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips-search-component',
  templateUrl: './chips-search-component.component.html',
  styleUrls: ['./chips-search-component.component.less']
})
export class ChipsSearchComponentComponent implements OnInit {

  constructor(private http: HttpServiceService) { }

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  ingredientCtrl= new FormControl();

  filteredIngredients: Observable<string[]>;
  ingredients: string[] = ['Lemon']
  allIngredients: string[]= ['Lemon'];

  @ViewChild('ingredientInput',{static:false}) ingredientInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto',{static:false}) matAutocomplete: MatAutocomplete;
  

  ngOnInit() {

    // get ann ingredients from API
    this.http.getAllIngredients().subscribe(r => {
      this.allIngredients=r;
      console.dir(r);
      this.detectInput();
    })

    // filter ingredients on value change
    
  }


  detectInput(){
    this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | null) => ingredient ? this._filter(ingredient) : this.allIngredients.slice())
      );
  }

  //add chip
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our ingredient
    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.ingredientCtrl.setValue(null);
  }

  //remove chip
  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredients.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.ingredientCtrl.setValue(null);
  }


  //filter
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().indexOf(filterValue) === 0);
  }

}
