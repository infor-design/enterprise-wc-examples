import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMenuComponent } from './ids-menu.component';

describe('IdsMenuComponent', () => {
  let component: IdsMenuComponent;
  let fixture: ComponentFixture<IdsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
