import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSearchResultComponent } from './ingredient-search-result.component';

describe('IngredientSearchResultComponent', () => {
  let component: IngredientSearchResultComponent;
  let fixture: ComponentFixture<IngredientSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
