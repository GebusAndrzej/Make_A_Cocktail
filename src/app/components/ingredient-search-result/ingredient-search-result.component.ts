import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-search-result',
  templateUrl: './ingredient-search-result.component.html',
  styleUrls: ['./ingredient-search-result.component.less']
})
export class IngredientSearchResultComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  recieveIngredients(ingr:string[]){
    this.router.navigate(['result/',ingr.join() ]);
  }

}
