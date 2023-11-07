import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsModuleNavComponent } from './ids-module-nav.component';

describe('IdsModuleNavComponent', () => {
  let component: IdsModuleNavComponent;
  let fixture: ComponentFixture<IdsModuleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsModuleNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsModuleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
