import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDataLabelExampleComponent } from './ids-data-label-example.component';

describe('IdsDataLabelExampleComponent', () => {
  let component: IdsDataLabelExampleComponent;
  let fixture: ComponentFixture<IdsDataLabelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDataLabelExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDataLabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
