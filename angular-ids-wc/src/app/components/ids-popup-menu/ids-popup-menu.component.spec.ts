import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsPopupMenuComponent } from './ids-popup-menu.component';

describe('IdsPopupMenuComponent', () => {
  let component: IdsPopupMenuComponent;
  let fixture: ComponentFixture<IdsPopupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsPopupMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsPopupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
