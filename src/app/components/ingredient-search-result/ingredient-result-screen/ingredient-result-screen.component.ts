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

  drinks: drink[];
  params: string[];

  test: Observable<any>;

  ngOnInit() {


    this.route.params.subscribe(param => {

      this.params=param.ingredients.split(',');

      this.getDrinks(this.params);
      //console.dir(this.params);
    })
    
  }

  getDrinks(ingredients:string[]){
    
    
    // this.http.getDrinksByIngredient(ingredients).subscribe(ret => {
    //   this.filterDrinks(ret);
    //   //this.drinks=ret;
    //   console.dir(ret);
      
    // })
    
    // this.test = this.http.getOneDrinkByIngredient(ingredients).pipe(
    //   mergeMap(drink => this.http.getDrinkById(drink.idDrink) ) 
    // );

    // this.test.subscribe(x=>{
    //   console.log("after merge");
    //   console.dir(x);
    // })


    //ostatnie dobre
    // this.http.getCombinedDrinks()
    //   .subscribe(x => console.dir(x));
    
    this.http.getDrinksByIngredient(ingredients).pipe(
      mergeMap( (drinks) =>{
        return from(drinks).pipe(
          mergeMap(drink => this.http.getDrinkById(drink.idDrink))
        )
      })
                            /*
                            mergeMap( (result) => {
                              from(result).pipe(
                                map(x => x),
                                toArray(),
                                map(drink => ({...result}))
                              )
                            } )
                            */
                            
    )
    .pipe(toArray())
    .subscribe(x => {
      console.dir(x)
    })
  }
  


  filterDrinks(drinks: drink[]){
    for (let drink of drinks){
      for (const [k,v] of Object.entries(drink) ) {
        let regex = /strType/;

      }
    }
  }
  

}
