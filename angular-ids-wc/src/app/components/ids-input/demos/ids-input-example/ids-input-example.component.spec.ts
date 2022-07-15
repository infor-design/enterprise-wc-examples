import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsInputExampleComponent } from './ids-input-example.component';

describe('IdsInputExampleComponent', () => {
  let component: IdsInputExampleComponent;
  let fixture: ComponentFixture<IdsInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsInputExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
