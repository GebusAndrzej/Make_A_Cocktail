import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { drink } from 'src/app/dataModel/drink';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.less']
})
export class DrinkInfoComponent implements OnInit {

  constructor(
    private http: HttpServiceService,
    private route: ActivatedRoute
  ) { }

  id:string;
  drink: drink;
  ingredients: string[];

  ngOnInit() {

   let a = this.route.params.subscribe(params => {
      this.id=params.id;
      this.getDrink();
    })
    a.unsubscribe();

    

  }

  getDrink(){
    this.http.getDrinkById(this.id)
      .subscribe(ret => {
        this.drink=ret;
        this.ingredients=this.getIngredients(ret);
      })
  }

  
  getIngredients(drink: drink){
    let regex = /^strIngredient[0-9][0-9]?$/gm;
    let regex2 = /^strMeasure[0-9][0-9]?$/gm;

    let drink_ingredients: string[]=[];
    let drink_ingredients_amount : string[]=[];

    for (const [k,v] of Object.entries(drink) ) {

      if (k.match(regex)){
        v != null? drink_ingredients.push(v): false;
      }

      if (k.match(regex2)){
        v != null? drink_ingredients_amount.push(v): false;
      }
    }

    for (let i in drink_ingredients_amount){
      drink_ingredients_amount[i]+= "  \t"+drink_ingredients[i];
    }

    return drink_ingredients_amount;
  }



}
