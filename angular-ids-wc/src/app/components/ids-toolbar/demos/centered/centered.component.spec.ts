import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredComponent } from './centered.component';

describe('CenteredComponent', () => {
  let component: CenteredComponent;
  let fixture: ComponentFixture<CenteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
