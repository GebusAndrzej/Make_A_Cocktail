import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { drink } from 'src/app/dataModel/drink';
import { DrinkImgPipe } from 'src/app/pipes/drink-img.pipe';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.less']
})
export class CocktailListComponent implements OnInit {

  constructor() { }

  @Input() drinks : Observable<drink[]>;

  ngOnInit() {

  }

}
