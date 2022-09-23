import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissibleComponent } from './dismissible.component';

describe('DismissibleComponent', () => {
  let component: DismissibleComponent;
  let fixture: ComponentFixture<DismissibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DismissibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
