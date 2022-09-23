import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTagComponent } from './ids-tag.component';

describe('IdsTagComponent', () => {
  let component: IdsTagComponent;
  let fixture: ComponentFixture<IdsTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
