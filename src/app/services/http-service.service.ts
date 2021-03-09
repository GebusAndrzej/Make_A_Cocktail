import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, concat, forkJoin, from, Observable } from 'rxjs';
import { combineAll, map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators'
import { drink } from '../dataModel/drink';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  api_ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php';
  api_filter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
  api_drink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

  getAllIngredients():Observable<string[]> {

    return this.http.get<any>(this.api_ingredients+'?i=list').pipe(

      map(data => {
        //parse json into array of strings
        let ingredients = data.drinks.map( x => {
          return x.strIngredient1;
        })
        return ingredients;
      })
    )
  }

  getAllDrinkTypes():Observable<string[]>{
    return this.http.get<any>(this.api_ingredients+'?c=list').pipe(
      map(data => {
        //parse to array of strings
        let types = data.drinks.map( x => {
          return x.strCategory;
        })
        return types;
      })
    )
  }

  getDrinksByIngredient(ingredients:string[]):Observable<drink[]>{

    return this.http.get<any>(this.api_filter+`?i=${ingredients[0]}`).pipe(
      map( data => {
        let drinks:drink[];
        drinks=data.drinks.map( x => x);
        return drinks;
      })
    )
  }

  getDrinkById(id:string):Observable<drink>{
    return this.http.get<any>(this.api_drink+`?i=${id}`).pipe(
      map( data => {
        let drink:drink;
        drink=data.drinks[0];
        return drink;
      })
    )

  }

  getOneDrinkByIngredient(ingredients:string[]):Observable<drink>{

    return this.http.get<any>(this.api_filter+`?i=${ingredients[0]}`).pipe(
      map( data => {
        let drinks:drink[];
        drinks=data.drinks.map( x => x);
        return drinks[0];
      })
    )
  }

  getCombinedDrinks():Observable<any>{
    console.log("combined test");
    let b = this.http.get<any>(this.api_filter+`?i=Lemon`)
    .pipe(
      map( result => {
        let drinks = result.drinks;
        return drinks.map( drink => {
          //let v = this.getDrinkById(drink.idDrink);
          //return combineLatest(drink,v);
          return mergeMap( fulldrink => this.getDrinkById(drink.idDrink))
          //return Object.assign(drink,{"aaaa":"asdasd"})
        })
      })

      // ,switchMap( ff => {
      //   return Object.assign(ff,{'zajonc':'aaaaa'});
      // })
    )

    return b;

    // return this.http.get<any>(this.api_filter+`?i=Lemon`).pipe(
    //   mergeMap( (result:any) => {
    //     console.dir(result);
    //     return from(result.drinks).pipe(
    //       switchMap(drink => this.getDrinkById(result.drinks.idDrink))
    //     )
    //   })
    // )
  
  }



  
}
