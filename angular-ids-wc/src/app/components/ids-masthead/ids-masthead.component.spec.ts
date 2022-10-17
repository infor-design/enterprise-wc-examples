import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMastheadComponent } from './ids-masthead.component';

describe('IdsMastheadComponent', () => {
  let component: IdsMastheadComponent;
  let fixture: ComponentFixture<IdsMastheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMastheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
