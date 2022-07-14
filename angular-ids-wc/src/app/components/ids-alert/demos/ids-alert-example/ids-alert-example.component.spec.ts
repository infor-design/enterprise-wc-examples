import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAlertExampleComponent } from './ids-alert-example.component';

describe('IdsAlertExampleComponent', () => {
  let component: IdsAlertExampleComponent;
  let fixture: ComponentFixture<IdsAlertExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAlertExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAlertExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
