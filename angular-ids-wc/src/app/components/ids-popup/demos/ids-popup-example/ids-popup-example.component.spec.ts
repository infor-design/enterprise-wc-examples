import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsPopupExampleComponent } from './ids-popup-example.component';

describe('IdsPopupExampleComponent', () => {
  let component: IdsPopupExampleComponent;
  let fixture: ComponentFixture<IdsPopupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsPopupExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsPopupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
