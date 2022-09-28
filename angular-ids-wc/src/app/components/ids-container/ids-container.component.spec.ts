import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsContainerComponent } from './ids-container.component';

describe('IdsContainerComponent', () => {
  let component: IdsContainerComponent;
  let fixture: ComponentFixture<IdsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
