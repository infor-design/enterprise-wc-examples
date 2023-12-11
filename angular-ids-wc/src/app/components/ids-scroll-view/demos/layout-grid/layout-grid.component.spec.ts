import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGridComponent } from './layout-grid.component';

describe('LayoutGridComponent', () => {
  let component: LayoutGridComponent;
  let fixture: ComponentFixture<LayoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
