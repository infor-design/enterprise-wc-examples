import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMultipleComponent } from './selection-multiple.component';

describe('SelectionMultipleComponent', () => {
  let component: SelectionMultipleComponent;
  let fixture: ComponentFixture<SelectionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
