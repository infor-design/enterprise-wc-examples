import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedComponent } from './display-selected.component';

describe('DisplaySelectedComponent', () => {
  let component: DisplaySelectedComponent;
  let fixture: ComponentFixture<DisplaySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
