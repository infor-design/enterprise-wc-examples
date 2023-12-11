import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredComponent } from './deferred.component';

describe('DeferredComponent', () => {
  let component: DeferredComponent;
  let fixture: ComponentFixture<DeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
