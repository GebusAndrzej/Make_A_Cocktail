import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { drink } from 'src/app/dataModel/drink';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { concat, forkJoin, from, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-ingredient-result-screen',
  templateUrl: './ingredient-result-screen.component.html',
  styleUrls: ['./ingredient-result-screen.component.less']
})
export class IngredientResultScreenComponent implements OnInit {

  constructor(
    private http: HttpServiceService,
    private route: ActivatedRoute
    ) { }

  drinks$: Observable<drink[]>;
  params: string[];

  test: Observable<any>;

  ngOnInit() {


    this.route.params.subscribe(param => {

      this.params=param.ingredients.split(',');

      this.drinks$ = this.getDrinks(this.params);
      //console.dir(this.params);
    })

    
  }

  getDrinks(ingredients:string[]){
    return this.http.getDrinksByIngredient(ingredients).pipe(
      mergeMap( (drinks) =>{
        return from(drinks).pipe(
          mergeMap(drink => this.http.getDrinkById(drink.idDrink))
        )
      })           
    )
    .pipe(toArray())
  }
  


  filterDrinks(drinks: drink[]){
    let regex = /^strIngredient[0-9][0-9]?$/gm;
    
    let a =drinks.filter( drink => {
      let drink_ingredients: string[]=[];

      //parse ingrediens from separate fields to array
      for (const [k,v] of Object.entries(drink) ) {

        if (k.match(regex)){
          v != null? drink_ingredients.push(v): false;
        }
      }
      
      // if ( drink_ingredients.some( r => this.params.includes(r)) ){
      //   console.log("spelnia");
      //   console.log(drink_ingredients);
      // }

      console.log(drink_ingredients);
      drink_ingredients=[];
      
      return drink
    })

    //console.log(a);

    
  }
  

}
