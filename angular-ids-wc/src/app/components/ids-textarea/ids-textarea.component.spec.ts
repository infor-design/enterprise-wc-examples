import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTextareaComponent } from './ids-textarea.component';

describe('IdsTextareaComponent', () => {
  let component: IdsTextareaComponent;
  let fixture: ComponentFixture<IdsTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
