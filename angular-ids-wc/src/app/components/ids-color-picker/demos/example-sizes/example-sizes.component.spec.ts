import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSizesComponent } from './example-sizes.component';

describe('ExampleSizesComponent', () => {
  let component: ExampleSizesComponent;
  let fixture: ComponentFixture<ExampleSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleSizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
