import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsLookupExampleComponent } from './ids-lookup-example.component';

describe('IdsLookupExampleComponent', () => {
  let component: IdsLookupExampleComponent;
  let fixture: ComponentFixture<IdsLookupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsLookupExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsLookupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
