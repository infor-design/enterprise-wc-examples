import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMenuButtonComponent } from './ids-menu-button.component';

describe('IdsMenuButtonComponent', () => {
  let component: IdsMenuButtonComponent;
  let fixture: ComponentFixture<IdsMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
