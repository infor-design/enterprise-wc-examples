import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTriggerFieldComponent } from './ids-trigger-field.component';

describe('IdsTriggerFieldComponent', () => {
  let component: IdsTriggerFieldComponent;
  let fixture: ComponentFixture<IdsTriggerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTriggerFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTriggerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
