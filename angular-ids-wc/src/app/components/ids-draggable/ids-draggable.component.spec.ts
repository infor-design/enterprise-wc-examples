import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDraggableComponent } from './ids-draggable.component';

describe('IdsDraggableComponent', () => {
  let component: IdsDraggableComponent;
  let fixture: ComponentFixture<IdsDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDraggableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
