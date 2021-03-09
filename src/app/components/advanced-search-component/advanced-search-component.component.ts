import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-advanced-search-component',
  templateUrl: './advanced-search-component.component.html',
  styleUrls: ['./advanced-search-component.component.less']
})
export class AdvancedSearchComponentComponent implements OnInit {

  constructor(private http: HttpServiceService) { }

  @Output() search = new EventEmitter<string[]>();

  name:string;

  alcocholic:string;

  allDrinkTypes: string[] = ['All'];
  drinkTypes = new FormControl();

  ngOnInit() {

    this.http.getAllDrinkTypes().subscribe(ret => {
        this.allDrinkTypes.push(...ret);

    })
  }

  send() {
    this.search.emit([this.name,this.alcocholic,this.drinkTypes.value]);
  }

}
