import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableSingleComponent } from './selectable-single.component';

describe('SelectableSingleComponent', () => {
  let component: SelectableSingleComponent;
  let fixture: ComponentFixture<SelectableSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectableSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
