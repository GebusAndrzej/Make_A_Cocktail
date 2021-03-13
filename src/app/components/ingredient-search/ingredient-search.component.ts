import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.less']
})
export class IngredientSearchComponent implements OnInit {


  @Output() ingr = new EventEmitter<string[]>();

  allIngredients : string[]= ['Lemon'];
  filteredIngredients : string[];

  ingrSelect= new FormControl();
  disabled=true;

  constructor(private http: HttpServiceService) { }

  ngOnInit() {

    this.http.getAllIngredients().subscribe(ret => {
      this.allIngredients = ret;
      this.filteredIngredients=ret;
    })

    this.ingrSelect.valueChanges.subscribe( value => {
      this.filteredIngredients=this.allIngredients.filter(ingredient => ingredient.toLowerCase().indexOf(value) === 0)
    })

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.disabled=false;
    this.ingrSelect.setValue(event.option.value);
  }

  send(){
    this.ingr.emit([this.ingrSelect.value])
  }


}
