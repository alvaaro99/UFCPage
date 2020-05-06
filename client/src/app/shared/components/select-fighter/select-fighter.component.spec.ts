import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFighterComponent } from './select-fighter.component';

describe('SelectFighterComponent', () => {
  let component: SelectFighterComponent;
  let fixture: ComponentFixture<SelectFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
