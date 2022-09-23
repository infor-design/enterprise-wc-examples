import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMaskComponent } from './ids-mask.component';

describe('IdsMaskComponent', () => {
  let component: IdsMaskComponent;
  let fixture: ComponentFixture<IdsMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
