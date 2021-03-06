import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  api = 'https://www.thecocktaildb.com/api/json/v1/1/list.php';

  getAllIngredients():Observable<any> {

    return this.http.get<any>(this.api+'?i=list').pipe(

      map(data => {
        //parse json into array of strings
        let ingredients = data.drinks.map( x => {
          return x.strIngredient1;
        })

        return ingredients;
      })
      
    )

  }

}
