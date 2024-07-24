import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInboxComponent } from './example-inbox.component';

describe('ExampleInboxComponent', () => {
  let component: ExampleInboxComponent;
  let fixture: ComponentFixture<ExampleInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleInboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
