import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientResultScreenComponent } from './ingredient-result-screen.component';

describe('IngredientResultScreenComponent', () => {
  let component: IngredientResultScreenComponent;
  let fixture: ComponentFixture<IngredientResultScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientResultScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientResultScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
