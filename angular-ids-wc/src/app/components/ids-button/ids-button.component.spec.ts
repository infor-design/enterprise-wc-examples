import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsButtonComponent } from './ids-button.component';

describe('IdsButtonComponent', () => {
  let component: IdsButtonComponent;
  let fixture: ComponentFixture<IdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
