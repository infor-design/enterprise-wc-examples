import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTooltipComponent } from './ids-tooltip.component';

describe('IdsTooltipComponent', () => {
  let component: IdsTooltipComponent;
  let fixture: ComponentFixture<IdsTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
