import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';

describe('IdsThemeSwitcherComponent', () => {
  let component: IdsThemeSwitcherComponent;
  let fixture: ComponentFixture<IdsThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsThemeSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
