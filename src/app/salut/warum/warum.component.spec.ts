import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarumComponent } from './warum.component';

describe('WarumComponent', () => {
  let component: WarumComponent;
  let fixture: ComponentFixture<WarumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
