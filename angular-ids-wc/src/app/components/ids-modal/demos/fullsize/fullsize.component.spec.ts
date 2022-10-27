import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsizeComponent } from './fullsize.component';

describe('FullsizeComponent', () => {
  let component: FullsizeComponent;
  let fixture: ComponentFixture<FullsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullsizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
