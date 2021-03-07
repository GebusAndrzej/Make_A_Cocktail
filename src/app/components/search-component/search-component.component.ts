import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.less']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    
  }

  recieveIngredients(ingr: string[]){
    console.dir(ingr);
  }

  advSearch(data: string[]){
    console.log(data);
  }

}
