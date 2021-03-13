import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchResultComponent } from './advanced-search-result.component';

describe('AdvancedSearchResultComponent', () => {
  let component: AdvancedSearchResultComponent;
  let fixture: ComponentFixture<AdvancedSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
