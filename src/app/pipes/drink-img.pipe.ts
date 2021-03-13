import { Pipe, PipeTransform } from '@angular/core';
import { drink } from '../dataModel/drink';

@Pipe({
  name: 'drinkImg'
})
export class DrinkImgPipe implements PipeTransform {

  imgMap: Map<string, string> = new Map()
      .set("Ordinary Drink", "/assets/cocktail.svg")
      .set("Cocktail", "/assets/cocktail-logo.svg")
      .set("Milk / Float / Shake", "/assets/milkshake.svg")
      .set("Other/Unknown", "/assets/cocktail-logo.svg")
      .set("Cocoa", "/assets/cocoa.svg")
      .set("Shot", "/assets/shot.svg")
      .set("Coffee / Tea", "/assets/tea.svg")
      .set("Homemade Liqueur", "/assets/cocktail.svg")
      .set("Punch / Party Drink", "/assets/cocktail-straw.svg")
      .set("Beer", "/assets/beer.svg")
      .set("Soft Drink / Soda", "/assets/soft-drink.svg");


  

  transform(value: drink, ...args: drink[]): any {
    return this.imgMap.get(value.strCategory);
  }

}
