import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsPopupComponent } from './ids-popup.component';

describe('IdsPopupComponent', () => {
  let component: IdsPopupComponent;
  let fixture: ComponentFixture<IdsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
