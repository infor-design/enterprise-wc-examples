import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';

describe('IdsBreadcrumbComponent', () => {
  let component: IdsBreadcrumbComponent;
  let fixture: ComponentFixture<IdsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
