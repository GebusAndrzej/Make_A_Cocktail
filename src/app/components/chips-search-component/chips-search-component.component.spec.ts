import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSearchComponentComponent } from './chips-search-component.component';

describe('ChipsSearchComponentComponent', () => {
  let component: ChipsSearchComponentComponent;
  let fixture: ComponentFixture<ChipsSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
