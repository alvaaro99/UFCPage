import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFightComponent } from './result-fight.component';

describe('ResultFightComponent', () => {
  let component: ResultFightComponent;
  let fixture: ComponentFixture<ResultFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
