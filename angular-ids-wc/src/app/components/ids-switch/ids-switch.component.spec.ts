import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsSwitchComponent } from './ids-switch.component';

describe('IdsSwitchComponent', () => {
  let component: IdsSwitchComponent;
  let fixture: ComponentFixture<IdsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
