import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepOpenComponent } from './keep-open.component';

describe('KeepOpenComponent', () => {
  let component: KeepOpenComponent;
  let fixture: ComponentFixture<KeepOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
