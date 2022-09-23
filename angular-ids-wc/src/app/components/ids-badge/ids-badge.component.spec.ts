import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsBadgeComponent } from './ids-badge.component';

describe('IdsBadgeComponent', () => {
  let component: IdsBadgeComponent;
  let fixture: ComponentFixture<IdsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
