import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatedComponent } from './truncated.component';

describe('TruncatedComponent', () => {
  let component: TruncatedComponent;
  let fixture: ComponentFixture<TruncatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruncatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruncatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
