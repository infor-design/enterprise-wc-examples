import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFooterComponent } from './example-footer.component';

describe('ExampleFooterComponent', () => {
  let component: ExampleFooterComponent;
  let fixture: ComponentFixture<ExampleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
