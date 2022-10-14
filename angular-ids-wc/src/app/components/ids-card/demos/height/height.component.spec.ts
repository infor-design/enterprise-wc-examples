import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightComponent } from './height.component';

describe('HeightComponent', () => {
  let component: HeightComponent;
  let fixture: ComponentFixture<HeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
