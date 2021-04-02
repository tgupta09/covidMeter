import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatesComponent } from './covid-states.component';

describe('CovidStatesComponent', () => {
  let component: CovidStatesComponent;
  let fixture: ComponentFixture<CovidStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
