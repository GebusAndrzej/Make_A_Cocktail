import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.less']
})
export class SearchComponentComponent implements OnInit {

  constructor(private router: Router) { }



  ngOnInit() {
    
  }

  recieveIngredients(ingr: string[]){
    this.router.navigate(['result/',ingr.join() ]);
    
  }

  advSearch(data: any[] = [null,null,[" "," "]] ){
    this.router.navigate(['result/',data[0],data[1],data[2].join()])
  }

}
