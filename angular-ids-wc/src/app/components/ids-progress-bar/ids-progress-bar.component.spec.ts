import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsProgressBarComponent } from './ids-progress-bar.component';

describe('IdsProgressBarComponent', () => {
  let component: IdsProgressBarComponent;
  let fixture: ComponentFixture<IdsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
