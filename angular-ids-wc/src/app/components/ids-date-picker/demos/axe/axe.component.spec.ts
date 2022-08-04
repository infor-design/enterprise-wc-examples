import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxeComponent } from './axe.component';

describe('AxeComponent', () => {
  let component: AxeComponent;
  let fixture: ComponentFixture<AxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
