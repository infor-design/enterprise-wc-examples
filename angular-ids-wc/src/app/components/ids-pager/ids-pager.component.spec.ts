import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsPagerComponent } from './ids-pager.component';

describe('IdsPagerComponent', () => {
  let component: IdsPagerComponent;
  let fixture: ComponentFixture<IdsPagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsPagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
