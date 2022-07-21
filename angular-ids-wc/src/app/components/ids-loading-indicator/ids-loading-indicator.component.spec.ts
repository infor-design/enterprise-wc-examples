import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsLoadingIndicatorComponent } from './ids-loading-indicator.component';

describe('IdsLoadingIndicatorComponent', () => {
  let component: IdsLoadingIndicatorComponent;
  let fixture: ComponentFixture<IdsLoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsLoadingIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
