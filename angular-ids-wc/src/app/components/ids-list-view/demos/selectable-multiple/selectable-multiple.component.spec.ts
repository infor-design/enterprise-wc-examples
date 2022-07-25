import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableMultipleComponent } from './selectable-multiple.component';

describe('SelectableMultipleComponent', () => {
  let component: SelectableMultipleComponent;
  let fixture: ComponentFixture<SelectableMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectableMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
