import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
import { drink } from 'src/app/dataModel/drink';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-advanced-search-result',
  templateUrl: './advanced-search-result.component.html',
  styleUrls: ['./advanced-search-result.component.less']
})
export class AdvancedSearchResultComponent implements OnInit {

  constructor(
    private http:HttpServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  drinks$: Observable<drink[]>;
  drinks: drink[];

  name:string;
  alcoholic:string;
  types: string[];

  ngOnInit() {
    this.getparams();
  }

  getparams(){
    this.route.params.subscribe(params => {
      this.filter(params);
      // this.drinks$=this.http.getDrinksByName("margarita");
    }).unsubscribe();
  }

  filter(params:any){
    //console.log(params);

    if (params.name!=" "){
      this.http.getDrinksByName(params.name).subscribe( drinks => {
        this.drinks=drinks;
        this.drinks=this.alcoholicFilter(this.drinks, params.alcoholic);
        this.drinks=this.typeFilter(this.drinks, params.types.split(","));

        this.drinks$ = of(this.drinks);
      })
    }
    else{
      let a = params.alcoholic=="Both"?"Alcoholic":params.alcoholic;
      this.http.getDrinksByAlcoholic(a).subscribe( drinks => {
        this.drinks = drinks;
        this.drinks= this.typeFilter(this.drinks, params.types.split(","));

        this.drinks$ = of (this.drinks);
      })
    }


  }

  getDrinksByName(name:string){
    return this.http.getDrinksByName(name);
  }
  getDrinksByAlcoholic(a:string){
    return this.http.getDrinksByAlcoholic(a);
  }


  alcoholicFilter(drinks:drink[], alcoholic: string){
    return alcoholic=="Both"?drinks:drinks.filter(drink => drink.strAlcoholic==alcoholic);
  }

  typeFilter(drinks: drink[],types:string[]){
    return types.includes("All")?drinks:drinks.filter(drink => types.includes(drink.strCategory));
  }



  advSearch(data: any[] = [null,null,["aaa","bbb"]] ){
    //console.log(data);
    this.router.navigate(['result/',data[0],data[1],data[2].join()])
    this.getparams();
  }

}
